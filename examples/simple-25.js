'use strict';
const value = 'hello';
function repeat(text, times) {
  return text.repeat(times);
}
function greeting(name) {
  return `Hello, ${name}!`;
}
const result = greeting(value);
module.exports = { value, repeat, greeting, result };
// Builds a small greeting string.
// repeat is a general text helper.
// String repeat handles the repetition.
// The source text is never changed.
// greeting adds readable punctuation.
// The sample uses a short name.
// Callers can provide other names.
// No browser APIs are needed.
// The helpers are safe to call repeatedly.
// End of simple example.
