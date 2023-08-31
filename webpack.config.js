const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    allowedHosts: "all",
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      // first rule is to test and match any js or jsx files then use babel-laoder
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // second rule is to test and match any js or jsx files then use babel-laoder

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};