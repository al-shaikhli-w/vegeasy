const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackObfuscator = require('webpack-obfuscator');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';
const entryFile = './src/index.js';
const outputFile = path.resolve(__dirname, './dist');
const config  = {
    entry: entryFile,
    output: {
        path: outputFile,
        filename: 'app.js',
        clean: true,
        publicPath:'./'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico)$/i,
                type: 'asset',
                loader: 'file-loader',
                options: {
                    name: 'image/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin,
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, `./src/index.html`),
            chunks: [`main`]
        }),
        new HtmlWebpackPlugin({
            filename: 'recipe.html',
            template: 'src/recipe.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'create.html',
            template: 'src/create.html'
        }),
        new MiniCssExtractPlugin(),
        new WebpackObfuscator(
            {
                rotateStringArray: true,
                reservedStrings: [ '\s*' ]
            })
    ],
    resolve: {
        extensions: ['*', '.js']
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
        config.watch = true;
        config.watchOptions = {
            ignored: '**/node_modules',
        };
    }
    return config;
};