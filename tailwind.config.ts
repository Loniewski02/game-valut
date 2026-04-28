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
        primary: "#4F88FF",
        primaryHover: "#1B2558",
        info: "#06b6d4",
        green: "#22c55e",
        orange: "#f59e0b",
        red: "#ef4444",
        bgc: "#f7f8fa",
        card: "#ffffff",
        cardInner: "#f1f3f6",
        border: "#e1e4eb",
        cardHover: "#e6ebf1",
        text: "#0f172A",
        textSec: "#64748b",
        bgcDark: "#0d1117",
        cardDark: "#161b22",
        cardInnerDark: "#1f2630",
        borderDark: "#303a45",
        cardHoverDark: "#2a313C",
        textDark: "#FAFEFF",
        textSecDark: "#FAFBFF",
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
