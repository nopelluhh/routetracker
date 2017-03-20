var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: './public/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/js')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|public\/libs)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['latest']
                }
            }
        }]
    }

};