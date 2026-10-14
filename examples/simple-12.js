'use strict';
const settings = { darkMode: true, alerts: false };
function setting(value, key, fallback = null) {
  return Object.prototype.hasOwnProperty.call(value, key) ? value[key] : fallback;
}
function summary(value) {
  return `Dark mode: ${setting(value, 'darkMode', false)}`;
}
const result = summary(settings);
module.exports = { settings, setting, summary, result };
// This module reads values safely from a settings object.
// A fallback is returned when a key is absent.
// hasOwnProperty avoids inherited properties.
// summary demonstrates a readable formatted value.
// Callers can use setting for different keys.
// The source object is never changed.
// The sample settings show boolean configuration.
// No external state is accessed.
// CommonJS export supports direct testing.
// End of simple example.
