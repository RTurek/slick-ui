const baseConfig = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
  config.plugins = config.plugins.filter(({ constructor }) => constructor.name !== "ProgressPlugin")
  config.resolve = baseConfig.resolve;

  return config;
};
