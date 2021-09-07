# `Gulp`

## 一、`Gulp`

## 二、插件

### 1. `gulp-rename`

重命名

```bash
npm i -D gulp-rename
```

### 2. `gulp-uglify`

压缩js文件

```bash
npm i -D gulp-uglify
```

```js
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('compress', function () {
    return pipeline(
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    );
});
```

### 3. `gulp-flatten`

移除文件中包含的相对路径

```bash
npm i -D gulp-flatten
```

### 4. `gulp-babel`

```bash
# Babel 8
$ npm install --save-dev gulp-babel @babel/core @babel/preset-env

# Babel 7
$ npm install --save-dev gulp-babel@7 babel-core babel-preset-env
```

```js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);
```

### 5. `delete`

删除文件夹

### 6. `gulp-if`

```js
const {src, dest} = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

function isJavaScript(file) {
    // Check if file extension is '.js'
    return file.extname === '.js';
}

exports.default = function () {
    // Include JavaScript and CSS files in a single pipeline
    return src(['src/*.js', 'src/*.css'])
        // Only apply gulp-uglify plugin to JavaScript files
        .pipe(gulpif(isJavaScript, uglify()))
        .pipe(dest('output/'));
}
```

### 7. 行内插件

以下场景行内插件会很有用：

1. Instead of creating and maintaining your own plugin.
2. Instead of forking a plugin that exists to add a feature you want.

```js
const {src, dest} = require('gulp');
const uglify = require('uglify-js');
const through2 = require('through2');

exports.default = function () {
    return src('src/*.js')
        // Instead of using gulp-uglify, you can create an inline plugin
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const code = uglify.minify(file.contents.toString())
                file.contents = Buffer.from(code.code)
            }
            cb(null, file);
        }))
        .pipe(dest('output/'));
}
```

### 8. `dotenv`

#### Install

```bash
# with npm 
npm install dotenv
 
# or with Yarn 
yarn add dotenv
```

#### Usage

在项目中尽可能早的运行：

```js
require('dotenv').config()
```

在项目根目录下创建 `.env` 文件

### 9. `gulp-sourcemaps`

```js
var gulp = require('gulp');
var plugin1 = require('gulp-plugin1');
var plugin2 = require('gulp-plugin2');
var sourcemaps = require('gulp-sourcemaps');

function javascript() {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
};


exports.javascript = javascript;
```

将 `sourcemaps` 写入外部文件

```js
var gulp = require('gulp');
var plugin1 = require('gulp-plugin1');
var plugin2 = require('gulp-plugin2');
var sourcemaps = require('gulp-sourcemaps');

function javascript() {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist'));
};

exports.javascript = javascript;
```

### 10. `gulp-sass`

```bash
npm install node-sass gulp-sass --save-dev
```

```js
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
```

### 11. `gulp-autoprefixer`

```bash
npm install --save-dev gulp-autoprefixer
```

```js
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
```

### 12. `gulp-clean-css`

压缩css

```bash
npm install gulp-clean-css --save-dev
```

```js
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});
```

### 13. `gulp-notify`

在macOS、Linux、Windows下发送通知

```bash
npm install --save-dev gulp-notify
```

```js
var notify = require("gulp-notify");
gulp.src("./src/test.ext")
    .pipe(notify("Hello Gulp!"));
```

```js
var notify = require("gulp-notify");
gulp.src("./src/test.ext")
    .pipe(notify("Found file: <%= file.relative %>!"));
```

## 三、`Globs` 匹配

`String` 或 `String[]`

### 1. 分隔符

分隔符统一为 `/`

> Avoid using Node's `path` methods, like `path.join`, to create globs. On Windows, it produces an invalid glob because Node uses `\\` as the separator. Also avoid the `__dirname` global, `__filename` global, or `process.cwd()` for the same reasons.

### 2. 特殊字符 `*`

匹配任意数量（包括0）字符。

### 3. 特殊字符 `**`

跨段匹配任意数量的字符（包括无字符）。

### 4. 特殊字符 `!`

如果要移除某个文件夹下所有文件，需要使用 `/**` 移除。

## 四、`watch` 文件

- 监视文件变动，出发相应 `gulp task`
- **避免使用同步任务**

### 1. 默认监视的文件变动类型：

1. created
2. changed
3. deleted

### 2. 其他可选 `event` 类型

1. `add`

2. `addDir`

3. `change`

4. `unlink`

5. `unlinkDir`

6. `ready`

7. `error`

8. `all`

   > 代表除了 `ready` 和 `error` 之外的所有类型

```js
const {watch} = require('gulp');

exports.default = function () {
    // All events will be watched
    watch('src/*.js', {events: 'all'}, function (cb) {
        // body omitted
        cb();
    });
};
```

### 3. 初步执行

执行 `watch` 的时候任务不会执行，当文件变化的时候才会执行。

可以设置 `{ignoreInitial: true}` 让任务在文件变化之前执行。

### 4. 队列

每次只能执行一个 `watch` 的任务。

设置 `{queue: false}` 可以禁用队列。

```js
const {watch} = require('gulp');

exports.default = function () {
    // The task will be run (concurrently) for every change made
    watch('src/*.js', {queue: false}, function (cb) {
        // body omitted
        cb();
    });
};
```

### 5. 延迟

`watch` 的任务默认延迟 200ms 执行。

可以设置 `delay` 选项来设置延迟时间。

```js
const {watch} = require('gulp');

exports.default = function () {
    // The task won't be run until 500ms have elapsed since the first change
    watch('src/*.js', {delay: 500}, function (cb) {
        // body omitted
        cb();
    });
};
```

### 6. `watch` 实例*

`watch()` 方法会返回一个 [chokidar](https://www.npmjs.com/package/chokidar) 实例，没有队列、延迟或者异步完成功能。

### 7. 可选依赖

`gulp` 有个可选依赖 `fsevents` ，mac专属的文件监视。
