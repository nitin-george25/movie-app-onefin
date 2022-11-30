/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                title: 'Sora, sans-serif',
                sans: 'Doris, sans-serif',
            },
            fontWeight: {
                light: 200,
                normal: 300,
                medium: 400,
                bold: 500,
                'x-bold': 700,
                's-bold': 800,
            },
            backgroundColor: {
                primary: '#083d77',
                'primary-2': '#4f7c9e',
                dark: '#121212',
                light: '#ebebd3',
                'grey-1': '#e9ecef',
                'grey-2': '#ced4da',
                'accent-1': '#f4d35e',
                'accent-1-dark': '#D4C17D',
                'accent-2': '#E4572E',
                'accent-2-dark': '#e38b71',
            },
            borderColor: {
                primary: '#083d77',
                'primary-2': '#4f7c9e',
                light: '#ebebd3',
                'gray-1': '#e9ecef',
                'gray-2': '#ebebeb',
                'accent-1': '#f4d35e',
                'accent-1-dark': '#D4C17D',
                'accent-2': '#E4572E',
                'accent-2-dark': '#e38b71',
            },
            textColor: {
                primary: '#083d77',
                'primary-2': '#4f7c9e',
                light: '#ebebd3',
                gray: '#808080',
                'accent-1': '#f4d35e',
                'accent-1-dark': '#D4C17D',
                'accent-2': '#E4572E',
                'accent-2-dark': '##e38b71',
                error: '#CA054D',
                'error-dark': '#c96589',
                success: '#678D58',
            },
            borderWidth: {
                1: '1px',
            },
            width: {
                md: '5em',
                lg: '25em',
            },
            translate: {
                back: '-100%',
            },
            transitionProperty: {
                radius: 'border-radius',
                opacity: 'opacity',
            },
            height: {
                loader: '150px',
            },
            minWidth: {
                button: '5rem',
            },
        },
    },
    plugins: [],
};