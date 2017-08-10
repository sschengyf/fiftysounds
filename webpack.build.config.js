const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/js/main.js',
	output: {
		path: './www',
		filename: 'js/main.js',
	},
	resolve: {
		root: [
	    	path.resolve('./src/js')
	   	]
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap')
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&minetype=application/font-woff&publicPath=../&name=css/fonts/[name].[ext]"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader?publicPath=../&name=css/fonts/[name].[ext]"
		}, {
            test: /\.(png|jpg)$/,
            loader: "file-loader?publicPath=../&name=img/[name].[ext]"
        }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/app.html',
        	filename: 'app.html',
        	excludeAssets: [/main.js/]
		}),
		new HtmlWebpackExcludeAssetsPlugin(),
		new ExtractTextPlugin('./css/main.css'),
		new CopyWebpackPlugin([
			{from: 'src/audio', to: 'audio'}
		])
	]
};