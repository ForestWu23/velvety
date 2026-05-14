/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // VelvetY brand palette - sourced from /Users/shuswu/Downloads/company/homepage.md
        wine: {
          DEFAULT: '#8A2E45',
          deep: '#6E2336',
          soft: '#A8475F',
        },
        cream: {
          DEFAULT: '#FFF6F7',
          50: '#FFFCFC',
          100: '#FFF6F7',
          200: '#FDF3F5',
          300: '#FAE7EB',
          400: '#F5D6DC',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#1F1F1F',
        },
        muted: {
          DEFAULT: '#555555',
          soft: '#7A7A7A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 18px 40px -18px rgba(17, 17, 17, 0.18)',
        soft: '0 10px 30px -12px rgba(138, 46, 69, 0.18)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'marquee': 'marquee 100s linear infinite',
        'underline': 'underline 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
