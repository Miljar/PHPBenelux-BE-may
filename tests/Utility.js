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
		expect(2);
		
		// Verify if method exists, and that it takes 2 parameters
		equals(typeof this.utility.round, "function", "Verify existence of the method");
		equals(2, this.utility.round.prototype.constructor.length, "Amount of arguments");
		
		
	});
});