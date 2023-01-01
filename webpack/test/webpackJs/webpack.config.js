const {
    resolve
} = require('path');
const ESLintPlugin = require('eslint-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                          '@babel/preset-env', 
                          { 
                              
                              //按需加载
                              useBuiltIns:'usage',
                              //corejs版本、
                              corejs:3,
                              targets: {
                                chrome:"59",
                                ie:"9",
                                firefox:"60",
                                safari:"10",
                                edge:"17"
                              },
                             }
                        ]
                    ]
                  }
                }
              }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ESLintPlugin({
            // 自动解决常规报错
            fix:true
        })
    ],
    mode: 'development'
}