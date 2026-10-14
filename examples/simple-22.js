'use strict';
const value = 17;
function isPositive(item) {
  return item > 0;
}
function sign(item) {
  if (item === 0) return 'zero';
  return isPositive(item) ? 'positive' : 'negative';
}
const result = sign(value);
module.exports = { value, isPositive, sign, result };
// Classifies a number by its sign.
// Zero receives its own label.
// The helper keeps the condition readable.
// Input values are not changed.
// The result is a simple string.
// This file has no dependencies.
// The sample value is positive.
// Callers can pass any number.
// End of simple example.
