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
    // var signUpPageHeader = objLocator.asyncFindLocator(objRepo.signUpPage.header);
    // var emailTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.email);
    // var confEmailTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.emailConfirm);
    // var passwordTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.password);
    // var confPasswordTextBox = objLocator.asyncFindLocator(objRepo.signUpPage.confirmPassword);
    // var submitButton = objLocator.asyncFindLocator(objRepo.signUpPage.submitButton);
    

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
        return browser.driver.findElement(by.xpath("//h1[contains(text(), 'Sign Up')]")).isDisplayed();
       //return waitActions.waitForElementIsDisplayed(signUpPageHeader);
        //return waitActions.waitForElementIsDisplayed(signUpPageHeader);
    };

    this.checkEmailTextBoxDisplayed = function() {
        return browser.driver.findElement(by.id("input_2")).isDisplayed();
        //return waitActions.waitForElementIsDisplayed(emailTextBox);
    }

    this.checkConfEmailTextBoxDisplayed = function() {
        return browser.driver.findElement(by.name("emailConfirm")).isDisplayed();
        //return waitActions.waitForElementIsDisplayed(confEmailTextBox);
    }

    this.checkPasswordTextBoxDisplayed = function() {
        //return waitActions.waitForElementIsDisplayed(passwordTextBox);
        return browser.driver.findElement(by.name("password")).isDisplayed();
    }

    this.checkConfPwdTextBoxDisplayed = function() {
        return browser.driver.findElement(by.name("passwordConfirm")).isDisplayed();
        //return waitActions.waitForElementIsDisplayed(confPasswordTextBox);
    }

    this.checkSignUpButtonDisplayed = function() {
        //return waitActions.waitForElementIsDisplayed(submitButton);
        return browser.driver.findElement(by.name("submit")).isDisplayed();
    }

    
};