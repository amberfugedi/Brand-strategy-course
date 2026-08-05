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
        // Brand system per the course slide spec (amberfugedi.com).
        cream: {
          DEFAULT: "#FDF9F5",
          light: "#FFFFFF", // cards and boxes sitting on cream
          dark: "#F3ECE3",
        },
        // Plum family: dark slides follow the course card, not the band.
        aubergine: {
          DEFAULT: "#2E2633",
          glow: "#312836",
        },
        ink: {
          DEFAULT: "#2E2A27",
          black: "#2E2633",
        },
        // Courses accent pair. gold resolves per surface: courses-deep
        // #8A5A14 on cream, butter #DDB774 on plum (see globals.css).
        gold: { DEFAULT: "rgb(var(--gold) / <alpha-value>)" },
        peach: { DEFAULT: "#FCE4C4" },
        butter: { DEFAULT: "#FBEDBF" },
        // Layer tones, dark surfaces only. On cream they collapse to
        // the neutral courses accent (the layer rule); on plum they
        // resolve to found/chosen/remembered mid-tones.
        teal: { DEFAULT: "rgb(var(--tone-found) / <alpha-value>)" },
        rust: { DEFAULT: "rgb(var(--tone-chosen) / <alpha-value>)" },
        olive: { DEFAULT: "rgb(var(--tone-remembered) / <alpha-value>)" },
        mauve: { DEFAULT: "rgb(var(--tone-muted) / <alpha-value>)" },
        // text roles on cream surfaces
        body: {
          DEFAULT: "#3E3833",
          secondary: "#5C544B",
          tertiary: "#5C544B",
        },
        // text roles on dark surfaces
        "on-dark": {
          DEFAULT: "#D9D2C9",
          muted: "#9A9098",
        },
      },
      fontFamily: {
        sans: ["Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.08em",
        chrome: "0.08em",
      },
      borderColor: {
        subtle: "rgba(46, 42, 39, 0.12)",
        "subtle-dark": "rgba(253, 249, 245, 0.14)",
      },
      boxShadow: {
        lift: "0 14px 40px -18px rgba(46, 42, 39, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
