/* Created by Sri Vastav */

describe("Validation of calculator app", function(){

    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

    it("Calculate sum of pairs of elements", function(){


        element(by.model("first")).sendKeys("6");
        element(by.model("second")).sendKeys("9");

        element(by.buttonText("Go!")).click();


        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("3");

        element(by.buttonText("Go!")).click();
    });

    it("Print out the first row of elements", function(){

        element(by.repeater("result in memory").row(0)).getText().then(function(text){

            console.log(text);

        });
        browser.sleep(3000);
    });

    it("Print out the first column of elements", function(){

        element.all(by.repeater("result in memory").column("result.timestamp")).getText().then(function(text){

            console.log(text);

        });
        browser.sleep(3000);
    });

    it("Print out all the elements of the table", function(){

        element.all(by.repeater("result in memory")).getText().then(function(text){

            console.log(text);

        });
        browser.sleep(3000);
    });

    it("Print out all the elements of the table one row in one line", function(){

        element.all(by.repeater("result in memory")).getText().then(function(rows){

            //console.log(text);

            var noOfRows = rows.length;

            for(var i =0 ; i< noOfRows; i++)
            {
                var data = element(by.repeater("result in memory").row(i)).getText();
                data.then(function(text){

                    console.log(text);
                });
            }

        });
        browser.sleep(3000);
    });





});
