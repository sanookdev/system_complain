import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // base: "/intra_dashboard/",
    base: '/complain', // ✅ ดึงจาก .env
    plugins: [tailwindcss(), vue()],
    build: {
<<<<<<< HEAD
      outDir: "dist", // ให้ไปลงโฟลเดอร์ backend/www ตามที่ backend ใช้
=======
      outDir: "dist", // Changed to dist for PM2 deployment
>>>>>>> 595fc3ef4c0c66a7a77826b53ea7baf89b330948
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
<<<<<<< HEAD
      port: env.VITE_PROD,
=======
      port: 5059,
>>>>>>> 595fc3ef4c0c66a7a77826b53ea7baf89b330948
      host: "0.0.0.0", // 👈 เปิดให้รับทุก IP
      // port: 5050, // 👈 ใช้พอร์ตจาก .env หรือ fallback 3000
      allowedHosts: ["med.tu.ac.th"], // ✅ เพิ่ม hostname ที่อนุญาต
    },
    // test: {
    //   environment: "jsdom",
    //   globals: true,
    //   coverage: {
    //     provider: "v8",
    //     reporter: ["text", "lcov", "html"],
    //     reportsDirectory: "coverage",
    //     exclude: ["src/main.ts"],
    //   },
    // },
  };
});
