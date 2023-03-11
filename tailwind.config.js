/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      BlueBlack: "#183451",
      LightYellow: "#F8E3B3",
      Peach: "#F8A370",
      DarkRose: "#70313A",
      MurkyBrown: "#522B27",
      ForestGreen: "#216152",
      DarkGreen: "#124D51",
      primary: "#181107",
      primary_dark: "#110a02",
      primary_light: "#4b4233",
      secondary: "#346751",
      secondary_dark: "#1a4533",
      secondary_light: "#4c9576",
      accent: "#c84b31",
      accent_dark: "#8b220c",
      accent_light: "#ff522e",
      highlight: "#ecdbba",
      highlight_dark: "#95876c",
      highlight_light: "#ffe6b9",
    },
    extend: {
      fontFamily: {
        ZenDots: ["ZenDots"],
      },
      backgroundImage: {
        hero: "url('~/assets/images/imagination.jpg')",
        newsLetter: "url('~/assets/images/newsletter.png')",
        adventure: "url('~/assets/images/adventure.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
