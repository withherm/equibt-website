import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.equibt.com",
  output: "static",
  integrations: [sitemap()],
  adapter: cloudflare({
    imageService: "passthrough",
    inspectorPort: false,
  }),
});
