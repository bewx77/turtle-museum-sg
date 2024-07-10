/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},      // Small devices (Mobile)
      'md': {'min': '641px', 'max': '991px'},  // Tablets
      'lg': {'min': '992px'},      // Desktops
    },
    extend: {},
  },
  plugins: [],
}

