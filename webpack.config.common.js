const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true,
            favicon: './favicon.ico',
            chunks: ['index'],
            meta: {
                viewport: 'width=device-width, initial-scale=1.0'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: [
                            ["@babel/preset-env", {
                                "useBuiltIns": "entry",
                                "corejs": "3.1.4"
                            }]
                        ]
                    }
                }
            }
        ]
    }
}