/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { body: ['Sora'] },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '13px',
      lg: '70px',
      full: '9999px',
      large: '12px',
    },
    extend: {
      colors: {
        black: '#121316',
        bg3: '#27292D',
        white: '#FFFFFF',
        bg2: '#191A1D',
        bg4: '#191A1D',
        bg5: '#AAAAAA',
      },
      backgroundImage: {
        'hero-pattern': "url('./../../images/hero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
