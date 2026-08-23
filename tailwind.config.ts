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
        // Legacy brand teal (kept for backward compatibility)
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        // v2.0 Authority Colors — Medical Navy + Pharmaceutical Emerald
        authority: {
          navy: '#1E3A5F',
          'navy-light': '#2A4F80',
          'navy-50': '#EFF4FA',
          emerald: '#059669',
          'emerald-light': '#10B981',
          'emerald-50': '#ECFDF5',
          gold: '#D97706',
          'gold-50': '#FFFBEB',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.25s ease-out',
        'slideUp': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
