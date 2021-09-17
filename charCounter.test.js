const { test, expect, beforeAll, afterAll, beforeEach, afterEach } = require('@jest/globals')
const charCounter = require('./charCounter')

// se ejecuta una vez al principio
beforeAll(() => {
  console.log("beforeAll")
})

// se ejecuta una vez al final
afterAll(() => {
  console.log("afterAll")
})

// se ejecuta antes de cada prueba
beforeEach(() => {
  console.log("beforeEach")
})

// se ejecuta después de cada prueba
afterEach(() => {
  console.log("afterEach")
})

jest.setTimeout(10000)

describe('charCounter', function() {
  // Happy Path
  test('counts the number of characters', function() {
    // validaciones (assertions)
    expect(charCounter("hola")).toBe(4)
    expect(charCounter("HO LA")).toBe(5)
  })

  // Casos extremos
  test('returns 0 if string is empty', function() {
    expect(charCounter("")).toBe(0) // assertion
  })

  test('counts empty spaces', function() {
    expect(charCounter("        ")).toBe(8) // assertion
  })

  test('returns 0 if string is null or undefined', function() {
    expect(charCounter()).toBe(0)
  })

  test('async code (callbacks)', function(done) {
    setTimeout(function() {
      done()
    }, 5000)
  })

  test('async code (promises)', async function() {
    await new Promise(resolve => {
      setTimeout(function() {
        resolve()
      }, 5000)
    })
    
    expect(3+1).toBe(4)
  })
})

// Caso que no debería por nada del mundo fallar.
// Casos borde (edge cases).