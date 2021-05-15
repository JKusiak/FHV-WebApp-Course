
module.exports = {
  'src_folders': 'src/tests/BrowserTests',

  'webdriver': {
      'start_process': true,
      'server_path': require('chromedriver').path,
      'port': 9515
  },

  'test_settings': {
      'default': {
          'screenshots': {
              'enabled': false,
              'on_failure': true,
              'on_error': true,
              'path': 'tests_output/screenshots'
          },
          'desiredCapabilities': {
              'browserName': 'chrome',
              'chromeOptions': {
                  'args': ['--headless']
              }
          }
      }
  }
};