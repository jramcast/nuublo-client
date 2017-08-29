const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {

    entry: './app/index.js',

    output: {
         path: path.join(__dirname, '/bin/'),
         filename: 'app.bundle.js'
    },

    module: {
        rules: [
            // js files
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },

            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }

        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('styles.css'),
    ]
 };