/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
                      'coffee-pattern': "url('/public/images/Backgrounds/coffee-pattern.jpg')",
                })
    },
    screens: {
      'mobile': '300px',
      // => @media (min-width: 100px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
