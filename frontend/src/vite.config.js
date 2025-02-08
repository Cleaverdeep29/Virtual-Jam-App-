import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Assuming Vue is used; adjust if using React or another framework

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Set the port for the development server
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: '../dist', // Output directory for the build
  },
});
