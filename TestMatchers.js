/*** Created by SriVastav */

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

    expect(title).toEqual("Protractor practice website - Calculator");

    });

    it("Validating Title using not toEqual", function () {

        expect(title).not.toEqual("Protractor practice website - Calculator1");

    });

    it("Validating Title using toMatch", function () {

        expect(title).toMatch("Calculator");

    });


});
