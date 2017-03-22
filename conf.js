exports.config = {
directConnect: true,
framework: 'jasmine2',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['Test.js'],
    onPrepare: function(){
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({

        allureReport: {
            resultsDir: 'allure-results'
        }
    }));
    jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function(png){
            allure.createAttachment('Screenshot', function(){
                return new Buffer(png,'base64')
            },'image/png')();
            done();
        })
    });
    }
}