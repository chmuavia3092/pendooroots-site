import { defineConfig } from 'vite';

export const viteConfig = defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@data': '/src/data',
      '@store': '/src/store',
      '@utils': '/src/utils'
    }
  },
  optimizeDeps: {
    include: ['gsap', 'ogl']
  },
  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
          ogl: ['ogl']
        }
      }
    }
  },
  server: {
    port: 4321,
    open: true
  }
});