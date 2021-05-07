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
    var signUpLink = objLocator.findLocator(objRepo.homePage.signUpLink);
    var addButton = objLocator.findLocator(objRepo.homePage.addButton);
    var toDoTaskLabel = objLocator.findLocator(objRepo.homePage.checkBoxLabel);
    var learnMenu= objLocator.dynamicMenuSelector("Learn");
    var tutorialMenu= objLocator.dynamicMenuSelector("Tutorial");

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

    this.getLogoExist = function () {
        return waitActions.waitForElementIsDisplayed(homePageLogoLink);
    };

    this.checkSignInButtonDisplayed = function () {
        return waitActions.waitForElementIsDisplayed(signInLink);
    };

    this.checkHomePageHeaderDisplayed = function () {
        return waitActions.waitForElementIsDisplayed(homePageHeader);
    };

    this.topBarMenuDisplayed = function() {
        const array = ["Creation", "Business", "Growth", "Resources", "Pricing", "Support"];
        elementPresent = true;
        array.forEach(function (item, index) {
            elementPresent = elementPresent && waitActions.waitForElementIsDisplayed(objLocator.dynamicMenuSelector(item));
        });
        return elementPresent;
    };

    this.clickSignInLink = function() {
        waitActions.waitForElementIsDisplayed(signInLink);
        buttonActions.click(signInLink);
    }
    this.clickSignUpLink = function() {
        waitActions.waitForElementIsDisplayed(signUpLink);
        buttonActions.click(signUpLink);
    }

};