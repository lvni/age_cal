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
            minify: {
                removeComments:true,
                collapseWhitespace:false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        
         //抽取公共第三方的库文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
         
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
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.less$/,
                    loader: "style-loader!css-loader!less-loader"
                }

            ],
    },
    
    
};

