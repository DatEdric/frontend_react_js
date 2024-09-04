import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Đổi 3000 thành số cổng bạn muốn
    // proxy:  'http://localhost:3000/'
  }
})
