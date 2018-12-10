it("should run", function() {
	Promise.all(
		[
			import(/* webpackChunkName: "a" */ "./a"),
			import(/* webpackChunkName: "b" */ "./b"),
			import(/* webpackChunkName: "c" */ "./c")
		]
	);

	const files = require("fs").readdirSync(__dirname);
	expect(files).toContain('a.bundle.js');
	expect(files).toContain('b.bundle.js');
	expect(files).toContain('c.bundle.js');
});
