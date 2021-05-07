const { browser } = require('protractor');
var logger = require("log4js-protractor-appender");

describe('Create Website Application', function() {
  var testData = require('../resources/testData.json');
  var testDataProvider = require('../resources/testDataProvider.json');
  var using = require('jasmine-data-provider');

  var homePage = new pages.homePage();
  var signUpPage = new pages.signUpPage();

  beforeEach(function() {    
    homePage.openUrl(testData.application.baseUrl);
    browser.logger.info("Browser opened..");
    homePage.clickSignInLink();    
  });

  it('should open the Sign Up page successfully', function() {
    expect(browser.getTitle()).toEqual(testData.signUpPage.title);
    expect(signUpPage.checkSignUpPageHeaderDisplayed()).toBeTruthy();
    expect(signUpPage.checkEmailTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkConfEmailTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkPasswordTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkConfPwdTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkSignUpButtonDisplayed()).toBeTruthy();
  });

    
});