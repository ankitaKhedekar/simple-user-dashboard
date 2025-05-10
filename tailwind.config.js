/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          customBlue: '#1E3A8A',
          customGreen: '#10B981',
        },
        spacing: {
          72: '18rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),  // Adding the forms plugin
    ],
  }
  