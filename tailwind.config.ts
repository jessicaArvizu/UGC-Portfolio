import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Rocket:['var(--font-Rocket)'],
        Lexend:['var(--font-Lexend)'],
      },
      width: {
        container: '1300px',
      },
      colors: {
        lightPink: '#FFC6E7',
        mainPink: '#FF8ACD',
        lavender: '#d9beff',
        darkLavender: '#b377df',
        lightYellow: '#FFEA80',
        yellow: '#FFD567',
        orange: '#FFB587',
        darkOrange: '#FF8A50',
        mint: '#88FFD1',
        darkMint: '#2AC3A2',
        blue: '#7df9ff',
        bg: '#FFFBEE',
      },
      borderRadius: {
        base: '5px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      screens: {
        w900: { raw: '(max-width: 900px)' },
        w500: { raw: '(max-width: 500px)' },
      },
    },
  },
  plugins: [tailwindAnimate],
  darkMode: 'class',
}
export default config