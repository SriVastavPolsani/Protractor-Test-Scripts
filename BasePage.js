/**
 * Created by SriVastav on 3/28/2017.
 */
var BasePage = function(){

    this.navigateToURL = function (url) {

        browser.get(url);
        
    };

    this.getPageTitle = function () {

        browser.getTitle();

    }

};

module.exports = new BasePage();