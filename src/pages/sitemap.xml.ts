// sitemap.xml, built from the pages in this folder. Utility pages (404, /join, /remote) are left out.
import type { APIRoute } from 'astro';

const skip = new Set(['404', 'join', 'remote']);
const pages = Object.keys(import.meta.glob('./*.astro'))
  .map((f) => f.replace(/^\.\/|\.astro$/g, ''))
  .filter((name) => !skip.has(name))
  .map((name) => (name === 'index' ? '/' : `/${name}/`))
  .sort();

export const GET: APIRoute = ({ site }) => {
  const urls = pages.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
