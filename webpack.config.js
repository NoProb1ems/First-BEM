const path = require('path');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var $ = require("jquery");


module.exports = {
		devtool: 'source-map',
		devServer: {
			stats: 'errors-only'
		},
    entry: {
			app: [
				'./src/app.js',
				'./src/assets/scss/style.scss'
			]
		},
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'app.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use:[
                    {
                        loader: 'babel-loader', 
                        options: { presets: ["env"]  }
                    }
                ]
						},
						{
							test: /\.(sa|sc|c)ss$/,
							use: [
									MiniCssExtractPlugin.loader,
									{
										loader: 'css-loader',
										options: { sourceMap: true }
									},
									{
										loader: 'postcss-loader',
										options: {
												sourceMap: true,
												plugins: () => [require('autoprefixer')({
														'browsers': ['> 1%', 'last 2 versions']
												})],
										}
								},
								{
									loader: 'sass-loader',
									options: { sourceMap: true }
								},
							],
						},
        ]
		},
		plugins: [
			new CleanWebpackPlugin(['dist']),
			new MiniCssExtractPlugin({filename: "assets/css/[name].css"}),
			new CopyWebpackPlugin([{from: 'src/assets/img/', to: 'assets/img/'}]),
			new CopyWebpackPlugin([{from: 'src/assets/fonts/', to: 'assets/fonts/'}]),
			new ImageminPlugin({ test: /\.(jpe?g|png|gif)$/i }),
			new LiveReloadPlugin({port: 35729}),
			new HtmlWebpackPlugin({
				title: 'my App',
				filename: 'index.html',
				template: 'src/index.html'
			}),
		]
}