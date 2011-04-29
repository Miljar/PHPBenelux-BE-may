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
		
        equal(typeof this.utility, "object", "Verifying existence of Utility object");
        equal(typeof this.utility.constructor, "function", "Verifying constructor type");
    });
	
	/**
	 * Test the RuntimeException
	 */
	test('RuntimeException', function RuntimeException() {
		expect(7);
		var self = this;
		equal(typeof self.utility.RuntimeException, "function", "Verify existence of RuntimeException");
		equal(1, self.utility.RuntimeException.prototype.constructor.length, "Amount of arguments");
		equal(self.utility.RuntimeException.prototype.name, 'Error', "Check if it of the correct type");
		
		// TODO check for optional argument
		var exception1 = new self.utility.RuntimeException();
		equal(exception1.name, 'Utility.RuntimeException', 'Verify we have a new RuntimeException object');
		equal(exception1.message, '', 'Check optional parameter');
		
		var errorMessage = 'An error message';
		var exception2 = new self.utility.RuntimeException(errorMessage);
		strictEqual(exception2.message, errorMessage, 'Check if parameter is correctly set');
		
		try {
			throw new self.utility.RuntimeException(errorMessage);
		} catch (e) {
			equal(e.name, 'Utility.RuntimeException', 'Verify if exception is catchable');
		}
	});
	
	/**
	 * Test the InvalidArgumentException
	 */
	test('InvalidArgumentException', function InvalidArgumentException() {
		expect(7);
		var self = this;
		equal(typeof self.utility.InvalidArgumentException, "function", "Verify existence of InvalidArgumentException");
		equal(1, self.utility.InvalidArgumentException.prototype.constructor.length, "Amount of arguments");
		equal(self.utility.InvalidArgumentException.prototype.name, 'Error', "Check if it of the correct type");
		
		// TODO check for optional argument
		var exception1 = new self.utility.InvalidArgumentException();
		equal(exception1.name, 'Utility.InvalidArgumentException', 'Verify we have a new InvalidArgumentException object');
		equal(exception1.message, '', 'Check optional parameter');
		
		var errorMessage = 'An error message';
		var exception2 = new self.utility.InvalidArgumentException(errorMessage);
		strictEqual(exception2.message, errorMessage, 'Check if parameter is correctly set');
		
		try {
			throw new self.utility.InvalidArgumentException(errorMessage);
		} catch (e) {
			equal(e.name, 'Utility.InvalidArgumentException', 'Verify if exception is catchable');
		}
	});
	
	/**
	 * Verify the working of the round method
	 */
	test("round()", function testRound() {
		expect(5);
		var self = this;
		
		// Verify if method exists, and that it takes 2 parameters
		equal(typeof self.utility.round, "function", "Verify existence of the method");
		equal(2, self.utility.round.prototype.constructor.length, "Amount of arguments");
		
		// Verify exceptions (cannot be tested with JsTestDriver)
		raises(function() {
			self.utility.round([], 2);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong datatype 1st argument");
		raises(function() {
			self.utility.round(2.123456);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong datatype 2nd argument");
		raises(function() {
			self.utility.round(2.123456, -2);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong amount of decimals");
		
		// TODO test for different values
	});
});