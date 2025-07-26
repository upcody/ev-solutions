/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './App.tsx'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1568px',
        },
        fontFamily: {
            jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#FFFFFF',
            black: '#000000',
            primary: '#6C54FF',
            secondary: '#1A1036',
            purple: {
                DEFAULT: '#B04AFF',
                100: '#F9F9F9',
                200: '#F4F4F4',
                300: '#E8E7EB',
                400: '#BAB7C2',
                500: '#8C879A',
                600: '#5E5772',
                700: '#3C3454',
                800: '#30274A',
                900: '#261C40',
            },
            green: {
                DEFAULT: '#31D2AC',
            },
            red: {
                DEFAULT: '#FF3A3A',
            },
            pink: {
                DEFAULT: '#FF3AC8',
            },
            yellow: {
                DEFAULT: '#FFD02C',
            },
            blue: {
                DEFAULT: '#3FCFFD',
            },
        },
        extend: {
            fontSize: {
                22: ['22px', { lineHeight: '1.26' }],
            },
            zIndex: {
                1: '1',
            },
        },
    },
    plugins: [rotateY],
};
