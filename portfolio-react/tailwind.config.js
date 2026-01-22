/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00d4ff',
                secondary: '#7b2cbf',
                dark: '#0a0a0a',
                card: '#161616',
                muted: '#F8F8F7'
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            }
        },
    },
    plugins: [],
}
