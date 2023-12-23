/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {screens: {
    sm: '375px',
    md: '768px',
    lg: '1200px',
    xl: '1440px',
  },
    extend: {
      colors: {
        primary: '#6B3CC9',
        
        // secondary: {
        //   100: '#E2E2D5',
        //   200: '#888883',
        // }
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

