/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
		fontFamily: {
			'display': ['"Clash Display"', 'sans-serif']
		},
    extend: {
			backgroundImage: {
				'hero': "url('/src/assets/img/image-hero.png')"
			},
			colors: {
				'canopy': '#55634B',
			}
		},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

