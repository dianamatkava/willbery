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
        xs: "600px", // For smaller devices
        sm: "768px", // Standard small breakpoint
        md: "900px", // Adjusted for mid-size devices
        lg: "1150px", // For larger screens
        xlg: "1300px", // Extra-large screens
        xxlg: "1600px", // For very wide screens
        "grid-sm": "768px", // Matches the `sm` breakpoint
        "grid-md": "930px", // Ensures consistency with `md`
        "grid-lg": "1150px", // Matches the `lg` breakpoint
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
        realblack: "black",
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
      lg: "1.125rem",
      xlg: "1.25rem",
      sm: "0.875rem",
      xsm: "0.8rem",
      xs: "0.75rem",
      xxs: "0.625rem",
      xxxs: "0.55rem",
      inherit: "inherit",
    },
  },
};
