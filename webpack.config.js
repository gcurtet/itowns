var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'itowns.js',
    library: 'itowns',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'jquery': '$'
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    publicPath: '/itowns/dist/'
  }
};
