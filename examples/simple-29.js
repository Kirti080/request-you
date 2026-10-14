'use strict';
const value = 'level';
function isPalindrome(text) {
  return text === text.split('').reverse().join('');
}
function label(text) {
  return isPalindrome(text) ? 'palindrome' : 'ordinary';
}
const result = label(value);
module.exports = { value, isPalindrome, label, result };
// Checks whether text reads the same backwards.
// Splitting creates individual characters.
// Reverse builds the comparison copy.
// The original text remains unchanged.
// label converts the boolean to readable text.
// The sample word is a palindrome.
// This helper handles short strings well.
// No external library is needed.
// Case differences are treated as different text.
// End of simple example.
