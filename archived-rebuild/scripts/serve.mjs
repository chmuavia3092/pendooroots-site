// Simple static file server for serving the Astro dist/ build.
// Used to verify the build output via HTTP.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = normalize(join(__dirname, '..', 'dist'));
const PORT = Number(process.env.PORT ?? 4321);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {}
  return null;
}

async function resolvePath(urlPath) {
  const safe = normalize(urlPath).replace(/^([./\\])+/, '');
  // explicit 404
  if (safe === '404' || safe === '404/') {
    return (await tryFile(join(ROOT, '404.html'))) ?? null;
  }
  let candidate = join(ROOT, safe);
  let hit = await tryFile(candidate);
  if (hit) return hit;
  if (!extname(safe)) {
    hit = await tryFile(join(candidate, 'index.html'));
    if (hit) return hit;
  }
  hit = await tryFile(join(candidate, 'index.html'));
  if (hit) return hit;
  return null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  const path = await resolvePath(url.pathname);
  if (!path) {
    res.statusCode = 404;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>404 Not Found</h1>');
    return;
  }
  const ext = extname(path).toLowerCase();
  const mime = MIME[ext] ?? 'application/octet-stream';
  const body = await readFile(path);
  res.setHeader('content-type', mime);
  res.setHeader('cache-control', 'no-cache');
  res.end(body);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[serve] http://127.0.0.1:${PORT}/ serving ${ROOT}`);
});
