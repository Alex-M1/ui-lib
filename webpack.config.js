const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
};
