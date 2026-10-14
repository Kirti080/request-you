'use strict';
const user = { name: 'Ada', role: 'builder' };
function formatUser(value) {
  return `${value.name} is a ${value.role}.`;
}
function isComplete(value) {
  return Boolean(value.name && value.role);
}
const summary = formatUser(user);
module.exports = { user, formatUser, isComplete, summary };
// This module formats a small user object.
// It also checks that required fields exist.
// Boolean conversion keeps the check explicit.
// The formatter expects name and role properties.
// The sample object demonstrates the shape.
// Functions remain independent and easy to test.
// There are no side effects during import.
// The summary is calculated for convenience.
// CommonJS export matches the project scripts.
// End of simple example.
