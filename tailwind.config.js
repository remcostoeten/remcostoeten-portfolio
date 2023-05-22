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
			gradientColorStops: {
				'yellow-red': ['#F59E0B', '#EF4444'],
				'pink-purple': ['#8B5CF6', '#EC4899'],
			},
			zIndex: {
				'-1': '-1',
			},

			padding: {
				xxs: '0.125rem', //8px'
				small: '0.1875rem', //12px
				regular: '0.0625rem', //16px
				medium: '0.09375rem', //24px
				large: '0.125rem', //32px
				hero: '15%',
			},
			backgroundColor: {
				primary: '#eb5939',
				heroBg: 'rgba(255,255,255,0.1)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			textColor: {
				offWhite: '#e4e7ec',
				offBlack: '#202328',
				lightPink: '#FFD2BF',
				primary: '#eb5939',
			},
			fontSize: {
				10: '0.625rem',
				12: '0.75rem',
				14: '0.875rem',
				16: '1rem',
				18: '1.125rem',
				32: '2rem',
				34: '2.125rem',
				36: '2rem',
				hero: '127px',
			},
			lineHeight: {
				hero: '117px',
			},
		},
	},
	plugins: [],
};
