const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      "section-container section": {
        rounded: "lg",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "purple-bento-100": "hsl(254, 88%, 90%)",
        "purple-bento-500": "hsl(256, 67%, 59%)",
        "yellow-bento-100": "hsl(31, 66%, 93%)",
        "yellow-bento-500": "hsl(39, 100%, 71%)",
      },
    },
  },
  plugins: [],
};
