NuTyX toolchain construction & nutyx package construction
======

## Follow thoses commands to build the toolchain

It's important to make the all process in one go. Total time of the 
construction is around 30 minutes on a modern Intel I7 processor (means
8 cores can be used).

## on a normal NuTyX in root

It's important to have a NuTyX devel packages installed

```
cards install cards.devel git
```

## In case you already launch the process once and interrupt it,
you have to remove the LFS user from the nutyx base and restart from the
begining
```
userdel lfs
rm -r /home/lfs
rm -r /mnt/lfs
`groupdel lfs
```

## Create the LFS configuration variable
```
export LFS=/mnt/lfs
```

## Create the folders
```
mkdir -pv $LFS/{sources,tools}
```

## Add the needed links
```
ln -svf $LFS/tools /
ln -svf $LFS/sources /
```

## Create the LFS user
```
groupadd lfs
useradd -s /bin/bash -g lfs -m -k /dev/null lfs
passwd lfs
chown -v lfs $LFS/{tools,sources}
chmod -v a+wt $LFS/sources
chown -v lfs $LFS
```

## Adjust the working environment:
### the /home/lfs/.bash

```
cat > /home/lfs/.bash_profile << "EOF"
exec env -i HOME=$HOME TERM=$TERM PS1='\u:\w\$ ' /bin/bash
EOF
```
### and the /home/lfs/.bashrc file

```
echo "set +h
umask 022
LFS=$LFS
LC_ALL=POSIX
LFS_TARGET=$(uname -m)-nutyx-linux-gnu
PATH=/home/lfs/bin:/tools/bin:/bin:/usr/bin
export LFS LC_ALL LFS_TARGET PATH" > /home/lfs/.bashrc
```

## Now go in the LFS user

```
su - lfs
```

## You are now in the LFS user, time to clone this git project
```
git clone https://github.com/nutyx/nutyx development
```
```
cd development
scripts/runmebeforepass1
```

## Normally, all will be good with the message above
"====> Successfull configured"

## Do the first pass
```
cd chroot
pass
```

## When you see following message (about 30 minutes later):
``=======> Building '/home/lfs/development/chroot/cards/Pkgfile' succeeded.
/home/lfs/development/chroot"
```
it means you are done with building the toolchain.
