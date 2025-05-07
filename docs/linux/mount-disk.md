# Format and mount a non-boot disk

## Format a non-boot disk

Find which device to format

```shell
 ls -l /dev/disk/by-id/<id*>

```

> Unformatted disks don't have additional symlinks with `-partN` in the name.

Format the entire disk with no partition table.

```shell
 sudo mkfs.ext4 -m 0 -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/vdb

```

## Mount the disk

Create a directory that serves as the mount point

```shell
sudo mkdir -p /mnt/disks/data-1

```

Mount

```shell
sudo mount -o discard,defaults /dev/vdb /mnt/disks/data-1

```

Configure read and write permissions

```shell
sudo chmod a+w /mnt/disks/data-1

```

## Configure automatic mounting

Add the disk to `/etc/fstab` file

Backup `/etc/fstab` file

```shell
sudo cp /etc/fstab /etc/fstab.backup
```

List the UUID for the disk

```shell
sudo blkid /dev/vdb

```

Update `/etc/fstab` file

```text
UUID=UUID_VALUE /mnt/disks/data-1 ext4 discard,defaults,MOUNT_OPTION 0 2

```

## More

[Google Cloud](https://cloud.google.com/compute/docs/disks/format-mount-disk-linux)
