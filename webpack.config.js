var path = require('path');
var params = {
    env: process.env.NODE_ENV || 'development'
};
var plugins = {
    extText: require("extract-text-webpack-plugin"),
    stylus: {
        rupture: require("rupture")
    }
};
var webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + '/app.js'
    },

    watch: params.env == 'development',
    watchOptions: {
        aggregateTimeout: 50
    },

    output: { path: __dirname + '/dist', filename: 'app.js' },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.json$/, loader: "json-loader" },
            {
                test: /\.(styl|css)$/,
                loader: plugins.extText.extract('stylus', 'css-loader!stylus-loader')
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },

    stylus: {
        import: path.join(__dirname, '/app/styles/index.styl')
    },

    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new plugins.extText("app.css", {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};