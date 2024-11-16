# JavaScript 知识点

[toc]

## 1.基本知识点

### 1.1 `this`

当前执行上下文（global、function 或 eval）的一个属性，在非严格模式下，总是指向一个对象，在严格模式下可以是任意值。

- 在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）。`this` 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。
- ES5 引入了 `bind` 方法来设置函数的 `this` 值，而不用考虑函数如何被调用的。
- ES2015 引入了箭头函数，箭头函数不提供自身的 `this` 绑定（`this` 的值将保持为闭合词法上下文的值）。

```js
const test = {
	prop: 42,
	func: function () {
		return this.prop;
	},
};

console.log(test.func());
// expected output: 42
```

#### 1.1.1. 全局上下文

无论是否在严格模式下，在全局执行环境中（在任何函数体外部）`this` 都指向全局对象。

```js
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

#### 1.1.2 函数上下文

在函数内部，`this` 的值取决于函数被调用的方式。

##### 1.1.2.1 非严格模式

因为下面的代码不在严格模式下，且 `this` 的值不是由该调用设置的，所以 `this` 的值默认指向全局对象，浏览器中就是 `window`。

```js
function f1() {
	return this;
}

//在浏览器中：
f1() === window; //在浏览器中，全局对象是window

//在Node中：
f1() === globalThis;
```

##### 1.1.2.1 严格模式

然而，在严格模式下，如果进入执行环境时没有设置 `this` 的值，`this` 会保持为 undefined，如下：

```js
function f2() {
	"use strict"; // 这里是严格模式
	return this;
}

f2() === undefined; // true
```

> 在第二个例子中，`this` 应是 `undefined`，因为 `f2` 是被直接调用的，而不是作为对象的属性或方法调用的（如 `window.f2()`）。有一些浏览器最初在支持严格模式时没有正确实现这个功能，于是它们错误地返回了`window`对象。

**如果要想把 this 的值从一个环境传到另一个，就要用 call 或者 apply 方法，如下方的示例所示。**

#### 1.1.3 类上下文

`this` 在 类 中的表现与在函数中类似，因为类本质上也是函数，但也有一些区别和注意事项。

在类的构造函数中，`this` 是一个常规对象。类中所有非静态的方法都会被添加到 `this` 的原型中：

```js
class Example {
	constructor() {
		const proto = Object.getPrototypeOf(this);
		console.log(Object.getOwnPropertyNames(proto));
	}

	first() {}

	second() {}

	static third() {}
}

new Example(); // ['constructor', 'first', 'second']
```

> 注意：静态方法不是 this 的属性，它们只是类自身的属性。

#### 1.1.4 派生类

不像基类的构造函数，派生类的构造函数没有初始的 `this` 绑定。在构造函数中调用` super()` 会生成一个 `this` 绑定，并相当于执行如下代码，Base 为基类：

```js
this = new Base();
```

> 警告：在调用 `super()` 之前引用 `this` 会抛出错误。

派生类不能在调用 `super()` 之前返回，除非其构造函数返回的是一个对象，或者根本没有构造函数。

```js
class Base {}

class Good extends Base {}

class AlsoGood extends Base {
	constructor() {
		return { a: 5 };
	}
}

class Bad extends Base {
	constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError
```

#### 1.1.5 示例

##### 1.1.5.1 函数上下文中的 this

```js
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: "Custom" };

// We declare a variable and the variable is assigned to the global window as its property.
var a = "Global";

function whatsThis() {
	return this.a; // The value of this is dependent on how the function is called
}

