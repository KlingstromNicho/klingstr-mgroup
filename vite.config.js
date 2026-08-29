import fs from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A custom domain (public/CNAME) is served from the root. Without one, a GitHub
// Pages project site lives at /<repo>/, which the workflow passes as VITE_BASE.
// Reading the CNAME here avoids a chicken-and-egg on the first deploy, where
// Pages does not yet know the domain and would report the project subpath.
const hasCustomDomain = fs.existsSync(new URL('./public/CNAME', import.meta.url))
const raw = hasCustomDomain ? '/' : process.env.VITE_BASE || '/'
const base = raw.endsWith('/') ? raw : `${raw}/`

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5173,
  },
})
