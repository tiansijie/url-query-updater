module.exports = function urlQueryUpdater(args) {
	var updates = args.updates || {};
	var delimiter = args.delimiter || "&";
	var prefix = args.shouldIncludePrefix ? "?" : "";
	var queryCopy = Object.assign({}, args.query, updates);
	var updatedKeys = Object.keys(queryCopy).reduce(function (queryMap, key) {
		if (queryCopy[key]) {
			return queryMap.concat(key + "=" + queryCopy[key]);
		}
		return queryMap;
	}, []);
	return prefix + updatedKeys.join(delimiter);
};
