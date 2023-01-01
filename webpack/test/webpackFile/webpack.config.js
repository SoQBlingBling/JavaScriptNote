const {
    resolve
} = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            // {
            //     test: /\.(jpg | gif | png)$/,
            //     use:{
            //         loader:'file-loader'
            //     }
            // },
            {
                test: /\.(jpg | gif | png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        //指定图片大小  小于该数值的图片会转成base64
                        limit: 8 * 1024,
                        // 打包之后的图片名称  [name] 为原图片名 [ext]为原图片类型
                        name: 'img/[name].[ext]',

                        /*
                        url-loader 默认采用es modules 规范进行解析 但是  html-loader引入图片用的是commonjs规范

                        解决：关闭 url-loader默认的es modules 规范 强制url-loader使用CommonJs规范进行打包
                        */
                       esModule:false
                    }
                }
            }, {
                test: /\.html$/,
                use: {
                    loader:'html-loader',
                    //webpak5 需要html-loader中也配置
                    esModule:false
                }
            }
        ]
    },
    plugins: [],
    mode: 'development'
}