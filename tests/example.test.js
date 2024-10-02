// // tests/example.test.js
// import { test } from "node:test";
// import assert from "node:assert";
// import { add } from "../index.js";

// test("função add", async (t) => {
//   assert.strictEqual(add(1, 2), 3);
// });

// tests/example.test.js

const { test } = require("node:test");
const assert = require("node:assert");
const DigestIt = require("../src/index.js");

test("DigestIt class add method", (t) => {
  const instance = new DigestIt(1, 2);
  assert.strictEqual(instance.add(), 3);
});
