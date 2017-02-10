const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

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
			loader: "url-loader?limit=10000&minetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'src/app.html',
			to: 'app.html'
		}], {
			debug: true
		}),
		new ExtractTextPlugin('./css/main.css'),
	]
};