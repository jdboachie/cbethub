import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          '100': '#03045E',
        },
        starcommandblue: {
          '100': '#0077B6',
        },
        pacificblue: {
          '100': '#00B4D8',
        },
        middleblue: {
          '100': '#90E0EF',
        },
        lightcyan: {
          '100': '#CAF0F8',
        },
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient-dark': `radial-gradient(at left top, ${theme(
          'colors.zinc.400',
        )}, 50px, ${theme('colors.zinc.800')} 50%)`,
        'vc-border-gradient-light': `radial-gradient(at left top, ${theme(
          'colors.purple.800',
        )}, 50px, ${theme('colors.pink.200')} 50%)`,
      }),

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
