/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // "class" strategy: the theme toggle (Stage 3) adds/removes `dark` on <html>.
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
};
