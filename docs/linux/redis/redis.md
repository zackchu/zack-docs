# REDIS

## 命令

### `SET`设置新变量

```bash
set serve:name 'fido'
setnx server:name 'fido'
```

`setnx`SET-if-not-exists，只有不存在才会设置新值

### `GET`获取变量

```bash
get server:name
=>'fido'
```

### `INCR`自动+1

```bash
 SET connections 10
 INCR connections => 11
 INCR connections => 12
```

### `DEL`删除

```bash
del connections
```

### `EXPIRE`设置有效期/`TTL`检测是否过期

```bash
set resource:lock 'Redis Demo'
expire resource:lock 120

ttl resource:lock => 113
// after 113s
ttl resource:lock => -2
```

> 如果永不过期，ttl 变量 => -1
>
> 如果还未过期，ttl 变量 => 剩余时间
>
> 如果已经过期，ttl 变量 => -2

### `LIST`类型数据

`RPUSH`,`LPUSH`,`LLEN`,`LRANGE`,`LPOP`,`RPOP`

#### `RPUSH`在list尾部增加新值

```bash
RPUSH friends 'Alice'
RPUSH friends 'Bob'
```

#### `LPUSH`在list头部增加新值

```bash
LPUSH friends 'Sam'
```

#### `LRANGE`截取list的一段子集

```bash
LRANGE friends 0 -1 => 1) "Sam", 2) "Alice", 3) "Bob"
LRANGE friends 0 1 => 1) "Sam", 2) "Alice"
LRANGE friends 1 2 => 1) "Sam", 2) "Bob"
```

> 从第一个索引考试到第二个索引结束
>
> 如果第二个索引是-1则截取到结尾

#### `LLEN`返回list的长度

```bash
LLEN friends => 3
```

#### `LPOP`删除list第一个元素并返回它

```bash
LPOP friends => "Sam"
LLEN friends => 2
LRANGE friends 0 -1 => 1) "Alice", 2) "Bob"
```

#### `RPOP`删除list最后一个元素并返回它

```bash
RPOP friends => "Bob"
LLEN friends => 1
LRANGE friends 0 -1 => 1) "Alice"
```

### `SET`类型数据

> set类型数据没有特定的顺序，并且每个元素只出现一次

`SADD`, `SREM`, `SISMEMBER`, `SMEMBERS`, `SUNION`

#### `SADD`把指定的值添加到set中

```bash
SADD superpowers "flight" => (integer) 1
SADD superpowers "x-ray vision" => (integer) 1
SADD superpowers "reflexes" => (integer) 1
```

#### `SREM`把指定的值从set中删除

```bash
SREM superpowers 'reflexes' => 1
```

#### `SISMEMBER`检测指定的值是否在set中

```bash
SISMEMBER superpowers 'flight' => 1
SISMEMBER superpowers 'reflex' => 0
```

> 如果存在则返回1，否则返回0

#### `SMEMBERS`返回指定set所有元素组成的list

```ba
SMEMBERS superpowers => 1) "flight", 2) "x-ray vision"
```

#### `SUNION`拼接两个或多个set，返回所有元素的新list

```bash
SADD birdpowers 'pecking'
SADD birdpowers 'flight'
SUNION superpowers birdpowers => 1) 'pecking', 2) 'x-ray vision', 3) 'flight'
```

### `Sorted Sets`类型数据

> `Sorted Sets`类型数据类似于普通`set`，但是每个元素都有个相关的分数(Score)，这个分数用来给set中的元素进行排序

#### `ZADD`添加元素

```bash
ZADD hackers 1940 "Alan Kay"
ZADD hackers 1906 "Grace Hopper"
ZADD hackers 1953 "Richard Stallman"
ZADD hackers 1965 "Yukihiro Matsumoto"
ZADD hackers 1916 "Claude Shannon"
ZADD hackers 1969 "Linus Torvalds"
ZADD hackers 1957 "Sophie Wilson"
ZADD hackers 1912 "Alan Turing"
```

> 这个例子中，年份是分数(score)，著名的黑客(hackers)名字是对应的值。

#### `ZRANGE`截取一段并返回list

```bash
ZRANGE hackers 2 4 => 1) "Claude Shannon", 2) "Alan Kay", 3) "Richard Stallman"
```

### `Hashes`类型数据

> `Hashes`是字符串字段和字符串值之间的映射，所以他们是代表对象的最佳数据类型

#### `HSET`用来设置元素中键值对

```bash
HSET user:1000 name "John Smith"
HSET user:1000 email "john.smith@example.com"
HSET user:1000 password "s3cret"
```

#### `HGETALL`用来获取存储的数据

```bash
HGETALL user:1000
=>
1) "name"
2) "John Smith"
3) "email"
4) "john.smith@example.com"
5) "password"
6) "s3cret"
```

#### `HMSET`用来一次设置多个字段

```bash
HMSET user:1001 name 'Mary Jones' password 'hidden' email 'mjones@example.com'
```

#### `HGET`用来返回单个字段

```bash
HGET user:1001 name => 'Mary Jones'
```

#### 数字类型的值

> `Hashes`中数字类型值的处理与普通字符串值处理相似

```bash
HSET user:1000 visits 10
HINCRBY user:1000 visits 1 => 11
HINCRBY user:1000 visits 10 => 21
HDEL user:1000 visits
HINCRBY user:1000 visits 1 => 1
```

### `DBSIZE`返回当前选中数据库存储的`keys`的数量

```bash
127.0.0.1:6379> dbsize
(integer) 6
```

### `FLUSHDB [ASYNC]`删除当前选中数据库中所有的`keys`

```bash
127.0.0.1:6379> flushdb async
OK
```

### `FLUSHALL [ASYNC]`删除所有数据库中的所有`keys`

```bash
127.0.0.1:6379> flushdb async
OK
```
