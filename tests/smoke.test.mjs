import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const pageSource = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");

test("homepage keeps required content sections", () => {
  const requiredText = [
    "Dimitris",
    "Product Engineer",
    "Projects",
    "GitHub",
    "LinkedIn"
  ];

  for (const text of requiredText) {
    assert.ok(pageSource.includes(text), `Missing required text: ${text}`);
  }
});

test("homepage includes structured data and profile links", () => {
  assert.ok(pageSource.includes("application/ld+json"));
  assert.ok(pageSource.includes("https://github.com/dimydev"));
  assert.ok(pageSource.includes("https://linkedin.com/in/dimydev"));
});
