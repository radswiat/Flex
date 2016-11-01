const webpack           = require('webpack');
const path              = require('path');
const htmlPlugin        = require('html-webpack-plugin');
const PATH_BASE         = '';


module.exports = {
    cache: false,
    watch: true,
    entry: {
        app: path.resolve(PATH_BASE, 'src/test.tsx')
    },
    output: {
        path: PATH_BASE + 'dist/',
        filename: '[name].js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".jsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader!ts-loader"
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    ts: {
        experimentalDecorators: true
    },
    plugins: [
        new htmlPlugin({
            title: 'FlexFramework',
            filename: 'index.html',
            template: path.resolve(PATH_BASE, 'src/index.html')
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false
        //     }
        // })
    ]
}