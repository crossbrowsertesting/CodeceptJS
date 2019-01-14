# Getting Started with CucumberJS and CrossBrowserTesting #

CodeceptJS is a multi-backend testing framework. It can execute tests using different libraries like WebDriverIO, Puppeteer, Protractor, etc.

In this guide we will use CodeceptJS and WebDriverIO for testing using the Selenium WebDriver.

## Installing CodeceptJS and WebDriverIO ##

`[sudo] npm install -g codeceptjs webdriverio`

## Initialize CodeceptJS in directory ##

`codeceptjs init`

Be sure to select the WebDriver option when prompted "What helpers do you want to use?

## Create your first test by entering a test name after running  ##

`codeceptjs gt`

## Open the generated test file and copy the ofllowing test ##

```javascript
Feature('Codecepttest');

Scenario('test something', (I) => {
I.amOnPage('http://crossbrowsertesting.github.io/todo-app.html');
I.see('Todo App');
I.checkOption('/html/body/div/div/div/ul/li[4]/input');
I.checkOption('/html/body/div/div/div/ul/li[5]/input');
I.fillField('//*[@id="todotext"]','run your first selenium test');
I.click('//*[@id="addbutton"]');
I.click('/html/body/div/div/div/a');
});

```

## Edit the .conf.js file to look like the following ##
Be sure to add your username and authkey
```javascript
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
            record_video: 'true'
         },
      }
   },
   include: {},
   bootstrap: null,
   mocha: {},
   name: 'CodeceptJS'
}

```

## Run a test using command ##
` codeceptjs run --steps ` 

As you can probably make out from our test, we visit a small ToDo App example and interact with our page.

We kept it short and sweet for our purposes, but there is so much more you can do with CodeceptJS! Being built on top of Selenium means the sky is the limit as far as what you can do. If you have any questions or concerns, feel [free to get in touch](mailto:info@crossbrowsertesting.com).
