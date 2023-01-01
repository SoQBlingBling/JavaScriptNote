const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 用来指定html生成的模板
            template:'./src/index.html',
            // 指定html中使用的变量
            title:'这个是ejs的效果',
            //打包只会的html 的名称 
            filename:'main.html',
            // 压缩html
            minify:{
                
            }
        })
    ],
    mode: 'development'
}