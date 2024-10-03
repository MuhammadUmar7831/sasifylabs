/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#010314",
        white: "#FFFFFFE5",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #3B0762 0%, #3C0763 14.06%, #3D0866 24.56%, #40096A 32.13%, #430A70 37.36%, #470B76 40.87%, #4C0D7E 43.26%, #510F87 45.14%, #561190 47.12%, #5C1399 49.81%, #6215A2 53.82%, #6717AC 59.75%, #6D19B5 68.21%, #721BBD 79.82%, #771CC5 95.17%, #7B1ECC 114.89%)",
      },
    },
  },
  plugins: [],
};
