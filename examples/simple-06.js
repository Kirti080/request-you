'use strict';
const items = ['book', 'lamp', 'desk', 'pen'];
function count(items) {
  return items.length;
}
function hasItem(items, wanted) {
  return items.includes(wanted);
}
const itemCount = count(items);
module.exports = { items, count, hasItem, itemCount };
// This module provides two basic list helpers.
// Count reports how many entries are present.
// hasItem checks for an exact value match.
// Array includes handles the membership test.
// Neither helper changes the supplied list.
// The sample list keeps the behavior obvious.
// Results can be inspected after requiring it.
// The code works with arrays of simple values.
// No setup or configuration is required.
// End of simple example.
