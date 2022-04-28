const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "index.js",
  },
  devServer: {
    port: 3000,
    open: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./public/index.html", to: "./index.html" },
      { from: "./public/img/", to: "./img" }
    ]
    }),
    new CleanWebpackPlugin()
  ]
};