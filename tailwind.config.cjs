const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "pooreffects-ease": "cubic-bezier(0.645, 0.045, 0.355, 1)",
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
        "bg-light": "linear-gradient(40deg, #edf2f7, #f9a8d4)",
        "bg-dark": "linear-gradient(40deg, #080a0f, #001120)",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "bg-light-animate": "bg-light-animate 15s infinite alternate",
        "bg-dark-animate": "bg-dark-animate 15s infinite alternate",
        "move-in-circle": "moveInCircle 20s ease infinite",
        "move-vertical": "moveVertical 30s ease infinite",
        "move-horizontal": "moveHorizontal 40s ease infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
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
