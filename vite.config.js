import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/SM-results/", // important for GitHub Pages when working with a subdirectory into vite project.
});

/* 
  Base not needed anymore because we are using cross env :- 
  (updated the below code into scripts in package.json after installing "cross-env": "^10.1.0",)
  "build:gh": "cross-env VITE_BASE_PATH=/SM-results/ vite build",
  "deploy": "npm run build:gh && gh-pages -d dist" 
*/

/* 
  Note: 
  -> The base option is set to "/SM-results/" to ensure that the application works correctly when deployed 
  to GitHub Pages under the specified subdirectory. 
  -> This is necessary because GitHub Pages serves the application from a subdirectory rather than the root of the domain.
  -> By setting the base option, all asset paths and routing will be correctly resolved relative to the subdirectory (SM-results), 
  it happens because the application is not hosted at the root of the domain, but rather in a subdirectory named SM-results. 
  -> This ensures that all asset paths and routing will be correctly resolved relative to the subdirectory,
  allowing the application to function properly when accessed via the GitHub Pages URL.
  -> This problem doesn't come when working with CRA (Create React App) because CRA automatically handles the base path for GitHub Pages deployments,
  but in Vite, you need to manually set the base option in the vite.config.js file to ensure correct routing and asset loading.
  -> So in vite you must add base option in vite.config.js file to ensure correct routing and asset loading when deploying to GitHub Pages
  and not using root or custom domain instead subdirectory.
 */
