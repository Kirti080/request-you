export function importTasks(text) {
  try {
    const value = JSON.parse(text);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function canImport(text) {
  try {
    return Array.isArray(JSON.parse(text));
  } catch {
    return false;
  }
}

// Non-array JSON is treated as an empty import.
// Validation remains the storage layer's responsibility.
// End of task import module.
