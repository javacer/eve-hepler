var webpack = require('webpack');

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "./build/bin/app.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loaders: [
                    "babel-loader",
                    "ts-loader?" + JSON.stringify({
                        webStormErrorFormat: true
                    })]
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin(
            "./build/bin/app.js.map", null,
            "[absolute-resource-path]", "[absolute-resource-path]")

    ]
};