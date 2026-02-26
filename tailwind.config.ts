import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neu-flat': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        'neu-inset': 'inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff',
        'vivid-glow': '0 0 20px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)',
      },
      backgroundImage: {
        'vivid-gradient': 'linear-gradient(45deg, #FF0080, #7928CA, #0070F3, #00DFD8)',
      }
    },
  },
  plugins: [],
};
export default config;