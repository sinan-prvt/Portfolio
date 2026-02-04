/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#71717a',
                accent: '#E5C100', // Gold/Yellow glow from design
                bg: '#FEFEFB',
                card: '#F8F8F7',
                muted: '#F1F1F0'
            },
            fontFamily: {
                sans: ['Inter', 'Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'fade-in-up': 'reveal 1s cubic-bezier(0.2, 0, 0.2, 1) forwards',
            }
        },
    },
    plugins: [],
}
