import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import IconSpritePlugin from './plugins/vite-plugin-icon-sprite.js';
 
export default defineConfig({
   base: '/FrontMarketPlace/',
  plugins: [react(), IconSpritePlugin() ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})