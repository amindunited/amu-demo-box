require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const processHTMLPages = require('./processHTMLHelper.js');
const autoprefixer = require('autoprefixer');

const path = require('path');

const extractCSS = new ExtractTextPlugin('styles/style.css');

const plugins = [
  extractCSS
].concat(processHTMLPages());

let entries = [
  'webpack-dev-server/client?http://localhost:8080',
  './src/scripts/app.js',
];

if (process.env.NODE_ENV === 'production') {
  entries.splice(0, 1);
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV, JSON.stringify(entries));

module.exports = {
  entry: entries,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: [/\.scss$/i, /\.css$/],
        loader: extractCSS.extract('style-loader', 'css?-minimize!postcss!sass'),
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
          context: './src',
        },
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
          context: './src',
        }
      }
    ],
  },
  postcss: [autoprefixer()],
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
  output: {
    path: './dist',
    filename: 'scripts/app.js'
  },
  devServer: {
    contentBase: './dest',
  },
  plugins: plugins,
};
