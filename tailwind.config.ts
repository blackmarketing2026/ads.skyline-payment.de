import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(8 11 15 / <alpha-value>)",
        charcoal: "#11151C",
        graphite: "#171B22",
        gold: "#C99432",
        "gold-light": "#D8AA50",
        paper: "#F7F7F5",
        line: "#EDEDED",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(8, 11, 15, 0.06)",
        premium: "0 18px 55px rgba(8, 11, 15, 0.16)",
        dark: "0 24px 70px rgba(8, 11, 15, 0.35)",
        lift: "0 24px 48px -12px rgba(8, 11, 15, 0.28)",
        glow: "0 0 0 1px rgba(201, 148, 50, 0.16), 0 18px 40px -12px rgba(201, 148, 50, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
