import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      exclude: ["node_modules", "test"],
      reporter: ["html"],
    },
    watch: false,
  },
});
