const Webpack = require("webpack");
const BrotliPlugin = require("brotli-webpack-plugin");
module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(webP|jpg|jpeg|png|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BrotliPlugin({
      asset: "[file].br",
      test: /\.(js)$/,
    }),
  ],
};
