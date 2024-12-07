import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#7ebdc2",
          75: "#66b2b7",
          100: "#489399",
          200: "#3b787d",
          300: "#214345",
        },
        orange: {
          100: "#bb4430",
        },
        vanilla: {
          100: "#F3DFA2",
        },
        linen: {
          100: "#EFE6DD",
          200: "#dac2ac",
        },
        "raisin-black": {
          100: "#231F20",
        },
        background: "#231F20",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
