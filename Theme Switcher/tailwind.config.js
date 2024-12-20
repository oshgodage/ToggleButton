/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "light-theme": "url('/images/light.jpg')",
      "dark-theme": "url('/images/dark.jpg')",
    },
  },
  plugins: [],
};
