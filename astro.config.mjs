import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cnk-endustriyel.demo",
  compressHTML: true,
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: "auto",
  },
});
