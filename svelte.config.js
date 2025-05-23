import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  // enable runtime checks when not in production
  compilerOptions: {
    dev: process.env.NODE_ENV !== "production",
  },

  // Preprocessor configuration for TypeScript
  preprocess: vitePreprocess(),

  // Options passed to the Svelte compiler
  kit: {
    // Default directory for components
    files: {
      lib: "src/lib",
    },
  },
};
