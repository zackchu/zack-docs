# 空指针代码

## 原始代码

```js
handleFilterWeek = (data) => {
	if (data && data.length > 0) {
		let list = [];
		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			list[i] = {
				value: item.end,
				label: item.start + "至" + item.end,
			};
		}
		return list;
	}
};
```
