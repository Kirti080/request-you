'use strict';
const items = ['a', 'b', 'a', 'c'];
function unique(values) {
  return [...new Set(values)];
}
function uniqueCount(values) {
  return unique(values).length;
}
const result = unique(items);
module.exports = { items, unique, uniqueCount, result };
// Removes duplicate values from an array.
// Set preserves first-seen order.
// A new array is returned to callers.
// The original list remains unchanged.
// uniqueCount reports distinct entries.
// This example supports primitive values.
// No package is required.
// The sample includes one duplicate.
// Repeated calls return equivalent arrays.
// End of simple example.
