const urlQueryUpdater = require("./index.js");

test("should return same url if nothing updates", () => {
	expect(urlQueryUpdater({ query: { name: "test", where: "nowhere" } })).toBe(
		"name=test&where=nowhere"
	);
});

test("should return updates url if only provide updates", () => {
	expect(
		urlQueryUpdater({ updates: { name: "updates", where: "nowhere" } })
	).toBe("name=updates&where=nowhere");
});

test("should combine query and updates, updates should overwrite", () => {
	expect(
		urlQueryUpdater({
			query: { name: "test", where: "nowhere" },
			updates: { name: "updated" }
		})
	).toBe("name=updated&where=nowhere");
});

test("should add new updates to query", () => {
	expect(
		urlQueryUpdater({ query: { name: "noupdate" }, updates: { second: "new" } })
	).toBe("name=noupdate&second=new");
});

test("should remove when updates are null", () => {
	expect(
		urlQueryUpdater({
			query: { name: "noupdate", where: "removeme" },
			updates: { where: null }
		})
	).toBe("name=noupdate");
});

test("should use expect delimiter", () => {
	expect(
		urlQueryUpdater({
			query: { name: "noupdate" },
			updates: { second: "new" },
			delimiter: ","
		})
	).toBe("name=noupdate,second=new");
});

test("should inlcude prefix if set to true", () => {
	expect(
		urlQueryUpdater({
			query: { name: "noupdate" },
			updates: { address: "nowhere" },
			shouldIncludePrefix: true
		})
	).toBe("?name=noupdate&address=nowhere");
});
