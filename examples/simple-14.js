'use strict';
const date = new Date('2026-01-15T10:30:00Z');
function iso(value) {
  return value.toISOString();
}
function year(value) {
  return value.getUTCFullYear();
}
const result = { text: iso(date), year: year(date) };
module.exports = { date, iso, year, result };
// This module exposes two small date helpers.
// iso returns a stable machine-readable string.
// year reads the UTC calendar year explicitly.
// A fixed date keeps the sample deterministic.
// The Date object is not modified by either helper.
// UTC methods avoid local timezone surprises.
// The result object shows both outputs together.
// This example needs no date library.
// CommonJS export supports quick inspection.
// End of simple example.
