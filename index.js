module.exports = function urlQueryUpdater(args) {
	const updates = args.updates || {};
	const delimiter = args.delimiter || "&";
	const prefix = args.shouldIncludePrefix ? "?" : "";
	const queryCopy = Object.assign({}, args.query, updates);
	const updatedKeys = Object.keys(queryCopy).reduce((queryMap, key) => {
		if (queryCopy[key]) {
			return queryMap.concat(`${key}=${queryCopy[key]}`);
		}
		return queryMap;
	}, []);
	return prefix + updatedKeys.join(delimiter);
};
