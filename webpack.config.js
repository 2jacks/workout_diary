const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const TerserWebpackPlugin = require('terser-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
		publicPath: '/'
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/app/components'),
			'@pages': path.resolve(__dirname, 'src/app/pages'),
			'@services': path.resolve(__dirname, 'src/app/services'),
			'@hooks': path.resolve(__dirname, 'src/app/hooks'),
			'@utils': path.resolve(__dirname, 'src/app/utils'),
			'@contexts': path.resolve(__dirname, 'src/app/contexts'),
			'@constants': path.resolve(__dirname, 'src/app/constants')
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	devServer: {
		port: 4200,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|webp|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'dist')
				},
				{
					from: path.resolve(__dirname, 'src/app/assets/**/*'),
					to: path.resolve(__dirname, 'dist/assets'),
					noErrorOnMissing: true
				}
			]
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			scriptLoading: 'blocking',
			minify: false
		}),
		new ESLintWebpackPlugin({
			fix: true,
			emitWarning: false,
			failOnWarning: false
		})
	],
	optimization: {
		minimize: isProd,
		minimizer: [new MiniCssExtractPlugin(), new TerserWebpackPlugin()]
	},
	devtool: isDev ? 'source-map' : false
}
