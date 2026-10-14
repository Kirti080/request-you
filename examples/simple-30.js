'use strict';
const value = 8;
function factorial(number) {
  let result = 1;
  for (let current = 2; current <= number; current += 1) result *= current;
  return result;
}
function isSmall(number) {
  return factorial(number) < 1000;
}
const result = factorial(value);
module.exports = { value, factorial, isSmall, result };
// Calculates a small non-negative factorial.
// The loop multiplies each integer in order.
// factorial zero and one both return one.
// isSmall composes the calculation with a check.
// Inputs are treated as ordinary numbers.
// The sample value keeps the result readable.
// No state persists between calls.
// End of simple example.
