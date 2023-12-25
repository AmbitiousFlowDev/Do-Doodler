/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e300ff",

          secondary: "#00b17a",

          accent: "#007b00",

          neutral: "#010c0c",

          "base-100": "#f1ffff",

          info: "#00e1ff",

          success: "#1bed76",

          warning: "#ff6200",

          error: "#e80027",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
