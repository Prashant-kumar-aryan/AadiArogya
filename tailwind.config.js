const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        customGreen: "rgb(135, 174, 46)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
