let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .scripts('resources/assets/js/custom.js', 'public/js/custom.js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('node_modules/font-awesome/fonts', 'public/fonts')
   .copy('resources/assets/images', 'public/images')
   .options({ processCssUrls: false })
   .setPublicPath('./');
