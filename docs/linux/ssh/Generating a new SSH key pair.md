# Generating a new SSH key pair

Before creating an SSH key pair, make sure to read about the different types of keys to understand their differences.

To create a new SSH key pair:

1. Open a terminal on Linux or `macOS`, or `Git Bash` / `WSL` on Windows.
2. Generate a new **ED25519** SSH key pair:
   ```bash
   ssh-keygen -t ed25519 -C "email@example.com"
   ```
   Or, if you want to use **RSA**:
   ```bash
   ssh-keygen -o -t rsa -b 4096 -C "email@example.com"
   ```
   > The `-C` flag adds a comment in the key in case you have multiple of them and want to tell which is which. It is optional.
3. Next, you will be prompted to input a file path to save your SSH key pair to. If you don't already have an SSH key
   pair and aren't generating a deploy key, use the suggested path by pressing Enter. Using the suggested path will
   normally allow your SSH client to automatically use the SSH key pair with no additional configuration.  
   If you already have an SSH key pair with the suggested file path, you will need to input a new file path and declare
   what host this SSH key pair will be used for in your `~/.ssh/config` file.
4. Once the path is decided, you will be prompted to input a password to secure your new SSH key pair. It's a best
   practice to use a password, but it's not required and you can skip creating it by pressing Enter twice. If, in any
   case, you want to add or change the password of your SSH key pair, you can use the `-p` flag:
   ```bash
   ssh-keygen -p -o -f <keyname>
   ```
