# `@supports`

## 一、基本

```css
@supports (display: grid) {
	div {
		display: grid;
	}
}

@supports not (display: grid) {
	div {
		float: right;
	}
}
```

## 二、语法

1. 声明语法
   ```css
   @supports (transform-origin: 5% 5%) {
   }
   ```
2. 函数语法
   - `selector()`
     ```css
     @supports selector(A > B) {
     }
     ```
3. `not` 操作符
   ```css
   @supports not (transform-origin: 10em 10em 10em) {
   }
   @supports not (not (transform-origin: 2px)) {
   }
   @supports (display: grid) and (not (display: inline-grid)) {
   }
   ```
4. `and` 操作符
   ```css
   @supports (display: table-cell) and (display: list-item) {
   }
   @supports (display: table-cell) and (display: list-item) and
   	(display: run-in) {
   }
   @supports (display: table-cell) and
   	((display: list-item) and (display: run-in)) {
   }
   ```
5. `or` 操作符

   ```css
   @supports (transform-style: preserve) or (-moz-transform-style: preserve) {
   }
   @supports (transform-style: preserve) or (-moz-transform-style: preserve) or
   	(-o-transform-style: preserve) or (-webkit-transform-style: preserve) {
   }
   @supports (transform-style: preserve-3d) or
   	(
   		(-moz-transform-style: preserve-3d) or
   			(
   				(-o-transform-style: preserve-3d) or
   					(-webkit-transform-style: preserve-3d)
   			)
   	) {
   }
   ```
