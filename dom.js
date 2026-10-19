export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    remove.type = 'button';
    remove.className = 'delete';
    remove.dataset.id = task.id;
    remove.textContent = 'Delete';
    remove.setAttribute('aria-label', `Delete ${task.title}`);
    row.append(checkbox, label, remove);
    fragment.append(row);
  }
  list.replaceChildren(fragment);
}
