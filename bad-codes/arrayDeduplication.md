# 数组去重

## 原始代码

```js
//报告选中追加去重
handleFilterReport = (rptList) => {
	let result = rptList.filter((x, index, self) => {
		let rptListIds = [];
		rptList.forEach((item, i) => {
			rptListIds.push(item.seqNo);
		});
		return rptListIds.indexOf(x.seqNo) === index;
	});
	let list = [];
	if (result && result.length > 0) {
		result.map((item) => {
			list.push({
				...item,
			});
		});
	}
	return list;
};
```
