const path = require('path');

const projectPaths = require('../projectPaths');

const sPath = projectPaths.staticFiles

// ------------------------------------------------- TypeScript and React Config
module.exports = {
    // mode: mode,
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    entry: {
        "scripts/main": path.resolve(__dirname, '../..', './src/index.tsx')

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, '../..', sPath),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]' // control output location of assets (added in react)
    },
    devtool: 'source-map',

}