/**
 * Created by 1001196 on 16. 1. 14..
 */
module.exports = {
    context: __dirname,
    entry:  './src/test.js',
    output: {
        path: __dirname + '/build',
        filename: 'dist/testout.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'jsx', 'babel'],
                exclude: /node_modules/
            }
        ]
    }
};