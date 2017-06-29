var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'bundle.js',
    publicPath: '/dist/js/',
  },
  watch: true,
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },

  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
