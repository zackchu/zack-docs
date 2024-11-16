# `prefers-color-scheme`

> 如果把 `privacy.resistFingerprinting` 设置为 `true`，则 `prefers-color-scheme` 总是 `light`
>
> 或者，用户可以创建数字首选项 `ui.systemUsesDarkTheme` 来覆盖默认行为，并返回 `light`（值：0），`dark`（值：1）或 `no-preference`（值：2）。  
> （任何其他值都会导致 Firefox 返回 `light`。）

`prefers-color-scheme` 这一媒体查询用来检测用户是否使用明/暗主题

## 语法

1. `light`
2. `dark`

## Example

```css
.day {
	background: #eee;
	color: black;
}

.night {
	background: #333;
	color: white;
}

@media (prefers-color-scheme: dark) {
	.day.dark-scheme {
		background: #333;
		color: white;
	}

	.night.dark-scheme {
		background: black;
		color: #ddd;
	}
}

@media (prefers-color-scheme: light) {
	.day.light-scheme {
		background: white;
		color: #555;
	}

	.night.light-scheme {
		background: #eee;
		color: black;
	}
}

.day,
.night {
	display: inline-block;
	padding: 1em;
	width: 7em;
	height: 2em;
	vertical-align: middle;
}
```
