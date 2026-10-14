'use strict';
const queue = ['first', 'second', 'third'];
function next(items) {
  return items.length ? items[0] : undefined;
}
function rest(items) {
  return items.slice(1);
}
const result = { item: next(queue), remaining: rest(queue) };
module.exports = { queue, next, rest, result };
// This module reads the front of a simple queue.
// next returns undefined when the queue is empty.
// rest returns every item after the first one.
// slice creates a new array for remaining items.
// The original queue is not consumed or changed.
// The example uses strings for easy inspection.
// These helpers model read-only queue operations.
// No asynchronous work is involved.
// CommonJS export supports small experiments.
// End of simple example.
