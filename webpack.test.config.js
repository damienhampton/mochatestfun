const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'test_bundle.js',
    // devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
    // devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  devtool: 'inline-source-map',
  entry: './entry.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // { test: /test\.js$/, use: 'mocha-loader', exclude: /node_modules/, },
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}