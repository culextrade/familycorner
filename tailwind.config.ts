import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Islamic elegance + Feminine touch
                emerald: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                rose: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                },
                cream: {
                    50: '#fefdfb',
                    100: '#fef9f3',
                    200: '#fdf3e7',
                    300: '#fbebd5',
                    400: '#f8ddb8',
                    500: '#f5cf9b',
                    600: '#e5a853',
                    700: '#c4812d',
                    800: '#9d6524',
                    900: '#7d511d',
                },
            },
            fontFamily: {
                playfair: ['var(--font-playfair)', 'serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'islamic-pattern': "url('/images/islamic-pattern.svg')",
            },
        },
    },
    plugins: [],
};

export default config;
