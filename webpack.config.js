const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  entry: "./resources/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
