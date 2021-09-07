# `git`提交规范

`<type>(<scope>): <subject>`

- type

	用于说明`commit`的类别，有以下7中：

	- `feat` 新功能
	- `fix` 修补bug
	- `docs` 文档
	- `style` 样式
	- `refactor` 重构
	- `test` 增加测试
	- `chore` 构建过程或辅助工具的变动

- scope（可选）

	用于说明`commit`影响的范围， 比如: route, component, utils, build...，比如数据层、控制层、视图层等等，视项目不同而不同。

- subject

	是`commit`目的的简短描述，不超过50个字符
