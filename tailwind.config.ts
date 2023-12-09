import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          '600': '#E63946',
        },
        gray: {
          '50': '#F1FAEE',
        },
        teal: {
          '300': '#A8DADC',
        },
        blue: {
          '600': '#457B9D',
        },
        indigo: {
          '900': '#1D3557',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
