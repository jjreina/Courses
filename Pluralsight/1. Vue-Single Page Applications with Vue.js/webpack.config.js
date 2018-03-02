const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basePath = __dirname

module.exports = {

    context: path.join(basePath, 'src'),

    resolve: {
        extensions: ['.js'],
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },

    entry: {
        app: './main.js',
        vendor: [
            'vue',
        ]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /(\.js$)/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.join(basePath, "dist"),
        filename: '[name].js'
    },
    devtool: 'source-map',
    // webpack-dev-server can be used to quickly develop an application
    devServer: {
        contentBase: './dist', // Content base
        inline: true, // Enable watch and live reload
        host: 'localhost',
        port: 8082,
        stats: 'errors-only' // To show only errors in your bundle
    },
    // The plugins option is used to customize the webpack build process in a variety of ways.
    plugins: [
        // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true // Append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting.
        })
    ]
};
