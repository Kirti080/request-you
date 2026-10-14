# Verification checklist

- Storage exports implemented and covered by automated tests.
- Malformed CSS fragment removed; visual checks remain below.
- Invalid request URLs return HTTP 400 in the live server test.
- Run `npm test` for storage and HTTP regression checks.
- Run `npm run build` to check JavaScript syntax.
- Start the app with `npm start` and open http://localhost:3000.
- Add, complete, filter, and delete tasks.
- Refresh and confirm saved tasks are restored.
- Verify invalid saved data and unavailable browser storage do not crash the app.
- Check keyboard controls and the layout on a narrow screen.

See code-review.md for the current findings and completed checks.
export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.dataset.id = task.id;
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.title;
    const remove = document.createElement('button');
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
export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.dataset.id = task.id;
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.title;
    const remove = document.createElement('button');
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
export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.dataset.id = task.id;
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.title;
    const remove = document.createElement('button');
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
export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.dataset.id = task.id;
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.title;
    const remove = document.createElement('button');
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
export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.dataset.id = task.id;
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.title;
    const remove = document.createElement('button');
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
