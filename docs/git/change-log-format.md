# Change log规范

## 基本格式

```markdown
# Change Log

## [<version>] - <date>

### <type>

- <desc>
- <desc>

### <type>

- <desc>
- <desc>

[<version>]:<version-diff-url>
```

### 名词解释

- version: 本次升级的版本号。**版本号前不加v**
- date: 本次升级的日期，采用 `yyyy-MM-dd` 格式
- type: 更新的类型，有以下可选值：
	- 新增（**Added**）：新增功能
	- 修复（**Fixed**）：修复 bug
	- 变更（**Changed**）：对于某些已存在功能所发生的逻辑变化
	- 优化（**Refactored**）：性能或结构上的优化，并未带来功能的逻辑变化
	- 即将删除（**Deprecated**）：不建议使用 / 在以后的版本中即将删除的功能
	- 删除（**Removed**）：已删除的功能。
- desc: 对应更新类型的描述内容，**使用完整的具体描述对应的更新内容**

## 示例

```markdown
# 更新日志

## [3.5.0] - 2020-04-11

### Changed

- `Node.fn.map()` 之前返回 NodeList 自身，现在将正确地返回被 map 后的数组。

### Fixed

- 修复在非 ks-debug 模式下仍然输出 `KISSY.log()` 控制台信息的问题。

## [3.4.20] - 2020-03-15

### Fixed

- 修复 `KISSY.getScript` 在传入了 `timeout` 参数后报错的问题。[#12]

## [3.4.19] - 2020-03-01

### Added

- node 模块增加 API `Node.fn`，以兼容传统 KIMI 的 node 对象扩展机制。
- ua 模块现在可以识别 Microsoft Edge 浏览器。

### Refactored

- `KISSY.getScript()` 从 loader 模块中独立出来，io 模块不再依赖 loader 模块。

### Removed

- io 模块默认去掉了对 XML 的 converter 支持。
```



