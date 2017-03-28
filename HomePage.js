require('../util/cusomlocators.js');

var HomePage = function () {

    this.loinCustomer = function () {

        element(by.partialButtonText('customer')).click();
    };

    this.loginAsBankManager = function () {

        element(by.ngClick('manager()')).click();
    };
    
};

module.exports = new Homepage();