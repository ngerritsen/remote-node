'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [new webpack.optimize.UglifyJsPlugin()];
}

module.exports = config;
