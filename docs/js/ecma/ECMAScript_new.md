# `ECMAScript` 新特性

[toc]

## ` ECMAScript 2015`

> `ES2015` `ES6`

### 1.`const` 和 `let`

### 2.`Arrow Functions`

### 3.函数的参数默认值

### 4.`Promise`

### 5.字符串模板

### 6.`for ... of` 循环

### 7.对象属性/方法简写

### 8.`module` `export` `import`

### 9.解构赋值

### 10.rest参数

> 扩展运算符

### 11.类

### 12.`Symbol`

## `ECMAScript 2016`

> `ES2016`

### 1.`Array.prototype.includes`

### 2.`**`

求幂运算

## `ECMAScript 2017`

> `ES2017`

### 1.`Object.values()`

### 2.`Object.entries()`

### 3.`String padding`

#### `String.prototype.padStart`

The **`padStart()`** method pads the current string with another string (multiple times, if needed) until the resulting
string reaches the given length. The padding is applied from the start of the current string.

#### `String.prototype.padEnd`

### 4.`Object.getOwnPropertyDescriptors`

返回一个对象所有属性

### 5.`Async/Await`

### 6.在函数最后一个参数的末尾添加逗号

## `ECMAScript 2018`

> `ES2018`

### 1.共享内存和原子性

`SharedArrayBuffer`

### 2.`Tagged Template literal`

正则表达式中的`.`匹配所有字符

### 3.正则表达式捕获Named Group

### 4.正则Lookbehind断言

### 5.正则Unicode属性转义符

### 6.`rest/spread`

### 7.`Promise.prototype.finally()`

### 8.异步循环

`for-await-of`

## `ECMAScript 2019`

`ES2019`

### 1.`Array.prototype flat, flatMap`

### 2.`Object.fromEntries`

### 3.`String.protope.{trimstart, trimEnd}`

### 4.`Symbol.protoype.description`

### 5.可选的catch参数

### 6.`Array.porotype.sort`

### 7.`JSON.superset`

### 8.`Function.prototype.toString`

## `ECMAScript 2020`

### 1.`globalThis`

### 2.`Promise.allSettled()`

### 3.空值合并运算符

`??`

### 4.类的私有字段

```javascript
class Foo {
    #x = 0;

    increment() {
        this.#x++;
    }

    getNum() {
        return this.#x;
    }
}
```

### 5.可选链运算符

`obj?.prop1?.prop2`

### 6.`Bigint`

### 7.动态 `import()`

### 8.`String.protype.matchAll`
