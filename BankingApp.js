describe("Automation test of sample banking App", function(){

it("Validating customer login", function(){

browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
element(By.buttonText("Customer Login")).click();


element.all(by.css("#userSelect option")).then(function(items){
console.log("Total values in the dropdown are: "+ items.length);

//Printing values from the drop down list
console.log("-----Printing values from the drop down list---------");
for(i=0;i<items.length;i++)
{
items[i].getText().then(function(text)
{
console.log(text);
});
}

//Printing value attribute from the drop down list
console.log("-----Printing value attribute from the drop down list---------");
for(i=0;i<items.length;i++)
{
items[i].getAttribute("value").then(function(text)
{
console.log(text);
});
}

//Automating Clicking on a particular element.

element(by.model("custId")).$("[value = '2']").click();
browser.sleep(3000);


});
});
});