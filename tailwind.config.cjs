const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
      },
      keyframes: {
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
