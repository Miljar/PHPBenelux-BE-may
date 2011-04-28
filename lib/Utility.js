(function() {
	if (typeof window.Utility !== 'undefined'){
		alert('A library with the name "Utility" is already loaded');
		return;
	}
	
	window.Utility = function () {
		
	};
	
	/**
	 * Rounds the given number to the given amount of decimals
	 * 
	 * @param float value - the value to round
	 * @param int decimals - the amount of decimals to round to
	 * @return float
	 */
	Utility.prototype.round = function round(value, decimals) {
		var factor = Math.pow(10, decimals);
		var newValue = Math.round(value*factor)/factor;
		return newValue;
	};
})();