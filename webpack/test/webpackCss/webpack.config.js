const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin')
const OptimizeCssAssetsPLugin = require('optimize-css-assets-webpack-plguin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //3.将css打包到独立的文件中
                     MiniCssExtractPlugin.loader,
                     //2.css-loader 根据common.js规范将样式输出到js
                    'css-loader',
                    //1.通过postcss-loader给样式浏览器添加前缀
                    'postcss-loader'
                ]
            }
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            //指定打包之后的css 名称   [name]表示原文件名
            filename:'css/[name].css'
        }),
        new StylelintPlugin({
            //要校验指定的文件路径
            files:['./src/*.{css,less,sass,scss}']
        }),
        // 压缩css
        new OptimizeCssAssetsPLugin()
    ],
    mode:'development'

}