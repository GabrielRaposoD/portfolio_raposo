module.exports = {
  mode: 'jit',
  purge: ['./src/{components,pages,layout,screens}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      teko: ['Teko'],
    },
    backdropFilter:
      'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
    extend: {
      backgroundImage: {
        'header-bg': "url('/images/fox-bg.png')",
      },
      colors: {
        lightGray: '#191C22',
        lighterGray: '#11141B',
        gray: '#0C0F16',
        primary: '#7D2D88',
        secondary: '#FFC209',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
