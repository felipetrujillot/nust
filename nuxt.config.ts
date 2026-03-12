// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui"],
  build: {
    transpile: ["trpc-nuxt"],
  },

  nitro: {
    cloudflare: {
      nodeCompat: true,
    },
    preset: "cloudflare-module",
  },
  devtools: { enabled: true },
});
