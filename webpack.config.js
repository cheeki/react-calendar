/**
 * Created by 1001196 on 16. 1. 14..
 */
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        javascript: './src/calendar.js',
        html: './src/test.html'
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: "./build",
        noInfo: true,
        hot: true,
        stats: { colors: true, progress: true }
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};