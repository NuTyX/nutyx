#!/bin/bash
# pcp.sh: A shell script to copy /bin/* and /etc/* files
#         Display a progress bar while copying files.  
# * Based upon Greg's (GreyCat's) GPLd wiki example. *
# --------------------------------------------------------
# Create an array of all files in /etc and /bin directory
DIRS=(/boot/*.squashfs)

# Destination directory
DEST="/mnt/hd"

# Create $DEST if does not exits
[ ! -d $DEST ] && mkdir -p $DEST

#
# Show a progress bar
# ---------------------------------
# Redirect dialog commands input using substitution
#
dialog --title "Copy file" --gauge "Copying file..." 6 50 < <(
   # Get total number of files in array
   for fs in ${DIRS[@]}; do n=$(( n+$(unsquashfs -l $fs|wc -l) )); done
#   n=${#DIRS[*]};
   echo "Number of files: $n" > log

   # set counter - it will increase every-time a file is copied to $DEST
   i=0

   #
   # Start the for loop 
   #
   # read each file from $DIRS array 
   # $f has filename 
   for f in "${DIRS[@]}"
   do
	  DIR=$(basename $(echo $f|cut -d "." -f1))
      # calculate progress
      PCT=$(( 100*(++i)/n ))

      # update dialog box 
cat <<EOF
XXX
$PCT
Copying $DIR files...
XXX
EOF
      # copy file $f to $DEST
      mkdir ${DEST}/${DIR}
      unsquashfs -f -n -d ${DEST}/${DIR} ${f}
#      unsquashfs -f -n -d ${DEST}/${DIR} ${i} &> /dev/tty3
   done
)

# just delete $DEST directory
# /bin/rm -rf $DEST
