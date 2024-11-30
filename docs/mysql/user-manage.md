# Mysql User Manage

## Create user

```mysql
create user 'user'@'hostname';
create user 'user'@'%';

create user 'new_user'@'localhost' identified by 'new_password';
```

## Grant access

```mysql
grant all on my_db.* to 'new_user'@'localhost';
grant all privileges on dbTest.* to 'user'@'hostname' identified by 'password';

```

## Flush privileges

```mysql
flush privileges;
```
