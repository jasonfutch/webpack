it("should run", function() {
	Promise.all(
		[
			import(/* webpackChunkName: "a" */ "./a"),
			import(/* webpackChunkName: "b" */ "./b")
		]
	);

	const files = require("fs").readdirSync(__dirname);
	expect(files).toContainMatch('b---b_js');
	expect(files).toContainMatch('b---c_js');
});
