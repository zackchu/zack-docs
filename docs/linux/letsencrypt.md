# letsencrypt

[TOC]

## 1. Install `acme.sh`

```shell
curl https://get.acme.sh | sh -s email=
```

## 2. Set default CA

```shell
acme.sh --set-default-ca --server letsencrypt
```

### 2.1. Supported CA

| Short Name       | ACME server URL                                                        | Usage Wiki                                                                           |
|------------------|------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| letsencrypt      | https://acme-v02.api.letsencrypt.org/directory                         | N/A                                                                                  |
| letsencrypt_test | https://acme-staging-v02.api.letsencrypt.org/directory                 | N/A                                                                                  |
| buypass          | https://api.buypass.com/acme/directory                                 | [BuyPass.com CA](https://github.com/acmesh-official/acme.sh/wiki/BuyPass.com-CA)     |
| buypass_test     | https://api.test4.buypass.no/acme/directory                            | [BuyPass.com CA](https://github.com/acmesh-official/acme.sh/wiki/BuyPass.com-CA)     |
| zerossl          | https://acme.zerossl.com/v2/DV90                                       | [ZeroSSL.com CA](https://github.com/acmesh-official/acme.sh/wiki/ZeroSSL.com-CA)     |
| sslcom           | https://acme.ssl.com/sslcom-dv-rsa, https://acme.ssl.com/sslcom-dv-ecc | [SSL.com CA](https://github.com/acmesh-official/acme.sh/wiki/SSL.com-CA)             |
| google           | https://dv.acme-v02.api.pki.goog/directory                             | [Google Public CA](https://github.com/acmesh-official/acme.sh/wiki/Google-Public-CA) |
| googletest       | https://dv.acme-v02.test-api.pki.goog/directory                        | [Google Public CA](https://github.com/acmesh-official/acme.sh/wiki/Google-Public-CA) |

## 3 Issue a cert

```shell
acme.sh --issue -d example.com -w /var/www/html

acme.sh --issue -d example.com -w /var/www/html
```

### 3.1. Issue a cert with a different CA

```shell
acme.sh --issue -d example.com -w /var/www/html --server letsencrypt
```

## 4 Install the cert

```shell
#nginx
acme.sh --install-cert -d example.com \
--key-file       /path/to/keyfile/in/nginx/key.pem  \
--fullchain-file /path/to/fullchain/nginx/cert.pem \
--reloadcmd     "service nginx force-reload"
```
