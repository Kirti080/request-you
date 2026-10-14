'use strict';
const email = 'person@example.com';
function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function domain(value) {
  return value.split('@')[1] || '';
}
const result = { valid: isEmail(email), host: domain(email) };
module.exports = { email, isEmail, domain, result };
// This module performs a small email shape check.
// The expression is intentionally simple and practical.
// It is not a complete email validation standard.
// domain returns the part after the at sign.
// Missing separators produce an empty domain.
// The sample value demonstrates a valid shape.
// The functions do not contact any service.
// They are useful for basic form examples.
// CommonJS export keeps the module self-contained.
// End of simple example.
