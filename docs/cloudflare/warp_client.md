# WARP Client

网址: https://developers.cloudflare.com/warp-client/

## 1 Linux - Debian

### 1.1 Add cloudflare gpg key

```shell
curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg | sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg
```

### 1.2 Add this repo to your apt repositories

```shell
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflare-client.list
```

### 1.3 Install

```shell
sudo apt-get update && sudo apt-get install cloudflare-warp
```

### 1.4 Switching modes

```shell
warp-cli mode proxy
```

### 1.5 Register the client

```shell
warp-cli registration new
```

### 1.6 Connect

```shell
warp-cli connect
```

### 1.7 Verify

```shell
curl -x socks5://127.0.0.1:40000 https://www.cloudflare.com/cdn-cgi/trace/
```

verify that `warp=on`
