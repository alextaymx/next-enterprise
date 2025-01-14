/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#eff6ff",
        //   100: "#dbeafe",
        //   200: "#bfdbfe",
        //   300: "#93c5fd",
        //   400: "#60a5fa",
        //   500: "#3b82f6",
        //   600: "#2563eb",
        //   700: "#1d4ed8",
        //   800: "#1e40af",
        //   900: "#1e3a8a",
        // },
        // accent: {
        //   // gray color
        //   DEFAULT: "#4b5563",
        // },
      },
      fontFamily: {
        body: [
          "var(--font-montserrat-regular)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "var(--font-montserrat-regular)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        agustina: ["var(--font-agustina)"],
        splash: ["var(--font-splash)"],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14213D",

          secondary: "#6E6E6E",

          accent: "#FCA311",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#118ab2",

          success: "#06d6a0",

          warning: "#ffd166",

          error: "#ef476f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
