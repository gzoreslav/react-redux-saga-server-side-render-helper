const path = require("path");
const webpack = require("webpack");

const libraryName = "helper";
const outputFile = libraryName + ".js";

module.exports = {
    devtool: "source-map",
    context: path.join(__dirname, "src"),
    entry: {
        app: './helper.js'
    },
    output: {
        path: path.join(__dirname, "lib"),
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules")
        ],
        extensions: [".js"]
    }
};
