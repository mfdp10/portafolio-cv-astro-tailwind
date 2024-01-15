import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mfdp10.github.io",
  base: "/portafolio-cv-astro-tailwind",
  integrations: [tailwind()],
});
