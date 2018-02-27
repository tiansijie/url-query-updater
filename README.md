## url-query-updater

return a update of the query of url you want to update

#### install
```
npm install url-query-updater
```

#### how to use

```js
import urlQueryUpdater from "url-query-updater";

const updatedQuery = urlQueryUpdater({
	query: { name: "test", where: "nowhere" },
	updates: { name: "updated" }
}); // "name=updated&where=nowhere"

const nextUpdatedQuery = urlQueryUpdater({
	query: { name: "noupdate" },
	updates: { address: "nowhere" },
	shouldIncludePrefix: true
}); // "?name=noupdated&address=nowhere"
```


#### args

* query
	
	a object contains the orginial query

* updates

	a object contains the queries need to be updated

* delimiter

	different delimiter than `&`

* shouldIncludePrefix

	will include `?` at the beginning of the return
