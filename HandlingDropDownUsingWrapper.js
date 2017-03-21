/**
 * Created by SriVastav on 3/20/2017.
 */

var SelectWrapper = require('./selectWrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");

describe("Automating BankLogin", function(){



    it("selecting a user from drop down", function(){



    mySelect.selectByText("Harry Potter");
    browser.sleep(2000);

    });

    it("Displaying Values from the dropdown", function(){

        //browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");

        mySelect.getOptions().then(function (options) {

            console.log(options.length);

            for(var i =0; i < options.length-1; i++){

                element(by.repeater("cust in Customers").row(i)).getText().then(function (text) {

                    console.log(text);

                });
            }


        });
        browser.sleep(2000);





    });


}) ;
