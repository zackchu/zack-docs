# Mysql User Manage

## Create user

```mysql
CREATE USER 'user'@'hostname';
CREATE USER 'user'@'%';

CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';
```

## Grant access

```mysql
GRANT ALL ON my_db.* TO 'new_user'@'localhost';
GRANT ALL PRIVILEGES ON dbtest.* TO 'user'@'hostname' IDENTIFIED BY 'password';

```

## Flush privileges

```mysql
FLUSH PRIVILEGES;
```