whatsThis(); // 'Global' as this in the function isn't set, so it defaults to the global/window object
whatsThis.call(obj); // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj
```

##### 1.1.5.2 this 和对象转换

```js
function add(c, d) {
	return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// 第一个参数是用作“this”的对象
// 其余参数用作函数的参数
add.call(o, 5, 7); // 16

// 第一个参数是用作“this”的对象
// 第二个参数是一个数组，数组中的两个成员用作函数参数
add.apply(o, [10, 20]); // 34
```

在非严格模式下使用 `call` 和 `apply` 时，如果用作 `this` 的值不是对象，则会被尝试转换为对象。`null` 和 `undefined` 被转换为全局对象。原始值如 `7` 或 `'foo'`
会使用相应构造函数转换为对象。因此 7 会被转换为 `new Number(7)` 生成的对象，字符串 `'foo'` 会转换为 `new String('foo')` 生成的对象。

```js
function bar() {
	console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object global]
```

##### 1.1.5.3 `bind` 方法

ECMAScript 5 引入了 `Function.prototype.bind()`。调用 `f.bind(someObject)` 会创建一个与 `f` 具有相同函数体和作用域的函数，但是在这个新函数中，`this`
将永久地被绑定到了 `bind` 的第一个参数，无论这个函数是如何被调用的。

```js
function f() {
	return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind只生效一次！
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

##### 1.1.5.4 箭头函数

在箭头函数中，`this` 与封闭词法环境的 `this` 保持一致。在全局代码中，它将被设置为全局对象：

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true
```

> 注意：如果将 `this` 传递给 `call`、`bind`、或者 `apply` 来调用箭头函数，它将被忽略。不过你仍然可以为调用添加参数，不过第一个参数（`thisArg`）应该设置为`null`。

```js
// 接着上面的代码
// 作为对象的一个方法调用
var obj = { foo: foo };
console.log(obj.foo() === globalObject); // true

// 尝试使用call来设定this
console.log(foo.call(obj) === globalObject); // true

// 尝试使用bind来设定this
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

无论如何，`foo` 的 `this` 被设置为他被创建时的环境（在上面的例子中，就是全局对象）。这同样适用于在其他函数内创建的箭头函数：这些箭头函数的`this`被设置为封闭的词法环境的。

```js
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
	bar: function () {
		var x = () => this;
		return x;
	},
};

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar();

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window); // true
```

在上面的例子中，一个赋值给了 `obj.bar`的函数（称为匿名函数 A），返回了另一个箭头函数（称为匿名函数 B）。因此，在 `A` 调用时，函数 B 的`this`被永久设置为 obj.bar（函数 A）的`this`
。当返回的函数（函数 B）被调用时，它`this`始终是最初设置的。在上面的代码示例中，函数 B 的`this`被设置为函数 A 的`this`，即 obj，所以即使被调用的方式通常将其设置为 `undefined`
或全局对象（或者如前面示例中的其他全局执行环境中的方法），它的 `this` 也仍然是 `obj` 。

##### 1.1.5.5 作为对象的方法

当函数作为对象里的方法被调用时，`this` 被设置为调用该函数的对象。

下面的例子中，当 `o.f()` 被调用时，函数内的 `this` 将绑定到 `o` 对象。

```js
var o = {
	prop: 37,
	f: function () {
		return this.prop;
	},
};

console.log(o.f()); // 37
```

请注意，这样的行为完全不会受函数定义方式或位置的影响。在前面的例子中，我们在定义对象`o`的同时，将其中的函数定义为成员 `f` 。但是，我们也可以先定义函数，然后再将其附属到`o.f`。这样做的结果是一样的：

```js
var o = { prop: 37 };

function independent() {
	return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

这表明函数是从 `o` 的 `f` 成员调用的才是重点。

同样，`this` 的绑定只受最接近的成员引用的影响。在下面的这个例子中，我们把一个方法`g`当作对象`o.b`的函数调用。在这次执行期间，函数中的`this`将指向`o.b`。事实证明，这与他是对象 `o`
的成员没有多大关系，最近的引用才是最重要的。

```js
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // 42
```

###### 1.1.5.5.1 原型链中的 this

对于在对象原型链上某处定义的方法，同样的概念也适用。如果该方法存在于一个对象的原型链上，那么 `this` 指向的是调用这个方法的对象，就像该方法就在这个对象上一样。

```js
var o = {
	f: function () {
		return this.a + this.b;
	},
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

> 在这个例子中，对象 `p` 没有属于它自己的 `f` 属性，它的 `f` 属性继承自它的原型。虽然最终是在 `o` 中找到 `f` 属性的，这并没有关系；查找过程首先从 `p.f` 的引用开始，所以函数中的 `this` 指向`p`。也就是说，因为`f`是作为`p`的方法调用的，所以它的`this`指向了`p`。这是 JavaScript 的原型继承中的一个有趣的特性。

###### 1.1.5.5.2 getter 与 setter 中的 `this`

再次，相同的概念也适用于当函数在一个 `getter` 或者 `setter` 中被调用。用作 `getter` 或 `setter` 的函数都会把 `this` 绑定到设置或获取属性的对象。

```js
function sum() {
	return this.a + this.b + this.c;
}

var o = {
	a: 1,
	b: 2,
	c: 3,
	get average() {
		return (this.a + this.b + this.c) / 3;
	},
};

Object.defineProperty(o, "sum", {
	get: sum,
	enumerable: true,
	configurable: true,
});

console.log(o.average, o.sum); // logs 2, 6
```

##### 1.1.5.6 作为构造函数

当一个函数用作构造函数时（使用 new 关键字），它的`this`被绑定到正在构造的新对象。

> 虽然构造函数返回的默认值是 `this` 所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象，则返回 `this` 对象）。

```js
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的return语句，
 *   // 则该对象将是 new 表达式的结果。
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C() {
	this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
	this.a = 37;
	return { a: 38 };
}

o = new C2();
console.log(o.a); // logs 38
```

> 在刚刚的例子中（`C2`），因为在调用构造函数的过程中，手动的设置了返回对象，与`this`绑定的默认对象被丢弃了。（这基本上使得语句 “`this.a = 37`;”成了“僵尸”代码，实际上并不是真正的“僵尸”，这条语句执行了，但是对于外部没有任何影响，因此完全可以忽略它）。

##### 1.1.5.7 作为一个 DOM 事件处理函数

当函数被用作事件处理函数时，它的 `this` 指向触发事件的元素（一些浏览器在使用非 `addEventListener` 的函数动态地添加监听函数时不遵守这个约定）。

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e) {
	console.log(this === e.currentTarget); // 总是 true

	// 当 currentTarget 和 target 是同一个对象时为 true
	console.log(this === e.target);
	this.style.backgroundColor = "#A5D9F3";
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName("*");

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", bluify, false);
}
```

##### 1.1.5.8 作为一个内联事件处理函数

当代码被内联` on-event` 处理函数 调用时，它的`this`指向监听器所在的 DOM 元素：

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

上面的 `alert` 会显示 `button`。注意只有外层代码中的 `this` 是这样设置的：

```html
<button onclick="alert((function(){return this})());">Show inner this</button>
```

在这种情况下，没有设置内部函数的 `this`，所以它指向 `global/window` 对象（即非严格模式下调用的函数未设置 `this` 时指向的默认对象）。

##### 1.1.5.9 类中的 this

和其他普通函数一样，方法中的 `this` 值取决于它们如何被调用。有时，改写这个行为，让类中的 `this` 值总是指向这个类实例会很有用。为了做到这一点，可在构造函数中绑定类方法：

```js
class Car {
	constructor() {
		// Bind sayBye but not sayHi to show the difference
		this.sayBye = this.sayBye.bind(this);
	}

	sayHi() {
		console.log(`Hello from ${this.name}`);
	}

	sayBye() {
		console.log(`Bye from ${this.name}`);
	}

	get name() {
		return "Ferrari";
	}
}

class Bird {
	get name() {
		return "Tweety";
	}
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
```

> 注意：类内部总是严格模式。调用一个 `this` 值为 `undefined` 的方法会抛出错误。

### 1.2 `Object` 相关方法

#### 1.2.1 `Object.create`

#### 1.2.2 `Object.defineProperty`

### 1.3 `Window.requestAnimationFrame`

### 1.4 精准计时

### 1.5 js 数据类型

typeof、instanceof

> The latest ECMAScript standard defines nine types:

#### 1.5.1 基本类型

1. undefined: `typeof instance === "undefined"`
2. Boolean: `typeof instance === "boolean"`
3. Number: `typeof instance === "number"`
4. String: `typeof instance === "string"`
5. BigInt: `typeof instance === "bigint"`
6. Symbol: `typeof instance === "symbol"`
7. null: `typeof instance === "object"`

#### 1.5.2 结构类型

8. Object: `typeof instance === "object"`
   1. Object
   2. Array
   3. Map
   4. Set
   5. WeakMap
   6. SeakSet
   7. Date
   8. 其它通过 `new` 关键字生成的
   9. Function: `typeof instance === "function"`

### 1.6 事件委托、事件代理

### 1.7 `es6` 新特性

### 1.8 事件循环

### 1.9 同步任务、异步任务

### 1.10 宏任务、微任务

### 1.11 闭包

### 1.12 DPR

ie 设备获取 devicePixelRatio:

```js
const DPR =
	window.devicePixelRatio ||
	window.screen.deviceXDPI / window.screen.logicalXDPI;
```

### 1.13 获取音频相关

#### 1.13.1 `enumerateDevices()`

```js
navigator.mediaDevices.enumerateDevices(); // 返回一个包含当前系统支持的音频/视频输入/输出设备
```

#### 1.13.2 `getSupportedConstraints()`

```js
navigator.mediaDevices.getSupportedConstraints(); // 返回受支持的设置项
```

#### 1.13.3 `getDisplayMedia()`

捕获当前设备屏幕并返回媒体流

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)

#### 1.13.4 `getUserMedia()`

在用户同意后，打开设备的摄像头或话筒，返回媒体流

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

## 2.js 库

### 2.1 `vue`

#### 2.1.1 vue 不能监测的数据变化

##### 2.1.1.1 数组

###### 2.1.1.1.1 `vue` 可以监测以下方法的数组变化：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse`

###### 2.1.1.1.2 `vue` 不能监测以下方法：

- `filter()`
- `concat()`
- `slice()`

**解决办法：** 使用新数组替换旧数组

###### 2.1.1.1.3 当你利用索引直接设置一个数组项时

**解决办法**：

1. 使用 `Vue.set()` (`vm.$set`)
2. 使用 `splice()` 方法

###### 2.1.1.1.4 当你修改数组的长度时

**解决办法**

使用 `splice()` 方法

##### 2.1.1.2 对象

###### 2.1.1.2.1 `Vue` 无法检测 property 的添加或移除

由于 `Vue` 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 `data` 对象上存在才能让 `Vue` 将它转换为响应式的。  
对于已经创建的实例，`Vue` 不允许动态添加根级别的响应式 property。但是，可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式 property。  
还可以使用 `vm.$set` 实例方法，这也是全局 `Vue.set` 方法的别名：  
有时你可能需要为已有对象赋值多个新 property，比如使用 `Object.assign()` 或 `_.extend()`。 但是，这样添加到对象上的新 property
不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的 `property` 一起创建一个新的对象。

#### 2.1.2 `v-model` 原理

#### 2.1.3 `Vue` 生命周期

1. `beforeCreate`
2. `created`
3. `beforeMount`
4. `mounted`
5. `beforeUpdate`
6. `updated`
7. `activated`
8. `deactivated`
9. `beforeDestroy`
10. `destroyed`
11. `errorCaptured`

`vue-router` 提供的

12. `beforeRouteEnter`
13. `beforeRouteUpdate`
14. `beforeRouteLeave`

#### 2.1.4 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

#### 2.1.5 混入 `mixins`

##### 2.1.5.1 选项合并

- 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
- 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。
- 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

#### 2.1.6 provice/inject

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

### 2.2 `react`

### 2.3 `webpack`

## 3.例题

### 3.1 事件顺序

```js
setTimeout(() => {
	console.log(1);
});

new Promise((resove, reject) => {
	console.log(2);
	resove();
}).then(() => {
	console.log(3);
});

console.log(4);
```
