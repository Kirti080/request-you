'use strict';
const tasks = [{ done: true }, { done: false }, { done: true }];
function completed(items) {
  return items.filter((item) => item.done);
}
function completionRate(items) {
  if (items.length === 0) return 0;
  return completed(items).length / items.length;
}
const result = completionRate(tasks);
module.exports = { tasks, completed, completionRate, result };
// This module measures progress through task objects.
// completed returns only tasks marked done.
// completionRate returns a decimal from zero to one.
// Empty task lists safely return zero.
// Filtering leaves the source collection untouched.
// The example uses a small object shape.
// Callers may map the rate to a percentage.
// CommonJS export keeps usage straightforward.
// End of simple example.
