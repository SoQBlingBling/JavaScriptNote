const {
    resolve
} = require('path')
const CopyWebpackPlugin = require('copy-webpackplugin')
const {
    clearwebpackplugin
} = require('clear-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [{
                test: /\.(eot |svg |ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }

            },
            //使用资源模块
            {
                test: /\.(eot |svg |ttf|woff|woff2)$/,
                // asset 可以在 asset/inline 和asset/resource  之间进行选择
                // 如果文件小于 8kb 就是用 asset/inline
                // 如果文件大于 8kb 就使用 asset/resource
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:8*1024
                    },
                    generator:{
                        filename:'font/[name][ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/pubilc',
                to: "pubilc"
            }]
        }),
        new clearwebpackplugin()
    ],
    mode: 'development'
}