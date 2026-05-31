import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0F',
        gold: {
          50: '#FFFBF0',
          100: '#FFF3E0',
          400: '#FFD700',
          500: '#FFA500',
          600: '#FF9500',
        },
        accent: '#C41E3A',
        slate: {
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundImage: {
        'starfield': 'radial-gradient(2px 2px at 20% 30%, white, rgba(255, 255, 255, 0.2) 50%, transparent 50%), radial-gradient(2px 2px at 60% 70%, white, rgba(255, 255, 255, 0.1) 50%, transparent 50%), radial-gradient(1px 1px at 50% 50%, white, rgba(255, 255, 255, 0.2) 50%, transparent 50%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 165, 0, 0.2)',
        'gold-lg': '0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 165, 0, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'dice-roll': 'dice-roll 0.6s ease-out',
        'coin-rain': 'coin-rain 2s ease-out',
        'particle-burst': 'particle-burst 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
        'dice-roll': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(720deg) rotateY(720deg) rotateZ(720deg)' },
        },
        'coin-rain': {
          '0%': { transform: 'translateY(-100%) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        'particle-burst': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty))) scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
