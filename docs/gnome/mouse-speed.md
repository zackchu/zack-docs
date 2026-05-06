# gnome 下鼠标速度设置

## 关闭鼠标加速度

```shell
gsettings set org.gnome.desktop.peripherals.mouse accel-profile 'flat'
```

## 设置鼠标速度

```shell
# 速度为1/32, 参考windows下第一档速度
# 计算方法为: 1/31 - 1 = 0.03125 -1 = -0.96875
gsettings set org.gnome.desktop.peripherals.mouse speed -0.96875
```
