import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#221013",
        "background-light": "#f8f6f6",
        "primary": "#ec1337",
        "neutral-900": "#2d1b1e",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #4a1a21 0deg, #221013 180deg, #4a1a21 360deg)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;

