const { defineConfig } = require('cypress');
const synpressPlugins = require('@synthetixio/synpress/plugins');
 
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://metamask.github.io/test-dapp/',
    specPattern: 'tests/e2e/specs',
    supportFile: 'tests/support/index.js',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config
    },
  },
});
