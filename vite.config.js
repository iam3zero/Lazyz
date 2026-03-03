import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Lazyz/", // 👈 여기에 본인의 레포지토리 이름을 넣어야 합니다! (슬래시 주의)
})