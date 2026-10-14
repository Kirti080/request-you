'use strict';
const input = '  clean me  ';
function clean(value) {
  return value.trim().replace(/\s+/g, ' ');
}
function wordCount(value) {
  const cleaned = clean(value);
  return cleaned ? cleaned.split(' ').length : 0;
}
const result = { text: clean(input), words: wordCount(input) };
module.exports = { input, clean, wordCount, result };
// This module normalizes spacing in text.
// Leading and trailing whitespace is removed.
// Repeated internal whitespace becomes one space.
// wordCount uses the cleaned representation.
// Empty text correctly reports zero words.
// The input value itself is never modified.
// Regular expressions keep normalization compact.
// The result object shows both useful outputs.
// End of simple example.
