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
      boxShadow: {
        premium: "0 18px 55px rgba(8, 11, 15, 0.16)",
        dark: "0 24px 70px rgba(8, 11, 15, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
