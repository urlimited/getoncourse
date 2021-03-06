const mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-syntax-throw-expressions",
                            "@babel/plugin-proposal-throw-expressions"
                        ]
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }
}).js('./resources/js/app.js', './public/js')
    .sass('./resources/sass/app.scss', './public/css');
