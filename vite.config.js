import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The production build is served from a project subpath on GitHub Pages
// (https://ikarudo.github.io/Hemophilia_Society_Jamaica/), so assets need
// that base. Local dev stays at the root.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Hemophilia_Society_Jamaica/' : '/',
  plugins: [react(), tailwindcss()],
}))
