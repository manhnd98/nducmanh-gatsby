module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '160': '40rem',
            },
            colors: {
                white: {
                    0: '#ffffff',
                    'alpha-40': '#fff6'
                },
                navbar: {
                    dark: '#20202380'
                }
            },
            screens: {
                'mobile': '320px',
                
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }

                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }

                'desktop': '1280px',
            }
        },

    },
    plugins: [
    ],
}
