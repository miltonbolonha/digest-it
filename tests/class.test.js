const { test } = require("node:test");
const assert = require("node:assert");
const DigestIt = require("../src/index.js");

test("DigestIt new Class initialize method", (t) => {
  const message = "Welcome to DigestIt!";
  const instance = new DigestIt(message);

  console.log = function (loggedMessage) {
    assert.strictEqual(loggedMessage, `Initialization complete: ${message}`);
  };

  instance.initialize(message);
});
