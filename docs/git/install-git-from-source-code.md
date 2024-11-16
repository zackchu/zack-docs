# 通过源码安装`git`会出现的错及解决：

## 1. 运行 `./configure` 报错，没有 c

```bash
sudo yum install gcc

sudo apt install build-essential
```

## 2. 运行 `make` 报错

```bash
zlib.h: No such file or directory
```

_解决办法：安装 `zlib-devel` 并重新执行 `make`_

### 2.1 `Centos` 环境

```bash
sudo yum install zlib-devel
```

### 2.2 `Debian` 环境

```bash
sudo apt-get install libz-dev
```

## 3. 进行 `git clone` 时报错

```bash
fatal: unable to find remote helper for 'http'
```

_解决办法：安装 `curl-devel` 并重新编译安装_

```bash
sudo yum install curl-devel
```

## 4. `make` 报错

```shell
/bin/sh: 1: msgfmt: not found
#或
po/bg.msg make[1]: *** [Makefile:254: po/bg.msg] Error 127
```

解决办法

```shell
sudo apt install gettext
```
