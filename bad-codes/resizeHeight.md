# js 实时计算设置容器高度

## 原始代码展示

js

```js
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./index.less";

export default class Content extends PureComponent {
	state = {
		height: "auto",
	};

	componentDidMount() {
		this.updateHeight();
		window.addEventListener("resize", this.updateHeight);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateHeight);
	}

	updateHeight = () => {
		const height =
			Math.max(window.innerHeight, document.documentElement.clientHeight) - 50;
		this.setState({ height });
	};

	render() {
		const { height } = this.state;
		const { children } = this.props;
		return (
			<div className={styles.report__content} style={{ height }}>
				{children}
			</div>
		);
	}
}
```

```scss
.report__content {
	position: absolute;
	top: 50px;
	left: 0;
	width: 100%;
	background: #f2f2f2;
	overflow-y: hidden !important;
}
```

## 改进后

```js
import React from "react";

import styles from "./index.less";

export default function Content(props) {
	const { children } = props;
	return <div className={styles.report__content}>{children}</div>;
}
```

```scss
.report__content {
	position: absolute;
	top: 50px;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #f2f2f2;
	overflow-y: hidden !important;
}
```

## 原因

能用 css 控制的样式避免用 js 去操作
