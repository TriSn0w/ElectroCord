const { electron, app, BrowserWindow } = require('electron');
const LoginApi = require('electron-discordloginapi');
const colors = require('colors');

LoginApi.startLogin();

LoginApi.setCancelListener(() => {
	//when the user manualy close the login page
	console.log('Client stopped! You must have closed the tab.'.orange);
});

LoginApi.setLoginFailListener(result => {
	//when the user enter wrong password/username or need captcha verification/2fa etc...
	console.log(`Client failed! ${result}`.lightRed);
});

LoginApi.setLoginSuccessListener(result => {
	//when the login is complete
	console.log('Logging in succeded!'.lightGreen);
});

LoginApi.setCloseListener(() => {
	//when the page is closed by the user or after login complete
	console.log('Page closed!');
});