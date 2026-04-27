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
        primary: "#4f7cff",
        primaryHover: "#638eff",
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
        textDark: "#e6eaf0",
        textSecDark: "#707985",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      keyframes: {
        hide: {
          "0%": { top: "0" },
          "100%": { top: "-107px" },
        },
        show: {
          "0%": { top: "-107px" },
          "100%": { top: "0" },
        },
      },
      animation: {
        hide: "hide .3s ease-in-out forwards",
        show: "show .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
