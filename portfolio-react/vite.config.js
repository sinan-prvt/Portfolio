import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// The home page (index.html) is a single static page with Three.js, GSAP and Lenis loaded from CDNs.
// Blog pages are plain static HTML, built as extra Vite entry points so they get real, crawlable URLs.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'blog-langgraph': resolve(__dirname, 'blog/langgraph-fastapi-ai-agent-sse/index.html'),
        'blog-django-perf': resolve(__dirname, 'blog/django-rest-api-performance-checklist/index.html'),
        'blog-hire': resolve(__dirname, 'blog/hire-freelance-django-developer/index.html'),
      },
    },
  },
})
