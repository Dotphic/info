/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      fontFamily: {
        coolvetica: ["Coolvetica", "sans-serif"],
        sans: ["Gabarito", "Inter"],
      },
    },
  },
  plugins: [],
};
