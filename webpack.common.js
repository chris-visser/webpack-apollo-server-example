const path = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.graphql|\.gql$/, loader: 'webpack-graphql-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  target: 'node'
};
