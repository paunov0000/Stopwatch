/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient1: "#274B74",
        gradient2: "#8233C5",
        gradient3: "#E963FD",
      },
    },
  },
  plugins: [],
};
