# iPhoneX 等异形屏 `css` 适配

原文地址：  
[Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)  
[env()](<https://developer.mozilla.org/en-US/docs/Web/CSS/env()>)

## 相关代码

```html
<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
```

```css
.selector {
	padding-top: env(safe-area-inset-top);
	padding-right: env(safe-area-inset-right);
	padding-bottom: env(safe-area-inset-botom);
	padding-left: env(safe-area-inset-left);
}
```

## 异形屏适配

通常情况下，web 页面内容会自动填充到显示屏的安全区域内，不会被圆角或者设备传感器遮挡。

`inset area` (默认情况下安全区域外部分)会自动填充页面的背景色(`body`, `html` 等声明的内容)，这对大多数网站来说这是足够的。

有些网站，比如设计了全尺寸的底部导航栏的页面（如下示例），需要做更多适配才能充分利用 iPhoneX 的异形屏

[![Safari’s default insetting behavior.](https://webkit.org/wp-content/uploads/default-inset-behavior.png)](https://webkit.org/demos/safe-area-insets/1-default.html)

> [iPhone X Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/iphone-x/) 介绍了一些需要注意的设计的原则  
> [UIKit documentation](https://developer.apple.com/documentation/uikit/uiview/positioning_content_relative_to_the_safe_area) 讨论了一些可以使原声 app 看起来更好的具体机制  
> 您的网站可以利用 iOS 11 中引入的一些类似 WebKit API 的新功能，以充分利用显示器边缘到边缘的特性。

_本文所有图片都可以点击跳转到对应 demo 页面。_
