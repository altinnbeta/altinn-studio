const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: "./src/index.tsx",
  output: {
    filename: "runtime.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [{
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              url: false
            }
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.tsx?/,
        loader: "awesome-typescript-loader",
      }
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "runtime.css",
    }),
    new UglifyJsPlugin(),
  ],
}
