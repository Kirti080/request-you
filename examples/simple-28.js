'use strict';
const values = [5, 10, 15];
function contains(items, target) {
  return items.some((item) => item === target);
}
function allPositive(items) {
  return items.every((item) => item > 0);
}
const result = { found: contains(values, 10), positive: allPositive(values) };
module.exports = { values, contains, allPositive, result };
// Demonstrates some and every array checks.
// contains finds one exact matching value.
// allPositive checks every numeric entry.
// Both methods leave the source array unchanged.
// The sample values are all positive.
// Results are returned as simple booleans.
// Callers can provide other arrays.
// No dependencies are required.
// The predicates return ordinary booleans.
// End of simple example.
