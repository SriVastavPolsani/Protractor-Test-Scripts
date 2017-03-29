/**
 * Created by SriVastav on 3/28/2017.
 */
var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));
var locator = require("../util/customLocator.js");

var AddCustomerDetails = function () {

    this.gotoAddCustomer = function () {

        element(by.ngClick("addCust()")).click();
        
    };

    this.gotoOpenAccount = function () {

        element(by.ngClick("openAccount()")).click();

    };

    this.gotoSearchCustomer = function () {

        element(by.buttonText("Customers")).click();

    };

    this.addCustomerInfo = function (fname, lname, postCD) {

        element(by.model("fName")).sendKeys("fname");
        element(by.model("lName")).sendKeys("lname");
        element(by.model("postCD")).sendKeys("postCD");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log(text);

        });

        alertDialog.accept();
        browser.sleep(2000);

    };

    this.openAccount = function () {

        //element(by.ngClick("addCust()")).click();
        mySelect.selectByText("Harry Potter");
        currency.selectByText("Pound");
        element(by.buttonText("Process")).click();

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log(text);

        });

        alertDialog.accept();
        browser.sleep(2000);

    };

    this.validateCustomerRecords = function(){

       // element(by.ngClick("showCust()")).click();
        element(by.model("searchCustomer")).sendKeys("Harry");
        browser.sleep(3000);
        element(by.repeater("cust in Customers").row("0").column("fName")).getText().then(function (text) {

            expect(text).toEqual("Harry");
            console.log(text);

        });

    }

    
};