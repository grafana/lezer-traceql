import { parser } from "../dist/index.es.js";
import { runTestsForValidQueries, runTestsForInvalidQueries } from "../test/utils.js";

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

let caseDir = path.dirname(fileURLToPath(import.meta.url));

// TECHDEBT: remove duplication here
// TECHDEBT: simplify content of `validQueries.txt` and `invalidQueries.txt` — we can just list queries in them
for (const file of fs.readdirSync(caseDir)) {
  if (!/^validQueries\.txt$/.test(file)) continue;

  const name = /^[^\.]*/.exec(file)[0];
  describe(name, () => {
    for (const { name, run } of runTestsForValidQueries(
      fs.readFileSync(path.join(caseDir, file), "utf8"),
      file,
    )) {
      it(name, () => run(parser));
    }
  });
}

for (const file of fs.readdirSync(caseDir)) {
  if (!/^invalidQueries\.txt$/.test(file)) continue;

  const name = /^[^\.]*/.exec(file)[0];
  describe(name, () => {
    for (const { name, run } of runTestsForInvalidQueries(
      fs.readFileSync(path.join(caseDir, file), "utf8"),
      file,
    )) {
      it(name, () => run(parser));
    }
  });
}
