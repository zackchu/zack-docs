# linux

[toc]

## 1. 未找到`xz`

```shell
tar (child): xz: Cannot exec: No such file or directory
```

解决

```shell
sudo apt-get install xz-utils
```

## 2. 未找到 `openssl/ssl.h`

```shell
fatal error: openssl/ssl.h: No such file or directory
```

解决

```shell
apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
  libz-dev libssl-dev
```

## 3. What killed my process and why

Original: https://stackoverflow.com/questions/726690/what-killed-my-process-and-why

Try:

```shell
sudo dmesg -T | grep -E -i -B100 'killed process'
```

> Where -B100 signifies the number of lines before the kill happened.

> Omit -T on Mac OS.
