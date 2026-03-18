// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://mirrorcontext.ium.dev',

  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});