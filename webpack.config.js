const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};
