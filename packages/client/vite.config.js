import { defineConfig, splitVendorChunkPlugin } from 'vite';
import preact from '@preact/preset-vite';
import compress from 'vite-plugin-compression';
import Terminal from 'vite-plugin-terminal'

export default defineConfig({
  plugins: [
    preact(),
    Terminal({ console: 'terminal' }),
    splitVendorChunkPlugin(),
    compress()
  ],
  resolve: {
    alias: {
      react: 'preact/compat'
    }
  },
  root: 'src',
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/library': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true
      },
      '/spotmap': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true
      },
      '/ase': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    outDir: '../build',
    sourcemap: true
  }
});
