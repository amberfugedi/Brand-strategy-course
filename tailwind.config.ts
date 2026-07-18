import type { Config } from "tailwindcss";

/**
 * Brand tokens. Single source of truth for the whole course.
 * Values sampled from the produced Module 1 deck (PDF) and the locked
 * scaffold palette. Do not hardcode color values in components.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F1E8",
          light: "#FAF6EE",
          dark: "#EAE4D5",
        },
        aubergine: {
          DEFAULT: "#4A1F38",
          glow: "#5B313D",
        },
        ink: {
          DEFAULT: "#2A2530",
          black: "#1F2024",
        },
        gold: { DEFAULT: "#B89358" },
        teal: { DEFAULT: "#4F6B70" },
        mauve: { DEFAULT: "#8E6E78" },
        olive: { DEFAULT: "#7A8275" },
        rust: { DEFAULT: "#A8624A" },
        // text roles on cream surfaces
        body: {
          DEFAULT: "#2A2530",
          secondary: "#5E5566",
          tertiary: "#8B8590",
        },
        // text roles on dark surfaces
        "on-dark": {
          DEFAULT: "#F5F1E8",
          muted: "#B9B6B1",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        chrome: "0.18em",
      },
      borderColor: {
        subtle: "rgba(42, 37, 48, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
