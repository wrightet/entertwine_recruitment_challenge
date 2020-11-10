// import path from 'path'
// import { VueLoaderPlugin } from 'vue-loader'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = process.env.NODE_ENV || 'development'

module.exports = {
  mode: MODE,
  entry: path.resolve(__dirname, './index.js'),
  context: path.resolve(__dirname, './'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['*', '.scss', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true,
    port: 8080,
    contentBase: path.resolve(__dirname, './dist')
  },
}
