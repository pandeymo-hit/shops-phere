// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: { customGray: 'rgb(131, 131, 131)', },
    screens: {  'xxs':'350px',
                'xs': '400px',
                's':'500px'
      },
  },
  },
  plugins: [],
}
