/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["SpaceGrotesk"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
  ],
};
