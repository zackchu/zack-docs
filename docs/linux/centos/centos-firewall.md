# `centos`管理防火墙

## 查看帮助

```bash
firewall-cmd --help
```

## 查看防火墙状态

```bash
systemctl status firewalld.service
```

## 打开防火墙

```bash
systemctl start firewalld.service
```

## 停止防火墙

```bash
systemctl stop firewalld.service
```

## 开机启动防火墙

```bash
systemctl enable firewalld
```

## 查看运行状态

```bash
firewall-cmd --state
```

## 更新防火墙规则

### 热更新

```bash
firewall-cmd --reload
```

### 冷启动

```bash
firewall-cmd --complete-reload
```

## 查看防火墙开启的端口

```bash
firewall-cmd --list-ports
```

## 开启指定端口

```bash
firewall-cmd --zone=public --add-port=8082/tcp --permanent
```

## 查看Linux服务器开启的端口

```shell
netstat -ntlp
```
