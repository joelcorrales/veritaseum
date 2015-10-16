describe('SRC SPECS', function() {
	describe('id.js specs', function() {
		it('Unit Test for NAMESPACE.resource', function() {

			var _newResource = NAMESPACE.resource(1);
			var resource = _newResource.getExpensiveResource();

			expect(NAMESPACE).not.toBe(undefined);

			//Value have to be the same as the string below since there is no other resource in the private variable _all_ids.
			expect(resource.value).toBe("I'm a very expensive resource associated with ID 1");

			expect(_newResource.getId()).toBe(1);

			//Test the state of the resource before and after use the close function to test its functionality.
			expect(_newResource.getState()).toBe(false);
			_newResource.close();
			expect(_newResource.getState()).toBe(true);
		});
	});
});