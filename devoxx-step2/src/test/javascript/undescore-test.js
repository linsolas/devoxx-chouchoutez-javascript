describe("Underscore collections tests", function() {

	it("should return the last item", function() {
		var res = _.last([1, 2, 3, 4, 5]);
		expect(res).toBe(5);
	});
	
});
