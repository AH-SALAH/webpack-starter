const   merge = require('webpack-merge'),
        common = require('./webpack.common.js'),
        MiniCssExtractPlugin = require("mini-css-extract-plugin");
    
module.exports = merge(common, {
    mode: 'production',
    // devtool: '#source-map',
    module:{
        rules: [
            {
                test:/\.s?[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                  ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/front.[name].[contenthash].css',
        chunkFilename: 'css/front.[id].[contenthash].css',
        }),
    ],
});