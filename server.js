import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const DEFAULT_PORT = 3000;
function parsePort(value) {
  if (value === undefined || value.trim() === '') return DEFAULT_PORT;
  if (!/^\d+$/.test(value.trim())) return DEFAULT_PORT;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 && parsed <= 65535 ? parsed : DEFAULT_PORT;
}
const port = parsePort(process.env.PORT);
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
  try { pathname = new URL(request.url, 'http://localhost').pathname; }
  catch { response.writeHead(400).end('Invalid request URL'); return; }
  const asset = allowed.get(pathname);
  if (!asset) { response.writeHead(404).end('Not found'); return; }
  try {
    const content = await readFile(new URL(asset[0], import.meta.url));
    response.writeHead(200, { 'Content-Type': `${asset[1]}; charset=utf-8`, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch { response.writeHead(500).end('Unable to load this file'); }
});
server.on('error', error => { console.error(`Could not start server: ${error.message}`); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Everyday is running at http://localhost:${server.address().port}`));
