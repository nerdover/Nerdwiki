/** @type {import('tailwindcss').Config} */

const colorWithOpacity =
  (color) =>
  ({ opacityValue }) =>
    opacityValue ? `rgba(${color}, ${opacityValue})` : `rgb(${color})`;

const colorKeys = [
  "primary",
  "on-primary",
  "secondary",
  "on-secondary",
  "tertiary",
  "on-tertiary",
  "error",
  "on-error",
  "primary-container",
  "on-primary-container",
  "secondary-container",
  "on-secondary-container",
  "tertiary-container",
  "on-tertiary-container",
  "error-container",
  "on-error-container",
  "primary-fixed",
  "primary-fixed-dim",
  "on-primary-fixed",
  "on-primary-fixed-variant",
  "secondary-fixed",
  "secondary-fixed-dim",
  "on-secondary-fixed",
  "on-secondary-fixed-variant",
  "tertiary-fixed",
  "tertiary-fixed-dim",
  "on-tertiary-fixed",
  "on-tertiary-fixed-variant",
  "surface",
  "surface-dim",
  "surface-bright",
  "surface-container",
  "surface-container-lowest",
  "surface-container-low",
  "surface-container-highest",
  "surface-container-high",
  "on-surface",
  "on-surface-variant",
  "outline",
  "outline-variant",
  "inverse-primary",
  "inverse-surface",
  "inverse-on-surface",
  "scrim",
  "shadow",
];

const colors = colorKeys.reduce((acc, key) => {
  acc[key] = colorWithOpacity(`var(--${key})`);
  return acc;
}, {});

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      'comfortaa': ['Comfortaa']
    },
    extend: {
      colors,
      typography: {
        primary: {
          css: {
            // "--tw-prose-headings": "var(--primary)",
            // "--tw-prose-body": "var(--primary)",
            // "--tw-prose-bold": "var(--primary)",
            // "--tw-prose-quotes": "var(--primary)",
            // "--tw-prose-quote-borders": "var(--primary-container)",
            maxWidth: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
