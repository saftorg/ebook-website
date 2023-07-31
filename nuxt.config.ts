// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: { componentIslands: true },
  routeRules: {
    "/download": { proxy: "https://eoud52nizwd34y1.m.pipedream.net" },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    head: {
      title: "Get your free E-Book! | SAFT Apologetics",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#ffcd00",
        },
        { rel: "shortcut icon", href: "/favicon.ico" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#3445CE" },
        { name: "msapplication-Config", content: "/browserconfig.xml" },
        { name: "theme-color", content: "#3445CE" },
      ],
    },
  },

  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap",
        family: "Tenor Sans",
        class: "font-tenor-sans",
      },
      {
        src: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
        family: "Manrope",
        class: "font-manrope",
      },
    ],
  },

  modules: [
    "@hypernym/nuxt-anime",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontaine",
    "nuxt-font-loader",
    "@vueuse/nuxt",
  ],
});
