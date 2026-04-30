import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        DarkGrayishBlue: "#0f172A",
        GrayishBlue: "#64748b",
        Gray: "#e1e4eb",
        LightGray: "#f7f8fa",
        Primary: "#4F88FF",
        PrimaryHover: "#1B2558",
        Yellow: "#F5B800",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      fontSize: {
        "13": ["13px", "auto"],
        "15": ["15px", "auto"],
      },
    },
  },
  plugins: [],
};
export default config;
