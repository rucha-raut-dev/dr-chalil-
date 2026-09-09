import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#16211d", paper: "#f4f2ec", sage: "#7f9a79", line: "#d8d6cd" },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], serif: ["Georgia", "Times New Roman", "serif"] }
    }
  },
  plugins: []
};
export default config;