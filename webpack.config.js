const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './public/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/js')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }), extractSass
    ],
    module: {
        rules: [
            // preloaders
            {
                enforce: "pre",
                test: /\.scss/,
                loader: 'import-glob-loader'
            },

            // loaders
            {
                test: /\.js$/,
                exclude: /(node_modules|public\/libs)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest']
                    }
                }]
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, "./node_modules")]
                        }
                    }]
                })
            }, {
                test: /\.woff[2]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    }

};
