const path = require('path');
const { argv } = require('yargs');
const webpack = require('webpack');
const { transform } = require('@formatjs/ts-transformer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

module.exports = {
  entry: './src/index.tsx',
  mode: argv.mode,
  devtool: isDevelopment ? 'eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: {
                before: [
                  transform({
                    overrideIdFn: '[sha512:contenthash:base64:6]',
                    ast: true,
                  }),
                ],
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[name].[ext]' },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'fonts/[name].[ext]' },
        },
      },
    ],
  },
  resolve: { extensions: ['*', '.ts', '.tsx', '.js'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'index.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: isProduction ? {
    minimizer: [
      new UglifyJsPlugin({ sourceMap: true }),
    ],
  } : {},
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
};
