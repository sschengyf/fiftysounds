const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: './www/js',
		filename: 'main.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
};