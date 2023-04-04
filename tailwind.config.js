/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/App.tsx",
    "./src/index.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      "name": "typescript-plugin-styled-components"
    }
  ],
};

