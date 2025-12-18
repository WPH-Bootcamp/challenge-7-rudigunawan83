/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Default body font
        body: ["Quicksand", "sans-serif"],

        // Display / heading font
        display: ["Quicksand", "sans-serif"],

        // Utility khusus (opsional)
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
