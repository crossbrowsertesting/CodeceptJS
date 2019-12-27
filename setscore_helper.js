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
