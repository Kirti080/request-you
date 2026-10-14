# prysta-cleaner reviewer notes

## Architecture

This is the dependency-free “Everyday” browser to-do app, served by a small Node.js server. `app.js` owns DOM event wiring and application state; `tasks.js` should contain task transformations, `storage.js` persistence, and `dom.js` rendering. The project uses native ES modules for the application and Node’s built-in test/syntax-check tooling.

## Conventions

- Require Node.js 22+ and keep the runtime dependency-free; see `package.json` and `CONTRIBUTING.md`.
- Use native ES module syntax in application code (`app.js` imports from `tasks.js`, `storage.js`, and `dom.js`); `package.json` sets `"type": "module"`.
- Keep responsibilities separated: task operations belong in `tasks.js`, local-storage handling in `storage.js`, and DOM creation in `dom.js` (`CONTRIBUTING.md`).
- Use two-space indentation and concise functional transformations such as `tasks.filter(...)` in `app.js`.
- Render user-controlled task titles with `textContent`, not HTML. `dom.js` uses `label.textContent = task.title` and constructs elements with `document.createElement`.
- Preserve accessibility: controls use semantic elements, labels connect via `htmlFor`/`id`, delete buttons have descriptive `aria-label`s, filter buttons update `aria-pressed`, and event handlers restore focus (`app.js`, `dom.js`).
- Reject whitespace-only submissions with `input.value.trim()` while preserving the entered title when creating a valid task (`app.js`).
- Persist under the `everyday-tasks` local-storage key, tolerate storage failures, and recover valid entries while skipping invalid saved entries (`README.md`, `app.js`).
- Validate JavaScript with `npm run build`, which runs `node --check` on the server and application modules; run tests with `npm test`.

## Intentional non-standard choices

- The files under `examples/` are deliberately tiny, standalone CommonJS demonstrations using `'use strict'`, `module.exports`, and no dependencies. They do not follow the application’s ES module style and should not be treated as production architecture.
- The UI intentionally delegates checkbox and delete handling from the list container rather than attaching handlers to every rendered row (`app.js`).

## Watch out for

- Do not use `innerHTML` or interpolate task titles into markup; this would violate the explicit text-rendering/XSS convention (`CONTRIBUTING.md`, `dom.js`).
- Keep persistence failure behavior non-fatal: `loadTasks()` errors should leave the app usable, while `saveTasks()` failures must surface the warning (`app.js`, `README.md`).
- Preserve focus and keyboard behavior when changing rendering or event delegation; `renderTasks()` replaces the list contents and `app.js` explicitly refocuses controls.
- `dom.js` currently contains the same `renderTasks` export repeated multiple times. Treat this as a likely defect: duplicate exported declarations can make the ES module fail syntax validation and should be reduced to one implementation.