var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
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
            inject: "body",
            minify: {
                removeComments:true,
                collapseWhitespace:true,
            }
        }),
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
    }
};
