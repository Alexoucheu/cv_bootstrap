import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        presentation: resolve(__dirname, 'src/pages/presentation.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        experiences_interests: resolve(__dirname, 'src/pages/experiences_interests.html'),
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