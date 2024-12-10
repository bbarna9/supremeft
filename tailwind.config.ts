import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#C78F44",
        dark: "#070707",
        dark1: "#141414",
        dark2: "#212121",
        dark3: "#444444",
      },
      boxShadow: {
        customBottom: "0px 30px 60px -100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
