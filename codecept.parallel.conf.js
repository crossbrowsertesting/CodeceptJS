exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    SetScore: {
        "require": "./setscore_helper.js"
    },
    WebDriver: {
      url: 'http://crossbrowsertesting.github.io/todo-app.html',
      browser: 'Chrome',
      host: 'hub.crossbrowsertesting.com',
      port: 80,
      user: 'YOUR_USERNAME',
      key: 'YOUR_AUTHKEY',
      desiredCapabilities: {
        'record_video': 'true',
      },
    },

  },
  multiple: { 
    smoke:{
      browsers: [ 
        {
          browser: 'Safari',
          desiredCapabilities: {
            version: '13',
            platform: 'Mac OSX 10.15',
            name: 'CodeceptJS Safari Parallel Example',
    
          }
        },
        {
          browser: "Chrome",
          desiredCapabilities: {
            version: '79',
            platform: 'Windows 10',
            name: 'CodeceptJS Chrome Parallel Example',
        
          }
        },
      ],
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS'
}
