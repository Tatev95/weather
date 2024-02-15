const HtmlWebpackPlugin = require("html-webpack-plugin");

const LOADERS = [
  {
    test: /\.(ts|tsx)$/,
    use: "babel-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  },
];

const PLUGINS = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: LOADERS,
  },
  plugins: PLUGINS,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 8000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
