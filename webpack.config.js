const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/rx.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin( //用于对打包后的旧文件进行清除
            ['build/main.*.js'], //匹配要删除的文件
            {
                root: __dirname, // 根目录
                verbose: true, // 开启在控制台输出信息
                dry: false // 启用删除文件
            }
        ),
        new HtmlWebpackPlugin()
    ]
}