const { browser } = require('protractor');
var logger = require("log4js-protractor-appender");

describe('Create Website Application', function() {
  var testData = require('../resources/testData.json');
  var loginDataProvider = require('../resources/loginDataProvider.json');
  var using = require('jasmine-data-provider');

  var homePage = new pages.homePage();
  var loginPage = new pages.loginPage();
  var signUpPage = new pages.signUpPage();

  beforeEach(function() {    
    homePage.openUrl(testData.application.baseUrl);
    browser.logger.info("Browser opened..");
    homePage.clickSignInLink(); 
    signUpPage.clickLogInLink();
  });

  fit('should open the Login Page successfully', function() {
    expect(browser.getTitle()).toEqual(testData.loginPage.title);
    expect(loginPage.checkLoginPageHeaderDisplayed()).toBeTruthy();
    expect(loginPage.checkEmailTextBoxDisplayed()).toBeTruthy();
    expect(loginPage.checkPasswordTextBoxDisplayed()).toBeTruthy();
    expect(loginPage.checkLoginButtonDisplayed()).toBeTruthy();
  });

  using(loginDataProvider.users, function(user){
    fit('should Login with valid credentials successfully', function() {
      loginPage.enterEmailAndPassword(user.email,user.password);
      loginPage.clickLoginButton();
    });
  });
    
});