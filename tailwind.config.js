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
                }
            }
        },
        
    },
    plugins: [
    ],
}
