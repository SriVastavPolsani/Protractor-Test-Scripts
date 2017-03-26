/**
 * Created by SriVastav on 3/23/2017.
 */
var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');

var first_sheet_name = workbook.SheetNames[0];

var address_of_cell = 'B2';

var worksheet = workbook.Sheets[first_sheet_name];

var desired_cell = worksheet[address_of_cell];

var desired_value = desired_cell.v;

//console.log(desired_value);

var sheet_name_list = workbook.SheetNames;

sheet_name_list.forEach(function(y){ /*iterate through sheets*/

    var worksheet = workbook.Sheets[y];

    for( z in worksheet) {

        /* all cells that do not begin with "!" correspond to cell address */
        if(z[0] === '!') continue;
        console.log(y+"!"+z+"="+JSON.stringify(worksheet[z].v));
    }



});

/*describe("Test excel data usage", function(){

    it("validating excel data", function(){
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    element(by.id("username")).sendKeys(desired_value);
    browser.sleep(2000);


    });

});*/