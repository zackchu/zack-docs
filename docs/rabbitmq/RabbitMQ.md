# Customer RabbitMQ image with config and plugin

[toc]

## 1. Virtual hosts

### 1.1 Add vhost

`rabbitmqctl` add_vhost vhost [--description desc --tags tags --default-queue-type default-q-type]

```shell
rabbitmqctl add_vhost project9_dev_18 --description 'Dev environment no. 18' --tags dev,project9
```

### 1.2 Delete vhost

`delete_vhost` vhost

```shell
rabbitmqctl delete_vhost a-vhost
```

## 2. Users

### 2.1 Add user

`add_user` username password

```shell
rabbitmqctl add_user janeway changeit
```

### 2.2 Change password

`change_password` username newpassword

```shell
rabbitmqctl change_password janeway newpass
```

### 2.3 Clear password

`clear_password` username

```shell
rabbitmqctl clear_password janeway
```

### 2.4 Delete user

`delete_user` username

```shell
rabbitmqctl delete_user janeway
```

### 2.5 List users

`list_users`

```shell
rabbitmqctl list_users
```

## 3. Permissions

### 3.1 List permissions

`list_permissions` [-p vhost]

```shell
rabbitmqctl list_permissions -p my-vhost
```

### 3.2 Set Permissions

`set_permissions` [-p vhost] user conf write read

```shell
rabbitmqctl set_permissions -p my-vhost janeway ".*" ".*" ".*"
```

### 3.3 Clear permissions

`clear_permissions` [-p vhost] username

```shell
rabbitmqctl clear_permissions -p my-vhost janeway
```

## 4. Plugins

### 4.1 Find out what the plugins directory is

```shell
rabbitmq-plugins directories -s
```

### 4.2 List plugins

```shell
rabbitmq-plugins list
```

### 4.3 Enable plugin

```shell
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```
