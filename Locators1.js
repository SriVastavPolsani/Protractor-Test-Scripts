/** Created by Sri Vastav */

describe("Validating the login page",function(){

    it("Automating the login functionality",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        element(by.model("Auth.user.name")).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("Vastav");
        element(by.buttonText("Login")).click();

        element(by.className("ng-scope")).getText().then(function(text){

            expect(text).toContain("Home");

        });
    });

});
