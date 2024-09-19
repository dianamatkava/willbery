/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      borderRadius: {},
      screens: {
        xlg: "1300px",
        xxlg: "1600px",
        "grid-sm": "800px",
        "grid-md": "930px",
        "grid-lg": "1150px",
      },
      colors: {
        white: "#fff",
        "border-brand-default": "#2c2c2c",
        "text-brand-secondary": "#444",
        dimgray: {
          100: "#646464",
          200: "#535353",
        },
        darkslategray: "#303030",
        black: "#303030",
        gainsboro: {
          100: "#e8e8e8",
          200: "#e7e7e7",
          300: "#d9d9d9",
        },
        whitesmoke: {
          100: "#e8ece8",
          200: "#e9e9e9",
        },
        darkgray: {
          100: "#b4b4b4",
          200: "#b2b2b2",
        },
        "text-brand-on-brand": "#f5f5f5",
        "miscellaneous-floating-tab-pill-fill": "#fff",
      },
      spacing: {
        "space-200": "8px",
        "space-300": "12px",
      },
      fontFamily: {
        mono: "Mono",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xsm: "0.75rem",
      xs: "0.75rem",
      xxs: "0.625rem",
      xxxs: "0.55rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
