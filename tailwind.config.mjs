/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1450px",
        xxxl: "1650px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
          xs: "100%",
          sm: "540px",
          md: "740px",
          lg: "960px",
          xl: "1140px",
          xxl: "1300px",
          xxxl : "1650px",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        xxxl: 'clamp(5rem, 10vw, 8.75rem)', // 80px - 140px (for large hero headings)
        xxl: 'clamp(3.5rem, 6vw, 4.375rem)', // 56px - 70px (for section titles)
        xl: 'clamp(1.75rem, 3vw, 2.063rem)', // 28px - 33px (for subheadings)
        lg: 'clamp(1rem, 2vw, 1.125rem)', // 16px - 18px (for body text)
      },
      borderRadius: {
        custom: "16px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        custom: ['IndianType', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
