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
        rules: []
    },
    plugins: [

    ],
    mode: 'development',
    devserver: {
        //指定加载内容的路径
        contentBase: resolve(__dirname, "build"),
        //启用gzip压缩
        conpress: true,
        //端口号
        port: 3322,
    },
    target:'web',
    //配置代理：解决跨域问题
    proxy:{
        //http://localhost:9200/api
        '/api':{
            // 目标地址
             //http://localhost:9200/api= >  https://api.github.com/api
            target:'https://api.github.com',
            pathRewrite:{
                '^/api':""
            },
            // 不能使用localhost：9200作为guthub的主机与  修改域名
            changeOrigin:true
        }
    }
}