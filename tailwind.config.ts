import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        destructive: 'hsl(var(--destructive))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsl(var(--hero-start)), hsl(var(--hero-end)))',
        'gradient-dance': 'linear-gradient(90deg, hsl(var(--dance-1)), hsl(var(--dance-2)), hsl(var(--dance-3)), hsl(var(--dance-4)))',
        'gradient-fun': 'linear-gradient(135deg, hsl(var(--fun-start)), hsl(var(--fun-end)))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-in': 'fade-in 600ms ease 1 both',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      boxShadow: {
        pop: '0 10px 0 rgba(0,0,0,0.15)',
        glow: '0 0 30px rgba(255, 105, 180, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;


