$(function(){
    /**
     * Define the module:
     */
    module("Demo 4", {
		setup: function setup() {
			this.obj1 = {
				name: 'object',
				message: 'I am an object',
				tags:['news', 'object']
			};
			this.obj2 = {
				name: 'object',
				message: 'I am an object',
				tags:['news', 'object']
			};
			this.obj3 = {
				type: 'news',
				title: 'Elephpants spotted!',
				author: {
					name: 'Joe',
					surname: 'Sixpack'
				},
				tags: [['flash', 'php', 'elephants'], ['joe', 'sixpack']]
			};
			this.obj4 = {
				type: 'news',
				title: 'Elephpants spotted!',
				author: {
					name: 'Joe',
					surname: 'Sixpack'
				},
				tags: [['flash', 'php', 'elephants'], ['joe', 'sixpack']]
			};
		}
	});
	
    /**
     * DeepEqual:
     */
    test("DeepEqual examples", 4, function testDeepEqualExamples() {
		var self = this;
		deepEqual(self.obj1, self.obj2, 'The objects should be equal');
		same(self.obj1, self.obj2, 'The objects should be the same'); // JsTestRunner safe
		
		deepEqual(self.obj3, self.obj4, 'The objects should be equal');
		same(self.obj3, self.obj4, 'The objects should be the same'); // JsTestRunner safe
		
		//self.obj4.tags[1] = ['john', 'sixpack'];
		
		//deepEqual(self.obj3, self.obj4, 'The objects should be equal');
		//same(self.obj3, self.obj4, 'The objects should be the same'); // JsTestRunner safe
    });
	
    /**
     * NotDeepEqual:
     */
    test("NotDeepEqual examples", 3, function testNotDeepEqualExamples() {
		var self = this;
		
		deepEqual(self.obj3, self.obj4, 'The objects should be equal');
		same(self.obj3, self.obj4, 'The objects should be the same'); // JsTestRunner safe
		
		self.obj4.tags[1] = ['john', 'sixpack'];
		
		notDeepEqual(self.obj3, self.obj4, 'The objects should not be equal');
    });
});