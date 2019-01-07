const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entries = {
    index: path.join(__dirname, 'src/js/index.js'),
    landing: path.join(__dirname, 'src/js/landing.js'),
    work: path.join(__dirname, 'src/js/work.js'),
    master: path.join(__dirname, 'src/scss/master.scss'),
    landings: path.join(__dirname, 'src/scss/landings.scss'),
    about: path.join(__dirname, 'src/scss/about.scss'),
    contact: path.join(__dirname, 'src/scss/contact.scss'),
    centeva: path.join(__dirname, 'src/scss/centeva.scss'),
    mkworld: path.join(__dirname, 'src/scss/mkworld.scss'),
    cases: path.join(__dirname, 'src/scss/cases.scss')
};

module.exports = {
    name: 'Bundling dev',
    mode: 'production',
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].min.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ttf)$/i,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        }),
        new CopyWebpackPlugin([
            { from: 'src/*.html', to: path.join(__dirname, 'dist'), flatten: true },
            { from: 'src/cases/*.html', to: path.join(__dirname, 'dist/cases'), flatten: true },
            { from: 'src/work/*.html', to: path.join(__dirname, 'dist/work'), flatten: true },
            { from: 'src/work/centeva/*.html', to: path.join(__dirname, 'dist/work/centeva'), flatten: true },
            { from: 'src/work/mkworldsolutions/*.html', to: path.join(__dirname, 'dist/work/mkworldsolutions'), flatten: true },
            { from: 'src/scss/fonts', to: path.join(__dirname, 'dist/css/fonts'), flatten: true },
            { from: 'src/images', to: path.join(__dirname, 'dist/images') },
            { from: 'src/js/*.json', to: path.join(__dirname, 'dist/js'), flatten: true }
        ])
    ]
};
