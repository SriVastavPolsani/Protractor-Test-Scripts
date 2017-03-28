var base = require('../pages/BaseePage.js');
describe("Bank Manager Login Test", function(){

    var home_page = require('../pages/HomePage.js');
    it('Login as Bank Manager', function(){

     base.navigateToURL("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    //browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    home_page.loginAsBankManager();
    var title = base.getPAgeTitle();
    expect("title").toBe("Anything");
    browser.sleep(3000);

    })

})