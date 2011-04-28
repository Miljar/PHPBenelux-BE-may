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
    test("instantiation", function() {
        expect(2);
        equals(typeof this.utility, "object", "Verifying existence of Utility object");
        equals(typeof this.utility.constructor, "function", "Verifying constructor type");
    });
});