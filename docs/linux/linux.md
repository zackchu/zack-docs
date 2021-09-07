# linux

## 1 常见问题

### 1.1 未找到`xz`

```shell
tar (child): xz: Cannot exec: No such file or directory
```

解决

```shell
sudo apt-get install xz-utils
```

### 1.2 未找到 `openssl/ssl.h`

```shell
fatal error: openssl/ssl.h: No such file or directory
```

解决

```shell
apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
  libz-dev libssl-dev
```
