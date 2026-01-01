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
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: {
      name: '@turekworks/slick-ui',
      type: 'umd'
    },
    globalObject: 'this'
  },
  externals: [
    /@mui\/.*/,
    {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
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
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]'
        }
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
          path.resolve('./node_modules/@mui'),
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
