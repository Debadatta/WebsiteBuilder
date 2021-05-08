const { browser } = require('protractor');
const labelActions = require('../commons/labelActions');

module.exports = function () {
    'use strict';
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var labelActions = new commons.labelActions();

    var homePageHeader = objLocator.findLocator(objRepo.homePage.homePageHeaderText);
    var homePageLogoLink = objLocator.findLocator(objRepo.homePage.homePageLogoLink);
    var signInLink = objLocator.findLocator(objRepo.homePage.signInLink);
    
   
    this.openUrl = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.checkLoginPageHeaderDisplayed = function () {
        try {
            var loginPageHeader = objLocator.asyncFindLocator(objRepo.loginPage.header);
            return waitActions.checkElementIsDisplayed( loginPageHeader );
        } catch(e) {
            browser.logger.error(e);
        }
    };

    this.checkEmailTextBoxDisplayed = function() {
        try { 
            var emailTextBox = objLocator.asyncFindLocator(objRepo.loginPage.email);
            return waitActions.checkElementIsDisplayed( emailTextBox );
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkPasswordTextBoxDisplayed = function() {
        try {
            var passwordTextBox = objLocator.asyncFindLocator(objRepo.loginPage.password);
            return waitActions.checkElementIsDisplayed( passwordTextBox);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkLoginButtonDisplayed = function() {
        try {
            var loginButton = objLocator.asyncFindLocator(objRepo.loginPage.loginButton);
            return waitActions.checkElementIsDisplayed( loginButton);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.enterEmailAndPassword = function( email,password) {
        try {
            var emailTextBox = objLocator.asyncFindLocator(objRepo.loginPage.email);
            var passwordTextBox = objLocator.asyncFindLocator(objRepo.loginPage.password);
            inputBoxActions.type(emailTextBox, email);
            inputBoxActions.type(passwordTextBox, password);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.clickLoginButton = function() {
        try {
            var loginButton = objLocator.asyncFindLocator(objRepo.loginPage.loginButton);
            return buttonActions.click(loginButton);
        } catch (e) {
            browser.logger.error(e);
        }
    }

};