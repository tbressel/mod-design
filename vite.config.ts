import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
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
    ]
  }
});