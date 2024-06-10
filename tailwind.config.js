/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
		fontFamily: {
			'display': ['"Clash Display"', 'sans-serif'],
			'satoshi': ['Satoshi', 'sans-serif'],
			'palanquin':['Palanquin Dark', 'sans-serif']
		},
    extend: {
			backgroundImage: {
				'hero': "url('/src/assets/img/image-hero.png')",
				'aboutUs': "url('/src/assets/img/tea-garden.png')"
			},
			colors: {
				'canopy': '#55634B',
				'perrywinkle': '#687D9B'
			}
		},
  },
  plugins: [],
}

