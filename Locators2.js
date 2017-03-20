/** Created by Sri Vastav */

describe("Validating Calculator App ", function(){

    it("printing the sum of 1 and 2 as 3",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("2");

        element(by.id("gobutton")).click();

        element(by.binding("latest")).getText().then(function(text){

            console.log(text); //3
        });


    });
});
