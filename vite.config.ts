// Import the defineConfig function and the viteStaticCopy plugin
import { defineConfig } from 'vite';

// Import the plugin to copy static files
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Import the path module to resolve the path of the images folder
import { resolve } from 'path';

// Interract with file system to read the certificate and key
import fs from 'fs';


export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'images/*', 
          dest: 'images', 
        },
        {
          src: 'datas/*', 
          dest: 'datas', 
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: '@assets', replacement: resolve(__dirname, "images") },
      { find: '@assets', replacement: resolve(__dirname, "datas") },
    ]
  },
  server: {
    host: '192.168.4.61', 
    port: 5173, 
    open: true,
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    cssCodeSplit: true, 
  },
});