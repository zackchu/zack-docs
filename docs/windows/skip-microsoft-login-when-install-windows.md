# Skip Microsoft Login When Install Windows

## 1. Disconnect network

## 2. Open CMD

Press `shift + F10`

## 3. Open regedit

```cmd
regedit
```

## 4. Add new setting

1. Open `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE`
2. Add new `DWORD(32bit)` named by `BypassNRO` with value `1`
3. Save this new setting

## 5. Restart

Run

```cmd
shutdown /r /t 0
```

within CMD
