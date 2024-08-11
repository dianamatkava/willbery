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
        'primary': '#FFFFFF',
        'transparent-block': 'rgba(255,255,255,0.09)',
        'highlight': '#12FFFF',
        'dark-bg': '#040210',
        'hides': '#302929',
        'dimmed-light': '#d4d3d7',
        'dimmed-strong': '#939298',
        'action': '#E8DEF8',
      },
      fontSize: {
        'sm': '0.85rem',
        'base': '1.25rem',
        'lg': '1.5rem',
        'xl': '2.85rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      backgroundImage: {
        "img-sm": "url('/bg-image-mob.png')",
        "img-lg": "url('/bg-image-desk.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
