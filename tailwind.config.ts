import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#E6EBF2",
          100: "#C2CCDB",
          200: "#94A4BD",
          300: "#667D9F",
          400: "#3D5A85",
          500: "#1B3A66",
          600: "#0B1F3A",
          700: "#091830",
          800: "#061122",
          900: "#040B16",
        },
        ice: "#F4F8FB",
        cherry: {
          DEFAULT: "#C8102E",
          50: "#FBE7EB",
          100: "#F4BFC8",
          500: "#C8102E",
          600: "#A50D26",
          700: "#82091E",
        },
        steel: "#3A4A5C",
        frost: "#A9D6E5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontVariantNumeric: {
        tabular: "tabular-nums",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(11, 31, 58, 0.12)",
        cardHover: "0 12px 32px -8px rgba(11, 31, 58, 0.18)",
      },
      maxWidth: {
        prose: "72ch",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
