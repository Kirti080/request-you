'use strict';
const words = ['small', 'clear', 'useful'];
function joinWords(items, separator = ' ') {
  return items.join(separator);
}
function sentence(items) {
  return `${joinWords(items)}.`;
}
const result = sentence(words);
module.exports = { words, joinWords, sentence, result };
// This module joins words into a sentence.
// A separator can be supplied by callers.
// The default separator is one space.
// The helper does not mutate the input array.
// The returned sentence includes punctuation.
// It is suitable for small formatting tasks.
// No external packages are required here.
// CommonJS keeps loading straightforward.
// The sample data makes the module runnable.
// End of simple example.
