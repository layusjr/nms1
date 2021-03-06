/* eslint-disable no-undef */
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (mix.inProduction()) {
  mix.js('resources/js/app.js', 'public/js')
    .react()
    .extract()
    .sourceMaps()
    .version();
} else {
  mix.js('resources/js/app.js', 'public/js')
    .react()
    .extract()
    .sourceMaps();
}
