# letsencrypt

## Install `acme.sh`

```shell
curl https://get.acme.sh | sh -s email=
```

## Issue a cert

```shell
acme.sh --issue -d example.com -w /var/www/html

acme.sh --issue -d example.com -w /var/www/html
```

## Install the cert

```shell
acme.sh --install-cert -d example.com \
--key-file       /path/to/keyfile/in/nginx/key.pem  \
--fullchain-file /path/to/fullchain/nginx/cert.pem \
--reloadcmd     "service nginx force-reload"
```
