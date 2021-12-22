# rpmdb open failed

## Error

```shell
error: rpmdb: BDB0113 Thread/process 23057/140425574250304 failed: BDB1507 Thread died in Berkeley DB library
error: db5 error(-30973) from dbenv->failchk: BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery
error: cannot open Packages index using db5 -  (-30973)
error: cannot open Packages database in /var/lib/rpm
CRITICAL:yum.main:

Error: rpmdb open failed
```

## Resolve

```shell
rm -f /var/lib/rpm/__db*

db_verify /var/lib/rpm/Packages

rpm --rebuilddb
```
