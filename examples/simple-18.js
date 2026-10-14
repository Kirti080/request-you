'use strict';
const colors = ['red', 'green', 'blue'];
function reverse(items) {
  return [...items].reverse();
}
function first(items) {
  return items[0];
}
const result = { first: first(colors), reversed: reverse(colors) };
module.exports = { colors, reverse, first, result };
// This module reads and reverses a color list.
// The spread operator copies before reversing.
// That copy protects the original ordering.
// first returns the first available color.
// Empty arrays return undefined for first.
// The sample values make results easy to see.
// Both helpers work with any array values.
// No state is shared between calls.
// CommonJS export keeps the example easy to require.
// End of simple example.
