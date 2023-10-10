/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "primary-main-1": "#00204b",
        black: "#2d2d2d",
        salmon: "#fa7268",
      },
      spacing: {},
      fontFamily: {
        "roboto-mono": "'Roboto Mono'",
        epilogue: "Epilogue",
        poppins: "Poppins",
      },
    },
    fontSize: {
      "38xl-4": "57.4px",
      "xl-1": "20.1px",
      "4xl-7": "23.7px",
      "mid-2": "17.2px",
      "70xl-4": "89.4px",
      "25xl": "44px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
