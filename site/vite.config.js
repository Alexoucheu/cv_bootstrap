import { resolve } from 'path';

export default {
  base: './',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/index.html'),
        contact: resolve(__dirname, '/pages/contact.html'),
        experiences_interests: resolve(__dirname, '/pages/experiences_interests.html'),
        about_me: resolve(__dirname, '/pages/about_me.html'),
      },
    },
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
};