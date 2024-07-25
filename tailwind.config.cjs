/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "pooreffects-ease": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        300: "300ms",
      },
      colors: {
        indigo: {
          100: "rgb(224 231 255)",
          900: "rgb(49 46 129)",
        },
        teal: {
          500: "rgb(20 184 166)",
        },
        pink: {
          300: "rgb(249 168 212)",
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
