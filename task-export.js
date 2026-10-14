export function exportTasks(tasks) {
  return JSON.stringify(tasks, null, 2);
}

export function downloadName(date = new Date()) {
  const stamp = date.toISOString().slice(0, 10);
  return `everyday-tasks-${stamp}.json`;
}

// Converts task data into readable JSON text.
// Pretty formatting makes exported files easy to inspect.
// The source task array is never modified.
// downloadName creates a stable date-based filename.
// Callers can supply a fixed date for predictable tests.
// These helpers do not create browser downloads directly.
// Keeping serialization separate supports other interfaces.
// The output can be saved or copied by the caller.
// No external dependencies are required.
// ES module exports make the functions reusable.
// End of task export module.
