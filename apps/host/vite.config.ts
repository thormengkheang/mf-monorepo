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
    origin: "http://localhost:3000",
    port: 3000,
  },
  base: "http://localhost:3000",
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [react(), tailwindcss(), mfConfig()],
});
