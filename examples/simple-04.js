'use strict';
const values = [3, 7, 2, 9];
function maximum(items) {
  return Math.max(...items);
}
function minimum(items) {
  return Math.min(...items);
}
const range = maximum(values) - minimum(values);
module.exports = { values, maximum, minimum, range };
// This module finds the bounds of a number list.
// Math.max and Math.min keep the code concise.
// The range describes the distance between bounds.
// The input list is never changed.
// Empty lists are outside this simple example.
// The exported values support quick experimentation.
// The functions accept ordinary numeric arrays.
// No runtime configuration is needed.
// CommonJS export keeps usage familiar.
// End of simple example.
