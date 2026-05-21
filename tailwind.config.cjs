module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        matte: '#000000',
        glossy: '#0f0f0f',
        'dark-ash': '#141414',
        silver: '#cfcfcf'
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.02) inset'
      }
    }
  },
  plugins: []
}
