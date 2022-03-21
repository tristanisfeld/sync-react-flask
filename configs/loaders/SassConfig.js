const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntries = require('webpack-fix-style-only-entries');


const projectPaths = require('../projectPaths');

const sPath = projectPaths.staticFiles

// ------------------------------------------------- Sass Settings Config
module.exports = {
    module: {
        rules: [{
            test: /\.(s[ac]|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        url: false, // resolves weird image location issue in sass background images
                    }
                },
                "sass-loader"
            ]
        }]
    },
    entry: {
        "styles/main": path.resolve(__dirname, '../..', './src/styles/main.scss')
    },
    output: {
        path: path.resolve(__dirname, '../..', sPath)
    },
    plugins: [
        new FixStyleOnlyEntries(),
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
}