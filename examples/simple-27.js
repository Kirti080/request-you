'use strict';
const value = { name: 'Ada', score: 10 };
function rename(record, name) {
  return { ...record, name };
}
function score(record) {
  return record.score || 0;
}
const result = rename(value, 'Grace');
module.exports = { value, rename, score, result };
// Copies a record while changing its name.
// Spread keeps the original object intact.
// score supplies zero for missing values.
// The helpers work with plain objects.
// The sample demonstrates immutable style.
// No mutation occurs during import.
// Callers may add other record fields.
// Built-in syntax is sufficient here.
// Missing names can be supplied by callers.
// End of simple example.
