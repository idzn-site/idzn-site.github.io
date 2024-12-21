import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   site: 'https://idzn-site.github.io',
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://lexingtonthemes.com',
  compressHTML: true,
  integrations: [sitemap()]
});