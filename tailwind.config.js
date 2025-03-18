/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
          light: "#CCCCCC",
          dark: "#E5E5E5",
        },
        secondary: {
          DEFAULT: "#000000",
          light: "#1A1A1A",
          dark: "#333333",
        },
        accent: {
          DEFAULT: "#FF4D4D",
          light: "#FF6666",
          dark: "#CC3D3D",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#000000",
            a: {
              color: "#000000",
              "&:hover": {
                color: "#666666",
              },
            },
            h1: {
              color: "#000000",
            },
            h2: {
              color: "#000000",
            },
            h3: {
              color: "#000000",
            },
            h4: {
              color: "#000000",
            },
            strong: {
              color: "#000000",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
