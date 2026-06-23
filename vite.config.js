import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false }),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["**/*.{webp,woff2,svg}"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,woff2,svg}"],
        navigateFallbackDenylist: [
          /^\/wp-admin/,
          /^\/wp-json/,
          /^\/wp-login\.php/,
          /^\/wp-content/,
          /^\/wp-includes/,
        ],
        runtimeCaching: [
          {
            urlPattern: /\.(?:webp|png|jpg|jpeg|svg)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /\.(?:js|css|woff2)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
            },
          },
        ],
      },
    }),
  ],
});