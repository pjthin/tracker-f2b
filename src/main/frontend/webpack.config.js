    const HtmlWebPackPlugin = require("html-webpack-plugin");
    module.exports = {
      entry: './jsx/index.jsx',
	  output: {
	    path: __dirname + '/../resources/static/',
	    publicPath: '/',
	    filename: 'bundle.js'
	  },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./../resources/templates/index.html",
          filename: "./../resources/templates/index.html"
        })
      ]
    };