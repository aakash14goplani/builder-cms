import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // Regular Svelte components (not custom elements)
        customElement: false,
      },
    }),
  ],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      name: "SvelteComponents",
      fileName: (format) => `svelte-components.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["svelte", "svelte/internal"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: "Svelte",
        },
      },
    },
  },
});
