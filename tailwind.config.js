/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#00203fff",
        secondary: "#fc2a67",
        // secondary: "#43C6AC",
        "body-color": "#637381",
        warning: "#FBBF24",
        gradient1: "#191654",
        gradient2: "#0b8793",
        // gradient2: "#43C6AC",
        // ========================
        darkblue: "#001233",
        main: "#083346",
        subtle: "#046C95",
        deepblue: "#0196C1",
        blue: "#48B5D6",
        light: "#B3E0EE",
        red: "#fc2a67",
        beige: "#DDD0C8",
        gold: "#BFA181",
        turquoise: "#178582",
      },
      // colors: {
      //   black: "#212b36",
      //   dark: "#090E34",
      //   "dark-700": "#090e34b3",
      //   primary: "#3056D3",
      //   secondary: "#13C296",
      //   "body-color": "#637381",
      //   warning: "#FBBF24",
      // },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 30px 60px -20px #001233",
        // testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  plugins: [],
};
