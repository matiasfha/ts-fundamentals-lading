/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(99, 102, 241)",
        customSecondary: "rgb(161, 163, 247)",
        customDarkBg1: "rgb(31, 32, 35)",
        customDarkBg2: "rgb(38, 39, 43)",
        customDarkBg3: "rgb(48, 49, 54)",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
        revolver: {
          50: "#f5f4f5",
          100: "#ebe9eb",
          200: "#ccc7cd",
          300: "#ada5af",
          400: "#706274",
          500: "#331e38",
          600: "#2e1b32",
          700: "#26172a",
          800: "#1f1222",
          900: "#190f1b",
        },
      },

      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};
