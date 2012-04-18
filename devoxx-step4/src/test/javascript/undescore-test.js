describe("Underscore collections tests", function() {

	var myArray;
	
	beforeEach(function() {
		myArray = [1, 2, 3, 4, 5];
	});
	
	it("should return the last item", function() {
		var res = _.last([1, 2, 3, 4, 5]);
		expect(res).toBe(5);
	});
	
	it("should return 1 for first item", function() {
		var res = _.first(myArray);
		expect(res).toBeGreaterThan(0);
		expect(res).toBeLessThan(2);
	});
	
	it("should contain 3", function() {
		expect(myArray).toContain(3);
		expect(myArray).not.toContain(42);
	});
	
	
	describe("some nested suite dedicated to spies", function() {
		
		it("should test a spy", function() {
			spyOn(_, "last");
			var res = _.last(myArray);
			expect(_.last).toHaveBeenCalled();
			expect(res).toBeUndefined();
		});
		
	});
	
});
