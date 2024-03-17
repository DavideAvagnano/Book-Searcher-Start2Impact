const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
