NuTyX toolchain construction & nutyx package construction
======

## Follow thoses commands to build the toolchain

It's important to make the all process in one go. Total time of the 
construction is around 30 minutes on a modern Intel I7 processor (means
8 cores can be used).

This processus is only valid for a normal NuTyX GNU/Linux

## In case you already launch the process once and interrupt it:

you have to remove the ntc user from the nutyx base and restart from the
begining

```
userdel ntc
rm -r /home/ntc
rm -r /mnt/ntc
```


## It's important to have a NuTyX devel packages installed

```
cards install cards.devel git
```


# Time to build the NuTyX Toolchain
## Create the NTC configuration variable
```
export NTC=/mnt/ntc
```

## Create the folders
```
sudo mkdir -pv $NTC/{sources,tools}
```

## Add the needed links
```
sudo ln -svf $NTC/tools /
sudo ln -svf $NTC/sources /
```

## Create the ntc user
```
sudo groupadd ntc
sudo useradd -s /bin/bash -g ntc -m -k /dev/null ntc
sudo passwd ntc
sudo chown -v ntc $NTC/{tools,sources}
sudo chmod -v a+wt $NTC/sources
sudo chown -v ntc $NTC
```

## Adjust the working environment:
### the /home/ntc/.bash

```
cat > /home/ntc/.bash_profile << "EOF"
exec env -i HOME=$HOME TERM=$TERM PS1='\u:\w\$ ' /bin/bash
EOF
```
### and the /home/ntc/.bashrc file

```
echo "set +h
umask 022
NTC=$NTC
LC_ALL=POSIX
NTC_TARGET=$(uname -m)-nutyx-linux-gnu
PATH=/home/ntc/bin:/tools/bin:/bin:/usr/bin
export NTC LC_ALL NTC_TARGET PATH" > /home/ntc/.bashrc
```

## Now go in the NTC user

```
su - ntc
```

## You are now in the ntc user, time to clone this git project
```
git clone https://github.com/nutyx/nutyx development
```

## We enter into the git folder
```
cd development
scripts/runmebeforepass1
```

## Normally, all will be good with the message above
```
====> Successfull configured
```


## Do the first pass
```
cd chroot
pass
```

## When you see following message (about 30 minutes later or more ...):
```
=======> Building '/home/ntc/development/chroot/cards/Pkgfile' succeeded.
/home/ntc/development/chroot
```
it means you successfully build the toolchain.

# Toolchain construction finished
