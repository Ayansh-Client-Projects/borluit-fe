/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
		fontFamily: {
			'jost': ['"Jost"', 'sans-serif'],
			'satoshi': ['Satoshi', 'sans-serif'],
			'palanquin':['Palanquin Dark', 'sans-serif']
		},
    extend: {
			backgroundImage: {
				'hero': "url('/src/assets/img/image-hero.png')",
				'teaBag': "url('/src/assets/img/tea.png')",
				'teaLeavesBlack': "url('/src/assets/img/tea-leaves-black.png')",
				'teaLeavesGreen': "url('/src/assets/img/tea-leaves-green.png')",
			},
			colors: {
				'canopy': '#55634B',
				'perrywinkle': '#687D9B',
				'wine': '#694451',
				'honey': '#C1892C'
			}
		},
  },
  plugins: [],
}

