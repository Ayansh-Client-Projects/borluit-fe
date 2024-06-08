/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
		colors: {
			'canopy': '#55634B',
		},
		fontFamily: {
			'display': ['"Clash Display"', 'sans-serif']
		},
    extend: {
			backgroundImage: {
				'hero': "url('/src/assets/img/image-hero.png')"
			}
		},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

