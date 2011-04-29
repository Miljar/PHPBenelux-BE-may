function myAssertion () {
	return false;
}

function divide(a, b) {
	return a/b;
}

$(function(){
    /**
     * Define the module:
     */
    module("Demo 3");
	
    /**
     * OK examples:
     */
    test("OK examples", 8, function testOKExamples() {
		ok(true, 'True is good');
		ok(1 == true, '1 is true too');
		ok('1' == 1, '"1" is 1');
		ok('1' == true, '"1" is true too');
		ok(myAssertion(), 'My assertion is good');
		var now = new Date();
		ok(now, 'Date?');
		ok(document.getElementById, 'document.getElementById exists');
		ok(document.getMyData, 'document.getMyData exists');
    });
	
	/**
	 * Equal examples
	 */
	test("Equal examples", 5, function testEqualExamples() {
		var a = 10;
		var b = 2;
		equal(a/b, 5, '10/2 equals 5!');
		equal(divide(a,b), 5, 'Divide function works');
		equal(divide(10, 0), Infinity, 'Division by 0');
		equal(isNaN("mystring" * 5), true, 'Not A Number');
		equal(typeof a, 'number', 'Type check');
	});
	
	/**
	 * NotEqual examples
	 */
	test("NotEqual examples", 2, function testNotEqualExamples() {
		var five = new Number(5);
		notEqual(typeof five, 'string', '5 is not a string');
		notEqual(typeof five.toString(), 'number', 'now 5 is a string');
	});
});