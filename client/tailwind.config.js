const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "avatar-size": "2rem",
      },
      minHeight: {
        "min-table-height": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-css-variables")({
      colors: "color",
    }),
  ],
};
