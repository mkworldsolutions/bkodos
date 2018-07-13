const webpack = require("webpack");

module.exports = {
    entry: {
        master: [
            "./src/js/master.js"
        ],
        landing: [
            "./src/js/landing.js"
        ],
        work: [
            "./src/js/work.js"
        ]
    },
    output: {
        path: __dirname + "/src/js",
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            }
        ]
    }
};