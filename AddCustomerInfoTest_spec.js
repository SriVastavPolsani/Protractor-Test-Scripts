/**
 * Created by SriVastav on 3/29/2017.
 */

describe("Customer information Test", function(){

    var add_customer = require('../pages/AddCustomerDetails.js');

    it("Adding Customer Information", function(){

        add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("ab","CD","12");

    });

    it("Open Account", function(){

        add_customer.gotoOpenAccount();
        add_customer.opeanAccount("ab","Rupee");

    });



})
