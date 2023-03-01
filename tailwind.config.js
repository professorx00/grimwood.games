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
      BlueBlack: "#0E1822",
      LightYellow: "#F8E3B3",
      Peach: "#F8A370",
      DarkRose: "#70313A",
      MurkyBrown: "#522B27",
      ForestGreen: "#216152",
      DarkGreen: "#124D51",
    },
    extend: {},
  },
  plugins: [],
};
