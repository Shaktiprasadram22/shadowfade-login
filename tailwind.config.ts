import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        auth: {
          card: "rgba(0, 0, 0, 0.1)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      backdropBlur: {
        auth: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
