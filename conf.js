var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');
var log4js = require('log4js');
var fs = require('fs-extra');
exports.config = {
    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['global.js', 'specs/homePageSpec1.js', 'specs/signUpPageSpec.js', 'specs/loginPageSpec.js'],
    multiCapabilities: [
        {  'browserName': 'chrome' }
        //, {  'browserName': 'firefox' }
    ],


    directConnect: true,
    allScriptsTimeout: 300000,
    getPageTimeout: 180000,
    maxSessions: 1,
    
    
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 300000
    },

    
    beforeLaunch:function(){
        fs.existsSync('./logs/ExecutionLog.log', function() {});
        
        log4js.configure({
            appenders: [
                { type: 'log4js-protractor-appender', category: 'protractorLog4js' },
                {
                    type: "file",
                    filename: './logs/ExecutionLog.log',
                    category: 'protractorLog4js'
                }
            ]
        });
    },

    onPrepare: function () {
        browser.getCapabilities().then(function (cap) {
            browser.browserName = cap.get('browserName');
            console.log('browserName:', browser.browserName);
        });
        // Default window size
        browser.driver.manage().window().maximize();
        // Default implicit wait
        browser.manage().timeouts().implicitlyWait(60000);
        // Angular sync for non angular apps
        browser.ignoreSynchronization = true;
        browser.logger = log4js.getLogger('protractorLog4js');
        fs.emptyDir('./reports/xml/', function (err) {
            //console.log(err);
        });
        
        browser.getCapabilities().then(function (cap) {
            fs.emptyDir('./reports/' + cap.get('browserName') + '/screenshots', function (err) {
                //console.log(err);
            });
        });
    
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/xml/',
            filePrefix: 'xmlresults'
        }));

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
    
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('./reports/' + browserName + '/screenshots/' + browserName + '-' + result.fullName + '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        });
         
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
    
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
    
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports/',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: browserName + '/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new htmlReporter().from('./reports/xml/xmlresults.xml', testConfig);
        });
    }

    
  }