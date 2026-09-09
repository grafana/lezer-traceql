import assert from 'node:assert/strict';
import { parser } from '../dist/index.es.js';

function nodes(query) {
    const result = [];
    parser.parse(query).iterate({
        enter(node) {
            result.push({ name: node.name, text: query.slice(node.from, node.to), error: node.type.isError });
        },
    });
    return result;
}

describe('leading-dot decimals', () => {
    for (const query of [
        '{ span.sample > .99 }',
        '{ span.sample > -.99 }',
        '{} | avg(span.sample) > .99',
        '{} | quantile_over_time(span:duration, .99)',
        '{} | quantile_over_time(span:duration, .5, .99)',
    ]) {
        it(query, () => {
            const parsed = nodes(query);
            assert.ok(!parsed.some(node => node.error));
            assert.ok(parsed.some(node => node.name === 'Float' && node.text === '.99'));
        });
    }

    it('keeps leading-dot attributes distinct from floats', () => {
        const parsed = nodes('{ .sample > .99 && span.sample > 0.99 }');
        assert.ok(!parsed.some(node => node.error));
        assert.ok(parsed.some(node => node.name === 'Identifier' && node.text === 'sample'));
        assert.deepEqual(parsed.filter(node => node.name === 'Float').map(node => node.text), ['.99', '0.99']);
    });

    it('accepts a leading-dot duration', () => {
        const parsed = nodes('{ span:duration > .99s }');
        assert.ok(!parsed.some(node => node.error));
        assert.ok(parsed.some(node => node.name === 'Duration' && node.text === '.99s'));
    });

    for (const query of [
        '{} | quantile_over_time(span:duration, .)',
        '{} | quantile_over_time(span:duration, ..99)',
        '{} | quantile_over_time(span:duration, .99.1)',
    ]) {
        it(`rejects ${query}`, () => {
            assert.ok(nodes(query).some(node => node.error));
        });
    }
});

describe('span:childCount intrinsic', () => {
    for (const query of [
        '{ span:childCount = 0 }',
        '{ span:childCount > 10 }',
        '{} | select(span:childCount)',
        '{} | by(span:childCount)',
        '{} | max(span:childCount) > 0',
        '{ span:childCount = 0 } | quantile_over_time(span:duration, .99)',
    ]) {
        it(query, () => {
            const parsed = nodes(query);
            assert.ok(!parsed.some(node => node.error));
            assert.ok(parsed.some(node => node.name === 'IntrinsicField' && node.text === 'span:childCount'));
        });
    }

    for (const query of ['{ trace:childCount = 0 }', '{ childCount = 0 }', '{ span:childcount = 0 }']) {
        it(`rejects ${query}`, () => {
            assert.ok(nodes(query).some(node => node.error));
        });
    }
});
