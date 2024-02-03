/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenL: "#91D1AE",
        greenD: "#51A276",
        yellowL: "#FFCC00",
        yelllowD: "#CF9C00",
        bergeL: "#FFEBCB",
        bergeD: "#EABF7E",
        purpleL: "#864FD4",
        PurpleD: "#301C56",
        white: "#F3F9FF",
        black: "#191919",
      },
    },
  },
  plugins: [],
};
