import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/WorkinV_CommunityBridges/",// 👈 change this to your repo name
})
