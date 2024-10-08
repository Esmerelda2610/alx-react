const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "/dashboard/src/index.js",
    output: {
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'asset/resource',
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                }
            },
        ],
    },
    resolve: {
        extensions: [".*", ".js", ".jsx"],
    },
    devServer: {
        static: "./dist",
        compress: true,
        open: true,
        hot: true,
        port: 8564,
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            name: "index.html",
            inject: false,
            template: "./dist/index.html",
        }),
    ],
};
