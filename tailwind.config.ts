import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#2E3192", // Deep blue - representing TDSB
          light: "#4548B9",
          dark: "#1A1C5E",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "#FF5F6D", // Vibrant coral - creative/animation
          light: "#FF8B96",
          dark: "#D93F4C",
        },
        // Accent colors
        accent: {
          DEFAULT: "#45CAFF", // Bright blue - cyber/digital
          light: "#7DDBFF",
          dark: "#00A3E0",
        },
        // Neutral colors
        neutral: {
          50: "#F7F7F9",
          100: "#E8E8ED",
          200: "#D1D1DB",
          300: "#A1A1B3",
          400: "#69698A",
          500: "#4A4A6A",
          600: "#323248",
          700: "#252534",
          800: "#17171F",
          900: "#0C0C0F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"], // Modern, clean font for headings
        mono: ["Space Mono", "monospace"], // Tech-focused monospace font
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(69, 202, 255, 0.5)",
        soft: "0 2px 15px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        grid: "linear-gradient(to right, #1a1c5e15 1px, transparent 1px), linear-gradient(to bottom, #1a1c5e15 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
