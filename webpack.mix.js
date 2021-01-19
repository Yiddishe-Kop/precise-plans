let mix = require('laravel-mix');

mix.postCss('src/app.css', 'static/app.css', [
  require("tailwindcss"),
])
