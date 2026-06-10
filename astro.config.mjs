// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://zor-neo.github.io',
	integrations: [sitemap()],
});
