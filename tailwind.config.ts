import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary brand green
        ink: "#0b3d2e",
        primary: "#0b3d2e",
        accent: "#0b3d2e",
        // secondary
        paper: "#ffffff",
        // light-green highlight for use on dark sections
        mint: "#5ec38c",
        muted: "#4d5f57",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "68rem",
      },
    },
  },
  plugins: [],
};

export default config;
