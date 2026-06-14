import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#071626",
          850: "#0A1E31",
          800: "#0C2438",
          700: "#15364F",
        },
        navy: "#0C2236",
        accent: {
          DEFAULT: "#C9A24B",
          600: "#846B22",
          100: "#F3ECD9",
        },
        mist: "#F4F7F9",
        line: "#E4EAEF",
        muted: {
          DEFAULT: "#56646F",
          2: "#8493A0",
          d: "#9FB2C2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1140px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
