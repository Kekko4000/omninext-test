/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        xl:['10px'],
      },
      fontSize: {
        base:['1rem','21.82px'],
        xs:['12px','14px'],
        '3xl': ['32px', '1.6rem'], 
      },
      colors:{
        'text-gray-900':'#112340',
        'text-purple-600':'#426BD1',
        'text-purple-800':'#2B50B0',
        'text-gray-400':'#7D8797',
        'border-purple-700':'#2B50B0',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
    },
  },
  plugins: [],
}

