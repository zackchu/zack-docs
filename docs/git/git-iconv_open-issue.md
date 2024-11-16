# git fatal when run `git status`

更多讨论: https://github.com/conda-forge/git-feedstock/issues/50#issuecomment-771370803

## 现象

运行 `git status` 时报错:

```shell
fatal: iconv_open(UTF-8,UTF-8-MAC) failed, but needed:
    precomposed unicode is not supported.
    If you want to use decomposed unicode, run
    "git config core.precomposeunicode false"
```

## 找到造成此问题的文件

```shell
LC_ALL=C find . -name '*[! -~]*'
```
