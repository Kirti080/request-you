'use strict';
const text = 'javascript makes small tools friendly';
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function title(value) {
  return value.split(' ').map(capitalize).join(' ');
}
const result = title(text);
module.exports = { text, capitalize, title, result };
// This module turns plain text into title case.
// Each word is processed by the same helper.
// The original string remains unchanged.
// Empty words are not expected in this sample.
// String methods keep the implementation readable.
// The result is calculated when the file loads.
// Callers can reuse the title function directly.
// No external dependencies are involved.
// CommonJS export supports simple require calls.
// End of simple example.
