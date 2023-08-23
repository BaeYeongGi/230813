import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  base: '/resume/',
  build: {
    outDir: 'dist'
  },
  plugins: [
    svgr({
      svgrOptions: {

      }
    })
  ],
  server: {
    open: 'index.html'
  },
  resolve: {
    alias: {
      src: "/src",
    }
  }
})
