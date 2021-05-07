const { browser } = require('protractor');
var logger = require("log4js-protractor-appender");

describe('Create Website Application', function() {
  var testData = require('../resources/testData.json');
  var testDataProvider = require('../resources/testDataProvider.json');
  var using = require('jasmine-data-provider');

  var homePage = new pages.homePage();
  var loginPage = new pages.loginPage();

  beforeEach(function() {    
    homePage.openUrl(testData.application.baseUrl);
    browser.logger.info("Browser opened..");
  });

  fit('should open the home page successfully', function() {
    expect(browser.getTitle()).toEqual(testData.application.title);
    expect(homePage.getLogoExist).toBeTruthy();
    expect(homePage.checkSignInButtonDisplayed).toBeTruthy();
    expect(homePage.checkHomePageHeaderDisplayed).toBeTruthy();
    expect(homePage.topBarMenuDisplayed).toBeTruthy();
  });

    
});