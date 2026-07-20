import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("the GitHub Pages artifact is complete and static", () => {
  assert.ok(existsSync("dist/index.html"));
  assert.ok(existsSync("dist/CNAME"));
  assert.ok(existsSync("dist/.nojekyll"));
  assert.ok(existsSync("dist/distribution/agent.txt"));

  const html = readFileSync("dist/index.html", "utf8");
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /CompanyOS/);
  assert.doesNotMatch(html, /\/api\//);
});
