/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/user.png')",
        'bg1': "url('./src/assets/images/bg1.png')",
        'bg2': "url('./src/assets/images/bg2.png')",
      }
    },
  },
  plugins: [require("daisyui")],
})


// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });