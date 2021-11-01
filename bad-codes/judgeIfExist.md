# Judge key exist

## Bad Code

```js
for (let key in this.queryStringForDate) {
	const date = this.queryStringForDate[key];
	if (this.queryStringForDate.hasOwnProperty(key) && !AppUtil.isEmpty(date)) {
		// codes
	}
}
```
