// This script builds all custom elements and outputs them in a format
// ready for direct use in non-Svelte applications

import { execSync } from "child_process";

console.log("Building Svelte Custom Elements...");

// Run the build command with the elements configuration
try {
  execSync("vite build --config vite.config.elements.js", { stdio: "inherit" });

  console.log("Custom Elements build complete!");
  console.log("Output available in: dist/elements/");
} catch (error) {
  console.error("Error building custom elements:", error);
  process.exit(1);
}
