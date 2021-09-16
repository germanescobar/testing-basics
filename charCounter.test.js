const { test, expect, it } = require('@jest/globals')
const { equal } = require('assert')
const charCounter = require('./charCounter')

test('counts the number of characters', function() {
  // preparación de la prueba ()
  const count = charCounter("hola")

  // validaciones (assertions)
  expect(count).toBe(4)
})

// test
it('returns 0 if string is empty', function() {
  expect(charCounter("")).toBe(0) // assertion
})