module.exports = {
  mode: 'jit',
  purge: ['./src/{components,pages,layout,screens}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      teko: ['Teko'],
    },
    extend: {
      backgroundImage: {
        'header-bg': "url('/images/fox-bg.png')",
      },
      colors: {
        lightGray: '#191C22',
        gray: '#0C0F16',
        primary: '#7D2D88',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
