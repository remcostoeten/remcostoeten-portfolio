/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			backgroundColor: {
				themeblue: '#2e304b',
				themered: '#fd8e8e',
			},
			colors: {
				themeblue: '#2e304b',
				themered: '#fd8e8e',
			},
			fontSize: {
				hero: '10rem',
			},
		},
		plugins: [],
	},
};
