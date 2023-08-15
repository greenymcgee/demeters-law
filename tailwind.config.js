/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,css}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem' } },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/aspect-ratio')],
}
