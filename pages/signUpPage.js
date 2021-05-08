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

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(calculatorPage);
        return this;
    };

    this.checkSignUpPageHeaderDisplayed = function () {
        try {
            var signUpPageHeader = objLocator.asyncFindLocator(objRepo.signUpPage.header);
            return waitActions.checkElementIsDisplayed( signUpPageHeader );
        } catch(e) {
            browser.logger.error(e);
        }
    };

    this.checkEmailTextBoxDisplayed = function() {
        try { 
            var emailTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.email);
            return waitActions.checkElementIsDisplayed( emailTextBox );
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkConfEmailTextBoxDisplayed = function() {
        try {
            var confEmailTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.emailConfirm);
            return waitActions.checkElementIsDisplayed( confEmailTextBox);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkPasswordTextBoxDisplayed = function() {
        try {
            var passwordTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.password);
            return waitActions.checkElementIsDisplayed( passwordTextBox);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkConfPwdTextBoxDisplayed = function() {
        try {
            var confPasswordTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.confirmPassword);
            return waitActions.checkElementIsDisplayed( confPasswordTextBox);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkSignUpButtonDisplayed = function() {
        try {
            var submitButton = objLocator.asyncFindLocator(objRepo.signUpPage.submitButton);
            return waitActions.checkElementIsDisplayed( submitButton);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkFacebookSignUpButtonDisplayed = function() {
        try {
        var facebookSignUpButton = objLocator.asyncFindLocator(objRepo.signUpPage.facebookSignUp);
        return waitActions.checkElementIsDisplayed( facebookSignUpButton );
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.checkGoogleSignUpButtonDisplayed = function() {
        try {
        var googleSignUpButton = objLocator.asyncFindLocator(objRepo.signUpPage.googleSignUp);
        return waitActions.checkElementIsDisplayed( googleSignUpButton );
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.enterEmail = function(email) {        
        try {
            var emailTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.email);
            inputBoxActions.type( emailTextBox, email );
        } catch (e) {
            browser.logger.error(e);
        }
    }
    this.enterConfirmEmail = function(cnfEmail) {        
        try {
            var confEmailTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.emailConfirm);
            inputBoxActions.type( confEmailTextBox, cnfEmail );
        } catch (e) {
            browser.logger.error(e);
        }
    }
    this.enterPassword = function(password) {
        try {
            var passwordTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.password);
            inputBoxActions.type( passwordTextBox, password );
        } catch (e) {
            browser.logger.error(e);
        }
    }
    this.enterConfirmPassword = function(cnfPassword) {
        try {
            var confPasswordTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.confirmPassword);
            inputBoxActions.type( confPasswordTextBox, cnfPassword);
        } catch (e) {
            browser.logger.error(e);
        }
    }
    this.clickSignUpButton = function() {
        try {
            var submitButton = objLocator.asyncFindLocator(objRepo.signUpPage.submitButton);
            buttonActions.click(submitButton);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.getStartedMessageDisplayed =  function() {
        try {
            var getStartedMsg = objLocator.asyncFindLocator(objRepo.introPage.getStartedMsg);
            return waitActions.waitForElementIsDisplayed(getStartedMsg);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.clickCaptcha = function() {
        try {
            var captchaImage = objLocator.asyncFindLocator(objRepo.signUpPage.captcha);
            return buttonActions.click(captchaImage);
        } catch (e) {
            browser.logger.error(e);
        }
    }

    this.clickLogInLink = function() {
        try {
            var logInLink = objLocator.asyncFindLocator(objRepo.signUpPage.loginLink);
            return buttonActions.click(logInLink);
        } catch (e) {
            browser.logger.error(e);
        }

    }
};