/**
 * Created by SriVastav on 3/20/2017.
 */

describe("Validating the Registration page",function(){

    it("Using new attribute for button to validate registration", function () {

       browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

       element(by.model("Auth.user.name")).sendKeys("angular");
       element(by.model("Auth.user.password")).sendKeys("password");
       element(by.model("model[options.key]")).sendKeys("dsvhb");
       element(by.ngClick('Auth.login()')).click();

       browser.sleep(3000);


    });

});
