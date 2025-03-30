/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundColor: {
                'card-bg': '#111827',
                'dark-bg': '#0f1119',
            },
            colors: {
                'blue-accent': '#3b82f6',
                'gray-text': '#9ca3af',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            screens: {
                'lg': '1100px', // Custom breakpoint at 1100px
            },
        },
    },
    plugins: [],
};
