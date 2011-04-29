$(function(){
    /**
     * Define the module:
     */
    module("Demo 2", {
		setup: function setup() {
			console.log('I will be run before all assertions');
		},
		teardown: function tearDown() {
			console.log('I will be run after all assertions');
		}
	});
	
    /**
     * A test case:
     */
    test("some assertions", 0, function testSomeAssertions() {
		console.log('Here come the assertions');
    });
});