'use strict'
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// The path module provides utilities for working with file and directory paths.
var path = require('path');
// The directory name of the current module
var basePath = __dirname;

module.exports = {
    // context: The base directory (absolute path!) for resolving the entry option
    // path.join: Method joins all given path segments together using the platform specific separator as a delimiter
    context: path.join(basePath, "src"),
    // Configure how modules are resolved.
    resolve: {
        // Automatically resolve certain extensions in this case js and jsx.
        extensions: ['.js', '.ts', '.tsx']
    },
    // These options determine how the different types of modules within a project will be treated
    module: {
        // An array of Rules which are matched to requests when modules are created.
        rules: [
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.(ts|tsx)$/, // The Condition must match
                exclude: /node_modules/, // The Condition must NOT match
                loader: 'babel-loader!ts-loader'
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
            }
        ],
    }
};