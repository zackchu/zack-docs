# 通过 docker 安装基于 bind9 的 DNS 服务器

> 此处仅讨论递归 DNS 服务器(Recursive DNS Server)，权威 DNS 服务器(Authoritative DNS Server)不在内容范围

[bind9 官网地址](https://www.isc.org/bind/)

[bind9 docker 地址](https://hub.docker.com/r/internetsystemsconsortium/bind9)

[bind9 docker 源码地址](https://gitlab.isc.org/isc-projects/bind9-docker)

## 1. 拉取镜像

> 当前时间： 2024-09-23

1. Current Stable, ESV - 9.18 版本
   ```shell
   docker pull internetsystemsconsortium/bind9:9.18
   ```
2. New Stable - 9.20 版本
   ```shell
   docker pull internetsystemsconsortium/bind9:9.20
   ```

## 2. (可选)设置 docker volume

bind9 默认创建以下 volume：

1. `/etc/bind` - 配置文件存放处
2. `/var/cache/bind`
3. `/var/lib/bind`
4. `/var/log`

建议为`/etc/bind` 提前创建 volume，方便后期修改配置，其它 volume 按需创建即可

```shell
#假设自定义名字为 `bind-conf`
docker volume create bind-conf
```

之后可在 docker host 主机进入 `/var/lib/docker/volumes/bind-conf/_data`目录修改 bind9 配置

## 3. 运行 DNS 服务器

```shell
docker run \
        --name=bind9 \
        --restart=always \
        --publish 53:53/udp \
        --publish 53:53/tcp \
        --publish 127.0.0.1:953:953/tcp \
        --volume bind-conf:/etc/bind \
        internetsystemsconsortium/bind9:9.20

```

`--volume` 参数即上一步中创建的 volume

### 3.1 如果没有提前创建 volume

```shell
docker run \
        --name=bind9 \
        --restart=always \
        --publish 53:53/udp \
        --publish 53:53/tcp \
        --publish 127.0.0.1:953:953/tcp \
        internetsystemsconsortium/bind9:9.20

```

运行后依然会自动生成 `/etc/bind`对应的 volume，需要通过 `docker inspect` 查看刚刚创建的 container 来确定 `/etc/bind`
目录在 host 主机的实际对应位置。

## 4. 修改配置文件将 bind9 开放给局域网

> **_将 bind9 开放至公网的后果自行承担_**

### 4.1 确定本地网段

假如本地网段为 `192.168.2.*`

### 4.2 修改 bind9 配置目录下的`named.conf`

> 建议提前备份一份未修改的配置文件

文件顶部添加以下配置，具体地址为要为 bind9 开发访问的局域网地址

```
acl corpnets {
        192.168.2.0/24;
};
```

在 options 块下添加以下配置:

```
allow-query { corpnets; };
```

最终结果示例：

```
acl corpnets {
        192.168.2.0/24;
};

http local {
        endpoints { "/dns-query"; };
};


options {
        directory "/var/cache/bind";

        allow-query { corpnets; };

        listen-on { any; };
        listen-on-v6 { any; };
        listen-on tls ephemeral { any; };
        listen-on-v6 tls ephemeral { any; };
        listen-on tls ephemeral http local { any; };
        listen-on-v6 tls ephemeral http local { any; };
};

```

### 4.3 重启 bind9 docker container

```shell
docker restart bind9
```

## 5. Q&A

待补充
