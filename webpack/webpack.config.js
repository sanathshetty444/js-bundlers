/*
    specify the entry point
    recursively bundle all the files -> js, css, assets
    specify the loaders
    specifiy the bundle destination
    do minification
    do code splitting
    convert inline js styling to different css file -> enables caching, prevents FOUC, 
*/

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production", // Use 'development' for debugging
    entry: "./index.js", // Main entry point

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // Clears old files from 'dist' before bundling
    },

    module: {
        rules: [
            // Babel Loader: Transpile modern JS to ES5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"], // Transpile ES6+ to ES5
                    },
                },
            },

            // CSS Loader: Extracts CSS into separate files
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            // File Loader: Handles images, fonts, and other assets
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource",
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "styles.css" }), // Extracts CSS into separate file
    ],

    optimization: {
        minimize: true, // Enable minification
        minimizer: [new TerserPlugin()], // Minify JS using Terser
    },

    devServer: {
        static: "./dist", // Serve from 'dist' folder
        compress: true,
        port: 3000, // Runs on localhost:3000
    },
};
