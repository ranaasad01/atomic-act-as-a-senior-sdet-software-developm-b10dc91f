import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0f0f1a",
          50: "#1a1a2e",
          100: "#16213e",
          200: "#0f3460",
        },
        slate: {
          surface: "#1e293b",
          border: "#334155",
          muted: "#94a3b8",
          light: "#cbd5e1",
        },
        green: {
          success: "#10b981",
          glow: "#34d399",
          dim: "#064e3b",
        },
        amber: {
          exec: "#f59e0b",
          dim: "#78350f",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "Consolas", "Monaco", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse_green: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(16,185,129,0)" },
        },
        slideRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 8px rgba(16,185,129,0.6)" },
          "50%": { textShadow: "0 0 20px rgba(16,185,129,1)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
        pulse_green: "pulse_green 2s ease-in-out infinite",
        slideRight: "slideRight 1.5s ease-in-out forwards",
        glow: "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.05) 0%, transparent 50%)",
      },
      backgroundSize: {
        "grid-size": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
