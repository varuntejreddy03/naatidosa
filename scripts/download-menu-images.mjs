import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const MENU_SOURCE = path.join(ROOT, 'src', 'pages', 'LandingPage.tsx');
const OUTPUT_DIR = path.join(ROOT, 'public', 'menu-images');
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';
}

async function extractMenuItems() {
  const source = await fs.readFile(MENU_SOURCE, 'utf8');
  const startToken = 'const menuCategories = {';
  const endToken = 'const LandingPage = () => {';
  const start = source.indexOf(startToken);
  const end = source.indexOf(endToken, start);

  if (start === -1 || end === -1 || end <= start) {
    throw new Error('Could not locate menuCategories block in LandingPage.tsx.');
  }

  const menuBlock = source.slice(start, end);
  const pattern = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
  const seen = new Set();
  const items = [];

  let match = pattern.exec(menuBlock);
  while (match) {
    const id = Number(match[1]);
    const name = match[2].trim();
    if (!seen.has(id)) {
      seen.add(id);
      items.push({ id, name });
    }
    match = pattern.exec(menuBlock);
  }

  if (items.length === 0) {
    throw new Error('No menu items found in LandingPage.tsx.');
  }

  return items;
}

async function fetchMealDbImage(itemName) {
  const search = encodeURIComponent(itemName);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const res = await fetch(url);
  if (!res.ok) return null;

  const data = await res.json();
  return data?.meals?.[0]?.strMealThumb || null;
}

async function fetchPexelsImage(itemName) {
  if (!PEXELS_API_KEY) return null;

  const query = encodeURIComponent(`${itemName} south indian food`);
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
  const res = await fetch(url, {
    headers: { Authorization: PEXELS_API_KEY },
  });
  if (!res.ok) return null;

  const data = await res.json();
  return data?.photos?.[0]?.src?.large || data?.photos?.[0]?.src?.medium || null;
}

function getPicsumFallback(item) {
  const seed = `${item.id}-${slugify(item.name)}`;
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/640/480`;
}

async function downloadImage(url, outputPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed ${res.status} for ${url}`);
  }

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    throw new Error(`Non-image response from ${url}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outputPath, buffer);
}

async function chooseImageSource(item) {
  try {
    const mealDb = await fetchMealDbImage(item.name);
    if (mealDb) return { provider: 'MealDB', url: mealDb };
  } catch {
    // Keep going to next source.
  }

  try {
    const pexels = await fetchPexelsImage(item.name);
    if (pexels) return { provider: 'Pexels', url: pexels };
  } catch {
    // Keep going to next source.
  }

  return { provider: 'Picsum', url: getPicsumFallback(item) };
}

async function processItem(item) {
  const outputPath = path.join(OUTPUT_DIR, `${item.id}.jpg`);
  const source = await chooseImageSource(item);
  await downloadImage(source.url, outputPath);
  return `${item.id} - ${item.name} (${source.provider})`;
}

async function runWithConcurrency(items, worker, concurrency = 5) {
  const queue = [...items];
  const results = [];

  async function runWorker() {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) continue;
      try {
        const result = await worker(item);
        results.push({ ok: true, result });
      } catch (error) {
        results.push({ ok: false, result: `${item.id} - ${item.name}: ${error.message}` });
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, runWorker));
  return results;
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const items = await extractMenuItems();
  console.log(`Found ${items.length} menu items.`);

  const validIds = new Set(items.map((item) => item.id));
  const existingFiles = await fs.readdir(OUTPUT_DIR);
  for (const file of existingFiles) {
    const match = file.match(/^(\d+)\.jpg$/i);
    if (!match) continue;
    const id = Number(match[1]);
    if (!validIds.has(id)) {
      await fs.unlink(path.join(OUTPUT_DIR, file));
    }
  }

  const results = await runWithConcurrency(items, processItem, 6);
  const success = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);

  console.log(`Downloaded ${success.length}/${items.length} images into public/menu-images.`);

  if (success.length > 0) {
    console.log('\nSample downloads:');
    success.slice(0, 10).forEach((entry) => console.log(`  - ${entry.result}`));
  }

  if (failed.length > 0) {
    console.log('\nFailed items:');
    failed.forEach((entry) => console.log(`  - ${entry.result}`));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error('Menu image download failed:', error.message);
  process.exitCode = 1;
});
