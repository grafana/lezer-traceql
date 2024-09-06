import { styleTags, tags } from '@lezer/highlight';

export const traceQLHighlight = styleTags({
  LineComment: tags.comment,
  'Parent Resource Span Identifier': tags.labelName,
  IntrinsicField: tags.labelName,
  String: tags.string,
  'Integer Float Duration': tags.number,
  Static: tags.literal,
  'Aggregate AggregateExpression': tags.function(tags.keyword),
  'And Or': tags.logicOperator,
  'Gt Lt Desc Anc tilde ExperimentalOp': tags.bitwiseOperator, // structural operators
  ComparisonOp: tags.compareOperator,
  Pipe: tags.operator,
  ScalarOp: tags.arithmeticOperator,
  '( )': tags.paren,
  '[ ]': tags.squareBracket,
  '{ }': tags.brace,
  '⚠': tags.invalid,
});
