module.exports = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-display)"],
            mono: ["var(--font-mono)"],
          },
        },
      },
    },
  },
};
