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
        gold: {
          DEFAULT: "#D4A843",
          light: "#F5C842",
          dark: "#A8852E",
          glow: "rgba(212,168,67,0.15)",
          muted: "rgba(212,168,67,0.08)",
          border: "rgba(212,168,67,0.18)",
          border2: "rgba(212,168,67,0.35)",
        },
        ink: {
          950: "#070910",
          900: "#0A0C10",
          800: "#0F1219",
          700: "#131825",
          600: "#161B26",
          500: "#1A2035",
          400: "#1E2540",
          300: "#242C4A",
        },
        smoke: {
          DEFAULT: "#E8EAED",
          muted: "#8A9BB0",
          faint: "#4A5568",
        },
        ruby: {
          DEFAULT: "#E53935",
          light: "#FF5252",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(212,168,67,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(229,57,53,0.05) 0%, transparent 50%)",
        "gold-gradient": "linear-gradient(135deg, #D4A843, #F5C842)",
        "card-gradient": "linear-gradient(135deg, #1A2035, #1E2540)",
        "grid-pattern":
          "linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-up-delay-1": "fadeUp 0.7s 0.15s ease forwards",
        "fade-up-delay-2": "fadeUp 0.7s 0.3s ease forwards",
        "fade-up-delay-3": "fadeUp 0.7s 0.45s ease forwards",
        "fade-up-delay-4": "fadeUp 0.7s 0.6s ease forwards",
        pulse2: "pulse2 2s infinite",
        "scroll-dot": "scrollBounce 1.5s infinite",
        "float-pulse": "floatPulse 2.5s infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.4)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(2px)" },
        },
        floatPulse: {
          "0%, 100%": { boxShadow: "0 8px 30px rgba(212,168,67,0.35)" },
          "50%": { boxShadow: "0 8px 50px rgba(212,168,67,0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 10px 40px rgba(212,168,67,0.25)",
        "gold-lg": "0 20px 60px rgba(212,168,67,0.35)",
        card: "0 4px 30px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
