const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, outputDirectory)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(
          extractTextWebpackPlugin.extract({
            fallback: ['style-loader'],
            use: ['css-loader', 'sass-loader']
          })
        )
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new cleanWebpackPlugin([outputDirectory]),
    new htmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html'
    }),
    new extractTextWebpackPlugin('styles.css')
  ]
};
