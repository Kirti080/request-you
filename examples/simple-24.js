'use strict';
const value = 42;
function clamp(number, minimum, maximum) {
  return Math.min(Math.max(number, minimum), maximum);
}
function percentage(number) {
  return clamp(number, 0, 100);
}
const result = percentage(value);
module.exports = { value, clamp, percentage, result };
// Keeps numbers inside a chosen range.
// clamp handles both boundaries.
// percentage specializes the range to zero through one hundred.
// The input number is not mutated.
// Math helpers keep the code compact.
// The sample value remains unchanged.
// Callers may provide custom limits.
// No external state is accessed.
// Boundary values are kept unchanged.
// End of simple example.
