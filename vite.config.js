import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from '/' locally and on a custom domain. The Pages workflow sets
// VITE_BASE to the project subpath (e.g. '/klingstrom-group') so assets resolve.
const raw = process.env.VITE_BASE || '/'
const base = raw.endsWith('/') ? raw : `${raw}/`

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5173,
  },
})
