import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    docsRepo: "https://github.com/zackchu/zack-docs",
    docsDir: "docs",
    editLink: true,
  }),

  title: "Zack's Documents",
  description: "Many docs and demos",
});
