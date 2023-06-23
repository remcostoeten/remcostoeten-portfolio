const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn 2s ease-in forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundColor: {
                themeblue: '#2e304b',
                themered: '#fd8e8e',
                offblack: '#111215',
                offwhite: '#ebecf3',
                themegreen: '#0aff9d',
                themeorange: '#fc6d26',
            },
            colors: {
                themeblue: '#2e304b',
                themered: '#fd8e8e',
                offwhite: '#ebecf3',
                offblack: '#111215',
                themegreen: '#0aff9d',
                themeorange: '#fc6d26',
            },
            fontSize: {
                hero: '10rem',
            },
            variants: {
                extend: {
                    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover'],
                },
            },
        },
        plugins: [],
    },
};
