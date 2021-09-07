# terminal

## 一、proxy

```shell
export http_proxy=socks5://127.0.0.1:10808
export https_proxy=socks5://127.0.0.1:10808
```

## 二、写入文件

```shell
vi .bashrc
vi .zshrc
```

```shell
httpProxyServer=my.http.proxy.server:8000
httpsProxyServer=my.https.proxy.server:8000

export http_proxy=$httpProxyServer
export https_proxy=$httpsProxyServer
export HTTP_PROXY=$httpProxyServer
export HTTPS_PROXY=$httpsProxyServer
```
