import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1426", deep: "#070B14", surface: "#111C33" },
        gold: { DEFAULT: "#C9A84C", hover: "#B8963F", dark: "#7A5F17" },
        cream: "#F6F3EC",
        light: "#F4F1E8",
        ink: "#0B1426",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px" },
      borderRadius: { btn: "6px" },
    },
  },
  plugins: [],
};

export default config;
