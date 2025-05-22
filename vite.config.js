import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WorkinV_CommunityBridges/' // 👈 change this to your repo name
})
