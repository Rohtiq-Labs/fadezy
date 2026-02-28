module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "3xl": { max: "1680px" },
      "2xl": { max: "1440px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
      portrait: { raw: "(orientation: portrait)" },
      landscape: { raw: "(orientation: landscape)" },
    },
    extend: {
      fontFamily: {
        shanoy: ["shanoy", "cursive"],
        blinker: ["blinker", "sans-serif"],
        "acumin-semi-cond": ["acumin-semi-cond", "sans-serif"],
        "acumin-wide-light": ["acumin-wide-light", "sans-serif"],
        "jameel-noori-nastaleeq": ["jameel-noori-nastaleeq", "serif"],
        "noto-sans-arabic": ["Noto Sans Arabic", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          light: "var(--color-primary-light)",
        },
        accent: "var(--color-accent)",
        brand: {
          bg: "var(--color-bg)",
          "bg-alt": "var(--color-bg-alt)",
          text: "var(--color-text)",
          "text-muted": "var(--color-text-muted)",
          border: "var(--color-border)",
        },
        footer: {
          bg: "var(--color-footer-bg)",
          text: "var(--color-footer-text)",
          link: "var(--color-footer-link)",
        },
        secondary: "var(--color-text-muted)",
        "primary-dark": "var(--color-footer-bg)",
      },
      borderRadius: {
        saas: "var(--radius)",
        "saas-sm": "var(--radius-sm)",
        "saas-lg": "var(--radius-lg)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      backgroundImage: {
        "cta-gradient": "var(--color-cta-gradient)",
      },
    },
  },
  variants: {
    extend: {},
  },
};
