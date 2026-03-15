// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
