const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/js/main.js',
	output: {
		path: './www',
		filename: 'js/main.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
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