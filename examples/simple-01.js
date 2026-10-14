'use strict';
const numbers = [1, 2, 3, 4, 5];
function total(items) {
  return items.reduce((sum, item) => sum + item, 0);
}
function describe(items) {
  return `Total: ${total(items)}`;
}
const result = describe(numbers);
module.exports = { numbers, total, describe, result };
// This module demonstrates a small total helper.
// It keeps the data local and easy to inspect.
// The exported result is useful in quick examples.
// Array reduction avoids a manual counting loop.
// The function accepts any numeric array.
// Keeping the helper pure makes it reusable.
// The descriptive wrapper returns readable text.
// CommonJS export matches the existing project style.
// This file intentionally remains dependency free.
// End of simple example.
