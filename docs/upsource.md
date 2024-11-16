# Upsource

## upsource 简介

> _Code review and project analytics_

jetbrains 家的代码审查(Code review)、项目分析工具(v2020.1)

官网地址[Upsource](https://www.jetbrains.com/upsource/)

免费版本可用 10 个用户 (8 用户 + 1admin + guest)._guest 用户可以禁用_

## Upsource 的用户、分组、组织管理

Hub 是 jetbrains 家多个团队协作工具用于管理用户、分组、权限等的工具。

每个单独部署的 upsource 内置了一个 hub 用于管理用户和分组。

upsource 也可以使用外部独立 hub 进行用户管理和认证等。

> 单个 upsource 限制的用户数为 10 个，但是外部独立部署的 hub 无用户上限
>
> 多个 upsource 可以使用同一个外部 hub 进行用户管理和认证，对单个用户或分组分别授权某个 upsource 服务，绕开单个 upsource 服务 10 个用户的限制。

## Upsource 的权限分类

1. Code Viewer - 查看 upsource 内容，查看代码等。
2. Developer - Reporter 权限外加修改 issues 所有属性的权限（youtrack），发起 code review。
3. Issue Reader - 只能查看 issues 和评论（youtrack 适用）
4. Observer - 新注册用户的默认权限，只能更新个人资料、查看用户基本信息等。
5. Project Admin - Developer 权限外加管理项目设置的权限。
6. Reporter - 可以创建 issues、评论，查看当前存在的 issues 和评论，以及管理个人资料（主要用于 youtrack 报告 issues）
7. System Admin - 最高权限，发起所有操作。

**_upsource 中默认需要有 System Admin 权限才能创建项目_**

## 创建项目

## code review 好处

## upsource 平台好处

1. 代码分离
2. 问题定位

## 发起 code review

> upsource 的代码需要一定时间从 gitlab 同步，默认 5 分钟同步一次，可在项目编辑中设置。

1. 选择项目
2. 选择 `Branches`
3. 选择需要创建 code view 的分支
4. 选择 `Create branch review` 或 `Create merge review` 按钮
   - `Create branch review` 用于查看当前分支所有提交
   - `Create merge review` 用于合并分支前比较当前分支和目标分支
   - 大部分情况选择 `Create merge review` 即可
5. upsource 会生成一条 code view 记录，默认为从当前分支到主分支。
6. 顶部包含对本条 code view 的动作按钮
   - Accept - 接受本条 code review
   - Raise concern - 需要进一步关注
   - Close review - 关闭本条 code review
   - Remove review - 删除本条 code review
7. 本条 code view 的作者会自动从 git commit 中获取，为被审查者
8. Reviewers 为代码审查者，可手动添加多个。
9. 可以对每条 code view 添加 `ready for review` 或 `work in progress` 标签
   - 标签方便 Reviewers 区分每条 code review 是否准备就绪。
   - 标签名称/颜色均可自定义配置
10. Review summary 中包含本次改动的文件
11. 点击单个文件可以进行 review
    - 可以点击右上角 `Side-by-side diff` 按钮切换不同试图
12. 代码审查过程中可以选中某段文字或直接在某行代码出添加评论
    - 评论只存在于 upsource 中，不会改变代码仓库
    - 评论中可以艾特他人
13. 评论可以添加不同的标签，便于区分及筛选不同评论
    - bug
    - code style
    - enhancement
    - explanation
    - help wanted
    - 标签名称/颜色均可自定义配置
14. 被审查者处理完不同的评论后可以对评论进行回复或者 `Resolve` 处理
15. 审查者 review 完所有 diff 后可以选择 Accept 动作按钮表示接受本条 code view。(此时表示代码已准备好合并)。

## git 提交颗粒度

## idea 插件的使用

在 idea（webstorm, phpstorm, goland 等）的插件市场搜索 Upsource Integration

Upsource Integration 为 jetbrains 自家开发的用于给自家 IDE 集成 upsource 相关功能的插件。

配置好 URL 地址并登陆后可在 IDE 中完成大部分 upsource 功能，包含查看提交历史、代码文件对比、添加评论、回复评论、resolve 评论、接受/关闭 code review 记录等。

## FAQ
