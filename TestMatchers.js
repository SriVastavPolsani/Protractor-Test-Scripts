/*** Created by SriVastav */
var logger = require('./log');
describe("Testing the title of a page",function() {

    var title;

    beforeEach(function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        title = browser.getTitle();

    });

    afterEach(function () {

        //browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        console.log("Executed it Function");
    });

    it("Validating Title using toEqual", function () {

        logger.log('info','Validating using equal');
    expect(title).toEqual("Protractor practice website - Calculator");

    });

    it("Validating Title using not toEqual", function () {
    logger.log('info','Validating using not equal');
        expect(title).not.toEqual("Protractor practice website - Calculator1");

    });

    it("Validating Title using toMatch", function () {
        logger.log('info','Validating using to match');
        expect(title).toMatch("Calculator");

    });


});
