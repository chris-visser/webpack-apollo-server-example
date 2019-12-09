const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
  watch: true,
  entry: {
    api: './src/main.js'
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
