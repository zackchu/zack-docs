# GPG

[toc]

## 一、初识 GPG

全称：**T**he **GNU** **P**rivacy **G**uard

- GnuPG 是 RFC4880（也称为 PGP）定义的 OpenPGP 标准的完整和免费实现。
- GnuPG 允许您对数据和通信进行加密和签名；
- 它具有通用的密钥管理系统，以及用于各种公钥目录的访问模块。
- GnuPG，也称为 GPG，是一种命令行工具，具有易于与其他应用程序集成的功能。
- 自 1997 年推出以来，GnuPG 是免费软件（意味着它尊重您的自由）。
- 可以根据**GNU General Public License**的条款自由使用，修改和分发。

**最新版本：v2.2.27**(2021-01-12)

使用加密有助于保护您的隐私以及与您交流的人的隐私。加密使批量监视系统的工作变得困难。 GnuPG 是**Snowden**用来揭示 NSA
秘密的工具之一。

## 二、GPG 基本操作

### 1. GPG 安装

下载地址：[GnuPG - Download](https://gnupg.org/download/index.html)

- Windows:
  - [Gpg4win](https://gpg4win.org/download.html) 带有可视化界面的 Windows 客户端
  - [download](https://gnupg.org/ftp/gcrypt/binary/gnupg-w32-2.2.27_20210111.exe) Windows 下命令行安装
- macOS：
  - [Mac GPG](https://gpgtools.org/) 带有可视化界面的 macOS 客户端
  - [GnuPG for OS X](https://sourceforge.net/p/gpgosx/docu/Download/) macOS 下命令行安装
- Linux：一般自带 GPG 命令

#### gpg 安装报 random 相关错误

```shell
./configure --enable-random=linux
```

### 2. GPG 常用命令

命令格式

`gpg [options] [files]`

#### 查看 GPG 帮助

```bash
gpg -h
```

#### 查看当前已安装/导入的 GPG 公钥

```bash
# 查看公钥
gpg -k
# 或
gpg --list-keys

# 查看私钥
gpg -K
# 或
gpg --list-secret-keys
```

查看密钥列表时可通过添加 `--keyid-format` 选项来以不同格式查看密钥 id

可取参数为：`none` | `short` | `0xshort` | `long` | `0xlong`

- `none` : 不显示 id，但是显示密钥指纹
- `short` : 传统 8 个字符的密钥 id
- `long` : 更准确（但不太方便）的 16 个字符的密钥 ID
- `0x~`: 在 id 前加上"0x"

```bash
gpg -k --keyid-format long
```

输出如下，其中**D426C0E70C144D34**即为 keyid

```
/Users/zackchu/.gnupg/pubring.kbx
---------------------------------
pub   rsa4096/D426C0E70C144D34 2020-12-30 [SC] [expires: 2021-12-30]
      0B932A6B863735DA80CD3CDED426C0E70C144D34
uid                 [ultimate] ******** <********>
sub   rsa4096/3317E524F7A21A5B 2020-12-30 [E] [expires: 2021-12-30]

pub   rsa4096/1646B01B86E50310 2016-10-05 [SC]
      72ECF46A56B4AD39C907BBB71646B01B86E50310
uid                 [ unknown] Yarn Packaging <yarn@dan.cx>
sub   rsa4096/02820C39D50AF136 2016-10-05 [E]
sub   rsa4096/23E7166788B63E1E 2019-01-02 [S] [expires: 2021-02-03]
sub   rsa4096/4F77679369475BAA 2019-01-11 [S] [expires: 2021-02-03]


```

```bash
gpg -K
```

私钥输出如下:

```
/Users/zackchu/.gnupg/pubring.kbx
---------------------------------
sec   rsa4096 2020-12-30 [SC] [expires: 2021-12-30]
      0B932A6B863735DA80CD3CDED426C0E70C144D34
uid           [ultimate] ******** <********>
ssb   rsa4096 2020-12-30 [E] [expires: 2021-12-30]
```

#### 创建密钥

```bash
gpg --full-generate-key # 全功能密钥对生成
gpg --generate-key # 创建密钥对
gpg --quick-generate-key # 快速创建新的密钥对
```

#### 导出密钥

```bash
gpg --export [USER-ID] # 导出公钥
gpg --export-secret-key [USER-ID] # 导出私钥
```

导出密钥默认导出全部公钥/私钥，可在命令行末尾加上**USER-ID**来制定需要导出的公钥/私钥。

#### 导入密钥

```bash
gpg --import
```

导入公钥/私钥

#### 编辑或签名密钥

```bash
gpg --edit-key user-id
```

> 导入的密钥需要被信任之后才能正常使用

#### 删除密钥

```bash
gpg --delete-keys # 删除公钥
gpg --delete-secret-keys # 删除私钥
```

#### 常用 `options`

```bash
-a,--armor # 以ASCII格式输出
-r, --recipient USER-ID # 为指定USER-ID加密
-u, --local-user USER-ID # 使用指定USER-ID签名或解密
-o, --output FILE # 将输出写入到以FILE为名字的文件
```

## 三、场景

### 1. Git 对 commit 和 tag 签名

#### 对 commit 签名

```bash
git commit -S[<keyid>]
# 或
git commit --gpg-sign[=<keyid>]
```

**keyid**: keyid 即[第二章第二节](# 查看当前已安装/导入的 GPG 公钥)所述查看 gpg 列表中通过添加 `--keyid-format long`
选项查看得到的 keyid

#### 对 tag 签名

```bash
# 使用默认邮件地址的密钥给tag进行签名
git tag -s
# 或
git tag --sign

# 使用指定的密钥给tag签名
git tag -u <keyid>
# 或
git tag --local-user=<keyid>
```

**keyid**: 同上

#### 在 `git log` 中显示签名信息

```bash
git log --show-signature
```

#### 将 gpg 相关参数写入配置文件

```bash
# 设置用户默认使用的keyid
git config --global user.signingKey <keyid>
# git log 显示签名信息
git config --global log.showSignature true
# 对commit进行gpg签名
git config --global commit.gpgSign true
# 对tag进行gpg签名
git config --global tag.gpgSign true
```

**keyid**: 同上

最终可以在 `~/.gitconfig` 文件中看到以下信息：

```
[user]
	name = zhushengchao
	email = zhushengchao@idongjia.cn
	signingKey = D426C0E70C144D34
[log]
	showSignature = true
[commit]
	gpgSign = true
[tag]
	gpgSign = true
```

#### GitHub/GitLab 中显示 GPG 签名信息

1. 导出密钥

   按照[第二章第二节](#导出密钥)中所述方法进行导出密钥：

   ```bash
   gpg -a --export <USER-ID>
   ```

   得到类似如下输出：

   ```
   -----BEGIN PGP PUBLIC KEY BLOCK-----

   # 中间大段为公钥内容
   -----END PGP PUBLIC KEY BLOCK-----
   ```

   > 复制公钥时需要将**-----BEGIN PGP PUBLIC KEY BLOCK-----**及**-----END PGP PUBLIC KEY BLOCK-----**一起复制

2. 添加密钥（公钥）

   - GitHub：

     在[SSH and GPG keys](https://github.com/settings/keys)页面，通过点击**New GPG key**按钮，粘贴上一步操作中导出的公钥

   - GitLab：

     在[GPG keys](https://gitlab.com/-/profile/gpg_keys)页面，粘贴上一步导出的公钥，点击**Add Key**按钮即可

最终在 commit 提交历史可以见到**Verified**标签

### 2. 基于 GPG 的加密通讯

1. 导出公钥

2. 交换公钥

   需要加密通讯的双方通过可信渠道互相交换公钥

3. 准备信息

   信息发送方编辑需要发送的信息，一般为纯文本。

   执行以下命令对信息进行加密+签名

   ```bash
   gpg -a -r <USER-ID_1> -u <USER-ID_2> -b -e <待加密文本或内容>
   ```

   > -a: 以 ASCII 格式输出文本
   >
   > -r: 用来加密及签名的 userid(发信方)，一般为邮箱地址
   >
   > USER-ID_1: 发信方用户 id(邮箱)
   >
   > -u: 对方 userid(收信方)，邮箱地址，需要事先导入对方公钥
   >
   > -b: 制作一个分离的签名
   >
   > -e: 加密数据

   输出内容类似如下：

   ```
   -----BEGIN PGP MESSAGE-----

   # 中间即为最终加密且签名的实际内容
   -----END PGP MESSAGE-----
   ```

4. 发送加密

   复制上述从**-----BEGIN PGP MESSAGE-----**到**-----END PGP MESSAGE-----**的全部内容，通过任意聊天工具发送信息即可。

5. 接收信息

   接收到信息之后可通过以下命令解密得到原始信息：

   ```bash
   gpg -d <加密过的文本或内容>
   # 或
   gpg --decrypt <加密过的文本或内容>
   ```

## 四、待拓展

1. GPG 有效期的更新
2. 公钥服务器的使用
3. 吊销公钥
4. PGP
