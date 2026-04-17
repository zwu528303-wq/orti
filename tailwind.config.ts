import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          card: "var(--bg-card)",
          tint: "var(--bg-card-tint)",
          quote: "var(--bg-quote)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          onDark: "var(--text-on-dark)",
        },
        accent: {
          primary: "var(--accent-primary)",
          light: "var(--accent-light)",
          bright: "var(--accent-bright)",
        },
        border: {
          soft: "var(--border-soft)",
          medium: "var(--border-medium)",
        },
      },
      borderRadius: {
        card: "14px",
        quote: "12px",
        pill: "9999px",
        soft: "10px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        cardHover: "var(--shadow-card-hover)",
      },
      fontFamily: {
        brand: ["\"just-like-heaven\"", "\"Courier New\"", "Courier", "monospace"],
        serif: [
          "\"Noto Serif SC\"",
          "\"Source Han Serif SC\"",
          "\"Playfair Display\"",
          "\"EB Garamond\"",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        content: "560px",
      },
    },
  },
  plugins: [],
};

export default config;
