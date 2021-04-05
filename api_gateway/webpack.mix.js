const mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-syntax-throw-expressions",
                        "@babel/plugin-proposal-throw-expressions"
                    ]
                }
            }, ]
        }, ],
    }
}).js('./resources/js/app.js', './public/js')
    .sass('./resources/sass/app.scss', './public/css');
