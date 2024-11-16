# Install nginx

## 1.安装依赖

```shell
sudo yum install yum-utils
```

## 2.配置 `yum` 仓库:

打开 `/etc/yum.repos.d/nginx.repo`, 输入以下内容

```text
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

## _3.默认情况下会安装 `stable` 版本，如果需要 `mainline` 版本，执行以下命令：_

```bash
sudo yum-config-manager --enable nginx-mainline
```

## 4.安装 `nginx`

```shell
sudo yum install nginx
```
