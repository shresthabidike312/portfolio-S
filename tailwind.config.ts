import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#16384f",
        gold: "#c9a24a",
        ink: "#102a3a",
        paper: "#f6f8fb"
      },
      maxWidth: { "8xl": "1200px" },
      borderRadius: { card: "20px", button: "14px", nav: "20px" },
      boxShadow: {
        soft: "0 18px 60px rgba(22,56,79,.10)",
        gold: "0 0 0 5px rgba(201,162,74,.12), 0 16px 40px rgba(22,56,79,.18)"
      }
    }
  },
  plugins: []
};
export default config;
