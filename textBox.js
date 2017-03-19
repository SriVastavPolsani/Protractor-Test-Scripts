describe("Input box Test", function(){

it("executing the input box test", function(){

browser.get("https://angularjs.org/");
element(by.model("yourName")).sendKeys("Vastav");
element(by.binding("yourName")).getText().then(function(text){
	console.log(text);
});
});
});