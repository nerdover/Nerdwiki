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
      comfortaa: ["Comfortaa"],
    },
    extend: {
      colors,
      typography: {
        primary: {
          css: {
            "--tw-prose-body": "rgba(var(--primary), 1)",
            "--tw-prose-headings": "rgba(var(--primary), 1)",
            "--tw-prose-links": "rgba(var(--primary), 1)",
            "--tw-prose-bold": "rgba(var(--primary), 1)",
            "--tw-prose-counters": "rgba(var(--primary), 1)",
            "--tw-prose-bullets": "rgba(var(--primary), 1)",
            "--tw-prose-hr": "rgba(var(--primary-container), 1)",
            "--tw-prose-quotes": "rgba(var(--primary), 1)",
            "--tw-prose-quote-borders": "rgba(var(--primary-container), 1)",
            "--tw-prose-code": "rgba(var(--primary), 1)",
            // "--tw-prose-th-borders": #d1d5db,
            // "--tw-prose-td-borders": #e5e7eb,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
