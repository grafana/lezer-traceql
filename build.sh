#!/bin/bash
set -ex

lezer-generator src/traceql.grammar -o src/parser

cat src/parser.terms.js >> src/parser.js

bash ./generate-types.sh

rollup -c

cp ./package.json ./dist/package.json
cp ./README.md ./dist/README.md
