# Code review

Reviewed the root JavaScript files, HTML, CSS, package configuration, and project documentation.

## Findings

1. **App startup blocker:** `storage.js` is empty. `app.js` imports `loadTasks` and `saveTasks` from it, so module loading fails before the app can render or register its controls. Confirmed by importing `app.js`: "The requested module './storage.js' does not provide an export named 'loadTasks'". Implement both persistence exports.
2. **Invalid CSS:** `styles.css` has a stray `10px 0 25px;` after the `.eyebrow` rule. This malformed text also causes the following `input, button` rule to be discarded. Replace the fragment with its intended complete rule or remove it.
3. **Request handling edge case:** `server.js` parses request URLs before its try/catch. An invalid absolute URL can throw in the async request callback and cause an unhandled rejection. Catch URL parsing failures and return HTTP 400. The URL parsing failure was reproduced in isolation; a live malformed HTTP request was not tested.
4. **Documentation mismatch:** `README.md` claims there are 21 project files, but the folder contains more. Remove the fixed count or update it.

## Verification

- `npm.cmd run build` passed: all root JavaScript files pass Node's syntax check.
- Task logic checks passed for trimming input, ignoring blank tasks, toggling without mutating the original task, filtering, and deleting.
- Reviewed HTML element IDs against the selectors in `app.js`.
- No browser interaction test was performed. Passing the syntax check does not establish that the app runs correctly.
- Existing source files were left unchanged for this review.
