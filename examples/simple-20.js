'use strict';
const values = [10, 20, 30];
function toMap(items) {
  return new Map(items.map((item, index) => [index, item]));
}
function lookup(items, index) {
  return toMap(items).get(index);
}
const result = lookup(values, 1);
module.exports = { values, toMap, lookup, result };
// This module converts an array into an indexed Map.
// Each array position becomes a map key.
// lookup retrieves one value by its position.
// A new Map is created for each helper call.
// The input array remains unchanged.
// Missing indexes return undefined naturally.
// The sample result retrieves the middle value.
// The example uses only built-in language features.
// CommonJS export supports direct experimentation.
// End of simple example.
