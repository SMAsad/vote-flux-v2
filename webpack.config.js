var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
// plugins
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  hash: true,
  cache: false,
  template: __dirname + '/react-signup/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')),
  'process.env': {NODE_ENV: '"production"'}
});

var entryPath = './react-signup/app/';
var outputPath = './signup/';
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from:  './react-signup/css', to: outputPath + 'css' },
  { from: './react-signup/img', to: outputPath + 'img' }
]);


module.exports = {
  // context: path.join(__dirname, 'app'),
  devServer: {
      // This is required for webpack-dev-server. The path should
      // be an absolute path to your build destination.
      outputPath: path.join(__dirname, outputPath)
  },
  entry: [
    './react-signup/app/index.js'
  ],
  output: {
    path: outputPath,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test:/\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    CopyWebpackPluginConfig, // comment this out when in dev-mode
    definePlugin
  ]
};
