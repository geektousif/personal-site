import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to your real domain before deploying.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
