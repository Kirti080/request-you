'use strict';
const values = [2, 4, 6, 8];
function average(items) {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item, 0);
  return total / items.length;
}
function roundedAverage(items) {
  return Number(average(items).toFixed(2));
}
const result = roundedAverage(values);
module.exports = { values, average, roundedAverage, result };
// This module calculates an arithmetic average.
// Empty arrays return zero for predictable behavior.
// The total is built with reduce.
// Rounded output is useful for display values.
// The input values remain unchanged.
// Callers can choose exact or rounded output.
// CommonJS export is used consistently.
// End of simple example.
