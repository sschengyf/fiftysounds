const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: {
		main: [
			'./src/js/main.js',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
		]
	},
	output: {
		filename: '/js/[name].js',
		publicPath: 'http://localhost:8080/'
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
			loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass?sourceMap']
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&minetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}]
	},
	devServer: {
		contentBase: './src',
		historyApiFallback: {
      		index: 'app.html'
	    }
	}
};