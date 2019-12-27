# Getting Started with CodeceptJS and CrossBrowserTesting #

CodeceptJS is a multi-backend testing framework. It can execute tests using different libraries like WebDriverIO, Puppeteer, Protractor, etc.

In this guide we will use CodeceptJS and WebDriverIO for testing using the Selenium WebDriver.

## Installing CodeceptJS and WebDriverIO ##

`[sudo] npm install -g codeceptjs webdriverio`

## Initialize CodeceptJS in directory ##

`codeceptjs init`

Be sure to select the WebDriver option when prompted "What helpers do you want to use?

## Create your first test by entering a test name after running  ##

`codeceptjs gt`

## Open the generated test file and copy the following test ##

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
      SetScore: {
        "require": "./setscore_helper.js"
      },
      WebDriver: {
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
## Add the helper file setscore_helper.js to set the score at the end of your test
```
const request = require('request');
const Helper = codeceptjs.helper;

class SetScore extends Helper {

	async _passed() {
    var session_id = this.helpers.WebDriver.browser.sessionId; 
    var result = { error: false, message: null };
		
    if (session_id){

			request({
				method: 'PUT',
				uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + session_id,
				body: {'action': 'set_score', 'score': 'pass' },
				json: true
			},
				function(error, response, body) {
					if (error) {
						result.error = true;
						result.message = error;
					}
					else if (response.statusCode !== 200){
						result.error = true;
						result.message = body;
					}
					else{
						result.error = false;
						result.message = 'success';
					}

				})
				.auth('YOUR_USERNAME', 'YOUR_AUTHKEY');
		}
		else{
			result.error = true;
			result.message = 'Session Id was not defined';
		}  
	}


	async _failed() {
		var session_id = this.helpers.WebDriver.browser.sessionId; 
    var result = { error: false, message: null };

		if (session_id){

			request({
				method: 'PUT',
				uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + session_id,
				body: {'action': 'set_score', 'score': 'fail' },
				json: true
			},
				function(error, response, body) {
					if (error) {
						result.error = true;
						result.message = error;
					}
					else if (response.statusCode !== 200){
						result.error = true;
						result.message = body;
					}
					else{
						result.error = false;
						result.message = 'success';
					}

				})
				.auth('YOUR_USERNAME', 'YOUR_AUTHKEY');
		}
		else{
			result.error = true;
			result.message = 'Session Id was not defined';
		}  
	}


}

module.exports = SetScore;


```
## Run a test using command ##
` codeceptjs run --steps ` 

As you can probably make out from our test, we visit a small ToDo App example and interact with our page.

We kept it short and sweet for our purposes, but there is so much more you can do with CodeceptJS! Being built on top of Selenium means the sky is the limit as far as what you can do. If you have any questions or concerns, feel [free to get in touch](mailto:info@crossbrowsertesting.com).
