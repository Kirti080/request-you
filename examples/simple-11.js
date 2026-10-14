'use strict';
const names = ['Ada', 'Lin', 'Sam'];
function initials(items) {
  return items.map((item) => item.charAt(0).toUpperCase());
}
function initialString(items) {
  return initials(items).join('');
}
const result = initialString(names);
module.exports = { names, initials, initialString, result };
// This module extracts initials from names.
// Each first character is normalized to uppercase.
// The array output preserves the original order.
// initialString combines the letters into one value.
// Empty names produce an empty character.
// The sample names show the intended input shape.
// No mutation occurs during transformation.
// The helpers can support labels or codes.
// CommonJS keeps the file directly importable.
// End of simple example.
