const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "4rem",
        },
      },
      colors: {
        indigo: {
          100: "#e0e7ff",
          900: "#312e81",
        },
        teal: {
          500: "#14b8a6",
        },
        pink: {
          300: "#f9a8d4",
        },
        "bg-light": "linear-gradient(40deg, #edf2f7, #f9a8d4)",
        "bg-dark": "linear-gradient(40deg, #080a0f, #001120)",
      },
      transitionTimingFunction: {
        "pooreffects-ease": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "bg-light-animate": "bg-light-animate 15s infinite alternate",
        "bg-dark-animate": "bg-dark-animate 15s infinite alternate",
        "move-in-circle": "moveInCircle 20s ease infinite",
        "move-vertical": "moveVertical 30s ease infinite",
        "move-horizontal": "moveHorizontal 40s ease infinite",
        "animate-marquee": "marquee 20s linear infinite",
        "spin-slow": "spin 10s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(100%)" },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        moveInCircle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
        },
        moveVertical: {
          "0%, 100%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
        },
        moveHorizontal: {
          "0%, 100%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
        },
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        xxl: "1600px",
        xs: "475px",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "750px",
          lg: "900px",
          xl: "1100px",
          "2xl": "1200px",
        },
      },
      lineHeight: {
        extraLoose: "2.25",
      },
      letterSpacing: {
        tight: "-0.02em",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".primary-btn": {
          "@apply bg-indigo-800 text-white border-2 border-transparent hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 transition-all ease-in-out":
            {},
        },
        ".sec-btn": {
          "@apply text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300":
            {},
        },
      });
    },
  ],
  corePlugins: {
    preflight: true,
  },
};
