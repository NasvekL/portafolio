import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT)|| 8080,
    allowedHosts: ['healthcheck.railway.app', 'https://portafolio-production-52e5.up.railway.app/', 'portafolio-production-52e5.up.railway.app', 'portafolio-atqp.onrender.com'],
  },
})