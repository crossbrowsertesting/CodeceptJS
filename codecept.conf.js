exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriverIO: {
      url: 'http://crossbrowsertesting.github.io/todo-app.html',
      browser: 'chrome',
      host: 'hub.crossbrowsertesting.com',
      port: 80,
      user: 'YOUR_USERNAME',
      key: 'YOUR_AUTHKEY',
      desiredCapabilities:{
        name: "Codeceptjs Test",
        platform: "Windows 10",
        browserName: 'Chrome',
        version: '71x64',
        record_video: 'true' ,
        record_network: 'false',
      },

    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS'
}
