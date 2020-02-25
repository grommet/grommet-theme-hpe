import path from 'path';

export default {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'grommet-theme-hpe.min.js',
    libraryTarget: 'var',
    library: 'GrommetThemeHpe',
  },
  externals: {
    'styled-components': 'styled',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
