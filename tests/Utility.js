$(function(){
    /**
     * Define the module:
     */
    module("Utility", {
		setup: function setup() {
			this.utility = new Utility();
		}
	});
	
    /**
     * Verify existence of the utility object:
     */
    test("instantiation", function testInstantiation() {
        expect(3);
		
		ok(typeof this.utility == "object", "Verifying if intantiation worked");
		
        equals(typeof this.utility, "object", "Verifying existence of Utility object");
        equals(typeof this.utility.constructor, "function", "Verifying constructor type");
    });
	
	/**
	 * Verify the working of the 
	 */
	test("round()", function testRound() {
		expect(5);
		var self = this;
		
		// Verify if method exists, and that it takes 2 parameters
		equals(typeof self.utility.round, "function", "Verify existence of the method");
		equals(2, self.utility.round.prototype.constructor.length, "Amount of arguments");
		
		// Verify exceptions
		raises(function() {
			self.utility.round([], 2);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong datatype 1st argument");
		raises(function() {
			self.utility.round(2.123456);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong datatype 2nd argument");
		raises(function() {
			self.utility.round(2.123456, -2);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong amount of decimals");
	});
});