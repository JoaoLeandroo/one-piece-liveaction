/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'header-color': '#150094',
        'body-color': '#000532',
        'li-fixo': '#c5cae9',
        'card-transparent': 'rgba(55, 0, 255, 0.219)'
      },
      screens: {
        'max_640': {'max': '640px'},
        'max_768': {'max': '768px'},
        'max_1024': {'max': '1024px'},
        'max_1280': {'max': '1280px'},
        'max_1536': {'max': '1536px'},
      },
      boxShadow: {
        'shadowCard': '7px 7px 7px #000000'
      }
    },
  },
  plugins: [],
}
