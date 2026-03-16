import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { mfConfig } from "./mf.config";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  server: {
    origin: "http://localhost:3001",
    port: 3001,
  },
  base: "http://localhost:3001",
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [react(), tailwindcss(), mfConfig()],
});
