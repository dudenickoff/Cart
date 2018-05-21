const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
	build: path.join(__dirname, 'build'),
	template: path.join(__dirname, 'template'),
	source: path.join(__dirname, 'src')
}

module.exports = {
	entry: {
		'index': PATHS.source + '/index.js'
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'template') + '/app.html'
		}),
		new ExtractTextPlugin("style.css")
	],
	module: {
		rules: [{
				test: /\.(png|svg|jpg)$/,
				loader: 'file-loader?limit=100000',
				options: {name: './[name].[ext]'}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			}, {
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0', 'react']
					}
				}
			}
		]
	},
	devServer: {
		port: 3000,
		stats: "errors-only"
	}
}