/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          from: { transform: "translateX(-100px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        myAnimation: "slideIn .5s ease-in-out both",
      },
    },
  },
  plugins: [],
};
