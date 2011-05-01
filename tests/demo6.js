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
    test("instantiation", 3, function testInstantiation() {
		ok(typeof this.utility == "object", "Verifying if intantiation worked");
		
		ok(this.utility instanceof Utility, 'Verify if instance is of type Utility');
        equals(typeof this.utility.constructor, "function", "Verifying constructor type");
    });
	
	/**
	 * Test the RuntimeException
	 */
	test('RuntimeException', 7, function RuntimeException() {
		var self = this;
		equals(typeof self.utility.RuntimeException, "function", "Verify existence of RuntimeException");
		equals(1, self.utility.RuntimeException.prototype.constructor.length, "Amount of arguments");
		equals(self.utility.RuntimeException.prototype.name, 'Error', "Check if it of the correct type");
		
		// check for optional argument
		var exception1 = new self.utility.RuntimeException();
		equals(exception1.name, 'Utility.RuntimeException', 'Verify we have a new RuntimeException object');
		equals(exception1.message, '', 'Check optional parameter');
		
		// check for argument
		var errorMessage = 'An error message';
		var exception2 = new self.utility.RuntimeException(errorMessage);
		same(exception2.message, errorMessage, 'Check if parameter is correctly set');
		
		// is it catchable?
		try {
			throw new self.utility.RuntimeException(errorMessage);
		} catch (e) {
			equals(e.name, 'Utility.RuntimeException', 'Verify if exception is catchable');
		}
	});
	
	/**
	 * Test the InvalidArgumentException
	 */
	test('InvalidArgumentException', 7, function InvalidArgumentException() {
		var self = this;
		equals(typeof self.utility.InvalidArgumentException, "function", "Verify existence of InvalidArgumentException");
		equals(1, self.utility.InvalidArgumentException.prototype.constructor.length, "Amount of arguments");
		equals(self.utility.InvalidArgumentException.prototype.name, 'Error', "Check if it of the correct type");
		
		// check for optional argument
		var exception1 = new self.utility.InvalidArgumentException();
		equals(exception1.name, 'Utility.InvalidArgumentException', 'Verify we have a new InvalidArgumentException object');
		equals(exception1.message, '', 'Check optional parameter');
		
		// check for argument
		var errorMessage = 'An error message';
		var exception2 = new self.utility.InvalidArgumentException(errorMessage);
		same(exception2.message, errorMessage, 'Check if parameter is correctly set');
		
		// is it catchable?
		try {
			throw new self.utility.InvalidArgumentException(errorMessage);
		} catch (e) {
			equals(e.name, 'Utility.InvalidArgumentException', 'Verify if exception is catchable');
		}
	});
	
	/**
	 * Verify the working of the round method
	 */
	test("round()", 2, function testRound() {
		var self = this;
		
		// Verify if method exists, and that it takes 2 parameters
		equals(typeof self.utility.round, "function", "Verify existence of the method");
		equals(2, self.utility.round.prototype.constructor.length, "Amount of arguments");
		
		// Verify exceptions (cannot be tested with JsTestDriver)
		/*
		raises(function() {
			self.utility.round([], 2);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong datatype 1st argument");
		raises(function() {
			self.utility.round(2.123456);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong datatype 2nd argument");
		raises(function() {
			self.utility.round(2.123456, -2);
		}, function(e){ return (e.name == 'Utility.InvalidArgumentException');}, "Must throw error for wrong amount of decimals");
		*/
		
		// TODO test for different values
	});
});