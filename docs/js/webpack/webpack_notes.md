# `webpack`

## 一、安装

```bash
npm install webpack webpack-cli --save-dev
```

## 二、`webpack.config.js`

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

## 三、plugin

### 1.`html-webpack-plugin`

```bash
npm install --save-dev html-webpack-plugin
```

