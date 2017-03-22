/**
 * Created by SriVastav on 3/19/2017.
 */

describe("Validating title of a page",function(){


    var title;
    beforeEach(function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        title = browser.getTitle();
        browser.sleep(2000);


    });

    it("Checking if title is same as passed value",function()
    {
        
        title.then(function (txt) {

            expect(txt).toEqual("Protractor practice website - Banking App");
            
        })

    });

    it("Checking if title is not equal to a value",function()
    {

        title.then(function (txt) {

            expect(txt).not.toEqual("1Protractor practice website - Banking App");

        })

    });

});

