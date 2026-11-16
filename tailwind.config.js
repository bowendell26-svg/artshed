/**
 * Tailwind config para sa Artshed.
 *
 * Ito ang kapalit ng dating `cdn.tailwindcss.com` runtime compiler: ang CSS ay
 * binubuo na lang isang beses dito at naka-save sa static/css/tailwind.css.
 *
 * Kapag may binago o idinagdag na utility class sa templates/ o static/js/,
 * buuin muli ang CSS:
 *
 *   npx --yes tailwindcss@3.4.17 -c tailwind.config.js \
 *     -i static/css/tailwind.src.css -o static/css/tailwind.css --minify
 *
 * Ang `theme.extend` dito ay dapat kapareho ng dating inline config sa base.html.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Young Serif"', "Georgia", "serif"],
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: { brass: "#acb2b5" },
    },
  },
  plugins: [],
};
