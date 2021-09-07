# 一、选择器

## 1.`&`父元素选择器

- stylus

```stylus
textarea
input
	color #A7A7A7

	&:hover
		color #000
```

- css

```css
textarea,
input {
	color: #a7a7a7;
}

textarea:hover,
input:hover {
	color: #000;
}
```

- stylus

```stylus
body #login {
	-webkit-box-shadow: 1px 1px 3px #eee;
	-moz-box-shadow: 1px 1px 3px #eee;
	box-shadow: 1px 1px 3px #eee;
}

html.ie8 body #login,
html.ie7 body #login,
html.ie6 body #login {
	border: 2px solid #eee;
}
```

## 2.`^[N]`选择器

- stylue

```stylus
.foo
	&__bar
		width: 10px

		^[0]:hover &
			width: 20px

.foo
	&__bar
		&_baz
			width: 10px

			^[-1]:hover &
				width: 20px
```

- css

```css
.foo__bar {
	width: 10px;
}

.foo:hover .foo__bar {
	width: 20px;
}

.foo__bar_baz {
	width: 10px;
}

.foo__bar:hover .foo__bar_baz {
	width: 20px;
}
```

## 3.`^[N..M]`范围选择

- stylus

```stylus
.foo
	& .bar
		width: 10px

		^[0]:hover ^[1..-1]
			width: 20px
```

- css

```css
.foo .bar {
	width: 10px;
}

.foo:hover .bar {
	width: 20px;
}
```

## 4.`~/`字符

- stylus

```stylus
.block
	&__element
		~ /:hover &
			color: red
```

- css

```css
.block:hover .block__element {
	color: #f00;
}
```

## 5.`../`字符

- stylus

```stylus
.foo
	.bar
		width: 10px

		&,
		../ .baz
			height: 10px
```

- css

```css
.foo .bar {
	width: 10px;
}

.foo .bar,
.foo .baz {
	height: 10px;
}
```

## 6.`/`字符

- stylus

```stylus
textarea
input
	color #A7A7A7

	&:hover,
	/.is-hovered
		color #000
```

- css

```css
textarea,
input {
	color: #a7a7a7;
}

textarea:hover,
input:hover,
.is-hovered {
	color: #000;
}
```

## 7.`selector()`

```stylus
.foo
	selector()

// => '.foo'

.foo
	&:hover
		selector()

// '.foo:hover'

.foo
	selector('.bar')

// => '.bar'

.foo
	selector('&:hover')

// '.foo:hover'
```

## 8.`selector()`多值

- stylus

```stylus
{selector('.a', '.b', '.c, .d')}
	color: red

//即
.a
	.b
		.c,
		.d
			color: red
```

- css

```css
.a .b .c,
.a .b .d {
	color: #f00;
}
```

## 9.`selectors()`

- stylus

```stylus
.a
	.b
		&__c
			content: selectors()
```

- css

```css
.a .b__c {
	content: '.a', '& .b', '&__c';
}
```

# 二、变量

- stylus

```stylus
font-size = 14px
font = font-size "Lucida Grande", Arial

body
	font font, sans-serif
```

- css

```css
body {
	font: 14px "Lucida Grande", Arial, sans-serif;
}
```

## 1.
