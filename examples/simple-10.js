'use strict';
const numbers = [1, 2, 3, 4, 5, 6];
function evens(items) {
  return items.filter((item) => item % 2 === 0);
}
function odds(items) {
  return items.filter((item) => item % 2 !== 0);
}
const result = { even: evens(numbers), odd: odds(numbers) };
module.exports = { numbers, evens, odds, result };
// This module separates even and odd numbers.
// filter creates independent result arrays.
// The modulo operator identifies each group.
// The original number list stays unchanged.
// Both helpers accept any numeric array.
// The sample result makes the behavior visible.
// The functions are small enough to reuse elsewhere.
// No package installation is needed.
// CommonJS export matches the other examples.
// End of simple example.
