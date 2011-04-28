(function() {
	if (typeof window.Utility !== 'undefined'){
		alert('A library with the name "Utility" is already loaded');
		return;
	}
	
	window.Utility = function () {
		
	};
	
	Utility.prototype.RuntimeException = function RuntimeException (message) {
		this.name = 'Utility.RuntimeException';
		this.message = (message || "");
	};
	Utility.prototype.RuntimeException.prototype = Error.prototype;

	Utility.prototype.InvalidArgumentException = function InvalidArgumentException (message) {
		this.name = 'Utility.InvalidArgumentException';
		this.message = (message || "");
	};
	Utility.prototype.InvalidArgumentException.prototype = Error.prototype;

	/**
	 * Rounds the given number to the given amount of decimals
	 * 
	 * @param string|number value - the value to round
	 * @param int decimals - the amount of decimals to round to
	 * @return float
	 */
	Utility.prototype.round = function round(value, decimals) {
		if (typeof value !== 'number' && typeof value !== 'string') {
			throw new this.InvalidArgumentException('Incorrect datatype of value to round');
		}
		
		if (typeof decimals !== 'number') {
			throw new this.InvalidArgumentException('Incorrect datatype of decimals');
		}
		
		if (decimals < 0) {
			throw new this.InvalidArgumentException('Decimals must be bigger than or equal to 0');
		}
		
		var factor = Math.pow(10, decimals);
		var newValue = Math.round(value*factor)/factor;
		return newValue;
	};
})();