# MarkDown

[toc]

## Basic Syntax

### 1.Headings

_Markdown_:

```markdown
# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6
```

_result_:
> # Heading level 1
> ## Heading level 2
> ### Heading level 3
> #### Heading level 4
> ##### Heading level 5
> ###### Heading level 6

#### Alternate Syntax

Markdown:

```markdown
Heading level 1
===

Heading level 2
---
```

Result:
> Heading level 1
> ===
> Heading level 2
> ---

### 2.Paragraphs

_Markdown_:

```markdown
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

_Result_:
> I really like using Markdown.
>
> I think I'll use it to format all of my documents from now on.

### 3.Line Breaks

_Markdown_:

```markdown
This is the first line.  
And this is the second line.
```

_Result_:
> This is the first line.  
And this is the second line.

### 4.Emphasis

#### Bold

```markdown
I just love **bold text**.  
I just love __bold text__.  
Love**is**bold
```

#### Italic

```markdown
Italicized text is the *cat's meow*.  
Italicized text is the _cat's meow_.  
A*cat*meow
```

#### Bold and Italic

```markdown
This text is ***really important***.  
This text is ___really important___.  
This text is __*really important*__.  
This text is **_really important_**.  
This is really***very***important text.
```

> ***官方建议全部用`*`***

### 5.Blockquotes

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```

#### Blockquotes with Multiple Paragraphs

 ```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
 ```

#### Nested Blockquotes

 ```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
 ```

#### Blockquotes with Other Elements

```markdown
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going according to **plan**.
```

### 5.Lists

#### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
```

> 官方推荐：
> ```markdown
> 1. First item
> 2. Second item
> 3. Third item
> 4. Fourth item
> ```

#### Unordered Lists

```markdown
- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
```

> 官方推荐：
> ```markdown
> - First item
> - Second item
> - Third item
> - Fourth item
> ```

#### Adding Elements in Lists

##### Paragraphs

```markdown
* This is the first list item.
* Here's the second list item.

  I need to add another paragraph below the second list item.

* And here's the third list item.
```

##### Blockquotes

```markdown
* This is the first list item.
* Here's the second list item.

  > A blockquote would look great below the second list item.

* And here's the third list item.
```

##### Code Blocks

```markdown
1. Open the file.
2. Find the following code block on line 21:

       <html>
         <head>
           <title>Test</title>
         </head>
       </html>

3. Update the title to match the name of your website.
```

*Result*:

1. Open the file.
2. Find the following code block on line 21:

        <html>
         <head>
          <title>Test</title>
         </head>
        </html>

3. Update the title to match the name of your website.

##### Images

 ```markdown
1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

   ![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)

3. Close the file.
 ```

*Result*:

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

   ![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)

3. Close the file.

##### Lists

```markdown
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item
```

### 6.Code

```markdown
At the command prompt, type `nano`.
```

#### Escaping Backticks

```markdown
``Use `code` in your Markdown file.``
```

#### Code Blocks

```markdown
    <html>
      <head>
      </head>
    </html>
```

*Result*:

    <html>
      <head>
      </head>
    </html>

### 7.Horizontal Rules

```markdown
***

---

___
```

*Result*:

***

---

___

### 8.Links

```markdown
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
```

*Result*:

> My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

#### Adding Titles

```markdown
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
```

*Result*:

> My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

#### URLs and Email Addresses

```markdown
<https://www.markdownguide.org>
<fake@example.com>
```

*Result*:

<https://www.markdownguide.org>  
<fake@example.com>

#### Formatting Links

```markdown
I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).
```

*Result*:

> I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).

#### Reference-style Links

引用样式链接是一种特殊的链接，它使URL易于在Markdown中显示和阅读。引用样式的链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

##### Formatting the First Part of the Link

```markdown
[hobbit-hole][1]
[hobbit-hole] [1]
```

##### Formatting the Second Part of the Link

```markdown
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
```

##### An Example Putting the Parts Together

```markdown
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy
smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that
means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
```

*Result*:

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy
smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that
means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

### 9.Images

```markdown
![Philadelphia's Magic Gardens. This place was so cool!](https://d33wubrfki0l68.cloudfront.net/eab45e25bb79970178fab7a2d10cba0209372a59/94d9e/assets/images/philly-magic-garden.jpg "Philadelphia's Magic Gardens")
```

*Result*:

> ![Philadelphia's Magic Gardens. This place was so cool!](https://d33wubrfki0l68.cloudfront.net/eab45e25bb79970178fab7a2d10cba0209372a59/94d9e/assets/images/philly-magic-garden.jpg "Philadelphia's Magic Gardens")

#### Linking Images

```markdown
[![An old rock in the desert](https://d33wubrfki0l68.cloudfront.net/70a143fdf134aacde3740662a2a47a2a1ee0d216/276c9/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
```

*Result*:

> [![An old rock in the desert](https://d33wubrfki0l68.cloudfront.net/70a143fdf134aacde3740662a2a47a2a1ee0d216/276c9/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

### 10.Escaping Characters

```markdown
\* Without the backslash, this would be a bullet in an unordered list.
```

#### Characters You Can Escape

1. \
2. `
3. \*
4. _
5. { }
6. []
7. <>
8. ()
9. \#
10. \+
11. \-
12. .
13. !
14. \|

### 11.HTML

```markdown
This **word** is bold. This <em>word</em> is italic.
```
