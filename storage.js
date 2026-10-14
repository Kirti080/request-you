const STORAGE_KEY = 'everyday-tasks';

function validTask(task) {
  return Boolean(task && typeof task === 'object'
    && typeof task.id === 'string' && task.id.length > 0
    && typeof task.title === 'string' && task.title.trim().length > 0
    && task.title.length <= 200 && typeof task.completed === 'boolean');
}

export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return { tasks: [], error: false };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return { tasks: [], error: true };
    const ids = new Set();
    const tasks = parsed.filter(task => {
      if (!validTask(task) || ids.has(task.id)) return false;
      ids.add(task.id);
      return true;
    });
    return { tasks, error: tasks.length !== parsed.length };
  } catch {
    return { tasks: [], error: true };
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch {
    return false;
  }
}
