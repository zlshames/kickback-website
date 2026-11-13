import { defineConfig } from 'astro/config';

// Set `site` to the real domain once the product name is final (used for canonical URLs).
export default defineConfig({
  site: 'https://getkickback.app',
  server: { port: 4321 },
});
