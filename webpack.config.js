var path = require("path");
module.exports = {
    entry: "./src/js/main.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]

    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "bundle.js"
    },
    // plugins: [new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })],
    // devServer: {
    //     inline: true,
    // }

};