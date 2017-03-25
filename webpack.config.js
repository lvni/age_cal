var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var extweui = new ExtractTextPlugin(weui);
module.exports = {
    entry: {
        main: "./src/js/index.js",
    },
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename : "[name].v1.js",
        
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: "index.html",
            template: "src/html/index.html",
            inject: false,
            favicon: "src/img/bitbug_favicon.ico",
            minify: {
                removeComments:true,
                collapseWhitespace:true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),

         //抽取公共第三方的库文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new ExtractTextPlugin("style.css")
         
    ],
    resolve: {
      alias: {
          'vue$': 'vue/dist/vue.common.js'
      }
    },
    module: {
        loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader'})
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader!less-loader'})
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader?limit=8192'
                }

            ],
    },
    
    
};

