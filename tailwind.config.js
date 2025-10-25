/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}'
      ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mukta)'],
        heading: ['var(--font-radio-canada)'],
      },
      colors: {
        'brand-yellow': '#F2E855',
        'brand-dark-yellow': '#EDDF0D',
        'brand-light-yellow': '#FBF8CE',
        'brand-olive': '#5E5905',
        'brand-accent': '#ED0CA6',
        'brand-light-olive': '#E2DA9A',
        'whatsapp-dark-green': '#075e54',
        'whatsapp-accent': '#25d366'
      },
    },
  },
  plugins: [],
  presets: [require('@relume_io/relume-tailwind')]
}
