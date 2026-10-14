import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const port = Number(process.env.PORT ?? 3000);
const allowed = new Map([
  ['/', ['./index.html', 'text/html']],
  ['/index.html', ['./index.html', 'text/html']],
  ['/app.js', ['./app.js', 'text/javascript']],
  ['/tasks.js', ['./tasks.js', 'text/javascript']],
  ['/storage.js', ['./storage.js', 'text/javascript']],
  ['/dom.js', ['./dom.js', 'text/javascript']],
  ['/styles.css', ['./styles.css', 'text/css']],
]);

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  let pathname;
  try {
    pathname = new URL(request.url, 'http://localhost').pathname;
  } catch {
    response.writeHead(400).end('Invalid request URL');
    return;
  }
  const asset = allowed.get(pathname);
  if (!asset) { response.writeHead(404).end('Not found'); return; }
  try {
    const content = await readFile(new URL(asset[0], import.meta.url));
    response.writeHead(200, { 'Content-Type': `${asset[1]}; charset=utf-8`, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(500).end('Unable to load this file');
  }
});
server.on('error', error => { console.error(`Could not start server: ${error.message}`); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Everyday is running at http://localhost:${server.address().port}`));
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
