import type { APIRoute } from 'astro';

import markdownSource from '../../content/home.ko.md?raw';

export const GET: APIRoute = () => {
  return new Response(markdownSource, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  });
};
