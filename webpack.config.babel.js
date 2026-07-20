import path from 'path';
import webpack from 'webpack';
import { version } from './package.json';

export default {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'grommet-theme-hpe.min.js',
    libraryTarget: 'var',
    library: 'GrommetThemeHpe',
  },
  externals: {
    react: 'React',
    'styled-components': 'styled',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.npm_package_version': JSON.stringify(version),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
  },
  node: false,
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
