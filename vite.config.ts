import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import * as path from "path";
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        viteStaticCopy({
          targets: [
            {
              src: './images',
              dest: './',
            },
          ],
        }),
      ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      { find: '@assets', replacement: resolve(__dirname, "./images") },
    ]
  }
});