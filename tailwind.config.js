/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f6f6f6",
        },
        gainsboro: "#d9d9d9",
        royalblue: "#5e82ff",
        darkslategray: "#43474e",
        lightseagreen: "#3fa398",
        "neutral-6": "#fff",
        "neutral-2": "#53668e",
        darkcyan: "#268a80",
        snow: "#fffbfa",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        xl: "20px",
        "6xs": "7px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq357: {
        raw: "screen and (max-width: 357px)",
      },
      mq348: {
        raw: "screen and (max-width: 348px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};