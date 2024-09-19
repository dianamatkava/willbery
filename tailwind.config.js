/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      screens: {
        xlg: "1200px",
        xxlg: "1400px",
        md: "725px",
        lg: "900px",
      },
      colors: {
        white: "#fff",
        "border-brand-default": "#2c2c2c",
        "text-brand-secondary": "#444",
        gainsboro: "#e8e8e8",
        dimgray: {
          100: "#646464",
          200: "#535353",
        },
        "text-brand-on-brand": "#f5f5f5",
        darkslategray: "#303030",
        black: "#303030",
      },
      spacing: {
        "space-200": "8px",
        "space-300": "12px",
      },
      fontFamily: {
        mono: "Mono",
      },
      borderRadius: {
        "8xs": "5px",
        "radius-200": "8px",
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
