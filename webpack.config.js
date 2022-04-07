const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/js/app.js"),
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
};