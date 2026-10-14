'use strict';
const value = 12345;
function digits(number) {
  return String(Math.abs(number)).length;
}
function isShort(number) {
  return digits(number) < 4;
}
const result = digits(value);
module.exports = { value, digits, isShort, result };
// Counts the decimal digits in a number.
// Absolute value ignores a negative sign.
// Conversion makes length available.
// isShort demonstrates a small composition.
// Zero correctly has one digit.
// The source number stays unchanged.
// The sample result is deterministic.
// No additional packages are used.
// Repeated calls return the same count.
// End of simple example.
