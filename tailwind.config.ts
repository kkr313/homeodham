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
        // New light theme color palette
        white: '#ffffff',
        background: '#F4F6F8',
        card: '#FFFFFF',
        // Primary Green (#2E7D32)
        primary: {
          DEFAULT: '#2E7D32',
          light: '#66BB6A',
          dark: '#1B5E20',
          hover: '#66BB6A',
        },
        // CTA/Amber (#F9A825)
        cta: {
          DEFAULT: '#F9A825',
          hover: '#FFD54F',
          light: '#FBC02D',
          dark: '#F57F17',
        },
        // Text colors
        text: {
          heading: '#2E7D32',
          body: '#2E2E2E',
          muted: '#666666',
          light: '#FFFFFF',
        },
        // Border colors
        border: {
          DEFAULT: '#E0E0E0',
          light: '#EEEEEE',
        },
        // Legacy colors (kept for compatibility)
        accent: {
          DEFAULT: '#F9A825',
          light: '#FBC02D',
          dark: '#F57F17',
        },
        premium: {
          dark: '#F4F6F8',
          darker: '#F0F2F5',
        },
        cardDark: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(46, 125, 50, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(46, 125, 50, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #2E7D32 0%, #F9A825 100%)',
        'hero-gradient': 'linear-gradient(135deg, #F4F6F8 0%, #E8EBF0 50%, #FFFFFF 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 40px rgba(46, 125, 50, 0.3)',
        'glow-lg': '0 0 60px rgba(46, 125, 50, 0.4)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
