/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["nunito", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        h1: {
          fontSize: "2rem",
          margin: "0",
        },
        h2: {
          fontSize: "1.5rem",
          margin: "0",
        },
        h3: {
          fontSize: "1.25rem",
          margin: "0",
        },
        h4: {
          fontSize: "1rem",
          margin: "0",
        },
        h5: {
          fontSize: "0.85rem",
          margin: "0",
        },
        h6: {
          fontSize: "0.7rem",
          margin: "0",
        },
        img: {
          maxWidth: "100%",
          height: "auto",
        },
        ".section-title": {
          borderTop: "thin solid rgb(245, 158, 11)",
          borderBottom: "thin solid rgb(245, 158, 11)",
          margin: "2rem auto",
          padding: "0.5rem 1rem",
          width: "250px",
          textAlign: "center",
          color: "#333)",
        },
        ".modal[id|='trabajo']:target": {
          opacity: "1",
          pointerEvents: "auto",
        },
        "#slide-1:checked ~ .slides": {
          transform: "translateX(0%)",
        },
        "#slide-2:checked ~ .slides": {
          transform: "translateX(-25%)",
        },
        "#slide-3:checked ~ .slides": {
          transform: "translateX(-50%)",
        },
        "#slide-4:checked ~ .slides": {
          transform: "translateX(-75%)",
        },
        "#slide-1:checked ~ .slides-nav label#dot-1, #slide-2:checked ~ .slides-nav label#dot-2, #slide-3:checked ~ .slides-nav label#dot-3, #slide-4:checked ~ .slides-nav label#dot-4":
          {
            backgroundColor: "rgb(15, 23, 42)",
          },
        ".modal#gracias:target": {
          opacity: "1",
          pointerEvents: "auto",
        },
      });
    },
  ],
};
