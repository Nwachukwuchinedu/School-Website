/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          600: "rgba(184, 60, 31, 0.6)",
          700: "rgba(184, 60, 31, 0.7)",
          800: "rgba(184, 60, 31, 0.8)",
          900: "rgba(184, 60, 31, 0.9)",
          1000: "rgba(184, 60, 31, 1)",
        },
        green: {
          600: "rgba(3, 100, 3, 0.6)",
          700: "rgba(3, 100, 3, 0.7)",
          800: "rgba(3, 100, 3, 0.8)",
          900: "rgba(3, 100, 3, 0.9)",
          1000: "rgba(3, 100, 3, 1)",
        },
      },
    },
  },
  plugins: [],
};
