const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  entry: './src/app.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      // { test: /\.css$/, use: 'css-loader' },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ]
}