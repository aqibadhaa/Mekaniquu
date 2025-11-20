/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        petit: ["PetitRegular"],
        carattere: ["Carattere"],
        lobster: ["Lobster"],
        winskyBold: ["WinskyBold"],
        winskyLightItalic: ["WinskyLightItalic"],

      }
    },
  },
  plugins: [],
}
