# 怎么写出来的循环

## 原始代码

```js
handleFiledAndValue = (data, filters) => {
	if (!data || !filters) return []
	let list = Object.keys(data) || []
	for (let p = 0; p < list.length; p++) {
		list[p] = {
			key: p + 1,
			filterType: list[p],
			child: data[list[p]]
		}
	}
	let result = []
	for (let i = 0; i < list.length; i++) {
		const listItem = list[i]
		for (let k = 0; k < filters.length; k++) {
			const filtersItem = filters[k]
			if (filtersItem.filterField === listItem.filterType) {
				result[i] = {
					filterType: filtersItem.filterType,
					filterName: filtersItem.filterName,
					filterField: filtersItem.filterField,
					filterChild: listItem.child
				}
			}
		}
	}
	return result;
}
```

## 改进后

```js
handleFiledAndValue = (data = {}, filters = []) => {
	if (!data || !filters) return []
	if (JSON.stringify(data) === "{}") {
		return []
	}

	return filters.map(item => {
		const key = item.filterField
		let child = []

		if (data[key]) {
			child = data[key]
		}

		return {
			filterType: item.filterType,
			filterName: item.filterName,
			filterField: item.filterField,
			filterChild: child
		}
	})
}
```
