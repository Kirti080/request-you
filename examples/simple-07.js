'use strict';
const prices = [12, 8, 20];
function addTax(value, rate = 0.1) {
  return Number((value * (1 + rate)).toFixed(2));
}
function taxedPrices(items, rate) {
  return items.map((item) => addTax(item, rate));
}
const result = taxedPrices(prices, 0.1);
module.exports = { prices, addTax, taxedPrices, result };
// This module applies a small tax calculation.
// The rate is expressed as a decimal fraction.
// Currency rounding is limited to two decimals.
// map creates a new list of calculated prices.
// The original prices are left untouched.
// The default rate makes the helper convenient.
// Callers may provide another rate when needed.
// The sample result demonstrates normal usage.
// CommonJS keeps this example easy to load.
// End of simple example.
