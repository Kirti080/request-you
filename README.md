# Everyday

A simple to-do app built with HTML, CSS, and JavaScript. No dependencies are required.

Use Node.js 22 or newer. Run `npm start` and open http://localhost:3000.
The optional `PORT` environment variable accepts decimal integers from 0 to 65535.
It defaults to 3000; use 0 to select an available port, printed at startup.
Invalid values stop startup with a clear error.
Run `npm run build` for syntax checks and `npm test` for automated tests.

Tasks are saved in this browser under the `everyday-tasks` local storage key.
If storage is unavailable, the app remains usable and displays a warning.
Invalid saved entries are skipped while valid tasks are recovered.
