const { test, expect } = require("@jest/globals");

test('simple', function() {
  expect("hola").toContain("ho")
})