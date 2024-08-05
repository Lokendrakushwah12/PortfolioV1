/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xm: { max: "480px" },
      md: { min: "768px" },
    },
    extend: {
      backdropBlur: {
        none: 'none',
        sm: '0.411522633744856px',
        md: '1.646090534979424px',
        lg: '3.7037037037037033px',
        xl: '6.584362139917696px',
        '2xl': '10.288065843621402px',
        '3xl': '14.814814814814813px',
        '4xl': '20.164609053497944px',
        '5xl': '26.337448559670783px',
        '6xl': '33.333333333333336px',
      },
      maskImage: {
        'gradient-1': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%)',
        'gradient-2': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 30%)',
        'gradient-3': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 40%)',
        'gradient-4': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 50%)',
        'gradient-5': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 60%)',
        'gradient-6': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 70%)',
        'gradient-7': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 80%)',
        'gradient-8': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 90%)',
        'gradient-9': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%)',
        'gradient-10': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 1) 100%)',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // Add custom plugins here if needed
  ],
};
