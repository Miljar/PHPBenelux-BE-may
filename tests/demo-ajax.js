$(function(){
    /**
     * Define the module:
     */
    module("Demo Ajax", {
		setup: function setup() {
			this.isComplete = false;
			
		},
		teardown: function tearDown() {
			
		}
	});
	
    /**
     * Ajax test case, with timers:
     */
    test("with timers", 1, function testWithTimers() {
		expect(1);
		var self = this;
		$.ajax({
		  url: 'ajax.html',
		  success: function (data) {
			  self.isComplete = true;
		  },
		  dataType: 'html'
		});
		stop();
		window.setTimeout(function() {
			ok(self.isComplete, 'Ajax call completed');
			start();
		}, 250);
    });
	
    /**
     * Ajax test case, with callback:
     */
	test("with callback", 1, function testWithCallback() {
		expect(1);
		var self = this;
		stop();
		$.ajax({
		  url: 'ajax.html',
		  success: function (data) {
			  self.isComplete = true;
			  ok(self.isComplete, 'Ajax call completed');
			  start();
		  },
		  dataType: 'html'
		});		
	});
	
	/**
	 * Ajax test case, with asyncTest
	 * 
	 * equivalent of test(), with immediate call to stop()
	 * a call to start() is required
	 */
	asyncTest("with asyncTest", function testWithAsyncTest() {
		var self = this;
		$.ajax({
		  url: 'ajax.html',
		  success: function (data) {
			  self.isComplete = true;
			  ok(self.isComplete, 'Ajax call completed');
			  start(); // required
		  },
		  dataType: 'html'
		});	
	});
});