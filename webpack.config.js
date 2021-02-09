var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  // entry: "./js/client.js",
  entry: "./client.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      },
      {
        test: /\.(scss)$/,  // 対象ファイルの拡張子を指定
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png)$/,  // 対象ファイルの拡張子を指定
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',   // 画像ファイルの名前の設定
              outputPath : '/img/', // パスの設定
            }
          },
        ],
      },
      {
        test: /\.(jpg)$/,  // 対象ファイルの拡張子を指定
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',   // 画像ファイルの名前の設定
              outputPath :  '/img/', // パスの設定
            }
          },
        ],
      }
    ]
    },
    output: {
      path: __dirname + "/build/",
      filename: "client.min.js"
    },
    plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};

// modules: {
//   localIdentName: '[name]__[local]___[hash:base64:5]',
// }