/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
  },
};
export const plugins = [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),];

