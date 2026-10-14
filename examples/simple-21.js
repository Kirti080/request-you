'use strict';
const values = [1, 2, 3];
function square(value) {
  return value * value;
}
function squares(items) {
  return items.map(square);
}
const result = squares(values);
module.exports = { values, square, squares, result };
// Squares numeric values.
// map returns a fresh array.
// The source array stays unchanged.
// square also works with one value.
// This example uses only built-in features.
// The sample result is deterministic.
// Functions are easy to reuse.
// No external state is needed.
// It is safe to call repeatedly.
// End of simple example.
