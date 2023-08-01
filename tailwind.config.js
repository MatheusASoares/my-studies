/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightGray: "hsl(212, 45%, 89%)",
      grayishBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)",
      profileBlue: "hsl(228, 45%, 44%)",
      profileBackground: "hsl(185, 75%, 39%)",
      profileDarkBlue: "hsl(229, 23%, 23%)",
      profileGrayishBlue: "hsl(227, 10%, 46%)",
      profileDarkGray: "hsl(0, 0%, 59%)",
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "3xl": "1860px",
      // => @media (min-width: 1860px) { ... }

      "4xl": "1900px",
      // => @media (min-width: 1900px) { ... }
    },
  },
  plugins: [],
};
