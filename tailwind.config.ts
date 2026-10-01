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
        background: "var(--background)",
        foreground: "var(--foreground)",
        romantic: {
          bg: "#FFF7FA",
          primary: "#FF7FA8",
          primaryHover: "#FF6696",
          soft: "#FFD6E3",
          softHover: "#FFC2D4",
          cream: "#FFF3D6",
          creamHover: "#FFE8BA",
          lavender: "#E8DFFF",
          lavenderHover: "#DACCFE",
          text: "#4A3540",
          muted: "#8C6D7E",
          border: "#F5D2DF",
          card: "rgba(255, 255, 255, 0.75)",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "pulse-gentle": "pulseGentle 3s ease-in-out infinite",
        "twinkle": "twinkle 2.5s ease-in-out infinite",
        "sparkle": "sparkle 1.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGentle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        sparkle: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)", opacity: "0.7" },
          "50%": { transform: "rotate(180deg) scale(1.15)", opacity: "1" },
        },
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(255, 127, 168, 0.2)",
        romantic: "0 15px 35px -5px rgba(255, 127, 168, 0.25), 0 5px 15px rgba(0, 0, 0, 0.03)",
        glass: "0 8px 32px 0 rgba(255, 127, 168, 0.12)",
        glow: "0 0 25px rgba(255, 127, 168, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
