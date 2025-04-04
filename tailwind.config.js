/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-reverse-slow': 'spin-reverse 10s linear infinite',
            },
            keyframes: {
                'spin-reverse': {
                    '0%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
        },
    },
    plugins: [],
} 