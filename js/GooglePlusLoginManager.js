'use strict';

var RCTGooglePlusLoginManager = require('react-native').NativeModules.RCTGooglePlusLoginManager;

var GooglePlusLoginManager = {

	login(callback) {
		RCTGooglePlusLoginManager.login(callback);
	},

	setClientId(clientId) {
		RCTGooglePlusLoginManager.setClientId(clientId);
	},

	loadCredentials() {
		RCTGooglePlusLoginManager.loadCredentials(callback);
	}

};

module.exports = GooglePlusLoginManager;
