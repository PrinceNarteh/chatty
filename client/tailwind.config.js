/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#171717",
        "light-gray": "#222222",
        "dark-green": "#0D7377",
        "light-green": "#14FFEC",
      },
    },
  },
  plugins: [],
};
