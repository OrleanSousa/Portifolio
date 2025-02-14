/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Ordem corrigida, mas igual à sua
  theme: {
    screens:{
      ssm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
};
