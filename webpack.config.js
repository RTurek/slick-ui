const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const analyzerPlugin = new BundleAnalyzerPlugin();

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: '@turekworks/slick-ui',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: [
    /@material-ui\/.*/,
    {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
      '@babel/polyfill': '@babel/polyfill',
      'css-loader': 'css-loader',
      'prop-types': 'prop-types',
      'styled-components': 'styled-components'
    }
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|otf|ttf|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][md5:hash].[ext]', // Name of bundled asset
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve('./node_modules/@material'),
          path.resolve('./components')
        ],
        use: [
          'css-loader'
        ]
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 500
  }
  // plugins: [
  //   analyzerPlugin
  // ]
};
