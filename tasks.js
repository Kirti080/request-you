export function addTask(tasks, text) {
  const title = text.trim().slice(0, 200);
  return title ? [...tasks, { id: crypto.randomUUID(), title, completed: false }] : tasks;
}
