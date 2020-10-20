const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require('path')

module.exports = {
	...defaultConfig,
	devtool: 'source-map',
	entry: {
		'post-to-mailchimp': path.resolve(__dirname, './src/script/gutenberg.js'),
	},
	output: {
		path: path.resolve(__dirname, './public/js/gutenberg/.'),
		filename: '[name].js',
		sourceMapFilename: '[name].map',
	},
}