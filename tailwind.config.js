/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-color': 'linear-gradient(249deg, #F0B5CE 0%, #8C6BAE 100%);',
        'button-color': 'linear-gradient(249deg, #7e609c 0%, #d8a2b9 100%)'
      }
    },
    screens: {
      '2xl': { max: '1635px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: '1024px' },
      // => @media (max-width: 1023px) { ... }

      'md': { max: '900px' },
      // => @media (max-width: 767px) { ... }

      'sm': { max: '600px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
}
