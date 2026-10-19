const STORAGE_KEY = 'everyday-tasks';

export function loadTasks() {
  try {
    const raw = globalThis.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return { tasks: [], error: false };
    const entries = JSON.pa
    const tasks = [];
    const ids = new Set();
    let error = false;
    for (const task of entries) {
      if (!task || typeof task.id !== 'string' || !task.id.trim() || ids.has(task.id)
        || typeof task.title !== 'string' || !task.title.trim() || task.title.length > 200
        || typeof task.completed !== 'boolean') {
        error = true;
        continue;
      }
      ids.add(task.id);
      tasks.push({ id: task.id, title: task.title, completed: task.completed });
    }
    return { tasks, error };
  } catch {
    return { tasks: [], error: true };
  }
}

export function saveTasks(tasks) {
  try {
    globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch {
    return false;
  }
}
