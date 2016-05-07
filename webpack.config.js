var path 	= require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: ["./src/index.jsx"],
	output: {
		path 	   : path.resolve(__dirname + '/public/dist'),
		filename   : 'bundle.js',
		publicPath : '/dist/'
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: { presets: ['react'] }
			}
		]
	},
	devServer: {
		historyApiFallback : true
	}
}