const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
      }),
    ],
  },
}
