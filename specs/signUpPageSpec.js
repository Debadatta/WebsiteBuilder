const { browser } = require('protractor');
var logger = require("log4js-protractor-appender");

describe('Create Website Application', function() {
  var testData = require('../resources/testData.json');
  var testDataProvider = require('../resources/testDataProvider.json');
  var using = require('jasmine-data-provider');
  var signUpData = require('../resources/signUpDataProvider.json');

  var homePage = new pages.homePage();
  var signUpPage = new pages.signUpPage();

  beforeEach(function() {   

    try { 
      homePage.openUrl(testData.application.baseUrl);
      browser.logger.info("Browser opened..");
      homePage.clickSignInLink();   
    } catch(e) {
      browser.logger.error(e);
    } 
  });

  xit('should open the Sign Up page successfully', function() {    
    expect(browser.getTitle()).toEqual(testData.signUpPage.title);
    expect(signUpPage.checkSignUpPageHeaderDisplayed()).toBeTruthy();
    expect(signUpPage.checkEmailTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkConfEmailTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkPasswordTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkConfPwdTextBoxDisplayed()).toBeTruthy();
    expect(signUpPage.checkSignUpButtonDisplayed()).toBeTruthy();
    expect(signUpPage.checkFacebookSignUpButtonDisplayed()).toBeTruthy();
    expect(signUpPage.checkGoogleSignUpButtonDisplayed()).toBeTruthy();
  });

  using(signUpData.users, function(user){
    it('should Sign Up successfully', function() { 
      
      signUpPage.enterEmail(user.email);
      signUpPage.enterConfirmEmail(user.emailConfirm);
      signUpPage.enterPassword(user.password);
      signUpPage.enterConfirmPassword(user.confirmPassword);
      signUpPage.clickSignUpButton();
      signUpPage.clickCaptcha();
      signUpPage.clickSignUpButton();
      expect(signUpPage.getStartedMessageDisplayed()).toBeTruthy();
    }); 
  });

  afterEach( async function () {
     browser.manage().deleteAllCookies();    
     browser.executeScript("window.sessionStorage.clear()");    
     browser.executeScript("window.localStorage.clear()");    
     browser.actions().sendKeys(protractor.Key.CONTROL+protractor.Key.SHIFT+ protractor.Key.DELETE).perform();
  }); 
});