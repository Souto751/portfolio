import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#111827',
          panel: '#1F2937',
          border: '#374151',
        },
        ink: {
          DEFAULT: '#F9FAFB',
        },
        pixel: {
          green: '#22C55E',
          blue: '#3B82F6',
          red: '#EF4444',
          yellow: '#FACC15',
        },
      },
      fontFamily: {
        pixel: ['var(--font-press-start)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        pixel: '4px 4px 0 0 rgba(0,0,0,0.45)',
        'pixel-sm': '2px 2px 0 0 rgba(0,0,0,0.45)',
        glow: '0 0 12px 2px currentColor',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'pixel-pop': {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 4s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'pixel-pop': 'pixel-pop 0.2s ease-out',
      },
      backgroundImage: {
        'pixel-noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23000' fill-opacity='0'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
