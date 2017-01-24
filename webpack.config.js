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
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'postcss', 'sass']
		}]
	},
	devServer: {
		contentBase: './src'
	}
};