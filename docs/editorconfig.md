# `EditorConfig`

## Example

```editorconfig
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js, py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json, .travis.yml}]
indent_style = space
indent_size = 2
```

> For Windows Users:  
> To create an `.editorconfig` file within Windows Explorer, you need to create a file named `.editorconfig.`, which Windows Explorer will automatically rename to .editorconfig.

## Wildcard Patterns

| 符号         | 释义                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| \*           | Matches any string of characters, except path separators (/)                                              |
| \*\*         | Matches any string of characters                                                                          |
| ?            | Matches any single character                                                                              |
| \[name\]     | Matches any single character in _name_                                                                    |
| \[!name\]    | Matches any single character not in _name_                                                                |
| {s1,s2,s3}   | Matches any of the strings given (separated by commas)<br>(Available since EditorConfig Core 0.11.0)      |
| {num1..num2} | Matches any integer numbers between num1 and num2, where num1 and num2 can be either positive or negative |

> Special characters can be escaped with a backslash, so they won't be interpreted as wildcard patterns.

## Supported Properties

### 1.`indent_style`

set to `tab` or `space` to use hard tabs or soft tabs respectively.

### 2.`indent_size`

a whole number defining the number of columns used for each indentation level and the width of soft tabs (when
supported).  
When set to tab, the value of `tab_width` (if specified) will be used.

### 3.`tab_width`

a whole number defining the number of columns used to represent a tab character.  
This defaults to the value of `indent_size` and doesn't usually need to be specified.

### 4.`end_of_line`

set to `lf`, `cr`, or `crlf` to control how line breaks are represented.

### 5.`charset`

set to `latin1`, `utf-8`, `utf-8-bom`, `utf-16be` or `utf-16le` to control the character set.

### 6.`trim_trailing_whitespace`

set to `true` to remove any whitespace characters preceding newline characters and `false` to ensure it doesn't.

### 7.`insert_final_newline`

set to `true` to ensure file ends with a newline when saving and `false` to ensure it doesn't.

### 8.`root`

special property that should be specified at the top of the file outside of any sections.  
Set to `true` to stop `.editorconfig` files search on current file.

> Currently all properties and values are case-insensitive. They are lowercased when parsed.  
> Generally, if a property is not specified, the editor settings will be used, i.e. EditorConfig takes no effect on that part.  
> For any property, a value of `unset` is to remove the effect of that property, even if it has been set before.  
> For example, add `indent_size = unset` to undefine `indent_size` property (and use editor default).
