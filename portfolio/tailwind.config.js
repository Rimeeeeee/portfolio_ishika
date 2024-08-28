/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This line is crucial for Vite projects using React, Vue, etc.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
