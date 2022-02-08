# Upsource

## upsource 简介

> _Code review and project analytics_

jetbrains家的代码审查(Code review)、项目分析工具(v2020.1)

官网地址[Upsource](https://www.jetbrains.com/upsource/)

免费版本可用10个用户 (8用户 + 1admin + guest)._guest用户可以禁用_

## Upsource 的用户、分组、组织管理

Hub是jetbrains家多个团队协作工具用于管理用户、分组、权限等的工具。

每个单独部署的upsource内置了一个hub用于管理用户和分组。

upsource也可以使用外部独立hub进行用户管理和认证等。

> 单个upsource限制的用户数为10个，但是外部独立部署的hub无用户上限
>
> 多个upsource可以使用同一个外部hub进行用户管理和认证，对单个用户或分组分别授权某个upsource服务，绕开单个upsource服务10个用户的限制。

## Upsource 的权限分类

1. Code Viewer - 查看upsource内容，查看代码等。
2. Developer - Reporter权限外加修改issues所有属性的权限（youtrack），发起code review。
3. Issue Reader - 只能查看issues和评论（youtrack适用）
4. Observer - 新注册用户的默认权限，只能更新个人资料、查看用户基本信息等。
5. Project Admin - Developer权限外加管理项目设置的权限。
6. Reporter - 可以创建issues、评论，查看当前存在的issues和评论，以及管理个人资料（主要用于youtrack报告issues）
7. System Admin - 最高权限，发起所有操作。

***upsource中默认需要有 System Admin 权限才能创建项目***

## 创建项目

## code review好处

## upsource平台好处

1. 代码分离
2. 问题定位


## 发起 code review

> upsource的代码需要一定时间从gitlab同步，默认5分钟同步一次，可在项目编辑中设置。

1. 选择项目
2. 选择 `Branches`
3. 选择需要创建code view的分支
4. 选择 `Create branch review` 或 `Create merge review` 按钮
    - `Create branch review` 用于查看当前分支所有提交
    - `Create merge review` 用于合并分支前比较当前分支和目标分支
    - 大部分情况选择 `Create merge review` 即可
5. upsource会生成一条code view记录，默认为从当前分支到主分支。
6. 顶部包含对本条code view的动作按钮
    - Accept - 接受本条code review
    - Raise concern - 需要进一步关注
    - Close review - 关闭本条code review
    - Remove review - 删除本条code review
7. 本条code view的作者会自动从git commit中获取，为被审查者
8. Reviewers为代码审查者，可手动添加多个。
9. 可以对每条code view添加 `ready for review` 或 `work in progress` 标签
    - 标签方便Reviewers区分每条code review是否准备就绪。
    - 标签名称/颜色均可自定义配置
10. Review summary中包含本次改动的文件
11. 点击单个文件可以进行review
    - 可以点击右上角 `Side-by-side diff` 按钮切换不同试图
12. 代码审查过程中可以选中某段文字或直接在某行代码出添加评论
    - 评论只存在于upsource中，不会改变代码仓库
    - 评论中可以艾特他人
13. 评论可以添加不同的标签，便于区分及筛选不同评论
    - bug
    - code style
    - enhancement
    - explanation
    - help wanted
    - 标签名称/颜色均可自定义配置
14. 被审查者处理完不同的评论后可以对评论进行回复或者 `Resolve` 处理
15. 审查者review完所有diff后可以选择Accept动作按钮表示接受本条code view。(此时表示代码已准备好合并)。

## git 提交颗粒度

## idea插件的使用

在idea（webstorm, phpstorm, goland等）的插件市场搜索 Upsource Integration

Upsource Integration为jetbrains自家开发的用于给自家IDE集成upsource相关功能的插件。

配置好URL地址并登陆后可在IDE中完成大部分upsource功能，包含查看提交历史、代码文件对比、添加评论、回复评论、resolve评论、接受/关闭code review记录等。

## FAQ
