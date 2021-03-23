const mix = require('laravel-mix');

mix.js('./resources/js/app.js', './public/js')
    .sass('./resources/sass/app.scss', './public/css');

mix.extend('foo', function(webpackConfig, ...args){
    console.log(webpackConfig.module.rules)

    console.log(args)
})

mix.foo('test')
