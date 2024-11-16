# `@media`

The `@media` CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries.
With it, you specify a media query and a block of CSS to apply to the document if and only if the media query matches
the device on which the content is being used.

## 一、语法

The `@media` at-rule may be placed at the top level of your code or nested inside any other conditional group at-rule.

```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
	article {
		padding: 1rem 3rem;
	}
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
	@media screen and (min-width: 900px) {
		article {
			display: flex;
		}
	}
}
```

## 二、Description

### Media types

1. `all`  
   Suitable for all devices. 适用于所有设备。
2. `print`  
   Intended for paged material and documents viewed on a screen in print preview mode. (Please
   see [paged media](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media) for information about formatting
   issues that are specific to these formats.)
3. `screen`  
   Intended primarily for screens. 主要用于屏幕。
4. `speech`  
   Intended for speech synthesizers. 用于语音合成器。
5. **Deprecated media types**
   1. `tty`
   2. `tv`
   3. `projection`
   4. `handheld`
   5. `braille`
   6. `embossed`
   7. `aural` - 被 `speech` 替代

### Media features

Media features describe specific characteristics of the user agent, output device, or environment. Media feature
expressions test for their presence or value, and are entirely optional. Each media feature expression must be
surrounded by parentheses.

媒体功能描述了用户代理，输出设备或环境的特定特征。媒体功能表达式测试其存在或价值，并且是完全可选的。每个媒体功能表达式必须用括号括起来。

| features                                                                                                             | Summary                                                                                                                                                                                                                  | Notes                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [any-hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover)                                       | Does any available input mechanism allow the user to hover over elements?<br>是否有任何可用的输入机制允许用户将鼠标悬停在元素上？                                                                                        |
| [any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer)                                   | Is any available input mechanism a pointing device, and if so, how accurate is it?<br>有没有可用的输入机制作为定位设备？如果是，它的精度如何？                                                                           |
| [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio)                                 | Width-to-height aspect ratio of the viewport<br>视口的宽高比                                                                                                                                                             |
| [color](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color)                                               | Number of bits per color component of the output device, or zero if the device isn't color<br>输出设备每个颜色分量的位数，如果设备不是彩色的，则为零                                                                     |
| [color-gamut](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut)                                   | Approximate range of colors that are supported by the user agent and output device<br>用户代理和输出设备支持的近似颜色范围                                                                                               |
| [color-index](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-index)                                   | Number of entries in the output device's color lookup table, or zero if the device does not use such a table<br>输出设备的颜色查找表中的条目数；如果设备不使用该表，则为零                                               |
| [display-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode)                                 | The display mode of the application, as specified in the web app manifest's [display](https://developer.mozilla.org/en-US/docs/Web/Manifest#display) member<br>应用程序的显示模式，如 Web 应用程序清单的显示成员中所指定 |
| [forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)                               | Detect whether user agent restricts color palette<br>检测用户代理是否限制调色板                                                                                                                                          |
| [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid)                                                 | Does the device use a grid or bitmap screen?<br>设备是否使用网格或位图屏幕？                                                                                                                                             |
| [height](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height)                                             | Height of the viewport                                                                                                                                                                                                   |
| [hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)                                               | Does the primary input mechanism allow the user to hover over elements?<br>主输入机制是否允许用户将鼠标悬停在元素上？                                                                                                    |
| [inverted-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors)                           | Is the user agent or underlying OS inverting colors?<br>用户代理或底层操作系统是否使颜色反转？                                                                                                                           |
| [monochrome](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome)                                     | Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome<br>输出设备的单色帧缓冲区中的每个像素位数；如果设备不是单色的，则为零                                              |
| [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)                                   | Orientation of the viewport<br>视口方向                                                                                                                                                                                  |
| [overflow-block](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block)                             | How does the output device handle content that overflows the viewport along the block axis?<br>输出设备如何处理沿块轴溢出视口的内容？                                                                                    |
| [overflow-inline](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline)                           | Can content that overflows the viewport along the inline axis be scrolled?<br>沿内联轴溢出视口的内容是否可以滚动？                                                                                                       |
| [pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer)                                           | Is the primary input mechanism a pointing device, and if so, how accurate is it?<br>主输入机制是指点设备吗？如果是，它的准确性如何？                                                                                     |
| [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)                 | Detect if the user prefers a light or dark color scheme                                                                                                                                                                  |
| [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)                         | Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors<br>检测用户是否已请求系统增加或减少相邻颜色之间的对比度                                                 |
| [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)             | The user prefers less motion on the page                                                                                                                                                                                 |
| [prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) | The user prefers reduced transparency                                                                                                                                                                                    |
| [resolution](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution)                                     | Pixel density of the output device<br>输出设备的像素密度                                                                                                                                                                 |
| [scan](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scan)                                                 | Scanning process of the output device<br>输出设备的扫描过程                                                                                                                                                              | `interlace` - 该设备交替绘制奇数行和偶数行。一些电视使用隔行扫描。<br>`progressive` - 设备将按顺序绘制所有线条。所有计算机屏幕都使用逐行扫描。 |
| [scripting](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting)                                       | Detects whether scripting (i.e. JavaScript) is available                                                                                                                                                                 |
| [update](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update-frequency)                                   | How frequently the output device can modify the appearance of content<br>输出设备可以多久修改一次内容的外观                                                                                                              | `none`, `slow`, `fast`                                                                                                                         |
| [width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width)                                               | Width of the viewport including width of scrollbar<br>视口的宽度，包括滚动条的宽度                                                                                                                                       |

## 三、Examples

Testing for print and screen media types

```css
@media print {
	body {
		font-size: 10pt;
	}
}

@media screen {
	body {
		font-size: 13px;
	}
}

@media screen, print {
	body {
		line-height: 1.2;
	}
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
	body {
		line-height: 1.4;
	}
}
```

Media Queries Level 4 中引入了一种新的范围语法，当测试任何接受范围的功能时，它可以减少冗长的媒体查询，如以下示例所示：

```css
@media (height > 600px) {
	body {
		line-height: 1.4;
	}
}

@media (400px <= width <= 700px) {
	body {
		line-height: 1.4;
	}
}
```
