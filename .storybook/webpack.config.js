const baseConfig = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
  config.plugins = config.plugins.filter(({ constructor }) => constructor.name !== "ProgressPlugin")
  config.resolve = baseConfig.resolve;
  
  // Add babel-loader for story files
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-react',
          '@babel/preset-env'
        ]
      }
    }
  });

  return config;
};
