'use strict'
var webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
// Simplifies creation of HTML files to serve your webpack bundles
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// The path module provides utilities for working with file and directory paths.
var path = require('path');
// The directory name of the current module
var basePath = __dirname;

module.exports = merge(base, {
    entry: {
        // App entry point.
        app: './main.tsx',
        appStyles: [
            './styles/styles.css',
          ],
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ],
        vendorStyle: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
            '../node_modules/toastr/build/toastr.min.css'
        ]
    },
    // Configuration options tell webpack how to write the compiled files to disk.
    output: {
        // path: An absolute path to your preferred output directory.
        // path.join: Method joins all given path segments together using the platform specific separator as a delimiter
        path: path.join(basePath, "dist"),
        // A filename to use for the output file(s).
        filename: '[name].js',
        publicPath: '/'
    },
    // This option controls if and how source maps are generated.
    devtool: 'source-map',
    // webpack-dev-server can be used to quickly develop an application
    devServer: {
        contentBase: './dist', // Content base
        inline: true, // Enable watch and live reload
        host: 'localhost',
        port: 8081,
        stats: 'errors-only', // To show only errors in your bundle,
        historyApiFallback: true
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
        })
    ]
  });