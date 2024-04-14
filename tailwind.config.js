/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../templates/**/*.twig',
    '../resources/js/components/**/*.vue',
  ],
  theme: {
    extend: {
            keyframes: {
              opacityPulse: {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.2 },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
              },
              rotate: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            },
            animation: {
              opacityPulse: 'opacityPulse 2s ease-in-out infinite',
              float: 'float 2s ease-in-out infinite',
              rotate: 'rotate 2s linear infinite',
            },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-app': "url('./img/bg.jpeg')",
      },
    },
  },
  plugins: [],
}
