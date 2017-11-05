'use strict'
var webpack = require('webpack');
// The path module provides utilities for working with file and directory paths.
var path = require('path');
// Simplifies creation of HTML files to serve your webpack bundles
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// Pug in to use lodash library
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// The directory name of the current module
var basePath = __dirname;

// Export the configuration to be read using CLI. E.g npm start.
module.exports = {
    // context: The base directory (absolute path!) for resolving the entry option
    // path.join: Method joins all given path segments together using the platform specific separator as a delimiter
    context: path.join(basePath, "src"),
    // Configure how modules are resolved.
    resolve: {
        // Automatically resolve certain extensions in this case js and jsx.
        extensions: ['.js', '.jsx']
    },
    // The entry point for the bundle.
    entry: {
        // App entry point.
        app: './main.jsx',
        appStyles: [
            './css/style.css',
        ],
        vendor: [
            "react",
            "react-dom"
        ],
        vendorStyle: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
            '../node_modules/font-awesome/css/font-awesome.css',
        ],
    },
    // Configuration options tell webpack how to write the compiled files to disk.
    output: {
        // path: An absolute path to your preferred output directory.
        // path.join: Method joins all given path segments together using the platform specific separator as a delimiter
        path: path.join(basePath, "dist"),
        // A filename to use for the output file(s).
        filename: '[name].js',
    },
    // These options determine how the different types of modules within a project will be treated
    module: {
        // An array of Rules which are matched to requests when modules are created.
        rules: [
            {
                test: /\.jsx?$/, // The Condition must match
                // exclude: /node_modules/, // The Condition must NOT match
                // Webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript
                loader: 'babel-loader', // This package allows transpiling JavaScript files using Babel and webpack
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: {
                    loader: 'css-loader',
                  },
                }),
            },
            // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
            // Using here url-loader and file-loader
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
            },
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    plugins: ['lodash'],
                    presets: [['env', { modules: false, targets: { node: 4 } }]]
                }
            }
        ],
    },
    // This option controls if and how source maps are generated.
    devtool: 'inline-source-map',
    // webpack-dev-server can be used to quickly develop an application
    devServer: {
        contentBase: './dist', // Content base
        inline: true, // Enable watch and live reload
        host: 'localhost',
        port: 8081,
        stats: 'errors-only' // To show only errors in your bundle
    },
    // The plugins option is used to customize the webpack build process in a variety of ways.
    plugins: [
        // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true // Append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting.
        }),
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css',
            disable: false,
            allChunks: true,
        }),
        new LodashModuleReplacementPlugin
    ]
};