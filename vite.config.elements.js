import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // Compile as custom elements
        customElement: true,
      },
    }),
  ],
  build: {
    outDir: "dist/elements",
    lib: {
      entry: "src/elements/index.ts",
      name: "SvelteElements",
      fileName: (format) => `svelte-elements.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        globals: {},
      },
    },
  },
});
