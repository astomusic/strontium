const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 8080;

module.exports = env => {
  return {
    mode:
      !!process.env.WEBPACK_DEV_SERVER || env.env === "dev"
        ? "development"
        : "production",
    entry: ["./src/index.js"],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            name: "vendor",
            enforce: true
          }
        }
      }
    },
    output: {
      publicPath: "/",
      path: __dirname + "/dist",
      chunkFilename: "static/[name].[chunkhash].js",
      filename: "static/bundle.[hash].js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
        // {
        //   test: /\.(png|svg)$/,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "images/[name].[ext]"
        //       }
        //     }
        //   ]
        // },
        // {
        //   test: /\.(woff|otf)$/,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "fonts/[name].[ext]"
        //       }
        //     }
        //   ]
        // },
      ]
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src/"),
        images: path.resolve(__dirname, "public/images"),
        fonts: path.resolve(__dirname, "public/fonts"),
        docs: path.resolve(__dirname, "public/docs")
      },
      extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        dev: !!process.env.WEBPACK_DEV_SERVER || env.env === "dev"
      })
    ],
    devServer: {
      host: "local.strontium.com",
      port: port,
      open: true,
      historyApiFallback: true
    }
  };
};
