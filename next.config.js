module.exports = {
  webpack: (config) => {
    // sets the polling interval for file changes to 300 milliseconds,
    config.watchOptions.poll = 300;
    return config;
  }
};
