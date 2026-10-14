'use strict';
const source = { a: 1, b: 2 };
function doubleValues(value) {
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, item * 2]));
}
function keys(value) {
  return Object.keys(value);
}
const result = doubleValues(source);
module.exports = { source, doubleValues, keys, result };
// This module transforms numeric object values.
// Object entries make key and value access explicit.
// A new object is returned from every transformation.
// The source object remains unchanged.
// keys provides a small companion helper.
// The sample demonstrates ordinary record data.
// Callers should provide numeric property values.
// No external dependencies are used.
// CommonJS export keeps the example portable.
// End of simple example.
