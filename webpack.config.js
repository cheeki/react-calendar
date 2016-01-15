/**
 * Created by 1001196 on 16. 1. 14..
 */
module.exports = {
    context: __dirname,
    entry: {
        javascript: './src/test.js',
        html: './src/test.html'
    },
    output: {
        path: __dirname + '/build',
        filename: 'test.js'
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
                loaders: ['react-hot', 'jsx', 'babel'],
                exclude: /node_modules/
            }
        ]
    }
};