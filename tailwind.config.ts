import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-100': '#E7E6FB',
                'primary-200': '#DAD8F7',
                'primary-300': '#C2BFF4',
                'primary-500': '#8E87FA',
                'primary-700': '#6D67D0',
                'primary-800': '#6660C8',
                'secondary-500': '#87EBCD',
            },
            backgroundImage: {
                'primary-gradient':
                    'linear-gradient(220.94deg, #8E87FA 14.43%, #6D67D0 85.28%)',
                'hero-pattern': "url('/assets/imgs/hero-pattern.png')",
            },
        },
    },
    plugins: [],
}

export default config
