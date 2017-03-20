/** Written by Vastav */

describe("Testing the Calulator app",function() {

    var expected_element;

    beforeEach(function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("8");

        element(by.buttonText("Go!")).click();

        expected_element = element(by.binding("latest")).getText();

    });

    afterEach(function () {

        //browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        console.log("Executed it Function");
    });

    it("Validating 7 + 8 = 15", function () {


        expected_element.then(function (text) {

            expect(parseInt(text)).toBe(15);
        });
    });

        it("Validating 7 + 8 != 20", function () {


            //expected_element.not.toBe(10);

            expected_element.then(function (text) {

                //console.log("Result is :" + text);
                expect(parseInt(text)).not.toBe(20);
            });
        });

        it("Validating 7 + 8 = 17", function () {


            expected_element.then(function (text) {

                expect(parseInt(text)).toBe(17);
                //console.log("Result is :" + text);
            });
            //expected_element.toBe(17);
        });


    });
