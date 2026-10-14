# prysta-cleaner reviewer notes

## Architecture

This is the dependency-free “Everyday” browser to-do app, served by a small Node.js server. `app.js` owns UI state and event handling, while `tasks.js` contains task operations, `storage.js` handles localStorage persistence, and `dom.js` renders task elements. The project uses native ES modules for the application and Node’s built-in test runner and syntax checks.

## Conventions

- Use native ES modules in application code; `package.json` sets `"type": "module"` and `app.js` imports from `./tasks.js`, `./storage.js`, and `./dom.js`.
- Keep responsibilities separated: task mutations belong in `tasks.js`, persistence in `storage.js`, and rendering in `dom.js` (`CONTRIBUTING.md`).
- Keep application code dependency-free and compatible with Node.js 22 or newer (`README.md`, `package.json`).
- Use two-space indentation and concise functional transformations such as `tasks.filter(...)` in `app.js`.
- Render user-controlled task titles with `textContent`, not HTML. `dom.js` assigns `label.textContent = task.title` and builds elements with DOM APIs.
- Preserve accessibility: controls use labels, `aria-label`, `aria-pressed`, disabled state, and explicit focus restoration (`dom.js`, `app.js`).
- Reject whitespace-only task input with `input.value.trim()` before creating a task (`app.js`).
- Persist through the storage abstraction and retain usable in-memory state when saving or loading fails (`app.js`, `README.md`).
- The standard verification commands are `npm run build` and `npm test`; the build performs `node --check` on the main server and application modules (`package.json`).
- Files under `examples/` are small standalone CommonJS demonstrations using `'use strict'`, `module.exports`, and no dependencies; do not use them as the application’s module-style convention (`examples/simple-01.js` through `simple-09.js`).

## Intentional non-standard choices

- The application deliberately uses event delegation on the task list (`app.js`) rather than attaching listeners to every rendered checkbox or delete button.
- Rendering replaces the list with a `DocumentFragment` via `replaceChildren` (`dom.js`), so DOM nodes and their per-node state are recreated after updates; focus is restored explicitly in `app.js`.
- Storage failures are non-fatal: the UI continues operating and displays a warning instead of blocking task edits (`app.js`, `README.md`).

## Watch out for

- Do not interpolate task titles into `innerHTML`; this would violate the documented XSS-safe rendering convention (`CONTRIBUTING.md`, `dom.js`).
- Preserve task IDs when changing rendering or event handling; checkbox and delete actions depend on `data-id` (`dom.js`, `app.js`).
- Ensure filter changes and mutations continue to update counts, empty-state text, pressed states, and the Clear completed button through `render()` (`app.js`).
- Treat malformed saved entries as skippable rather than discarding valid tasks (`README.md`).
- `dom.js` currently contains repeated copies of the `renderTasks` declaration. Avoid adding more duplicates; consolidate the file while preserving the single intended export.
- Do not blindly convert `examples/` to ESM or include it in application imports; its CommonJS style conflicts with the root package’s ESM setting but is explicit in those standalone examples.