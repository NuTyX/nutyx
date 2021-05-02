# Mensajes en español para util-linux.
# Copyright (C) 2000 Beth Powell <bpowell@turbolinux.com>.
# Copyright (C) 2001, 2002, 2003 Santiago Vila Doncel <sanvila@unex.es>.
#
# This file is distributed under the same license as the util-linux package.
#
# Beth Powell <bpowell@turbolinux.com>, 2000.
# Santiago Vila Doncel <sanvila@unex.es>, 2001, 2002, 2003, 2004, 2010, 2014.
# Antonio Ceballos Roa <aceballos@gmail.com>, 2014, 2015, 2016, 2017, 2018, 2019, 2020.
#
# Permission is granted to freely copy and distribute
# this file and modified versions, provided that this
# header is not removed and modified versions are marked
# as such.
#
msgid ""
msgstr ""
"Project-Id-Version: util-linux 2.36-rc2\n"
"Report-Msgid-Bugs-To: util-linux@vger.kernel.org\n"
"POT-Creation-Date: 2020-07-23 11:38+0200\n"
"PO-Revision-Date: 2020-07-22 07:50+0200\n"
"Last-Translator: Antonio Ceballos Roa <aceballos@gmail.com>\n"
"Language-Team: Spanish <es@tp.org.es>\n"
"Language: es\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"X-Bugs: Report translation errors to the Language-Team address.\n"
"Plural-Forms: nplurals=2; plural=(n != 1);\n"

#: disk-utils/addpart.c:15
#, c-format
msgid " %s <disk device> <partition number> <start> <length>\n"
msgstr " %s <dispositivo> <número-de-partición> <comienzo> <longitud>\n"

#: disk-utils/addpart.c:19
msgid "Tell the kernel about the existence of a specified partition.\n"
msgstr "Informa al núcleo de la existencia de una partición especificada.\n"

#: disk-utils/addpart.c:52 disk-utils/blockdev.c:244 disk-utils/delpart.c:52
#: disk-utils/mkfs.bfs.c:127 disk-utils/resizepart.c:96 misc-utils/kill.c:314
#: misc-utils/kill.c:375 misc-utils/rename.c:289 misc-utils/whereis.c:524
#: sys-utils/flock.c:177 sys-utils/ipcrm.c:160 sys-utils/ldattach.c:367
#: sys-utils/renice.c:144 sys-utils/switch_root.c:240 sys-utils/tunelp.c:152
#: term-utils/agetty.c:893 term-utils/agetty.c:894 term-utils/agetty.c:902
#: term-utils/agetty.c:903
msgid "not enough arguments"
msgstr "no hay suficientes argumentos"

#: disk-utils/addpart.c:57 disk-utils/blockdev.c:293 disk-utils/blockdev.c:437
#: disk-utils/blockdev.c:464 disk-utils/cfdisk.c:2743 disk-utils/delpart.c:58
#: disk-utils/fdformat.c:229 disk-utils/fdisk.c:812 disk-utils/fdisk.c:1143
#: disk-utils/fdisk-list.c:327 disk-utils/fdisk-list.c:368
#: disk-utils/fdisk-list.c:391 disk-utils/fsck.c:1466
#: disk-utils/fsck.cramfs.c:155 disk-utils/fsck.cramfs.c:514
#: disk-utils/isosize.c:53 disk-utils/mkfs.bfs.c:186
#: disk-utils/mkfs.cramfs.c:171 disk-utils/mkfs.cramfs.c:660
#: disk-utils/mkfs.cramfs.c:799 disk-utils/mkfs.minix.c:823
#: disk-utils/mkswap.c:220 disk-utils/mkswap.c:249 disk-utils/partx.c:1021
#: disk-utils/resizepart.c:104 disk-utils/sfdisk.c:378 disk-utils/sfdisk.c:498
#: disk-utils/sfdisk.c:801 disk-utils/sfdisk.c:1082 disk-utils/swaplabel.c:65
#: libfdisk/src/bsd.c:642 login-utils/islocal.c:86 login-utils/last.c:679
#: login-utils/sulogin.c:444 login-utils/sulogin.c:481
#: login-utils/utmpdump.c:134 login-utils/utmpdump.c:354
#: login-utils/utmpdump.c:374 login-utils/vipw.c:261 login-utils/vipw.c:279
#: misc-utils/findmnt.c:1115 misc-utils/logger.c:1241 misc-utils/mcookie.c:119
#: misc-utils/uuidd.c:198 sys-utils/blkdiscard.c:225 sys-utils/blkzone.c:139
#: sys-utils/dmesg.c:530 sys-utils/eject.c:499 sys-utils/eject.c:698
#: sys-utils/fallocate.c:402 sys-utils/fsfreeze.c:116 sys-utils/fstrim.c:103
#: sys-utils/hwclock.c:235 sys-utils/hwclock.c:894 sys-utils/hwclock-rtc.c:138
#: sys-utils/hwclock-rtc.c:403 sys-utils/hwclock-rtc.c:438
#: sys-utils/irq-common.c:214 sys-utils/ldattach.c:391 sys-utils/lscpu.c:536
#: sys-utils/lsmem.c:658 sys-utils/nsenter.c:131 sys-utils/rfkill.c:192
#: sys-utils/rfkill.c:553 sys-utils/rtcwake.c:137 sys-utils/rtcwake.c:292
#: sys-utils/setpriv.c:259 sys-utils/setpriv.c:628 sys-utils/setpriv.c:651
#: sys-utils/swapon.c:374 sys-utils/swapon.c:517 sys-utils/switch_root.c:167
#: sys-utils/unshare.c:112 sys-utils/unshare.c:127 sys-utils/wdctl.c:361
#: sys-utils/zramctl.c:517 term-utils/agetty.c:2961 term-utils/mesg.c:143
#: term-utils/script.c:382 term-utils/scriptlive.c:256
#: term-utils/scriptlive.c:259 term-utils/scriptlive.c:262
#: term-utils/scriptreplay.c:260 term-utils/scriptreplay.c:263
#: term-utils/scriptreplay.c:266 term-utils/scriptreplay.c:269
#: term-utils/wall.c:421 text-utils/colcrt.c:284 text-utils/more.c:460
#: text-utils/rev.c:140 text-utils/ul.c:230
#, c-format
msgid "cannot open %s"
msgstr "no se puede abrir %s"

#: disk-utils/addpart.c:60 disk-utils/delpart.c:61 disk-utils/resizepart.c:101
msgid "invalid partition number argument"
msgstr "número de partición no válido"

#: disk-utils/addpart.c:61
msgid "invalid start argument"
msgstr "argumento de comienzo no válido"

#: disk-utils/addpart.c:62 disk-utils/resizepart.c:111
msgid "invalid length argument"
msgstr "argumento de longitud no válido"

#: disk-utils/addpart.c:63
msgid "failed to add partition"
msgstr "fallo al añadir partición"

#: disk-utils/blockdev.c:63
msgid "set read-only"
msgstr "establece sólo lectura"

#: disk-utils/blockdev.c:70
msgid "set read-write"
msgstr "establece lectura/escritura"

#: disk-utils/blockdev.c:76
msgid "get read-only"
msgstr "obtiene sólo lectura"

#: disk-utils/blockdev.c:82
msgid "get discard zeroes support status"
msgstr "obtiene el estado del soporte de descarte de ceros"

#: disk-utils/blockdev.c:88
msgid "get logical block (sector) size"
msgstr "obtiene el tamaño del bloque lógico (sector)"

#: disk-utils/blockdev.c:94
msgid "get physical block (sector) size"
msgstr "obtiene el tamaño del bloque físico (sector)"

#: disk-utils/blockdev.c:100
msgid "get minimum I/O size"
msgstr "obtiene el tamaño mínimo de E/S"

#: disk-utils/blockdev.c:106
msgid "get optimal I/O size"
msgstr "obtiene el tamaño óptimo de E/S"

#: disk-utils/blockdev.c:112
msgid "get alignment offset in bytes"
msgstr "obtiene el desplazamiento de alineación en bytes"

#: disk-utils/blockdev.c:118
msgid "get max sectors per request"
msgstr "obtiene el número máximo de sectores por petición"

#: disk-utils/blockdev.c:124
msgid "get blocksize"
msgstr "obtiene el tamaño del bloque"

#: disk-utils/blockdev.c:131
msgid "set blocksize on file descriptor opening the block device"
msgstr "establece el tamaño de bloque del descriptor de fichero que está abriendo el dispositivo de bloques"

#: disk-utils/blockdev.c:137
msgid "get 32-bit sector count (deprecated, use --getsz)"
msgstr "obtiene el contador de sectores de 32 bits (obsoleto, utilice --getsz)"

#: disk-utils/blockdev.c:143
msgid "get size in bytes"
msgstr "obtiene el tamaño en bytes"

#: disk-utils/blockdev.c:150
msgid "set readahead"
msgstr "establece `readahead'"

#: disk-utils/blockdev.c:156
msgid "get readahead"
msgstr "obtiene `readahead'"

#: disk-utils/blockdev.c:163
msgid "set filesystem readahead"
msgstr "establece el `readahead' del sistema de ficheros"

#: disk-utils/blockdev.c:169
msgid "get filesystem readahead"
msgstr "obtiene el `readahead' del sistema de ficheros"

#: disk-utils/blockdev.c:173
msgid "flush buffers"
msgstr "vacía los búferes"

#: disk-utils/blockdev.c:177
msgid "reread partition table"
msgstr "vuelve a leer la tabla de particiones"

#: disk-utils/blockdev.c:187
#, c-format
msgid ""
" %1$s [-v|-q] commands devices\n"
" %1$s --report [devices]\n"
" %1$s -h|-V\n"
msgstr ""
" %1$s [-v|-q] órdenes para dispositivos\n"
" %1$s --report [dispositivos]\n"
" %1$s -h|-V\n"

#: disk-utils/blockdev.c:193
msgid "Call block device ioctls from the command line."
msgstr "Llama a ioctls del dispositivo de bloque desde la línea de órdenes"

#: disk-utils/blockdev.c:196
msgid " -q             quiet mode"
msgstr " -q,            modo silencioso"

#: disk-utils/blockdev.c:197
msgid " -v             verbose mode"
msgstr " -v             modo expresivo"

#: disk-utils/blockdev.c:198
msgid "     --report   print report for specified (or all) devices"
msgstr "     --report   imprime un informe sobre los dispositivos especificados (o todos)"

#: disk-utils/blockdev.c:203
msgid "Available commands:"
msgstr "Órdenes disponibles:"

#: disk-utils/blockdev.c:204
#, c-format
msgid " %-25s get size in 512-byte sectors\n"
msgstr " %-25s obtiene el tamaño en sectores de 512 bytes\n"

#: disk-utils/blockdev.c:286 disk-utils/fdformat.c:219
#: disk-utils/fsck.minix.c:1336 disk-utils/isosize.c:155
#: disk-utils/mkfs.bfs.c:175 disk-utils/mkfs.c:110 disk-utils/mkfs.minix.c:812
#: disk-utils/swaplabel.c:180 misc-utils/wipefs.c:778
#: sys-utils/blkdiscard.c:214 sys-utils/blkzone.c:459 sys-utils/tunelp.c:241
#: sys-utils/zramctl.c:713 sys-utils/zramctl.c:739
msgid "no device specified"
msgstr "no se ha especificado ningún dispositivo"

#: disk-utils/blockdev.c:328
msgid "could not get device size"
msgstr "no se pudo obtener el tamaño del dispositivo"

#: disk-utils/blockdev.c:334
#, c-format
msgid "Unknown command: %s"
msgstr "Orden desconocida: %s"

#: disk-utils/blockdev.c:350
#, c-format
msgid "%s requires an argument"
msgstr "%s necesita un argumento"

#: disk-utils/blockdev.c:385 disk-utils/blockdev.c:497
#, c-format
msgid "ioctl error on %s"
msgstr "error de ioctl en %s"

#: disk-utils/blockdev.c:387
#, c-format
msgid "%s failed.\n"
msgstr "%s falló.\n"

#: disk-utils/blockdev.c:394
#, c-format
msgid "%s succeeded.\n"
msgstr "%s ha tenido éxito.\n"

#. TRANSLATORS: Start sector not available. Max. 10 letters.
#: disk-utils/blockdev.c:481
msgid "N/A"
msgstr ""

#: disk-utils/blockdev.c:505
#, c-format
msgid "RO    RA   SSZ   BSZ   StartSec            Size   Device\n"
msgstr "RO    RA   SSZ   BSZ   PrimerSec           Tam.   Dispo.\n"

#: disk-utils/cfdisk.c:191
msgid "Bootable"
msgstr "Iniciable"

#: disk-utils/cfdisk.c:191
msgid "Toggle bootable flag of the current partition"
msgstr "Conmuta el indicador de iniciable de la partición actual"

#: disk-utils/cfdisk.c:192
msgid "Delete"
msgstr "Suprimir"

#: disk-utils/cfdisk.c:192
msgid "Delete the current partition"
msgstr "Suprime la partición actual"

#: disk-utils/cfdisk.c:193
msgid "Resize"
msgstr "Cambiar tamaño"

#: disk-utils/cfdisk.c:193
msgid "Reduce or enlarge the current partition"
msgstr "Reduce o agranda la partición actual"

#: disk-utils/cfdisk.c:194
msgid "New"
msgstr "Nueva"

#: disk-utils/cfdisk.c:194
msgid "Create new partition from free space"
msgstr "Crea una nueva partición a partir del espacio libre"

#: disk-utils/cfdisk.c:195
msgid "Quit"
msgstr "Salir"

#: disk-utils/cfdisk.c:195
msgid "Quit program without writing changes"
msgstr "Sale del programa sin escribir los cambios"

#: disk-utils/cfdisk.c:196 libfdisk/src/bsd.c:439 libfdisk/src/bsd.c:1031
#: libfdisk/src/dos.c:2606 libfdisk/src/gpt.c:3145 libfdisk/src/sgi.c:1164
#: libfdisk/src/sun.c:1136
msgid "Type"
msgstr "Tipo"

#: disk-utils/cfdisk.c:196
msgid "Change the partition type"
msgstr "Cambia el tipo de partición"

#: disk-utils/cfdisk.c:197
msgid "Help"
msgstr "Ayuda"

#: disk-utils/cfdisk.c:197
msgid "Print help screen"
msgstr "Imprime esta pantalla"

#: disk-utils/cfdisk.c:198
msgid "Sort"
msgstr "Ordena"

#: disk-utils/cfdisk.c:198
msgid "Fix partitions order"
msgstr "Corrige el orden de las particiones"

#: disk-utils/cfdisk.c:199
msgid "Write"
msgstr "Escribir"

#: disk-utils/cfdisk.c:199
msgid "Write partition table to disk (this might destroy data)"
msgstr "Escribe la tabla de particiones en el disco (puede destruirse información)"

#: disk-utils/cfdisk.c:200
msgid "Dump"
msgstr "Vuelca"

#: disk-utils/cfdisk.c:200
msgid "Dump partition table to sfdisk compatible script file"
msgstr "Vuelca la tabla de particiones a un fichero de script compatible con sfdisk"

#: disk-utils/cfdisk.c:645 disk-utils/fdisk.c:465
#, c-format
msgid "internal error: unsupported dialog type %d"
msgstr "error interno: tipo de diálogo no soportado %d"

#: disk-utils/cfdisk.c:1287
#, c-format
msgid "%s (mounted)"
msgstr "%s (montado)"

#: disk-utils/cfdisk.c:1307
msgid "Partition name:"
msgstr "Nombre de la partición:"

#: disk-utils/cfdisk.c:1314
msgid "Partition UUID:"
msgstr "UUID de la partición:"

#: disk-utils/cfdisk.c:1326
msgid "Partition type:"
msgstr "Tipo de partición:"

#: disk-utils/cfdisk.c:1333
msgid "Attributes:"
msgstr "Atributos:"

#: disk-utils/cfdisk.c:1357
msgid "Filesystem UUID:"
msgstr "UUID del sistema de ficheros:"

#: disk-utils/cfdisk.c:1364
msgid "Filesystem LABEL:"
msgstr "ETIQUETA del sistema de ficheros:"

#: disk-utils/cfdisk.c:1370
msgid "Filesystem:"
msgstr "Sistema de ficheros:"

#: disk-utils/cfdisk.c:1375
msgid "Mountpoint:"
msgstr "Punto de montaje:"

#: disk-utils/cfdisk.c:1719
#, c-format
msgid "Disk: %s"
msgstr "Disco: %s"

#: disk-utils/cfdisk.c:1721
#, c-format
msgid "Size: %s, %<PRIu64> bytes, %ju sectors"
msgstr "Tamaño: %s, %<PRIu64> bytes, %ju sectores"

#: disk-utils/cfdisk.c:1724
#, c-format
msgid "Label: %s, identifier: %s"
msgstr "Etiqueta: %s, identificador: %s"

#: disk-utils/cfdisk.c:1727
#, c-format
msgid "Label: %s"
msgstr "Etiqueta: %s"

#: disk-utils/cfdisk.c:1878
msgid "May be followed by M for MiB, G for GiB, T for TiB, or S for sectors."
msgstr "Puede estar seguido de M (MiB), G (GiB), T (TiB) o S (sectores)."

#: disk-utils/cfdisk.c:1884
msgid "Please, specify size."
msgstr "Por favor, especifique el tamaño."

#: disk-utils/cfdisk.c:1906
#, c-format
msgid "Minimum size is %<PRIu64> bytes."
msgstr "El tamaño mínimo es %<PRIu64> bytes."

#: disk-utils/cfdisk.c:1915
#, c-format
msgid "Maximum size is %<PRIu64> bytes."
msgstr "El tamaño máximo es %<PRIu64> bytes."

#: disk-utils/cfdisk.c:1922
msgid "Failed to parse size."
msgstr "No se entiende el tamaño."

#: disk-utils/cfdisk.c:1980
msgid "Select partition type"
msgstr "Seleccione el tipo de partición"

#: disk-utils/cfdisk.c:2030 disk-utils/cfdisk.c:2060
msgid "Enter script file name: "
msgstr "Introduzca el nombre del fichero: "

#: disk-utils/cfdisk.c:2031
msgid "The script file will be applied to in-memory partition table."
msgstr "El fichero de script se aplicará a la tabla de particiones que está en memoria."

#: disk-utils/cfdisk.c:2040 disk-utils/cfdisk.c:2082
#: disk-utils/fdisk-menu.c:481 disk-utils/fdisk-menu.c:525
#, c-format
msgid "Cannot open %s"
msgstr "No se puede abrir %s"

#: disk-utils/cfdisk.c:2042 disk-utils/fdisk-menu.c:483
#, c-format
msgid "Failed to parse script file %s"
msgstr "No se ha podido leer el fichero de transcripción %s"

#: disk-utils/cfdisk.c:2044 disk-utils/fdisk-menu.c:485
#, c-format
msgid "Failed to apply script %s"
msgstr "No se ha podido leer el fichero de transcripción %s"

#: disk-utils/cfdisk.c:2061
msgid "The current in-memory partition table will be dumped to the file."
msgstr "La tabla de particiones que está en memoria ahora mismo va a volcarse al fichero."

#: disk-utils/cfdisk.c:2069 disk-utils/fdisk-menu.c:513
msgid "Failed to allocate script handler"
msgstr "Fallo al asignar el manejador del script."

#: disk-utils/cfdisk.c:2075
msgid "Failed to read disk layout into script."
msgstr "No se ha podido leer la estructura del disco en el script."

#: disk-utils/cfdisk.c:2089
msgid "Disk layout successfully dumped."
msgstr "La estructura del disco se ha volcado bien."

#: disk-utils/cfdisk.c:2092 disk-utils/fdisk-menu.c:531
#, c-format
msgid "Failed to write script %s"
msgstr "No se ha podido leer el fichero de transcripción %s"

#: disk-utils/cfdisk.c:2128
msgid "Select label type"
msgstr "Selecciona el tipo de etiqueta"

#: disk-utils/cfdisk.c:2131 disk-utils/fdisk.c:1158 disk-utils/fdisk-menu.c:489
msgid "Device does not contain a recognized partition table."
msgstr "El dispositivo no contiene una tabla de particiones reconocida."

#: disk-utils/cfdisk.c:2139
msgid "Select a type to create a new label or press 'L' to load script file."
msgstr "Seleccione un tipo para crear una etiqueta o pulse 'L' para cargar el fichero de script."

#: disk-utils/cfdisk.c:2188
msgid "This is cfdisk, a curses-based disk partitioning program."
msgstr "cfdisk es un programa de particiones de disco basado en curses."

#: disk-utils/cfdisk.c:2189
msgid "It lets you create, delete, and modify partitions on a block device."
msgstr "Permite crear, suprimir y modificar particiones en dispositivo de bloques."

#: disk-utils/cfdisk.c:2191
msgid "Command      Meaning"
msgstr "Orden        Significado"

#: disk-utils/cfdisk.c:2192
msgid "-------      -------"
msgstr "-----        -----------"

#: disk-utils/cfdisk.c:2193
msgid "  b          Toggle bootable flag of the current partition"
msgstr "  b          Conmuta el indicador de iniciable de la partición actual"

#: disk-utils/cfdisk.c:2194
msgid "  d          Delete the current partition"
msgstr "  d          Suprime la partición actual"

#: disk-utils/cfdisk.c:2195
msgid "  h          Print this screen"
msgstr "  h          Imprime esta pantalla"

#: disk-utils/cfdisk.c:2196
msgid "  n          Create new partition from free space"
msgstr "  n          Crea una nueva partición a partir del espacio libre"

#: disk-utils/cfdisk.c:2197
msgid "  q          Quit program without writing partition table"
msgstr "  q          Sale del programa sin escribir la tabla de particiones"

#: disk-utils/cfdisk.c:2198
msgid "  s          Fix partitions order (only when in disarray)"
msgstr "  s          Corrige el orden de las particiones (solo cuando hay desajuste)"

#: disk-utils/cfdisk.c:2199
msgid "  t          Change the partition type"
msgstr "  t          Cambia el tipo de partición"

#: disk-utils/cfdisk.c:2200
msgid "  u          Dump disk layout to sfdisk compatible script file"
msgstr "  u          Vuelca la estructura del disco a un fichero de script compatible con sfdisk"

#: disk-utils/cfdisk.c:2201
msgid "  W          Write partition table to disk (you must enter uppercase W);"
msgstr "  W          Escribe la tabla de particiones en el disco (W debe teclearse en mayúsculas)."

#: disk-utils/cfdisk.c:2202
msgid "               since this might destroy data on the disk, you must either"
msgstr "               esta operación de escritura puede causar la destrucción de"

#: disk-utils/cfdisk.c:2203
msgid "               confirm or deny the write by entering 'yes' or 'no'"
msgstr ""
"               datos del disco, por lo que debe confirmarla o rechazarla\n"
"escribiendo 'sí' o 'no'"

#: disk-utils/cfdisk.c:2204
msgid "  x          Display/hide extra information about a partition"
msgstr "  x          Muestra/oculta información adicional sobre una partición"

#: disk-utils/cfdisk.c:2205
msgid "Up Arrow     Move cursor to the previous partition"
msgstr "Flecha arriba     Desplaza el cursor a la partición anterior"

#: disk-utils/cfdisk.c:2206
msgid "Down Arrow   Move cursor to the next partition"
msgstr "Flecha abajo      Desplaza el cursor a la partición siguiente"

#: disk-utils/cfdisk.c:2207
msgid "Left Arrow   Move cursor to the previous menu item"
msgstr "Flecha izquierda  Desplaza el cursor a la opción de menú anterior"

#: disk-utils/cfdisk.c:2208
msgid "Right Arrow  Move cursor to the next menu item"
msgstr "Flecha derecha    Desplaza el cursor a la opción de menú siguiente"

#: disk-utils/cfdisk.c:2210
msgid "Note: All of the commands can be entered with either upper or lower"
msgstr "Nota: todas las órdenes pueden escribirse en mayúsculas o minúsculas"

#: disk-utils/cfdisk.c:2211
msgid "case letters (except for Write)."
msgstr "(salvo W para operaciones de escritura)."

#: disk-utils/cfdisk.c:2213
msgid "Use lsblk(8) or partx(8) to see more details about the device."
msgstr "Utilice lsblk(8) o partx(8) para ver más detalles del dispositivo."

#: disk-utils/cfdisk.c:2223 disk-utils/cfdisk.c:2526
msgid "Press a key to continue."
msgstr "Pulse una tecla para continuar."

#: disk-utils/cfdisk.c:2309
msgid "Could not toggle the flag."
msgstr "Noo se ha podido cambiar la bandera."

#: disk-utils/cfdisk.c:2319
#, c-format
msgid "Could not delete partition %zu."
msgstr "No se pudo borrar la partición %zu."

#: disk-utils/cfdisk.c:2321 disk-utils/fdisk-menu.c:662
#, c-format
msgid "Partition %zu has been deleted."
msgstr "Se ha borrado la partición %zu."

#: disk-utils/cfdisk.c:2342
msgid "Partition size: "
msgstr "Tamaño de la partición: "

#: disk-utils/cfdisk.c:2383
#, c-format
msgid "Changed type of partition %zu."
msgstr "Se ha cambiado el tipo de partición %zu."

#: disk-utils/cfdisk.c:2385
#, c-format
msgid "The type of partition %zu is unchanged."
msgstr "El tipo de partición %zu no se cambia."

#: disk-utils/cfdisk.c:2406
msgid "New size: "
msgstr "Nuevo tamaño:"

#: disk-utils/cfdisk.c:2421
#, c-format
msgid "Partition %zu resized."
msgstr "Se ha cambiado el tamaño de la partición nº %zu."

#: disk-utils/cfdisk.c:2439 disk-utils/cfdisk.c:2555 disk-utils/fdisk.c:1140
#: disk-utils/fdisk-menu.c:592
msgid "Device is open in read-only mode."
msgstr "El dispositivo está abierto en modo de sólo lectura."

#: disk-utils/cfdisk.c:2444
msgid "Are you sure you want to write the partition table to disk? "
msgstr ""
"¿Está seguro de que desea escribir la tabla de particiones en el disco?\n"
"     (si o no): "

#: disk-utils/cfdisk.c:2446
msgid "Type \"yes\" or \"no\", or press ESC to leave this dialog."
msgstr "Teclee \"yes\" (sí) o \"no\" o pulse ESC para abandonar el diálogo."

# TRANSLATORS: Comprobar si está corregido el problema que impedía
#              introducir el 'sí' con tilde.
#: disk-utils/cfdisk.c:2451 login-utils/lslogins.c:218 sys-utils/lscpu.c:1602
#: sys-utils/lscpu.c:1612 sys-utils/lsmem.c:266
msgid "yes"
msgstr "si"

#: disk-utils/cfdisk.c:2452
msgid "Did not write partition table to disk."
msgstr "No se ha escrito la tabla de particiones en el disco."

#: disk-utils/cfdisk.c:2457
msgid "Failed to write disklabel."
msgstr "Error al escribir la etiqueta de disco."

#: disk-utils/cfdisk.c:2463 disk-utils/fdisk-menu.c:599
msgid "The partition table has been altered."
msgstr "Se ha modificado la tabla de particiones."

#: disk-utils/cfdisk.c:2486 disk-utils/cfdisk.c:2557
msgid "Note that partition table entries are not in disk order now."
msgstr "Obsérvese que las entradas de la tabla de particiones ahora no están en el orden del disco."

#: disk-utils/cfdisk.c:2523
#, c-format
msgid "Device already contains a %s signature; it will be removed by a write command."
msgstr "El dispositivo ya contiene una firma %s; se borrará mediante una orden de escritura."

#: disk-utils/cfdisk.c:2534
msgid "failed to create a new disklabel"
msgstr "error al crear una nueva etiqueta de disco"

#: disk-utils/cfdisk.c:2542
msgid "failed to read partitions"
msgstr "fallo al leer las particiones"

#: disk-utils/cfdisk.c:2641
#, c-format
msgid " %1$s [options] <disk>\n"
msgstr " %1$s [opciones] <disco>\n"

#: disk-utils/cfdisk.c:2644 disk-utils/fdisk.c:857 disk-utils/sfdisk.c:2005
msgid "Display or manipulate a disk partition table.\n"
msgstr "Muestra o manipula una tabla de particiones de disco.\n"

#: disk-utils/cfdisk.c:2648
#, c-format
msgid " -L, --color[=<when>]     colorize output (%s, %s or %s)\n"
msgstr " -L, --color[=<cuándo>]   colorea la salida (%s, %s o %s)\n"

#: disk-utils/cfdisk.c:2651
msgid " -z, --zero               start with zeroed partition table\n"
msgstr " -z, --zero               inicia tabla de particiones con ceros\n"

#: disk-utils/cfdisk.c:2653
#, c-format
msgid "     --lock[=<mode>]      use exclusive device lock (%s, %s or %s)\n"
msgstr "     --lock[=<modo>]      utiliza bloqueo de dispositivo exclusivo (%s, %s o %s)\n"

#: disk-utils/cfdisk.c:2694 disk-utils/fdisk.c:1016 disk-utils/sfdisk.c:2305
#: misc-utils/cal.c:436 sys-utils/dmesg.c:1437 text-utils/hexdump.c:114
msgid "unsupported color mode"
msgstr "modo de color no implementado"

#: disk-utils/cfdisk.c:2721 disk-utils/fdisk.c:951 disk-utils/sfdisk.c:231
msgid "failed to allocate libfdisk context"
msgstr "fallo al reservar contexto de libfdisk"

#: disk-utils/delpart.c:15
#, c-format
msgid " %s <disk device> <partition number>\n"
msgstr " %s <dispositivo de disco> <número de partición>\n"

#: disk-utils/delpart.c:19
msgid "Tell the kernel to forget about a specified partition.\n"
msgstr "Ordena al núcleo que se olvide de una partición especificada.\n"

#: disk-utils/delpart.c:62
msgid "failed to remove partition"
msgstr "fallo al borrar la partición"

#: disk-utils/fdformat.c:54
#, c-format
msgid "Formatting ... "
msgstr "Formateando... "

#: disk-utils/fdformat.c:69 disk-utils/fdformat.c:139
#, c-format
msgid "done\n"
msgstr "finalizado\n"

# Nota: Al parecer, en español no se pone espacio antes de ...
#: disk-utils/fdformat.c:81
#, c-format
msgid "Verifying ... "
msgstr "Verificando... "

#: disk-utils/fdformat.c:109
msgid "Read: "
msgstr "Leer: "

#: disk-utils/fdformat.c:111
#, c-format
msgid "Problem reading track/head %u/%u, expected %d, read %d\n"
msgstr "Problema de lectura en pista/cabeza %u/%u, se esperaba %d, se leyó %d\n"

#: disk-utils/fdformat.c:128
#, c-format
msgid ""
"bad data in track/head %u/%u\n"
"Continuing ... "
msgstr ""
"Datos incorrectos en pista/cabeza %u/%u\n"
"Continuando... "

#: disk-utils/fdformat.c:146 disk-utils/fsck.minix.c:183
#: disk-utils/swaplabel.c:123 misc-utils/wipefs.c:648 sys-utils/blkdiscard.c:86
#: sys-utils/tunelp.c:95
#, c-format
msgid " %s [options] <device>\n"
msgstr " %s [opciones] <dispositivo>\n"

#: disk-utils/fdformat.c:150
msgid "Do a low-level formatting of a floppy disk.\n"
msgstr "Aplica formato a bajo nivel a un disco flexible.\n"

#: disk-utils/fdformat.c:153
msgid " -f, --from <N>    start at the track N (default 0)\n"
msgstr " -f, --from <N>    comienza en la pista N (0 predeterminada)\n"

#: disk-utils/fdformat.c:154
msgid " -t, --to <N>      stop at the track N\n"
msgstr " -t, --to <N>      se detiene en la pista N\n"

#: disk-utils/fdformat.c:155
msgid ""
" -r, --repair <N>  try to repair tracks failed during\n"
"                     the verification (max N retries)\n"
msgstr ""
" -r, --repair <N>  intenta reparar las pistas que han fallado durante\n"
"                     la verificación (máx. N intentos)\n"

#: disk-utils/fdformat.c:157
msgid " -n, --no-verify   disable the verification after the format\n"
msgstr " -n, --no-verify   desactiva la verificación posterior al formato\n"

#: disk-utils/fdformat.c:195
msgid "invalid argument - from"
msgstr "argumento no válido - from"

#: disk-utils/fdformat.c:199
msgid "invalid argument - to"
msgstr "argumento no válido - to"

#: disk-utils/fdformat.c:202
msgid "invalid argument - repair"
msgstr "argumento no válido - repair"

#: disk-utils/fdformat.c:223 disk-utils/fsck.cramfs.c:151
#: disk-utils/mkfs.bfs.c:182 disk-utils/mkfs.cramfs.c:337
#: disk-utils/mkfs.cramfs.c:758 disk-utils/mkfs.cramfs.c:796
#: disk-utils/mkfs.minix.c:820 disk-utils/mkswap.c:246 disk-utils/partx.c:959
#: login-utils/last.c:693 login-utils/utmpdump.c:137 misc-utils/namei.c:135
#: misc-utils/rename.c:120 misc-utils/rename.c:182 sys-utils/blkdiscard.c:228
#: sys-utils/blkzone.c:142 sys-utils/dmesg.c:532 sys-utils/fallocate.c:201
#: sys-utils/fsfreeze.c:119 sys-utils/fstrim.c:75 sys-utils/nsenter.c:166
#: sys-utils/nsenter.c:170 sys-utils/swapon.c:522 sys-utils/switch_root.c:94
#: sys-utils/switch_root.c:137 term-utils/mesg.c:145
#, c-format
msgid "stat of %s failed"
msgstr "stat de %s ha fallado"

#: disk-utils/fdformat.c:226 disk-utils/partx.c:1018 misc-utils/lsblk.c:1447
#: sys-utils/blkdiscard.c:230 sys-utils/blkzone.c:144
#: sys-utils/mountpoint.c:107
#, c-format
msgid "%s: not a block device"
msgstr "%s: no es un dispositivo de bloques"

#: disk-utils/fdformat.c:231
msgid "could not determine current format type"
msgstr "no se puede determinar el tipo de formato actual"

#: disk-utils/fdformat.c:233
#, c-format
msgid "%s-sided, %d tracks, %d sec/track. Total capacity %d kB.\n"
msgstr "%s caras, %d pistas, %d sectores/pista. Capacidad total %d kB.\n"

#: disk-utils/fdformat.c:234
msgid "Double"
msgstr "Doble densidad"

#: disk-utils/fdformat.c:234
msgid "Single"
msgstr "Simple densidad"

#: disk-utils/fdformat.c:241
msgid "user defined start track exceeds the medium specific maximum"
msgstr "la pista de comienzo definida por el usuario sobrepasa el máximo específico del medio"

#: disk-utils/fdformat.c:243
msgid "user defined end track exceeds the medium specific maximum"
msgstr "la pista de fin definida por el usuario sobrepasa el máximo específico del medio"

#: disk-utils/fdformat.c:245
msgid "user defined start track exceeds the user defined end track"
msgstr "la pista de comienzo definida por el usuario sobrepasa la pista de fin definida por el usuario"

#: disk-utils/fdformat.c:253 misc-utils/logger.c:1045
msgid "close failed"
msgstr "fallo al cerrar"

#: disk-utils/fdisk.c:206
#, c-format
msgid "Select (default %c): "
msgstr "Seleccionar (valor predeterminado %c): "

#: disk-utils/fdisk.c:211
#, c-format
msgid "Using default response %c."
msgstr "Se está utilizando la respuesta predeterminada %c."

#: disk-utils/fdisk.c:224 disk-utils/fdisk.c:298 disk-utils/fdisk.c:375
#: libfdisk/src/dos.c:1382 libfdisk/src/gpt.c:2472
msgid "Value out of range."
msgstr "El valor está fuera del rango."

#: disk-utils/fdisk.c:253
#, c-format
msgid "%s (%s, default %c): "
msgstr "%s (%s, valor predeterminado %c): "

#: disk-utils/fdisk.c:256 disk-utils/fdisk.c:323
#, c-format
msgid "%s (%s, default %<PRIu64>): "
msgstr "%s (%s, valor predeterminado %<PRIu64>): "

#: disk-utils/fdisk.c:261
#, c-format
msgid "%s (%c-%c, default %c): "
msgstr "%s (%c-%c, valor predeterminado %c): "

#: disk-utils/fdisk.c:265 disk-utils/fdisk.c:327
#, c-format
msgid "%s (%<PRIu64>-%<PRIu64>, default %<PRIu64>): "
msgstr "%s (%<PRIu64>-%<PRIu64>, valor predeterminado %<PRIu64>): "

#: disk-utils/fdisk.c:268
#, c-format
msgid "%s (%c-%c): "
msgstr "%s (%c-%c): "

#: disk-utils/fdisk.c:271 disk-utils/fdisk.c:330
#, c-format
msgid "%s (%<PRIu64>-%<PRIu64>): "
msgstr "%s (%<PRIu64>-%<PRIu64>): "

#: disk-utils/fdisk.c:442 disk-utils/sfdisk.c:205
msgid " [Y]es/[N]o: "
msgstr " [S]í/[N]o: "

#: disk-utils/fdisk.c:486
msgid "Hex code or alias (type L to list all): "
msgstr "Código hexadecimal o alias (escriba L para ver todos): "

#: disk-utils/fdisk.c:487
msgid "Partition type or alias (type L to list all): "
msgstr "Tipo de partición o alias (teclee L para ver todos): "

#: disk-utils/fdisk.c:490
msgid "Hex code (type L to list all codes): "
msgstr "Código hexadecimal (escriba L para ver todos los códigos): "

#: disk-utils/fdisk.c:491
msgid "Partition type (type L to list all types): "
msgstr "Tipo de partición (teclee L para ver todos los tipos): "

#: disk-utils/fdisk.c:510
#, c-format
msgid "Failed to parse '%s' partition type."
msgstr "fallo al analizar el tipo de la partición '%s'"

#: disk-utils/fdisk.c:601
msgid ""
"\n"
"Aliases:\n"
msgstr ""

#: disk-utils/fdisk.c:627
msgid "DOS Compatibility flag is set (DEPRECATED!)"
msgstr "El indicador de compatibilidad con DOS está establecido (¡OBSOLETO!)"

#: disk-utils/fdisk.c:628
msgid "DOS Compatibility flag is not set"
msgstr "El indicador de compatibilidad con DOS no está establecido"

#: disk-utils/fdisk.c:650 disk-utils/fdisk.c:688
#, c-format
msgid "Partition %zu does not exist yet!"
msgstr "¡La partición %zu todavía no existe!"

#: disk-utils/fdisk.c:655 disk-utils/fdisk.c:666 libfdisk/src/ask.c:1028
msgid "Unknown"
msgstr "Desconocido"

#: disk-utils/fdisk.c:665
#, c-format
msgid "Changed type of partition '%s' to '%s'."
msgstr "Se ha cambiado el tipo de la partición '%s' a '%s'."

#: disk-utils/fdisk.c:669
#, c-format
msgid "Type of partition %zu is unchanged: %s."
msgstr "El tipo de la partición %zu no se cambia: %s."

#: disk-utils/fdisk.c:765
#, c-format
msgid ""
"\n"
"%s: offset = %<PRIu64>, size = %zu bytes."
msgstr ""
"\n"
"%s: desplazamiento = %<PRIu64>, tamaño = %zu bytes."

#: disk-utils/fdisk.c:771
msgid "cannot seek"
msgstr "no se puede efectuar `seek'"

#: disk-utils/fdisk.c:776
msgid "cannot read"
msgstr "no se puede leer"

#: disk-utils/fdisk.c:789 libfdisk/src/bsd.c:258 libfdisk/src/dos.c:968
#: libfdisk/src/gpt.c:2400
msgid "First sector"
msgstr "Primer sector"

#: disk-utils/fdisk.c:816
#, c-format
msgid "BLKGETSIZE ioctl failed on %s"
msgstr "El ioctl BLKGETSIZE ha fallado en %s"

#: disk-utils/fdisk.c:834
#, c-format
msgid "The device contains '%s' signature and it will be removed by a write command. See fdisk(8) man page and --wipe option for more details."
msgstr "El dispositivo contiene firma '%s' y se borrará mediante una orden de escritura. Véase la página de manual de fdisk(8) y la opción --wipe para más información."

#: disk-utils/fdisk.c:839
#, c-format
msgid "The device contains '%s' signature and it may remain on the device. It is recommended to wipe the device with wipefs(8) or fdisk --wipe, in order to avoid possible collisions."
msgstr "El dispositivo contiene firma '%s' y podría permanecer en el dispositivo. Se recomienda encarecidamente limpiar el dispositivo mediante wipefs(8) o fdisk --wipe, a fin de evitar posibles colisiones."

#: disk-utils/fdisk.c:852
#, c-format
msgid ""
" %1$s [options] <disk>         change partition table\n"
" %1$s [options] -l [<disk>...] list partition table(s)\n"
msgstr ""
" %1$s [opciones] <disco>         cambia tabla de particiones\n"
" %1$s [opciones] -l [<disco>...] muestra tabla(s) de particiones\n"

#: disk-utils/fdisk.c:860
msgid " -b, --sector-size <size>      physical and logical sector size\n"
msgstr " -b, --sector-size <tamaño>    tamaño de sector físico y lógico\n"

#: disk-utils/fdisk.c:861
msgid " -B, --protect-boot            don't erase bootbits when creating a new label\n"
msgstr " -B, --protect-boot            no borra los bits de arranque al crear una nueva etiqueta\n"

#: disk-utils/fdisk.c:862
msgid " -c, --compatibility[=<mode>]  mode is 'dos' or 'nondos' (default)\n"
msgstr " -c, --compatibility[=<modo>]  modo 'dos' o 'nondos' (predeterminado)\n"

#: disk-utils/fdisk.c:864
#, c-format
msgid " -L, --color[=<when>]          colorize output (%s, %s or %s)\n"
msgstr " -L, --color[=<cuándo>]        colorea la salida (%s, %s o %s)\n"

#: disk-utils/fdisk.c:867
msgid " -l, --list                    display partitions and exit\n"
msgstr " -l, --list                    muestra las particiones y sale\n"

#: disk-utils/fdisk.c:868
msgid " -x, --list-details            like --list but with more details\n"
msgstr " -x, --list-details            como --list pero con más detalles\n"

#: disk-utils/fdisk.c:870
msgid " -n, --noauto-pt               don't create default partition table on empty devices\n"
msgstr " -n, --noauto-pt               no crea tabla de particiones predefinida en dispositivos vacíos\n"

#: disk-utils/fdisk.c:871
msgid " -o, --output <list>           output columns\n"
msgstr " -o, --output <lista>          columnas que mostrar\n"

#: disk-utils/fdisk.c:872
msgid " -t, --type <type>             recognize specified partition table type only\n"
msgstr " -t, --type <tipo>             reconoce solamente el tipo de tabla de particiones especificado\n"

#: disk-utils/fdisk.c:873
msgid " -u, --units[=<unit>]          display units: 'cylinders' or 'sectors' (default)\n"
msgstr " -u, --units[=<unidad>]        muestra las unidades: 'cylinders' (cilindros) o 'sectors' (sectores) (predeterminada)\n"

#: disk-utils/fdisk.c:874
msgid " -s, --getsz                   display device size in 512-byte sectors [DEPRECATED]\n"
msgstr " -s, --getsz                   muestra el tamaño del dispositivo en sectores de 512 bytes [EN DESUSO]\n"

#: disk-utils/fdisk.c:875
msgid "     --bytes                   print SIZE in bytes rather than in human readable format\n"
msgstr ""
"     --bytes                   muestra el TAMAÑO en bytes en lugar de hacerlo\n"
"                               en formato legible para humanos\n"

#: disk-utils/fdisk.c:877
#, c-format
msgid "     --lock[=<mode>]           use exclusive device lock (%s, %s or %s)\n"
msgstr "     --lock[=<modo>]           utiliza bloqueo de dispositivo exclusivo (%s, %s o %s)\n"

#: disk-utils/fdisk.c:879
#, c-format
msgid " -w, --wipe <mode>             wipe signatures (%s, %s or %s)\n"
msgstr " -w, --wipe <modo>             borra las firmas (%s, %s o %s)\n"

#: disk-utils/fdisk.c:881 disk-utils/sfdisk.c:2059
#, c-format
msgid " -W, --wipe-partitions <mode>  wipe signatures from new partitions (%s, %s or %s)\n"
msgstr " -W, --wipe-partitions <modo>  borra las firmas de las particiones nuevas (%s, %s o %s)\n"

#: disk-utils/fdisk.c:884
msgid " -C, --cylinders <number>      specify the number of cylinders\n"
msgstr " -C, --cylinders <número>      establece el número de cilindros\n"

#: disk-utils/fdisk.c:885
msgid " -H, --heads <number>          specify the number of heads\n"
msgstr " -H, --heads <número>          establece el número de cabezas\n"

#: disk-utils/fdisk.c:886
msgid " -S, --sectors <number>        specify the number of sectors per track\n"
msgstr " -S, --sectors <número>        establece el número de sectores por pista\n"

#: disk-utils/fdisk.c:961 disk-utils/fdisk.c:963 disk-utils/partx.c:882
msgid "invalid sector size argument"
msgstr "Argumento del tamaño de sector no válido"

#: disk-utils/fdisk.c:973
msgid "invalid cylinders argument"
msgstr "Valor de cilindros no válido"

#: disk-utils/fdisk.c:985
msgid "not found DOS label driver"
msgstr "no se ha encontrado controlador con etiqueta DOS"

#: disk-utils/fdisk.c:991
#, c-format
msgid "unknown compatibility mode '%s'"
msgstr "modo de compatibilidad desconocido '%s'"

#: disk-utils/fdisk.c:998
msgid "invalid heads argument"
msgstr "valor de cabezas no válido"

#: disk-utils/fdisk.c:1004
msgid "invalid sectors argument"
msgstr "valor de sectores no válido"

#: disk-utils/fdisk.c:1036
#, c-format
msgid "unsupported disklabel: %s"
msgstr "etiqueta de disco no soportada: %s"

#: disk-utils/fdisk.c:1044
msgid "unsupported unit"
msgstr "unidad no admitida"

#: disk-utils/fdisk.c:1052 disk-utils/fdisk.c:1057 disk-utils/sfdisk.c:2266
#: disk-utils/sfdisk.c:2271
msgid "unsupported wipe mode"
msgstr "modo de borrado no implementado"

#: disk-utils/fdisk.c:1078
msgid "The device properties (sector size and geometry) should be used with one specified device only."
msgstr "Las propiedades del dispositivo (tamaño de sector y geometría) deben utilizarse con un solo dispositivo especificado."

#: disk-utils/fdisk.c:1109 disk-utils/fdisk.c:1124 disk-utils/fsck.cramfs.c:696
#: disk-utils/mkfs.bfs.c:192 disk-utils/mkfs.cramfs.c:786
#: disk-utils/partx.c:975 disk-utils/raw.c:136 disk-utils/raw.c:149
#: disk-utils/raw.c:161 disk-utils/raw.c:202 misc-utils/cal.c:534
#: misc-utils/findfs.c:58 misc-utils/look.c:149 misc-utils/whereis.c:577
#: misc-utils/whereis.c:588 misc-utils/whereis.c:599 misc-utils/whereis.c:641
#: schedutils/chrt.c:513 schedutils/ionice.c:262 schedutils/taskset.c:188
#: sys-utils/chcpu.c:355 sys-utils/chmem.c:422 sys-utils/dmesg.c:1505
#: sys-utils/ipcmk.c:138 sys-utils/ldattach.c:320 sys-utils/losetup.c:913
#: sys-utils/lscpu.c:2426 sys-utils/lsmem.c:643 sys-utils/mount.c:824
#: sys-utils/mount.c:832 sys-utils/mount.c:879 sys-utils/mount.c:892
#: sys-utils/mount.c:964 sys-utils/mountpoint.c:189 sys-utils/pivot_root.c:71
#: sys-utils/swapoff.c:258 sys-utils/swapon.c:992 sys-utils/switch_root.c:249
#: sys-utils/umount.c:598 term-utils/setterm.c:1197 text-utils/col.c:233
#: text-utils/more.c:2058
msgid "bad usage"
msgstr "uso incorrecto"

#: disk-utils/fdisk.c:1130
#, c-format
msgid "Welcome to fdisk (%s)."
msgstr "Bienvenido a fdisk (%s)."

#: disk-utils/fdisk.c:1132 disk-utils/sfdisk.c:1771
msgid ""
"Changes will remain in memory only, until you decide to write them.\n"
"Be careful before using the write command.\n"
msgstr ""
"Los cambios solo permanecerán en la memoria, hasta que decida escribirlos.\n"
"Tenga cuidado antes de utilizar la orden de escritura.\n"

#: disk-utils/fdisk.c:1164
msgid "A hybrid GPT was detected. You have to sync the hybrid MBR manually (expert command 'M')."
msgstr "Se ha detectado una GPT híbrida. Debe sincronizar el MBR híbrido manualmente (orden de experto 'M')."

#: disk-utils/fdisk-list.c:43
#, c-format
msgid "Disklabel type: %s"
msgstr "Tipo de etiqueta de disco: %s"

#: disk-utils/fdisk-list.c:47
#, c-format
msgid "Disk identifier: %s"
msgstr "Identificador del disco: %s"

#: disk-utils/fdisk-list.c:61
#, c-format
msgid "Disk %s: %s, %ju bytes, %ju sectors"
msgstr "Disco %s: %s, %ju bytes, %ju sectores"

#: disk-utils/fdisk-list.c:68
#, c-format
msgid "Disk model: %s"
msgstr "Modelo de disco: %s"

#: disk-utils/fdisk-list.c:71
#, c-format
msgid "Geometry: %d heads, %llu sectors/track, %llu cylinders"
msgstr "Geometría: %d cabezas, %llu sectores/pista, %llu cilindros"

#: disk-utils/fdisk-list.c:76 disk-utils/fdisk-list.c:299
#, c-format
msgid "Units: %s of %d * %ld = %ld bytes"
msgstr "Unidades: %s de %d * %ld = %ld bytes"

#: disk-utils/fdisk-list.c:82 disk-utils/fdisk-list.c:305
#, c-format
msgid "Sector size (logical/physical): %lu bytes / %lu bytes"
msgstr "Tamaño de sector (lógico/físico): %lu bytes / %lu bytes"

#: disk-utils/fdisk-list.c:85
#, c-format
msgid "I/O size (minimum/optimal): %lu bytes / %lu bytes"
msgstr "Tamaño de E/S (mínimo/óptimo): %lu bytes / %lu bytes"

#: disk-utils/fdisk-list.c:89
#, c-format
msgid "Alignment offset: %lu bytes"
msgstr "Desplazamiento de alineación: %lu bytes"

#: disk-utils/fdisk-list.c:120 disk-utils/fdisk-list.c:241
#: disk-utils/fsck.c:1253
msgid "failed to allocate iterator"
msgstr "fallo al reservar iterador"

#: disk-utils/fdisk-list.c:126 disk-utils/fdisk-list.c:247
#: disk-utils/partx.c:669 login-utils/lslogins.c:1066 misc-utils/fincore.c:356
#: misc-utils/findmnt.c:1634 misc-utils/lsblk.c:2083 misc-utils/lslocks.c:456
#: misc-utils/uuidparse.c:252 misc-utils/wipefs.c:157 sys-utils/losetup.c:325
#: sys-utils/lscpu.c:1674 sys-utils/lscpu.c:1902 sys-utils/lscpu.c:2034
#: sys-utils/lsipc.c:351 sys-utils/prlimit.c:297 sys-utils/rfkill.c:459
#: sys-utils/swapon.c:283 sys-utils/wdctl.c:299 sys-utils/zramctl.c:496
#: text-utils/column.c:209
msgid "failed to allocate output table"
msgstr "no se ha podido reservar la tabla de salida"

#: disk-utils/fdisk-list.c:167 disk-utils/fdisk-list.c:271
#: disk-utils/partx.c:583 login-utils/lslogins.c:1124 misc-utils/fincore.c:123
#: misc-utils/findmnt.c:697 misc-utils/findmnt.c:715 misc-utils/lsblk.c:1078
#: misc-utils/lslocks.c:393 misc-utils/uuidparse.c:154 misc-utils/wipefs.c:224
#: sys-utils/losetup.c:348 sys-utils/losetup.c:377 sys-utils/lscpu.c:1707
#: sys-utils/lscpu.c:1930 sys-utils/lscpu.c:1958 sys-utils/lsipc.c:480
#: sys-utils/lsipc.c:555 sys-utils/lsipc.c:657 sys-utils/lsipc.c:749
#: sys-utils/lsipc.c:910 sys-utils/prlimit.c:229 sys-utils/rfkill.c:376
#: sys-utils/swapon.c:179 sys-utils/wdctl.c:249 sys-utils/zramctl.c:414
#: text-utils/column.c:453 text-utils/column.c:474
msgid "failed to allocate output line"
msgstr "no se ha podido reservar la línea de salida"

#: disk-utils/fdisk-list.c:177 disk-utils/fdisk-list.c:278
#: disk-utils/partx.c:646 login-utils/lslogins.c:1225 misc-utils/fincore.c:159
#: misc-utils/findmnt.c:701 misc-utils/findmnt.c:720 misc-utils/lsblk.c:1119
#: misc-utils/lslocks.c:443 misc-utils/uuidparse.c:239 misc-utils/wipefs.c:264
#: sys-utils/losetup.c:305 sys-utils/lscpu.c:1773 sys-utils/lscpu.c:1938
#: sys-utils/lscpu.c:1962 sys-utils/lscpu.c:1970 sys-utils/lsipc.c:514
#: sys-utils/lsipc.c:639 sys-utils/prlimit.c:261 sys-utils/rfkill.c:404
#: sys-utils/swapon.c:227 sys-utils/wdctl.c:277 sys-utils/zramctl.c:481
#: text-utils/column.c:460
msgid "failed to add output data"
msgstr "no se han podido añadir los datos de salida"

#: disk-utils/fdisk-list.c:197
#, c-format
msgid "Partition %zu does not start on physical sector boundary."
msgstr "La partición %zu no empieza en el límite del sector físico."

#: disk-utils/fdisk-list.c:205
#, c-format
msgid "Filesystem/RAID signature on partition %zu will be wiped."
msgstr "Se va a borrar la firma del sistema de ficheros/RAID en la partición %zu."

#: disk-utils/fdisk-list.c:214
msgid "Partition table entries are not in disk order."
msgstr "Las entradas de la tabla de particiones no están en el orden del disco."

#: disk-utils/fdisk-list.c:233 libfdisk/src/bsd.c:1026 libfdisk/src/dos.c:2600
#: libfdisk/src/gpt.c:3141 libfdisk/src/sgi.c:1158 libfdisk/src/sun.c:1130
msgid "Start"
msgstr "Comienzo"

#: disk-utils/fdisk-list.c:233 libfdisk/src/bsd.c:1027 libfdisk/src/dos.c:2601
#: libfdisk/src/gpt.c:3142 libfdisk/src/sgi.c:1159 libfdisk/src/sun.c:1131
msgid "End"
msgstr "Final"

#: disk-utils/fdisk-list.c:233 libfdisk/src/bsd.c:1028 libfdisk/src/dos.c:2602
#: libfdisk/src/gpt.c:3143 libfdisk/src/sgi.c:1160 libfdisk/src/sun.c:1132
msgid "Sectors"
msgstr "Sectores"

#: disk-utils/fdisk-list.c:233 libfdisk/src/bsd.c:1030 libfdisk/src/dos.c:2604
#: libfdisk/src/gpt.c:3144 libfdisk/src/sgi.c:1162 libfdisk/src/sun.c:1134
msgid "Size"
msgstr "Tamaño"

#: disk-utils/fdisk-list.c:293
#, c-format
msgid "Unpartitioned space %s: %s, %ju bytes, %ju sectors"
msgstr "Espacio no particionado %s: %s, %ju bytes, %ju sectores"

#: disk-utils/fdisk-list.c:483
#, c-format
msgid "%s unknown column: %s"
msgstr "%s columna desconocida: %s"

#: disk-utils/fdisk-menu.c:96
msgid "Generic"
msgstr "General"

#: disk-utils/fdisk-menu.c:97
msgid "delete a partition"
msgstr "borra una partición"

#: disk-utils/fdisk-menu.c:98
msgid "list free unpartitioned space"
msgstr "lista el espacio libre no particionado"

#: disk-utils/fdisk-menu.c:99
msgid "list known partition types"
msgstr "lista los tipos de particiones conocidos"

#: disk-utils/fdisk-menu.c:100
msgid "add a new partition"
msgstr "añade una nueva partición"

#: disk-utils/fdisk-menu.c:101
msgid "print the partition table"
msgstr "muestra la tabla de particiones"

#: disk-utils/fdisk-menu.c:102
msgid "change a partition type"
msgstr "cambia el tipo de una partición"

#: disk-utils/fdisk-menu.c:103
msgid "verify the partition table"
msgstr "verifica la tabla de particiones"

#: disk-utils/fdisk-menu.c:104
msgid "print information about a partition"
msgstr "imprime información sobre una partición"

#: disk-utils/fdisk-menu.c:106
msgid "print the raw data of the first sector from the device"
msgstr "muestra los datos en bruto del primer sector del dispositivo"

#: disk-utils/fdisk-menu.c:107
msgid "print the raw data of the disklabel from the device"
msgstr "imprime los datos en bruto de la etiqueta de disco del dispositivo"

#: disk-utils/fdisk-menu.c:108
msgid "fix partitions order"
msgstr "corrige el orden de las particiones"

#: disk-utils/fdisk-menu.c:110
msgid "Misc"
msgstr "Miscelánea"

#: disk-utils/fdisk-menu.c:111
msgid "print this menu"
msgstr "muestra este menú"

#: disk-utils/fdisk-menu.c:112
msgid "change display/entry units"
msgstr "cambia las unidades de visualización/entrada"

#: disk-utils/fdisk-menu.c:113
msgid "extra functionality (experts only)"
msgstr "funciones adicionales (sólo para usuarios avanzados)"

#: disk-utils/fdisk-menu.c:115
msgid "Script"
msgstr "Script"

#: disk-utils/fdisk-menu.c:116
msgid "load disk layout from sfdisk script file"
msgstr "carga la estructura del disco de un fichero de script sfdisk"

#: disk-utils/fdisk-menu.c:117
msgid "dump disk layout to sfdisk script file"
msgstr "vuelca la estructura del disco a un fichero de script sfdisk"

#: disk-utils/fdisk-menu.c:119
msgid "Save & Exit"
msgstr "Guardar y Salir"

#: disk-utils/fdisk-menu.c:120
msgid "write table to disk and exit"
msgstr "escribe la tabla en el disco y sale"

#: disk-utils/fdisk-menu.c:121
msgid "write table to disk"
msgstr "se ha escrito la tabla en el disco"

#: disk-utils/fdisk-menu.c:122
msgid "quit without saving changes"
msgstr "sale sin guardar los cambios"

#: disk-utils/fdisk-menu.c:123
msgid "return to main menu"
msgstr "vuelve al menú principal"

#: disk-utils/fdisk-menu.c:125
msgid "return from BSD to DOS"
msgstr "vuelve de BSD a DOS"

#: disk-utils/fdisk-menu.c:127 disk-utils/fdisk-menu.c:226
msgid "return from protective/hybrid MBR to GPT"
msgstr "regresa del sector de arranque principal (MBR) de protección o híbrido a GPT"

#: disk-utils/fdisk-menu.c:138
msgid "Create a new label"
msgstr "Crea una nueva etiqueta"

#: disk-utils/fdisk-menu.c:139
msgid "create a new empty GPT partition table"
msgstr "crea una nueva tabla de particiones GPT vacía"

#: disk-utils/fdisk-menu.c:140
msgid "create a new empty SGI (IRIX) partition table"
msgstr "crea una nueva tabla de particiones SGI (IRIX) vacía"

#: disk-utils/fdisk-menu.c:141
msgid "create a new empty DOS partition table"
msgstr "crea una nueva tabla de particiones DOS vacía"

#: disk-utils/fdisk-menu.c:142
msgid "create a new empty Sun partition table"
msgstr "crea una nueva tabla de particiones Sun vacía"

#: disk-utils/fdisk-menu.c:146
msgid "create an IRIX (SGI) partition table"
msgstr "crea una tabla de particiones IRIX (SGI)"

#: disk-utils/fdisk-menu.c:155
msgid "Geometry (for the current label)"
msgstr "Geometría (para la etiqueta actual)"

#: disk-utils/fdisk-menu.c:156
msgid "change number of cylinders"
msgstr "cambia el número de cilindros"

#: disk-utils/fdisk-menu.c:157
msgid "change number of heads"
msgstr "cambia el número de cabezas"

#: disk-utils/fdisk-menu.c:158
msgid "change number of sectors/track"
msgstr "cambia el número de sectores por pista"

#: disk-utils/fdisk-menu.c:167 include/pt-mbr-partnames.h:98
msgid "GPT"
msgstr "GPT"

#: disk-utils/fdisk-menu.c:168
msgid "change disk GUID"
msgstr "cambia el GUID del disco"

#: disk-utils/fdisk-menu.c:169
msgid "change partition name"
msgstr "cambia el nombre de la partición"

#: disk-utils/fdisk-menu.c:170
msgid "change partition UUID"
msgstr "cambia el UUID de la partición"

#: disk-utils/fdisk-menu.c:171
msgid "change table length"
msgstr "cambia la longitud de la tabla"

#: disk-utils/fdisk-menu.c:172
msgid "enter protective/hybrid MBR"
msgstr "entra en el sector de arranca principal (MBR) de protección o híbrido"

#: disk-utils/fdisk-menu.c:175
msgid "toggle the legacy BIOS bootable flag"
msgstr "conmuta el indicador de iniciable de legacy BIOS"

#: disk-utils/fdisk-menu.c:176
msgid "toggle the no block IO protocol flag"
msgstr "conmuta el indicador de protocolo de E/S sin bloques"

#: disk-utils/fdisk-menu.c:177
msgid "toggle the required partition flag"
msgstr "conmuta el indicador de partición necesaria"

#: disk-utils/fdisk-menu.c:178
msgid "toggle the GUID specific bits"
msgstr "conmuta los bits específicos de GUID"

#: disk-utils/fdisk-menu.c:188
msgid "Sun"
msgstr "Sun"

#: disk-utils/fdisk-menu.c:189
msgid "toggle the read-only flag"
msgstr "conmuta el indicador de sólo lectura"

#: disk-utils/fdisk-menu.c:190
msgid "toggle the mountable flag"
msgstr "conmuta el indicador de montable"

#: disk-utils/fdisk-menu.c:192
msgid "change number of alternate cylinders"
msgstr "cambia el número de cilindros alternativos"

#: disk-utils/fdisk-menu.c:193
msgid "change number of extra sectors per cylinder"
msgstr "cambia el número de sectores adicionales por cilindro"

#: disk-utils/fdisk-menu.c:194
msgid "change interleave factor"
msgstr "cambia el factor de interleave"

#: disk-utils/fdisk-menu.c:195
msgid "change rotation speed (rpm)"
msgstr "cambia la velocidad de rotación (r.p.m.)"

#: disk-utils/fdisk-menu.c:196
msgid "change number of physical cylinders"
msgstr "cambia el número de cilindros físicos"

#: disk-utils/fdisk-menu.c:205
msgid "SGI"
msgstr "SGI"

#: disk-utils/fdisk-menu.c:206
msgid "select bootable partition"
msgstr "selecciona partición iniciable"

#: disk-utils/fdisk-menu.c:207
msgid "edit bootfile entry"
msgstr "modifica entrada de fichero de inicio"

#: disk-utils/fdisk-menu.c:208
msgid "select sgi swap partition"
msgstr "selecciona partición de intercambio sgi"

#: disk-utils/fdisk-menu.c:209
msgid "create SGI info"
msgstr "crea información SGI"

#: disk-utils/fdisk-menu.c:218
msgid "DOS (MBR)"
msgstr "DOS (MBR)"

#: disk-utils/fdisk-menu.c:219
msgid "toggle a bootable flag"
msgstr "conmuta el indicador de iniciable"

#: disk-utils/fdisk-menu.c:220
msgid "edit nested BSD disklabel"
msgstr "modifica la etiqueta de disco BSD anidada"

#: disk-utils/fdisk-menu.c:221
msgid "toggle the dos compatibility flag"
msgstr "conmuta el indicador de compatibilidad con DOS"

#: disk-utils/fdisk-menu.c:223
msgid "move beginning of data in a partition"
msgstr "mueve el principio de los datos de una partición"

#: disk-utils/fdisk-menu.c:224
msgid "change the disk identifier"
msgstr "cambia el identificador de disco"

#: disk-utils/fdisk-menu.c:236
msgid "BSD"
msgstr "BSD"

#: disk-utils/fdisk-menu.c:237
msgid "edit drive data"
msgstr "modifica los datos de la unidad"

#: disk-utils/fdisk-menu.c:238
msgid "install bootstrap"
msgstr "instala secuencia de inicio"

#: disk-utils/fdisk-menu.c:239
msgid "show complete disklabel"
msgstr "muestra la etiqueta del disco completa"

#: disk-utils/fdisk-menu.c:240
msgid "link BSD partition to non-BSD partition"
msgstr "enlaza la partición BSD con una partición no BSD"

#: disk-utils/fdisk-menu.c:372
#, c-format
msgid ""
"\n"
"Help (expert commands):\n"
msgstr ""
"\n"
"Ayuda (operaciones de experto):\n"

#: disk-utils/fdisk-menu.c:374 disk-utils/sfdisk.c:1435
#, c-format
msgid ""
"\n"
"Help:\n"
msgstr ""
"\n"
"Ayuda:\n"

#: disk-utils/fdisk-menu.c:394
#, c-format
msgid "You're editing nested '%s' partition table, primary partition table is '%s'."
msgstr "Está editando la tabla de particiones '%s' anidadas; la tabla de la partición primaria es '%s'."

#: disk-utils/fdisk-menu.c:424
msgid "Expert command (m for help): "
msgstr "Orden avanzada (m para obtener ayuda): "

#: disk-utils/fdisk-menu.c:426
msgid "Command (m for help): "
msgstr "Orden (m para obtener ayuda): "

#: disk-utils/fdisk-menu.c:436
msgid ""
"\n"
"All unwritten changes will be lost, do you really want to quit? "
msgstr ""
"\n"
"Todos los cambios que no se hayan escrito se perderán. ¿Seguro que desea salir? "

#: disk-utils/fdisk-menu.c:449
#, c-format
msgid "%c: unknown command"
msgstr "%c: orden desconocida"

#: disk-utils/fdisk-menu.c:474 disk-utils/fdisk-menu.c:507
msgid "Enter script file name"
msgstr "Introduzca el nombre del fichero de script"

#: disk-utils/fdisk-menu.c:486
msgid "Resetting fdisk!"
msgstr "¡Reiniciando fdisk!"

#: disk-utils/fdisk-menu.c:493
msgid "Script successfully applied."
msgstr "Script aplicado correctamente."

#: disk-utils/fdisk-menu.c:519
msgid "Failed to transform disk layout into script"
msgstr "No se ha podido transformar la estructura del disco en el script."

#: disk-utils/fdisk-menu.c:533
msgid "Script successfully saved."
msgstr "Script guardado correctamente."

#: disk-utils/fdisk-menu.c:556 disk-utils/sfdisk.c:1661
#, c-format
msgid "Partition #%zu contains a %s signature."
msgstr "Partición #%zu: contiene un %s en la firma."

#: disk-utils/fdisk-menu.c:559 disk-utils/sfdisk.c:1664
msgid "Do you want to remove the signature?"
msgstr "¿Desea eliminar la firma?"

#: disk-utils/fdisk-menu.c:564 disk-utils/sfdisk.c:1669
msgid "The signature will be removed by a write command."
msgstr "La firma se borrará mediante una orden de escritura."

#: disk-utils/fdisk-menu.c:597
msgid "failed to write disklabel"
msgstr "fallo al escribir la etiqueta de disco"

#: disk-utils/fdisk-menu.c:640
msgid "Failed to fix partitions order."
msgstr "Fallo al corregir el orden de las particiones"

#: disk-utils/fdisk-menu.c:642
msgid "Partitions order fixed."
msgstr "Se ha corregido el orden de las particiones."

#: disk-utils/fdisk-menu.c:660
#, c-format
msgid "Could not delete partition %zu"
msgstr "No se pudo borrar la partición %zu"

#: disk-utils/fdisk-menu.c:689
msgid "Changing display/entry units to cylinders (DEPRECATED!)."
msgstr "Se cambian las unidades de visualización/entrada a cilindros (¡OBSOLETO!)."

#: disk-utils/fdisk-menu.c:691
msgid "Changing display/entry units to sectors."
msgstr "Se cambian las unidades de visualización/entrada a sectores."

#: disk-utils/fdisk-menu.c:701 disk-utils/fdisk-menu.c:872
msgid "Leaving nested disklabel."
msgstr "Dejando la etiqueta de disco anidada."

#: disk-utils/fdisk-menu.c:738
msgid "New maximum entries"
msgstr "Nuevo valor de entradas máximas"

#: disk-utils/fdisk-menu.c:749
msgid "Entering protective/hybrid MBR disklabel."
msgstr "Entrando el la etiqueta de disco del sector de arranque principal (MBR) de protección o híbrido."

#: disk-utils/fdisk-menu.c:765
msgid "New UUID (in 8-4-4-4-12 format)"
msgstr "Nuevo UUID (en formato 8-4-4-4-12)"

#: disk-utils/fdisk-menu.c:780
msgid "New name"
msgstr "Nombre nuevo"

#: disk-utils/fdisk-menu.c:843
msgid "Entering nested BSD disklabel."
msgstr "Entrando en la etiqueta BSD anidada de disco."

#: disk-utils/fdisk-menu.c:1041
msgid "Number of cylinders"
msgstr "Número de cilindros"

#: disk-utils/fdisk-menu.c:1048
msgid "Number of heads"
msgstr "Número de cabezas"

#: disk-utils/fdisk-menu.c:1054
msgid "Number of sectors"
msgstr "Número de sectores"

#: disk-utils/fsck.c:213
#, c-format
msgid "%s is mounted\n"
msgstr "%s está montado.\n"

#: disk-utils/fsck.c:215
#, c-format
msgid "%s is not mounted\n"
msgstr "%s no está montado.\n"

#: disk-utils/fsck.c:329 disk-utils/fsck.cramfs.c:174
#: disk-utils/fsck.cramfs.c:181 disk-utils/fsck.cramfs.c:237
#: disk-utils/fsck.cramfs.c:258 disk-utils/sfdisk.c:305 libfdisk/src/bsd.c:647
#: login-utils/last.c:208 login-utils/last.c:245 login-utils/sulogin.c:657
#: misc-utils/hardlink.c:290 misc-utils/hardlink.c:292
#: sys-utils/ctrlaltdel.c:44 sys-utils/irq-common.c:220 sys-utils/rfkill.c:213
#: sys-utils/setpriv.c:268 term-utils/setterm.c:746 term-utils/setterm.c:802
#: term-utils/setterm.c:806 term-utils/setterm.c:813
#, c-format
msgid "cannot read %s"
msgstr "no se puede leer %s"

#: disk-utils/fsck.c:331
#, c-format
msgid "parse error: %s"
msgstr "error de sintaxis: %s"

#: disk-utils/fsck.c:358
#, c-format
msgid "cannot create directory %s"
msgstr "no se puede crear el directorio %s"

#: disk-utils/fsck.c:371
#, c-format
msgid "Locking disk by %s ... "
msgstr "Bloqueando disco por %s ..."

#: disk-utils/fsck.c:382
#, c-format
msgid "(waiting) "
msgstr "(esperando)"

#. TRANSLATORS: These are followups to "Locking disk...".
#: disk-utils/fsck.c:392
msgid "succeeded"
msgstr "finalizado con éxito"

#: disk-utils/fsck.c:392
msgid "failed"
msgstr "falló"

#: disk-utils/fsck.c:409
#, c-format
msgid "Unlocking %s.\n"
msgstr "Desbloqueando %s.\n"

#: disk-utils/fsck.c:440
#, c-format
msgid "failed to setup description for %s"
msgstr "fallo al configurar la descripción de %s"

#: disk-utils/fsck.c:470 misc-utils/findmnt.c:793 misc-utils/lsblk-mnt.c:17
#: sys-utils/mount.c:95 sys-utils/swapon-common.c:19 sys-utils/umount.c:51
#, c-format
msgid "%s: parse error at line %d -- ignored"
msgstr "%s: error de análisis en la línea %d -- ignorado"

#: disk-utils/fsck.c:502 disk-utils/fsck.c:504
#, c-format
msgid "%s: failed to parse fstab"
msgstr "%s: fallo al analizar fstab"

#: disk-utils/fsck.c:685 login-utils/login.c:1016 login-utils/sulogin.c:1024
#: login-utils/vipw.c:208 sys-utils/flock.c:348 sys-utils/nsenter.c:182
#: sys-utils/swapon.c:319 sys-utils/unshare.c:242 sys-utils/unshare.c:567
msgid "fork failed"
msgstr "La bifurcación (fork) ha fallado"

#: disk-utils/fsck.c:692
#, c-format
msgid "%s: execute failed"
msgstr "%s: la ejecución falló"

#: disk-utils/fsck.c:780
msgid "wait: no more child process?!?"
msgstr "wait: ¿¡¿no queda ningún proceso hijo?!?"

#: disk-utils/fsck.c:783 sys-utils/flock.c:366 sys-utils/swapon.c:351
#: sys-utils/unshare.c:594 sys-utils/unshare.c:607
msgid "waitpid failed"
msgstr "waitpid() ha fallado"

#: disk-utils/fsck.c:801
#, c-format
msgid "Warning... %s for device %s exited with signal %d."
msgstr "Atención... %s para el dispositivo %s ha terminado con la señal %d."

#: disk-utils/fsck.c:807
#, c-format
msgid "%s %s: status is %x, should never happen."
msgstr "%s %s: el estado es %x, lo cual nunca debería suceder."

#: disk-utils/fsck.c:853
#, c-format
msgid "Finished with %s (exit status %d)\n"
msgstr "Ha finalizado con %s (estado de finalización %d)\n"

#: disk-utils/fsck.c:934
#, c-format
msgid "error %d (%m) while executing fsck.%s for %s"
msgstr "error %d (%m) al ejecutar fsck.%s para %s"

#: disk-utils/fsck.c:1000
msgid ""
"Either all or none of the filesystem types passed to -t must be prefixed\n"
"with 'no' or '!'."
msgstr ""
"Todos o alguno de los tipos de sistema de ficheros pasados a -t deben tener el prefijo\n"
"'no' o '!'."

#: disk-utils/fsck.c:1116
#, c-format
msgid "%s: skipping bad line in /etc/fstab: bind mount with nonzero fsck pass number"
msgstr ""
"%s: se descarta línea incorrecta en /etc/fstab: remontaje con número de\n"
"paso de fsck distinto de cero"

#: disk-utils/fsck.c:1128
#, c-format
msgid "%s: skipping nonexistent device\n"
msgstr "%s: se descarta el dispositivo que no existe\n"

#: disk-utils/fsck.c:1133
#, c-format
msgid "%s: nonexistent device (\"nofail\" fstab option may be used to skip this device)\n"
msgstr "%s: dispositivo inexistente (puede utilizarse la opción \"nofail\" para descartar este dispositivo)\n"

#: disk-utils/fsck.c:1150
#, c-format
msgid "%s: skipping unknown filesystem type\n"
msgstr "%s: se descarta tipo de sistema de ficheros desconocido\n"

#: disk-utils/fsck.c:1164
#, c-format
msgid "cannot check %s: fsck.%s not found"
msgstr "no se puede comprobar %s: fsck.%s no encontrado"

#: disk-utils/fsck.c:1268
msgid "Checking all file systems.\n"
msgstr "Comprobando todos los sistemas de ficheros.\n"

#: disk-utils/fsck.c:1359
#, c-format
msgid "--waiting-- (pass %d)\n"
msgstr "--esperando-- (paso %d)\n"

#: disk-utils/fsck.c:1385
#, c-format
msgid " %s [options] -- [fs-options] [<filesystem> ...]\n"
msgstr " %s [opciones] -- [opciones-sisf] [<sistema de ficheros> ...]\n"

#: disk-utils/fsck.c:1389
msgid "Check and repair a Linux filesystem.\n"
msgstr "Comprueba y repara un sistema de ficheros de Linux.\n"

#: disk-utils/fsck.c:1392
msgid " -A         check all filesystems\n"
msgstr " -A         comprueba todos los sistemas de ficheros\n"

#: disk-utils/fsck.c:1393
msgid " -C [<fd>]  display progress bar; file descriptor is for GUIs\n"
msgstr " -C [<fd>]  muestra la barra de progreso; el descriptor de fichero es para GUIs\n"

#: disk-utils/fsck.c:1394
msgid " -l         lock the device to guarantee exclusive access\n"
msgstr " -l         bloquea el dispositivo para garantizar acceso en exclusividad\n"

#: disk-utils/fsck.c:1395
msgid " -M         do not check mounted filesystems\n"
msgstr " -M         no comprueba los sistemas de ficheros montados\n"

#: disk-utils/fsck.c:1396
msgid " -N         do not execute, just show what would be done\n"
msgstr " -N         no ejecuta, simplemente muestra lo que haría\n"

#: disk-utils/fsck.c:1397
msgid " -P         check filesystems in parallel, including root\n"
msgstr " -P         comprueba los sistemas de ficheros en paralelo, incluyendo el raíz\n"

#: disk-utils/fsck.c:1398
msgid " -R         skip root filesystem; useful only with '-A'\n"
msgstr " -R         se salta el sistema de ficheros raíz; útil solamente con '-A'\n"

#: disk-utils/fsck.c:1399
msgid ""
" -r [<fd>]  report statistics for each device checked;\n"
"            file descriptor is for GUIs\n"
msgstr ""
" -r [<fd>]  muestra estadísticas para cada dispositivo comprobado;\n"
"            el descriptor de fichero es para GUIs\n"

#: disk-utils/fsck.c:1401
msgid " -s         serialize the checking operations\n"
msgstr " -s         serializa las operaciones de comprobación\n"

#: disk-utils/fsck.c:1402
msgid " -T         do not show the title on startup\n"
msgstr " -T         no muestra el título durante el arranque\n"

#: disk-utils/fsck.c:1403
msgid ""
" -t <type>  specify filesystem types to be checked;\n"
"            <type> is allowed to be a comma-separated list\n"
msgstr ""
" -t <tipo>  especifica tipos de sistemas de ficheros que se van a comprobar;\n"
"            <tipo> puede ser una lista de elementos separados por comas\n"

#: disk-utils/fsck.c:1405
msgid " -V         explain what is being done\n"
msgstr " -V         explica lo que va haciendo\n"

#: disk-utils/fsck.c:1411
msgid "See the specific fsck.* commands for available fs-options."
msgstr "Véanse las órdenes fsck.* específicas para conocer las opciones-sisf disponibes."

#: disk-utils/fsck.c:1456
msgid "too many devices"
msgstr "demasiados dispositivos"

#: disk-utils/fsck.c:1468
msgid "Is /proc mounted?"
msgstr "¿Está montado /proc?"

#: disk-utils/fsck.c:1476
#, c-format
msgid "must be root to scan for matching filesystems: %s"
msgstr "debe ser root para explorar sistemas de ficheros coincidentes: %s"

#: disk-utils/fsck.c:1480
#, c-format
msgid "couldn't find matching filesystem: %s"
msgstr "no se ha podido encontrar un sistema de ficheros coincidente: %s"

#: disk-utils/fsck.c:1488 disk-utils/fsck.c:1585 misc-utils/kill.c:281
#: sys-utils/eject.c:279
msgid "too many arguments"
msgstr "demasiados argumentos"

#: disk-utils/fsck.c:1543 disk-utils/fsck.c:1546
msgid "invalid argument of -r"
msgstr "argumento de -r no válido"

#: disk-utils/fsck.c:1558
#, c-format
msgid "option '%s' may be specified only once"
msgstr "la opción '%s' solo puede especificarse una vez"

#: disk-utils/fsck.c:1565 misc-utils/kill.c:327 misc-utils/kill.c:343
#, c-format
msgid "option '%s' requires an argument"
msgstr "la opción '%s' necesita un argumento"

#: disk-utils/fsck.c:1596
#, c-format
msgid "invalid argument of -r: %d"
msgstr "argumento de -r no válido: %d"

#: disk-utils/fsck.c:1639
msgid "the -l option can be used with one device only -- ignore"
msgstr "la opción -l puede utilizarse con un solo dispositivo -- ignorar"

#: disk-utils/fsck.cramfs.c:111
#, c-format
msgid " %s [options] <file>\n"
msgstr " %s [opciones] <fichero>\n"

#: disk-utils/fsck.cramfs.c:114
msgid "Check and repair a compressed ROM filesystem.\n"
msgstr "Comprueba y repara un sistema de ficheros ROM comprimido.\n"

#: disk-utils/fsck.cramfs.c:117
msgid " -a                       for compatibility only, ignored\n"
msgstr " -a                       solamente para compatibilidad, no hace nada\n"

#: disk-utils/fsck.cramfs.c:118
msgid " -v, --verbose            be more verbose\n"
msgstr " -v, --verbose            más expresivo\n"

#: disk-utils/fsck.cramfs.c:119
msgid " -y                       for compatibility only, ignored\n"
msgstr " -y                       solamente para compatibilidad, no hace nada\n"

#: disk-utils/fsck.cramfs.c:120
msgid " -b, --blocksize <size>   use this blocksize, defaults to page size\n"
msgstr " -b, --blocksize <tamaño> utiliza este tamaño de bloque, predeterminado al tamaño de página\n"

#: disk-utils/fsck.cramfs.c:121
msgid "     --extract[=<dir>]    test uncompression, optionally extract into <dir>\n"
msgstr "     --extract[=<dir>]    comprueba descompresión, opcionalmente extrayendo en <dir>\n"

#: disk-utils/fsck.cramfs.c:161
#, c-format
msgid "ioctl failed: unable to determine device size: %s"
msgstr "fallo de ioctel: no se puede determinar el tamaño del dispositivo: %s"

#: disk-utils/fsck.cramfs.c:167
#, c-format
msgid "not a block device or file: %s"
msgstr "no es un dispositivo de bloques o un fichero: %s"

#: disk-utils/fsck.cramfs.c:170 disk-utils/fsck.cramfs.c:206
msgid "file length too short"
msgstr "la longitud del fichero es demasiado corta"

#: disk-utils/fsck.cramfs.c:179 disk-utils/fsck.cramfs.c:234
#: disk-utils/fsck.cramfs.c:254 libfdisk/src/bsd.c:719 libfdisk/src/bsd.c:901
#: login-utils/last.c:203 login-utils/last.c:237 sys-utils/fallocate.c:206
#, c-format
msgid "seek on %s failed"
msgstr "Error de búsqueda en %s"

#: disk-utils/fsck.cramfs.c:185 disk-utils/fsck.cramfs.c:187
msgid "superblock magic not found"
msgstr "no se ha encontrado el número mágico del superbloque"

#: disk-utils/fsck.cramfs.c:190
#, c-format
msgid "cramfs endianness is %s\n"
msgstr "la endianness de cramfs es %s\n"

#: disk-utils/fsck.cramfs.c:191
msgid "big"
msgstr "big"

#: disk-utils/fsck.cramfs.c:191
msgid "little"
msgstr "little"

#: disk-utils/fsck.cramfs.c:195
msgid "unsupported filesystem features"
msgstr "el sistema de ficheros tiene características no soportadas"

#: disk-utils/fsck.cramfs.c:199
#, c-format
msgid "superblock size (%d) too small"
msgstr "el tamaño del superbloque (%d) es demasiado pequeño"

#: disk-utils/fsck.cramfs.c:204
msgid "zero file count"
msgstr "cero ficheros"

#: disk-utils/fsck.cramfs.c:208
msgid "file extends past end of filesystem"
msgstr "el fichero finaliza más allá del final del sistema de ficheros"

#: disk-utils/fsck.cramfs.c:210
msgid "old cramfs format"
msgstr "formato cramfs antiguo"

#: disk-utils/fsck.cramfs.c:219
msgid "unable to test CRC: old cramfs format"
msgstr "no se puede comprobar CRC: formato cramfs antiguo"

#: disk-utils/fsck.cramfs.c:239
#, c-format
msgid "failed to read %<PRIu32> bytes from file %s"
msgstr "no se han podido %<PRIu32> bytes en el fichero %s"

#: disk-utils/fsck.cramfs.c:277
msgid "crc error"
msgstr "error de crc"

#: disk-utils/fsck.cramfs.c:307 disk-utils/fsck.minix.c:558
msgid "seek failed"
msgstr "error de búsqueda"

#: disk-utils/fsck.cramfs.c:311
msgid "read romfs failed"
msgstr "error de lectura de romfs"

#: disk-utils/fsck.cramfs.c:343
msgid "root inode is not directory"
msgstr "el nodo-i raíz no es un directorio"

#: disk-utils/fsck.cramfs.c:347
#, c-format
msgid "bad root offset (%lu)"
msgstr "desplazamiento de la raíz incorrecto (%lu)"

#: disk-utils/fsck.cramfs.c:365
msgid "data block too large"
msgstr "bloque de datos demasiado grande"

#: disk-utils/fsck.cramfs.c:369
#, c-format
msgid "decompression error: %s"
msgstr "error de descompresión %s"

#: disk-utils/fsck.cramfs.c:395
#, c-format
msgid "  hole at %lu (%zu)\n"
msgstr "  hueco en %lu (%zu)\n"

#: disk-utils/fsck.cramfs.c:402 disk-utils/fsck.cramfs.c:554
#, c-format
msgid "  uncompressing block at %lu to %lu (%lu)\n"
msgstr "  descomprimiendo bloque en %lu a %lu (%lu)\n"

# No me gusta. Se admiten sugerencias.
#: disk-utils/fsck.cramfs.c:409
#, c-format
msgid "non-block (%ld) bytes"
msgstr "no bloque (%ld) bytes"

#: disk-utils/fsck.cramfs.c:413
#, c-format
msgid "non-size (%ld vs %ld) bytes"
msgstr "no tamaño (%ld vs %ld) bytes"

#: disk-utils/fsck.cramfs.c:418 disk-utils/fsck.cramfs.c:520
#: disk-utils/swaplabel.c:109 misc-utils/uuidd.c:369 sys-utils/fallocate.c:414
#: sys-utils/rfkill.c:560 sys-utils/setpriv.c:634 sys-utils/setpriv.c:657
#: sys-utils/swapon.c:392 term-utils/script.c:318 term-utils/ttymsg.c:175
#, c-format
msgid "write failed: %s"
msgstr "falló la escritura: %s"

#: disk-utils/fsck.cramfs.c:428
#, c-format
msgid "lchown failed: %s"
msgstr "lchown falló: %s"

#: disk-utils/fsck.cramfs.c:432
#, c-format
msgid "chown failed: %s"
msgstr "chown falló: %s"

#: disk-utils/fsck.cramfs.c:437
#, c-format
msgid "utimes failed: %s"
msgstr "utimes ha fallado: %s"

#: disk-utils/fsck.cramfs.c:449
#, c-format
msgid "directory inode has zero offset and non-zero size: %s"
msgstr "el nodo-i del directorio tiene desplazamiento cero y un tamaño distinto de cero: %s"

#: disk-utils/fsck.cramfs.c:464
#, c-format
msgid "mkdir failed: %s"
msgstr "mkdir falló: %s"

#: disk-utils/fsck.cramfs.c:480
msgid "filename length is zero"
msgstr "la longitud del nombre del fichero es cero"

#: disk-utils/fsck.cramfs.c:482
msgid "bad filename length"
msgstr "longitud errónea del nombre del fichero"

#: disk-utils/fsck.cramfs.c:488
msgid "bad inode offset"
msgstr "desplazamiento de nodo-i incorrecto"

#: disk-utils/fsck.cramfs.c:503
msgid "file inode has zero offset and non-zero size"
msgstr "el nodo-i del fichero tiene desplazamiento cero y un tamaño distinto de cero"

#: disk-utils/fsck.cramfs.c:506
msgid "file inode has zero size and non-zero offset"
msgstr "el nodo-i del fichero tiene tamaño cero y un desplazamiento distinto de cero"

#: disk-utils/fsck.cramfs.c:535
msgid "symbolic link has zero offset"
msgstr "el enlace simbólico tiene desplazamiento cero"

#: disk-utils/fsck.cramfs.c:537
msgid "symbolic link has zero size"
msgstr "el enlace simbólico tiene tamaño cero"

#: disk-utils/fsck.cramfs.c:546
#, c-format
msgid "size error in symlink: %s"
msgstr "error de tamaño en el enlace simbólico %s"

#: disk-utils/fsck.cramfs.c:560
#, c-format
msgid "symlink failed: %s"
msgstr "el enlace simbólico falló: %s"

#: disk-utils/fsck.cramfs.c:573
#, c-format
msgid "special file has non-zero offset: %s"
msgstr "el fichero especial tiene un desplazamiento distinto de cero: %s"

#: disk-utils/fsck.cramfs.c:583
#, c-format
msgid "fifo has non-zero size: %s"
msgstr "el fifo tiene un tamaño distinto de cero: %s"

#: disk-utils/fsck.cramfs.c:589
#, c-format
msgid "socket has non-zero size: %s"
msgstr "el «socket» tiene tamaño distinto de cero: %s"

#: disk-utils/fsck.cramfs.c:592
#, c-format
msgid "bogus mode: %s (%o)"
msgstr "modo falso: %s (%o)"

#: disk-utils/fsck.cramfs.c:601
#, c-format
msgid "mknod failed: %s"
msgstr "mknod falló: %s"

#: disk-utils/fsck.cramfs.c:633
#, c-format
msgid "directory data start (%lu) < sizeof(struct cramfs_super) + start (%zu)"
msgstr "comienzo de los datos del directorio (%lu) < sizeof(struct cramfs_super) + inicio (%zu)"

#: disk-utils/fsck.cramfs.c:637
#, c-format
msgid "directory data end (%lu) != file data start (%lu)"
msgstr "final de los datos de directorios (%lu) != comienzo de los datos de ficheros (%lu)"

#: disk-utils/fsck.cramfs.c:641
msgid "invalid file data offset"
msgstr "desplazamiento de los datos de fichero no válido"

#: disk-utils/fsck.cramfs.c:689 disk-utils/mkfs.cramfs.c:736
msgid "invalid blocksize argument"
msgstr "argumento del tamaño de bloque no válido"

#: disk-utils/fsck.cramfs.c:712
#, c-format
msgid "%s: OK\n"
msgstr "%s: Correcto\n"

#: disk-utils/fsck.minix.c:185
msgid "Check the consistency of a Minix filesystem.\n"
msgstr "Comprueba la coherencia de un sistema de ficheros de Minix.\n"

#: disk-utils/fsck.minix.c:187
msgid " -l, --list       list all filenames\n"
msgstr " -l, --list       enumera todos los nombres de fichero\n"

#: disk-utils/fsck.minix.c:188
msgid " -a, --auto       automatic repair\n"
msgstr " -a, --auto       reparación automática\n"

#: disk-utils/fsck.minix.c:189
msgid " -r, --repair     interactive repair\n"
msgstr " -r, --repair     reparación interactiva\n"

#: disk-utils/fsck.minix.c:190
msgid " -v, --verbose    be verbose\n"
msgstr " -v, --verbose    da más información\n"

#: disk-utils/fsck.minix.c:191
msgid " -s, --super      output super-block information\n"
msgstr " -s, --super      saca información de superbloque\n"

#: disk-utils/fsck.minix.c:192
msgid " -m, --uncleared  activate mode not cleared warnings\n"
msgstr " -m, --uncleared  activa modo de avisos no borrados\n"

#: disk-utils/fsck.minix.c:193
msgid " -f, --force      force check\n"
msgstr " -f, --force      fuerza comprobación\n"

#. TRANSLATORS: these yes no questions uses rpmatch(), and should be
#. * translated.
#: disk-utils/fsck.minix.c:252
#, c-format
msgid "%s (y/n)? "
msgstr "%s (s/n)? "

#: disk-utils/fsck.minix.c:252
#, c-format
msgid "%s (n/y)? "
msgstr "%s (n/s)? "

#: disk-utils/fsck.minix.c:269
#, c-format
msgid "y\n"
msgstr "s\n"

#: disk-utils/fsck.minix.c:271
#, c-format
msgid "n\n"
msgstr "n\n"

#: disk-utils/fsck.minix.c:287
#, c-format
msgid "%s is mounted.\t "
msgstr "%s está montado.\t "

#: disk-utils/fsck.minix.c:289
msgid "Do you really want to continue"
msgstr "¿Está seguro de que desea continuar?"

#: disk-utils/fsck.minix.c:293
#, c-format
msgid "check aborted.\n"
msgstr "comprobación anulada.\n"

#: disk-utils/fsck.minix.c:318 disk-utils/fsck.minix.c:339
#, c-format
msgid "Zone nr < FIRSTZONE in file `%s'."
msgstr "Número de zona < FIRSTZONE en el fichero `%s'."

#: disk-utils/fsck.minix.c:321 disk-utils/fsck.minix.c:342
#, c-format
msgid "Zone nr >= ZONES in file `%s'."
msgstr "Número de zona >= ZONES en el fichero `%s'."

#: disk-utils/fsck.minix.c:325 disk-utils/fsck.minix.c:346
msgid "Remove block"
msgstr "Eliminar bloque"

#: disk-utils/fsck.minix.c:362
#, c-format
msgid "Read error: unable to seek to block in file '%s'\n"
msgstr "Error de lectura: no se puede buscar en un bloque en el fichero '%s'\n"

#: disk-utils/fsck.minix.c:368
#, c-format
msgid "Read error: bad block in file '%s'\n"
msgstr "Error de lectura: bloque incorrecto en el fichero '%s'\n"

#: disk-utils/fsck.minix.c:380
#, c-format
msgid ""
"Internal error: trying to write bad block\n"
"Write request ignored\n"
msgstr ""
"Error interno: se está intentando escribir un bloque incorrecto\n"
"La petición de escritura no se tiene en cuenta\n"

#: disk-utils/fsck.minix.c:386
msgid "seek failed in write_block"
msgstr "Error de búsqueda en write_block"

#: disk-utils/fsck.minix.c:389
#, c-format
msgid "Write error: bad block in file '%s'\n"
msgstr "Error de escritura: bloque incorrecto en el fichero '%s'\n"

#: disk-utils/fsck.minix.c:423
#, c-format
msgid "Warning: block out of range\n"
msgstr "Atención: bloque fuera de rango.\n"

#: disk-utils/fsck.minix.c:510
msgid "seek failed in write_super_block"
msgstr "Error de búsqueda en write_super_block"

#: disk-utils/fsck.minix.c:512
msgid "unable to write super-block"
msgstr "No se puede escribir el superbloque"

#: disk-utils/fsck.minix.c:524
msgid "Unable to write inode map"
msgstr "No se puede escribir la tabla de nodos-i"

#: disk-utils/fsck.minix.c:527
msgid "Unable to write zone map"
msgstr "No se puede escribir la tabla de zonas"

#: disk-utils/fsck.minix.c:530
msgid "Unable to write inodes"
msgstr "No se pueden escribir nodos-i"

#: disk-utils/fsck.minix.c:562
msgid "unable to alloc buffer for superblock"
msgstr "No se puede asignar búferes para superbloque"

#: disk-utils/fsck.minix.c:565
msgid "unable to read super block"
msgstr "No se puede leer el superbloque"

#: disk-utils/fsck.minix.c:587
msgid "bad magic number in super-block"
msgstr "Número mágico incorrecto en el superbloque"

#: disk-utils/fsck.minix.c:589
msgid "Only 1k blocks/zones supported"
msgstr "Sólo se da soporte a bloques o zonas de 1k"

#: disk-utils/fsck.minix.c:591
msgid "bad s_ninodes field in super-block"
msgstr "Campo s_ninodes incorrecto en superbloque"

#: disk-utils/fsck.minix.c:593
msgid "bad s_imap_blocks field in super-block"
msgstr "Campo s_imap_blocks incorrecto en superbloque"

#: disk-utils/fsck.minix.c:595
msgid "bad s_firstdatazone field in super-block"
msgstr "Campo s_firstdatazone incorrecto en superbloque"

#: disk-utils/fsck.minix.c:598
msgid "bad s_zmap_blocks field in super-block"
msgstr "Campo s_zmap_blocks incorrecto en superbloque"

#: disk-utils/fsck.minix.c:614
msgid "Unable to allocate buffer for inode map"
msgstr "No se puede asignar búfer para la tabla de nodos-i"

#: disk-utils/fsck.minix.c:617
msgid "Unable to allocate buffer for zone map"
msgstr "No se puede asignar búfer para la tabla de zona"

#: disk-utils/fsck.minix.c:620
msgid "Unable to allocate buffer for inodes"
msgstr "No se puede asignar búfer para los nodos-i"

#: disk-utils/fsck.minix.c:623
msgid "Unable to allocate buffer for inode count"
msgstr "No se puede asignar búfer para el número de nodos-i"

#: disk-utils/fsck.minix.c:626
msgid "Unable to allocate buffer for zone count"
msgstr "No se puede asignar búfer para el número de zonas"

#: disk-utils/fsck.minix.c:630
msgid "Unable to read inode map"
msgstr "No se puede leer la tabla de nodos-i"

#: disk-utils/fsck.minix.c:634
msgid "Unable to read zone map"
msgstr "No se puede leer la tabla de zonas"

#: disk-utils/fsck.minix.c:638
msgid "Unable to read inodes"
msgstr "No se pueden leer los nodos-i"

#: disk-utils/fsck.minix.c:640
#, c-format
msgid "Warning: Firstzone != Norm_firstzone\n"
msgstr "Atención: Firstzone != Norm_firstzone\n"

#: disk-utils/fsck.minix.c:645
#, c-format
msgid "%ld inodes\n"
msgstr "%ld nodos-i\n"

#: disk-utils/fsck.minix.c:646
#, c-format
msgid "%ld blocks\n"
msgstr "%ld bloques\n"

#: disk-utils/fsck.minix.c:647 disk-utils/mkfs.minix.c:568
#, c-format
msgid "Firstdatazone=%jd (%jd)\n"
msgstr "Primera zona de datos=%jd (%jd)\n"

#: disk-utils/fsck.minix.c:649
#, c-format
msgid "Zonesize=%d\n"
msgstr "Tamaño de zona=%d\n"

#: disk-utils/fsck.minix.c:650
#, c-format
msgid "Maxsize=%zu\n"
msgstr "Tamaño máximo=%zu\n"

#: disk-utils/fsck.minix.c:652
#, c-format
msgid "Filesystem state=%d\n"
msgstr "Estado del sistema de ficheros=%d\n"

#: disk-utils/fsck.minix.c:653
#, c-format
msgid ""
"namelen=%zd\n"
"\n"
msgstr ""
"Longitud de nombre=%zd\n"
"\n"

#: disk-utils/fsck.minix.c:668 disk-utils/fsck.minix.c:718
#, c-format
msgid "Inode %d marked unused, but used for file '%s'\n"
msgstr ""
"El nodo-i %d se ha marcado como no utilizado, pero se utiliza para\n"
"el fichero '%s'\n"

#: disk-utils/fsck.minix.c:671 disk-utils/fsck.minix.c:721
msgid "Mark in use"
msgstr "Marcar en uso"

#: disk-utils/fsck.minix.c:693 disk-utils/fsck.minix.c:741
#, c-format
msgid "The file `%s' has mode %05o\n"
msgstr "El fichero `%s' tiene el modo %05o\n"

#: disk-utils/fsck.minix.c:700 disk-utils/fsck.minix.c:747
#, c-format
msgid "Warning: inode count too big.\n"
msgstr "Atención: número de nodos-i demasiado elevado.\n"

#: disk-utils/fsck.minix.c:759 disk-utils/fsck.minix.c:767
msgid "root inode isn't a directory"
msgstr "El nodo-i raíz no es un directorio"

#: disk-utils/fsck.minix.c:779 disk-utils/fsck.minix.c:810
#, c-format
msgid "Block has been used before. Now in file `%s'."
msgstr ""
"El bloque ya se ha utilizado anteriormente.\n"
"Ahora está en el fichero `%s'."

#: disk-utils/fsck.minix.c:781 disk-utils/fsck.minix.c:812
#: disk-utils/fsck.minix.c:1145 disk-utils/fsck.minix.c:1154
#: disk-utils/fsck.minix.c:1201 disk-utils/fsck.minix.c:1210
msgid "Clear"
msgstr "Borrar"

#: disk-utils/fsck.minix.c:791 disk-utils/fsck.minix.c:822
#, c-format
msgid "Block %d in file `%s' is marked not in use."
msgstr "El bloque %d en el fichero `%s' está marcado como no utilizado."

#: disk-utils/fsck.minix.c:793 disk-utils/fsck.minix.c:824
msgid "Correct"
msgstr "Correcto"

#: disk-utils/fsck.minix.c:963 disk-utils/fsck.minix.c:1036
#, c-format
msgid "The directory '%s' contains a bad inode number for file '%.*s'."
msgstr ""
"El directorio `%s' contiene un número de nodo-i incorrecto\n"
"para el fichero '%.*s'."

#: disk-utils/fsck.minix.c:965 disk-utils/fsck.minix.c:1038
msgid " Remove"
msgstr " Eliminar"

#: disk-utils/fsck.minix.c:981 disk-utils/fsck.minix.c:1054
#, c-format
msgid "%s: bad directory: '.' isn't first\n"
msgstr "%s: directorio incorrecto: '.' no es el primero\n"

#: disk-utils/fsck.minix.c:990 disk-utils/fsck.minix.c:1063
#, c-format
msgid "%s: bad directory: '..' isn't second\n"
msgstr "%s: directorio incorrecto: '..' no es el segundo\n"

#: disk-utils/fsck.minix.c:1096 disk-utils/fsck.minix.c:1119
msgid "internal error"
msgstr "Error interno"

#: disk-utils/fsck.minix.c:1099 disk-utils/fsck.minix.c:1122
#, c-format
msgid "%s: bad directory: size < 32"
msgstr "%s: directorio incorrecto: tamaño < 32"

#: disk-utils/fsck.minix.c:1105
#, c-format
msgid "%s: bad directory: invalid i_zone, use --repair to fix\n"
msgstr "%s: directorio incorrecto: i_zone inválida; utilice --repair para arreglarlo\n"

#: disk-utils/fsck.minix.c:1134
msgid "seek failed in bad_zone"
msgstr "Error de búsqueda en bad_zone"

#: disk-utils/fsck.minix.c:1144 disk-utils/fsck.minix.c:1200
#, c-format
msgid "Inode %lu mode not cleared."
msgstr "No se ha borrado el modo del nodo-i %lu."

#: disk-utils/fsck.minix.c:1153 disk-utils/fsck.minix.c:1209
#, c-format
msgid "Inode %lu not used, marked used in the bitmap."
msgstr "El nodo-i %lu no está en uso; marcado como en uso en el mapa de bits."

#: disk-utils/fsck.minix.c:1159 disk-utils/fsck.minix.c:1215
#, c-format
msgid "Inode %lu used, marked unused in the bitmap."
msgstr "El nodo-i %lu está en uso; marcado como no en uso en el mapa de bits."

#: disk-utils/fsck.minix.c:1160 disk-utils/fsck.minix.c:1216
msgid "Set"
msgstr "Establecer"

#: disk-utils/fsck.minix.c:1164 disk-utils/fsck.minix.c:1220
#, c-format
msgid "Inode %lu (mode = %07o), i_nlinks=%d, counted=%d."
msgstr "Nodo-i %lu (modo = %07o), i_nlinks=%d, contados=%d."

#: disk-utils/fsck.minix.c:1167 disk-utils/fsck.minix.c:1223
msgid "Set i_nlinks to count"
msgstr "Establece i_nlinks en número contado"

#: disk-utils/fsck.minix.c:1179 disk-utils/fsck.minix.c:1235
#, c-format
msgid "Zone %lu: marked in use, no file uses it."
msgstr "Zona %lu: marcada como en uso; ningún fichero la utiliza."

#: disk-utils/fsck.minix.c:1181 disk-utils/fsck.minix.c:1237
msgid "Unmark"
msgstr "Eliminar marca"

#: disk-utils/fsck.minix.c:1186 disk-utils/fsck.minix.c:1242
#, c-format
msgid "Zone %lu: in use, counted=%d\n"
msgstr "Zona %lu: en uso, contados=%d\n"

#: disk-utils/fsck.minix.c:1189 disk-utils/fsck.minix.c:1245
#, c-format
msgid "Zone %lu: not in use, counted=%d\n"
msgstr "Zona %lu: no en uso, contados=%d\n"

#: disk-utils/fsck.minix.c:1295
msgid "bad inode size"
msgstr "tamaño de nodo-i incorrecto"

#: disk-utils/fsck.minix.c:1297
msgid "bad v2 inode size"
msgstr "tamaño de nodo-i v2 incorrecto"

#: disk-utils/fsck.minix.c:1341
msgid "need terminal for interactive repairs"
msgstr "Se necesita terminal para reparaciones interactivas"

#: disk-utils/fsck.minix.c:1345
#, c-format
msgid "cannot open %s: %s"
msgstr "no se puede abrir %s: %s"

#: disk-utils/fsck.minix.c:1356
#, c-format
msgid "%s is clean, no check.\n"
msgstr "%s está limpio; no se comprueba.\n"

#: disk-utils/fsck.minix.c:1361
#, c-format
msgid "Forcing filesystem check on %s.\n"
msgstr "Forzando comprobación del sistema de ficheros en %s.\n"

#: disk-utils/fsck.minix.c:1363
#, c-format
msgid "Filesystem on %s is dirty, needs checking.\n"
msgstr "El sistema de ficheros en %s contiene elementos extraños; debe comprobarse.\n"

#: disk-utils/fsck.minix.c:1395
#, c-format
msgid ""
"\n"
"%6ld inodes used (%ld%%)\n"
msgstr ""
"\n"
"%6ld nodos-i utilizados (%ld%%)\n"

#: disk-utils/fsck.minix.c:1401
#, c-format
msgid "%6ld zones used (%ld%%)\n"
msgstr "%6ld zonas utilizadas (%ld%%)\n"

#: disk-utils/fsck.minix.c:1403
#, c-format
msgid ""
"\n"
"%6d regular files\n"
"%6d directories\n"
"%6d character device files\n"
"%6d block device files\n"
"%6d links\n"
"%6d symbolic links\n"
"------\n"
"%6d files\n"
msgstr ""
"\n"
"%6d ficheros normales\n"
"%6d directorios\n"
"%6d ficheros de dispositivos de caracteres\n"
"%6d ficheros de dispositivos de bloques\n"
"%6d enlaces\n"
"%6d enlaces simbólicos\n"
"------\n"
"%6d ficheros\n"

#: disk-utils/fsck.minix.c:1417
#, c-format
msgid ""
"----------------------------\n"
"FILE SYSTEM HAS BEEN CHANGED\n"
"----------------------------\n"
msgstr ""
"----------------------------------\n"
"EL SISTEMA DE FICHEROS HA CAMBIADO\n"
"----------------------------------\n"

#: disk-utils/fsck.minix.c:1429 disk-utils/mkfs.minix.c:837
#: disk-utils/mkswap.c:561 disk-utils/partx.c:1068 disk-utils/resizepart.c:115
#: login-utils/utmpdump.c:391 sys-utils/dmesg.c:678 sys-utils/wdctl.c:386
#: sys-utils/wdctl.c:446 term-utils/setterm.c:908 text-utils/pg.c:1259
msgid "write failed"
msgstr "falló la escritura"

#: disk-utils/isosize.c:57
#, c-format
msgid "%s: might not be an ISO filesystem"
msgstr "%s: podría no ser un sistema de ficheros ISO"

#: disk-utils/isosize.c:62 disk-utils/isosize.c:64
#, c-format
msgid "read error on %s"
msgstr "error de lectura en %s"

#: disk-utils/isosize.c:75
#, c-format
msgid "sector count: %d, sector size: %d\n"
msgstr "número de sectores: %d, tamaño del sector: %d\n"

#: disk-utils/isosize.c:99
#, c-format
msgid " %s [options] <iso9660_image_file> ...\n"
msgstr " %s [options] <fichero_de_imagen_iso9660> ...\n"

#: disk-utils/isosize.c:103
msgid "Show the length of an ISO-9660 filesystem.\n"
msgstr "Muestra la longitud de un sistema de ficheros ISO-9660.\n"

#: disk-utils/isosize.c:106
msgid " -d, --divisor=<number>  divide the amount of bytes by <number>\n"
msgstr " -d, --divisor=<número>  divide la cantidad de bytes entre <número>\n"

#: disk-utils/isosize.c:107
msgid " -x, --sectors           show sector count and size\n"
msgstr " -x, --sectors           muestra número y tamaño de sectores\n"

#: disk-utils/isosize.c:138
msgid "invalid divisor argument"
msgstr "argumento de divisor no válido"

#: disk-utils/mkfs.bfs.c:74
#, c-format
msgid "Usage: %s [options] device [block-count]\n"
msgstr "Modo de empleo: %s [opciones] dispositivo [contador-de-bloques]\n"

#: disk-utils/mkfs.bfs.c:78
msgid "Make an SCO bfs filesystem.\n"
msgstr "Crea un sistema de ficheros bfs de SCO.\n"

#: disk-utils/mkfs.bfs.c:80
#, c-format
msgid ""
"\n"
"Options:\n"
" -N, --inodes=NUM    specify desired number of inodes\n"
" -V, --vname=NAME    specify volume name\n"
" -F, --fname=NAME    specify file system name\n"
" -v, --verbose       explain what is being done\n"
" -c                  this option is silently ignored\n"
" -l                  this option is silently ignored\n"
msgstr ""
"\n"
"Opciones:\n"
" -N, --inodes=NUM    especifica el número deseado de nodos-i\n"
" -V, --vname=NOMBRE  especifica el nombre del volumen\n"
" -F, --fname=NOMBRE  especifica el nombre del sistema de ficheros\n"
" -v, --verbose       explica lo que se está haciendo\n"
" -c                  esta opción se ignora en silencio\n"
" -l                  esta opción se ignora en silencio\n"

#: disk-utils/mkfs.bfs.c:139
msgid "invalid number of inodes"
msgstr "número no válido de nodos-i"

#: disk-utils/mkfs.bfs.c:145
msgid "volume name too long"
msgstr "nombre de volumen demasiado largo"

#: disk-utils/mkfs.bfs.c:152
msgid "fsname name too long"
msgstr "nombre del sistema de ficheros demasiado largo"

#: disk-utils/mkfs.bfs.c:190
msgid "invalid block-count"
msgstr "número de bloques no válido"

#: disk-utils/mkfs.bfs.c:198
#, c-format
msgid "cannot get size of %s"
msgstr "no se puede obtener el tamaño de %s"

#: disk-utils/mkfs.bfs.c:203
#, c-format
msgid "blocks argument too large, max is %llu"
msgstr "el argumento de bloques es demasiado grande, el máximo es %llu"

#: disk-utils/mkfs.bfs.c:218
msgid "too many inodes - max is 512"
msgstr "demasiados nodos-i; el máximo es 512"

#: disk-utils/mkfs.bfs.c:228
#, c-format
msgid "not enough space, need at least %llu blocks"
msgstr "no hay suficiente espacio, se necesitan al menos %llu bloques"

#: disk-utils/mkfs.bfs.c:240
#, c-format
msgid "Device: %s\n"
msgstr "Dispositivo: %s\n"

#: disk-utils/mkfs.bfs.c:241
#, c-format
msgid "Volume: <%-6s>\n"
msgstr "Volumen: <%-6s>\n"

#: disk-utils/mkfs.bfs.c:242
#, c-format
msgid "FSname: <%-6s>\n"
msgstr "NombreDelSF: <%-6s>\n"

#: disk-utils/mkfs.bfs.c:243
#, c-format
msgid "BlockSize: %d\n"
msgstr "TamañoDelBloque: %d\n"

#: disk-utils/mkfs.bfs.c:245
#, c-format
msgid "Inodes: %ld (in 1 block)\n"
msgstr "Nodos-i: %ld (en 1 bloque)\n"

#: disk-utils/mkfs.bfs.c:248
#, c-format
msgid "Inodes: %ld (in %llu blocks)\n"
msgstr "Nodos-i: %ld (en %llu bloques)\n"

#: disk-utils/mkfs.bfs.c:250
#, c-format
msgid "Blocks: %llu\n"
msgstr "Bloques: %llu\n"

#: disk-utils/mkfs.bfs.c:251
#, c-format
msgid "Inode end: %d, Data end: %d\n"
msgstr "Fin de los nodos-i: %d, fin de los datos: %d\n"

#: disk-utils/mkfs.bfs.c:256
msgid "error writing superblock"
msgstr "error al escribir el superbloque"

#: disk-utils/mkfs.bfs.c:277
msgid "error writing root inode"
msgstr "error al escribir el nodo-i raíz"

#: disk-utils/mkfs.bfs.c:282
msgid "error writing inode"
msgstr "error al escribir un nodo-i"

#: disk-utils/mkfs.bfs.c:285
msgid "seek error"
msgstr "error de búsqueda"

# Lo pongo entre `comitas' porque está al final.
#: disk-utils/mkfs.bfs.c:291
msgid "error writing . entry"
msgstr "error al escribir la entrada `.'"

#: disk-utils/mkfs.bfs.c:295
msgid "error writing .. entry"
msgstr "error al escribir la entrada `..'"

#: disk-utils/mkfs.bfs.c:298
#, c-format
msgid "error closing %s"
msgstr "error al cerrar %s"

#: disk-utils/mkfs.c:45
#, c-format
msgid " %s [options] [-t <type>] [fs-options] <device> [<size>]\n"
msgstr " %s [opciones] [-t <tipo>] [opciones-sisf] <dispositivo> [<tamaño>]\n"

#: disk-utils/mkfs.c:49
msgid "Make a Linux filesystem.\n"
msgstr "Construye un sistema de ficheros de Linux.\n"

#: disk-utils/mkfs.c:52
#, c-format
msgid " -t, --type=<type>  filesystem type; when unspecified, ext2 is used\n"
msgstr " -t, --type=<tipo>  tipo de sistema de ficheros; si no se especifica, se usa ext2\n"

#: disk-utils/mkfs.c:53
#, c-format
msgid "     fs-options     parameters for the real filesystem builder\n"
msgstr "     opciones-sisf  parámetros para el constructor real del sistema de ficheros\n"

#: disk-utils/mkfs.c:54
#, c-format
msgid "     <device>       path to the device to be used\n"
msgstr "     <dispositivo>  ruta al dispositivo que se va a usar\n"

#: disk-utils/mkfs.c:55
#, c-format
msgid "     <size>         number of blocks to be used on the device\n"
msgstr "     <tamaño>       número de bloques que se van a usar en el dispositivo\n"

#: disk-utils/mkfs.c:56
#, c-format
msgid ""
" -V, --verbose      explain what is being done;\n"
"                      specifying -V more than once will cause a dry-run\n"
msgstr ""
" -V, --verbose      explica lo que se está haciendo;\n"
"                      especificar -V más de una vez provocará un «dry-run»\n"

#: disk-utils/mkfs.c:133 include/c.h:254 login-utils/su-common.c:1214
#: login-utils/sulogin.c:793 login-utils/sulogin.c:797 sys-utils/flock.c:123
#: sys-utils/rtcwake.c:621
#, c-format
msgid "failed to execute %s"
msgstr "fallo al ejecutar %s"

#: disk-utils/mkfs.cramfs.c:128
#, c-format
msgid " %s [-h] [-v] [-b blksize] [-e edition] [-N endian] [-i file] [-n name] dirname outfile\n"
msgstr " %s [-h] [-v] [-b tamañobloque] [-e edición] [-N endian] [-i fichero] [-n nombre] nombredir ficherosalida\n"

#: disk-utils/mkfs.cramfs.c:131
msgid "Make compressed ROM file system."
msgstr "Hace un sistema de ficheros ROM comprimido."

#: disk-utils/mkfs.cramfs.c:133
msgid " -v             be verbose"
msgstr " -v             expresivo"

#: disk-utils/mkfs.cramfs.c:134
msgid " -E             make all warnings errors (non-zero exit status)"
msgstr " -E             hace que todos los avisos sean errores (estado de salida distinto de cero)"

#: disk-utils/mkfs.cramfs.c:135
msgid " -b blksize     use this blocksize, must equal page size"
msgstr " -b tamañobloque utiliza este tamaño de bloque; ha de coincidir con el tamaño de página"

#: disk-utils/mkfs.cramfs.c:136
msgid " -e edition     set edition number (part of fsid)"
msgstr " -e edición     establece el número de edición (parte del fsid)"

#: disk-utils/mkfs.cramfs.c:137
#, c-format
msgid " -N endian      set cramfs endianness (%s|%s|%s), default %s\n"
msgstr " -N endian      establece el endian de cramfs (%s|%s|%s), por defecto, %s\n"

#: disk-utils/mkfs.cramfs.c:138
msgid " -i file        insert a file image into the filesystem"
msgstr " -i fichero     inserta una imagen de fichero en el sistema de ficheros"

#: disk-utils/mkfs.cramfs.c:139
msgid " -n name        set name of cramfs filesystem"
msgstr " -n nombre      establece el nombre del sistema de ficheros cramfs"

#: disk-utils/mkfs.cramfs.c:140
#, c-format
msgid " -p             pad by %d bytes for boot code\n"
msgstr " -p             rellena %d bytes para código de arranque\n"

#: disk-utils/mkfs.cramfs.c:141
msgid " -s             sort directory entries (old option, ignored)"
msgstr " -s             ordena las entradas del directorio (opción antigua, ignorada)"

#: disk-utils/mkfs.cramfs.c:142
msgid " -z             make explicit holes"
msgstr " -z             hace agujeros explícitos"

#: disk-utils/mkfs.cramfs.c:143
msgid " dirname        root of the filesystem to be compressed"
msgstr " nombredir      raíz del sistema de ficheros que se va a comprimir"

#: disk-utils/mkfs.cramfs.c:144
msgid " outfile        output file"
msgstr " ficherosalida  fichero de salida"

#: disk-utils/mkfs.cramfs.c:162
#, c-format
msgid "readlink failed: %s"
msgstr "readlink falló: %s"

#: disk-utils/mkfs.cramfs.c:307
#, c-format
msgid "could not read directory %s"
msgstr "no se pudo leer el directorio %s"

#: disk-utils/mkfs.cramfs.c:442
msgid "filesystem too big.  Exiting."
msgstr "sistema de ficheros demasiado grande. Saliendo."

#: disk-utils/mkfs.cramfs.c:601
#, c-format
msgid "AIEEE: block \"compressed\" to > 2*blocklength (%ld)\n"
msgstr "YEPA: bloque \"comprimido\" a > 2*longituddelbloque (%ld)\n"

#: disk-utils/mkfs.cramfs.c:620
#, c-format
msgid "%6.2f%% (%+ld bytes)\t%s\n"
msgstr "%6.2f%% (%+ld bytes)\t%s\n"

#: disk-utils/mkfs.cramfs.c:665
#, c-format
msgid "cannot close file %s"
msgstr "no se puede cerrar el fichero %s"

#: disk-utils/mkfs.cramfs.c:742
msgid "invalid edition number argument"
msgstr "Argumento del número de edición no válido"

#: disk-utils/mkfs.cramfs.c:752
msgid "invalid endianness given; must be 'big', 'little', or 'host'"
msgstr "Se ha dado una endianness no válida; debe ser 'big', 'little', o 'host'"

#: disk-utils/mkfs.cramfs.c:817
#, c-format
msgid "warning: guestimate of required size (upper bound) is %lldMB, but maximum image size is %uMB.  We might die prematurely."
msgstr "atención: la estimación del tamaño requerido (cota superior) es %lldMB, pero el tamaño máximo de la imagen es %uMB. Podría abortarse prematuramente."

#: disk-utils/mkfs.cramfs.c:841
msgid "ROM image map"
msgstr "mapa de imagen ROM"

#: disk-utils/mkfs.cramfs.c:853
#, c-format
msgid "Including: %s\n"
msgstr "Incluyendo: %s\n"

#: disk-utils/mkfs.cramfs.c:859
#, c-format
msgid "Directory data: %zd bytes\n"
msgstr "Datos de directorios: %zd bytes\n"

#: disk-utils/mkfs.cramfs.c:867
#, c-format
msgid "Everything: %zd kilobytes\n"
msgstr "Todo: %zd kilobytes\n"

#: disk-utils/mkfs.cramfs.c:872
#, c-format
msgid "Super block: %zd bytes\n"
msgstr "Superbloque: %zd bytes\n"

#: disk-utils/mkfs.cramfs.c:879
#, c-format
msgid "CRC: %x\n"
msgstr "CRC: %x\n"

#: disk-utils/mkfs.cramfs.c:884
#, c-format
msgid "not enough space allocated for ROM image (%lld allocated, %zu used)"
msgstr "no hay suficiente espacio para la imagen ROM (asignado %lld, usado %zu)"

#: disk-utils/mkfs.cramfs.c:890
#, c-format
msgid "ROM image write failed (%zd %zd)"
msgstr "falló la escritura de la imagen ROM (%zd %zd)"

#: disk-utils/mkfs.cramfs.c:893
msgid "ROM image"
msgstr "imagen ROM"

#: disk-utils/mkfs.cramfs.c:902
#, c-format
msgid "warning: filenames truncated to %u bytes."
msgstr "atención: los nombres de ficheros se truncan a %u bytes."

#: disk-utils/mkfs.cramfs.c:904
msgid "warning: files were skipped due to errors."
msgstr "atención: se saltaron ficheros debido a errores."

#: disk-utils/mkfs.cramfs.c:906
#, c-format
msgid "warning: file sizes truncated to %luMB (minus 1 byte)."
msgstr "atención: los tamaños de los ficheros se truncan a %luMB (menos 1 byte)."

#: disk-utils/mkfs.cramfs.c:910
#, c-format
msgid "warning: uids truncated to %u bits.  (This may be a security concern.)"
msgstr ""
"atención: los uids se truncan a %u bits.  (Esto podría ser un problema\n"
"de seguridad.)"

#: disk-utils/mkfs.cramfs.c:913
#, c-format
msgid "warning: gids truncated to %u bits.  (This may be a security concern.)"
msgstr ""
"atención: los gids se truncan a %u bits. (Esto podría ser un problema\n"
"de seguridad)."

#: disk-utils/mkfs.cramfs.c:916
#, c-format
msgid ""
"WARNING: device numbers truncated to %u bits.  This almost certainly means\n"
"that some device files will be wrong."
msgstr ""
"ATENCIÓN: los números de dispositivo se truncan a %u bits. Esto\n"
"significa casi con certeza que algunos ficheros de dispositivos serán erróneos."

#: disk-utils/mkfs.minix.c:138
#, c-format
msgid " %s [options] /dev/name [blocks]\n"
msgstr " %s [opciones] /dev/nombre [bloques]\n"

#: disk-utils/mkfs.minix.c:140
msgid " -1                      use Minix version 1\n"
msgstr " -1                      utiliza la versión 1 de Minix\n"

#: disk-utils/mkfs.minix.c:141
msgid " -2, -v                  use Minix version 2\n"
msgstr " -2, -v                  utiliza la versión 2 de Minix\n"

#: disk-utils/mkfs.minix.c:142
msgid " -3                      use Minix version 3\n"
msgstr " -3                       utiliza la versión 3 de Minix\n"

#: disk-utils/mkfs.minix.c:143
msgid " -n, --namelength <num>  maximum length of filenames\n"
msgstr " -n, --namelength <núm.> longitud máxima de los nombres de fichero\n"

#: disk-utils/mkfs.minix.c:144
msgid " -i, --inodes <num>      number of inodes for the filesystem\n"
msgstr " -i, --inodes <número>   número de nodos-i para el sistema de ficheros\n"

#: disk-utils/mkfs.minix.c:145
msgid " -c, --check             check the device for bad blocks\n"
msgstr " -c, --check             comprueba si el dispositivo tiene bloques incorrectos\n"

#: disk-utils/mkfs.minix.c:146
msgid " -l, --badblocks <file>  list of bad blocks from file\n"
msgstr " -l, --badblocks <fich.> enumara los blocques incorrectos del fichero\n"

#: disk-utils/mkfs.minix.c:189
#, c-format
msgid "%s: seek to boot block failed  in write_tables"
msgstr "%s: rrror de búsqueda de bloque de inicio en write_tables"

#: disk-utils/mkfs.minix.c:192
#, c-format
msgid "%s: unable to clear boot sector"
msgstr "%s: no se puede borrar el sector de inicio"

#: disk-utils/mkfs.minix.c:194
#, c-format
msgid "%s: seek failed in write_tables"
msgstr "%s: error de búsqueda en write_tables"

#: disk-utils/mkfs.minix.c:197
#, c-format
msgid "%s: unable to write super-block"
msgstr "%s: no se puede escribir el superbloque"

#: disk-utils/mkfs.minix.c:200
#, c-format
msgid "%s: unable to write inode map"
msgstr "%s: no se puede escribir la tabla de nodos-i"

#: disk-utils/mkfs.minix.c:203
#, c-format
msgid "%s: unable to write zone map"
msgstr "%s: no se puede escribir la tabla de zonas"

#: disk-utils/mkfs.minix.c:206
#, c-format
msgid "%s: unable to write inodes"
msgstr "%s: no se pueden escribir los nodos-i"

#: disk-utils/mkfs.minix.c:211
#, c-format
msgid "%s: seek failed in write_block"
msgstr "%s: error de búsqueda en write_block"

#: disk-utils/mkfs.minix.c:214
#, c-format
msgid "%s: write failed in write_block"
msgstr "%s: error de escritura en write_block"

#: disk-utils/mkfs.minix.c:223 disk-utils/mkfs.minix.c:298
#: disk-utils/mkfs.minix.c:347
#, c-format
msgid "%s: too many bad blocks"
msgstr "%s: hay demasiados bloques incorrectos"

#: disk-utils/mkfs.minix.c:231
#, c-format
msgid "%s: not enough good blocks"
msgstr "%s: no hay suficientes bloques correctos"

#: disk-utils/mkfs.minix.c:546
#, c-format
msgid ""
"First data block at %jd, which is too far (max %d).\n"
"Try specifying fewer inodes by passing --inodes <num>"
msgstr ""
"El primer bloque de datos está en %jd, demasiado lejos (máx. %d).\n"
"Trate de especificar menos nodos-i mediante '--inodes <número>'."

#: disk-utils/mkfs.minix.c:566
#, c-format
msgid "%lu inode\n"
msgid_plural "%lu inodes\n"
msgstr[0] "%lu nodo-i\n"
msgstr[1] "%lu nodos-i\n"

#: disk-utils/mkfs.minix.c:567
#, c-format
msgid "%lu block\n"
msgid_plural "%lu blocks\n"
msgstr[0] "%lu bloque\n"
msgstr[1] "%lu bloques\n"

#: disk-utils/mkfs.minix.c:570
#, c-format
msgid "Zonesize=%zu\n"
msgstr "Tamaño de zona=%zu\n"

#: disk-utils/mkfs.minix.c:571
#, c-format
msgid ""
"Maxsize=%zu\n"
"\n"
msgstr ""
"Tamaño máximo=%zu\n"
"\n"

#: disk-utils/mkfs.minix.c:584
#, c-format
msgid "%s: seek failed during testing of blocks"
msgstr "%s: error de búsqueda durante comprobación de bloques"

#: disk-utils/mkfs.minix.c:591
#, c-format
msgid "Weird values in do_check: probably bugs\n"
msgstr "Valores extraños en do_check: probablemente existan errores\n"

#: disk-utils/mkfs.minix.c:624
#, c-format
msgid "%s: seek failed in check_blocks"
msgstr "%s: error de búsqueda en check_blocks"

#: disk-utils/mkfs.minix.c:634
#, c-format
msgid "%s: bad blocks before data-area: cannot make fs"
msgstr ""
"%s: bloques incorrectos antes del área de datos: no se puede crear\n"
"el sistema de ficheros"

#: disk-utils/mkfs.minix.c:641 disk-utils/mkfs.minix.c:665
#, c-format
msgid "%d bad block\n"
msgid_plural "%d bad blocks\n"
msgstr[0] "%d bloque incorrecto\n"
msgstr[1] "%d bloques incorrectos\n"

#: disk-utils/mkfs.minix.c:650
#, c-format
msgid "%s: can't open file of bad blocks"
msgstr "%s: no se puede abrir el fichero de bloques incorrectos"

#: disk-utils/mkfs.minix.c:655
#, c-format
msgid "badblock number input error on line %d\n"
msgstr "error de entrada en el número de bloques defectuosos en la línea %d\n"

#: disk-utils/mkfs.minix.c:656
#, c-format
msgid "%s: cannot read badblocks file"
msgstr "%s: No se puede leer el fichero de bloques incorrectos"

#: disk-utils/mkfs.minix.c:696
#, c-format
msgid "block size smaller than physical sector size of %s"
msgstr "tamaño de bloque menor que el tamaño de sector físico de %s"

#: disk-utils/mkfs.minix.c:699
#, c-format
msgid "cannot determine size of %s"
msgstr "no se puede determinar el tamaño de %s"

#: disk-utils/mkfs.minix.c:707
#, c-format
msgid "%s: requested blocks (%llu) exceeds available (%llu) blocks\n"
msgstr "%s: los bloques solicitados (%llu) superan los bloques disponibles (%llu)\n"

#: disk-utils/mkfs.minix.c:710
#, c-format
msgid "%s: number of blocks too small"
msgstr "%s: el número de bloques es demasiado pequeño"

#: disk-utils/mkfs.minix.c:725 disk-utils/mkfs.minix.c:731
#, c-format
msgid "unsupported name length: %d"
msgstr "longitud de nombre no soportada: %d"

#: disk-utils/mkfs.minix.c:734
#, c-format
msgid "unsupported minix file system version: %d"
msgstr "la versión del sistema de ficheros minix no está soportada: %d"

#: disk-utils/mkfs.minix.c:771
msgid "-v is ambiguous, use '-2' instead"
msgstr "-v es ambiguo; mejor utilice '-2'"

#: disk-utils/mkfs.minix.c:782
msgid "failed to parse maximum length of filenames"
msgstr "fallo al analizar la longitud máxima de los nombres de fichero"

#: disk-utils/mkfs.minix.c:786
msgid "failed to parse number of inodes"
msgstr "fallo al analizar el número de nodos-i"

#: disk-utils/mkfs.minix.c:809
msgid "failed to parse number of blocks"
msgstr "fallo al analizar el número de bloques"

#: disk-utils/mkfs.minix.c:817
#, c-format
msgid "%s is mounted; will not make a filesystem here!"
msgstr "%s está montado; no se creará un sistema de ficheros aquí"

#: disk-utils/mkswap.c:81
#, c-format
msgid "Bad user-specified page size %u"
msgstr "El tamaño de página %u especificado por el usuario es incorrecto"

#: disk-utils/mkswap.c:84
#, c-format
msgid "Using user-specified page size %d, instead of the system value %d"
msgstr "Se utiliza el tamaño de página %d especificado por el usuario, en lugar del valor del sistema %d"

#: disk-utils/mkswap.c:125
msgid "Label was truncated."
msgstr "La etiqueta se ha truncado."

#: disk-utils/mkswap.c:133
#, c-format
msgid "no label, "
msgstr "sin etiqueta, "

#: disk-utils/mkswap.c:141
#, c-format
msgid "no uuid\n"
msgstr "sin uuid\n"

#: disk-utils/mkswap.c:149
#, c-format
msgid ""
"\n"
"Usage:\n"
" %s [options] device [size]\n"
msgstr ""
"\n"
"Modo de empleo:\n"
" %s [opciones] dispositivo [tamaño]\n"

#: disk-utils/mkswap.c:154
msgid "Set up a Linux swap area.\n"
msgstr "Configura una zona de intercambio de Linux.\n"

#: disk-utils/mkswap.c:157
#, c-format
msgid ""
"\n"
"Options:\n"
" -c, --check               check bad blocks before creating the swap area\n"
" -f, --force               allow swap size area be larger than device\n"
" -p, --pagesize SIZE       specify page size in bytes\n"
" -L, --label LABEL         specify label\n"
" -v, --swapversion NUM     specify swap-space version number\n"
" -U, --uuid UUID           specify the uuid to use\n"
msgstr ""
"\n"
"Opciones:\n"
" -c, --check               comprueba los bloques erróneos antes de crear el área de intercambio\n"
" -f, --force               permite un tamaño de área de intercambio mayor que el dispositivo\n"
" -p, --pagesize TAMAÑO     especifica el tamaño de página en bytes\n"
" -L, --label ETIQUETA      especifica la etiqueta\n"
" -v, --swapversion NUM     especifica el número de versión del espacio de intercambio\n"
" -U, --uuid UUID           especifica el uuid que se va a utilizar\n"
"\n"

#: disk-utils/mkswap.c:166 disk-utils/sfdisk.c:2048
#, c-format
msgid "     --lock[=<mode>]       use exclusive device lock (%s, %s or %s)\n"
msgstr "     --lock[=<modo>]       utiliza bloqueo de dispositivo exclusivo (%s, %s o %s)\n"

#: disk-utils/mkswap.c:179
#, c-format
msgid "too many bad pages: %lu"
msgstr "Hay demasiadas páginas incorrectas: %lu"

#: disk-utils/mkswap.c:200
msgid "seek failed in check_blocks"
msgstr "Error de búsqueda en check_blocks"

#: disk-utils/mkswap.c:208
#, c-format
msgid "%lu bad page\n"
msgid_plural "%lu bad pages\n"
msgstr[0] "%lu página incorrecta\n"
msgstr[1] "%lu páginas incorrectas\n"

#: disk-utils/mkswap.c:233
msgid "unable to alloc new libblkid probe"
msgstr "no se puede asignar un nuevo sondeo libblkid"

#: disk-utils/mkswap.c:235
msgid "unable to assign device to libblkid probe"
msgstr "no se puede asignar dispositivo al sondeo libblkid"

#: disk-utils/mkswap.c:256
#, c-format
msgid "warning: checking bad blocks from swap file is not supported: %s"
msgstr "atención: no se dispone de la opción de comprobar bloques incorrectos en el fichero de intercambio: %s"

#: disk-utils/mkswap.c:272 disk-utils/mkswap.c:297 disk-utils/mkswap.c:344
msgid "unable to rewind swap-device"
msgstr "bo se puede rebobinar el dispositivo de intercambio"

#: disk-utils/mkswap.c:300
msgid "unable to erase bootbits sectors"
msgstr "no se pueden borrar los sectores de los bits de arranque"

#: disk-utils/mkswap.c:316
#, c-format
msgid "%s: warning: wiping old %s signature."
msgstr "%s: atención: se destruye la firma antigua %s."

#: disk-utils/mkswap.c:321
#, c-format
msgid "%s: warning: don't erase bootbits sectors"
msgstr "%s: atención: no borre los sectores de los bits de arranque inicio"

#: disk-utils/mkswap.c:324
#, c-format
msgid "        (%s partition table detected). "
msgstr "        (tabla de particiones %s detectada). "

#: disk-utils/mkswap.c:326
#, c-format
msgid "        (compiled without libblkid). "
msgstr "        (compilado sin libblkid). "

#: disk-utils/mkswap.c:327
#, c-format
msgid "Use -f to force.\n"
msgstr "Utilice -f para forzar.\n"

#: disk-utils/mkswap.c:349
#, c-format
msgid "%s: unable to write signature page"
msgstr "%s: no se puede escribir la página de firma"

#: disk-utils/mkswap.c:394
msgid "parsing page size failed"
msgstr "fallo al analizar el tamaño de página"

#: disk-utils/mkswap.c:400
msgid "parsing version number failed"
msgstr "error analizando el número de versión"

#: disk-utils/mkswap.c:403
#, c-format
msgid "swapspace version %d is not supported"
msgstr "no funciona la versión %d de espacio de intercambio"

#: disk-utils/mkswap.c:409
#, c-format
msgid "warning: ignoring -U (UUIDs are unsupported by %s)"
msgstr "atención: se ignora -U (%s no permite especificar UUIDs)"

#: disk-utils/mkswap.c:436
msgid "only one device argument is currently supported"
msgstr "actualmente solo se admite un argumento para el dispositivo"

#: disk-utils/mkswap.c:443
msgid "error: parsing UUID failed"
msgstr "error: fallo al analizar UUID"

#: disk-utils/mkswap.c:452
msgid "error: Nowhere to set up swap on?"
msgstr "error: ¿No se ha especificado dónde configurar el espacio de intercambio?"

#: disk-utils/mkswap.c:458
msgid "invalid block count argument"
msgstr "argumento de cuenta de bloques no válido"

#: disk-utils/mkswap.c:467
#, c-format
msgid "error: size %llu KiB is larger than device size %<PRIu64> KiB"
msgstr "error: el tamaño %llu KiB es mayor que el tamaño del dispositivo %<PRIu64> KiB"

#: disk-utils/mkswap.c:473
#, c-format
msgid "error: swap area needs to be at least %ld KiB"
msgstr "error: el área de intercambio debe tener como mínimo %ld KiB"

#: disk-utils/mkswap.c:478
#, c-format
msgid "warning: truncating swap area to %llu KiB"
msgstr "atención: el área de intercambio se trunca a %llu KiB"

#: disk-utils/mkswap.c:483
#, c-format
msgid "error: %s is mounted; will not make swapspace"
msgstr "error: %s está montado; no se creará el espacio de intercambio"

#: disk-utils/mkswap.c:490 sys-utils/swapon.c:528
#, c-format
msgid "%s: insecure permissions %04o, %04o suggested."
msgstr "%s: permisos %04o no seguros; se sugiere %04o."

#: disk-utils/mkswap.c:494 sys-utils/swapon.c:533
#, c-format
msgid "%s: insecure file owner %d, 0 (root) suggested."
msgstr "%s: el propietario %d del fichero no es seguro; se sugiero 0 (root)."

#: disk-utils/mkswap.c:509
msgid "Unable to set up swap-space: unreadable"
msgstr "No se puede configurar el espacio de intercambio: no se puede leer"

#: disk-utils/mkswap.c:514
#, c-format
msgid "Setting up swapspace version %d, size = %s (%<PRIu64> bytes)\n"
msgstr "Configurando espacio de intercambio versión %d, tamaño = %s (%<PRIu64> bytes)\n"

#: disk-utils/mkswap.c:534
#, c-format
msgid "%s: unable to obtain selinux file label"
msgstr "%s: no se puede obtener la etiqueta del fichero SELinux"

#: disk-utils/mkswap.c:537
msgid "unable to matchpathcon()"
msgstr "no se puede ejecutar matchpathcon()"

#: disk-utils/mkswap.c:540
msgid "unable to create new selinux context"
msgstr "no se puede crear un nuevo contexto SELinux"

#: disk-utils/mkswap.c:542
msgid "couldn't compute selinux context"
msgstr "no se pudo calcular el contexto SELinux"

#: disk-utils/mkswap.c:548
#, c-format
msgid "unable to relabel %s to %s"
msgstr "no se puede cambiar la etiqueta %s por %s"

#: disk-utils/partx.c:86
msgid "partition number"
msgstr "número de partición"

#: disk-utils/partx.c:87
msgid "start of the partition in sectors"
msgstr "comienzo de la partición en sectores"

#: disk-utils/partx.c:88
msgid "end of the partition in sectors"
msgstr "fin de la partición en sectores"

#: disk-utils/partx.c:89
msgid "number of sectors"
msgstr "número de sectores"

#: disk-utils/partx.c:90
msgid "human readable size"
msgstr "tamaño legible"

#: disk-utils/partx.c:91
msgid "partition name"
msgstr "nombre de la partición"

#: disk-utils/partx.c:92 misc-utils/findmnt.c:108 misc-utils/lsblk.c:176
msgid "partition UUID"
msgstr "UUID de la partición"

#: disk-utils/partx.c:93
msgid "partition table type (dos, gpt, ...)"
msgstr "tipo de tabla de particiones (dos, gpt, ...)"

#: disk-utils/partx.c:94 misc-utils/lsblk.c:177
msgid "partition flags"
msgstr "opciones de la partición"

#: disk-utils/partx.c:95
msgid "partition type (a string, a UUID, or hex)"
msgstr "tipo de partición (cadena, UUID o hexadecimal)"

#: disk-utils/partx.c:114 sys-utils/losetup.c:534 sys-utils/losetup.c:648
msgid "failed to initialize loopcxt"
msgstr "no se ha podido inicializar loopcxt"

#: disk-utils/partx.c:118
#, c-format
msgid "%s: failed to find unused loop device"
msgstr "%s: no se ha encontrado ningún dispositivo de bucle sin utilizar"

#: disk-utils/partx.c:122
#, c-format
msgid "Trying to use '%s' for the loop device\n"
msgstr "Se intentará utilizar '%s' como dispositivo de bucle\n"

#: disk-utils/partx.c:126
#, c-format
msgid "%s: failed to set backing file"
msgstr "%s: fallo al configurar el fichero subyacente"

#: disk-utils/partx.c:131 sys-utils/losetup.c:581
#, c-format
msgid "%s: failed to set up loop device"
msgstr "%s: error al configurar dispositivo de bucle"

#: disk-utils/partx.c:161 login-utils/lslogins.c:320 misc-utils/fincore.c:92
#: misc-utils/findmnt.c:376 misc-utils/lsblk.c:317 misc-utils/lslocks.c:344
#: misc-utils/uuidparse.c:125 misc-utils/wipefs.c:132 sys-utils/irq-common.c:70
#: sys-utils/losetup.c:112 sys-utils/lscpu.c:241 sys-utils/lscpu.c:256
#: sys-utils/lsipc.c:232 sys-utils/lsmem.c:178 sys-utils/lsns.c:225
#: sys-utils/prlimit.c:277 sys-utils/rfkill.c:159 sys-utils/swapon.c:150
#: sys-utils/wdctl.c:161 sys-utils/zramctl.c:147
#, c-format
msgid "unknown column: %s"
msgstr "columna desconocida: %s"

#: disk-utils/partx.c:209
#, c-format
msgid "%s: failed to get partition number"
msgstr "%s: fallo al obtener el número de partición"

#: disk-utils/partx.c:287 disk-utils/partx.c:325 disk-utils/partx.c:479
#, c-format
msgid "specified range <%d:%d> does not make sense"
msgstr "el rango especificado <%d:%d> no tiene sentido"

#: disk-utils/partx.c:291
#, c-format
msgid "range recount: max partno=%d, lower=%d, upper=%d\n"
msgstr "recuenta de rango: máx numpart=%d, inferior=%d, superior=%d\n"

#: disk-utils/partx.c:298
#, c-format
msgid "%s: error deleting partition %d"
msgstr "%s: error al borrar la partición %d"

#: disk-utils/partx.c:300
#, c-format
msgid "%s: error deleting partitions %d-%d"
msgstr "%s: error al borrar las particiones %d-%d"

#: disk-utils/partx.c:333
#, c-format
msgid "%s: partition #%d removed\n"
msgstr "%s: se ha borrado la partición nº %d\n"

#: disk-utils/partx.c:339
#, c-format
msgid "%s: partition #%d doesn't exist\n"
msgstr "%s: la partición nº %d no existe\n"

#: disk-utils/partx.c:344
#, c-format
msgid "%s: deleting partition #%d failed"
msgstr "%s: el borrado de la partición nº %d ha fallado"

#: disk-utils/partx.c:364
#, c-format
msgid "%s: error adding partition %d"
msgstr "%s: error al añadir la partición %d"

#: disk-utils/partx.c:366
#, c-format
msgid "%s: error adding partitions %d-%d"
msgstr "%s: error al añadir las particiones %d-%d"

#: disk-utils/partx.c:407 disk-utils/partx.c:515
#, c-format
msgid "%s: partition #%d added\n"
msgstr "%s: se ha añadido la partición nº %d\n"

#: disk-utils/partx.c:412
#, c-format
msgid "%s: adding partition #%d failed"
msgstr "%s: fallo al añadir la partición nº %d"

#: disk-utils/partx.c:447
#, c-format
msgid "%s: error updating partition %d"
msgstr "%s: error al actualizar la  partición %d"

#: disk-utils/partx.c:449
#, c-format
msgid "%s: error updating partitions %d-%d"
msgstr "%s: error al actualizar las particiones %d-%d"

#: disk-utils/partx.c:488
#, c-format
msgid "%s: no partition #%d"
msgstr "%s: no existe la partición nº %d"

#: disk-utils/partx.c:509
#, c-format
msgid "%s: partition #%d resized\n"
msgstr "%s: se ha cambiado el tamaño de la partición nº %d\n"

#: disk-utils/partx.c:523
#, c-format
msgid "%s: updating partition #%d failed"
msgstr "%s: fallo al actualizar la partición nº %d"

#: disk-utils/partx.c:564
#, c-format
msgid "#%2d: %9ju-%9ju (%9ju sector, %6ju MB)\n"
msgid_plural "#%2d: %9ju-%9ju (%9ju sectors, %6ju MB)\n"
msgstr[0] "nº %2d: %9ju-%9ju (%9ju sector, %6ju MB)\n"
msgstr[1] "nº %2d: %9ju-%9ju (%9ju sectores, %6ju MB)\n"

#: disk-utils/partx.c:680 misc-utils/fincore.c:370 misc-utils/findmnt.c:1662
#: misc-utils/lsblk.c:2122 misc-utils/lslocks.c:471 sys-utils/losetup.c:339
#: sys-utils/lscpu.c:1683 sys-utils/lscpu.c:1911 sys-utils/prlimit.c:306
#: sys-utils/rfkill.c:471 sys-utils/swapon.c:292 sys-utils/wdctl.c:310
msgid "failed to allocate output column"
msgstr "no se ha podido reservar la columna de salida"

#: disk-utils/partx.c:724
#, c-format
msgid "failed to initialize blkid filter for '%s'"
msgstr "no se ha podido inicializar el filtro blkid para '%s'"

#: disk-utils/partx.c:732
#, c-format
msgid "%s: failed to read partition table"
msgstr "%s: no se ha podido leer la tabla de particiones"

#: disk-utils/partx.c:738
#, c-format
msgid "%s: partition table type '%s' detected\n"
msgstr "%s: se ha detectado una tabla de particiones de tipo '%s'\n"

#: disk-utils/partx.c:742
#, c-format
msgid "%s: partition table with no partitions"
msgstr "%s: tabla de particiones sin ninguna partición"

#: disk-utils/partx.c:755
#, c-format
msgid " %s [-a|-d|-s|-u] [--nr <n:m> | <partition>] <disk>\n"
msgstr " %s [-a|-d|-s|-u] [--nr <n:m> | <partición>] <disco>\n"

#: disk-utils/partx.c:759
msgid "Tell the kernel about the presence and numbering of partitions.\n"
msgstr "Informa al núcleo de la presencia de particiones y de su numeración.\n"

#: disk-utils/partx.c:762
msgid " -a, --add            add specified partitions or all of them\n"
msgstr " -a, --add            añade las particiones especificadas o todas ellas\n"

#: disk-utils/partx.c:763
msgid " -d, --delete         delete specified partitions or all of them\n"
msgstr " -d, --delete        borra las particiones especificadas o todas ellas\n"

#: disk-utils/partx.c:764
msgid " -u, --update         update specified partitions or all of them\n"
msgstr " -u, --update         actualiza las particiones especificadas o todas ellas\n"

#: disk-utils/partx.c:765
msgid ""
" -s, --show           list partitions\n"
"\n"
msgstr ""
" -s, --show           muestra la lista de particiones\n"
"\n"

#: disk-utils/partx.c:766 misc-utils/lsblk.c:1780 sys-utils/lsmem.c:515
msgid " -b, --bytes          print SIZE in bytes rather than in human readable format\n"
msgstr " -b, --btyes          muestra el TAMAÑO en bytes en lugar de hacerlo en formato legible para humanos\n"

#: disk-utils/partx.c:767
msgid " -g, --noheadings     don't print headings for --show\n"
msgstr " -g, --noheadings     no imprime las cabeceras correspondientes a --show\n"

#: disk-utils/partx.c:768
msgid " -n, --nr <n:m>       specify the range of partitions (e.g. --nr 2:4)\n"
msgstr " -n, --nr <n:n>       especifica un rango de particiones (e.g. --nr 2:4)\n"

#: disk-utils/partx.c:769 sys-utils/irqtop.c:224 sys-utils/lsirq.c:66
msgid " -o, --output <list>  define which output columns to use\n"
msgstr " -o, --output <lista> define que columnas de salida utilizar\n"

#: disk-utils/partx.c:770 sys-utils/lsmem.c:518
msgid "     --output-all     output all columns\n"
msgstr "     --output-all     saca todas las columnas\n"

#: disk-utils/partx.c:771 misc-utils/lsblk.c:1776 sys-utils/lsirq.c:64
#: sys-utils/lsmem.c:513
msgid " -P, --pairs          use key=\"value\" output format\n"
msgstr " -P, --paris          utiliza el formato de salida clave=\"valor\"\n"

#: disk-utils/partx.c:772 misc-utils/lsblk.c:1791 sys-utils/lsmem.c:519
msgid " -r, --raw            use raw output format\n"
msgstr " -r, --raw            utiliza el formato de salida en bruto\n"

#: disk-utils/partx.c:773
msgid " -S, --sector-size <num>  overwrite sector size\n"
msgstr " -S, --sector-size <num>  sobreescribe el tamaño de sector\n"

#: disk-utils/partx.c:774
msgid " -t, --type <type>    specify the partition type\n"
msgstr " -t, --type <tipo>    especifica el tipo de partición\n"

#: disk-utils/partx.c:775
msgid "     --list-types     list supported partition types and exit\n"
msgstr "     --list-types     enumera los tipos de partición permitidos y termina\n"

#: disk-utils/partx.c:776 sys-utils/fallocate.c:101
msgid " -v, --verbose        verbose mode\n"
msgstr " -v, --verbose        modo expresivo\n"

#: disk-utils/partx.c:861
msgid "failed to parse --nr <M-N> range"
msgstr "no se ha podido analizar el rango --nr <n:n>"

#: disk-utils/partx.c:950
msgid "partition and disk name do not match"
msgstr "los nombres de la partición y del disco no concuerdan"

#: disk-utils/partx.c:979
msgid "--nr and <partition> are mutually exclusive"
msgstr "--nr y <partición> son mutuamente excluyentes"

#: disk-utils/partx.c:998
#, c-format
msgid "partition: %s, disk: %s, lower: %d, upper: %d\n"
msgstr "partición: %s, disco: %s, inferior: %d, superior: %d\n"

#: disk-utils/partx.c:1010
#, c-format
msgid "%s: cannot delete partitions"
msgstr "%s: no se pueden borrar las particiones"

#: disk-utils/partx.c:1013
#, c-format
msgid "%s: partitioned loop devices unsupported"
msgstr "%s: los dispositivos de bucle particionados no se admiten"

#: disk-utils/partx.c:1030
#, c-format
msgid "%s: failed to initialize blkid prober"
msgstr "%s: no se ha podido inicializar el sondeo blkid"

#: disk-utils/raw.c:50
#, c-format
msgid ""
" %1$s %2$srawN <major> <minor>\n"
" %1$s %2$srawN /dev/<blockdevice>\n"
" %1$s -q %2$srawN\n"
" %1$s -qa\n"
msgstr ""
" %1$s %2$srawN <mayor> <menor>\n"
" %1$s %2$srawN /dev/<dispobloque>\n"
" %1$s -q %2$srawN\n"
" %1$s -qa\n"

#: disk-utils/raw.c:57
msgid "Bind a raw character device to a block device.\n"
msgstr "Vincula un dispositivo de caracteres en bruto a un dispositivo de bloques.\n"

#: disk-utils/raw.c:60
msgid " -q, --query    set query mode\n"
msgstr " -q, --query    establece modo de consulta\n"

#: disk-utils/raw.c:61
msgid " -a, --all      query all raw devices\n"
msgstr " -a, --all      consulta todos los dispositivos en bruto\n"

#: disk-utils/raw.c:166
#, c-format
msgid "Device '%s' is the control raw device (use raw<N> where <N> is greater than zero)"
msgstr "El dispositivo '%s' es el dispositivo de control en bruto (utilice raw<N> con <N> mayor que cero)"

#: disk-utils/raw.c:183
#, c-format
msgid "Cannot locate block device '%s'"
msgstr "No se puede localizar el dispositivo de bloques '%s'"

#: disk-utils/raw.c:186
#, c-format
msgid "Device '%s' is not a block device"
msgstr "El dispositivo '%s' no es un dispositivo de bloques"

#: disk-utils/raw.c:195 disk-utils/raw.c:198 sys-utils/ipcrm.c:352
#: sys-utils/ipcrm.c:366 sys-utils/ipcrm.c:380
msgid "failed to parse argument"
msgstr "no se ha podido analizar el argumento"

#: disk-utils/raw.c:216
#, c-format
msgid "Cannot open master raw device '%s'"
msgstr "No se puede abrir el dispositivo en bruto maestro '%s'"

#: disk-utils/raw.c:231
#, c-format
msgid "Cannot locate raw device '%s'"
msgstr "No se puede localizar el dispositivo en bruto '%s'"

#: disk-utils/raw.c:234
#, c-format
msgid "Raw device '%s' is not a character dev"
msgstr "El dispositivo '%s' no es un dispositivo de caracteres"

#: disk-utils/raw.c:238
#, c-format
msgid "Device '%s' is not a raw dev"
msgstr "El dispositivo '%s' no es un dispositivo en bruto"

#: disk-utils/raw.c:248
msgid "Error querying raw device"
msgstr "Error de consulta del dispositivo en bruto"

#: disk-utils/raw.c:257 disk-utils/raw.c:272
#, c-format
msgid "%sraw%d:  bound to major %d, minor %d\n"
msgstr "%sraw%d:  vinculado al núm. mayor %d, núm. menor %d\n"

#: disk-utils/raw.c:271
msgid "Error setting raw device"
msgstr "Error al configurar el dispositivo en bruto"

#: disk-utils/resizepart.c:20
#, c-format
msgid " %s <disk device> <partition number> <length>\n"
msgstr " %s <dispositivo de tipo disco> <número de partición> <longitud>\n"

#: disk-utils/resizepart.c:24
msgid "Tell the kernel about the new size of a partition.\n"
msgstr "Informa al núcleo del nuevo tamaño de una partición.\n"

#: disk-utils/resizepart.c:107
#, c-format
msgid "%s: failed to get start of the partition number %s"
msgstr "%s: no se ha podido obtener el comienzo del número de partición %s"

#: disk-utils/resizepart.c:112
msgid "failed to resize partition"
msgstr "no se ha podido cambair el tamaño de la partición"

#: disk-utils/sfdisk.c:239
msgid "failed to allocate nested libfdisk context"
msgstr "fallo al reservar contexto anidado de libfdisk"

#: disk-utils/sfdisk.c:299
#, c-format
msgid "cannot seek %s"
msgstr "no se puede efectuar `seek' %s"

#: disk-utils/sfdisk.c:310 libfdisk/src/bsd.c:724 libfdisk/src/bsd.c:905
#: term-utils/script.c:461
#, c-format
msgid "cannot write %s"
msgstr "no se puede escribir %s"

#: disk-utils/sfdisk.c:317
#, c-format
msgid "%12s (offset %5ju, size %5ju): %s"
msgstr "%12s (desplazamiento %5ju, tamaño %5ju): %s"

#: disk-utils/sfdisk.c:323
#, c-format
msgid "%s: failed to create a backup"
msgstr "%s: no se ha podido crear respaldo"

#: disk-utils/sfdisk.c:336
msgid "failed to create a backup file, $HOME undefined"
msgstr "no se ha podido crear un fichero de respaldo; $HOME queda sin definir"

#: disk-utils/sfdisk.c:362
msgid "Backup files:"
msgstr "Ficheros de respaldo:"

#: disk-utils/sfdisk.c:408
msgid "failed to read new partition from device; ignoring --move-data"
msgstr "no se ha podido leer la nueva partición del dispositivo; se ignora --move-data"

#: disk-utils/sfdisk.c:410
msgid "failed to get size of the new partition; ignoring --move-data"
msgstr "no se ha podido obtener el tamaño de la nueva partición; se ignora --move-data"

#: disk-utils/sfdisk.c:412
msgid "failed to get start of the new partition; ignoring --move-data"
msgstr "no se ha podido obtener el comienzo de la nueva partición; se ignora --move-data"

#: disk-utils/sfdisk.c:414
msgid "failed to get size of the old partition; ignoring --move-data"
msgstr "no se ha podido obtener el tamaño de la antigua partición; se ignora --move-data"

#: disk-utils/sfdisk.c:416
msgid "failed to get start of the old partition; ignoring --move-data"
msgstr "no se ha podido obtener el comienzo de la antigua partición; se ignora --move-data"

#: disk-utils/sfdisk.c:418
msgid "start of the partition has not been moved; ignoring --move-data"
msgstr "no se ha movido el comienzo de la partición; se ignora --move-data"

#: disk-utils/sfdisk.c:420
msgid "new partition is smaller than original; ignoring --move-data"
msgstr "la nueva partición es más pequeña que la original; se ignora --move-data"

#: disk-utils/sfdisk.c:471
msgid "Data move: (--no-act)"
msgstr "Movimiento de datos: (--no-act)"

#: disk-utils/sfdisk.c:471
msgid "Data move:"
msgstr "Movimiento de datos:"

#: disk-utils/sfdisk.c:474
#, c-format
msgid " typescript file: %s"
msgstr " fichero de transcripción: %s"

#: disk-utils/sfdisk.c:475
#, c-format
msgid "  start sector: (from/to) %ju / %ju\n"
msgstr "  sector inicial: (desde/hasta) %ju / %ju\n"

#: disk-utils/sfdisk.c:476
#, c-format
msgid "  sectors: %ju\n"
msgstr "  sectores: %ju\n"

#: disk-utils/sfdisk.c:477
#, c-format
msgid "  step size: %zu bytes\n"
msgstr "  tamaño del paso: %zu bytes\n"

#: disk-utils/sfdisk.c:487
msgid "Do you want to move partition data?"
msgstr "¿Desea mover los datos de la partición?"

#: disk-utils/sfdisk.c:489 disk-utils/sfdisk.c:1975
msgid "Leaving."
msgstr "Saliendo."

#: disk-utils/sfdisk.c:549
#, c-format
msgid "cannot read at offset: %zu; continue"
msgstr "no se puede leer en el desplazamiento: %zu; continuar"

#: disk-utils/sfdisk.c:560
#, c-format
msgid "cannot write at offset: %zu; continue"
msgstr "no se puede escribir en el desplazamiento: %zu; continuar"

#: disk-utils/sfdisk.c:589
#, c-format
msgid "Moved %ju from %ju sectors (%.3f%%, %.1f MiB/s)."
msgstr "Movidos %ju de %ju sectores (%.3f%%, %.1f MiB/s)."

#: disk-utils/sfdisk.c:594
#, c-format
msgid "Moved %ju from %ju sectors (%.3f%%)."
msgstr "Movidos %ju de %ju sectores (%.3f%%)."

#: disk-utils/sfdisk.c:612
#, c-format
msgid "Moved %ju from %ju sectors (%.0f%%)."
msgstr "Movidos %ju de %ju sectores (%.0f%%)."

#: disk-utils/sfdisk.c:626
msgid "Your data has not been moved (--no-act)."
msgstr "No se han movido los datos (--no-act)."

#: disk-utils/sfdisk.c:628
#, c-format
msgid "%zu I/O errors detected!"
msgstr "¡%zu errores de E/S detectados!"

#: disk-utils/sfdisk.c:631
#, c-format
msgid "%s: failed to move data"
msgstr "%s: no se han podido poner los datos"

#: disk-utils/sfdisk.c:641
msgid "The partition table is unchanged (--no-act)."
msgstr "La tabla de particiones permanece sin cambios (--no-act)."

#: disk-utils/sfdisk.c:649
msgid ""
"\n"
"The partition table has been altered."
msgstr ""
"\n"
"Se ha modificado la tabla de particiones."

#: disk-utils/sfdisk.c:724
#, c-format
msgid "unsupported label '%s'"
msgstr "etiqueta de disco no soportada '%s'"

#: disk-utils/sfdisk.c:727
msgid ""
"Id  Name\n"
"\n"
msgstr ""
"Id  Nombre\n"
"\n"

#: disk-utils/sfdisk.c:754
msgid "unrecognized partition table type"
msgstr "tipo de tabla de particiones no reconocido"

#: disk-utils/sfdisk.c:807
#, c-format
msgid "Cannot get size of %s"
msgstr "No se puede obtener el tamaño de %s"

#: disk-utils/sfdisk.c:844
#, c-format
msgid "total: %ju blocks\n"
msgstr "total: %ju bloques\n"

#: disk-utils/sfdisk.c:903 disk-utils/sfdisk.c:981 disk-utils/sfdisk.c:1018
#: disk-utils/sfdisk.c:1043 disk-utils/sfdisk.c:1113 disk-utils/sfdisk.c:1180
#: disk-utils/sfdisk.c:1235 disk-utils/sfdisk.c:1291 disk-utils/sfdisk.c:1344
#: disk-utils/sfdisk.c:1382 disk-utils/sfdisk.c:1718
msgid "no disk device specified"
msgstr "no se ha especificado ningún dispositivo de disco"

#: disk-utils/sfdisk.c:913
msgid "toggle boot flags is unsupported for Hybrid GPT/MBR"
msgstr "cambiar los indicadores de arranque no puede hacerse para GPT/MBR híbrido"

#: disk-utils/sfdisk.c:918
msgid "cannot switch to PMBR"
msgstr "no se puede cambiar a PMBR"

#: disk-utils/sfdisk.c:919
msgid "Activation is unsupported for GPT -- entering nested PMBR."
msgstr "La activación no puede hacerse para GPT -- se entra en PMBR anidado."

#: disk-utils/sfdisk.c:922
msgid "toggle boot flags is supported for MBR or PMBR only"
msgstr "cambiar los indicadores de arranque solo puede hacerse para MBR o PMBR"

#: disk-utils/sfdisk.c:954 disk-utils/sfdisk.c:997 disk-utils/sfdisk.c:1118
#: disk-utils/sfdisk.c:1185 disk-utils/sfdisk.c:1240 disk-utils/sfdisk.c:1296
#: disk-utils/sfdisk.c:1716 disk-utils/sfdisk.c:2240
msgid "failed to parse partition number"
msgstr "fallo al analizar el número de partición"

#: disk-utils/sfdisk.c:959
#, c-format
msgid "%s: partition %d: failed to toggle bootable flag"
msgstr "%s: partición %d: no se ha podido cambiar el indicador de arrancable"

#: disk-utils/sfdisk.c:992 disk-utils/sfdisk.c:1000
#, c-format
msgid "%s: partition %zu: failed to delete"
msgstr "%s: partición %zu: no se ha podido borrar"

#: disk-utils/sfdisk.c:1048
#, c-format
msgid "%s: does not contain a recognized partition table"
msgstr "%s: no contiene una tabla de particiones reconocida."

#: disk-utils/sfdisk.c:1052
msgid "failed to allocate dump struct"
msgstr "no se ha podido reservar la estructura de volcado"

#: disk-utils/sfdisk.c:1056
#, c-format
msgid "%s: failed to dump partition table"
msgstr "%s: no se ha podido volcar la tabla de particiones"

#: disk-utils/sfdisk.c:1091
#, c-format
msgid "%s: no partition table found"
msgstr "%s: no se ha encontrado ninguna tabla de particiones"

#: disk-utils/sfdisk.c:1095
#, c-format
msgid "%s: partition %zu: partition table contains only %zu partitions"
msgstr "%s: partición %zu: la tabla de particiones solo contiene %zu particiones."

#: disk-utils/sfdisk.c:1098
#, c-format
msgid "%s: partition %zu: partition is unused"
msgstr "%s: partición %zu: la partición no se está usando"

#: disk-utils/sfdisk.c:1117 disk-utils/sfdisk.c:1184 disk-utils/sfdisk.c:1239
#: disk-utils/sfdisk.c:1295
msgid "no partition number specified"
msgstr "número de partición no especificado"

#: disk-utils/sfdisk.c:1123 disk-utils/sfdisk.c:1190 disk-utils/sfdisk.c:1245
#: disk-utils/sfdisk.c:1301 disk-utils/sfdisk.c:1350 disk-utils/sfdisk.c:1384
#: sys-utils/losetup.c:778
msgid "unexpected arguments"
msgstr "argumentos inesperados"

#: disk-utils/sfdisk.c:1138
#, c-format
msgid "%s: partition %zu: failed to get partition type"
msgstr "%s: partición %zu: fallo al obtener el tipo de partición"

#: disk-utils/sfdisk.c:1160
#, c-format
msgid "failed to parse %s partition type '%s'"
msgstr "fallo al analizar el tipo de la partición %s '%s'"

#: disk-utils/sfdisk.c:1164
#, c-format
msgid "%s: partition %zu: failed to set partition type"
msgstr "%s: partición %zu: fallo al configurar el tipo de partición"

#: disk-utils/sfdisk.c:1202
#, c-format
msgid "%s: partition %zu: failed to get partition UUID"
msgstr "%s: partición %zu: fallo al obtener el UUID de la partición"

#: disk-utils/sfdisk.c:1215 disk-utils/sfdisk.c:1270 disk-utils/sfdisk.c:1324
msgid "failed to allocate partition object"
msgstr "fallo al reservar el objeto de la partición"

#: disk-utils/sfdisk.c:1219
#, c-format
msgid "%s: partition %zu: failed to set partition UUID"
msgstr "%s: partición %zu: fallo al configurar el UUID de la partición"

#: disk-utils/sfdisk.c:1257
#, c-format
msgid "%s: partition %zu: failed to get partition name"
msgstr "%s: partición %zu: fallo al obtener el nombre de la partición"

#: disk-utils/sfdisk.c:1274
#, c-format
msgid "%s: partition %zu: failed to set partition name"
msgstr "%s: partición %zu: fallo al configurar el nombre de la partición"

#: disk-utils/sfdisk.c:1328
#, c-format
msgid "%s: partition %zu: failed to set partition attributes"
msgstr "%s: partición %zu: fallo al configurar los atributos de la partición"

#: disk-utils/sfdisk.c:1365
#, c-format
msgid "%s: failed to set disklabel ID"
msgstr "%s: fallo al establecer el ID de la etiqueta del disco"

#: disk-utils/sfdisk.c:1380
msgid "no relocate operation specified"
msgstr "no se ha especificado ninguna operación de reubicación"

#: disk-utils/sfdisk.c:1394
msgid "unsupported relocation operation"
msgstr "operación de reubicación desconocida"

#: disk-utils/sfdisk.c:1439
msgid " Commands:\n"
msgstr " Órdenes:\n"

#: disk-utils/sfdisk.c:1441
msgid "   write    write table to disk and exit\n"
msgstr "   write    escribe la tabla en el disco y sale\n"

#: disk-utils/sfdisk.c:1442
msgid "   quit     show new situation and wait for user's feedback before write\n"
msgstr ""
"   quit     muestra la nueva situación y espera la respuesta del usuario\n"
"            antes de escribir\n"

#: disk-utils/sfdisk.c:1443
msgid "   abort    exit sfdisk shell\n"
msgstr "   abort    sale de la «shell» de sfdisk\n"

#: disk-utils/sfdisk.c:1444
msgid "   print    display the partition table\n"
msgstr "   print    muestra la tabla de particiones\n"

#: disk-utils/sfdisk.c:1445
msgid "   help     show this help text\n"
msgstr "   help     muestra este texto de ayuda\n"

#: disk-utils/sfdisk.c:1447
msgid "   Ctrl-D   the same as 'quit'\n"
msgstr "   Ctrl-D   igual que 'quit'\n"

#: disk-utils/sfdisk.c:1451
msgid " Input format:\n"
msgstr " Formato de entrada:\n"

#: disk-utils/sfdisk.c:1453
msgid "   <start>, <size>, <type>, <bootable>\n"
msgstr "   <comienzo>, <tamaño>, <tipo>, <arrancable>\n"

#: disk-utils/sfdisk.c:1456
msgid ""
"   <start>  Beginning of the partition in sectors, or bytes if\n"
"            specified in the format <number>{K,M,G,T,P,E,Z,Y}.\n"
"            The default is the first free space.\n"
msgstr ""
"   <comienzo> Comienzo de la partición en sectores, o en bytes si\n"
"            se especifica en el formato <número>{K,M,G,T,P,E,Z,Y}.\n"
"            Lo predeterminado es el primer espacio disponible.\n"

#: disk-utils/sfdisk.c:1461
msgid ""
"   <size>   Size of the partition in sectors, or bytes if\n"
"            specified in the format <number>{K,M,G,T,P,E,Z,Y}.\n"
"            The default is all available space.\n"
msgstr ""
"   <tamaño> Tamaño de la partición en sectores, o en bytes si\n"
"            se especifica en el formato <número>{K,M,G,T,P,E,Z,Y}.\n"
"            Lo predeterminado es todo el espacio disponible.\n"

#: disk-utils/sfdisk.c:1466
msgid "   <type>   The partition type.  Default is a Linux data partition.\n"
msgstr "   <tipo>   El tipo de partición.  El predeterminado es partición de datos de Linux.\n"

#: disk-utils/sfdisk.c:1467
msgid "            MBR: hex or L,S,Ex,X,U,R,V shortcuts.\n"
msgstr "            MBR: hexa o métodos abreviados L,S,Ex,X,U,R,V.\n"

#: disk-utils/sfdisk.c:1468
msgid "            GPT: UUID or L,S,H,U,R,V shortcuts.\n"
msgstr "            GPT: UUID o métodos abreviados L,S,H,U,R,V.\n"

#: disk-utils/sfdisk.c:1471
msgid "   <bootable>  Use '*' to mark an MBR partition as bootable.\n"
msgstr "   <arrancable> Utilícese '*' para indicar que la partición del MBR es arrancable.\n"

#: disk-utils/sfdisk.c:1475
msgid " Example:\n"
msgstr " Ejemplo:\n"

#: disk-utils/sfdisk.c:1477
msgid "   , 4G     Creates a 4GiB partition at default start offset.\n"
msgstr "   , 4G     Crea una partición 4GiB a partir de la posición predeterminada.\n"

#: disk-utils/sfdisk.c:1509 sys-utils/dmesg.c:1578
msgid "unsupported command"
msgstr "orden no admitida"

#: disk-utils/sfdisk.c:1511
#, c-format
msgid "line %d: unsupported command"
msgstr "línea %d: orden no admitida"

#: disk-utils/sfdisk.c:1630
#, c-format
msgid "The device contains '%s' signature and it will be removed by a write command. See sfdisk(8) man page and --wipe option for more details."
msgstr "El dispositivo contiene una firma de '%s' y se borrará mediante una orden de escritura. Véase la página de manual de sfdisk(8) y la opción --wipe para más información."

#: disk-utils/sfdisk.c:1637
#, c-format
msgid "The device contains '%s' signature and it may remain on the device. It is recommended to wipe the device with wipefs(8) or sfdisk --wipe, in order to avoid possible collisions."
msgstr "El dispositivo contiene firma '%s' y podría permanecer en el dispositivo. Se recomienda encarecidamente limpiar el dispositivo mediante wipefs(8) o sfdisk --wipe, a fin de evitar posibles colisiones."

#: disk-utils/sfdisk.c:1685
msgid "failed to allocate partition name"
msgstr "fallo al reservar el nombre de la partición"

#: disk-utils/sfdisk.c:1724
msgid "failed to allocate script handler"
msgstr "fallo al asignar el manejador del script"

#: disk-utils/sfdisk.c:1740
#, c-format
msgid "%s: cannot modify partition %d: no partition table was found"
msgstr "%s: no se ha podido modificar la partición %d: no se ha encontrado una tabla de particiones"

#: disk-utils/sfdisk.c:1745
#, c-format
msgid "%s: cannot modify partition %d: partition table contains only %zu partitions"
msgstr "%s: no se puede modificar la partición %d: la tabla de particiones solo contiene %zu particiones"

#: disk-utils/sfdisk.c:1751
#, c-format
msgid "warning: %s: partition %d is not defined yet"
msgstr "atención: %s: la partición %d no se ha definido todavía"

#: disk-utils/sfdisk.c:1769
#, c-format
msgid ""
"\n"
"Welcome to sfdisk (%s)."
msgstr ""
"\n"
"Bienvenido a sfdisk (%s)."

#: disk-utils/sfdisk.c:1777
msgid "Checking that no-one is using this disk right now ..."
msgstr "Comprobando que nadie esté utilizando este disco en este momento..."

#: disk-utils/sfdisk.c:1780
msgid ""
" FAILED\n"
"\n"
msgstr ""
" FALLO\n"
"\n"

#: disk-utils/sfdisk.c:1783
msgid ""
"This disk is currently in use - repartitioning is probably a bad idea.\n"
"Umount all file systems, and swapoff all swap partitions on this disk.\n"
"Use the --no-reread flag to suppress this check.\n"
msgstr ""
"Este disco está actualmente en uso - no se aconseja volver a crear particiones.\n"
"Desmonte todos los sistemas de ficheros y deshaga todas las particiones de\n"
"intercambio de este disco. Utilice el indicador --no-reread para eliminar esta comprobación.\n"

#: disk-utils/sfdisk.c:1788
msgid "Use the --force flag to overrule all checks."
msgstr "Utilice el indicador --force para eludir todas las comprobaciones."

#: disk-utils/sfdisk.c:1790
msgid ""
" OK\n"
"\n"
msgstr ""
" Correcto\n"
"\n"

#: disk-utils/sfdisk.c:1799
msgid ""
"\n"
"Old situation:"
msgstr ""
"\n"
"Situación anterior:"

#: disk-utils/sfdisk.c:1812
msgid "failed to set script header"
msgstr "fallo al poner la cabecera del script"

#: disk-utils/sfdisk.c:1817
#, c-format
msgid ""
"\n"
"sfdisk is going to create a new '%s' disk label.\n"
"Use 'label: <name>' before you define a first partition\n"
"to override the default."
msgstr ""
"\n"
"sfdisk va a crear una etiqueta de disco nueva '%s'.\n"
"Utilice 'label: <nombre>' antes de definir una primera\n"
"partición para anular la predeterminada."

#: disk-utils/sfdisk.c:1820
msgid ""
"\n"
"Type 'help' to get more information.\n"
msgstr ""
"\n"
"Teclee 'help' para obtener más información.\n"

#: disk-utils/sfdisk.c:1838
msgid "All partitions used."
msgstr "Todas las particiones utilizadas."

#: disk-utils/sfdisk.c:1858
#, c-format
msgid "Unknown script header '%s' -- ignore."
msgstr ""

#: disk-utils/sfdisk.c:1874
msgid "Done.\n"
msgstr "Hecho.\n"

#: disk-utils/sfdisk.c:1886
msgid "Ignoring partition."
msgstr "Se desestima la partición."

#: disk-utils/sfdisk.c:1895 disk-utils/sfdisk.c:1956
msgid "Failed to apply script headers, disk label not created."
msgstr "No se han podido aplicar las cabeceras del script; no se ha creado la etiqueta del disco."

#: disk-utils/sfdisk.c:1916
#, c-format
msgid "Failed to add #%d partition"
msgstr "Fallo al añadir la partición #%d"

#: disk-utils/sfdisk.c:1939
msgid "Script header accepted."
msgstr "Cabecera del script aceptada."

#: disk-utils/sfdisk.c:1963
msgid ""
"\n"
"New situation:"
msgstr ""
"\n"
"Situación nueva:"

#: disk-utils/sfdisk.c:1973
msgid "Do you want to write this to disk?"
msgstr "¿Desea escribir esta información en el disco?"

#: disk-utils/sfdisk.c:1986
msgid "Leaving.\n"
msgstr "Saliendo.\n"

#: disk-utils/sfdisk.c:2001
#, c-format
msgid ""
" %1$s [options] <dev> [[-N] <part>]\n"
" %1$s [options] <command>\n"
msgstr ""
" %1$s [opciones] <dispo> [[-N] <part>]\n"
" %1$s [opciones] <orden>\n"

#: disk-utils/sfdisk.c:2008
msgid " -A, --activate <dev> [<part> ...] list or set bootable (P)MBR partitions\n"
msgstr " -A, --activate <dispo> [<part> ...] saca una lista o configura como arrancables las particiones de (P)MBR\n"

#: disk-utils/sfdisk.c:2009
msgid " -d, --dump <dev>                  dump partition table (usable for later input)\n"
msgstr " -d, --dump <dispo>                vuelca la tabla de particiones (puede utilizarse más adelante como entrada)\n"

#: disk-utils/sfdisk.c:2010
msgid " -J, --json <dev>                  dump partition table in JSON format\n"
msgstr " -J, --json <dispo>                vuelca la tabla de particiones en formato JSON\n"

#: disk-utils/sfdisk.c:2011
msgid " -g, --show-geometry [<dev> ...]   list geometry of all or specified devices\n"
msgstr " -g, --show-geometry [<dispo> ...]  saca una lista con la geometría de todos los dispositivos o de los seleccionados\n"

#: disk-utils/sfdisk.c:2012
msgid " -l, --list [<dev> ...]            list partitions of each device\n"
msgstr " -l, --list [<dispo> ...]          muestra las particiones de cada dispositivo\n"

#: disk-utils/sfdisk.c:2013
msgid " -F, --list-free [<dev> ...]       list unpartitioned free areas of each device\n"
msgstr " -F, --list-free [<dispo> ...]     enumera las zonas no particionadas de cada dispositivo\n"

#: disk-utils/sfdisk.c:2014
msgid " -r, --reorder <dev>               fix partitions order (by start offset)\n"
msgstr " -r, --reorder <disp>              corrige el orden de las particiones (según desplazamiento del comienzo)\n"

#: disk-utils/sfdisk.c:2015
msgid " -s, --show-size [<dev> ...]       list sizes of all or specified devices\n"
msgstr " -s, --show-size [<dispo> ...]     saca una lista con los tamaños de todos los dispositivos o de los seleccionados\n"

#: disk-utils/sfdisk.c:2016
msgid " -T, --list-types                  print the recognized types (see -X)\n"
msgstr " -T, --list-types                  imprime los tipos reconocidos (véase -X)\n"

#: disk-utils/sfdisk.c:2017
msgid " -V, --verify [<dev> ...]          test whether partitions seem correct\n"
msgstr " -V, --verify [<dispo> ...]        comprueba que las particiones parezcan correctas\n"

#: disk-utils/sfdisk.c:2018
msgid "     --delete <dev> [<part> ...]   delete all or specified partitions\n"
msgstr "     --delete <disp> [<part> ...]  borra todas las particiones o las que se especifique\n"

#: disk-utils/sfdisk.c:2021
msgid " --part-label <dev> <part> [<str>] print or change partition label\n"
msgstr " --part-label <dispo> <part> [<texto>] imprime o modifica la etiqueta de la partición\n"

#: disk-utils/sfdisk.c:2022
msgid " --part-type <dev> <part> [<type>] print or change partition type\n"
msgstr " --part-type <dispo> <part> [<tipo>] imprime o modifica el tipo de la partición\n"

#: disk-utils/sfdisk.c:2023
msgid " --part-uuid <dev> <part> [<uuid>] print or change partition uuid\n"
msgstr " --part-uuid <dispo> <part> [<uuid>] imprime o modifica el uuid de la partición\n"

#: disk-utils/sfdisk.c:2024
msgid " --part-attrs <dev> <part> [<str>] print or change partition attributes\n"
msgstr " --part-attrs <dispo> <part> [<texto>] imprime o modifica los atributos de la partición\n"

#: disk-utils/sfdisk.c:2027
msgid " --disk-id <dev> [<str>]           print or change disk label ID (UUID)\n"
msgstr " --disk-id <dispo> [<texto>]       imprime o modifica el ID de la etiqueta del disco (UUID)\n"

#: disk-utils/sfdisk.c:2028
msgid " --relocate <oper> <dev>           move partition header\n"
msgstr " --relocate <oper> <dispo>         mueve la cabecera de la partición\n"

#: disk-utils/sfdisk.c:2031
msgid " <dev>                     device (usually disk) path\n"
msgstr " <dispo>                   ruta del dispositivo (normalmente un disco)\n"

#: disk-utils/sfdisk.c:2032
msgid " <part>                    partition number\n"
msgstr " <part>                    número de la partición\n"

#: disk-utils/sfdisk.c:2033
msgid " <type>                    partition type, GUID for GPT, hex for MBR\n"
msgstr " <tipo>                    tipo de la partición, GUID o GPT, hexadecimal para el registro de arranque principal (MBR)\n"

#: disk-utils/sfdisk.c:2036
msgid " -a, --append              append partitions to existing partition table\n"
msgstr " -a, --append              añade (las) particiones a la tabla de particiones existente\n"

#: disk-utils/sfdisk.c:2037
msgid " -b, --backup              backup partition table sectors (see -O)\n"
msgstr " -b, --backup              hace copia de respaldo de los sectores de la tabla de particiones (véase -O)\n"

#: disk-utils/sfdisk.c:2038
msgid "     --bytes               print SIZE in bytes rather than in human readable format\n"
msgstr "     --btyes          muestra el TAMAÑO en bytes en lugar de hacerlo en formato legible para humanos\n"

#: disk-utils/sfdisk.c:2039
msgid "     --move-data[=<typescript>] move partition data after relocation (requires -N)\n"
msgstr "     --move-data[=<transcripc>] mueve los datos de la partición después de la recolocación (requiere -N)\n"

#: disk-utils/sfdisk.c:2040
msgid "     --move-use-fsync      use fsync after each write when move data\n"
msgstr "     --move-use-fsync      utiliza fsync después de cada escritura cuando mueve los datos\n"

#: disk-utils/sfdisk.c:2041
msgid " -f, --force               disable all consistency checking\n"
msgstr " -f, --force               desactiva todas las comprobaciones de consistencia\n"

#: disk-utils/sfdisk.c:2044
#, c-format
msgid "     --color[=<when>]      colorize output (%s, %s or %s)\n"
msgstr "     --color[=<cuándo>]    colorea la salida (%s, %s o %s)\n"

#: disk-utils/sfdisk.c:2049
msgid " -N, --partno <num>        specify partition number\n"
msgstr " -N, --partno <número>     especifica el número de la partición\n"

#: disk-utils/sfdisk.c:2050
msgid " -n, --no-act              do everything except write to device\n"
msgstr " -n, --no-act              hace todo excepto escribir en el dispositivo\n"

#: disk-utils/sfdisk.c:2051
msgid "     --no-reread           do not check whether the device is in use\n"
msgstr "     --no-reread           no comprueba si el dispositivo está en uso\n"

#: disk-utils/sfdisk.c:2052
msgid "     --no-tell-kernel      do not tell kernel about changes\n"
msgstr "     --no-tell-kernel      no informar de cambios al núcleo\n"

#: disk-utils/sfdisk.c:2053
msgid " -O, --backup-file <path>  override default backup file name\n"
msgstr " -O, --backup-file <ruta>  anula el nombre del fichero de respaldo predeterminado\n"

#: disk-utils/sfdisk.c:2054
msgid " -o, --output <list>       output columns\n"
msgstr " -o, --output <lista>      columnas que mostrar\n"

#: disk-utils/sfdisk.c:2055
msgid " -q, --quiet               suppress extra info messages\n"
msgstr " -q, --quiet               suprime los mensajes de información suplementarios\n"

#: disk-utils/sfdisk.c:2057
#, c-format
msgid " -w, --wipe <mode>         wipe signatures (%s, %s or %s)\n"
msgstr " -w, --wipe <modo>         borra las firmas (%s, %s o %s)\n"

#: disk-utils/sfdisk.c:2060
msgid " -X, --label <name>        specify label type (dos, gpt, ...)\n"
msgstr " -X, --label <nombre>      especifica el tipo de etiqueta (dos, gpt, ...)\n"

#: disk-utils/sfdisk.c:2061
msgid " -Y, --label-nested <name> specify nested label type (dos, bsd)\n"
msgstr " -Y, --label-nested <nombre> especifica el tipo de etiqueta anidada (dos, bsd)\n"

#: disk-utils/sfdisk.c:2063
msgid " -G, --show-pt-geometry    deprecated, alias to --show-geometry\n"
msgstr " -G  --show-pt-geometry    obsoleta, alias de --show-geometry\n"

#: disk-utils/sfdisk.c:2064
msgid " -L, --Linux               deprecated, only for backward compatibility\n"
msgstr " -L, --Linux               obsoleta, solo por compatibilidad hacia atrás\n"

#: disk-utils/sfdisk.c:2065
msgid " -u, --unit S              deprecated, only sector unit is supported\n"
msgstr " -u, --unit S              obsoleta, solo se admite unidad en sectores\n"

#: disk-utils/sfdisk.c:2194
#, c-format
msgid "%s is deprecated in favour of --part-type"
msgstr "%s está obsoleta en favor de --part-type"

#: disk-utils/sfdisk.c:2199
msgid "--id is deprecated in favour of --part-type"
msgstr "--id está obsoleta en favor de --part-type"

#: disk-utils/sfdisk.c:2215
msgid "--show-pt-geometry is no more implemented. Using --show-geometry."
msgstr "--show-pt-geometry ya no está implementada. Se usa --show-geometry."

#: disk-utils/sfdisk.c:2227
msgid "--Linux option is unnecessary and deprecated"
msgstr "La opción --Linux es innecesaria y obsoleta"

#: disk-utils/sfdisk.c:2256
#, c-format
msgid "unsupported unit '%c'"
msgstr "unidad no admitida '%c'"

#: disk-utils/sfdisk.c:2351
msgid "--movedata requires -N"
msgstr "--movedata requiere -N"

#: disk-utils/swaplabel.c:74
#, c-format
msgid "failed to parse UUID: %s"
msgstr "fallo al analizar UUID: %s"

#: disk-utils/swaplabel.c:78
#, c-format
msgid "%s: failed to seek to swap UUID"
msgstr "%s: fallo al buscar el UUID de intercambio"

#: disk-utils/swaplabel.c:82
#, c-format
msgid "%s: failed to write UUID"
msgstr "%s: fallo al escribir UUID"

#: disk-utils/swaplabel.c:93
#, c-format
msgid "%s: failed to seek to swap label "
msgstr "%s: fallo al buscar la etiqueta de intercambio "

#: disk-utils/swaplabel.c:100
#, c-format
msgid "label is too long. Truncating it to '%s'"
msgstr "la etiqueta es demasiado larga. Se trunca a '%s'"

#: disk-utils/swaplabel.c:103
#, c-format
msgid "%s: failed to write label"
msgstr "%s: fallo al escribir la etiqueta"

#: disk-utils/swaplabel.c:127
msgid "Display or change the label or UUID of a swap area.\n"
msgstr "Muestra o modifica la etiqueta o el UUID de una zona de intercambio.\n"

#: disk-utils/swaplabel.c:130
msgid ""
" -L, --label <label> specify a new label\n"
" -U, --uuid <uuid>   specify a new uuid\n"
msgstr ""
" -L, --label <etiqueta> especifica una nueva etiqueta\n"
" -U, --uuid <uuid>      especifica un nuevo uuid\n"

#: disk-utils/swaplabel.c:171
msgid "ignore -U (UUIDs are unsupported)"
msgstr "ignora -U (los UUIDs no funcionan)"

#: include/c.h:245
#, c-format
msgid "Try '%s --help' for more information.\n"
msgstr "Escriba '%s --help' para obtener más información.\n"

#: include/c.h:349
msgid ""
"\n"
"Usage:\n"
msgstr ""
"\n"
"Modo de empleo:\n"

#: include/c.h:350
msgid ""
"\n"
"Options:\n"
msgstr ""
"\n"
"Opciones:\n"

#: include/c.h:351
msgid ""
"\n"
"Functions:\n"
msgstr ""
"\n"
"Funciones:\n"

#: include/c.h:352
msgid ""
"\n"
"Commands:\n"
msgstr ""
"\n"
"Órdenes:\n"

#: include/c.h:353
msgid ""
"\n"
"Arguments:\n"
msgstr ""
"\n"
"Argumentos:\n"

#: include/c.h:354
msgid ""
"\n"
"Available output columns:\n"
msgstr ""
"\n"
"Columnas de salida disponibles:\n"

#: include/c.h:357
msgid "display this help"
msgstr "muestra esta ayuda"

#: include/c.h:358
msgid "display version"
msgstr "muestra la versión"

#: include/c.h:368
#, c-format
msgid ""
" %s arguments may be followed by the suffixes for\n"
"   GiB, TiB, PiB, EiB, ZiB, and YiB (the \"iB\" is optional)\n"
msgstr ""

#: include/c.h:371
#, c-format
msgid ""
"\n"
"For more details see %s.\n"
msgstr ""
"\n"
"Para más detalles véase %s.\n"

#: include/c.h:373
#, c-format
msgid "%s from %s\n"
msgstr "%s de %s\n"

#: include/closestream.h:70 include/closestream.h:72 login-utils/vipw.c:276
#: login-utils/vipw.c:295 sys-utils/rtcwake.c:304 term-utils/setterm.c:833
#: text-utils/col.c:160
msgid "write error"
msgstr "error de escritura"

#: include/colors.h:27
msgid "colors are enabled by default"
msgstr "los colores están activados por omisión"

#: include/colors.h:29
msgid "colors are disabled by default"
msgstr "los colores están desactivados por omisión"

#: include/env.h:18 lib/pager.c:153 login-utils/login.c:1102
#: login-utils/login.c:1106 term-utils/agetty.c:1203
#, c-format
msgid "failed to set the %s environment variable"
msgstr "error al establecer la variable de entorno %s"

#: include/optutils.h:85
#, c-format
msgid "%s: mutually exclusive arguments:"
msgstr "%s: argumentos mutuamente excluyentes"

#: include/pt-gpt-partnames.h:16
msgid "EFI System"
msgstr "Sistema EFI"

#: include/pt-gpt-partnames.h:18
msgid "MBR partition scheme"
msgstr "Sistema de particiones MBR"

#: include/pt-gpt-partnames.h:19
msgid "Intel Fast Flash"
msgstr "«Flash» rápida de Intel"

#: include/pt-gpt-partnames.h:22
msgid "BIOS boot"
msgstr "Arranque de BIOS"

#: include/pt-gpt-partnames.h:25
msgid "Sony boot partition"
msgstr "Partición de arranque Sony"

#: include/pt-gpt-partnames.h:26
msgid "Lenovo boot partition"
msgstr "Partición de arranque Lenovo"

#: include/pt-gpt-partnames.h:29
msgid "PowerPC PReP boot"
msgstr "PowerPC PReP Boot"

#: include/pt-gpt-partnames.h:32
msgid "ONIE boot"
msgstr "Arranque de ONIE"

#: include/pt-gpt-partnames.h:33
msgid "ONIE config"
msgstr "Configuración de ONIE"

#: include/pt-gpt-partnames.h:36
msgid "Microsoft reserved"
msgstr "Reservado para Microsoft"

#: include/pt-gpt-partnames.h:37
msgid "Microsoft basic data"
msgstr "Datos básicos de Microsoft"

#: include/pt-gpt-partnames.h:38
msgid "Microsoft LDM metadata"
msgstr "Metadatos LDM de Microsoft"

#: include/pt-gpt-partnames.h:39
msgid "Microsoft LDM data"
msgstr "Datos LDM de Microsoft"

#: include/pt-gpt-partnames.h:40
msgid "Windows recovery environment"
msgstr "Entorno de recuperación de Windows"

#: include/pt-gpt-partnames.h:41
msgid "IBM General Parallel Fs"
msgstr "Sistema de ficheros general paralelo de IBM"

#: include/pt-gpt-partnames.h:42
msgid "Microsoft Storage Spaces"
msgstr "Espacios de almacenamiento de Microsoft"

#: include/pt-gpt-partnames.h:45
msgid "HP-UX data"
msgstr "Datos HP-UX"

#: include/pt-gpt-partnames.h:46
msgid "HP-UX service"
msgstr "Servicio HP-UX"

#: include/pt-gpt-partnames.h:49 libfdisk/src/sgi.c:60 libfdisk/src/sun.c:51
msgid "Linux swap"
msgstr "Linux swap"

#: include/pt-gpt-partnames.h:50
msgid "Linux filesystem"
msgstr "Sistema de ficheros de Linux"

#: include/pt-gpt-partnames.h:51
msgid "Linux server data"
msgstr "Servidor de datos Linux"

#: include/pt-gpt-partnames.h:52
msgid "Linux root (x86)"
msgstr "Raíz de Linux (x86)"

#: include/pt-gpt-partnames.h:53
msgid "Linux root (ARM)"
msgstr "Raíz de Linux (ARM)"

#: include/pt-gpt-partnames.h:54
msgid "Linux root (x86-64)"
msgstr "Raíz de Linux (x86-64)"

#: include/pt-gpt-partnames.h:55
msgid "Linux root (ARM-64)"
msgstr "Raíz de Linux (ARM-64)"

#: include/pt-gpt-partnames.h:56
msgid "Linux root (IA-64)"
msgstr "Raíz de Linux (IA-64)"

#: include/pt-gpt-partnames.h:57
msgid "Linux reserved"
msgstr "Reservado para Linux"

#: include/pt-gpt-partnames.h:58
msgid "Linux home"
msgstr "Inicio de Linux"

#: include/pt-gpt-partnames.h:59 libfdisk/src/sgi.c:63
msgid "Linux RAID"
msgstr "Linux RAID"

#: include/pt-gpt-partnames.h:60 include/pt-mbr-partnames.h:61
#: libfdisk/src/sgi.c:62 libfdisk/src/sun.c:53
msgid "Linux LVM"
msgstr "Linux LVM"

#: include/pt-gpt-partnames.h:61
#, fuzzy
msgid "Linux variable data"
msgstr "Servidor de datos Linux"

#: include/pt-gpt-partnames.h:62
#, fuzzy
msgid "Linux temporary data"
msgstr "Servidor de datos Linux"

#: include/pt-gpt-partnames.h:63
#, fuzzy
msgid "Linux root verity (x86)"
msgstr "Raíz de Linux (x86)"

#: include/pt-gpt-partnames.h:64
#, fuzzy
msgid "Linux root verity (ARM)"
msgstr "Raíz de Linux (ARM)"

#: include/pt-gpt-partnames.h:65
#, fuzzy
msgid "Linux root verity (x86-64)"
msgstr "Raíz de Linux (x86-64)"

#: include/pt-gpt-partnames.h:66
#, fuzzy
msgid "Linux root verity (ARM-64)"
msgstr "Raíz de Linux (ARM-64)"

#: include/pt-gpt-partnames.h:67
#, fuzzy
msgid "Linux root verity (IA-64)"
msgstr "Raíz de Linux\t(IA-64)"

#: include/pt-gpt-partnames.h:73 include/pt-mbr-partnames.h:95
msgid "Linux extended boot"
msgstr "Arranque de Linux extendida"

#: include/pt-gpt-partnames.h:76
msgid "FreeBSD data"
msgstr "Datos FreeBSD"

#: include/pt-gpt-partnames.h:77
msgid "FreeBSD boot"
msgstr "Arranque FreeBSD"

#: include/pt-gpt-partnames.h:78
msgid "FreeBSD swap"
msgstr "Swap de FreeBSD"

#: include/pt-gpt-partnames.h:79
msgid "FreeBSD UFS"
msgstr "UFS de FreeBSD"

#: include/pt-gpt-partnames.h:80
msgid "FreeBSD ZFS"
msgstr "ZFS de FreeBSD"

#: include/pt-gpt-partnames.h:81
msgid "FreeBSD Vinum"
msgstr "Vinum de FreeBSD"

#: include/pt-gpt-partnames.h:84
msgid "Apple HFS/HFS+"
msgstr "HFS/HFS+ de Apple"

#: include/pt-gpt-partnames.h:85
msgid "Apple APFS"
msgstr "APFS de Apple"

#: include/pt-gpt-partnames.h:86
msgid "Apple UFS"
msgstr "UFS de Apple"

#: include/pt-gpt-partnames.h:87
msgid "Apple RAID"
msgstr "RAID de Apple"

#: include/pt-gpt-partnames.h:88
msgid "Apple RAID offline"
msgstr "RAID de Apple offline"

#: include/pt-gpt-partnames.h:89
msgid "Apple boot"
msgstr "Arranque de Apple"

#: include/pt-gpt-partnames.h:90
msgid "Apple label"
msgstr "Etiqueta de Apple"

#: include/pt-gpt-partnames.h:91
msgid "Apple TV recovery"
msgstr "Recuperación de Apple TV"

#: include/pt-gpt-partnames.h:92
msgid "Apple Core storage"
msgstr "Almacenamiento Core de Apple"

#: include/pt-gpt-partnames.h:95 include/pt-mbr-partnames.h:77
msgid "Solaris boot"
msgstr "arranque de Solaris"

#: include/pt-gpt-partnames.h:96
msgid "Solaris root"
msgstr "Raíz de Solaris"

#: include/pt-gpt-partnames.h:98
msgid "Solaris /usr & Apple ZFS"
msgstr "/usr de Solaris y ZFS de Apple"

#: include/pt-gpt-partnames.h:99
msgid "Solaris swap"
msgstr "Swap de Solaris"

#: include/pt-gpt-partnames.h:100
msgid "Solaris backup"
msgstr "Respaldo de Solaris"

#: include/pt-gpt-partnames.h:101
msgid "Solaris /var"
msgstr "/var de Solaris"

#: include/pt-gpt-partnames.h:102
msgid "Solaris /home"
msgstr "/home de Solaris"

#: include/pt-gpt-partnames.h:103
msgid "Solaris alternate sector"
msgstr "Sector alternativo de Solaris"

#: include/pt-gpt-partnames.h:104
msgid "Solaris reserved 1"
msgstr "Reservado para Solaris 1"

#: include/pt-gpt-partnames.h:105
msgid "Solaris reserved 2"
msgstr "Reservado para Solaris 2"

#: include/pt-gpt-partnames.h:106
msgid "Solaris reserved 3"
msgstr "Reservador para Solaris 3"

#: include/pt-gpt-partnames.h:107
msgid "Solaris reserved 4"
msgstr "Reservado para Solaris 4"

#: include/pt-gpt-partnames.h:108
msgid "Solaris reserved 5"
msgstr "Reservado para Solaris 5"

#: include/pt-gpt-partnames.h:111
msgid "NetBSD swap"
msgstr "Swap de NetBSD"

#: include/pt-gpt-partnames.h:112
msgid "NetBSD FFS"
msgstr "FFS de NetBSD"

#: include/pt-gpt-partnames.h:113
msgid "NetBSD LFS"
msgstr "LFS de NetBSD"

#: include/pt-gpt-partnames.h:114
msgid "NetBSD concatenated"
msgstr "NetBSD concatenado"

#: include/pt-gpt-partnames.h:115
msgid "NetBSD encrypted"
msgstr "NetBSD cifrado"

#: include/pt-gpt-partnames.h:116
msgid "NetBSD RAID"
msgstr "RAID de NetBSD"

#: include/pt-gpt-partnames.h:119
msgid "ChromeOS kernel"
msgstr "Núcleo de ChromeOS"

#: include/pt-gpt-partnames.h:120
msgid "ChromeOS root fs"
msgstr "Sistema raíz de ChromeOS"

#: include/pt-gpt-partnames.h:121
msgid "ChromeOS reserved"
msgstr "Reservado para ChromeOS"

#: include/pt-gpt-partnames.h:124
msgid "MidnightBSD data"
msgstr "Datos de MidnightBSD"

#: include/pt-gpt-partnames.h:125
msgid "MidnightBSD boot"
msgstr "Arranque de MidnightBSD"

#: include/pt-gpt-partnames.h:126
msgid "MidnightBSD swap"
msgstr "Swap de MidnightBSD"

#: include/pt-gpt-partnames.h:127
msgid "MidnightBSD UFS"
msgstr "UFS de MidnightBSD"

#: include/pt-gpt-partnames.h:128
msgid "MidnightBSD ZFS"
msgstr "ZFS de MidnightBSD"

#: include/pt-gpt-partnames.h:129
msgid "MidnightBSD Vinum"
msgstr "Vinum de MidnightBSD"

#: include/pt-gpt-partnames.h:132
msgid "Ceph Journal"
msgstr "Journal de Ceph"

#: include/pt-gpt-partnames.h:133
msgid "Ceph Encrypted Journal"
msgstr "Journal cifrado de Ceph"

#: include/pt-gpt-partnames.h:134
msgid "Ceph OSD"
msgstr "OSD de Ceph"

#: include/pt-gpt-partnames.h:135
msgid "Ceph crypt OSD"
msgstr "OSD cifrado de Ceph"

#: include/pt-gpt-partnames.h:136
msgid "Ceph disk in creation"
msgstr "Disco de Ceph creándose"

#: include/pt-gpt-partnames.h:137
msgid "Ceph crypt disk in creation"
msgstr "Disco cifrado de Ceph creándose"

#: include/pt-gpt-partnames.h:140 include/pt-mbr-partnames.h:104
msgid "VMware VMFS"
msgstr "VMFS de VMware"

#: include/pt-gpt-partnames.h:141
msgid "VMware Diagnostic"
msgstr "Diagnósticos de VMware"

#: include/pt-gpt-partnames.h:142
msgid "VMware Virtual SAN"
msgstr "SAN virtual de VMware"

#: include/pt-gpt-partnames.h:143
msgid "VMware Virsto"
msgstr "Almacenamiento virtual de VMware"

#: include/pt-gpt-partnames.h:144
msgid "VMware Reserved"
msgstr "Reservado para VMware"

#: include/pt-gpt-partnames.h:147
msgid "OpenBSD data"
msgstr "Datos OpenBSD"

#: include/pt-gpt-partnames.h:150
msgid "QNX6 file system"
msgstr "Sistema de ficheros de QNX6"

#: include/pt-gpt-partnames.h:153
msgid "Plan 9 partition"
msgstr "Partición del plan 9"

#: include/pt-gpt-partnames.h:156
msgid "HiFive Unleashed FSBL"
msgstr "HiFive Unleashed FSBL"

#: include/pt-gpt-partnames.h:157
msgid "HiFive Unleashed BBL"
msgstr "HiFive Unleashed BBL"

#: include/pt-mbr-partnames.h:1
msgid "Empty"
msgstr "Vacía"

#: include/pt-mbr-partnames.h:2
msgid "FAT12"
msgstr "FAT12"

#: include/pt-mbr-partnames.h:3
msgid "XENIX root"
msgstr "XENIX root"

#: include/pt-mbr-partnames.h:4
msgid "XENIX usr"
msgstr "XENIX usr"

#: include/pt-mbr-partnames.h:5
msgid "FAT16 <32M"
msgstr "FAT16 <32M"

#: include/pt-mbr-partnames.h:6
msgid "Extended"
msgstr "Extendida"

#: include/pt-mbr-partnames.h:7
msgid "FAT16"
msgstr "FAT16"

#: include/pt-mbr-partnames.h:8
msgid "HPFS/NTFS/exFAT"
msgstr "HPFS/NTFS/exFAT"

#: include/pt-mbr-partnames.h:9
msgid "AIX"
msgstr "AIX"

#: include/pt-mbr-partnames.h:10
msgid "AIX bootable"
msgstr "AIX arrancable"

#: include/pt-mbr-partnames.h:11
msgid "OS/2 Boot Manager"
msgstr "Gestor de arranque de OS/2"

#: include/pt-mbr-partnames.h:12
msgid "W95 FAT32"
msgstr "W95 FAT32"

#: include/pt-mbr-partnames.h:13
msgid "W95 FAT32 (LBA)"
msgstr "W95 FAT32 (LBA)"

#: include/pt-mbr-partnames.h:14
msgid "W95 FAT16 (LBA)"
msgstr "W95 FAT16 (LBA)"

#: include/pt-mbr-partnames.h:15
msgid "W95 Ext'd (LBA)"
msgstr "W95 Ext'd (LBA)"

#: include/pt-mbr-partnames.h:16
msgid "OPUS"
msgstr "OPUS"

#: include/pt-mbr-partnames.h:17
msgid "Hidden FAT12"
msgstr "FAT12 oculta"

#: include/pt-mbr-partnames.h:18
msgid "Compaq diagnostics"
msgstr "Compaq diagnostics"

#: include/pt-mbr-partnames.h:19
msgid "Hidden FAT16 <32M"
msgstr "FAT16 oculta <32M"

#: include/pt-mbr-partnames.h:20
msgid "Hidden FAT16"
msgstr "FAT16 oculta"

#: include/pt-mbr-partnames.h:21
msgid "Hidden HPFS/NTFS"
msgstr "HPFS/NTFS oculta"

#: include/pt-mbr-partnames.h:22
msgid "AST SmartSleep"
msgstr "SmartSleep de AST"

#: include/pt-mbr-partnames.h:23
msgid "Hidden W95 FAT32"
msgstr "FAT32 de W95 oculta"

#: include/pt-mbr-partnames.h:24
msgid "Hidden W95 FAT32 (LBA)"
msgstr "FAT32 de W95 (LBA) oculta"

#: include/pt-mbr-partnames.h:25
msgid "Hidden W95 FAT16 (LBA)"
msgstr "FAT16 de W95 (LBA) oculta"

#: include/pt-mbr-partnames.h:26
msgid "NEC DOS"
msgstr "DOS de NEC"

#: include/pt-mbr-partnames.h:27
msgid "Hidden NTFS WinRE"
msgstr "NTFS de WinRE oculta"

#: include/pt-mbr-partnames.h:28
msgid "Plan 9"
msgstr "Plan 9"

#: include/pt-mbr-partnames.h:29
msgid "PartitionMagic recovery"
msgstr "PartitionMagic recovery"

#: include/pt-mbr-partnames.h:30
msgid "Venix 80286"
msgstr "Venix 80286"

#: include/pt-mbr-partnames.h:31
msgid "PPC PReP Boot"
msgstr "PPC PReP Boot"

#: include/pt-mbr-partnames.h:32
msgid "SFS"
msgstr "SFS"

#: include/pt-mbr-partnames.h:33
msgid "QNX4.x"
msgstr "QNX4.x"

#: include/pt-mbr-partnames.h:34
msgid "QNX4.x 2nd part"
msgstr "QNX4.x segunda parte"

#: include/pt-mbr-partnames.h:35
msgid "QNX4.x 3rd part"
msgstr "QNX4.x tercera parte"

#: include/pt-mbr-partnames.h:36
msgid "OnTrack DM"
msgstr "OnTrack DM"

#: include/pt-mbr-partnames.h:37
msgid "OnTrack DM6 Aux1"
msgstr "OnTrack DM6 Aux1"

#: include/pt-mbr-partnames.h:38
msgid "CP/M"
msgstr "CP/M"

#: include/pt-mbr-partnames.h:39
msgid "OnTrack DM6 Aux3"
msgstr "OnTrack DM6 Aux3"

#: include/pt-mbr-partnames.h:40
msgid "OnTrackDM6"
msgstr "OnTrackDM6"

#: include/pt-mbr-partnames.h:41
msgid "EZ-Drive"
msgstr "EZ-Drive"

#: include/pt-mbr-partnames.h:42
msgid "Golden Bow"
msgstr "Golden Bow"

#: include/pt-mbr-partnames.h:43
msgid "Priam Edisk"
msgstr "Priam Edisk"

#: include/pt-mbr-partnames.h:44 include/pt-mbr-partnames.h:91
#: include/pt-mbr-partnames.h:101 include/pt-mbr-partnames.h:102
msgid "SpeedStor"
msgstr "SpeedStor"

#: include/pt-mbr-partnames.h:45
msgid "GNU HURD or SysV"
msgstr "GNU HURD o SysV"

#: include/pt-mbr-partnames.h:46
msgid "Novell Netware 286"
msgstr "Novell Netware 286"

#: include/pt-mbr-partnames.h:47
msgid "Novell Netware 386"
msgstr "Novell Netware 386"

#: include/pt-mbr-partnames.h:48
msgid "DiskSecure Multi-Boot"
msgstr "DiskSecure Multi-Boot"

#: include/pt-mbr-partnames.h:49
msgid "PC/IX"
msgstr "PC/IX"

#: include/pt-mbr-partnames.h:50
msgid "Old Minix"
msgstr "Minix antiguo"

#: include/pt-mbr-partnames.h:51
msgid "Minix / old Linux"
msgstr "Minix / Linux antiguo"

#: include/pt-mbr-partnames.h:52
msgid "Linux swap / Solaris"
msgstr "Linux swap / Solaris"

#: include/pt-mbr-partnames.h:53
msgid "Linux"
msgstr "Linux"

#: include/pt-mbr-partnames.h:54
msgid "OS/2 hidden or Intel hibernation"
msgstr "OS/2 oculto o hibernación Intel"

#: include/pt-mbr-partnames.h:57
msgid "Linux extended"
msgstr "Linux extendida"

#: include/pt-mbr-partnames.h:58 include/pt-mbr-partnames.h:59
msgid "NTFS volume set"
msgstr "Conjunto de volúmenes NTFS"

#: include/pt-mbr-partnames.h:60
msgid "Linux plaintext"
msgstr "Linux plaintext"

#: include/pt-mbr-partnames.h:62
msgid "Amoeba"
msgstr "Amoeba"

#: include/pt-mbr-partnames.h:63
msgid "Amoeba BBT"
msgstr "Amoeba BBT"

#: include/pt-mbr-partnames.h:64
msgid "BSD/OS"
msgstr "BSD/OS"

#: include/pt-mbr-partnames.h:65
msgid "IBM Thinkpad hibernation"
msgstr "Hibernación de IBM Thinkpad"

#: include/pt-mbr-partnames.h:66
msgid "FreeBSD"
msgstr "FreeBSD"

#: include/pt-mbr-partnames.h:67
msgid "OpenBSD"
msgstr "OpenBSD"

#: include/pt-mbr-partnames.h:68
msgid "NeXTSTEP"
msgstr "NeXTSTEP"

#: include/pt-mbr-partnames.h:69
msgid "Darwin UFS"
msgstr "UFS de Darwin"

#: include/pt-mbr-partnames.h:70
msgid "NetBSD"
msgstr "NetBSD"

#: include/pt-mbr-partnames.h:71
msgid "Darwin boot"
msgstr "arranque de Darwin"

#: include/pt-mbr-partnames.h:72
msgid "HFS / HFS+"
msgstr "HFS / HFS+"

#: include/pt-mbr-partnames.h:73
msgid "BSDI fs"
msgstr "BSDI fs"

#: include/pt-mbr-partnames.h:74
msgid "BSDI swap"
msgstr "BSDI swap"

#: include/pt-mbr-partnames.h:75
msgid "Boot Wizard hidden"
msgstr "Boot Wizard hidden"

#: include/pt-mbr-partnames.h:76
msgid "Acronis FAT32 LBA"
msgstr "Acronis FAT32 LBA"

#: include/pt-mbr-partnames.h:78
msgid "Solaris"
msgstr "Solaris"

#: include/pt-mbr-partnames.h:79
msgid "DRDOS/sec (FAT-12)"
msgstr "DRDOS/sec (FAT-12)"

#: include/pt-mbr-partnames.h:80
msgid "DRDOS/sec (FAT-16 < 32M)"
msgstr "DRDOS/sec (FAT-16 < 32M)"

#: include/pt-mbr-partnames.h:81
msgid "DRDOS/sec (FAT-16)"
msgstr "DRDOS/sec (FAT-16)"

#: include/pt-mbr-partnames.h:82
msgid "Syrinx"
msgstr "Syrinx"

#: include/pt-mbr-partnames.h:83
msgid "Non-FS data"
msgstr "Datos sin SF"

#: include/pt-mbr-partnames.h:84
msgid "CP/M / CTOS / ..."
msgstr "CP/M / CTOS / ..."

#: include/pt-mbr-partnames.h:86
msgid "Dell Utility"
msgstr "Utilidad Dell"

#: include/pt-mbr-partnames.h:87
msgid "BootIt"
msgstr "BootIt"

#: include/pt-mbr-partnames.h:88
msgid "DOS access"
msgstr "DOS access"

#: include/pt-mbr-partnames.h:90
msgid "DOS R/O"
msgstr "DOS R/O"

#: include/pt-mbr-partnames.h:97
msgid "BeOS fs"
msgstr "BeOS fs"

#: include/pt-mbr-partnames.h:99
msgid "EFI (FAT-12/16/32)"
msgstr "EFI (FAT-12/16/32)"

#: include/pt-mbr-partnames.h:100
msgid "Linux/PA-RISC boot"
msgstr "inicio Linux/PA-RISC"

#: include/pt-mbr-partnames.h:103
msgid "DOS secondary"
msgstr "DOS secondary"

#: include/pt-mbr-partnames.h:105
msgid "VMware VMKCORE"
msgstr "VMKCORE de VMware"

#: include/pt-mbr-partnames.h:106 libfdisk/src/sun.c:54
msgid "Linux raid autodetect"
msgstr "Linux raid autodetect"

#: include/pt-mbr-partnames.h:109
msgid "LANstep"
msgstr "LANstep"

#: include/pt-mbr-partnames.h:110
msgid "BBT"
msgstr "BBT"

#: lib/blkdev.c:274
#, c-format
msgid "warning: %s is misaligned"
msgstr "atención: %s no está alineado"

#: lib/blkdev.c:386
#, c-format
msgid "unsupported lock mode: %s"
msgstr "modo de bloqueo no implementado: %s"

#: lib/blkdev.c:396
#, c-format
msgid "%s: %s: device already locked, waiting to get lock ... "
msgstr "%s: %s: el dispositivo ya está bloqueado, esperando obtener bloqueo ... "

#: lib/blkdev.c:405
#, c-format
msgid "%s: device already locked"
msgstr "%s: el dispositivo ya está bloqueado"

#: lib/blkdev.c:408
#, c-format
msgid "%s: failed to get lock"
msgstr "%s: fallo al obtener el bloqueo"

#: lib/blkdev.c:411
#, c-format
msgid "OK\n"
msgstr "Correcto\n"

#: libfdisk/src/ask.c:505 libfdisk/src/ask.c:517
#, c-format
msgid "Selected partition %ju"
msgstr "Se ha seleccionado la partición %ju"

#: libfdisk/src/ask.c:508
msgid "No partition is defined yet!"
msgstr "¡No hay ninguna partición definida!"

#: libfdisk/src/ask.c:520
msgid "No free partition available!"
msgstr "¡No hay disponible ninguna partición libre!"

#: libfdisk/src/ask.c:530
msgid "Partition number"
msgstr "Número de partición"

#: libfdisk/src/ask.c:1027
#, c-format
msgid "Created a new partition %d of type '%s' and of size %s."
msgstr "Crea una nueva partición %d de tipo '%s' y de tamaño %s."

#: libfdisk/src/bsd.c:165
#, c-format
msgid "Partition %zd: has invalid starting sector 0."
msgstr "La partición %zd: tiene un sector 0 de inicio no válido."

#: libfdisk/src/bsd.c:180
#, c-format
msgid "There is no *BSD partition on %s."
msgstr "No hay ninguna partición *BSD en %s."

#: libfdisk/src/bsd.c:258 libfdisk/src/dos.c:968
msgid "First cylinder"
msgstr "Primer cilindro"

#: libfdisk/src/bsd.c:291 libfdisk/src/dos.c:1353
msgid "Last cylinder, +/-cylinders or +/-size{K,M,G,T,P}"
msgstr "Último cilindro, +/-cilindros o +/-tamaño{K,M,G,T,P}"

#: libfdisk/src/bsd.c:296 libfdisk/src/dos.c:1358 libfdisk/src/gpt.c:2449
msgid "Last sector, +/-sectors or +/-size{K,M,G,T,P}"
msgstr "Último sector, +/-sectores o +/-tamaño{K,M,G,T,P}"

#: libfdisk/src/bsd.c:381
#, c-format
msgid "The device %s does not contain BSD disklabel."
msgstr "El dispositivo %s no contiene ninguna etiqueta de disco BSD."

#: libfdisk/src/bsd.c:383
msgid "Do you want to create a BSD disklabel?"
msgstr "¿Desea crear una etiqueta de disco BSD? (y/n) "

#: libfdisk/src/bsd.c:449
msgid "Disk"
msgstr "Disco"

#: libfdisk/src/bsd.c:456
msgid "Packname"
msgstr "Nombre de paquete"

#: libfdisk/src/bsd.c:463 libfdisk/src/sun.c:1137
msgid "Flags"
msgstr "Indicadores"

#: libfdisk/src/bsd.c:466
msgid " removable"
msgstr " removable"

#: libfdisk/src/bsd.c:467
msgid " ecc"
msgstr " ecc"

#: libfdisk/src/bsd.c:468
msgid " badsect"
msgstr " badsect"

#: libfdisk/src/bsd.c:476
msgid "Bytes/Sector"
msgstr "Bytes/sector"

#: libfdisk/src/bsd.c:481
msgid "Tracks/Cylinder"
msgstr "Pistas/cilindro"

#: libfdisk/src/bsd.c:486
msgid "Sectors/Cylinder"
msgstr "Sectores/cilindro"

#: libfdisk/src/bsd.c:491 libfdisk/src/bsd.c:1029 libfdisk/src/dos.c:2603
#: libfdisk/src/sgi.c:1161 libfdisk/src/sun.c:203 libfdisk/src/sun.c:1133
msgid "Cylinders"
msgstr "Cilindros"

#: libfdisk/src/bsd.c:496 libfdisk/src/sun.c:783
msgid "Rpm"
msgstr "R.p.m."

#: libfdisk/src/bsd.c:501 libfdisk/src/sgi.c:291 libfdisk/src/sun.c:803
msgid "Interleave"
msgstr "Interleave"

#: libfdisk/src/bsd.c:506
msgid "Trackskew"
msgstr "Trackskew"

#: libfdisk/src/bsd.c:511
msgid "Cylinderskew"
msgstr "Cylinderskew"

#: libfdisk/src/bsd.c:516
msgid "Headswitch"
msgstr "Headswitch"

#: libfdisk/src/bsd.c:521
msgid "Track-to-track seek"
msgstr "Búsqueda pista a pista"

#: libfdisk/src/bsd.c:611
msgid "bytes/sector"
msgstr "bytes/sector"

#: libfdisk/src/bsd.c:614
msgid "sectors/track"
msgstr "sectores/pista"

#: libfdisk/src/bsd.c:615
msgid "tracks/cylinder"
msgstr "pistas/cilindro"

#: libfdisk/src/bsd.c:616
msgid "cylinders"
msgstr "cilindros"

#: libfdisk/src/bsd.c:621
msgid "sectors/cylinder"
msgstr "sectores/cilindro"

#: libfdisk/src/bsd.c:624
msgid "rpm"
msgstr "r.p.m."

#: libfdisk/src/bsd.c:625
msgid "interleave"
msgstr "interleave"

#: libfdisk/src/bsd.c:626
msgid "trackskew"
msgstr "trackskew"

#: libfdisk/src/bsd.c:627
msgid "cylinderskew"
msgstr "cylinderskew"

#: libfdisk/src/bsd.c:629
msgid "headswitch"
msgstr "headswitch"

#: libfdisk/src/bsd.c:630
msgid "track-to-track seek"
msgstr "búsqueda pista a pista"

#: libfdisk/src/bsd.c:652
#, c-format
msgid "The bootstrap file %s successfully loaded."
msgstr "El fichero con la secuencia de inicio %s se ha cargado correctamente."

#: libfdisk/src/bsd.c:674
#, c-format
msgid "Bootstrap: %1$sboot -> boot%1$s (default %1$s)"
msgstr "Secuencia de inicio: %1$sboot -> boot%1$s (predefinido %1$s)"

#: libfdisk/src/bsd.c:705
msgid "Bootstrap overlaps with disklabel!"
msgstr "¡La secuencia de inicio se solapa con la etiqueta de disco!"

#: libfdisk/src/bsd.c:729
#, c-format
msgid "Bootstrap installed on %s."
msgstr "Secuencia de inicio instalada en %s."

#: libfdisk/src/bsd.c:911
#, c-format
msgid "Disklabel written to %s.  (Don't forget to write the %s disklabel too.)"
msgstr "Etiqueta de disco escrita en %s.   (No olvide escribir también la etiqueta de disco %s.)"

#: libfdisk/src/bsd.c:914
#, c-format
msgid "Disklabel written to %s."
msgstr "Se ha escrito la etiqueta de disco en %s."

#: libfdisk/src/bsd.c:920 libfdisk/src/context.c:753
msgid "Syncing disks."
msgstr "Se están sincronizando los discos."

#: libfdisk/src/bsd.c:961
msgid "BSD label is not nested within a DOS partition."
msgstr "La etiqueta BSD no está anidada en una partición DOS."

#: libfdisk/src/bsd.c:989
#, c-format
msgid "BSD partition '%c' linked to DOS partition %zu."
msgstr "La partición BSD '%c' está ligada a la partición DOS %zu."

#: libfdisk/src/bsd.c:1025
msgid "Slice"
msgstr "Rodaja"

#: libfdisk/src/bsd.c:1032
msgid "Fsize"
msgstr "TamañoF"

#: libfdisk/src/bsd.c:1033
msgid "Bsize"
msgstr "TamañoB"

#: libfdisk/src/bsd.c:1034
msgid "Cpg"
msgstr "Cpg"

#: libfdisk/src/context.c:743
#, c-format
msgid "%s: fsync device failed"
msgstr "%s: fsync del dispositivo ha fallado"

#: libfdisk/src/context.c:748
#, c-format
msgid "%s: close device failed"
msgstr "%s: error al cerrar el dispositivo"

#: libfdisk/src/context.c:828
msgid "Calling ioctl() to re-read partition table."
msgstr "Llamando a ioctl() para volver a leer la tabla de particiones."

#: libfdisk/src/context.c:836
msgid "Re-reading the partition table failed."
msgstr "Fallo al leer de nuevo la tabla de particiones."

#: libfdisk/src/context.c:838
msgid "The kernel still uses the old table. The new table will be used at the next reboot or after you run partprobe(8) or partx(8)."
msgstr "El núcleo todavía usa la tabla antigua. La nueva tabla se usará en el próximo reinicio o después de que usted ejecute partprobe(8) o partx(8)."

#: libfdisk/src/context.c:928
#, c-format
msgid "Failed to remove partition %zu from system"
msgstr "Fallo al eliminar del sistema la partición %zu"

#: libfdisk/src/context.c:937
#, c-format
msgid "Failed to update system information about partition %zu"
msgstr "Fallo al actualizar la información del sistema sobre la partición %zu"

#: libfdisk/src/context.c:946
#, c-format
msgid "Failed to add partition %zu to system"
msgstr "Fallo al añadir al sistema la partición %zu"

#: libfdisk/src/context.c:952
msgid "The kernel still uses the old partitions. The new table will be used at the next reboot. "
msgstr "El núcleo todavía usa las particiones antiguas. La nueva tabla se usará en el próximo reinicio."

#: libfdisk/src/context.c:1163
msgid "cylinder"
msgid_plural "cylinders"
msgstr[0] "cilindro"
msgstr[1] "cilindros"

#: libfdisk/src/context.c:1164
msgid "sector"
msgid_plural "sectors"
msgstr[0] "sector"
msgstr[1] "sectores"

#: libfdisk/src/context.c:1520
msgid "Incomplete geometry setting."
msgstr "Configuración de la geometría incompleta."

#: libfdisk/src/dos.c:225
msgid "All primary partitions have been defined already."
msgstr "Ya se han definido todas las particiones primarias."

#: libfdisk/src/dos.c:228
msgid "Primary partition not available."
msgstr "No está disponible la partición primaria."

#: libfdisk/src/dos.c:282
#, c-format
msgid "Failed to read extended partition table (offset=%ju)"
msgstr "No se ha podido leer la tabla de particiones extendidas (desplazamiento=%ju)"

#: libfdisk/src/dos.c:352
msgid "You can set geometry from the extra functions menu."
msgstr "Se puede establecer la geometría desde el menú de funciones adicionales."

#: libfdisk/src/dos.c:355
msgid "DOS-compatible mode is deprecated."
msgstr "El modo de compatibilidad con DOS está obsoleto"

#: libfdisk/src/dos.c:359
msgid "The device presents a logical sector size that is smaller than the physical sector size. Aligning to a physical sector (or optimal I/O) size boundary is recommended, or performance may be impacted."
msgstr "El dispositivo presenta un tamaño de sector lógico menor que el tamaño de sector físico. Se recomienda alinearlo con el límite del tamaño del sector físico (o E/S óptima), o el rendimiento puede verse afectado."

#: libfdisk/src/dos.c:365
msgid "Cylinders as display units are deprecated."
msgstr "Los cilindros como unidad de visualización están obsoletos."

#: libfdisk/src/dos.c:372
#, c-format
msgid "The size of this disk is %s (%ju bytes). DOS partition table format cannot be used on drives for volumes larger than %lu bytes for %lu-byte sectors. Use GUID partition table format (GPT)."
msgstr "El tamaño de este disco es %s (%ju bytes). El formato de la tabla de particiones DOS no se puede utilizar con controladores de volúmenes mayores que %lu bytes oara sectores de %lu bytes. Utilice el formato de tabla de particiones GUID (GPT)."

#: libfdisk/src/dos.c:546
msgid "Bad offset in primary extended partition."
msgstr "Desplazamiento incorrecto en particiones extendidas primarias."

#: libfdisk/src/dos.c:560
#, c-format
msgid "Omitting partitions after #%zu. They will be deleted if you save this partition table."
msgstr "Se omiten las particiones después de la nº %zu. Se borrarán si guarda esta tabla de particiones."

#: libfdisk/src/dos.c:593
#, c-format
msgid "Extra link pointer in partition table %zu."
msgstr "Puntero de enlace adicional en tabla de particiones %zu."

#: libfdisk/src/dos.c:601
#, c-format
msgid "Ignoring extra data in partition table %zu."
msgstr "No se tienen en cuenta los datos adicionales de la tabla de particiones %zu."

#: libfdisk/src/dos.c:657
#, c-format
msgid "omitting empty partition (%zu)"
msgstr "se omite partición vacía (%zu)"

#: libfdisk/src/dos.c:717
#, c-format
msgid "Created a new DOS disklabel with disk identifier 0x%08x."
msgstr "Se ha creado una nueva etiqueta de disco DOS con el identificador de disco 0x%08x."

#: libfdisk/src/dos.c:740
msgid "Enter the new disk identifier"
msgstr "Introduzca el nuevo identificador de disco"

#: libfdisk/src/dos.c:749
msgid "Incorrect value."
msgstr "Valor incorrecto."

#: libfdisk/src/dos.c:762
#, c-format
msgid "Disk identifier changed from 0x%08x to 0x%08x."
msgstr "El identificador del disco ha cambiado de 0x%08x a 0x%08x."

#: libfdisk/src/dos.c:864
#, c-format
msgid "Ignoring extra extended partition %zu"
msgstr "No se tiene en cuenta la partición extendida adicional %zu"

#: libfdisk/src/dos.c:878
#, c-format
msgid "Invalid flag 0x%02x%02x of EBR (for partition %zu) will be corrected by w(rite)."
msgstr "El indicador 0x%02x%02x no válido de EBR (para la partición %zu) se corregirá mediante w(rite)."

#: libfdisk/src/dos.c:955
#, c-format
msgid "Start sector %ju out of range."
msgstr "Sector inicial %ju fuera de rango."

#: libfdisk/src/dos.c:1194 libfdisk/src/gpt.c:2323 libfdisk/src/sgi.c:842
#: libfdisk/src/sun.c:528
#, c-format
msgid "Partition %zu is already defined.  Delete it before re-adding it."
msgstr "La partición %zu ya está definida. Suprímala antes de volver a añadirla."

#: libfdisk/src/dos.c:1209 libfdisk/src/dos.c:1235 libfdisk/src/dos.c:1292
#: libfdisk/src/dos.c:1324 libfdisk/src/gpt.c:2332
msgid "No free sectors available."
msgstr "No hay disponible ningún sector libre."

#: libfdisk/src/dos.c:1260
#, c-format
msgid "Sector %llu is already allocated."
msgstr "El sector %llu ya está asignado."

#: libfdisk/src/dos.c:1479
#, c-format
msgid "Adding logical partition %zu"
msgstr "Se añade la partición lógica %zu"

#: libfdisk/src/dos.c:1510
#, c-format
msgid "Partition %zu: contains sector 0"
msgstr "Partición %zu: contiene el sector 0"

#: libfdisk/src/dos.c:1512
#, c-format
msgid "Partition %zu: head %d greater than maximum %d"
msgstr "Partición %zu: la cabeza %d supera el máximo %d"

#: libfdisk/src/dos.c:1515
#, c-format
msgid "Partition %zu: sector %d greater than maximum %llu"
msgstr "Partición %zu: el sector %d supera el máximo %llu"

#: libfdisk/src/dos.c:1518
#, c-format
msgid "Partition %zu: cylinder %d greater than maximum %llu"
msgstr "Partición %zu: el cilindro %d supera el máximo %llu"

#: libfdisk/src/dos.c:1524
#, c-format
msgid "Partition %zu: previous sectors %u disagrees with total %u"
msgstr "Partición %zu: los sectores previous %u no concuerdan con el total %u"

#: libfdisk/src/dos.c:1577
#, c-format
msgid "Partition %zu: different physical/logical beginnings (non-Linux?): phys=(%d, %d, %d), logical=(%d, %d, %d)"
msgstr "Partición %zu: tiene distintos principios físicos/lógicos (¿no Linux?): físicos=(%d, %d, %d), lógicos=(%d, %d, %d)"

#: libfdisk/src/dos.c:1588
#, c-format
msgid "Partition %zu: different physical/logical endings: phys=(%d, %d, %d), logical=(%d, %d, %d)"
msgstr "Partición %zu: tiene distintos finales físicos/lógicos: físicos=(%d, %d, %d), lógicos=(%d, %d, %d)"

#: libfdisk/src/dos.c:1597
#, c-format
msgid "Partition %zu: does not end on cylinder boundary."
msgstr "Partición %zu: no termina en un límite de cilindro."

#: libfdisk/src/dos.c:1645
#, c-format
msgid "Partition %zu: bad start-of-data."
msgstr "Partición %zu: inicio de datos incorrecto en."

#: libfdisk/src/dos.c:1660
#, c-format
msgid "Partition %zu: overlaps partition %zu."
msgstr "Partición %zu: se solapa con la partición %zu."

#: libfdisk/src/dos.c:1689
#, c-format
msgid "Partition %zu: empty."
msgstr "Partición %zu: vacía."

#: libfdisk/src/dos.c:1696
#, c-format
msgid "Logical partition %zu: not entirely in partition %zu."
msgstr "Partición lógica %zu: no está por completo en la partición %zu."

#: libfdisk/src/dos.c:1705 libfdisk/src/gpt.c:2229
msgid "No errors detected."
msgstr "No se ha detectado ningún error."

#: libfdisk/src/dos.c:1707
#, c-format
msgid "Total allocated sectors %llu greater than the maximum %llu."
msgstr "El total de sectores asignados %llu supera el máximo %llu."

#: libfdisk/src/dos.c:1710
#, c-format
msgid "Remaining %lld unallocated %ld-byte sectors."
msgstr "Quedan %lld sectores no asignados de %ld bytes."

#: libfdisk/src/dos.c:1714 libfdisk/src/gpt.c:2249
#, c-format
msgid "%d error detected."
msgid_plural "%d errors detected."
msgstr[0] "%d error detectado."
msgstr[1] "%d errores detectados."

#: libfdisk/src/dos.c:1747
msgid "The maximum number of partitions has been created."
msgstr "Se ha creado el número máximo de particiones."

#: libfdisk/src/dos.c:1780 libfdisk/src/dos.c:1795 libfdisk/src/dos.c:2238
msgid "Extended partition already exists."
msgstr "La partición extendida ya existe."

#: libfdisk/src/dos.c:1810
msgid "Extended partition does not exists. Failed to add logical partition."
msgstr "La partición extendida no existe. Fallo al añadir partición lógica."

#: libfdisk/src/dos.c:1862
msgid "All primary partitions are in use."
msgstr "Se están usando todas las particiones primarias."

#: libfdisk/src/dos.c:1864 libfdisk/src/dos.c:1875
msgid "All space for primary partitions is in use."
msgstr "Se está utilizando todo el espacio para particiones primarias."

#. TRANSLATORS: Try to keep this within 80 characters.
#: libfdisk/src/dos.c:1878
msgid "To create more partitions, first replace a primary with an extended partition."
msgstr "Para crear más particiones, primero reemplace una primaria por una extendida."

#: libfdisk/src/dos.c:1899
msgid "Partition type"
msgstr "Tipo de partición"

#: libfdisk/src/dos.c:1903
#, c-format
msgid "%u primary, %d extended, %u free"
msgstr "%u primaria(s), %d extendida(s), %u libre(s)"

#: libfdisk/src/dos.c:1908
msgid "primary"
msgstr "primaria"

#: libfdisk/src/dos.c:1910
msgid "extended"
msgstr "extendida"

#: libfdisk/src/dos.c:1910
msgid "container for logical partitions"
msgstr "contenedor para particiones lógicas"

#: libfdisk/src/dos.c:1912
msgid "logical"
msgstr "lógica"

#: libfdisk/src/dos.c:1912
msgid "numbered from 5"
msgstr "la numeración empieza por 5"

#: libfdisk/src/dos.c:1951
#, c-format
msgid "Invalid partition type `%c'."
msgstr "Tipo de partición no válido `%c'."

#: libfdisk/src/dos.c:1969
#, c-format
msgid "Cannot write sector %jd: seek failed"
msgstr "No se puede escribir en el sector %jd: fallo al buscar"

#: libfdisk/src/dos.c:2129 libfdisk/src/gpt.c:1248
msgid "Disk identifier"
msgstr "Identificador del disco"

#: libfdisk/src/dos.c:2243
msgid "Type 0 means free space to many systems. Having partitions of type 0 is probably unwise."
msgstr "En muchos sistemas el tipo 0 significa espacio libre. Probablemente no sea acertado tener particiones de tipo 0."

#: libfdisk/src/dos.c:2248
msgid "Cannot change type of the extended partition which is already used by logical partitions. Delete logical partitions first."
msgstr "No se puede cambiar el tipo de la partición extendida que está siendo utilizada por particiones lógicas. Primero borre las particiones lógicas."

#: libfdisk/src/dos.c:2434 libfdisk/src/gpt.c:3050
msgid "Nothing to do. Ordering is correct already."
msgstr "No hay nada que hacer. El orden ya es correcto."

#: libfdisk/src/dos.c:2489
#, c-format
msgid "Partition %zu: no data area."
msgstr "La partición %zu: no tiene ninguna área de datos."

#: libfdisk/src/dos.c:2522
msgid "New beginning of data"
msgstr "Nuevo principio de datos"

#: libfdisk/src/dos.c:2578
#, c-format
msgid "Partition %zu: is an extended partition."
msgstr "La partición %zu: es una partición extendida."

#: libfdisk/src/dos.c:2584
#, c-format
msgid "The bootable flag on partition %zu is enabled now."
msgstr "El indicador de iniciable de la partición %zu ahora está activado."

#: libfdisk/src/dos.c:2585
#, c-format
msgid "The bootable flag on partition %zu is disabled now."
msgstr "El indicador de iniciable de la partición %zu ahora está desactivado."

# Nota: si se pone Dispositivo no queda bien el resto de la línea.
#: libfdisk/src/dos.c:2598 libfdisk/src/gpt.c:3140 libfdisk/src/sgi.c:1157
#: libfdisk/src/sun.c:1129
msgid "Device"
msgstr "Disposit."

#: libfdisk/src/dos.c:2599 libfdisk/src/sun.c:40
msgid "Boot"
msgstr "Inicio"

#: libfdisk/src/dos.c:2605 libfdisk/src/sgi.c:1163 libfdisk/src/sun.c:1135
msgid "Id"
msgstr "Id"

#: libfdisk/src/dos.c:2609
msgid "Start-C/H/S"
msgstr "Inicio-C/H/S"

#: libfdisk/src/dos.c:2610
msgid "End-C/H/S"
msgstr "Fin-C/H/S"

#: libfdisk/src/dos.c:2611 libfdisk/src/gpt.c:3150 libfdisk/src/sgi.c:1165
msgid "Attrs"
msgstr "Atributos"

#: libfdisk/src/gpt.c:682
msgid "failed to allocate GPT header"
msgstr "fallo al asignar la cabecera GPT"

#: libfdisk/src/gpt.c:765
msgid "First LBA specified by script is out of range."
msgstr "La primera LBA especificada en el script está fuera de rango."

#: libfdisk/src/gpt.c:777
msgid "Last LBA specified by script is out of range."
msgstr "La última LBA especificada en el script está fuera de rango."

#: libfdisk/src/gpt.c:919
#, c-format
msgid "GPT PMBR size mismatch (%<PRIu64> != %<PRIu64>) will be corrected by write."
msgstr "La discordancia de tamaños del registro de arranque maestro primario (GPT PMBR) (%<PRIu64> != %<PRIu64>) se corregirá mediante escritura."

#: libfdisk/src/gpt.c:944
msgid "gpt: stat() failed"
msgstr "gpt: stat() falló"

#: libfdisk/src/gpt.c:954
#, c-format
msgid "gpt: cannot handle files with mode %o"
msgstr "gpt: no se pueden manejar ficheros con modo %o"

#: libfdisk/src/gpt.c:1218
msgid "GPT Header"
msgstr "Cabecera GPT"

#: libfdisk/src/gpt.c:1223
msgid "GPT Entries"
msgstr "Entradas GPT"

#: libfdisk/src/gpt.c:1255
msgid "First LBA"
msgstr "Primera LBA"

#: libfdisk/src/gpt.c:1260
msgid "Last LBA"
msgstr "Última LBA"

#. TRANSLATORS: The LBA (Logical Block Address) of the backup GPT header.
#: libfdisk/src/gpt.c:1266
msgid "Alternative LBA"
msgstr "LBA alternativa"

#. TRANSLATORS: The start of the array of partition entries.
#: libfdisk/src/gpt.c:1272
msgid "Partition entries LBA"
msgstr "LBA de las particiones LBA"

#: libfdisk/src/gpt.c:1277
msgid "Allocated partition entries"
msgstr "Particiones asignadas"

#: libfdisk/src/gpt.c:1619
msgid "The backup GPT table is corrupt, but the primary appears OK, so that will be used."
msgstr "La tabla GPT de respaldo está dañada, pero la primera parece que está bien, así que esa será la que se utilice."

#: libfdisk/src/gpt.c:1629
msgid "The primary GPT table is corrupt, but the backup appears OK, so that will be used."
msgstr "La tabla GPT primaria está dañada, pero la de respaldo parece que está bien, así que esa será la que se utilice."

#: libfdisk/src/gpt.c:1645
msgid "The backup GPT table is not on the end of the device."
msgstr "La tabla GPT de respaldo no está al final del dispositivo."

#: libfdisk/src/gpt.c:1648
msgid "The backup GPT table is not on the end of the device. This problem will be corrected by write."
msgstr "La tabla GPT de respaldo no está al final del dispositivo. Este problema ser corregirá al escribir."

#: libfdisk/src/gpt.c:1652
msgid "Failed to recalculate backup GPT table location"
msgstr "No se ha podido recalcular la ubicación de la tabla GPT de respaldo"

#: libfdisk/src/gpt.c:1807
#, c-format
msgid "unsupported GPT attribute bit '%s'"
msgstr "atributo de bit GPT no soportado: '%s'"

#: libfdisk/src/gpt.c:1812
#, c-format
msgid "failed to parse GPT attribute string '%s'"
msgstr "fallo al analizar la cadena del atributo GPT '%s'"

#: libfdisk/src/gpt.c:1912
#, c-format
msgid "Partition UUID changed from %s to %s."
msgstr "El UUID de la partición ha cambiado de %s a %s."

#: libfdisk/src/gpt.c:1921
msgid "Failed to translate partition name, name not changed."
msgstr "fallo al traducir el nombre de la partición; no se cambia el nombre."

#: libfdisk/src/gpt.c:1923
#, c-format
msgid "Partition name changed from '%s' to '%.*s'."
msgstr "El nombre de la partición ha cambiado de '%s' a '%.*s'."

#: libfdisk/src/gpt.c:1952
msgid "The start of the partition understeps FirstUsableLBA."
msgstr "El comienzo de la partición no llega al «FirstUsableLBA»."

#: libfdisk/src/gpt.c:1959
msgid "The end of the partition oversteps LastUsableLBA."
msgstr "El final de la partición va más allá de «LastUsableLBA»."

#: libfdisk/src/gpt.c:2117
msgid "The device contains hybrid MBR -- writing GPT only."
msgstr "El dispositivo contiene un MBR híbrido -- solamente se escribe en GPT."

#: libfdisk/src/gpt.c:2153
msgid "Disk does not contain a valid backup header."
msgstr "El disco no contiene una cabecera de respaldo válida."

#: libfdisk/src/gpt.c:2158
msgid "Invalid primary header CRC checksum."
msgstr "La suma de verificación CRC de la cabecera primaria no es válida"

#: libfdisk/src/gpt.c:2162
msgid "Invalid backup header CRC checksum."
msgstr "La suma de verificación CRC de la cabecera de respaldo no es válida"

#: libfdisk/src/gpt.c:2167
msgid "Invalid partition entry checksum."
msgstr "La suma de verificación de la entrada de la partición no es válida"

#: libfdisk/src/gpt.c:2172
msgid "Invalid primary header LBA sanity checks."
msgstr "Comprobaciones de integridad LBA de la cabecera primaria no válidas"

#: libfdisk/src/gpt.c:2176
msgid "Invalid backup header LBA sanity checks."
msgstr "Comprobaciones de integridad LBA del cabezal de respaldo no válidas"

#: libfdisk/src/gpt.c:2181
msgid "MyLBA mismatch with real position at primary header."
msgstr "MyLBA no corresponde con la posición real en el cabezal primario"

#: libfdisk/src/gpt.c:2185
msgid "MyLBA mismatch with real position at backup header."
msgstr "MyLBA no corresponde con la posición real en el cabezal de respaldo"

#: libfdisk/src/gpt.c:2190
msgid "Disk is too small to hold all data."
msgstr "El disco es demasiado pequeño para albergar todos los datos."

#: libfdisk/src/gpt.c:2200
msgid "Primary and backup header mismatch."
msgstr "Las cabeceras primaria y de respaldo no coinciden."

#: libfdisk/src/gpt.c:2206
#, c-format
msgid "Partition %u overlaps with partition %u."
msgstr "La partición %u se solapa con la partición %u."

#: libfdisk/src/gpt.c:2213
#, c-format
msgid "Partition %u is too big for the disk."
msgstr "La partición %u es demasiado grande para el disco."

#: libfdisk/src/gpt.c:2220
#, c-format
msgid "Partition %u ends before it starts."
msgstr "La partición %u termina antes de su comienzo."

#: libfdisk/src/gpt.c:2230
#, c-format
msgid "Header version: %s"
msgstr "Cabecera versión %s"

#: libfdisk/src/gpt.c:2231
#, c-format
msgid "Using %zu out of %zu partitions."
msgstr "Se utilizan %zu de un total de %zu particiones."

#: libfdisk/src/gpt.c:2241
#, c-format
msgid "A total of %ju free sectors is available in %u segment."
msgid_plural "A total of %ju free sectors is available in %u segments (the largest is %s)."
msgstr[0] "Un total de %ju sectores libres está disponible en %u segmento"
msgstr[1] "Un total de %ju sectores libres está disponible en %u segmentos (el mayor es %s)."

#: libfdisk/src/gpt.c:2328
msgid "All partitions are already in use."
msgstr "Ya se están usando todas las particiones."

#: libfdisk/src/gpt.c:2385 libfdisk/src/gpt.c:2412
#, c-format
msgid "Sector %ju already used."
msgstr "El sector %ju ya está asignado."

#: libfdisk/src/gpt.c:2478
#, c-format
msgid "Could not create partition %zu"
msgstr "No se pudo crear la partición %zu"

#: libfdisk/src/gpt.c:2485
#, c-format
msgid "The last usable GPT sector is %ju, but %ju is requested."
msgstr "El último sector GPT utilizable es %ju, pero se ha solicitado %ju."

#: libfdisk/src/gpt.c:2492
#, c-format
msgid "The first usable GPT sector is %ju, but %ju is requested."
msgstr "El primer sector GPT utilizable es %ju, pero se ha solicitado %ju."

#: libfdisk/src/gpt.c:2631
#, c-format
msgid "Created a new GPT disklabel (GUID: %s)."
msgstr "Se ha creado una nueva etiqueta de disco GPT (GUID: %s)."

#: libfdisk/src/gpt.c:2652
msgid "Enter new disk UUID (in 8-4-4-4-12 format)"
msgstr "Introduczca el nuevo UUID del disco (en formato 8-4-4-4-12)"

#: libfdisk/src/gpt.c:2660
msgid "Failed to parse your UUID."
msgstr "Error al analizar su UUID."

#: libfdisk/src/gpt.c:2674
#, c-format
msgid "Disk identifier changed from %s to %s."
msgstr "El identificador del disco ha cambiado de %s a %s."

#: libfdisk/src/gpt.c:2694
msgid "Not enough space for new partition table!"
msgstr "¡No hay espacio suficiente para una tabla de particiones nueva!"

#: libfdisk/src/gpt.c:2705
#, c-format
msgid "Partition #%zu out of range (minimal start is %<PRIu64> sectors)"
msgstr "Partición #%zu fuera de rango (el comienzo mínimo es %<PRIu64> sectores)"

#: libfdisk/src/gpt.c:2710
#, c-format
msgid "Partition #%zu out of range (maximal end is %<PRIu64> sectors)"
msgstr "Partición #%zu fuera de rango (el final máximo es %<PRIu64> sectores)"

#: libfdisk/src/gpt.c:2756
msgid "The partition entry size is zero."
msgstr "El tamaño de entrada de la partición es cero."

#: libfdisk/src/gpt.c:2758
#, c-format
msgid "The number of the partition has to be smaller than %zu."
msgstr "El número de la partición ha de ser menor que %zu."

#: libfdisk/src/gpt.c:2782
msgid "Cannot allocate memory!"
msgstr "¡No se puede asignar memoria!"

#: libfdisk/src/gpt.c:2811
#, c-format
msgid "Partition table length changed from %<PRIu32> to %<PRIu64>."
msgstr "La longitud de la table de particiones ha cambiado de %<PRIu32> a %<PRIu64>."

#: libfdisk/src/gpt.c:2921
#, c-format
msgid "The attributes on partition %zu changed to 0x%016<PRIx64>."
msgstr "Los atributos de la partición %zu se cambian a 0x%016<PRIx64>."

#: libfdisk/src/gpt.c:2971
msgid "Enter GUID specific bit"
msgstr "Introduzca el bit específico de GUID"

#: libfdisk/src/gpt.c:2986
#, c-format
msgid "failed to toggle unsupported bit %lu"
msgstr "no se ha podido cambiar el bit no soportado %lu"

#: libfdisk/src/gpt.c:2999
#, c-format
msgid "The GUID specific bit %d on partition %zu is enabled now."
msgstr "El bit específico de GUID %d de la partición %zu está ahora activado."

#: libfdisk/src/gpt.c:3000
#, c-format
msgid "The GUID specific bit %d on partition %zu is disabled now."
msgstr "El bit específico de GUID %d de la partición %zu está ahora desactivado."

#: libfdisk/src/gpt.c:3004
#, c-format
msgid "The %s flag on partition %zu is enabled now."
msgstr "El indicador %s de la partición %zu ahora está activado."

#: libfdisk/src/gpt.c:3005
#, c-format
msgid "The %s flag on partition %zu is disabled now."
msgstr "El indicador %s de la partición %zu ahora está desactivado."

#: libfdisk/src/gpt.c:3147
msgid "Type-UUID"
msgstr "Tipo-UUID"

#: libfdisk/src/gpt.c:3148
msgid "UUID"
msgstr "UUID"

#: libfdisk/src/gpt.c:3149 login-utils/chfn.c:156 login-utils/chfn.c:158
#: login-utils/chfn.c:322
msgid "Name"
msgstr "Nombre"

#: libfdisk/src/partition.c:871
msgid "Free space"
msgstr "Espacio libre"

#: libfdisk/src/partition.c:1295
#, c-format
msgid "Failed to resize partition #%zu."
msgstr "No se ha podido cambiar el tamaño de la partición nº %zu."

#: libfdisk/src/parttype.c:288 misc-utils/findmnt.c:662
#: misc-utils/uuidparse.c:199 misc-utils/uuidparse.c:217 schedutils/chrt.c:205
#: schedutils/ionice.c:79 sys-utils/hwclock.c:276
msgid "unknown"
msgstr "desconocido"

#: libfdisk/src/sgi.c:46
msgid "SGI volhdr"
msgstr "SGI volhdr"

#: libfdisk/src/sgi.c:47
msgid "SGI trkrepl"
msgstr "SGI trkrepl"

#: libfdisk/src/sgi.c:48
msgid "SGI secrepl"
msgstr "SGI secrepl"

#: libfdisk/src/sgi.c:49
msgid "SGI raw"
msgstr "SGI raw"

#: libfdisk/src/sgi.c:50
msgid "SGI bsd"
msgstr "SGI bsd"

#: libfdisk/src/sgi.c:51
msgid "SGI sysv"
msgstr "SGI sysv"

#: libfdisk/src/sgi.c:52
msgid "SGI volume"
msgstr "SGI volume"

#: libfdisk/src/sgi.c:53
msgid "SGI efs"
msgstr "SGI efs"

#: libfdisk/src/sgi.c:54
msgid "SGI lvol"
msgstr "SGI lvol"

#: libfdisk/src/sgi.c:55
msgid "SGI rlvol"
msgstr "SGI rlvol"

#: libfdisk/src/sgi.c:56
msgid "SGI xfs"
msgstr "SGI xfs"

#: libfdisk/src/sgi.c:57
msgid "SGI xfslog"
msgstr "SGI xfslog"

#: libfdisk/src/sgi.c:58
msgid "SGI xlv"
msgstr "SGI xlv"

#: libfdisk/src/sgi.c:59
msgid "SGI xvm"
msgstr "SGI xvm"

#: libfdisk/src/sgi.c:61 libfdisk/src/sun.c:52
msgid "Linux native"
msgstr "Linux native"

#: libfdisk/src/sgi.c:158
msgid "SGI info created on second sector."
msgstr "Información SGI creada en el segundo sector."

#: libfdisk/src/sgi.c:258
msgid "Detected an SGI disklabel with wrong checksum."
msgstr "Se ha detectado una etiqueta de disco SGI con suma de comprobación incorrecta."

#: libfdisk/src/sgi.c:281 libfdisk/src/sun.c:793
msgid "Physical cylinders"
msgstr "Cilindros físicos"

#: libfdisk/src/sgi.c:286 libfdisk/src/sun.c:798
msgid "Extra sects/cyl"
msgstr "Sectores adicionales por cilindro"

#: libfdisk/src/sgi.c:296
msgid "Bootfile"
msgstr "Fichero de arranque"

#: libfdisk/src/sgi.c:394
msgid "Invalid bootfile!  The bootfile must be an absolute non-zero pathname, e.g. \"/unix\" or \"/unix.save\"."
msgstr "¡Fichero de inicio no válido!  El fichero de inicio debe ser un nombre de ruta absoluto distinto de cero, como por ejemplo \"/unix\" o \"/unix.save\"."

#: libfdisk/src/sgi.c:402
#, c-format
msgid "Name of bootfile is too long: %zu byte maximum."
msgid_plural "Name of bootfile is too long: %zu bytes maximum."
msgstr[0] "Nombre del fichero de inicio demasiado largo: %zu byte como máximo."
msgstr[1] "Nombre del fichero de inicio demasiado largo: %zu bytes como máximo."

#: libfdisk/src/sgi.c:411
msgid "Bootfile must have a fully qualified pathname."
msgstr "El fichero de inicio debe tener un nombre de ruta totalmente calificado."

#: libfdisk/src/sgi.c:417
msgid "Be aware that the bootfile is not checked for existence.  SGI's default is \"/unix\", and for backup \"/unix.save\"."
msgstr "Tenga en cuenta que no se comprueba la existencia del fichero de inicio.  El valor predeterminado de SGI es \"/unix\" y para la copia de seguridad \"/unix.save\"."

#: libfdisk/src/sgi.c:442
#, c-format
msgid "The current boot file is: %s"
msgstr "El fichero de inicio actual es: %s"

#: libfdisk/src/sgi.c:444
msgid "Enter of the new boot file"
msgstr "Escriba el nombre del nuevo fichero de inicio"

#: libfdisk/src/sgi.c:449
msgid "Boot file is unchanged."
msgstr "No se ha modificado el fichero de inicio."

#: libfdisk/src/sgi.c:460
#, c-format
msgid "Bootfile has been changed to \"%s\"."
msgstr "El fichero de inicio se ha cambiado por \"%s\"."

#: libfdisk/src/sgi.c:599
msgid "More than one entire disk entry present."
msgstr "Existe más de una entrada de disco completo."

#: libfdisk/src/sgi.c:606 libfdisk/src/sun.c:467
msgid "No partitions defined."
msgstr "No hay ninguna partición definida."

#: libfdisk/src/sgi.c:616
msgid "IRIX likes it when partition 11 covers the entire disk."
msgstr "Para IRIX se recomienda que la partición 11 abarque el disco completo."

#: libfdisk/src/sgi.c:620
#, c-format
msgid "The entire disk partition should start at block 0, not at block %d."
msgstr "La partición de disco completo debe empezar en el bloque 0, no en el bloque %d."

#: libfdisk/src/sgi.c:631
msgid "Partition 11 should cover the entire disk."
msgstr "La partición 11 debe abarcar el disco completo."

#: libfdisk/src/sgi.c:655
#, c-format
msgid "Partitions %d and %d overlap by %d sector."
msgid_plural "Partitions %d and %d overlap by %d sectors."
msgstr[0] "Las particiones %d y %d se solapan en %d sector."
msgstr[1] "Las particiones %d y %d se solapan en %d sectores."

#: libfdisk/src/sgi.c:666 libfdisk/src/sgi.c:688
#, c-format
msgid "Unused gap of %8u sector: sector %8u"
msgid_plural "Unused gap of %8u sectors: sectors %8u-%u"
msgstr[0] "Espacio no utilizado de %8u sector - sector %8u"
msgstr[1] "Espacio no utilizado de %8u sectores - sectores %8u-%u"

#: libfdisk/src/sgi.c:701
msgid "The boot partition does not exist."
msgstr "La partición de inicio no existe."

#: libfdisk/src/sgi.c:705
msgid "The swap partition does not exist."
msgstr "La partición de intercambio no existe."

#: libfdisk/src/sgi.c:709
msgid "The swap partition has no swap type."
msgstr "La partición de intercambio no tiene un tipo de intercambio."

#: libfdisk/src/sgi.c:712
msgid "You have chosen an unusual bootfile name."
msgstr "Ha elegido un nombre de fichero de inicio poco habitual."

#: libfdisk/src/sgi.c:762
msgid "Partition overlap on the disk."
msgstr "Solapamiento de particiones en el disco."

#: libfdisk/src/sgi.c:847
msgid "Attempting to generate entire disk entry automatically."
msgstr "Se está intentando generar una entrada de disco completo automáticamente."

#: libfdisk/src/sgi.c:852
msgid "The entire disk is already covered with partitions."
msgstr "Ya existen particiones que abarcan el disco completo."

#: libfdisk/src/sgi.c:856
msgid "You got a partition overlap on the disk. Fix it first!"
msgstr "Se ha producido un solapamiento de particiones en el disco. Corríjalo antes de continuar."

#: libfdisk/src/sgi.c:878 libfdisk/src/sun.c:563
#, c-format
msgid "First %s"
msgstr "Primer %s"

#: libfdisk/src/sgi.c:902 libfdisk/src/sgi.c:953
msgid "It is highly recommended that the eleventh partition covers the entire disk and is of type 'SGI volume'."
msgstr "Se recomienda que la partición undécima abarque el disco completo y sea del tipo `SGI volume'."

#: libfdisk/src/sgi.c:917
#, c-format
msgid "Last %s or +%s or +size{K,M,G,T,P}"
msgstr "Último %s o +%s o +tamaño{K,M,G,T,P}"

#: libfdisk/src/sgi.c:989 libfdisk/src/sun.c:248
#, c-format
msgid "BLKGETSIZE ioctl failed on %s. Using geometry cylinder value of %llu. This value may be truncated for devices > 33.8 GB."
msgstr "El ioctl de BLKGETSIZE falló en %s. Se usará un valor para la geometría del cilindro de %llu. Este valor podría ser truncado para dispositivos > 33.8 GB."

#: libfdisk/src/sgi.c:1055
msgid "Created a new SGI disklabel."
msgstr "Se ha creado una nueva etiqueta de disco SGI."

#: libfdisk/src/sgi.c:1074
msgid "Sorry, only for non-empty partitions you can change the tag."
msgstr "Lamentablemente solo se puede cambiar la etiqueta en particiones no vacías."

#: libfdisk/src/sgi.c:1080
msgid "Consider leaving partition 9 as volume header (0), and partition 11 as entire volume (6), as IRIX expects it."
msgstr "Se recomienda dejar la partición 9 como cabecera de volumen (0) y la partición 11 como volumen completo (6) ya que IRIX así lo espera."

#: libfdisk/src/sgi.c:1089
msgid "It is highly recommended that the partition at offset 0 is of type \"SGI volhdr\", the IRIX system will rely on it to retrieve from its directory standalone tools like sash and fx. Only the \"SGI volume\" entire disk section may violate this. Are you sure about tagging this partition differently?"
msgstr "Se recomienda que la partición en el desplazamiento 0 sea del tipo \"SGI volhdr\"; el sistema IRIX la utilizará para recuperar de su directorio herramientas autónomas como sash y fx. Sólo la sección de disco completo \"SGI volume\" puede infringir esta regla. ¿Está seguro de querer dar una etiqueta distinta a esta partición?"

#: libfdisk/src/sun.c:39
msgid "Unassigned"
msgstr "Sin asignar"

#: libfdisk/src/sun.c:41
msgid "SunOS root"
msgstr "SunOS root"

#: libfdisk/src/sun.c:42
msgid "SunOS swap"
msgstr "SunOS swap"

#: libfdisk/src/sun.c:43
msgid "SunOS usr"
msgstr "SunOS usr"

#: libfdisk/src/sun.c:44
msgid "Whole disk"
msgstr "Disco completo"

#: libfdisk/src/sun.c:45
msgid "SunOS stand"
msgstr "SunOS stand"

#: libfdisk/src/sun.c:46
msgid "SunOS var"
msgstr "SunOS var"

#: libfdisk/src/sun.c:47
msgid "SunOS home"
msgstr "SunOS home"

#: libfdisk/src/sun.c:48
msgid "SunOS alt sectors"
msgstr "Sectores alt SunOS"

#: libfdisk/src/sun.c:49
msgid "SunOS cachefs"
msgstr "cachefs SunOS"

#: libfdisk/src/sun.c:50
msgid "SunOS reserved"
msgstr "reservado SunOS"

#: libfdisk/src/sun.c:86
#, c-format
msgid "%#zu: start cylinder overflows Sun label limits"
msgstr "%#zu: cilindro inicial desborda los límites de la etiqueta Sun"

#: libfdisk/src/sun.c:89
#, c-format
msgid "%#zu: number of sectors overflow Sun label limits"
msgstr "%#zu: número de sectores desborda los límites de la etiqueta Sun"

#: libfdisk/src/sun.c:136
msgid "Detected sun disklabel with wrong checksum. Probably you'll have to set all the values, e.g. heads, sectors, cylinders and partitions or force a fresh label (s command in main menu)"
msgstr "Se ha detectado una etiqueta de disco sun con suma de comprobación incorrecta. Probablemente tendrá que establecer todos los valores, como cabezas, sectores, cilindros y particiones o forzar una nueva etiqueta (orden s en menú principal)"

#: libfdisk/src/sun.c:153
#, c-format
msgid "Detected sun disklabel with wrong version [%d]."
msgstr "Se ha detectado una etiqueta de disco sun con una versión incorrecta[%d]"

#: libfdisk/src/sun.c:158
#, c-format
msgid "Detected sun disklabel with wrong vtoc.sanity [0x%08x]."
msgstr "Se ha detectado una etiqueta de disco sun con una vtoc.sanity incorrecta [0x%08x]."

#: libfdisk/src/sun.c:163
#, c-format
msgid "Detected sun disklabel with wrong vtoc.nparts [%u]."
msgstr "Se ha detectado una etiqueta de disco sun con una vtoc.nparts incorrecta [%u]."

#: libfdisk/src/sun.c:168
msgid "Warning: Wrong values need to be fixed up and will be corrected by w(rite)"
msgstr "Atención: Los valores incorrectos deben remendarse y se corregirán mediante w(rite)"

#: libfdisk/src/sun.c:193
msgid "Heads"
msgstr "Cabezas"

#: libfdisk/src/sun.c:198
msgid "Sectors/track"
msgstr "Sectores/pista"

#: libfdisk/src/sun.c:301
msgid "Created a new Sun disklabel."
msgstr "Se ha creado una nueva etiqueta de disco Sun"

#: libfdisk/src/sun.c:425
#, c-format
msgid "Partition %u doesn't end on cylinder boundary."
msgstr "La partición %u no termina en un límite de cilindro."

#: libfdisk/src/sun.c:444
#, c-format
msgid "Partition %u overlaps with others in sectors %u-%u."
msgstr "La partición %u se solapa con otras en los sectores %u-%u."

#: libfdisk/src/sun.c:472
#, c-format
msgid "Unused gap - sectors 0-%u."
msgstr "Espacio no utilizado - sectores 0-%u."

#: libfdisk/src/sun.c:474 libfdisk/src/sun.c:480
#, c-format
msgid "Unused gap - sectors %u-%u."
msgstr "Espacio no utilizado - sectores %u-%u."

#: libfdisk/src/sun.c:542
msgid "Other partitions already cover the whole disk. Delete some/shrink them before retry."
msgstr "Ya hay otras particiones que abarcan el disco completo. Suprima algunas o reduzca su tamaño antes de volver a intentarlo."

#: libfdisk/src/sun.c:559
msgid "It is highly recommended that the third partition covers the whole disk and is of type `Whole disk'"
msgstr "Se recomienda encarecidamente que la tercera partición abarque el disco completo y sea del tipo `Whole disk'"

#: libfdisk/src/sun.c:601
#, c-format
msgid "Aligning the first sector from %u to %u to be on cylinder boundary."
msgstr "Se procede a alinear el primer sector desde %u hasta %u para estar en el límite de un cilindro."

#: libfdisk/src/sun.c:629
#, c-format
msgid "Sector %d is already allocated"
msgstr "El sector %d ya está asignado"

#: libfdisk/src/sun.c:658
#, c-format
msgid "Last %s or +/-%s or +/-size{K,M,G,T,P}"
msgstr "Último %s o +/-%s o +/-tamaño{K,M,G,T,P}"

#: libfdisk/src/sun.c:706
#, c-format
msgid ""
"You haven't covered the whole disk with the 3rd partition, but your value\n"
"%lu %s covers some other partition. Your entry has been changed\n"
"to %lu %s"
msgstr ""
"No ha abarcado el disco completo con la tercera partición, pero\n"
"el valor %lu %s que ha especificado se solapa con otra partición.\n"
"La entrada que ha realizado se ha cambiado por %lu %s"

#: libfdisk/src/sun.c:749
#, c-format
msgid "If you want to maintain SunOS/Solaris compatibility, consider leaving this partition as Whole disk (5), starting at 0, with %u sectors"
msgstr "Si desea mantener la compatibilidad con SunOS/Solaris, se recomienda dejar esta partición como disco completo (5), con principio en 0, con %u sectores"

#: libfdisk/src/sun.c:773
msgid "Label ID"
msgstr "ID de la etiqueta"

#: libfdisk/src/sun.c:778
msgid "Volume ID"
msgstr "ID del volumen"

#: libfdisk/src/sun.c:788
msgid "Alternate cylinders"
msgstr "Cilindros alternativos"

#: libfdisk/src/sun.c:894
msgid "Number of alternate cylinders"
msgstr "Número de cilindros alternativos"

#: libfdisk/src/sun.c:919
msgid "Extra sectors per cylinder"
msgstr "Sectores adicionales por cilindro"

#: libfdisk/src/sun.c:943
msgid "Interleave factor"
msgstr "Factor de interleave"

#: libfdisk/src/sun.c:967
msgid "Rotation speed (rpm)"
msgstr "Velocidad de rotación (r.p.m.)"

#: libfdisk/src/sun.c:991
msgid "Number of physical cylinders"
msgstr "Número de cilindros físicos"

#: libfdisk/src/sun.c:1056
msgid ""
"Consider leaving partition 3 as Whole disk (5),\n"
"as SunOS/Solaris expects it and even Linux likes it.\n"
msgstr ""
"Se recomienda dejar la partición 3 como disco completo (5),\n"
"ya que así lo prevé SunOS/Solaris e incluso es adecuado para Linux.\n"

#: libfdisk/src/sun.c:1067
msgid ""
"It is highly recommended that the partition at offset 0\n"
"is UFS, EXT2FS filesystem or SunOS swap. Putting Linux swap\n"
"there may destroy your partition table and bootblock.\n"
"Are you sure you want to tag the partition as Linux swap?"
msgstr ""
"Se recomienda que la partición en el desplazamiento 0\n"
"sea UFS, EXT2FS o SunOS swap. Utilizar Linux swap\n"
"puede destruir la tabla de particiones y el bloque de inicio.\n"
"¿Está seguro de que desea que la partición esté marcada como Linux swap?"

#: libmount/src/context.c:2761
#, c-format
msgid "operation failed: %m"
msgstr "la operación falló: %m"

#: libmount/src/context_mount.c:1638
#, c-format
msgid "WARNING: failed to apply propagation flags"
msgstr "ATENCIÓN: los indicadores de propagación no se han podido aplicar"

#: libmount/src/context_mount.c:1648
#, c-format
msgid "WARNING: source write-protected, mounted read-only"
msgstr "ATENCIÓN: origen protegido contra escritura; se monta como solo lectura"

#: libmount/src/context_mount.c:1662
#, c-format
msgid "operation permitted for root only"
msgstr "operación autorizada solo a root"

#: libmount/src/context_mount.c:1666
#, c-format
msgid "%s is already mounted"
msgstr "%s ya está montado"

#: libmount/src/context_mount.c:1672
#, c-format
msgid "can't find in %s"
msgstr "no se puede encontrar en %s"

#: libmount/src/context_mount.c:1675
#, c-format
msgid "can't find mount point in %s"
msgstr "no se puede encontrar el punto de montaje en %s"

#: libmount/src/context_mount.c:1678
#, c-format
msgid "can't find mount source %s in %s"
msgstr "no se puede encontrar la fuente de montaje %s en %s"

#: libmount/src/context_mount.c:1683
#, c-format
msgid "more filesystems detected on %s; use -t <type> or wipefs(8)"
msgstr "se han detectado más sistemas de ficheros en %s; utilice -t <tipo> o wipefs(8)"

#: libmount/src/context_mount.c:1688
#, c-format
msgid "failed to determine filesystem type"
msgstr "error al determinar el tipo de sistema de ficheros"

#: libmount/src/context_mount.c:1689
#, c-format
msgid "no filesystem type specified"
msgstr "no se ha especificado el tipo de sistema de ficheros"

#: libmount/src/context_mount.c:1696
#, c-format
msgid "can't find %s"
msgstr "no se puede encontrar %s"

#: libmount/src/context_mount.c:1698
#, c-format
msgid "no mount source specified"
msgstr "no se ha especificado origen de montaje"

#: libmount/src/context_mount.c:1704
#, c-format
msgid "failed to parse mount options: %m"
msgstr "fallo al analizar las opciones de montaje: %m"

#: libmount/src/context_mount.c:1705
#, c-format
msgid "failed to parse mount options"
msgstr "fallo al analizar las opciones de montaje"

#: libmount/src/context_mount.c:1709
#, c-format
msgid "failed to setup loop device for %s"
msgstr "error al configurar dispositivo de bucle para %s"

#: libmount/src/context_mount.c:1713
#, c-format
msgid "overlapping loop device exists for %s"
msgstr "ya existe un dispositivo de bucle que solapa con %s"

#: libmount/src/context_mount.c:1717 libmount/src/context_umount.c:1263
#, c-format
msgid "locking failed"
msgstr "fallo al bloquear"

#: libmount/src/context_mount.c:1721 libmount/src/context_umount.c:1269
#: sys-utils/umount.c:249 sys-utils/umount.c:265
#, c-format
msgid "failed to switch namespace"
msgstr "error al cambiar el espacio de nombres"

#: libmount/src/context_mount.c:1724
#, c-format
msgid "mount failed: %m"
msgstr "el montaje ha fallado: %m"

#: libmount/src/context_mount.c:1734
#, c-format
msgid "filesystem was mounted, but failed to update userspace mount table"
msgstr "se ha montado  el sistema de ficheros, pero no se ha podido actualizar la tabla de montaje del espacio de usuario"

#: libmount/src/context_mount.c:1740
#, c-format
msgid "filesystem was mounted, but failed to switch namespace back"
msgstr "se ha montado el sistema de ficheros, pero ha fallado la vuelta al espacio de nombres"

#: libmount/src/context_mount.c:1747
#, c-format
msgid "filesystem was mounted, but any subsequent operation failed: %m"
msgstr "se montó el sistema de ficheros, pero toda operación subsiguiente falló: %m"

#: libmount/src/context_mount.c:1765 libmount/src/context_mount.c:1810
#, c-format
msgid "mount point is not a directory"
msgstr "el punto de montaje no es un directorio"

#: libmount/src/context_mount.c:1767 login-utils/newgrp.c:226
#, c-format
msgid "permission denied"
msgstr "permiso denegado"

#: libmount/src/context_mount.c:1769
#, c-format
msgid "must be superuser to use mount"
msgstr "debe ser superusuario para utilizar mount"

#: libmount/src/context_mount.c:1776
#, c-format
msgid "mount point is busy"
msgstr "punto de montaje ocupado"

#: libmount/src/context_mount.c:1783
#, c-format
msgid "%s already mounted on %s"
msgstr "%s ya está montado en %s"

#: libmount/src/context_mount.c:1787
#, c-format
msgid "%s already mounted or mount point busy"
msgstr "%s ya está montado o el punto de montaje está ocupado"

#: libmount/src/context_mount.c:1792
#, c-format
msgid "mount point does not exist"
msgstr "el punto de montaje no existe"

#: libmount/src/context_mount.c:1795
#, c-format
msgid "mount point is a symbolic link to nowhere"
msgstr "el punto de montaje es un enlace simbólico sin destino"

#: libmount/src/context_mount.c:1800
#, c-format
msgid "special device %s does not exist"
msgstr "el dispositivo especial %s no existe"

#: libmount/src/context_mount.c:1803 libmount/src/context_mount.c:1819
#: libmount/src/context_mount.c:1903 libmount/src/context_mount.c:1926
#, c-format
msgid "mount(2) system call failed: %m"
msgstr "la llamada al sistema mount(2) ha fallado: %m"

#: libmount/src/context_mount.c:1815
#, c-format
msgid "special device %s does not exist (a path prefix is not a directory)"
msgstr "el dispositivo especial %s no existe (un prefijo de ruta no es un directorio)"

#: libmount/src/context_mount.c:1827
#, c-format
msgid "mount point not mounted or bad option"
msgstr "el punto de montaje no se ha montado o una opción es incorrecta"

#: libmount/src/context_mount.c:1829
#, c-format
msgid "not mount point or bad option"
msgstr "no es punto de montaje o la opción es incorrecta"

#: libmount/src/context_mount.c:1832
#, c-format
msgid "bad option; moving a mount residing under a shared mount is unsupported"
msgstr "opción incorrecta; no se admite mover un montaje bajo un montaje compartido"

#: libmount/src/context_mount.c:1836
#, c-format
msgid "bad option; for several filesystems (e.g. nfs, cifs) you might need a /sbin/mount.<type> helper program"
msgstr "opción incorrecta; para varios sistemas de ficheros (v.g. nfs, cifs) podría ser necesario un programa auxiliar /sbin/mount.<tipo>"

#: libmount/src/context_mount.c:1840
#, c-format
msgid "wrong fs type, bad option, bad superblock on %s, missing codepage or helper program, or other error"
msgstr "tipo de sistema de ficheros incorrecto, opción incorrecta, superbloque incorrecto en %s, falta la página de códigos o el programa auxiliar, o algún otro error"

#: libmount/src/context_mount.c:1847
#, c-format
msgid "mount table full"
msgstr "tabla de dispositivos montados completa"

#: libmount/src/context_mount.c:1852
#, c-format
msgid "can't read superblock on %s"
msgstr "no se puede leer el superbloque en %s"

#: libmount/src/context_mount.c:1859
#, c-format
msgid "unknown filesystem type '%s'"
msgstr "tipo de sistema de ficheros '%s' desconocido"

#: libmount/src/context_mount.c:1862
#, c-format
msgid "unknown filesystem type"
msgstr "tipo de sistema de ficheros desconocido"

#: libmount/src/context_mount.c:1871
#, c-format
msgid "%s is not a block device, and stat(2) fails?"
msgstr "%s no es un dispositivo de bloques y ¿stat falla?"

#: libmount/src/context_mount.c:1874
#, c-format
msgid "the kernel does not recognize %s as a block device; maybe \"modprobe driver\" is necessary"
msgstr "el núcleo no reconoce %s como dispositivo de bloques; tal vez haga falta \"modprobe driver\""

#: libmount/src/context_mount.c:1877
#, c-format
msgid "%s is not a block device; try \"-o loop\""
msgstr "%s no es un dispositivo de bloques;  pruebe \"-o loop\""

#: libmount/src/context_mount.c:1879
#, c-format
msgid "%s is not a block device"
msgstr "%s no es un dispositivo de bloques"

#: libmount/src/context_mount.c:1886
#, c-format
msgid "%s is not a valid block device"
msgstr "%s no es un dispositivo de bloques válido"

#: libmount/src/context_mount.c:1894
#, c-format
msgid "cannot mount %s read-only"
msgstr "no se puede montar %s para solo lectura"

#: libmount/src/context_mount.c:1896
#, c-format
msgid "%s is write-protected but explicit read-write mode requested"
msgstr "%s está protegido contra escritura pero se ha solicitado modo de lectura y escritura"

#: libmount/src/context_mount.c:1898
#, c-format
msgid "cannot remount %s read-write, is write-protected"
msgstr "no se puede volver a montar %s para lectura y escritura; está protegido contra escritura"

#: libmount/src/context_mount.c:1900
#, c-format
msgid "bind %s failed"
msgstr "el vínculo %s falló"

#: libmount/src/context_mount.c:1911
#, c-format
msgid "no medium found on %s"
msgstr "no se ha encontrado ningún medio en %s"

#: libmount/src/context_mount.c:1918
#, c-format
msgid "cannot mount; probably corrupted filesystem on %s"
msgstr "no se podido montar; probablemente esté corrupto el sistema de ficheros en %s"

#: libmount/src/context_umount.c:1257 libmount/src/context_umount.c:1311
#, c-format
msgid "not mounted"
msgstr "no montado"

#: libmount/src/context_umount.c:1273
#, c-format
msgid "umount failed: %m"
msgstr "umount ha fallado: %m"

#: libmount/src/context_umount.c:1282
#, c-format
msgid "filesystem was unmounted, but failed to update userspace mount table"
msgstr "se ha desmontado el sistema de ficheros, pero no se ha podido actualizar la tabla de montaje del espacio de usuario"

#: libmount/src/context_umount.c:1288
#, c-format
msgid "filesystem was unmounted, but failed to switch namespace back"
msgstr "se ha desmontado el sistema de ficheros, pero ha fallado la vuelta al espacio de nombres"

#: libmount/src/context_umount.c:1295
#, c-format
msgid "filesystem was unmounted, but any subsequent operation failed: %m"
msgstr "se ha desmontado el sistema de ficheros, pero cualquier operación posterior ha fallado: %m"

#: libmount/src/context_umount.c:1308
#, c-format
msgid "invalid block device"
msgstr "dispositivo de bloques no válido"

#: libmount/src/context_umount.c:1314
#, c-format
msgid "can't write superblock"
msgstr "no se puede escribir el superbloque"

#: libmount/src/context_umount.c:1317
#, c-format
msgid "target is busy"
msgstr "el destino está ocupado"

#: libmount/src/context_umount.c:1320
#, c-format
msgid "no mount point specified"
msgstr "no se ha especificado punto de montaje"

#: libmount/src/context_umount.c:1323
#, c-format
msgid "must be superuser to unmount"
msgstr "debe ser superusuario para desmontar"

#: libmount/src/context_umount.c:1326
#, c-format
msgid "block devices are not permitted on filesystem"
msgstr "no se permiten dispositivos de bloque en el sistema de ficheros"

#: libmount/src/context_umount.c:1329
#, c-format
msgid "umount(2) system call failed: %m"
msgstr "la llamada al sistema umount(2) ha fallado: %m"

#: lib/pager.c:112
#, c-format
msgid "waitpid failed (%s)"
msgstr "waitpid ha fallado (%s)"

#: lib/plymouth-ctrl.c:73
msgid "cannot open UNIX socket"
msgstr "no se puede abrir el «socket» de UNIX"

#: lib/plymouth-ctrl.c:79
msgid "cannot set option for UNIX socket"
msgstr "no se puede configurar la opción para «socket» de UNIX"

#: lib/plymouth-ctrl.c:90
msgid "cannot connect on UNIX socket"
msgstr "no se puede conectar al «socket» de UNIX"

#: lib/plymouth-ctrl.c:128
#, c-format
msgid "the plymouth request %c is not implemented"
msgstr "la petición «plymouth» %c no está implementada"

#: lib/randutils.c:189
msgid "getrandom() function"
msgstr "función getrandom()"

#: lib/randutils.c:202
msgid "libc pseudo-random functions"
msgstr "funciones pseudoaleatorias de libc"

#: lib/swapprober.c:17 lib/swapprober.c:30
#, c-format
msgid "%s: unable to probe device"
msgstr "%s: no se puede sondear el dispositivo"

#: lib/swapprober.c:32
#, c-format
msgid "%s: ambiguous probing result; use wipefs(8)"
msgstr "%s: resultado del sondeo ambiguo; utilice wipefs(8)"

#: lib/swapprober.c:34
#, c-format
msgid "%s: not a valid swap partition"
msgstr "%s: no es una partición de intercambio válida"

#: lib/swapprober.c:41
#, c-format
msgid "%s: unsupported swap version '%s'"
msgstr "%s: versión de intercambio desconocida '%s'"

#: lib/timeutils.c:465
msgid "format_iso_time: buffer overflow."
msgstr "format_iso_time: desbordamiento de «buffer»."

#: lib/timeutils.c:483 lib/timeutils.c:507
#, c-format
msgid "time %ld is out of range."
msgstr "el tiempo %ld está fuera de rango."

#: login-utils/chfn.c:96 login-utils/chsh.c:75 login-utils/lslogins.c:1378
#, c-format
msgid " %s [options] [<username>]\n"
msgstr " %s [opciones] [<nombreusuario>]\n"

#: login-utils/chfn.c:99
msgid "Change your finger information.\n"
msgstr "Cambia la información de finger.\n"

#: login-utils/chfn.c:102
msgid " -f, --full-name <full-name>  real name\n"
msgstr " -f, --full-name <nombre-completo>  nombre real\n"

#: login-utils/chfn.c:103
msgid " -o, --office <office>        office number\n"
msgstr " -o, --office <oficina>       número de oficina\n"

#: login-utils/chfn.c:104
msgid " -p, --office-phone <phone>   office phone number\n"
msgstr " -p, --office-phone <teléfono>   número de teléfono de la oficina\n"

#: login-utils/chfn.c:105
msgid " -h, --home-phone <phone>     home phone number\n"
msgstr " -h, --home-phone <teléfono>  número de teléfono de casa\n"

#: login-utils/chfn.c:123
#, c-format
msgid "field %s is too long"
msgstr "Campo %s demasiado largo."

#: login-utils/chfn.c:127 login-utils/chsh.c:237
#, c-format
msgid "%s: has illegal characters"
msgstr "%s: tiene caracteres no válidos"

#: login-utils/chfn.c:156 login-utils/chfn.c:162 login-utils/chfn.c:168
#: login-utils/chfn.c:174
#, c-format
msgid "login.defs forbids setting %s"
msgstr "login.defs prohibe configurar %s"

#: login-utils/chfn.c:162 login-utils/chfn.c:164 login-utils/chfn.c:324
msgid "Office"
msgstr "Oficina"

#: login-utils/chfn.c:168 login-utils/chfn.c:170 login-utils/chfn.c:326
msgid "Office Phone"
msgstr "Teléfono de la oficina"

#: login-utils/chfn.c:174 login-utils/chfn.c:176 login-utils/chfn.c:328
msgid "Home Phone"
msgstr "Teléfono de casa"

#: login-utils/chfn.c:193 login-utils/chsh.c:187
msgid "cannot handle multiple usernames"
msgstr "no se pueden manejar nombres de usuario múltiples"

#: login-utils/chfn.c:247
msgid "Aborted."
msgstr "Interrumpida."

#: login-utils/chfn.c:310
#, c-format
msgid "%s: CHFN_RESTRICT has unexpected value: %s"
msgstr "%s: CHFN_RESTRICT tiene un valor inesperado: %s"

#: login-utils/chfn.c:312
#, c-format
msgid "%s: CHFN_RESTRICT does not allow any changes"
msgstr "%s: CHFN_RESTRICT no permite ningún cambio"

#: login-utils/chfn.c:394
#, c-format
msgid "Finger information *NOT* changed.  Try again later.\n"
msgstr "*NO* se ha cambiado la información de finger. Inténtelo de nuevo más adelante.\n"

#: login-utils/chfn.c:398
#, c-format
msgid "Finger information changed.\n"
msgstr "Se ha cambiado la información de finger.\n"

#: login-utils/chfn.c:424 login-utils/chsh.c:274
#, c-format
msgid "you (user %d) don't exist."
msgstr "usted (el usuario %d) no existe."

#: login-utils/chfn.c:430 login-utils/chsh.c:279 login-utils/libuser.c:59
#, c-format
msgid "user \"%s\" does not exist."
msgstr "el usuario \"%s\" no existe."

#: login-utils/chfn.c:436 login-utils/chsh.c:285
msgid "can only change local entries"
msgstr "sólo se pueden modificar entradas locales"

#: login-utils/chfn.c:449
#, c-format
msgid "%s is not authorized to change the finger info of %s"
msgstr "%s no está autorizado a cambiar la información de finger de %s"

#: login-utils/chfn.c:451 login-utils/chsh.c:301
msgid "Unknown user context"
msgstr "Contexto de usuario desconocido"

#: login-utils/chfn.c:457 login-utils/chsh.c:307
#, c-format
msgid "can't set default context for %s"
msgstr "no se puede establecer el contexto predeterminado para %s"

#: login-utils/chfn.c:468
msgid "running UID doesn't match UID of user we're altering, change denied"
msgstr "el UID en ejecución no coincide con el UID del usuario que se está alterando; cambio denegado"

#: login-utils/chfn.c:472
#, c-format
msgid "Changing finger information for %s.\n"
msgstr "Cambiando información de finger para %s.\n"

#: login-utils/chfn.c:486
#, c-format
msgid "Finger information not changed.\n"
msgstr "No se ha cambiado la información de finger.\n"

#: login-utils/chsh.c:78
msgid "Change your login shell.\n"
msgstr "Cambia el intérprete de órdenes de inicio de sesión.\n"

#: login-utils/chsh.c:81
msgid " -s, --shell <shell>  specify login shell\n"
msgstr " -s, --shell <shell>  especifica el intérprete de órdenes de login\n"

#: login-utils/chsh.c:82
msgid " -l, --list-shells    print list of shells and exit\n"
msgstr " -l, --list-shells    imprime la lista de shells y sale\n"

#: login-utils/chsh.c:231
msgid "shell must be a full path name"
msgstr "el intérprete de órdenes debe ser un nombre de ruta completo."

#: login-utils/chsh.c:233
#, c-format
msgid "\"%s\" does not exist"
msgstr "\"%s\" no existe"

#: login-utils/chsh.c:235
#, c-format
msgid "\"%s\" is not executable"
msgstr "\"%s\" no es ejecutable"

#: login-utils/chsh.c:241
#, c-format
msgid "Warning: \"%s\" is not listed in %s."
msgstr "Atención: \"%s\" no figura en %s."

#: login-utils/chsh.c:245 login-utils/chsh.c:249
#, c-format
msgid ""
"\"%s\" is not listed in %s.\n"
"Use %s -l to see list."
msgstr ""
"\"%s\" no figura en %s.\n"
"Utilice %s -l para ver la lista."

#: login-utils/chsh.c:300
#, c-format
msgid "%s is not authorized to change the shell of %s"
msgstr "%s no está autorizado a cambiar el intérprete de órdenes de %s"

#: login-utils/chsh.c:326
msgid "running UID doesn't match UID of user we're altering, shell change denied"
msgstr "el UID en ejecución no coincide con el UID del usuario que se está alterando; cambio de el intérprete de órdenes denegado"

#: login-utils/chsh.c:331
#, c-format
msgid "your shell is not in %s, shell change denied"
msgstr "el intérprete de órdenes no está en %s; cambio de intérprete de órdenes denegado"

#: login-utils/chsh.c:335
#, c-format
msgid "Changing shell for %s.\n"
msgstr "Cambiando intérprete de órdenes para %s.\n"

#: login-utils/chsh.c:343
msgid "New shell"
msgstr "Nuevo intérprete de órdenes"

#: login-utils/chsh.c:351
msgid "Shell not changed."
msgstr "No se ha cambiado el intérprete de órdenes."

#: login-utils/chsh.c:356
msgid "Shell *NOT* changed.  Try again later."
msgstr "*NO* se ha cambiado el intérprete de órdenes. Inténtelo de nuevo más adelante."

#: login-utils/chsh.c:360
msgid ""
"setpwnam failed\n"
"Shell *NOT* changed.  Try again later."
msgstr ""
"setpwnam ha fallado\n"
"*NO* se ha cambiado el intérprete de órdenes. Inténtelo de nuevo más adelante."

#: login-utils/chsh.c:364
#, c-format
msgid "Shell changed.\n"
msgstr "Se ha cambiado el intérprete de órdenes.\n"

#: login-utils/islocal.c:95
#, c-format
msgid "Usage: %s <passwordfile> <username>...\n"
msgstr "Modo de empleo: %s <ficherocontraseña> <nombreusuario>...\n"

#: login-utils/last.c:169 login-utils/lslogins.c:1369 sys-utils/dmesg.c:1288
#: sys-utils/lsipc.c:282
#, c-format
msgid "unknown time format: %s"
msgstr "formato de tiempo desconocido: %s"

#: login-utils/last.c:278 login-utils/last.c:286
#, c-format
msgid "Interrupted %s"
msgstr "interrumpido %s"

#: login-utils/last.c:443 login-utils/last.c:454 login-utils/last.c:897
msgid "preallocation size exceeded"
msgstr "tamaño de prerreserva excedido"

#: login-utils/last.c:573
#, c-format
msgid " %s [options] [<username>...] [<tty>...]\n"
msgstr " %s [opcinoes] [<nombreusuario>...] [<tty>...]\n"

#: login-utils/last.c:576
msgid "Show a listing of last logged in users.\n"
msgstr "Muestra una lista de los últimos usuarios que han tenido sesión.\n"

#: login-utils/last.c:579
msgid " -<number>            how many lines to show\n"
msgstr " -<número>            cuántas líneas mostrar\n"

#: login-utils/last.c:580
msgid " -a, --hostlast       display hostnames in the last column\n"
msgstr " -a, --hostlast       muestra los nombres de máquina en la última columna\n"

#: login-utils/last.c:581
msgid " -d, --dns            translate the IP number back into a hostname\n"
msgstr " -d, --dns            traduce el número IP en un nombre de máquina\n"

#: login-utils/last.c:583
#, c-format
msgid " -f, --file <file>    use a specific file instead of %s\n"
msgstr " -f, --file <fichero> utiliza un fichero específico en lugar de %s\n"

#: login-utils/last.c:584
msgid " -F, --fulltimes      print full login and logout times and dates\n"
msgstr " -F, --fulltimes      imprime las horas y fechas absolutas de inicio y fin de sesión\n"

#: login-utils/last.c:585
msgid " -i, --ip             display IP numbers in numbers-and-dots notation\n"
msgstr " -i, --ip             muestra los números IP en notación decimal punteada\n"

#: login-utils/last.c:586
msgid " -n, --limit <number> how many lines to show\n"
msgstr " -n, --limit <número> cuántas líneas mostrar\n"

#: login-utils/last.c:587
msgid " -R, --nohostname     don't display the hostname field\n"
msgstr " -R, --nohostname     no mostrar el campo de nombre de máquina\n"

#: login-utils/last.c:588
msgid " -s, --since <time>   display the lines since the specified time\n"
msgstr " -s, --since <hora>   muestra las líneas que hay desde la hora especificada\n"

#: login-utils/last.c:589
msgid " -t, --until <time>   display the lines until the specified time\n"
msgstr " -t, --until <time>  muestra las líneas que hay hasta la hora especificada\n"

#: login-utils/last.c:590
msgid " -p, --present <time> display who were present at the specified time\n"
msgstr " -p, --present <time> muestra quiénes estaban presentes a la hora especificada\n"

#: login-utils/last.c:591
msgid " -w, --fullnames      display full user and domain names\n"
msgstr " -w, --fullnames      muestra los nombres de usuario y de dominio completos\n"

#: login-utils/last.c:592
msgid " -x, --system         display system shutdown entries and run level changes\n"
msgstr " -x, --system         muestra las entradas de paradas del sistema y los cambios de nivel de ejecución\n"

#: login-utils/last.c:593
msgid ""
"     --time-format <format>  show timestamps in the specified <format>:\n"
"                               notime|short|full|iso\n"
msgstr ""
"     --time-format <formato> muestra el sello de tiempo en el <formato> especificado:\n"
"                               notime|short|full|iso\n"

#: login-utils/last.c:898
#, c-format
msgid ""
"\n"
"%s begins %s\n"
msgstr ""
"\n"
"%s empieza %s\n"

#: login-utils/last.c:976 term-utils/scriptlive.c:85 term-utils/scriptlive.c:89
#: term-utils/scriptreplay.c:79 term-utils/scriptreplay.c:83
#: text-utils/more.c:280 text-utils/more.c:286
msgid "failed to parse number"
msgstr "fallo al analizar número"

#: login-utils/last.c:997 login-utils/last.c:1002 login-utils/last.c:1007
#: sys-utils/rtcwake.c:512
#, c-format
msgid "invalid time value \"%s\""
msgstr "Valor de hora no válido: \"%s\""

#: login-utils/libuser.c:29 login-utils/libuser.c:31
msgid "Couldn't drop group privileges"
msgstr "No se han podido retirar los privilegios de grupo"

#: login-utils/libuser.c:47
#, c-format
msgid "libuser initialization failed: %s."
msgstr "La inicialización de libuser ha fallado: %s."

#: login-utils/libuser.c:52
msgid "changing user attribute failed"
msgstr "no se ha podido cambiar el atributo de usuario"

#: login-utils/libuser.c:66
#, c-format
msgid "user attribute not changed: %s"
msgstr "atributo de usuario no modificado: %s"

#: login-utils/login.c:366
#, c-format
msgid "FATAL: can't reopen tty: %m"
msgstr "ERROR FATAL: no se puede reabrir la terminal: %m"

#: login-utils/login.c:372
#, c-format
msgid "FATAL: %s is not a terminal"
msgstr "ERROR FATAL: %s no es una terminal"

#: login-utils/login.c:390
#, c-format
msgid "chown (%s, %lu, %lu) failed: %m"
msgstr "chown (%s, %lu, %lu) ha fallado: %m"

#: login-utils/login.c:394
#, c-format
msgid "chmod (%s, %u) failed: %m"
msgstr "chmod (%s, %u) ha fallado: %m"

#: login-utils/login.c:455
msgid "FATAL: bad tty"
msgstr "ERROR FATAL: Terminal errónea"

#: login-utils/login.c:473
#, c-format
msgid "FATAL: %s: change permissions failed: %m"
msgstr "ERROR FATAL: %s: no se han podido cambiar los permisos: %m"

#: login-utils/login.c:604
#, c-format
msgid "Last login: %.*s "
msgstr "Último inicio de sesión: %.*s "

#: login-utils/login.c:606
#, c-format
msgid "from %.*s\n"
msgstr "desde %.*s\n"

#: login-utils/login.c:609
#, c-format
msgid "on %.*s\n"
msgstr "en %.*s\n"

#: login-utils/login.c:625
msgid "write lastlog failed"
msgstr "fallo de escritura de lastlog"

#: login-utils/login.c:716
#, c-format
msgid "DIALUP AT %s BY %s"
msgstr "Conexión telefónica en %s por %s"

#: login-utils/login.c:721
#, c-format
msgid "ROOT LOGIN ON %s FROM %s"
msgstr "Inicio de sesión con root en %s desde %s"

#: login-utils/login.c:724
#, c-format
msgid "ROOT LOGIN ON %s"
msgstr "Inicio de sesión con root en %s"

#: login-utils/login.c:727
#, c-format
msgid "LOGIN ON %s BY %s FROM %s"
msgstr "Inicio de sesión en %s por %s desde %s"

#: login-utils/login.c:730
#, c-format
msgid "LOGIN ON %s BY %s"
msgstr "Inicio de sesión en %s por %s"

#: login-utils/login.c:764
msgid "login: "
msgstr "Inicio de sesión: "

#: login-utils/login.c:795
#, c-format
msgid "PAM failure, aborting: %s"
msgstr "error de PAM; se interrumpe: %s"

#: login-utils/login.c:796
#, c-format
msgid "Couldn't initialize PAM: %s"
msgstr "No se ha podido inicializar PAM: %s"

#: login-utils/login.c:866
#, c-format
msgid "FAILED LOGIN %u FROM %s FOR %s, %s"
msgstr "Error de inicio de sesión %u desde %s para %s, %s"

#: login-utils/login.c:874 login-utils/sulogin.c:1013
#, c-format
msgid ""
"Login incorrect\n"
"\n"
msgstr ""
"Inicio de sesión incorrecto\n"
"\n"

#: login-utils/login.c:889
#, c-format
msgid "TOO MANY LOGIN TRIES (%u) FROM %s FOR %s, %s"
msgstr "Demasiados intentos de inicio de sesión (%u) desde %s para %s, %s"

#: login-utils/login.c:895
#, c-format
msgid "FAILED LOGIN SESSION FROM %s FOR %s, %s"
msgstr "Error de sesión de inicio de sesión desde %s para %s, %s"

#: login-utils/login.c:903
#, c-format
msgid ""
"\n"
"Login incorrect\n"
msgstr ""
"\n"
"Inicio de sesión incorrecto\n"

#: login-utils/login.c:931 login-utils/login.c:1314 login-utils/login.c:1337
msgid ""
"\n"
"Session setup problem, abort."
msgstr ""
"\n"
"Problema al iniciar la sesión, abortado."

#: login-utils/login.c:932
msgid "NULL user name. Abort."
msgstr "Nombre de usuario NULO. Abortado."

#: login-utils/login.c:1070
#, c-format
msgid "TIOCSCTTY failed: %m"
msgstr "Fallo en TIOCSCTTY: %m"

#: login-utils/login.c:1174
#, c-format
msgid " %s [-p] [-h <host>] [-H] [[-f] <username>]\n"
msgstr "%s [-p] [-h <host>] [-H] [[-f] <nombreusuario>]\n"

#: login-utils/login.c:1176
msgid "Begin a session on the system.\n"
msgstr "Inicia una sesión en el sistema.\n"

#: login-utils/login.c:1179
msgid " -p             do not destroy the environment"
msgstr " -p             no destruye el entorno"

#: login-utils/login.c:1180
msgid " -f             skip a login authentication"
msgstr " -f             salta autenticación de usuario"

#: login-utils/login.c:1181
msgid " -h <host>      hostname to be used for utmp logging"
msgstr " -h <host>      nombre de máaquina para el log de utmp"

#: login-utils/login.c:1182
msgid " -H             suppress hostname in the login prompt"
msgstr " -H             suprime el nombre de host en el indicador de inicio de sesión"

#: login-utils/login.c:1228
#, c-format
msgid "%s: timed out after %u seconds"
msgstr "%s: superado el tiempo de espera tras %u segundos"

#: login-utils/login.c:1255
#, c-format
msgid "login: -h is for superuser only\n"
msgstr "login: -h es solo para superusuario\n"

#: login-utils/login.c:1315
#, c-format
msgid "Invalid user name \"%s\". Abort."
msgstr "Nombre de usuario no válido \"%s\". Abortado."

#: login-utils/login.c:1336
#, c-format
msgid "groups initialization failed: %m"
msgstr "ha fallado la inicialización de los grupos: %m"

#: login-utils/login.c:1361 sys-utils/mount.c:57 sys-utils/umount.c:122
msgid "setgid() failed"
msgstr "setgid() ha fallado"

#: login-utils/login.c:1391
#, c-format
msgid "You have new mail.\n"
msgstr "Tiene correo nuevo.\n"

#: login-utils/login.c:1393
#, c-format
msgid "You have mail.\n"
msgstr "Tiene correo.\n"

#: login-utils/login.c:1407 sys-utils/mount.c:60 sys-utils/umount.c:125
msgid "setuid() failed"
msgstr "setuid() ha fallado"

#: login-utils/login.c:1413 login-utils/sulogin.c:731
#, c-format
msgid "%s: change directory failed"
msgstr "%s: no se ha podido cambiar de directorio"

#: login-utils/login.c:1420 login-utils/sulogin.c:732
#, c-format
msgid "Logging in with home = \"/\".\n"
msgstr "Iniciando la sesión con directorio de inicio = \"/\".\n"

#: login-utils/login.c:1446
msgid "couldn't exec shell script"
msgstr "no se ha podido ejecutar el script de intérprete de órdenes"

#: login-utils/login.c:1448
msgid "no shell"
msgstr "no hay ningún intérprete de órdenes"

#: login-utils/logindefs.c:216
#, c-format
msgid "%s: %s contains invalid numerical value: %s"
msgstr "%s: %s contiene un Valor numérico no válido: %s"

#: login-utils/logindefs.c:266
#, c-format
msgid "Error reading login.defs: %s"
msgstr "Error al leer login.defs: %s"

#: login-utils/logindefs.c:333 login-utils/logindefs.c:353
#: login-utils/logindefs.c:379
#, c-format
msgid "couldn't fetch %s: %s"
msgstr "no se ha podido obtener %s: %s"

#: login-utils/logindefs.c:537
msgid "hush login status: restore original IDs failed"
msgstr "estado de inicio de sesión silencioso: fallo al restaurar los IDs originales"

#: login-utils/lslogins.c:217 sys-utils/lscpu.c:1602 sys-utils/lscpu.c:1612
#: sys-utils/lsmem.c:266
msgid "no"
msgstr "no"

#: login-utils/lslogins.c:226 misc-utils/lsblk.c:189
msgid "user name"
msgstr "nombre del usuario"

#: login-utils/lslogins.c:226
msgid "Username"
msgstr "Nombre del usuario"

#: login-utils/lslogins.c:227 sys-utils/renice.c:54
msgid "user ID"
msgstr "ID del usuario"

#: login-utils/lslogins.c:228
msgid "password not required"
msgstr "no hace falta contraseña"

#: login-utils/lslogins.c:228
msgid "Password not required"
msgstr "No hace falta contraseña"

#: login-utils/lslogins.c:229
msgid "login by password disabled"
msgstr "inicio de sesión por contraseña desactivado"

#: login-utils/lslogins.c:229
msgid "Login by password disabled"
msgstr "Inicio de sesión por contraseña desactivado"

#: login-utils/lslogins.c:230
msgid "password defined, but locked"
msgstr "contraseña definida, pero está bloqueada"

#: login-utils/lslogins.c:230
msgid "Password is locked"
msgstr "La contraseña está bloqueada"

#: login-utils/lslogins.c:231
msgid "password encryption method"
msgstr "método de cifrado de contraseña"

#: login-utils/lslogins.c:231
msgid "Password encryption method"
msgstr "Método de cifrado de contraseña"

#: login-utils/lslogins.c:232
msgid "log in disabled by nologin(8) or pam_nologin(8)"
msgstr "inicio de sesión desactivado por nologin(8) o pam_nologin(8)"

#: login-utils/lslogins.c:232
msgid "No login"
msgstr "No se inicia sesión"

#: login-utils/lslogins.c:233
msgid "primary group name"
msgstr "nombre de grupo primario"

#: login-utils/lslogins.c:233
msgid "Primary group"
msgstr "Grupo primario"

#: login-utils/lslogins.c:234
msgid "primary group ID"
msgstr "ID del grupo primario"

#: login-utils/lslogins.c:235
msgid "supplementary group names"
msgstr "nombres de grupo suplementarios"

#: login-utils/lslogins.c:235
msgid "Supplementary groups"
msgstr "Grupos suplementarios"

#: login-utils/lslogins.c:236
msgid "supplementary group IDs"
msgstr "IDs de grupos suplementarios"

#: login-utils/lslogins.c:236
msgid "Supplementary group IDs"
msgstr "IDs de grupos suplementarios"

#: login-utils/lslogins.c:237
msgid "home directory"
msgstr "directorio home"

#: login-utils/lslogins.c:237
msgid "Home directory"
msgstr "Directorio home"

#: login-utils/lslogins.c:238
msgid "login shell"
msgstr "intérprete de órdenes de inicio de sesión"

#: login-utils/lslogins.c:238
msgid "Shell"
msgstr "Intérprete de órdenes"

#: login-utils/lslogins.c:239
msgid "full user name"
msgstr "nombre de usuario completo"

#: login-utils/lslogins.c:239
msgid "Gecos field"
msgstr "Campo gecos"

#: login-utils/lslogins.c:240
msgid "date of last login"
msgstr "fecha del último inicio de sesión"

#: login-utils/lslogins.c:240
msgid "Last login"
msgstr "Último inicio de sesión"

#: login-utils/lslogins.c:241
msgid "last tty used"
msgstr "último terminal utilizado"

#: login-utils/lslogins.c:241
msgid "Last terminal"
msgstr "Último terminal"

#: login-utils/lslogins.c:242
msgid "hostname during the last session"
msgstr "nombre de máquina durante la última sesión"

#: login-utils/lslogins.c:242
msgid "Last hostname"
msgstr "Último nombre de máquina"

#: login-utils/lslogins.c:243
msgid "date of last failed login"
msgstr "fecha del último inicio de sesión fallido"

#: login-utils/lslogins.c:243
msgid "Failed login"
msgstr "Inicio de sesión fallido"

#: login-utils/lslogins.c:244
msgid "where did the login fail?"
msgstr "¿dónde ha fallado el inicio de sesión"

#: login-utils/lslogins.c:244
msgid "Failed login terminal"
msgstr "Terminal del inicio de sesión fallido"

#: login-utils/lslogins.c:245
msgid "user's hush settings"
msgstr "configuración de silencio del usuario"

#: login-utils/lslogins.c:245
msgid "Hushed"
msgstr "Silencioso"

#: login-utils/lslogins.c:246
msgid "days user is warned of password expiration"
msgstr "días que el usuario es advertido de la caducidad de la contraseña"

#: login-utils/lslogins.c:246
msgid "Password expiration warn interval"
msgstr "intervalo de aviso de caducidad de la contraseña"

#: login-utils/lslogins.c:247
msgid "password expiration date"
msgstr "fecha de caducidad de la contraseña"

#: login-utils/lslogins.c:247
msgid "Password expiration"
msgstr "Caducidad de contraseña"

#: login-utils/lslogins.c:248
msgid "date of last password change"
msgstr "fecha del último cambio de contraseña"

#: login-utils/lslogins.c:248
msgid "Password changed"
msgstr "Se ha cambiado la contraseña"

#: login-utils/lslogins.c:249
msgid "number of days required between changes"
msgstr "número de días requeridos entre cambios"

#: login-utils/lslogins.c:249
msgid "Minimum change time"
msgstr "Fecha más temprana para cambiar"

#: login-utils/lslogins.c:250
msgid "max number of days a password may remain unchanged"
msgstr "máximo número de días que una contraseña puede permanecer sin modificarse"

#: login-utils/lslogins.c:250
msgid "Maximum change time"
msgstr "Fecha de modificación más tardía"

#: login-utils/lslogins.c:251
msgid "the user's security context"
msgstr "contexto de seguridad del usuario"

#: login-utils/lslogins.c:251
msgid "Selinux context"
msgstr "Contexto SELinux"

#: login-utils/lslogins.c:252
msgid "number of processes run by the user"
msgstr "número de procesos ejecutados por el usuario"

#: login-utils/lslogins.c:252
msgid "Running processes"
msgstr "Procesos en ejecución"

#: login-utils/lslogins.c:301 misc-utils/findmnt.c:136 misc-utils/lsblk.c:229
#: sys-utils/lsipc.c:204 sys-utils/lsmem.c:145
#, c-format
msgid "too many columns specified, the limit is %zu columns"
msgstr "se han especificado demasiadas columnas; el límite es %zu columnas"

#: login-utils/lslogins.c:355 sys-utils/lsipc.c:467
msgid "unsupported time type"
msgstr "tipo de hora no admitido"

#: login-utils/lslogins.c:359
msgid "failed to compose time string"
msgstr "fallo al componer la cadena de la hora"

#: login-utils/lslogins.c:759
msgid "failed to get supplementary groups"
msgstr "no se han podido obtener grupos suplementarios"

#: login-utils/lslogins.c:1045
#, c-format
msgid "cannot found '%s'"
msgstr "no se puede encontrar '%s'"

#: login-utils/lslogins.c:1221
msgid "internal error: unknown column"
msgstr "error interno: columna desconocida"

#: login-utils/lslogins.c:1318
#, c-format
msgid ""
"\n"
"Last logs:\n"
msgstr ""
"\n"
"Últimas conexiones:\n"

#: login-utils/lslogins.c:1381
msgid "Display information about known users in the system.\n"
msgstr "Muestra información sobre los usuarios conocidos en el sistema.\n"

#: login-utils/lslogins.c:1384
msgid " -a, --acc-expiration     display info about passwords expiration\n"
msgstr " -a, --acc-expiration     muestra información sobre la caducidad de las contraseñas\n"

#: login-utils/lslogins.c:1385
msgid " -c, --colon-separate     display data in a format similar to /etc/passwd\n"
msgstr " -c  --colun-separate     muestra los datos en un formato similar a /etc/passwd\n"

#: login-utils/lslogins.c:1386 sys-utils/lsipc.c:310
msgid " -e, --export             display in an export-able output format\n"
msgstr " -e, --export             muestra en un formato de salida exportable\n"

#: login-utils/lslogins.c:1387
msgid " -f, --failed             display data about the users' last failed logins\n"
msgstr "  -f, --failed            muestra información sobre los últimos inicios de sesión fallidos de los usuarios\n"

#: login-utils/lslogins.c:1388
msgid " -G, --supp-groups        display information about groups\n"
msgstr " -G, --supp-groups        muestra información sobre los grupos\n"

#: login-utils/lslogins.c:1389
msgid " -g, --groups=<groups>    display users belonging to a group in <groups>\n"
msgstr " -g, --groups=<grupos>    muestra los usuarios que pertenecen a uno de los grupos en <grupos>\n"

#: login-utils/lslogins.c:1390
msgid " -L, --last               show info about the users' last login sessions\n"
msgstr "  -L, --last              muestra información sobre las últimas sesiones de los usuarios\n"

#: login-utils/lslogins.c:1391
msgid " -l, --logins=<logins>    display only users from <logins>\n"
msgstr " -l, --logins=<logins>    muestra únicamente los usuarios que estén en <logins>\n"

#: login-utils/lslogins.c:1392 sys-utils/lsipc.c:312
msgid " -n, --newline            display each piece of information on a new line\n"
msgstr " -n, --newline            muestra cada bloque de información en una línea distinta\n"

#: login-utils/lslogins.c:1393 sys-utils/lsipc.c:305
msgid "     --noheadings         don't print headings\n"
msgstr "     --noheadings         no imprime las cabeceras\n"

#: login-utils/lslogins.c:1394 sys-utils/lsipc.c:306
msgid "     --notruncate         don't truncate output\n"
msgstr "     --notruncate         no trunca la salida\n"

#: login-utils/lslogins.c:1395 sys-utils/lsipc.c:314
msgid " -o, --output[=<list>]    define the columns to output\n"
msgstr " -o, --output[=<lista>]   define las columnas de la salida\n"

#: login-utils/lslogins.c:1396
msgid "     --output-all         output all columns\n"
msgstr "     --output-all         saca todas las columnas\n"

#: login-utils/lslogins.c:1397
msgid " -p, --pwd                display information related to login by password.\n"
msgstr " -p, --pwd                muestra información relacionada con inicio de sesión, por contraseña\n"

#: login-utils/lslogins.c:1398 sys-utils/lsipc.c:316
msgid " -r, --raw                display in raw mode\n"
msgstr " -r, --raw                muestra en modo bruto\n"

#: login-utils/lslogins.c:1399
msgid " -s, --system-accs        display system accounts\n"
msgstr " -s, --system-accs        muestra las cuentas del sistema\n"

#: login-utils/lslogins.c:1400 sys-utils/lsipc.c:307
msgid "     --time-format=<type> display dates in short, full or iso format\n"
msgstr "     --time-format=<tipo> muestra las fechas en formato breve, completo o iso\n"

#: login-utils/lslogins.c:1401
msgid " -u, --user-accs          display user accounts\n"
msgstr " -u, --user-accs          muestra las cuentas de los usuarios\n"

#: login-utils/lslogins.c:1402
msgid " -Z, --context            display SELinux contexts\n"
msgstr " -Z, --context            muestras los contextos SELinux\n"

#: login-utils/lslogins.c:1403
msgid " -z, --print0             delimit user entries with a nul character\n"
msgstr " -z, --print0             delimita las entradas de los usuarios mediante un carácter nulo\n"

#: login-utils/lslogins.c:1404
msgid "     --wtmp-file <path>   set an alternate path for wtmp\n"
msgstr "     --wtmp-file <ruta>   establece una ruta alternativa para wtmp\n"

#: login-utils/lslogins.c:1405
msgid "     --btmp-file <path>   set an alternate path for btmp\n"
msgstr "     --btmp-file <ruta>   establece una ruta alternativa para btmp\n"

#: login-utils/lslogins.c:1406
msgid "     --lastlog <path>     set an alternate path for lastlog\n"
msgstr "     --lastlog <ruta>     establece una ruta alternativa para lastlog\n"

#: login-utils/lslogins.c:1595
msgid "failed to request selinux state"
msgstr "no se ha podido consultar el estado de SELinux"

#: login-utils/lslogins.c:1609 login-utils/lslogins.c:1614
msgid "Only one user may be specified. Use -l for multiple users."
msgstr "Solo se puede especificar un usuario. Utilice -l para múltiples usuarios."

#: login-utils/newgrp.c:49 login-utils/newgrp.c:55
msgid "could not set terminal attributes"
msgstr "no se han podido configurar los atributos del terminal"

#: login-utils/newgrp.c:57
msgid "getline() failed"
msgstr "getline() ha fallado"

#: login-utils/newgrp.c:150
msgid "Password: "
msgstr "Contraseña: "

#: login-utils/newgrp.c:160 login-utils/sulogin.c:997
msgid "crypt failed"
msgstr "crypt ha fallado"

#: login-utils/newgrp.c:173
#, c-format
msgid " %s <group>\n"
msgstr " %s <grupo>\n"

#: login-utils/newgrp.c:176
msgid "Log in to a new group.\n"
msgstr "Inicia sesión con un grupo distinto.\n"

#: login-utils/newgrp.c:212
msgid "who are you?"
msgstr "¿quién es usted?"

#: login-utils/newgrp.c:216 login-utils/newgrp.c:228 sys-utils/nsenter.c:482
#: sys-utils/unshare.c:663 text-utils/more.c:1256
msgid "setgid failed"
msgstr "setgid ha fallado"

#: login-utils/newgrp.c:221 login-utils/newgrp.c:223
msgid "no such group"
msgstr "no hay tal grupo"

#: login-utils/newgrp.c:232 sys-utils/nsenter.c:484 sys-utils/unshare.c:666
#: text-utils/more.c:1254
msgid "setuid failed"
msgstr "setuid ha fallado"

#: login-utils/nologin.c:27 misc-utils/lslocks.c:528 misc-utils/mcookie.c:83
#: misc-utils/uuidd.c:62 misc-utils/uuidgen.c:26 sys-utils/dmesg.c:269
#: sys-utils/ipcmk.c:67 sys-utils/irqtop.c:217 sys-utils/lscpu.c:2261
#: sys-utils/lsipc.c:291 sys-utils/lsirq.c:57 sys-utils/lsmem.c:506
#: sys-utils/readprofile.c:104 sys-utils/rtcwake.c:99
#: term-utils/scriptlive.c:57 term-utils/scriptreplay.c:46
#: term-utils/setterm.c:381 text-utils/line.c:31
#, c-format
msgid " %s [options]\n"
msgstr " %s [opciones]\n"

#: login-utils/nologin.c:30
msgid "Politely refuse a login.\n"
msgstr "Rechaza cortésmente un inicio de sesión.\n"

#: login-utils/nologin.c:33
msgid " -c, --command <command>  does nothing (for compatibility with su -c)\n"
msgstr " -c, --command <orden>    no hace nada (por compatibilidad con su -c)\n"

#: login-utils/nologin.c:113
#, c-format
msgid "This account is currently not available.\n"
msgstr "Actualmente esta cuenta no está disponible.\n"

#: login-utils/su-common.c:227
msgid " (core dumped)"
msgstr " (memoria volcada)"

#: login-utils/su-common.c:349
msgid "failed to modify environment"
msgstr "no se ha podido modificar el entorno"

#: login-utils/su-common.c:385
msgid "may not be used by non-root users"
msgstr "no pueden utilizarlo usuarios distintos de root"

#: login-utils/su-common.c:409
msgid "authentication failed"
msgstr "la autenticación ha fallado"

#: login-utils/su-common.c:422
#, c-format
msgid "cannot open session: %s"
msgstr "no se puede abrir la sesión: %s"

#: login-utils/su-common.c:441
msgid "cannot block signals"
msgstr "no se pueden bloquear las señales"

#: login-utils/su-common.c:458
msgid "cannot initialize signal mask for session"
msgstr "no se puede inicializar la máscara de señales para la sesión"

#: login-utils/su-common.c:466
msgid "cannot initialize signal mask"
msgstr "no se puede inicializar la máscara de señales"

#: login-utils/su-common.c:476
msgid "cannot set signal handler for session"
msgstr "no se puede establecer el manejador de señales para la sesión"

#: login-utils/su-common.c:484 misc-utils/uuidd.c:401 sys-utils/lscpu.c:889
msgid "cannot set signal handler"
msgstr "no se puede establecer el manejador de señales"

#: login-utils/su-common.c:492
msgid "cannot set signal mask"
msgstr "no se puede establecer la máscara de señales"

#: login-utils/su-common.c:517 term-utils/script.c:949
#: term-utils/scriptlive.c:296
msgid "failed to create pseudo-terminal"
msgstr "error al crear pseudo terminal"

#: login-utils/su-common.c:529 term-utils/script.c:959
#: term-utils/scriptlive.c:303
msgid "cannot create child process"
msgstr "no se puede crear el proceso hijo"

#: login-utils/su-common.c:548
#, c-format
msgid "cannot change directory to %s"
msgstr "no se puede cambiar el directorio a %s"

#: login-utils/su-common.c:575 term-utils/scriptlive.c:352
#, c-format
msgid ""
"\n"
"Session terminated, killing shell..."
msgstr ""
"\n"
"Sesión terminada, matando el intérprete de órdenes..."

#: login-utils/su-common.c:586
#, c-format
msgid " ...killed.\n"
msgstr " ...matado.\n"

#: login-utils/su-common.c:683
msgid "failed to set the PATH environment variable"
msgstr "error al establecer la variable de entorno RUTA"

#: login-utils/su-common.c:760
msgid "cannot set groups"
msgstr "no se pueden establecer los grupos"

#: login-utils/su-common.c:766
#, c-format
msgid "failed to establish user credentials: %s"
msgstr "fallo al establecer las credenciales del usuario: %s"

#: login-utils/su-common.c:776 sys-utils/eject.c:660
msgid "cannot set group id"
msgstr "no se puede establecer el id del grupo"

#: login-utils/su-common.c:778 sys-utils/eject.c:663
msgid "cannot set user id"
msgstr "no se puede establecer el id del usuario"

#: login-utils/su-common.c:846
msgid " -m, -p, --preserve-environment      do not reset environment variables\n"
msgstr " -m, -p, --preserve-environment      no restablece las variables de entorno\n"

#: login-utils/su-common.c:847
msgid " -w, --whitelist-environment <list>  don't reset specified variables\n"
msgstr " -w, --whitelist-environment <lista> no restablece las variables especificadas\n"

#: login-utils/su-common.c:850
msgid " -g, --group <group>             specify the primary group\n"
msgstr " -g, --group <grupo>             especifica el grupo primario\n"

#: login-utils/su-common.c:851
msgid " -G, --supp-group <group>        specify a supplemental group\n"
msgstr " -G, --supp-group <grupo>        especifica un grupo suplementario\n"

#: login-utils/su-common.c:854
msgid " -, -l, --login                  make the shell a login shell\n"
msgstr " -, -l, --login                  hace del intérprete de órdenes un intérprete de órdenes de inicio de sesión\n"

#: login-utils/su-common.c:855
msgid " -c, --command <command>         pass a single command to the shell with -c\n"
msgstr " -c, --command <orden>           pasa una orden sencilla al intérprete de órdenes con -c\n"

#: login-utils/su-common.c:856
msgid ""
" --session-command <command>     pass a single command to the shell with -c\n"
"                                   and do not create a new session\n"
msgstr ""
" --session-command <orden>       pasa una orden sencilla al intérprete de órdenes con -c\n"
"                                   y no crea una sesión nueva\n"

#: login-utils/su-common.c:858
msgid " -f, --fast                      pass -f to the shell (for csh or tcsh)\n"
msgstr " -f, --fast                      pasa -f al intérprete de órdenes (para csh o tcsh)\n"

#: login-utils/su-common.c:859
msgid " -s, --shell <shell>             run <shell> if /etc/shells allows it\n"
msgstr "  -s, --shell=<intérpr.órdenes>  ejecuta <intérpr.órdenes> si /etc/shells lo permite\n"

#: login-utils/su-common.c:860
msgid " -P, --pty                       create a new pseudo-terminal\n"
msgstr " -P, --pty                       crea un nuevo pseudo terminal\n"

#: login-utils/su-common.c:870
#, c-format
msgid ""
" %1$s [options] -u <user> [[--] <command>]\n"
" %1$s [options] [-] [<user> [<argument>...]]\n"
msgstr ""
" %1$s [opciones] -u <usuario> [[--] <orden>]\n"
" %1$s [opciones] [-] [<usuario> [<argumento>...]]\n"

#: login-utils/su-common.c:875
msgid ""
"Run <command> with the effective user ID and group ID of <user>.  If -u is\n"
"not given, fall back to su(1)-compatible semantics and execute standard shell.\n"
"The options -c, -f, -l, and -s are mutually exclusive with -u.\n"
msgstr ""
"Ejecute <orden> con los ID de usuario e ID de grupo efectivos de <usuario>.  Si no se especifica\n"
"-u, recurra a la semántica compatible con su(1) y ejecute el intérprete de órdenes estándar.\n"
"Las opciones -c, -f, -l y -s son mutuamente excluyenetes con -u.\n"

#: login-utils/su-common.c:880
msgid " -u, --user <user>               username\n"
msgstr " -u, --user <usuario>            nombre de usuario\n"

#: login-utils/su-common.c:891
#, c-format
msgid " %s [options] [-] [<user> [<argument>...]]\n"
msgstr " %s [opciones] [-] [<usuario> [<argumento>...]]\n"

#: login-utils/su-common.c:895
msgid ""
"Change the effective user ID and group ID to that of <user>.\n"
"A mere - implies -l.  If <user> is not given, root is assumed.\n"
msgstr ""
"Cambie los ID de usuario e ID de grupo efectivos a los propios de <usuario>.\n"
"Un mero - implica -l.  Si no se especifica <usuario>, se asume root.\n"

#: login-utils/su-common.c:943
#, c-format
msgid "specifying more than %d supplemental group is not possible"
msgid_plural "specifying more than %d supplemental groups is not possible"
msgstr[0] "no es posible especificar más de %d grupo sumplentario"
msgstr[1] "no es posible especificar más de %d grupos sumplentaris"

#: login-utils/su-common.c:949
#, c-format
msgid "group %s does not exist"
msgstr "el grupo %s no existe"

#: login-utils/su-common.c:1058
msgid "--pty is not supported for your system"
msgstr "--pty no se admite en su sistema"

#: login-utils/su-common.c:1092
msgid "ignoring --preserve-environment, it's mutually exclusive with --login"
msgstr "se ignora --preserve-environment; es mutuamente excluyente con --login"

#: login-utils/su-common.c:1106
msgid "options --{shell,fast,command,session-command,login} and --user are mutually exclusive"
msgstr "las opciones --[shell,fast,command,session-command,login] y --user son mutuamente excluyentes"

#: login-utils/su-common.c:1109
msgid "no command was specified"
msgstr "no se ha especificado ninguna orden"

#: login-utils/su-common.c:1121
msgid "only root can specify alternative groups"
msgstr "root es el único que puede especificar grupos alternativos"

#: login-utils/su-common.c:1132
#, c-format
msgid "user %s does not exist or the user entry does not contain all the required fields"
msgstr "el usuario %s no existe o la entrada del usuario no contiene todos los campos requeridos"

#: login-utils/su-common.c:1167
#, c-format
msgid "using restricted shell %s"
msgstr "se utiliza el intérprete de órdenes restringido %s"

#: login-utils/su-common.c:1186
msgid "failed to allocate pty handler"
msgstr "fallo al asignar el manejador de pty"

#: login-utils/su-common.c:1208
#, c-format
msgid "warning: cannot change directory to %s"
msgstr "atención: no se puede cambiar el directorio a %s"

#: login-utils/sulogin.c:130
msgid "tcgetattr failed"
msgstr "tcgetattr ha fallado"

#: login-utils/sulogin.c:208
msgid "tcsetattr failed"
msgstr "tcsetattr ha fallado"

#: login-utils/sulogin.c:470
#, c-format
msgid "%s: no entry for root\n"
msgstr "%s: no hay entrada para root\n"

#: login-utils/sulogin.c:497
#, c-format
msgid "%s: no entry for root"
msgstr "%s: no hay entrada para root"

# FIXME: El fichero se llama "passwd", no "password"
# Comunicar al autor.
#: login-utils/sulogin.c:502
#, c-format
msgid "%s: root password garbled"
msgstr "%s: contraseña de root ilegible"

#: login-utils/sulogin.c:531
#, c-format
msgid ""
"\n"
"Cannot open access to console, the root account is locked.\n"
"See sulogin(8) man page for more details.\n"
"\n"
"Press Enter to continue.\n"
msgstr ""
"\n"
"No se puede dar acceso a la consola; la cuenta root está bloqueada.\n"
"Véase la página de manual sulogin(8) para más información.\n"

#: login-utils/sulogin.c:537
#, c-format
msgid "Give root password for login: "
msgstr "Contraseña de root para iniciar sesión: "

#: login-utils/sulogin.c:539
#, c-format
msgid "Press Enter for login: "
msgstr "Pulse Enter para iniciar sesión"

#: login-utils/sulogin.c:542
#, c-format
msgid "Give root password for maintenance\n"
msgstr "Contraseña de root para mantenimiento\n"

#: login-utils/sulogin.c:544
#, c-format
msgid "Press Enter for maintenance\n"
msgstr "Pulse Enter para mantenimiento\n"

#: login-utils/sulogin.c:545
#, c-format
msgid "(or press Control-D to continue): "
msgstr "(o pulse Control-D para continuar):"

#: login-utils/sulogin.c:735
msgid "change directory to system root failed"
msgstr "fallo al cambiar al directorio de la raíz del sistema"

#: login-utils/sulogin.c:784
msgid "setexeccon failed"
msgstr "setexeccon ha fallado"

#: login-utils/sulogin.c:805
#, c-format
msgid " %s [options] [tty device]\n"
msgstr " %s [opciones] [dispositivo tty]\n"

#: login-utils/sulogin.c:808
msgid "Single-user login.\n"
msgstr "Inicio de sesión de usuario único.\n"

#: login-utils/sulogin.c:811
msgid ""
" -p, --login-shell        start a login shell\n"
" -t, --timeout <seconds>  max time to wait for a password (default: no limit)\n"
" -e, --force              examine password files directly if getpwnam(3) fails\n"
msgstr ""
" -p, --login-shell        arranca un intérprete de órdenes de inicio de sesión\n"
" -t, --timeout <seconds>  tiempo máximo para experar una contraseña (predefinido: sin límite)\n"
" -e, --force              examina directamente los ficheros de contraseñas si falla getpwnam(3)\n"

#: login-utils/sulogin.c:867 misc-utils/findmnt.c:1498 sys-utils/wdctl.c:640
#: term-utils/agetty.c:843 term-utils/wall.c:218
msgid "invalid timeout argument"
msgstr "argumento de tiempo límite máximo no válido"

#: login-utils/sulogin.c:886
msgid "only superuser can run this program"
msgstr "solo el superusuario puede ejecutar este programa"

#: login-utils/sulogin.c:929
msgid "cannot open console"
msgstr "no se puede abrir la consola"

#: login-utils/sulogin.c:936
msgid "cannot open password database"
msgstr "no se puede abrir la base de datos de contraseñas"

#: login-utils/sulogin.c:1010
#, c-format
msgid ""
"cannot execute su shell\n"
"\n"
msgstr ""
"no se puede ejecutar el intérprete de órdenes de su\n"
"\n"

#: login-utils/sulogin.c:1017
msgid ""
"Timed out\n"
"\n"
msgstr ""
"Tiempo de espera excedido\n"
"\n"

#: login-utils/sulogin.c:1049
msgid ""
"cannot wait on su shell\n"
"\n"
msgstr ""
"no se puede esperar en el intérprete de órdenes de su\n"
"\n"

#: login-utils/utmpdump.c:173
#, c-format
msgid "%s: cannot get file position"
msgstr "%s: no se puede obtener la posición del fichero"

#: login-utils/utmpdump.c:177
#, c-format
msgid "%s: cannot add inotify watch."
msgstr "%s: no se puede añadir vigilancia inotify."

#: login-utils/utmpdump.c:186
#, c-format
msgid "%s: cannot read inotify events"
msgstr "%s: no se pueden leer los eventos inotify"

#: login-utils/utmpdump.c:246 login-utils/utmpdump.c:251
msgid "Extraneous newline in file. Exiting."
msgstr "Nueva línea extraña en el fichero. Salir."

#: login-utils/utmpdump.c:305
#, c-format
msgid " %s [options] [filename]\n"
msgstr " %s [opciones] [nombre de fichero]\n"

#: login-utils/utmpdump.c:308
msgid "Dump UTMP and WTMP files in raw format.\n"
msgstr "Vuelca los ficheros UTMP y WTMP en formato en bruto.\n"

#: login-utils/utmpdump.c:311
msgid " -f, --follow         output appended data as the file grows\n"
msgstr " -f, --follow         saca los datos añadidos según crece el fichero\n"

#: login-utils/utmpdump.c:312
msgid " -r, --reverse        write back dumped data into utmp file\n"
msgstr " -r, --reverse        escribe de vuelta en el fichero utmp los datos volcados\n"

#: login-utils/utmpdump.c:313
msgid " -o, --output <file>  write to file instead of standard output\n"
msgstr " -o, --output <fichero> escribe en fichero en lugar de la salida estándar\n"

#: login-utils/utmpdump.c:377
msgid "following standard input is unsupported"
msgstr "no está admitido seguir la salida estándar"

#: login-utils/utmpdump.c:383
#, c-format
msgid "Utmp undump of %s\n"
msgstr "Deshace el volcado utmp de %s\n"

#: login-utils/utmpdump.c:386
#, c-format
msgid "Utmp dump of %s\n"
msgstr "Volcado utmp de %s\n"

#: login-utils/vipw.c:145
msgid "can't open temporary file"
msgstr "no se puede abrir el fichero temporal"

#: login-utils/vipw.c:161
#, c-format
msgid "%s: create a link to %s failed"
msgstr "%s: no se ha podifo crear un enlace a %s"

#: login-utils/vipw.c:168
#, c-format
msgid "Can't get context for %s"
msgstr "No se puede obtener el contexto de %s"

#: login-utils/vipw.c:174
#, c-format
msgid "Can't set context for %s"
msgstr "No se puede establecer el contexto de %s"

#: login-utils/vipw.c:239
#, c-format
msgid "%s unchanged"
msgstr "%s no se ha modificado"

#: login-utils/vipw.c:257
msgid "cannot get lock"
msgstr "no se puede obtener el bloqueo"

#: login-utils/vipw.c:284
msgid "no changes made"
msgstr "no se ha efectuado ningún cambio"

#: login-utils/vipw.c:293
msgid "cannot chmod file"
msgstr "no se pueden modificar los permisos del fichero"

#: login-utils/vipw.c:308
msgid "Edit the password or group file.\n"
msgstr "Edita el fichero de contraseñas o grupos.\n"

#: login-utils/vipw.c:360
msgid "You are using shadow groups on this system.\n"
msgstr "Está utilizando grupos ocultos en este sistema.\n"

#: login-utils/vipw.c:361
msgid "You are using shadow passwords on this system.\n"
msgstr "Esta utilizando conbtraseñas ocultas en este sistema.\n"

#. TRANSLATORS: this program uses for y and n rpmatch(3),
#. * which means they can be translated.
#: login-utils/vipw.c:365
#, c-format
msgid "Would you like to edit %s now [y/n]? "
msgstr "¿Quiere editar %s ahora? [y/n] "

#: misc-utils/blkid.c:70
#, c-format
msgid ""
" %s --label <label> | --uuid <uuid>\n"
"\n"
msgstr ""
" %s --label <etiqueta> | --uuid <uuid>\n"
"\n"

#: misc-utils/blkid.c:71
#, c-format
msgid ""
" %s [--cache-file <file>] [-ghlLv] [--output <format>] [--match-tag <tag>] \n"
"       [--match-token <token>] [<dev> ...]\n"
"\n"
msgstr ""
" %s [--cache-file <fichero>] [-ghlLv] [--output <formato>] \n"
"       [--match-tag <etiqueta>] [--match-token <testigo>] [<dev> ...]\n"
"\n"

#: misc-utils/blkid.c:73
#, c-format
msgid ""
" %s -p [--match-tag <tag>] [--offset <offset>] [--size <size>] \n"
"       [--output <format>] <dev> ...\n"
"\n"
msgstr ""
" %s -p [--match-tag <etiqueta>] [--offset <desplazamiento>] [--size <tamaño>] \n"
"       [--output <formato>] <dev> ...\n"
"\n"

#: misc-utils/blkid.c:75
#, c-format
msgid " %s -i [--match-tag <tag>] [--output <format>] <dev> ...\n"
msgstr " %s -i [--match-tag <etiqueta>] [--output <formato>] <dev> ...\n"

#: misc-utils/blkid.c:77
msgid ""
" -c, --cache-file <file>    read from <file> instead of reading from the default\n"
"                              cache file (-c /dev/null means no cache)\n"
msgstr ""
" -c, --cache-file <fichero> lee <fichero> en lugar de leer el fichero caché predefinido\n"
"                              (-c /dev/null indica que no hay caché)\n"

#: misc-utils/blkid.c:79
msgid " -d, --no-encoding          don't encode non-printing characters\n"
msgstr " -d, --no-encoding          no codifica los caracteres no imprimibles\n"

#: misc-utils/blkid.c:80
msgid " -g, --garbage-collect      garbage collect the blkid cache\n"
msgstr " -g, --garbage-collect      recoge basura de caché blkid\n"

#: misc-utils/blkid.c:81
msgid ""
" -o, --output <format>      output format; can be one of:\n"
"                              value, device, export or full; (default: full)\n"
msgstr ""
" -o, --output <formato>     formato de salida; posibles formatos:\n"
"                              value, device, export o full; (predefinido: full)\n"

#: misc-utils/blkid.c:83
msgid " -k, --list-filesystems     list all known filesystems/RAIDs and exit\n"
msgstr " -k, --list-filesystems     lista todos los sistemas de ficheros/RAIDs conocidos y sale\n"

#: misc-utils/blkid.c:84
msgid " -s, --match-tag <tag>      show specified tag(s) (default show all tags)\n"
msgstr ""
" -s, --match-tag <etiqueta> muestra la(s) etiqueta(s) especificada(s)\n"
"                             (lo predefinido es mostrar todas)\n"

# TODO
#: misc-utils/blkid.c:85
msgid " -t, --match-token <token>  find device with a specific token (NAME=value pair)\n"
msgstr " -t, --match-token <testigo> busca dispositivos con un testigo específico (NAME=value pair)\n"

#: misc-utils/blkid.c:86
msgid " -l, --list-one             look up only first device with token specified by -t\n"
msgstr " -l, --list-one             busca solo el primer dispositivo con el testigno especificado en -t\n"

#: misc-utils/blkid.c:87
msgid " -L, --label <label>        convert LABEL to device name\n"
msgstr " -L, --label <etiqueta>     convierte ETIQUETA en nombre de dispositivo\n"

#: misc-utils/blkid.c:88
msgid " -U, --uuid <uuid>          convert UUID to device name\n"
msgstr " -U, --uuid <uuid>          convierte UUID a nombre de dispositivo\n"

#: misc-utils/blkid.c:90
msgid "Low-level probing options:\n"
msgstr "Opciones de prueba de bajo nivel:\n"

#: misc-utils/blkid.c:91
msgid " -p, --probe                low-level superblocks probing (bypass cache)\n"
msgstr " -p, --probe                sondeo de superbloques de bajo nivel (circunvalar caché)\n"

#: misc-utils/blkid.c:92
msgid " -i, --info                 gather information about I/O limits\n"
msgstr " -i, --info                 recoge información sobre límites de E/S\n"

#: misc-utils/blkid.c:93
msgid " -S, --size <size>          overwrite device size\n"
msgstr " -S, --size <tamaño>        sobreescribe el tamaño del dispositivo\n"

#: misc-utils/blkid.c:94
msgid " -O, --offset <offset>      probe at the given offset\n"
msgstr " -O, --offset <desplazamiento> sondea en el desplazamiento especificado\n"

#: misc-utils/blkid.c:95
msgid " -u, --usages <list>        filter by \"usage\" (e.g. -u filesystem,raid)\n"
msgstr " -u, --usage <lista>        filtra por \"usage\" (e.g. -u filesystem,raid)\n"

#: misc-utils/blkid.c:96
msgid " -n, --match-types <list>   filter by filesystem type (e.g. -n vfat,ext3)\n"
msgstr " -n, --match-types <lista>  filtra por tipo de sistema de fichero (e.g. -n vfat,ext3)\n"

#: misc-utils/blkid.c:97
msgid " -D, --no-part-details      don't print info from partition table\n"
msgstr " -D, --no-part-details      no imprime información de la tabla de particiones\n"

#: misc-utils/blkid.c:103
msgid "<size> and <offset>"
msgstr "<tamaño> y <desplazamiento>"

#: misc-utils/blkid.c:105
msgid " <dev> specify device(s) to probe (default: all devices)\n"
msgstr " <dispo> especifica dispositivo(s) para sondear (lo predefinido: todos los dispositivos)\n"

#: misc-utils/blkid.c:237
msgid "(mounted, mtpt unknown)"
msgstr "(montado, mtpt desconocido)"

#: misc-utils/blkid.c:239
msgid "(in use)"
msgstr "(en uso)"

#: misc-utils/blkid.c:241
msgid "(not mounted)"
msgstr "(no montado)"

#: misc-utils/blkid.c:509 misc-utils/blkid.c:515
#, c-format
msgid "error: %s"
msgstr "error: %s"

#: misc-utils/blkid.c:558
#, c-format
msgid "%s: ambivalent result (probably more filesystems on the device, use wipefs(8) to see more details)"
msgstr "%s: resultado ambivalente (probablemente haya más sistemas de ficheros en el dispositivo; utilice wipefs(8) para más información)"

#: misc-utils/blkid.c:604
#, c-format
msgid "unknown keyword in -u <list> argument: '%s'"
msgstr "palabra clave desconocida en el argumento de -u <lista>: '%s'"

#: misc-utils/blkid.c:621
msgid "error: -u <list> argument is empty"
msgstr "error: el argumento de -u <lista> está vacío"

#: misc-utils/blkid.c:770
#, c-format
msgid "unsupported output format %s"
msgstr "formato de salida desconocido %s"

#: misc-utils/blkid.c:773 misc-utils/wipefs.c:748
msgid "invalid offset argument"
msgstr "argumento de desplazamiento no válido"

#: misc-utils/blkid.c:780
msgid "Too many tags specified"
msgstr "Se han especificado demasiadas etiquetas"

#: misc-utils/blkid.c:786
msgid "invalid size argument"
msgstr "el argumento del tamaño no es válido"

#: misc-utils/blkid.c:790
msgid "Can only search for one NAME=value pair"
msgstr "Solo se puede buscar por una pareja NOMBRE=valor"

#: misc-utils/blkid.c:797
msgid "-t needs NAME=value pair"
msgstr "-t necesita una pareja NOMBRE=valor"

#: misc-utils/blkid.c:803
#, c-format
msgid "%s from %s  (libblkid %s, %s)\n"
msgstr "%s de %s (libblkid %s, %s)\n"

#: misc-utils/blkid.c:849
msgid "The low-level probing mode does not support 'list' output format"
msgstr "El modo de sondeo de bajo nivel no admite el formato de salida 'list'"

#: misc-utils/blkid.c:862
msgid "The low-level probing mode requires a device"
msgstr "El modo de sondeo de bajo nivel requiere un dispositivo"

#: misc-utils/blkid.c:912
msgid "The lookup option requires a search type specified using -t"
msgstr "La opción de búsqueda requiere un tipo de búsqueda especificado mediante -t"

#: misc-utils/cal.c:418
msgid "invalid month argument"
msgstr "argumento de mes no válido"

#: misc-utils/cal.c:426
msgid "invalid week argument"
msgstr "argumento de semana no válido"

#: misc-utils/cal.c:428
msgid "illegal week value: use 1-54"
msgstr "valor de semana no permitido: utilice 1-54"

#: misc-utils/cal.c:480
#, c-format
msgid "failed to parse timestamp or unknown month name: %s"
msgstr "fallo al analizar la marca de tiempo o nombre de mes desconocido: %s"

#: misc-utils/cal.c:489
msgid "illegal day value"
msgstr "valor de día no permitido"

#: misc-utils/cal.c:491 misc-utils/cal.c:515
#, c-format
msgid "illegal day value: use 1-%d"
msgstr "Valor de día no permitido: utilice 1-%d"

#: misc-utils/cal.c:495 misc-utils/cal.c:503
msgid "illegal month value: use 1-12"
msgstr "Valor de mes no permitido: utilice 1-12"

#: misc-utils/cal.c:499
#, c-format
msgid "unknown month name: %s"
msgstr "nombre de mes desconocido: %s"

#: misc-utils/cal.c:506 misc-utils/cal.c:510
msgid "illegal year value"
msgstr "valor de año no permitido"

#: misc-utils/cal.c:508
msgid "illegal year value: use positive integer"
msgstr "valor de año no permitido: utilice entero positivo"

#: misc-utils/cal.c:544 misc-utils/cal.c:557
#, c-format
msgid "illegal week value: year %d doesn't have week %d"
msgstr "valor de semana no permitido: el año %d no tiene semana %d"

#: misc-utils/cal.c:1283
#, c-format
msgid " %s [options] [[[day] month] year]\n"
msgstr " %s [opciones] [[[día] mes] año]\n"

#: misc-utils/cal.c:1284
#, c-format
msgid " %s [options] <timestamp|monthname>\n"
msgstr " %s [opciones] <marcadetiempo|nombredemes>\n"

#: misc-utils/cal.c:1287
msgid "Display a calendar, or some part of it.\n"
msgstr "Muestra un calendario o parte de él.\n"

#: misc-utils/cal.c:1288
msgid "Without any arguments, display the current month.\n"
msgstr "Sin argumentos muestra el mes actual.\n"

#: misc-utils/cal.c:1291
msgid " -1, --one             show only a single month (default)\n"
msgstr " -1, --one             muestra un solo mes (predeterminado)\n"

#: misc-utils/cal.c:1292
msgid " -3, --three           show three months spanning the date\n"
msgstr " -3, --three           muestra tres meses alrededor de la fecha\n"

#: misc-utils/cal.c:1293
msgid " -n, --months <num>    show num months starting with date's month\n"
msgstr " -n, --months <núm>    muestra el número de meses que comienzan por el mes de la fecha\n"

#: misc-utils/cal.c:1294
msgid " -S, --span            span the date when displaying multiple months\n"
msgstr " -S, --span            extiende la fecha cuando se muestran varios meses\n"

#: misc-utils/cal.c:1295
msgid " -s, --sunday          Sunday as first day of week\n"
msgstr " -s, --sunday          domingo como primer día de la semana\n"

#: misc-utils/cal.c:1296
msgid " -m, --monday          Monday as first day of week\n"
msgstr " -m, --monday          lunes como primer día de la semana\n"

#: misc-utils/cal.c:1297
msgid " -j, --julian          use day-of-year for all calendars\n"
msgstr " -j, --julian          utiliza día-del-año en todos los calendarios\n"

#: misc-utils/cal.c:1298
msgid "     --reform <val>    Gregorian reform date (1752|gregorian|iso|julian)\n"
msgstr "     --reform <val>    fecha de la reforma gregoriana (1752|gregorian|isojulian)\n"

#: misc-utils/cal.c:1299
msgid "     --iso             alias for --reform=iso\n"
msgstr "     --iso             alias de --reform=iso\n"

#: misc-utils/cal.c:1300
msgid " -y, --year            show the whole year\n"
msgstr " -y, --year            muestra el año entero\n"

#: misc-utils/cal.c:1301
msgid " -Y, --twelve          show the next twelve months\n"
msgstr " -Y, --doce            muestra los siguientes doce meses\n"

#: misc-utils/cal.c:1302
msgid " -w, --week[=<num>]    show US or ISO-8601 week numbers\n"
msgstr " -w, --week[=<num>]    muestra los números de semana US o ISO-8601\n"

#: misc-utils/cal.c:1303
msgid " -v, --vertical        show day vertically instead of line\n"
msgstr " -v, --vertical        muestra el día en vertical en vez de una línea\n"

#: misc-utils/cal.c:1305
#, c-format
msgid "     --color[=<when>]  colorize messages (%s, %s or %s)\n"
msgstr "     --color[=<cuándo>] colorea los mensajes (%s, %s o %s)\n"

#: misc-utils/fincore.c:61
msgid "file data resident in memory in pages"
msgstr "datos del fichero residente en memoria en páginas"

#: misc-utils/fincore.c:62
msgid "file data resident in memory in bytes"
msgstr "datos del fichero residente en memoria en bytes"

#: misc-utils/fincore.c:63
msgid "size of the file"
msgstr "tamaño del fichero"

#: misc-utils/fincore.c:64
msgid "file name"
msgstr "nombre del fichero"

#: misc-utils/fincore.c:174
#, c-format
msgid "failed to do mincore: %s"
msgstr "no se ha podido hacer mincore: %s"

#: misc-utils/fincore.c:210
#, c-format
msgid "failed to do mmap: %s"
msgstr "no se ha podido hacer mmap: %s"

#: misc-utils/fincore.c:236
#, c-format
msgid "failed to open: %s"
msgstr "no se ha podido abrir: %s"

#: misc-utils/fincore.c:241
#, c-format
msgid "failed to do fstat: %s"
msgstr "no se ha podido hacer fstat: %s"

#: misc-utils/fincore.c:262
#, c-format
msgid " %s [options] file...\n"
msgstr " %s [opciones] fichero...\n"

#: misc-utils/fincore.c:265
msgid " -J, --json            use JSON output format\n"
msgstr " -J, --json            utiliza formato de salida JSON\n"

#: misc-utils/fincore.c:266
msgid " -b, --bytes           print sizes in bytes rather than in human readable format\n"
msgstr " -b, --byte            imprime los tamaños en bytes en lugar de formato legible para humanos\n"

#: misc-utils/fincore.c:267
msgid " -n, --noheadings      don't print headings\n"
msgstr " -n, --noheadings      no imprime encabezados\n"

#: misc-utils/fincore.c:268
msgid " -o, --output <list>   output columns\n"
msgstr " -o, --output <lista>  columnas que mostrar\n"

#: misc-utils/fincore.c:269
msgid " -r, --raw             use raw output format\n"
msgstr " -r, --raw             utiliza el formato de salida en bruto\n"

#: misc-utils/fincore.c:338 sys-utils/losetup.c:820
msgid "no file specified"
msgstr "no se ha especificado ningún fichero"

#: misc-utils/findfs.c:28
#, c-format
msgid " %s [options] {LABEL,UUID,PARTUUID,PARTLABEL}=<value>\n"
msgstr " %s [opciones] {LABEL,UUID,PARTUUID,PARTLABEL}=<valor>\n"

#: misc-utils/findfs.c:32
msgid "Find a filesystem by label or UUID.\n"
msgstr "Encuentra un sistema de ficheros por etiqueta o UUID.\n"

#: misc-utils/findfs.c:74
#, c-format
msgid "unable to resolve '%s'"
msgstr "no se puede resolver '%s'"

#: misc-utils/findmnt.c:99
msgid "source device"
msgstr "dispositivo de origen"

#: misc-utils/findmnt.c:100
msgid "mountpoint"
msgstr "punto de montaje"

#: misc-utils/findmnt.c:101 misc-utils/lsblk.c:161
msgid "filesystem type"
msgstr "tipo de sistema de ficheros"

#: misc-utils/findmnt.c:102
msgid "all mount options"
msgstr "todas las opciones de montaje"

#: misc-utils/findmnt.c:103
msgid "VFS specific mount options"
msgstr "opciones de montaje específicas de VFS"

#: misc-utils/findmnt.c:104
msgid "FS specific mount options"
msgstr "opciones de montaje específicas de FS"

#: misc-utils/findmnt.c:105
msgid "filesystem label"
msgstr "etiqueta del sistema de ficheros"

#: misc-utils/findmnt.c:106 misc-utils/lsblk.c:168
msgid "filesystem UUID"
msgstr "UUID del sistema de ficheros"

#: misc-utils/findmnt.c:107
msgid "partition label"
msgstr "etiqueta de la partición"

#: misc-utils/findmnt.c:109 misc-utils/lsblk.c:157
msgid "major:minor device number"
msgstr "número mayor:menor del dispositivo"

#: misc-utils/findmnt.c:110
msgid "action detected by --poll"
msgstr "acción detectada por --poll"

#: misc-utils/findmnt.c:111
msgid "old mount options saved by --poll"
msgstr "opciones de montaje antiguas guardadas por --poll"

#: misc-utils/findmnt.c:112
msgid "old mountpoint saved by --poll"
msgstr "antiguo punto de montaje guardado por --poll"

#: misc-utils/findmnt.c:113 misc-utils/lsblk.c:160
msgid "filesystem size"
msgstr "tamaño del sistema de ficheros"

#: misc-utils/findmnt.c:114 misc-utils/lsblk.c:159
msgid "filesystem size available"
msgstr "tamaño del sistema de ficheros disponible"

#: misc-utils/findmnt.c:115 misc-utils/lsblk.c:162
msgid "filesystem size used"
msgstr "tamaño del sistema de ficheros utilizado"

#: misc-utils/findmnt.c:116 misc-utils/lsblk.c:163
msgid "filesystem use percentage"
msgstr "porcentaje de utilización del sistema de ficheros"

#: misc-utils/findmnt.c:117
msgid "filesystem root"
msgstr "raíz del sistema de ficheros"

#: misc-utils/findmnt.c:118
msgid "task ID"
msgstr "ID de la tarea"

#: misc-utils/findmnt.c:119
msgid "mount ID"
msgstr "ID del montaje"

#: misc-utils/findmnt.c:120
msgid "optional mount fields"
msgstr "campos de montaje opcionales"

#: misc-utils/findmnt.c:121
msgid "VFS propagation flags"
msgstr "indicadores de propagación de VFS"

#: misc-utils/findmnt.c:122
msgid "dump(8) period in days [fstab only]"
msgstr "periodo en días de dump(8) [solo fstab]"

#: misc-utils/findmnt.c:123
msgid "pass number on parallel fsck(8) [fstab only]"
msgstr "número de paso en fsck(8) paralelo [solo fstab]"

#: misc-utils/findmnt.c:333
#, c-format
msgid "unknown action: %s"
msgstr "acción desconocida: %s"

#: misc-utils/findmnt.c:650
msgid "mount"
msgstr "montar"

#: misc-utils/findmnt.c:653
msgid "umount"
msgstr "desmontar"

#: misc-utils/findmnt.c:656
msgid "remount"
msgstr "remontar"

#: misc-utils/findmnt.c:659
msgid "move"
msgstr "mover"

#: misc-utils/findmnt.c:823 misc-utils/findmnt.c:1093 sys-utils/eject.c:717
#: sys-utils/mount.c:369
msgid "failed to initialize libmount table"
msgstr "no se ha podido inicializar la tabla de libmount"

#: misc-utils/findmnt.c:850 text-utils/hexdump-parse.c:84
#, c-format
msgid "can't read %s"
msgstr "no se puede leer %s"

#: misc-utils/findmnt.c:1033 misc-utils/findmnt.c:1099
#: misc-utils/findmnt-verify.c:95 misc-utils/findmnt-verify.c:487
#: sys-utils/fstrim.c:287 sys-utils/mount.c:127 sys-utils/mount.c:175
#: sys-utils/mount.c:242 sys-utils/swapoff.c:63 sys-utils/swapoff.c:173
#: sys-utils/swapon.c:247 sys-utils/swapon.c:277 sys-utils/swapon.c:736
#: sys-utils/umount.c:187
msgid "failed to initialize libmount iterator"
msgstr "no se ha podido inicializar el iterador de libmount"

#: misc-utils/findmnt.c:1105
msgid "failed to initialize libmount tabdiff"
msgstr "no se ha podido inicializar la tabdiff de libmount"

#: misc-utils/findmnt.c:1133 misc-utils/kill.c:407
msgid "poll() failed"
msgstr "poll() ha fallado"

#: misc-utils/findmnt.c:1208
#, c-format
msgid ""
" %1$s [options]\n"
" %1$s [options] <device> | <mountpoint>\n"
" %1$s [options] <device> <mountpoint>\n"
" %1$s [options] [--source <device>] [--target <path> | --mountpoint <dir>]\n"
msgstr ""
" %1$s [opciones]\n"
" %1$s [opciones] <dispositivo> | <puntodemontaje>\n"
" %1$s [opciones] <dispositivo> <puntodemontaje>\n"
" %1$s [opciones] [--source <dispositivo>] [--target <ruta>] [ --mountpoint <dir>]\n"

#: misc-utils/findmnt.c:1215
msgid "Find a (mounted) filesystem.\n"
msgstr "Encuentra un sistema de ficheros (montado).\n"

#: misc-utils/findmnt.c:1218
msgid " -s, --fstab            search in static table of filesystems\n"
msgstr " -s, --fstab            busca en la tabla estática del sistema de ficheros\n"

#: misc-utils/findmnt.c:1219
msgid ""
" -m, --mtab             search in table of mounted filesystems\n"
"                          (includes user space mount options)\n"
msgstr ""
" -m, --mtab             buscar en la tabla de sistemas de ficheros\n"
"                          montados (incluye opciones de montaje de espacio de usuario)\n"

#: misc-utils/findmnt.c:1221
msgid ""
" -k, --kernel           search in kernel table of mounted\n"
"                          filesystems (default)\n"
msgstr ""
" -k, --kernel           buscar en la tabla de sistemas de ficheros\n"
"                          montados del núcleo (predeterminado)\n"

#: misc-utils/findmnt.c:1224
msgid " -p, --poll[=<list>]    monitor changes in table of mounted filesystems\n"
msgstr " -p, --poll[=<lista>]  monitoriza los cambios en la tabla de sistemas de ficheros montados\n"

#: misc-utils/findmnt.c:1225
msgid " -w, --timeout <num>    upper limit in milliseconds that --poll will block\n"
msgstr " -w, --timeout <num>    límite superior en milisegundos que --poll bloqueará\n"

#: misc-utils/findmnt.c:1228
msgid " -A, --all              disable all built-in filters, print all filesystems\n"
msgstr " -A, --all              desactiva todos los filtros de fábrica, imprime todos los sistemas de ficheros\n"

#: misc-utils/findmnt.c:1229
msgid " -a, --ascii            use ASCII chars for tree formatting\n"
msgstr "  -a, --ascii           utiliza caracteres ASCII para el formato del árbol\n"

#: misc-utils/findmnt.c:1230
msgid " -b, --bytes            print sizes in bytes rather than in human readable format\n"
msgstr " -b, --byte             imprime los tamaños en bytes en lugar de formato legible para humanos\n"

#: misc-utils/findmnt.c:1231
msgid " -C, --nocanonicalize   don't canonicalize when comparing paths\n"
msgstr " -C, --nocanonicalize   no canoniza al comparar rutas\n"

#: misc-utils/findmnt.c:1232
msgid " -c, --canonicalize     canonicalize printed paths\n"
msgstr " -c, --canonicalize     canoniza las rutas al imprimirlas\n"

#: misc-utils/findmnt.c:1233
msgid " -D, --df               imitate the output of df(1)\n"
msgstr " -D, --df               imita la salida de df(1)\n"

#: misc-utils/findmnt.c:1234
msgid " -d, --direction <word> direction of search, 'forward' or 'backward'\n"
msgstr " -d, --direction <palabra> dirección de búsqueda, 'forward' (hacia adelante) o 'backward' (hacia atrás)\n"

#: misc-utils/findmnt.c:1235
msgid ""
" -e, --evaluate         convert tags (LABEL,UUID,PARTUUID,PARTLABEL) \n"
"                          to device names\n"
msgstr ""
" -e, --evaluate         convierte las etiquetas (LABEL,UUID,PARTUUID,PARTLABEL) \n"
"                          en nombres de dispositivos\n"

#: misc-utils/findmnt.c:1237
msgid " -F, --tab-file <path>  alternative file for -s, -m or -k options\n"
msgstr " -F, --tab-file <ruta>  fichero alternativo para las opciones -s, -m o -k\n"

#: misc-utils/findmnt.c:1238
msgid " -f, --first-only       print the first found filesystem only\n"
msgstr " -f, --first-only       imprime solamente el primer sistema de ficheros encontrado\n"

#: misc-utils/findmnt.c:1239
msgid " -i, --invert           invert the sense of matching\n"
msgstr " -i, --invert           invierte el sentido de correspondencia\n"

#: misc-utils/findmnt.c:1240 misc-utils/lslocks.c:535 sys-utils/lsns.c:905
#: sys-utils/rfkill.c:581
msgid " -J, --json             use JSON output format\n"
msgstr "  -J, --json            utiliza formato de salida JSON\n"

#: misc-utils/findmnt.c:1241 sys-utils/lsns.c:906
msgid " -l, --list             use list format output\n"
msgstr "  -l, --list            utiliza la salida con formato de lista\n"

#: misc-utils/findmnt.c:1242
msgid " -N, --task <tid>       use alternative namespace (/proc/<tid>/mountinfo file)\n"
msgstr " -N, --task <tid>       utiliza el espacio de nombres alternativo (fichero /proc/<tid>/mountinfo)\n"

#: misc-utils/findmnt.c:1243
msgid " -n, --noheadings       don't print column headings\n"
msgstr " -n, --noheadings       no imprime los títulos de las columnas\n"

#: misc-utils/findmnt.c:1244
msgid " -O, --options <list>   limit the set of filesystems by mount options\n"
msgstr " -O, --options <lista>  limita el conjunto de sistemas de ficheros por las opciones de montaje\n"

#: misc-utils/findmnt.c:1245
msgid " -o, --output <list>    the output columns to be shown\n"
msgstr " -o, --ouput <lista>    columnas que se mostrarán en la salida\n"

#: misc-utils/findmnt.c:1246
msgid "     --output-all       output all available columns\n"
msgstr "     --output-all       saca todas las columnas disponibles\n"

#: misc-utils/findmnt.c:1247
msgid " -P, --pairs            use key=\"value\" output format\n"
msgstr " -P, --pairs            utiliza el formato de salida clave=\"valor\"\n"

#: misc-utils/findmnt.c:1248
msgid "     --pseudo           print only pseudo-filesystems\n"
msgstr "     --pseudo           imprime solamente pseudo sistemas de ficheros\n"

#: misc-utils/findmnt.c:1249
msgid " -R, --submounts        print all submounts for the matching filesystems\n"
msgstr " -R, --submounts        imprime todos los submontajes de los sistemas de ficheros correspondientes\n"

#: misc-utils/findmnt.c:1250
msgid " -r, --raw              use raw output format\n"
msgstr "  -r, --raw             utiliza el formato de salida en bruto\n"

#: misc-utils/findmnt.c:1251
msgid "     --real             print only real filesystems\n"
msgstr "     --real             imprime solamente los sistemas de ficheros reales\n"

#: misc-utils/findmnt.c:1252
msgid ""
" -S, --source <string>  the device to mount (by name, maj:min, \n"
"                          LABEL=, UUID=, PARTUUID=, PARTLABEL=)\n"
msgstr ""
" -S, --source <cadena>  dispositivo que se va a montar (por nombre, maj:min, \n"
"                          LABEL=, UUID=, PARTUUID=, PARTLABEL=)\n"

#: misc-utils/findmnt.c:1254
msgid " -T, --target <path>    the path to the filesystem to use\n"
msgstr " -T, --target <ruta>    ruta al sistema de ficheros que se usará\n"

#: misc-utils/findmnt.c:1255
msgid "     --tree             enable tree format output is possible\n"
msgstr "     --tree             activar la salida con formato es posible\n"

#: misc-utils/findmnt.c:1256
msgid " -M, --mountpoint <dir> the mountpoint directory\n"
msgstr " -M, --mountpoint <dir> el directorio del punto de montaje\n"

#: misc-utils/findmnt.c:1257
msgid " -t, --types <list>     limit the set of filesystems by FS types\n"
msgstr " -t, --types <lista>    limita el conjunto de sistemas de ficheros por tipos\n"

#: misc-utils/findmnt.c:1258
msgid " -U, --uniq             ignore filesystems with duplicate target\n"
msgstr " -U, --uniq             descarta los sistemas de ficheros con destino duplicado\n"

#: misc-utils/findmnt.c:1259 misc-utils/lslocks.c:542 sys-utils/lsns.c:912
msgid " -u, --notruncate       don't truncate text in columns\n"
msgstr " -u, --notruncate       no trunca el texto de las columnas\n"

#: misc-utils/findmnt.c:1260
msgid " -v, --nofsroot         don't print [/dir] for bind or btrfs mounts\n"
msgstr " -v, --nofsroot         no imprime [/dir] para los montajes bind o btrfs\n"

#: misc-utils/findmnt.c:1263
msgid " -x, --verify           verify mount table content (default is fstab)\n"
msgstr " -x, --verify           verifica el contenido de la tabla de montajes (lo predeterminado es fstab)\n"

#: misc-utils/findmnt.c:1264
msgid "     --verbose          print more details\n"
msgstr "     --verbose          imprime más detalles\n"

#: misc-utils/findmnt.c:1399
#, c-format
msgid "unknown direction '%s'"
msgstr "dirección desconocida '%s'"

#: misc-utils/findmnt.c:1475
msgid "invalid TID argument"
msgstr "argumento TID incorrecto"

#: misc-utils/findmnt.c:1554
msgid "--poll accepts only one file, but more specified by --tab-file"
msgstr "--poll solo acepta un fichero, pero se han especificado más con --tab-file"

#: misc-utils/findmnt.c:1558
msgid "options --target and --source can't be used together with command line element that is not an option"
msgstr "las opciones --target y --source no pueden usarse juntas con un elemento de la línea de órdenes que no sea una opción"

#: misc-utils/findmnt.c:1611 sys-utils/fstrim.c:267
msgid "failed to initialize libmount cache"
msgstr "no se ha podido inicializar la caché de libmount"

#: misc-utils/findmnt.c:1655
#, c-format
msgid "%s column is requested, but --poll is not enabled"
msgstr "se ha solicitado la columna %s, pero --poll no está activado"

#: misc-utils/findmnt-verify.c:119
msgid "target specified more than once"
msgstr "se ha especificado el destino más de una vez"

#: misc-utils/findmnt-verify.c:121
#, c-format
msgid "wrong order: %s specified before %s"
msgstr "orden incorrecto: %s especificado antes que %s"

#: misc-utils/findmnt-verify.c:135
msgid "undefined target (fs_file)"
msgstr "destino indefinido (fs_file)"

#: misc-utils/findmnt-verify.c:142
#, c-format
msgid "non-canonical target path (real: %s)"
msgstr "ruta de destino no canónica (real: %s)"

#: misc-utils/findmnt-verify.c:147
#, c-format
msgid "unreachable on boot required target: %m"
msgstr "destino inalcanzable necesario durante el arranque: %m"

#: misc-utils/findmnt-verify.c:149
#, c-format
msgid "unreachable target: %m"
msgstr "destino inalcanzable: %m"

#: misc-utils/findmnt-verify.c:153
msgid "target is not a directory"
msgstr "el destino no es un directorio"

#: misc-utils/findmnt-verify.c:155
msgid "target exists"
msgstr "el destino existe"

#: misc-utils/findmnt-verify.c:167
#, c-format
msgid "unreachable on boot required source: %s=%s"
msgstr "origen inalcanzable necesario durante el arranque: %s=%s"

#: misc-utils/findmnt-verify.c:169
#, c-format
msgid "unreachable: %s=%s"
msgstr "inalcanzable: %s=%s"

#: misc-utils/findmnt-verify.c:171
#, c-format
msgid "%s=%s translated to %s"
msgstr "%s=%s traducido como %s"

#: misc-utils/findmnt-verify.c:192
msgid "undefined source (fs_spec)"
msgstr "origen indefinido (fs_spec)"

#: misc-utils/findmnt-verify.c:201
#, c-format
msgid "unsupported source tag: %s"
msgstr "etiqueta de origen no soportada: %s"

#: misc-utils/findmnt-verify.c:208
#, c-format
msgid "do not check %s source (pseudo/net)"
msgstr "no comprobar origen %s (pseudo/net)"

#: misc-utils/findmnt-verify.c:211
#, c-format
msgid "unreachable source: %s: %m"
msgstr "origen inalcanzable: %s: %m"

#: misc-utils/findmnt-verify.c:214
#, c-format
msgid "non-bind mount source %s is a directory or regular file"
msgstr "el origen de montaje no vinculado %s es un directorio o un fichero normal"

#: misc-utils/findmnt-verify.c:217
#, c-format
msgid "source %s is not a block device"
msgstr "el origen %s no es un dispositivo de bloques"

#: misc-utils/findmnt-verify.c:219
#, c-format
msgid "source %s exists"
msgstr "el origen %s ya existe"

#: misc-utils/findmnt-verify.c:232
#, c-format
msgid "VFS options: %s"
msgstr "Opciones VFS: %s"

#: misc-utils/findmnt-verify.c:236
#, c-format
msgid "FS options: %s"
msgstr "Opciones FS: %s"

#: misc-utils/findmnt-verify.c:240
#, c-format
msgid "userspace options: %s"
msgstr "opciones de espacio de usuarios: %s"

#: misc-utils/findmnt-verify.c:254
#, c-format
msgid "unsupported swaparea discard policy: %s"
msgstr "política de descarte del área de intercambio no admitida: %s"

#: misc-utils/findmnt-verify.c:262
msgid "failed to parse swaparea priority option"
msgstr "no se ha podido analizar la opción de prioridad del área de intercambio"

#: misc-utils/findmnt-verify.c:398
#, c-format
msgid "do not check %s FS type (pseudo/net)"
msgstr "no comprobar el tipo de FS %s (pseudo/net)"

#: misc-utils/findmnt-verify.c:408
msgid "\"none\" FS type is recommended for bind or move oprations only"
msgstr "la opción de FS \"none\" solo está recomendada para operaciones de vincular o mover"

#: misc-utils/findmnt-verify.c:418
#, c-format
msgid "%s seems unsupported by the current kernel"
msgstr "parece que el núcleo actual no admite %s"

#: misc-utils/findmnt-verify.c:424 misc-utils/findmnt-verify.c:425
msgid "cannot detect on-disk filesystem type"
msgstr "no se puede detectar el tipo de sistema de ficheros en disco"

#: misc-utils/findmnt-verify.c:433
#, c-format
msgid "%s does not match with on-disk %s"
msgstr "%s no casa con %s en disco"

#: misc-utils/findmnt-verify.c:436
#, c-format
msgid "on-disk %s seems unsupported by the current kernel"
msgstr "parece que el núcleo actual no admite %s en disco"

#: misc-utils/findmnt-verify.c:438
#, c-format
msgid "FS type is %s"
msgstr "el tipo de FS es %s"

#: misc-utils/findmnt-verify.c:450
#, c-format
msgid "recommended root FS passno is 1 (current is %d)"
msgstr "el paso recomendado para el FS raíz es 1 (el actual es %d)"

#: misc-utils/findmnt-verify.c:519
#, c-format
msgid "%d parse error"
msgid_plural "%d parse errors"
msgstr[0] "%d error de sintaxis"
msgstr[1] "%d errores de sintaxis"

#: misc-utils/findmnt-verify.c:520
#, c-format
msgid ", %d error"
msgid_plural ", %d errors"
msgstr[0] ", %d error"
msgstr[1] ", %d errores"

#: misc-utils/findmnt-verify.c:521
#, c-format
msgid ", %d warning"
msgid_plural ", %d warnings"
msgstr[0] ", %d aviso"
msgstr[1] ", %d avisos"

#: misc-utils/findmnt-verify.c:524
#, c-format
msgid "Success, no errors or warnings detected\n"
msgstr "Correcto, no se han detectado errores ni avisos\n"

#: misc-utils/getopt.c:302
msgid "empty long option after -l or --long argument"
msgstr "opción larga vacía tras argumento -l o --long"

#: misc-utils/getopt.c:323
msgid "unknown shell after -s or --shell argument"
msgstr "shell desconocido tras argumento -s o --shell"

#: misc-utils/getopt.c:330
#, c-format
msgid ""
" %1$s <optstring> <parameters>\n"
" %1$s [options] [--] <optstring> <parameters>\n"
" %1$s [options] -o|--options <optstring> [options] [--] <parameters>\n"
msgstr ""
" %1$s <cadenaopciones> <parámetros>\n"
" %1$s [opciones] [--] <cadenaopciones> <parámetros>\n"
" %1$s [opciones] -o|--options <cadenaopciones> [opciones] [--] <parámetros>\n"

#: misc-utils/getopt.c:336
msgid "Parse command options.\n"
msgstr "Analiza las opciones de la orden.\n"

#: misc-utils/getopt.c:339
msgid " -a, --alternative             allow long options starting with single -\n"
msgstr " -a, --alternative             permite opciones largas con un solo - inicial\n"

#: misc-utils/getopt.c:340
msgid " -l, --longoptions <longopts>  the long options to be recognized\n"
msgstr " -l, --longoptions <opclargas> opciones largas para reconocer\n"

#: misc-utils/getopt.c:341
msgid " -n, --name <progname>         the name under which errors are reported\n"
msgstr " -n, --name <programa>         nombre con el que se informa de los errores\n"

#: misc-utils/getopt.c:342
msgid " -o, --options <optstring>     the short options to be recognized\n"
msgstr " -o, --options <cadenaopciones> opciones cortas para reconocer\n"

#: misc-utils/getopt.c:343
msgid " -q, --quiet                   disable error reporting by getopt(3)\n"
msgstr " -q, --quiet                   desactiva información de errores mediante getopt(3)\n"

#: misc-utils/getopt.c:344
msgid " -Q, --quiet-output            no normal output\n"
msgstr " -Q, --quiet-output            sin la salida normal\n"

#: misc-utils/getopt.c:345
msgid " -s, --shell <shell>           set quoting conventions to those of <shell>\n"
msgstr " -s, --shell <intérpr.órdenes> define las convenciones de cita del intérprete de órdenes\n"

#: misc-utils/getopt.c:346
msgid " -T, --test                    test for getopt(1) version\n"
msgstr " -T, --test                    prueba para la versión de getopt(1)\n"

#: misc-utils/getopt.c:347
msgid " -u, --unquoted                do not quote the output\n"
msgstr " -u, --unquoted                no entrecomilla el resultado\n"

#: misc-utils/getopt.c:396 misc-utils/getopt.c:456
msgid "missing optstring argument"
msgstr "Falta el argumento cadenaopciones"

#: misc-utils/getopt.c:451
msgid "internal error, contact the author."
msgstr "Error interno; contacte con el desarrollador."

#: misc-utils/hardlink.c:127
#, c-format
msgid "Directories:   %9lld\n"
msgstr "Directorios:   %9lld\n"

#: misc-utils/hardlink.c:128
#, c-format
msgid "Objects:       %9lld\n"
msgstr "Objetos:       %9lld\n"

#: misc-utils/hardlink.c:129
#, c-format
msgid "Regular files: %9lld\n"
msgstr "Ficheros regulares: %9lld\n"

#: misc-utils/hardlink.c:130
#, c-format
msgid "Comparisons:   %9lld\n"
msgstr "Comparaciones:   %9lld\n"

#: misc-utils/hardlink.c:132
msgid "Would link:    "
msgstr "Enlazaría:     "

#: misc-utils/hardlink.c:133
msgid "Linked:        "
msgstr "Enlazado:      "

#: misc-utils/hardlink.c:135
msgid "Would save:   "
msgstr "Guardaría:    "

#: misc-utils/hardlink.c:136
msgid "Saved:        "
msgstr "Guardado:     "

#: misc-utils/hardlink.c:142
#, c-format
msgid " %s [options] directory...\n"
msgstr " %s [opciones] directorio...\n"

#: misc-utils/hardlink.c:145
msgid "Consolidate duplicate files using hardlinks."
msgstr "Consolidar ficheros duplicados utilizando enlaces duros."

#: misc-utils/hardlink.c:148
msgid " -c, --content          compare only contents, ignore permission, etc."
msgstr " -c, --content          compara solo contenidos, caso omiso de permisos, etc."

#: misc-utils/hardlink.c:149
msgid " -n, --dry-run          don't actually link anything"
msgstr " -n, --dry-run          no enlazar nada en realidad"

#: misc-utils/hardlink.c:150
msgid " -v, --verbose          print summary after hardlinking"
msgstr " -v, --verbose          imprime un resumen después de hacer los enlaces duros"

#: misc-utils/hardlink.c:151
msgid " -vv                    print every hardlinked file and summary"
msgstr ""
" -vv                    imprime todos los ficheros vinculados con enlace duro\n"
"                        y un resumen"

#: misc-utils/hardlink.c:152
msgid " -f, --force            force hardlinking across filesystems"
msgstr " -f, --force            fuerza enlaces duros por los sistemas de ficheros"

#: misc-utils/hardlink.c:153
msgid " -x, --exclude <regex>  exclude files matching pattern"
msgstr " -x, --exclude <regex>  excluye los ficheros que concuerden con el patrón"

#: misc-utils/hardlink.c:167
msgid "integer overflow"
msgstr "desbordamiento interno"

#: misc-utils/hardlink.c:196
#, c-format
msgid "%s is on different filesystem than the rest (use -f option to override)."
msgstr "%s está en un sistema de ficheros diferente que el resto (utilice la opción -f para invalidar)."

#: misc-utils/hardlink.c:306 sys-utils/unshare.c:208 text-utils/more.c:408
#, c-format
msgid "cannot stat %s"
msgstr "no se puede efectuar `stat' %s"

#: misc-utils/hardlink.c:312
#, c-format
msgid "file %s changed underneath us"
msgstr "el fichero %s ha cambiado debajo de nosotros"

#: misc-utils/hardlink.c:332
#, c-format
msgid "failed to hardlink %s to %s (create temporary link as %s failed)"
msgstr "no se ha podido hacer el enlace duro %s a %s (no se ha podido crear el enlace temporal como %s)"

#: misc-utils/hardlink.c:339
#, c-format
msgid "failed to hardlink %s to %s (rename temporary link to %s failed)"
msgstr "no se ha podido hacer el enlace duro %s a %s (no se ha podido cambiar el nombre del enlace temporal a %s)"

#: misc-utils/hardlink.c:343
#, c-format
msgid "failed to remove temporary link %s"
msgstr "no se ha podido borrar el enlace temporal %s"

#: misc-utils/hardlink.c:354
#, c-format
msgid " %s %s to %s\n"
msgstr "%s %s a %s\n"

#: misc-utils/hardlink.c:355 misc-utils/hardlink.c:361
msgid "Would link"
msgstr "Enlazaría"

#: misc-utils/hardlink.c:355 misc-utils/hardlink.c:361
msgid "Linked"
msgstr "Enlazado"

#: misc-utils/hardlink.c:360
#, c-format
msgid " %s %s to %s, %s %jd\n"
msgstr " %s %s a %s, %s %jd\n"

#: misc-utils/hardlink.c:363
msgid "would save"
msgstr "guardaría"

#: misc-utils/hardlink.c:363 text-utils/pg.c:1266
msgid "saved"
msgstr "guardado"

#: misc-utils/hardlink.c:437
msgid "option --exclude not supported (built without pcre2)"
msgstr "opción --exclude no admitida (construido sin pcre2)"

#: misc-utils/hardlink.c:450
msgid "no directory specified"
msgstr "no se ha especificado ningún directorio"

#: misc-utils/hardlink.c:464
#, c-format
msgid "pattern error at offset %d: %s"
msgstr "error de patrón en el desplazamiento %d: %s"

#: misc-utils/hardlink.c:509
#, c-format
msgid "Skipping %s%s\n"
msgstr "Saltando %s%s\n"

#: misc-utils/kill.c:168
#, c-format
msgid "unknown signal %s; valid signals:"
msgstr "señal desconocida %s; señales válidas:"

#: misc-utils/kill.c:193
#, c-format
msgid " %s [options] <pid>|<name>...\n"
msgstr " %s [opciones] <pid>|<nombre>...\n"

#: misc-utils/kill.c:196
msgid "Forcibly terminate a process.\n"
msgstr "Termina un proceso a la fuerza.\n"

#: misc-utils/kill.c:199
msgid ""
" -a, --all              do not restrict the name-to-pid conversion to processes\n"
"                          with the same uid as the present process\n"
msgstr ""
" -a, --all              no restringe la conversión de nombre a uid a procesos\n"
"                          con el mismo uid que el proceso presente\n"

#: misc-utils/kill.c:201
msgid " -s, --signal <signal>  send this <signal> instead of SIGTERM\n"
msgstr " -s, --signal <señal>   envía esta <señal> en lugar de SIGTERM\n"

#: misc-utils/kill.c:203
msgid " -q, --queue <value>    use sigqueue(2), not kill(2), and pass <value> as data\n"
msgstr " -q, --queue <valor>    utiliza sigqueue(2), no kill(2), y pasa <valor> como dato\n"

#: misc-utils/kill.c:206
msgid ""
"     --timeout <milliseconds> <follow-up signal>\n"
"                        wait up to timeout and send follow-up signal\n"
msgstr ""
"     --timeout <milisegundos> <señal de seguimiento>\n"
"                        espera un tiempo y luego envía la señal de seguimiento\n"

#: misc-utils/kill.c:209
msgid " -p, --pid              print pids without signaling them\n"
msgstr " -p, --pid              imprime pids sin enviarles señal\n"

#: misc-utils/kill.c:210
msgid " -l, --list[=<signal>]  list signal names, or convert a signal number to a name\n"
msgstr " -l, --list[=<señal>]   enumera los nombres de las señales o convierte un número de señal a un nombre\n"

#: misc-utils/kill.c:211
msgid " -L, --table            list signal names and numbers\n"
msgstr " -L, --table            enumera los nombres y los números de las señales\n"

#: misc-utils/kill.c:212
msgid "     --verbose          print pids that will be signaled\n"
msgstr "     --verbose          imprime los pids a los que va a enviarse señal\n"

#: misc-utils/kill.c:232 term-utils/agetty.c:687
#, c-format
msgid "%s from %s"
msgstr "%s de %s"

#: misc-utils/kill.c:236
msgid " (with: "
msgstr " (con: )"

#: misc-utils/kill.c:285 misc-utils/kill.c:294 sys-utils/setpriv.c:451
#: sys-utils/unshare.c:499
#, c-format
msgid "unknown signal: %s"
msgstr "señal desconocida: %s"

#: misc-utils/kill.c:305 misc-utils/kill.c:308 misc-utils/kill.c:317
#: misc-utils/kill.c:329 misc-utils/kill.c:372 sys-utils/mountpoint.c:193
#, c-format
msgid "%s and %s are mutually exclusive"
msgstr "%s y %s son mutuamente excluyentes"

#: misc-utils/kill.c:332 misc-utils/kill.c:347 sys-utils/eject.c:208
#: sys-utils/eject.c:230 sys-utils/losetup.c:726 sys-utils/tunelp.c:164
#: sys-utils/tunelp.c:171 sys-utils/tunelp.c:178 sys-utils/tunelp.c:185
#: sys-utils/tunelp.c:192 sys-utils/tunelp.c:198 sys-utils/tunelp.c:202
#: sys-utils/tunelp.c:209 term-utils/setterm.c:211 term-utils/setterm.c:214
#: term-utils/setterm.c:233 term-utils/setterm.c:235 term-utils/setterm.c:273
#: term-utils/setterm.c:275 term-utils/setterm.c:291 term-utils/setterm.c:298
#: term-utils/setterm.c:300 term-utils/setterm.c:312 term-utils/setterm.c:314
#: term-utils/setterm.c:323 term-utils/setterm.c:331 term-utils/setterm.c:346
#: term-utils/setterm.c:348 term-utils/setterm.c:360 term-utils/setterm.c:362
#: term-utils/setterm.c:373 term-utils/setterm.c:561 term-utils/setterm.c:566
#: term-utils/setterm.c:571 term-utils/setterm.c:576 term-utils/setterm.c:600
#: term-utils/setterm.c:605 term-utils/setterm.c:610 term-utils/setterm.c:615
#: term-utils/setterm.c:620 term-utils/setterm.c:625 term-utils/setterm.c:634
#: term-utils/setterm.c:669 text-utils/more.c:324
msgid "argument error"
msgstr "error en el argumento"

#: misc-utils/kill.c:369
#, c-format
msgid "invalid signal name or number: %s"
msgstr "Número o nombre de señal no válido: %s"

#: misc-utils/kill.c:395
#, c-format
msgid "pidfd_open() failed: %d"
msgstr "pidfd_open() ha fallado: %d"

#: misc-utils/kill.c:400 misc-utils/kill.c:414
msgid "pidfd_send_signal() failed"
msgstr "pidfd_send_signal() ha fallado"

#: misc-utils/kill.c:411
#, c-format
msgid "timeout, sending signal %d to pid %d\n"
msgstr "tiempo vencido, se envía la señal %d al pid %d\n"

#: misc-utils/kill.c:426
#, c-format
msgid "sending signal %d to pid %d\n"
msgstr "se envía la señal %d al pid %d\n"

#: misc-utils/kill.c:444
#, c-format
msgid "sending signal to %s failed"
msgstr "no se ha podido enviar la señal a %s"

#: misc-utils/kill.c:493
#, c-format
msgid "cannot find process \"%s\""
msgstr "no se puede encontrar el proceso \"%s\""

#: misc-utils/logger.c:228
#, c-format
msgid "unknown facility name: %s"
msgstr "nombre de recurso desconocido: %s"

#: misc-utils/logger.c:234
#, c-format
msgid "unknown priority name: %s"
msgstr "nombre de prioridad desconocido: %s"

#: misc-utils/logger.c:246
#, c-format
msgid "openlog %s: pathname too long"
msgstr "al abrir %s: nombre de ruta demasiado largo"

#: misc-utils/logger.c:273
#, c-format
msgid "socket %s"
msgstr "«socket» %s"

#: misc-utils/logger.c:310
#, c-format
msgid "failed to resolve name %s port %s: %s"
msgstr "no se ha podido resolver el nombre %s puerto %s: %s"

#: misc-utils/logger.c:327
#, c-format
msgid "failed to connect to %s port %s"
msgstr "no se ha podido conectar a %s puerto %s"

#: misc-utils/logger.c:375
#, c-format
msgid "maximum input lines (%d) exceeded"
msgstr "máximas líneas de entrada (%d) sobrepasadas"

#: misc-utils/logger.c:528
msgid "send message failed"
msgstr "fallo al enviar mensaje"

#: misc-utils/logger.c:598
#, c-format
msgid "structured data ID '%s' is not unique"
msgstr "El ID de datos estructurados '%s' no es único"

#: misc-utils/logger.c:612
#, c-format
msgid "--sd-id was not specified for --sd-param %s"
msgstr "no se ha especificado --sd-id para --sd-param %s"

#: misc-utils/logger.c:791
msgid "localtime() failed"
msgstr "localtime() ha fallado"

#: misc-utils/logger.c:801
#, c-format
msgid "hostname '%s' is too long"
msgstr "nombre de máquina '%s' demasiado largo"

#: misc-utils/logger.c:807
#, c-format
msgid "tag '%s' is too long"
msgstr "etiqueta '%s' demasiado larga"

#: misc-utils/logger.c:870
#, c-format
msgid "ignoring unknown option argument: %s"
msgstr "se hace caso omiso del argumento desconocido: %s"

#: misc-utils/logger.c:882
#, c-format
msgid "invalid argument: %s: using automatic errors"
msgstr "argumento no válido: %s: se utilizarán errores automáticos"

#: misc-utils/logger.c:1053
#, c-format
msgid " %s [options] [<message>]\n"
msgstr " %s [opciones] [<mensaje>]\n"

#: misc-utils/logger.c:1056
msgid "Enter messages into the system log.\n"
msgstr "Introduce mensajes en el registro del sistema.\n"

#: misc-utils/logger.c:1059
msgid " -i                       log the logger command's PID\n"
msgstr " -i                       registra el PID de la orden del logger\n"

#: misc-utils/logger.c:1060
msgid "     --id[=<id>]          log the given <id>, or otherwise the PID\n"
msgstr "     --id[=<id>]          registra el <id> dado o, en otro caso, el PID\n"

#: misc-utils/logger.c:1061
msgid " -f, --file <file>        log the contents of this file\n"
msgstr " -f, --file <fichero>     anota el contenido de este fichero\n"

#: misc-utils/logger.c:1062
msgid " -e, --skip-empty         do not log empty lines when processing files\n"
msgstr " -e, --skip-empty         no registra líneas vacías al procesar ficheros\n"

#: misc-utils/logger.c:1063
msgid "     --no-act             do everything except the write the log\n"
msgstr "     --no-act             hace todo excepto escribir en el registro\n"

#: misc-utils/logger.c:1064
msgid " -p, --priority <prio>    mark given message with this priority\n"
msgstr " -p, --priority <prio>    marca el mensaje dado con esta prioridad\n"

#: misc-utils/logger.c:1065
msgid "     --octet-count        use rfc6587 octet counting\n"
msgstr "     --octet-count        utiliza el método de contar octetos de rfc6587\n"

#: misc-utils/logger.c:1066
msgid "     --prio-prefix        look for a prefix on every line read from stdin\n"
msgstr "     --prio-prefix        busca prefijo en todas las líneas que se lean de stdin\n"

#: misc-utils/logger.c:1067
msgid " -s, --stderr             output message to standard error as well\n"
msgstr " -s, --stderr             saca mensajes también por la salida de error estándar\n"

#: misc-utils/logger.c:1068
msgid " -S, --size <size>        maximum size for a single message\n"
msgstr " -S, --size <tamaño>      máximo tamaño de un mensaje\n"

#: misc-utils/logger.c:1069
msgid " -t, --tag <tag>          mark every line with this tag\n"
msgstr " -t, --tag <etiqueta>     marca todas las líneas con esta etiqueta\n"

#: misc-utils/logger.c:1070
msgid " -n, --server <name>      write to this remote syslog server\n"
msgstr " -n, --server <nombre>    escribe en este servidor remoto de syslog\n"

#: misc-utils/logger.c:1071
msgid " -P, --port <port>        use this port for UDP or TCP connection\n"
msgstr " -P, --port <puerto>      utiliza este puerto para conexiones UDP o TCP\n"

#: misc-utils/logger.c:1072
msgid " -T, --tcp                use TCP only\n"
msgstr " -T, --tcp                utiliza solamente TCP\n"

#: misc-utils/logger.c:1073
msgid " -d, --udp                use UDP only\n"
msgstr " -d, --udp                utiliza solamente UDP\n"

#: misc-utils/logger.c:1074
msgid "     --rfc3164            use the obsolete BSD syslog protocol\n"
msgstr "     --rfc3164            utiliza el protocolo syslog de BSD obsoleto\n"

#: misc-utils/logger.c:1075
msgid ""
"     --rfc5424[=<snip>]   use the syslog protocol (the default for remote);\n"
"                            <snip> can be notime, or notq, and/or nohost\n"
msgstr ""
"     --rfc5424[=<snip>]   utiliza el protocolo syslog (opción predeterminada para remoto);\n"
"                            <snip> puede ser notime, o notq, y/o nohost\n"

#: misc-utils/logger.c:1077
msgid "     --sd-id <id>         rfc5424 structured data ID\n"
msgstr "     --sd-id <id>         ID de datos estructurados rfc5424\n"

#: misc-utils/logger.c:1078
msgid "     --sd-param <data>    rfc5424 structured data name=value\n"
msgstr "     --sd-param <datos>   nombre de datos estructurados rfc5424=valor\n"

#: misc-utils/logger.c:1079
msgid "     --msgid <msgid>      set rfc5424 message id field\n"
msgstr "     --msgid <msgid>      establece el campo id del mensaje rfc5424\n"

#: misc-utils/logger.c:1080
msgid " -u, --socket <socket>    write to this Unix socket\n"
msgstr " -u, --socket <socket> escribe por este «socket» de Unix\n"

#: misc-utils/logger.c:1081
msgid ""
"     --socket-errors[=<on|off|auto>]\n"
"                          print connection errors when using Unix sockets\n"
msgstr ""
"     --socket-errors[=<on|off|auto>]\n"
"                          imprime los errores de conexión cuando se utilizan sockets de Unix\n"

#: misc-utils/logger.c:1084
msgid "     --journald[=<file>]  write journald entry\n"
msgstr "     --journald[=<fichero>] escribe entrada de journald\n"

#: misc-utils/logger.c:1170
#, c-format
msgid "file %s"
msgstr "fichero %s"

#: misc-utils/logger.c:1185
msgid "failed to parse id"
msgstr "fallo al analizar id"

#: misc-utils/logger.c:1203
msgid "failed to parse message size"
msgstr "fallo al analizar el tamaño del mensaje"

#: misc-utils/logger.c:1233
msgid "--msgid cannot contain space"
msgstr "--msgid no puede contener espacio"

#: misc-utils/logger.c:1255
#, c-format
msgid "invalid structured data ID: '%s'"
msgstr "ID de datos estructurados no válido: '%s'"

#: misc-utils/logger.c:1260
#, c-format
msgid "invalid structured data parameter: '%s'"
msgstr "el parámetro de datos estructurados no es válido: '%s'"

#: misc-utils/logger.c:1275
msgid "--file <file> and <message> are mutually exclusive, message is ignored"
msgstr "--file <fichero> y <mensaje> son mutamente excluyentes; se hará caso omiso de mensaje"

#: misc-utils/logger.c:1282
msgid "journald entry could not be written"
msgstr "no se ha podido escribir la entrada journald"

#: misc-utils/look.c:359
#, c-format
msgid " %s [options] <string> [<file>...]\n"
msgstr " %s [opciones] <cadena> [<fichero>...]\n"

#: misc-utils/look.c:362
msgid "Display lines beginning with a specified string.\n"
msgstr "Muestra las líneas que empiezan con una cadena de texto especificada.\n"

#: misc-utils/look.c:365
msgid " -a, --alternative        use the alternative dictionary\n"
msgstr " -a, --alternative        utiliza el diccionario alternativo\n"

#: misc-utils/look.c:366
msgid " -d, --alphanum           compare only blanks and alphanumeric characters\n"
msgstr " -d, --alphanum           compara solamente espacios y caracteres alfanuméricos\n"

#: misc-utils/look.c:367
msgid " -f, --ignore-case        ignore case differences when comparing\n"
msgstr " -f, --ignore-case        no tiene en cuenta diferencias entre mayúsculas y minúsculas al comparar\n"

#: misc-utils/look.c:368
msgid " -t, --terminate <char>   define the string-termination character\n"
msgstr " -t, --terminate <carácter> define el carácter de finalización de cadena\n"

#: misc-utils/lsblk.c:153
msgid "device name"
msgstr "nombre de dispositivo"

#: misc-utils/lsblk.c:154
msgid "internal kernel device name"
msgstr "nombre interno del dispositivo del núcleo"

#: misc-utils/lsblk.c:155
msgid "internal parent kernel device name"
msgstr "nombre interno del dispositivo padre del núcleo"

#: misc-utils/lsblk.c:156
msgid "path to the device node"
msgstr "ruta al nodo del dispositivo"

#: misc-utils/lsblk.c:164
msgid "filesystem version"
msgstr "versión del sistema de ficheros"

#: misc-utils/lsblk.c:166 sys-utils/zramctl.c:86
msgid "where the device is mounted"
msgstr "donde está montado el dispositivo"

#: misc-utils/lsblk.c:167 misc-utils/wipefs.c:110
msgid "filesystem LABEL"
msgstr "ETIQUETA del sistema de ficheros"

#: misc-utils/lsblk.c:170
msgid "partition table identifier (usually UUID)"
msgstr "identificador de la tabla de particiones (normalmente el UUID)"

#: misc-utils/lsblk.c:171
msgid "partition table type"
msgstr "tipo de tabla de particiones"

#: misc-utils/lsblk.c:173
msgid "partition type code or UUID"
msgstr "código o UUID del tipo de partición"

#: misc-utils/lsblk.c:174
msgid "partition type name"
msgstr "nombre del tipo de partición"

#: misc-utils/lsblk.c:175
msgid "partition LABEL"
msgstr "ETIQUETA de la partición"

#: misc-utils/lsblk.c:179
msgid "read-ahead of the device"
msgstr "lectura por delante del dispositivo"

#: misc-utils/lsblk.c:180 sys-utils/losetup.c:79
msgid "read-only device"
msgstr "dispositivo de sólo lectura"

#: misc-utils/lsblk.c:181
msgid "removable device"
msgstr "dispositivo extraible"

#: misc-utils/lsblk.c:182
msgid "removable or hotplug device (usb, pcmcia, ...)"
msgstr "dispositivo conectable y desconectable en caliente (usb, pcmcia, ...)"

#: misc-utils/lsblk.c:183
msgid "rotational device"
msgstr "dispositivo giratorio"

#: misc-utils/lsblk.c:184
msgid "adds randomness"
msgstr "añade aleatoriedad"

#: misc-utils/lsblk.c:185
msgid "device identifier"
msgstr "identificador de dispositivo"

#: misc-utils/lsblk.c:186
msgid "disk serial number"
msgstr "número de serie del disco"

#: misc-utils/lsblk.c:187
msgid "size of the device"
msgstr "tamaño del dispositivo"

#: misc-utils/lsblk.c:188
msgid "state of the device"
msgstr "estado del dispositivo"

#: misc-utils/lsblk.c:190
msgid "group name"
msgstr "nombre del grupo"

#: misc-utils/lsblk.c:191
msgid "device node permissions"
msgstr "permisos del nodo del dispositivo"

#: misc-utils/lsblk.c:192
msgid "alignment offset"
msgstr "desplazamiento de alineación"

#: misc-utils/lsblk.c:193
msgid "minimum I/O size"
msgstr "tamaño mínimo de E/S"

#: misc-utils/lsblk.c:194
msgid "optimal I/O size"
msgstr "tamaño óptimo de E/S"

#: misc-utils/lsblk.c:195
msgid "physical sector size"
msgstr "tamaño del sector físico"

#: misc-utils/lsblk.c:196
msgid "logical sector size"
msgstr "tamaño del sector lógico"

#: misc-utils/lsblk.c:197
msgid "I/O scheduler name"
msgstr "nombre del planificador de E/S"

#: misc-utils/lsblk.c:198
msgid "request queue size"
msgstr "tamaño de la cola de peticiones"

#: misc-utils/lsblk.c:199
msgid "device type"
msgstr "tipo de dispositivo"

#: misc-utils/lsblk.c:200
msgid "discard alignment offset"
msgstr "se descarta el desplazamiento del alineamiento"

#: misc-utils/lsblk.c:201
msgid "discard granularity"
msgstr "se descarta la granularidad"

#: misc-utils/lsblk.c:202
msgid "discard max bytes"
msgstr "se descarta el máximo de bytes"

#: misc-utils/lsblk.c:203
msgid "discard zeroes data"
msgstr "se descartan los datos a cero"

#: misc-utils/lsblk.c:204
msgid "write same max bytes"
msgstr "escritura del mismo máximo de btyes"

#: misc-utils/lsblk.c:205
msgid "unique storage identifier"
msgstr "identificador de almacenamiento único"

#: misc-utils/lsblk.c:206
msgid "Host:Channel:Target:Lun for SCSI"
msgstr "Máquina:Canal:Objetivo:Ulog para SCSI"

#: misc-utils/lsblk.c:207
msgid "device transport type"
msgstr "tipo de transporte del dispositivo"

#: misc-utils/lsblk.c:208
msgid "de-duplicated chain of subsystems"
msgstr "deshace duplicado de cadena de subsistemas"

#: misc-utils/lsblk.c:209
msgid "device revision"
msgstr "versión de dispositivo"

#: misc-utils/lsblk.c:210
msgid "device vendor"
msgstr "vendedor del dispositivo"

#: misc-utils/lsblk.c:211
msgid "zone model"
msgstr "modelo de zona"

#: misc-utils/lsblk.c:212
#, fuzzy
msgid "dax-capable device"
msgstr "dispositivo extraible"

#: misc-utils/lsblk.c:1243
msgid "failed to allocate device"
msgstr "no se ha podido reservar dispositivo"

#: misc-utils/lsblk.c:1283
msgid "failed to open device directory in sysfs"
msgstr "no se ha podido abrir el directorio del dispositivo en sistema de ficheros"

#: misc-utils/lsblk.c:1465
#, c-format
msgid "%s: failed to get sysfs name"
msgstr "%s: fallo al obtener el nombre del sistema de ficheros"

#: misc-utils/lsblk.c:1477
#, c-format
msgid "%s: failed to get whole-disk device number"
msgstr "%s: fallo al obtener el número de dispositivo del disco completo"

#: misc-utils/lsblk.c:1550 misc-utils/lsblk.c:1598
msgid "failed to allocate /sys handler"
msgstr "fallo al asignar el manejador de /sys"

#: misc-utils/lsblk.c:1658 misc-utils/lsblk.c:1660 misc-utils/lsblk.c:1689
#: misc-utils/lsblk.c:1691
#, c-format
msgid "failed to parse list '%s'"
msgstr "fallo al analizar la lista '%s'"

#. TRANSLATORS: The standard value for %d is 256.
#: misc-utils/lsblk.c:1665
#, c-format
msgid "the list of excluded devices is too large (limit is %d devices)"
msgstr "la lista de dispositivos excluidos es demasiado grande (el límite es de %d dispositivos)"

#. TRANSLATORS: The standard value for %d is 256.
#: misc-utils/lsblk.c:1696
#, c-format
msgid "the list of included devices is too large (limit is %d devices)"
msgstr "la lista de dispositivos incluidos es demasiado grande (el límite es de %d dispositivos)"

#: misc-utils/lsblk.c:1765 sys-utils/wdctl.c:207
#, c-format
msgid " %s [options] [<device> ...]\n"
msgstr " %s [opciones] [<dispositivo> ...]\n"

#: misc-utils/lsblk.c:1768
msgid "List information about block devices.\n"
msgstr "Muestra información sobre dispositivos de bloques.\n"

#: misc-utils/lsblk.c:1771
msgid " -D, --discard        print discard capabilities\n"
msgstr " -D, --discard        imprime las capacidades de descarte\n"

#: misc-utils/lsblk.c:1772
msgid " -E, --dedup <column> de-duplicate output by <column>\n"
msgstr " -E, --dedup <columna> desduplica la salida por <columna>\n"

#: misc-utils/lsblk.c:1773
msgid " -I, --include <list> show only devices with specified major numbers\n"
msgstr " -I, --include <lista>muestra únicamente dispositivos con los números mayores especificados\n"

#: misc-utils/lsblk.c:1774 sys-utils/lsirq.c:63 sys-utils/lsmem.c:512
msgid " -J, --json           use JSON output format\n"
msgstr " -J, --json           utiliza formato de salida JSON\n"

#: misc-utils/lsblk.c:1775
msgid " -O, --output-all     output all columns\n"
msgstr " -O, --output-all     saca todas las columnas\n"

#: misc-utils/lsblk.c:1777
msgid " -S, --scsi           output info about SCSI devices\n"
msgstr " -S, --scsi           saca información sobre los dispositivos SCSI\n"

#: misc-utils/lsblk.c:1778
msgid " -T, --tree[=<column>] use tree format output\n"
msgstr " -T, --tree[=<columna>] utiliza salida con formato de árbol\n"

#: misc-utils/lsblk.c:1779
msgid " -a, --all            print all devices\n"
msgstr " -a, --all            imprime todos los dispositivos\n"

#: misc-utils/lsblk.c:1781
msgid " -d, --nodeps         don't print slaves or holders\n"
msgstr " -d, --nodeps         noimprime esclavos ni portadores\n"

#: misc-utils/lsblk.c:1782
msgid " -e, --exclude <list> exclude devices by major number (default: RAM disks)\n"
msgstr " -e, --exclude <lista>excluye dispositivos por número mayor (por omisión: discos RAM)\n"

#: misc-utils/lsblk.c:1783
msgid " -f, --fs             output info about filesystems\n"
msgstr " -f, --fs             saca información sobre los sistemas de ficheros\n"

#: misc-utils/lsblk.c:1784
msgid " -i, --ascii          use ascii characters only\n"
msgstr " -i, --ascii          utiliza caracteres ascii solamente\n"

#: misc-utils/lsblk.c:1785
msgid " -l, --list           use list format output\n"
msgstr " -l, --list           utiliza salida con formato de lista\n"

#: misc-utils/lsblk.c:1786
msgid " -M, --merge          group parents of sub-trees (usable for RAIDs, Multi-path)\n"
msgstr " -M, --merge          agrupa padres de subárboles (utilizable para RAIDs, Multi-path)\n"

#: misc-utils/lsblk.c:1787
msgid " -m, --perms          output info about permissions\n"
msgstr " -m, --perms          saca información sobre los permisos\n"

#: misc-utils/lsblk.c:1788 sys-utils/lsirq.c:65 sys-utils/lsmem.c:516
msgid " -n, --noheadings     don't print headings\n"
msgstr " -n, --noheadings     no imprime encabezados\n"

#: misc-utils/lsblk.c:1789 sys-utils/lsmem.c:517
msgid " -o, --output <list>  output columns\n"
msgstr " -o, --output <lista> columnas que mostrar\n"

#: misc-utils/lsblk.c:1790
msgid " -p, --paths          print complete device path\n"
msgstr " -p, --paths          imprime la ruta completa del dispositivo\n"

#: misc-utils/lsblk.c:1792
msgid " -s, --inverse        inverse dependencies\n"
msgstr " -s, --inverse        dependencias inversas\n"

#: misc-utils/lsblk.c:1793
msgid " -t, --topology       output info about topology\n"
msgstr " -t, --topology       saca información sobre la topología\n"

#: misc-utils/lsblk.c:1794
msgid " -z, --zoned          print zone model\n"
msgstr " -z, --zoned          imprime el modelo de zona\n"

#: misc-utils/lsblk.c:1795
msgid " -x, --sort <column>  sort output by <column>\n"
msgstr " -x, --sort <columna> ordena la salida por <columna>\n"

#: misc-utils/lsblk.c:1796
msgid "     --sysroot <dir>  use specified directory as system root\n"
msgstr "     --sysroot <dir>  utiliza como raíz del sistema el directorio especificado\n"

#: misc-utils/lsblk.c:1813
#, c-format
msgid "failed to access sysfs directory: %s"
msgstr "no se ha podido acceder al directorio del sistema de ficheros: %s"

#: misc-utils/lsblk.c:2154
msgid "failed to allocate device tree"
msgstr "no se ha podido reservar el árbol del dispositivo"

#: misc-utils/lslocks.c:73
msgid "command of the process holding the lock"
msgstr "orden del proceso que sostiene el bloqueo"

#: misc-utils/lslocks.c:74
msgid "PID of the process holding the lock"
msgstr "PID del proceso que sostiene el bloqueo"

#: misc-utils/lslocks.c:75
msgid "kind of lock"
msgstr "tipo de bloqueo"

#: misc-utils/lslocks.c:76
msgid "size of the lock"
msgstr "tamaño del bloqueo"

#: misc-utils/lslocks.c:77
msgid "lock access mode"
msgstr "modo de acceso al bloqueo"

#: misc-utils/lslocks.c:78
msgid "mandatory state of the lock: 0 (none), 1 (set)"
msgstr "estado obligatorio del bloqueo: 0 (no hay), 1 (definido)"

#: misc-utils/lslocks.c:79
msgid "relative byte offset of the lock"
msgstr "posición relativa del bloqueo en bytes"

#: misc-utils/lslocks.c:80
msgid "ending offset of the lock"
msgstr "posición del final del bloqueo"

#: misc-utils/lslocks.c:81
msgid "path of the locked file"
msgstr "ruta del fichero bloqueado"

#: misc-utils/lslocks.c:82
msgid "PID of the process blocking the lock"
msgstr "PID del proceso que está bloqueando el bloqueo"

#: misc-utils/lslocks.c:259
msgid "failed to parse ID"
msgstr "fallo al analizar ID"

#: misc-utils/lslocks.c:281 sys-utils/nsenter.c:262
msgid "failed to parse pid"
msgstr "fallo al analizar pid"

#: misc-utils/lslocks.c:285
msgid "(unknown)"
msgstr "(desconocido)"

#: misc-utils/lslocks.c:287
msgid "(undefined)"
msgstr "(indefinido)"

#: misc-utils/lslocks.c:296
msgid "failed to parse start"
msgstr "fallo al analizar el principio"

#: misc-utils/lslocks.c:303
msgid "failed to parse end"
msgstr "fallo al analizar el final"

#: misc-utils/lslocks.c:531
msgid "List local system locks.\n"
msgstr "Enumera los bloqueos del sistema local.\n"

#: misc-utils/lslocks.c:534
msgid " -b, --bytes            print SIZE in bytes rather than in human readable format\n"
msgstr " -b, --btyes            muestra el TAMAÑO en bytes en lugar de hacerlo en formato legible para humanos\n"

#: misc-utils/lslocks.c:536
msgid " -i, --noinaccessible   ignore locks without read permissions\n"
msgstr " -i, --noinaccessible   hacer caso omiso de bloqueos sin permisos de lectura\n"

#: misc-utils/lslocks.c:537 sys-utils/lsns.c:907 sys-utils/rfkill.c:582
msgid " -n, --noheadings       don't print headings\n"
msgstr " -n, --noheadings       no imprime encabezados\n"

#: misc-utils/lslocks.c:538 sys-utils/lsns.c:908 sys-utils/rfkill.c:583
msgid " -o, --output <list>    define which output columns to use\n"
msgstr " -o, --output <lista>   define que columnas de salida utilizar\n"

#: misc-utils/lslocks.c:539 sys-utils/lsns.c:909 sys-utils/rfkill.c:584
msgid "     --output-all       output all columns\n"
msgstr "     --output-all       saca todas las columnas\n"

#: misc-utils/lslocks.c:540
msgid " -p, --pid <pid>        display only locks held by this process\n"
msgstr " -p, --pid <pid>        muestra solo los bloqueos que mantiene este proceso\n"

#: misc-utils/lslocks.c:541 sys-utils/lsns.c:911 sys-utils/rfkill.c:585
msgid " -r, --raw              use the raw output format\n"
msgstr " -r, --raw              utiliza el formato de salida en bruto\n"

#: misc-utils/lslocks.c:606 schedutils/chrt.c:484 schedutils/ionice.c:177
#: schedutils/taskset.c:171 sys-utils/choom.c:102 sys-utils/lsns.c:993
#: sys-utils/prlimit.c:587
msgid "invalid PID argument"
msgstr "argumento PID incorrecto"

#: misc-utils/mcookie.c:86
msgid "Generate magic cookies for xauth.\n"
msgstr "Genera «cookies» mágicas para xauth.\n"

#: misc-utils/mcookie.c:89
msgid " -f, --file <file>     use file as a cookie seed\n"
msgstr " -f, --file <fichero>  utiliza fichero como semilla de «cookie»\n"

#: misc-utils/mcookie.c:90
msgid " -m, --max-size <num>  limit how much is read from seed files\n"
msgstr " -m, --max-size <num>  limita la cantidad que se lee de los ficheros de semilla\n"

#: misc-utils/mcookie.c:91
msgid " -v, --verbose         explain what is being done\n"
msgstr " -v, --verbose         explica lo que se está haciendo\n"

#: misc-utils/mcookie.c:97 misc-utils/wipefs.c:671 sys-utils/blkdiscard.c:104
#: sys-utils/fallocate.c:107 sys-utils/fstrim.c:434
msgid "<num>"
msgstr ""

#: misc-utils/mcookie.c:124
#, c-format
msgid "Got %zu byte from %s\n"
msgid_plural "Got %zu bytes from %s\n"
msgstr[0] "Se ha obtenido %zu byte de %s\n"
msgstr[1] "Se han obtenido %zu bytes de %s\n"

#: misc-utils/mcookie.c:129
#, c-format
msgid "closing %s failed"
msgstr "fallo al cerrar %s"

#: misc-utils/mcookie.c:168 sys-utils/blkdiscard.c:184 sys-utils/fstrim.c:500
#: text-utils/hexdump.c:117
msgid "failed to parse length"
msgstr "fallo al analizar la longitud"

#: misc-utils/mcookie.c:181
msgid "--max-size ignored when used without --file"
msgstr "--max-size ignorado cuando se utiliza sin --file"

#: misc-utils/mcookie.c:190
#, c-format
msgid "Got %d byte from %s\n"
msgid_plural "Got %d bytes from %s\n"
msgstr[0] "Se ha obtenido %d byte de %s\n"
msgstr[1] "Se han obtenido %d bytes de %s\n"

#: misc-utils/namei.c:90
#, c-format
msgid "failed to read symlink: %s"
msgstr "fallo al leer enlace simbólico: %s"

#: misc-utils/namei.c:334
#, c-format
msgid " %s [options] <pathname>...\n"
msgstr " %s [opciones] <nombre de ruta> ...\n"

#: misc-utils/namei.c:337
msgid "Follow a pathname until a terminal point is found.\n"
msgstr "Sigue una ruta hasta encontrar un punto terminal.\n"

#: misc-utils/namei.c:341
msgid ""
" -x, --mountpoints   show mount point directories with a 'D'\n"
" -m, --modes         show the mode bits of each file\n"
" -o, --owners        show owner and group name of each file\n"
" -l, --long          use a long listing format (-m -o -v) \n"
" -n, --nosymlinks    don't follow symlinks\n"
" -v, --vertical      vertical align of modes and owners\n"
msgstr ""
" -x, --mountpoints   muestra los directorios de puntos de montaje con una 'D'\n"
" -m, --modes         muestra los bits de modo de cada fichero\n"
" -o, --owners        muestra el nombre de propietario y el de grupo de cada fichero\n"
" -l, --long          utiliza formato de listado largo (-m -o -v) \n"
" -n, --nosymlinks    no sigue los enlaces simbólicos\n"
" -v, --vertical      alinea verticalmente los modos y los propietarios\n"

#: misc-utils/namei.c:408
msgid "pathname argument is missing"
msgstr "falta el argumento del nombre de ruta"

#: misc-utils/namei.c:414 sys-utils/lsns.c:1070
msgid "failed to allocate UID cache"
msgstr "fallo al asignar la caché UID"

#: misc-utils/namei.c:417
msgid "failed to allocate GID cache"
msgstr "fallo al asignar la caché GID"

#: misc-utils/namei.c:439
#, c-format
msgid "%s: exceeded limit of symlinks"
msgstr "%s: se ha superado el límite de enlaces simbólicos"

#: misc-utils/rename.c:74
#, c-format
msgid "%s: overwrite `%s'? "
msgstr "%s: ¿sobreescribir `%s'? "

#: misc-utils/rename.c:115 misc-utils/rename.c:177
#, c-format
msgid "%s: not accessible"
msgstr "%s: no se puede acceder"

#: misc-utils/rename.c:124
#, c-format
msgid "%s: not a symbolic link"
msgstr "%s: no es un enlace simbólico"

#: misc-utils/rename.c:129
#, c-format
msgid "%s: readlink failed"
msgstr "%s: readlink ha fallado"

#: misc-utils/rename.c:144
#, c-format
msgid "Skipping existing link: `%s' -> `%s'\n"
msgstr "Salta el enlace existente: `%s' -> `%s'\n"

#: misc-utils/rename.c:150
#, c-format
msgid "%s: unlink failed"
msgstr "%s: unlink ha fallado"

#: misc-utils/rename.c:154
#, c-format
msgid "%s: symlinking to %s failed"
msgstr "%s: el enlazado simbólico a %s ha fallado"

#: misc-utils/rename.c:197
#, c-format
msgid "Skipping existing file: `%s'\n"
msgstr "Saltando fichero que ya existe: `%s'\n"

#: misc-utils/rename.c:201
#, c-format
msgid "%s: rename to %s failed"
msgstr "%s: fallo al cambiar el nombre a %s"

#: misc-utils/rename.c:215
#, c-format
msgid " %s [options] <expression> <replacement> <file>...\n"
msgstr " %s [opciones] <expresión> <sustituto> <fichero>...\n"

#: misc-utils/rename.c:219
msgid "Rename files.\n"
msgstr "Cambia el nombre de un fichero.\n"

#: misc-utils/rename.c:222
msgid " -v, --verbose       explain what is being done\n"
msgstr " -v, --verbose       explica lo que se está haciendo\n"

#: misc-utils/rename.c:223
msgid " -s, --symlink       act on the target of symlinks\n"
msgstr " -s, --symlink       actúa sobre el objetivo de los enlaces simbólicos\n"

#: misc-utils/rename.c:224
msgid " -n, --no-act        do not make any changes\n"
msgstr " -n, --no-act        no hace ningún cambio\n"

#: misc-utils/rename.c:225
msgid " -o, --no-overwrite  don't overwrite existing files\n"
msgstr " -o, --no-overwrite  no sobreescribir ficheros existentes\n"

#: misc-utils/rename.c:226
msgid " -i, --interactive   prompt before overwrite\n"
msgstr " -i, --interactivo   pregunta antes de sobreescribir\n"

#: misc-utils/rename.c:302
msgid "failed to get terminal attributes"
msgstr "no se han podido obtener los atributos del terminal"

#: misc-utils/uuidd.c:64
msgid "A daemon for generating UUIDs.\n"
msgstr "Demonio para generar UUIDs.\n"

#: misc-utils/uuidd.c:66
msgid " -p, --pid <path>        path to pid file\n"
msgstr " -p, --pid <ruta>        ruta del fichero pid\n"

#: misc-utils/uuidd.c:67
msgid " -s, --socket <path>     path to socket\n"
msgstr " -s, --socket <ruta>     ruta del «socket»\n"

#: misc-utils/uuidd.c:68
msgid " -T, --timeout <sec>     specify inactivity timeout\n"
msgstr " -T, --timeout <s>       especifica el tiempo límite de inactividad\n"

#: misc-utils/uuidd.c:69
msgid " -k, --kill              kill running daemon\n"
msgstr " -k, --kill              mata demonio en ejecución\n"

#: misc-utils/uuidd.c:70
msgid " -r, --random            test random-based generation\n"
msgstr " -r, --random            prueba la generación basada en aleatorios\n"

#: misc-utils/uuidd.c:71
msgid " -t, --time              test time-based generation\n"
msgstr " -t, --time              prueba la generación basada en tiempo\n"

#: misc-utils/uuidd.c:72
msgid " -n, --uuids <num>       request number of uuids\n"
msgstr " -n, --uuids <número>    solicita el número de uuids\n"

#: misc-utils/uuidd.c:73
msgid " -P, --no-pid            do not create pid file\n"
msgstr " -P, --no-pid            no crea fichero pid\n"

#: misc-utils/uuidd.c:74
msgid " -F, --no-fork           do not daemonize using double-fork\n"
msgstr " -F, --no-fork           no demoniza utilizando doble «fork»\n"

#: misc-utils/uuidd.c:75
msgid " -S, --socket-activation do not create listening socket\n"
msgstr " -S, --socket-activation no crea socket de escucha\n"

#: misc-utils/uuidd.c:76
msgid " -d, --debug             run in debugging mode\n"
msgstr " -d, --debug             ejecuta en modo depuración\n"

#: misc-utils/uuidd.c:77
msgid " -q, --quiet             turn on quiet mode\n"
msgstr " -q, --quiet             activa el modo silencioso\n"

#: misc-utils/uuidd.c:109
msgid "bad arguments"
msgstr "argumentos incorrectos"

#: misc-utils/uuidd.c:116
msgid "socket"
msgstr "socket"

#: misc-utils/uuidd.c:127
msgid "connect"
msgstr "conexión"

#: misc-utils/uuidd.c:147
msgid "write"
msgstr "escritura"

#: misc-utils/uuidd.c:155
msgid "read count"
msgstr "número de lecturas"

#: misc-utils/uuidd.c:161
msgid "bad response length"
msgstr "longitud de respuesta incorrecta"

#: misc-utils/uuidd.c:212
#, c-format
msgid "cannot lock %s"
msgstr "no se puede bloquear %s"

#: misc-utils/uuidd.c:237
msgid "couldn't create unix stream socket"
msgstr "no se ha podido crear el «socket» unix orientado a la conexión"

#: misc-utils/uuidd.c:262
#, c-format
msgid "couldn't bind unix socket %s"
msgstr "no se ha podido asociar el «socket» unix %s"

#: misc-utils/uuidd.c:289
msgid "receiving signal failed"
msgstr "no se ha podido recibir la señal"

#: misc-utils/uuidd.c:304
msgid "timed out"
msgstr "tiempo de espera excedido"

#: misc-utils/uuidd.c:339 sys-utils/flock.c:274
msgid "cannot set up timer"
msgstr "no se puede configurar el temporizador"

#: misc-utils/uuidd.c:347
#, c-format
msgid "uuidd daemon is already running at pid %s"
msgstr "el demonio uuid ya está corriendo con el pid %s"

#: misc-utils/uuidd.c:356
#, c-format
msgid "couldn't listen on unix socket %s"
msgstr "no se ha podido poner a la escucha el «socket» unix %s"

#: misc-utils/uuidd.c:366
#, c-format
msgid "could not truncate file: %s"
msgstr "no se ha podido truncar el fichero: %s"

#: misc-utils/uuidd.c:380
msgid "sd_listen_fds() failed"
msgstr "sd_listen_fds() ha fallado"

#: misc-utils/uuidd.c:383
msgid "no file descriptors received, check systemctl status uuidd.socket"
msgstr "no se ha recibido ningún descriptor de fichero; comprobar systemctl status uuidd.socket"

#: misc-utils/uuidd.c:386
msgid "too many file descriptors received, check uuidd.socket"
msgstr "se han recibido demasiados decriptores de fichero; comprobar uuidd.socket"

#: misc-utils/uuidd.c:414 text-utils/more.c:1353
msgid "poll failed"
msgstr "el sondeo ha fallado"

#: misc-utils/uuidd.c:419
#, c-format
msgid "timeout [%d sec]\n"
msgstr "tiempo de espera [%d s]\n"

#: misc-utils/uuidd.c:436 sys-utils/irqtop.c:183 sys-utils/irqtop.c:186
#: sys-utils/irqtop.c:203 term-utils/setterm.c:920 text-utils/column.c:495
#: text-utils/column.c:518
msgid "read failed"
msgstr "fallo al leer"

#: misc-utils/uuidd.c:438
#, c-format
msgid "error reading from client, len = %d"
msgstr "error de lectura del cliente, longitud = %d"

#: misc-utils/uuidd.c:447
#, c-format
msgid "operation %d, incoming num = %d\n"
msgstr "operación %d, número entrante = %d\n"

#: misc-utils/uuidd.c:450
#, c-format
msgid "operation %d\n"
msgstr "operación %d\n"

#: misc-utils/uuidd.c:466
#, c-format
msgid "Generated time UUID: %s\n"
msgstr "UUID de tiempo generado: %s\n"

#: misc-utils/uuidd.c:476
#, c-format
msgid "Generated random UUID: %s\n"
msgstr "UUID aleatorio generado: %s\n"

#: misc-utils/uuidd.c:485
#, c-format
msgid "Generated time UUID %s and %d following\n"
msgid_plural "Generated time UUID %s and %d following\n"
msgstr[0] "UUID de tiempo generado %s y %d siguiente\n"
msgstr[1] "UUID de tiempo generado %s y %d siguientes\n"

#: misc-utils/uuidd.c:506
#, c-format
msgid "Generated %d UUID:\n"
msgid_plural "Generated %d UUIDs:\n"
msgstr[0] "%d UUID generado:\n"
msgstr[1] "%d UUIDs generados:\n"

#: misc-utils/uuidd.c:520
#, c-format
msgid "Invalid operation %d\n"
msgstr "Operación no válida %d\n"

#: misc-utils/uuidd.c:532
#, c-format
msgid "Unexpected reply length from server %d"
msgstr "Longitud inesperada de la respuesta del servidor %d"

#: misc-utils/uuidd.c:593
msgid "failed to parse --uuids"
msgstr "fallo al analizar --uuids"

#: misc-utils/uuidd.c:610
msgid "uuidd has been built without support for socket activation"
msgstr "se ha construido el uuidd sin soporte para la activación de «sockets»"

#: misc-utils/uuidd.c:629
msgid "failed to parse --timeout"
msgstr "fallo al analizar --timeout"

#: misc-utils/uuidd.c:642
#, c-format
msgid "socket name too long: %s"
msgstr "nombre de «socket» demasiado largo: %s"

#: misc-utils/uuidd.c:649
msgid "Both --socket-activation and --socket specified. Ignoring --socket."
msgstr "Se ha especificado --socket-activation y --socket. Se ignora --socket."

#: misc-utils/uuidd.c:656 misc-utils/uuidd.c:684
#, c-format
msgid "error calling uuidd daemon (%s)"
msgstr "error al llamar al demonio uuidd (%s)"

#: misc-utils/uuidd.c:657 misc-utils/uuidd.c:685
msgid "unexpected error"
msgstr "error inesperado"

#: misc-utils/uuidd.c:665
#, c-format
msgid "%s and %d subsequent UUID\n"
msgid_plural "%s and %d subsequent UUIDs\n"
msgstr[0] "%s y %d UUID siguiente\n"
msgstr[1] "%s y %d UUIDs siguientes\n"

#: misc-utils/uuidd.c:669
#, c-format
msgid "List of UUIDs:\n"
msgstr "Lista de UUIDs:\n"

#: misc-utils/uuidd.c:701
#, c-format
msgid "couldn't kill uuidd running at pid %d"
msgstr "no se ha podido matar el uuidd que está corriendo con el pid %d"

#: misc-utils/uuidd.c:706
#, c-format
msgid "Killed uuidd running at pid %d.\n"
msgstr "Matado el uuidd que estaba corriendo con pid %d.\n"

#: misc-utils/uuidgen.c:29
msgid "Create a new UUID value.\n"
msgstr "Crea un un valor nuevo de UUID.\n"

#: misc-utils/uuidgen.c:32
msgid " -r, --random        generate random-based uuid\n"
msgstr " -r, --random        genera uuid basado en números aleatorios\n"

#: misc-utils/uuidgen.c:33
msgid " -t, --time          generate time-based uuid\n"
msgstr " -t, --time          genera uuid basado en tiempo\n"

#: misc-utils/uuidgen.c:34
msgid " -n, --namespace ns  generate hash-based uuid in this namespace\n"
msgstr " -n, --namespace ns  genera uuid basado en «hash» en este espacio de nombres\n"

#: misc-utils/uuidgen.c:35
msgid " -N, --name name     generate hash-based uuid from this name\n"
msgstr " -N, --name nombre   genera uuid basado en «hash» a partir de este nombre\n"

#: misc-utils/uuidgen.c:36
msgid " -m, --md5           generate md5 hash\n"
msgstr " -m, --md5           genera «hash» md5\n"

#: misc-utils/uuidgen.c:37
msgid " -s, --sha1          generate sha1 hash\n"
msgstr " -s, --sha1          genera «hash» sha1\n"

#: misc-utils/uuidgen.c:38
msgid " -x, --hex           interpret name as hex string\n"
msgstr " -x, --hex           interpreta el nombre como una cadena hexadecimal\n"

#: misc-utils/uuidparse.c:76
msgid "unique identifier"
msgstr "identificador único"

#: misc-utils/uuidparse.c:77
msgid "variant name"
msgstr "nombre variante"

#: misc-utils/uuidparse.c:78
msgid "type name"
msgstr "nombre de tipo"

#: misc-utils/uuidparse.c:79
msgid "timestamp"
msgstr "marca de tiempo"

#: misc-utils/uuidparse.c:97
#, c-format
msgid " %s [options] <uuid ...>\n"
msgstr " %s [opciones] <uuid> ...\n"

#: misc-utils/uuidparse.c:100
msgid " -J, --json             use JSON output format"
msgstr " -J, --json             utiliza formato de salida JSON"

#: misc-utils/uuidparse.c:101
msgid " -n, --noheadings       don't print headings"
msgstr " -n, --noheadings       no imprime encabezados"

#: misc-utils/uuidparse.c:102
msgid " -o, --output <list>    COLUMNS to display (see below)"
msgstr " -o, --ouput <lista>    COLUMNAS que se mostrarán (ver abajo)"

#: misc-utils/uuidparse.c:103
msgid " -r, --raw              use the raw output format"
msgstr " -r, --raw              utiliza el formato de salida en bruto"

#: misc-utils/uuidparse.c:172 misc-utils/uuidparse.c:191
#: misc-utils/uuidparse.c:222
msgid "invalid"
msgstr "no válido"

#: misc-utils/uuidparse.c:186
msgid "other"
msgstr "otro"

#: misc-utils/uuidparse.c:197
msgid "nil"
msgstr "nulo"

#: misc-utils/uuidparse.c:202
msgid "time-based"
msgstr "basado en tiempo"

#: misc-utils/uuidparse.c:208
msgid "name-based"
msgstr "basado en nombre"

#: misc-utils/uuidparse.c:211
msgid "random"
msgstr "aleatorio"

#: misc-utils/uuidparse.c:214
msgid "sha1-based"
msgstr "basado en sha1"

#: misc-utils/uuidparse.c:267 misc-utils/wipefs.c:178
#: sys-utils/irq-common.c:123 sys-utils/lscpu.c:2044 sys-utils/lsns.c:807
#: sys-utils/zramctl.c:505
msgid "failed to initialize output column"
msgstr "no se ha podido inicializar la columna de salida"

#: misc-utils/whereis.c:199
#, c-format
msgid " %s [options] [-BMS <dir>... -f] <name>\n"
msgstr " %s [opciones] [-BMS <dir>... -f] <nombre>\n"

#: misc-utils/whereis.c:202
msgid "Locate the binary, source, and manual-page files for a command.\n"
msgstr "Localiza los ficheros binarios, fuentes y páginas del manual de un programa.\n"

#: misc-utils/whereis.c:205
msgid " -b         search only for binaries\n"
msgstr " -b         busca solamente binarios\n"

#: misc-utils/whereis.c:206
msgid " -B <dirs>  define binaries lookup path\n"
msgstr " -B <dirs>  define la ruta de búsqueda para binarios\n"

#: misc-utils/whereis.c:207
msgid " -m         search only for manuals and infos\n"
msgstr " -m         busca solamente manuales e infos\n"

#: misc-utils/whereis.c:208
msgid " -M <dirs>  define man and info lookup path\n"
msgstr " -M <dirs>  define la ruta de búsqueda de many de info\n"

#: misc-utils/whereis.c:209
msgid " -s         search only for sources\n"
msgstr " -s         busca solamente fuentes\n"

#: misc-utils/whereis.c:210
msgid " -S <dirs>  define sources lookup path\n"
msgstr " -S <dirs>  define la ruta de búsqueda para fuentes\n"

#: misc-utils/whereis.c:211
msgid " -f         terminate <dirs> argument list\n"
msgstr " -f         marca el final de la lista del argumento <dirs>\n"

#: misc-utils/whereis.c:212
msgid " -u         search for unusual entries\n"
msgstr " -u         busca entradas poco habituales\n"

#: misc-utils/whereis.c:213
msgid " -l         output effective lookup paths\n"
msgstr " -l         saca las rutas de búsqueda efectivas\n"

#: misc-utils/whereis.c:652
msgid "option -f is missing"
msgstr "falta la opción -f"

#: misc-utils/wipefs.c:109
msgid "partition/filesystem UUID"
msgstr "UUID de partición/sistema de ficheros"

#: misc-utils/wipefs.c:111
msgid "magic string length"
msgstr "longitud de la cadena mágica"

#: misc-utils/wipefs.c:112
msgid "superblok type"
msgstr "tipo de superbloque"

#: misc-utils/wipefs.c:113
msgid "magic string offset"
msgstr "desplazamiento de la cadena mágica"

#: misc-utils/wipefs.c:114
msgid "type description"
msgstr "descripción del tipo"

#: misc-utils/wipefs.c:115
msgid "block device name"
msgstr "nombre del dispositivo de bloque"

#: misc-utils/wipefs.c:332
msgid "partition-table"
msgstr "tabla de particiones"

#: misc-utils/wipefs.c:420
#, c-format
msgid "error: %s: probing initialization failed"
msgstr "error: %s: la prueba de la inicialización ha fallado"

#: misc-utils/wipefs.c:471
#, c-format
msgid "%s: failed to erase %s magic string at offset 0x%08jx"
msgstr "%s: fallo al borrar la cadena mágica %s en el desplazamiento 0x%08jx"

#: misc-utils/wipefs.c:477
#, c-format
msgid "%s: %zd byte was erased at offset 0x%08jx (%s): "
msgid_plural "%s: %zd bytes were erased at offset 0x%08jx (%s): "
msgstr[0] "%s: se ha borrado %zd byte en el desplazamiento 0x%08jx (%s): "
msgstr[1] "%s: se han borrado %zd bytes en el desplazamiento 0x%08jx (%s): "

#: misc-utils/wipefs.c:506
#, c-format
msgid "%s: failed to create a signature backup"
msgstr "%s: no se ha podido crear respaldo de la firma"

#: misc-utils/wipefs.c:532
#, c-format
msgid "%s: calling ioctl to re-read partition table: %m\n"
msgstr "%s: llamando a ioctl() para volver a leer la tabla de particiones: %m\n"

#: misc-utils/wipefs.c:561
msgid "failed to create a signature backup, $HOME undefined"
msgstr "no se ha podido crear respaldo de la firma; $HOME queda sin definir"

#: misc-utils/wipefs.c:579
#, c-format
msgid "%s: ignoring nested \"%s\" partition table on non-whole disk device"
msgstr "%s: se hace caso omiso de la tabla de partición anidada \"%s\" sobre el dispositivo de disco no completo"

#: misc-utils/wipefs.c:608
#, c-format
msgid "%s: offset 0x%jx not found"
msgstr "%s: el desplazamiento 0x%jx no se ha encontrado"

#: misc-utils/wipefs.c:613
msgid "Use the --force option to force erase."
msgstr "Utilice la opción --force para forzar el borrado."

#: misc-utils/wipefs.c:651
msgid "Wipe signatures from a device."
msgstr "Limpia las firmas de un dispositivo."

#: misc-utils/wipefs.c:654
msgid " -a, --all           wipe all magic strings (BE CAREFUL!)"
msgstr " -a, --all           limpia todas las cadenas mágicas (¡CUIDADO!)"

#: misc-utils/wipefs.c:655
msgid " -b, --backup        create a signature backup in $HOME"
msgstr " -b, --backup        crea respaldo de la firma en $HOME"

#: misc-utils/wipefs.c:656
msgid " -f, --force         force erasure"
msgstr " -f, --force         fuerza borrado"

#: misc-utils/wipefs.c:657
msgid " -i, --noheadings    don't print headings"
msgstr " -i, --noheadings    no imprime encabezados"

#: misc-utils/wipefs.c:658
msgid " -J, --json          use JSON output format"
msgstr " -J, --json          utiliza formato de salida JSON"

#: misc-utils/wipefs.c:659
msgid " -n, --no-act        do everything except the actual write() call"
msgstr " -n, --no-act        hace todo excepto la propia llamada a write()"

#: misc-utils/wipefs.c:660
msgid " -o, --offset <num>  offset to erase, in bytes"
msgstr " -o, --offset <num>  desplazamiento para borrar, en bytes"

#: misc-utils/wipefs.c:661
msgid " -O, --output <list> COLUMNS to display (see below)"
msgstr " -O, --output <lista> COLUMNAS que se mostrarán (ver abajo)"

#: misc-utils/wipefs.c:662
msgid " -p, --parsable      print out in parsable instead of printable format"
msgstr " -p, --parsable      imprime en formato analizable en lugar de imprimible"

#: misc-utils/wipefs.c:663
msgid " -q, --quiet         suppress output messages"
msgstr " -q, --quiet         suprime los mensajes de salida"

#: misc-utils/wipefs.c:664
msgid " -t, --types <list>  limit the set of filesystem, RAIDs or partition tables"
msgstr ""
" -t, --types <lista> limita el conjunto de sistemas de ficheros, RAIDs o\n"
"                     tablas de particiones"

#: misc-utils/wipefs.c:666
#, fuzzy, c-format
msgid "     --lock[=<mode>] use exclusive device lock (%s, %s or %s)\n"
msgstr "     --color[=<cuándo>] colorea los mensajes (%s, %s o %s)\n"

#: misc-utils/wipefs.c:784
msgid "The --backup option is meaningless in this context"
msgstr "La opción --backup carece de significado en este contexto"

#: schedutils/chrt.c:135
msgid "Show or change the real-time scheduling attributes of a process.\n"
msgstr "Muestra o modifica los atributos de planificación de tiempo real de un proceso.\n"

#: schedutils/chrt.c:137
msgid ""
"Set policy:\n"
" chrt [options] <priority> <command> [<arg>...]\n"
" chrt [options] --pid <priority> <pid>\n"
msgstr ""
"Establece las políticas:\n"
" chrt [opciones] <prioridad> <orden> [<arg>...]\n"
" chrt [opciones] --pid <prioridad> <pid>\n"

#: schedutils/chrt.c:141
msgid ""
"Get policy:\n"
" chrt [options] -p <pid>\n"
msgstr ""
"Obtiene las políticas:\n"
" chrt [opciones] -p <pid>\n"

#: schedutils/chrt.c:145
msgid "Policy options:\n"
msgstr "Opciones de las políticas:\n"

#: schedutils/chrt.c:146
msgid " -b, --batch          set policy to SCHED_BATCH\n"
msgstr " -b, --batch          establece la política SCHED_BATCH\n"

#: schedutils/chrt.c:147
msgid " -d, --deadline       set policy to SCHED_DEADLINE\n"
msgstr " -d, --deadline       establece la política SCHED_DEADLINE\n"

#: schedutils/chrt.c:148
msgid " -f, --fifo           set policy to SCHED_FIFO\n"
msgstr " -f, --fifo           establece la política SCHED_FIFO\n"

#: schedutils/chrt.c:149
msgid " -i, --idle           set policy to SCHED_IDLE\n"
msgstr " -i, --idle           establece la política SCHED_IDLE\n"

#: schedutils/chrt.c:150
msgid " -o, --other          set policy to SCHED_OTHER\n"
msgstr " -o, --other          establece la política SCHED_OTHER\n"

#: schedutils/chrt.c:151
msgid " -r, --rr             set policy to SCHED_RR (default)\n"
msgstr " -r, --rr             establece la política SCHED_RR (predeterminado)\n"

#: schedutils/chrt.c:154
msgid "Scheduling options:\n"
msgstr "Opciones de planificación:\n"

#: schedutils/chrt.c:155
msgid " -R, --reset-on-fork       set SCHED_RESET_ON_FORK for FIFO or RR\n"
msgstr " -R, --reset-on-fork       pone SCHED_RESET_ON_FORK para FIFO o RR\n"

#: schedutils/chrt.c:156
msgid " -T, --sched-runtime <ns>  runtime parameter for DEADLINE\n"
msgstr " -T, --sched-runtime <ns>  parámetro tiempo de ejecución para DEADLINE\n"

#: schedutils/chrt.c:157
msgid " -P, --sched-period <ns>   period parameter for DEADLINE\n"
msgstr " -P, --sched-periodo <ns>  parámetro tiempo para DEADLINE\n"

#: schedutils/chrt.c:158
msgid " -D, --sched-deadline <ns> deadline parameter for DEADLINE\n"
msgstr " -D, --sched-deadline <ns> parámetro plazo de vencimiento para DEADLINE\n"

#: schedutils/chrt.c:161
msgid "Other options:\n"
msgstr "Otras opciones:\n"

#: schedutils/chrt.c:162
msgid " -a, --all-tasks      operate on all the tasks (threads) for a given pid\n"
msgstr " -a, --all-tasks      actúa sobre todas las tareas (hilos) de un pid determinado\n"

#: schedutils/chrt.c:163
msgid " -m, --max            show min and max valid priorities\n"
msgstr " -m, --max            muestra las prioridades válidas mínima y máxima\n"

#: schedutils/chrt.c:164
msgid " -p, --pid            operate on existing given pid\n"
msgstr " -p, --pid            actúa sobre el pid existente dado\n"

#: schedutils/chrt.c:165
msgid " -v, --verbose        display status information\n"
msgstr " -v, --verbose        muestra información sobre el estado\n"

#: schedutils/chrt.c:231 schedutils/chrt.c:253
#, c-format
msgid "failed to get pid %d's policy"
msgstr "fallo al obtener la política del pid %d"

#: schedutils/chrt.c:256
#, c-format
msgid "failed to get pid %d's attributes"
msgstr "fallo al obtener los atributos del pid %d"

#: schedutils/chrt.c:266
#, c-format
msgid "pid %d's new scheduling policy: %s"
msgstr "nueva política de planificación del pid %d: %s"

#: schedutils/chrt.c:268
#, c-format
msgid "pid %d's current scheduling policy: %s"
msgstr "política actual de planificación del pid %d: %s"

#: schedutils/chrt.c:275
#, c-format
msgid "pid %d's new scheduling priority: %d\n"
msgstr "nueva política de planificación del pid %d: %d\n"

#: schedutils/chrt.c:277
#, c-format
msgid "pid %d's current scheduling priority: %d\n"
msgstr "política actual de planificación del pid %d: %d\n"

#: schedutils/chrt.c:282
#, c-format
msgid "pid %d's new runtime/deadline/period parameters: %ju/%ju/%ju\n"
msgstr "nuevos parámetros de tiempo de ejecución/plazo de vencimiento/periodo del pid %d: %ju/%ju/%ju\n"

#: schedutils/chrt.c:285
#, c-format
msgid "pid %d's current runtime/deadline/period parameters: %ju/%ju/%ju\n"
msgstr "parámetros actuales de tiempo de ejecución/plazo de vencimiento/periodo del pid %d: %ju/%ju/%ju\n"

#: schedutils/chrt.c:299 schedutils/chrt.c:404
msgid "cannot obtain the list of tasks"
msgstr "no se puede obtener la lista de tareas"

#: schedutils/chrt.c:333
#, c-format
msgid "%s min/max priority\t: %d/%d\n"
msgstr "priodidad mín/máx de %s\t: %d/%d\n"

#: schedutils/chrt.c:336
#, c-format
msgid "%s not supported?\n"
msgstr "¿%s no está soportado?\n"

#: schedutils/chrt.c:408
#, c-format
msgid "failed to set tid %d's policy"
msgstr "fallo al configurar la política del tid %d"

#: schedutils/chrt.c:413
#, c-format
msgid "failed to set pid %d's policy"
msgstr "fallo al configurar la política del pid %d"

#: schedutils/chrt.c:493
msgid "invalid runtime argument"
msgstr "argumento tiempo de ejecución no válido"

#: schedutils/chrt.c:496
msgid "invalid period argument"
msgstr "argumento periodo no válido"

#: schedutils/chrt.c:499
msgid "invalid deadline argument"
msgstr "argumento plazo de vencimiento no válido"

#: schedutils/chrt.c:524
msgid "invalid priority argument"
msgstr "argumento de prioridad no válido"

#: schedutils/chrt.c:528
msgid "--reset-on-fork option is supported for SCHED_FIFO and SCHED_RR policies only"
msgstr "la opción --reset-on-fork está soportada solamente para las políticas SCHED_FIFO y SCHED_RR"

#: schedutils/chrt.c:533
msgid "--sched-{runtime,deadline,period} options are supported for SCHED_DEADLINE only"
msgstr "las opciones --sched-{runtime,deadline,period} solamente pueden usarse con SCHED_DEADLINE"

#: schedutils/chrt.c:548
msgid "SCHED_DEADLINE is unsupported"
msgstr "SCHED_DEADLINE no está soportada"

#: schedutils/chrt.c:555
#, c-format
msgid "unsupported priority value for the policy: %d: see --max for valid range"
msgstr "valor de prioridad no admitido para la política: %d: véase --max para el rango válido"

#: schedutils/ionice.c:76
msgid "ioprio_get failed"
msgstr "ioprio_get ha fallado"

#: schedutils/ionice.c:85
#, c-format
msgid "%s: prio %lu\n"
msgstr "%s: prioridad %lu\n"

#: schedutils/ionice.c:98
msgid "ioprio_set failed"
msgstr "ioprio_set ha fallado"

#: schedutils/ionice.c:105
#, c-format
msgid ""
" %1$s [options] -p <pid>...\n"
" %1$s [options] -P <pgid>...\n"
" %1$s [options] -u <uid>...\n"
" %1$s [options] <command>\n"
msgstr ""
" %1$s [opciones] -p <pid>...\n"
" %1$s [opciones] -P <pgid>...\n"
" %1$s [opciones] -u <uid>...\n"
" %1$s [opciones] <orden>\n"

#: schedutils/ionice.c:111
msgid "Show or change the I/O-scheduling class and priority of a process.\n"
msgstr "Muestra o modifica la clase de planificación E/S y la prioridad de un proceso.\n"

#: schedutils/ionice.c:114
msgid ""
" -c, --class <class>    name or number of scheduling class,\n"
"                          0: none, 1: realtime, 2: best-effort, 3: idle\n"
msgstr ""
" -c, --class <clase>    nombre o número de la clase de planificación,\n"
"                          0: ninguna, 1: tiempo real, 2: mejor esfuerzo, 3: desocupada\n"

#: schedutils/ionice.c:116
msgid ""
" -n, --classdata <num>  priority (0..7) in the specified scheduling class,\n"
"                          only for the realtime and best-effort classes\n"
msgstr ""
" -n, --classdata <num>  prioridad (0..7) en la clase de planificación especificada,\n"
"                          solo para las clases de tiempo real y de mejor esfuerzo\n"

#: schedutils/ionice.c:118
msgid " -p, --pid <pid>...     act on these already running processes\n"
msgstr " -p, --pid <pid>...     actúa sobre estos procesos en ejecución\n"

#: schedutils/ionice.c:119
msgid " -P, --pgid <pgrp>...   act on already running processes in these groups\n"
msgstr " -P, --pgid <pgrp>...   actúa sobre procesos en ejecución pertenecientes a  estos grupos\n"

#: schedutils/ionice.c:120
msgid " -t, --ignore           ignore failures\n"
msgstr " -t, --ignore           no tiene en cuenta fallos\n"

#: schedutils/ionice.c:121
msgid " -u, --uid <uid>...     act on already running processes owned by these users\n"
msgstr " -u, --uid <uid>...     actúa sobre procesos en ejecución pertenecientes a estos usuarios\n"

#: schedutils/ionice.c:157
msgid "invalid class data argument"
msgstr "argumento de datos de clase no válido"

#: schedutils/ionice.c:163
msgid "invalid class argument"
msgstr "argumento de clase no válido"

#: schedutils/ionice.c:168
#, c-format
msgid "unknown scheduling class: '%s'"
msgstr "Clase de planificación desconocida: '%s'"

#: schedutils/ionice.c:176 schedutils/ionice.c:184 schedutils/ionice.c:192
msgid "can handle only one of pid, pgid or uid at once"
msgstr "solo se puede manejar un pid, pgid o uid a la vez"

#: schedutils/ionice.c:185
msgid "invalid PGID argument"
msgstr "argumento PGID no válido"

#: schedutils/ionice.c:193
msgid "invalid UID argument"
msgstr "argumento PGID no válido"

#: schedutils/ionice.c:212
msgid "ignoring given class data for none class"
msgstr "se hace caso omiso de los datos de la clase especificada para la clase «ninguna»"

#: schedutils/ionice.c:220
msgid "ignoring given class data for idle class"
msgstr "se hace caso omiso de los datos de la clase especificada para la clase «desocupada»"

#: schedutils/ionice.c:225
#, c-format
msgid "unknown prio class %d"
msgstr "clase de prioridad %d desconocida"

#: schedutils/taskset.c:52
#, c-format
msgid ""
"Usage: %s [options] [mask | cpu-list] [pid|cmd [args...]]\n"
"\n"
msgstr ""
"Modo de empleo: %s [opciones] [máscara | lista-cpu] [pid|orden [args...]]\n"
"\n"

#: schedutils/taskset.c:56
msgid "Show or change the CPU affinity of a process.\n"
msgstr "Muestra o midifca la afinidad de un proceso a la(s) CPU(s).\n"

#: schedutils/taskset.c:60
#, c-format
msgid ""
"Options:\n"
" -a, --all-tasks         operate on all the tasks (threads) for a given pid\n"
" -p, --pid               operate on existing given pid\n"
" -c, --cpu-list          display and specify cpus in list format\n"
msgstr ""
"Options:\n"
" -a, --all-tasks         actúa sobre todas las tareas (hilos) de un determinado pid\n"
" -p, --pid               actúa sobre un determinado pid que existe\n"
" -c, --cpu-list          muestra y especifica las cpus en formato de lista\n"

#: schedutils/taskset.c:69
#, c-format
msgid ""
"The default behavior is to run a new command:\n"
"    %1$s 03 sshd -b 1024\n"
"You can retrieve the mask of an existing task:\n"
"    %1$s -p 700\n"
"Or set it:\n"
"    %1$s -p 03 700\n"
"List format uses a comma-separated list instead of a mask:\n"
"    %1$s -pc 0,3,7-11 700\n"
"Ranges in list format can take a stride argument:\n"
"    e.g. 0-31:2 is equivalent to mask 0x55555555\n"
msgstr ""
"El comportamiento predefinido es ejecutar una orden nueva:\n"
"    %1$s 03 sshd -b 1024\n"
"Se puede recuperar la máscara de una tarea existente:\n"
"    %1$s -p 700\n"
"O establecerla:\n"
"    %1$s -p 03 700\n"
"El formato de lista utiliza una lista de elementos separados por coma en lugar de una máscara:\n"
"    %1$s -pc 0,3,7-11 700\n"
"Los rangos en el formato de lista pueden tomar un argumento de tramo:\n"
"    e.g. 0-31:2 es equivalente a la máscara 0x55555555\n"

#: schedutils/taskset.c:91
#, c-format
msgid "pid %d's new affinity list: %s\n"
msgstr "nueva lista de afinidad del pid %d: %s\n"

#: schedutils/taskset.c:92
#, c-format
msgid "pid %d's current affinity list: %s\n"
msgstr "lista de afinidad actual del pid %d: %s\n"

#: schedutils/taskset.c:95
#, c-format
msgid "pid %d's new affinity mask: %s\n"
msgstr "nueva máscara de afinidad del pid %d: %s\n"

#: schedutils/taskset.c:96
#, c-format
msgid "pid %d's current affinity mask: %s\n"
msgstr "máscara de afinidad actual del pid %d: %s\n"

#: schedutils/taskset.c:100
msgid "internal error: conversion from cpuset to string failed"
msgstr "error interno: fallo de conversión de cpuset a cadena"

#: schedutils/taskset.c:109
#, c-format
msgid "failed to set pid %d's affinity"
msgstr "fallo al establecer la afinidad del pid %d"

#: schedutils/taskset.c:110
#, c-format
msgid "failed to get pid %d's affinity"
msgstr "fallo al obtener la afinidad del pid %d"

#: schedutils/taskset.c:194 sys-utils/chcpu.c:300
msgid "cannot determine NR_CPUS; aborting"
msgstr "no se puede determinar el NR_CPUS; se aborta"

#: schedutils/taskset.c:203 schedutils/taskset.c:216 sys-utils/chcpu.c:307
msgid "cpuset_alloc failed"
msgstr "cpuset_alloc ha fallado"

#: schedutils/taskset.c:223 sys-utils/chcpu.c:234
#, c-format
msgid "failed to parse CPU list: %s"
msgstr "fallo al analizar la lista de CPUs: %s"

#: schedutils/taskset.c:226
#, c-format
msgid "failed to parse CPU mask: %s"
msgstr "fallo al analizar la máscara de CPUs %s"

#: sys-utils/blkdiscard.c:70
#, c-format
msgid "%s: Zero-filled %<PRIu64> bytes from the offset %<PRIu64>\n"
msgstr "%s: Se han rellenado con ceros %<PRIu64> bytes desde el desplazamiento %<PRIu64>\n"

#: sys-utils/blkdiscard.c:75
#, c-format
msgid "%s: Discarded %<PRIu64> bytes from the offset %<PRIu64>\n"
msgstr "%s: Se han descartado %<PRIu64> bytes desde el desplazamiento %<PRIu64>\n"

#: sys-utils/blkdiscard.c:89
msgid "Discard the content of sectors on a device.\n"
msgstr "Descarta el contenido de ciertos sectores de un dispositivo.\n"

#: sys-utils/blkdiscard.c:92
msgid " -f, --force         disable all checking\n"
msgstr " -f, --force         desactiva todas las comprobaciones\n"

#: sys-utils/blkdiscard.c:93
msgid " -o, --offset <num>  offset in bytes to discard from\n"
msgstr " -o, --offset <num>  desplazamiento en bytes para descartar a partir de ahí\n"

#: sys-utils/blkdiscard.c:94
msgid " -l, --length <num>  length of bytes to discard from the offset\n"
msgstr " -l, --length <num>  longitud de los bytes que descartar desde el desplazamiento\n"

#: sys-utils/blkdiscard.c:95
msgid " -p, --step <num>    size of the discard iterations within the offset\n"
msgstr " -p, --step <num>    tamaño de ñas iteraciones de descarte dentro del desplazamiento\n"

#: sys-utils/blkdiscard.c:96
msgid " -s, --secure        perform secure discard\n"
msgstr " -s, --secure        realiza descarte de seguridad\n"

#: sys-utils/blkdiscard.c:97
msgid " -z, --zeroout       zero-fill rather than discard\n"
msgstr " -z, --zeroout       rellena con ceros en lugar de descartar\n"

#: sys-utils/blkdiscard.c:98
msgid " -v, --verbose       print aligned length and offset\n"
msgstr " -v, --verbose       imprime la longitud y el desplazamiento alineados\n"

#: sys-utils/blkdiscard.c:188 sys-utils/fstrim.c:504 sys-utils/losetup.c:706
#: text-utils/hexdump.c:124
msgid "failed to parse offset"
msgstr "fallo al analizar el desplazamiento"

#: sys-utils/blkdiscard.c:192
msgid "failed to parse step"
msgstr "fallo al analizar el paso"

#: sys-utils/blkdiscard.c:219 sys-utils/blkzone.c:463 sys-utils/fallocate.c:379
#: sys-utils/fsfreeze.c:110 sys-utils/fstrim.c:532 sys-utils/umount.c:588
msgid "unexpected number of arguments"
msgstr "número de argumentos inesperado"

#: sys-utils/blkdiscard.c:233
#, c-format
msgid "%s: BLKGETSIZE64 ioctl failed"
msgstr "%s: iotcl BLKGETSIZE64 ha fallado"

#: sys-utils/blkdiscard.c:235 sys-utils/blkzone.c:150
#, c-format
msgid "%s: BLKSSZGET ioctl failed"
msgstr "%s: ioctl BLKSSZGET ha fallado"

#: sys-utils/blkdiscard.c:239
#, c-format
msgid "%s: offset %<PRIu64> is not aligned to sector size %i"
msgstr "%s: el desplazamiento %<PRIu64> no está alineado con el tamaño del sector %i"

#: sys-utils/blkdiscard.c:244 sys-utils/blkzone.c:320
#, c-format
msgid "%s: offset is greater than device size"
msgstr "%s: el desplazamiento es mayor que el tamaño del dispositivo"

#: sys-utils/blkdiscard.c:253
#, c-format
msgid "%s: length %<PRIu64> is not aligned to sector size %i"
msgstr "%s: la longitud %<PRIu64> no está alineada con el tamaño del sector %i"

#: sys-utils/blkdiscard.c:265
#, fuzzy
msgid "This is destructive operation, data will be lost! Use the -f option to override."
msgstr "%s está en un sistema de ficheros diferente que el resto (utilice la opción -f para invalidar)."

#: sys-utils/blkdiscard.c:268
msgid "Operation forced, data will be lost!"
msgstr "¡Operación forzada, se perdarán datos!"

#: sys-utils/blkdiscard.c:273
msgid "failed to probe the device"
msgstr "no se ha podido sondear el dispositivo"

#: sys-utils/blkdiscard.c:287
#, c-format
msgid "%s: BLKZEROOUT ioctl failed"
msgstr "%s: ioctl BLKZEROOUT ha fallado"

#: sys-utils/blkdiscard.c:291
#, c-format
msgid "%s: BLKSECDISCARD ioctl failed"
msgstr "%s: ioctl BLKSECDISCARD ha fallado"

#: sys-utils/blkdiscard.c:295
#, c-format
msgid "%s: BLKDISCARD ioctl failed"
msgstr "%s: ioctl BLKDISCARD ha fallado"

#: sys-utils/blkzone.c:92
msgid "Report zone information about the given device"
msgstr "Muestra información de zona sobre los dispositivos indicados"

#: sys-utils/blkzone.c:98
msgid "Reset a range of zones."
msgstr "Reinicia un rango de zonas."

#: sys-utils/blkzone.c:104
msgid "Open a range of zones."
msgstr "Abre un rango de zonas."

#: sys-utils/blkzone.c:110
msgid "Close a range of zones."
msgstr "Cierra un rango de zonas."

#: sys-utils/blkzone.c:116
msgid "Set a range of zones to Full."
msgstr "Pone un rango de zonas como Lleno."

#: sys-utils/blkzone.c:147
#, c-format
msgid "%s: blkdev_get_sectors ioctl failed"
msgstr "%s: ioctl blkdev_get_sectors ha fallado"

#: sys-utils/blkzone.c:227
#, c-format
msgid "%s: offset is greater than or equal to device size"
msgstr "%s: el desplazamiento es mayor o igual que el tamaño del dispositivo"

#: sys-utils/blkzone.c:231 sys-utils/blkzone.c:310
#, c-format
msgid "%s: unable to determine zone size"
msgstr "%s: no se puede escribir determinar el tamaño de zona"

#: sys-utils/blkzone.c:249
#, c-format
msgid "%s: BLKREPORTZONE ioctl failed"
msgstr "%s: iotcl BLKREPORTZONE ha fallado"

#: sys-utils/blkzone.c:252
#, c-format
msgid "Found %d zones from 0x%<PRIx64>\n"
msgstr "Se encontraron %d zonas desde 0x%<PRIx64>\n"

#: sys-utils/blkzone.c:278
#, c-format
msgid "  start: 0x%09<PRIx64>, len 0x%06<PRIx64>, wptr 0x%06<PRIx64> reset:%u non-seq:%u, zcond:%2u(%s) [type: %u(%s)]\n"
msgstr "  principio: 0x%09<PRIx64>, len 0x%06<PRIx64>, wptr 0x%06<PRIx64> reset:%u non-seq:%u, zcond:%2u(%s) [tipo: %u(%s)]\n"

#: sys-utils/blkzone.c:315
#, c-format
msgid "%s: offset %<PRIu64> is not aligned to zone size %lu"
msgstr "%s: el desplazamiento %<PRIu64> no está alineado con el tamaño de la zona %lu"

#: sys-utils/blkzone.c:334
#, c-format
msgid "%s: number of sectors %<PRIu64> is not aligned to zone size %lu"
msgstr "%s: el número de sectores %<PRIu64> no está alineado con el tamaño de la zona %lu"

#: sys-utils/blkzone.c:342
#, fuzzy, c-format
msgid "%s: %s ioctl failed"
msgstr "%s: FITRIM ioctl ha fallado"

#: sys-utils/blkzone.c:345
#, fuzzy, c-format
msgid "%s: successful %s of zones in range from %<PRIu64>, to %<PRIu64>"
msgstr "%s: se reinició satisfactoriamente en el rango de %<PRIu64> a %<PRIu64>"

#: sys-utils/blkzone.c:360
#, c-format
msgid " %s <command> [options] <device>\n"
msgstr " %s <orden> [opciones] <dispositivo>\n"

#: sys-utils/blkzone.c:363
msgid "Run zone command on the given block device.\n"
msgstr "Ejecuta orden de zona en el dispositivo de bloque indicado.\n"

#: sys-utils/blkzone.c:370
msgid " -o, --offset <sector>  start sector of zone to act (in 512-byte sectors)\n"
msgstr " -o, --offset <sector>  sector inicial de la zona en que actuar (en sectores de 512 bytes)\n"

#: sys-utils/blkzone.c:371
msgid " -l, --length <sectors> maximum sectors to act (in 512-byte sectors)\n"
msgstr " -l, --length <sectores> sectores máximos en que actuar (en sectores de 512 bytes)\n"

#: sys-utils/blkzone.c:372
msgid " -c, --count <number>   maximum number of zones\n"
msgstr " -c, --count <número>   número máximo de zonas\n"

#: sys-utils/blkzone.c:373
#, fuzzy
msgid " -f, --force            enforce on block devices used by the system\n"
msgstr " -f, --force            fuerza enlaces duros por los sistemas de ficheros"

#: sys-utils/blkzone.c:374
msgid " -v, --verbose          display more details\n"
msgstr " -v, --verbose          imprime más detalles\n"

#: sys-utils/blkzone.c:379
msgid "<sector> and <sectors>"
msgstr "<sector> y <sectores>"

#: sys-utils/blkzone.c:417
#, c-format
msgid "%s is not valid command name"
msgstr "%s no es un nombre de orden válido"

#: sys-utils/blkzone.c:429
msgid "failed to parse number of zones"
msgstr "no se ha podido analizar el número de zonas"

#: sys-utils/blkzone.c:433
msgid "failed to parse number of sectors"
msgstr "no se ha podido analizar el número de sectores"

#: sys-utils/blkzone.c:437
msgid "failed to parse zone offset"
msgstr "fallo al analizar el desplazamiento de la zona"

#: sys-utils/blkzone.c:456 sys-utils/setsid.c:92
msgid "no command specified"
msgstr "no se ha especificado ninguna orden"

#: sys-utils/chcpu.c:84 sys-utils/chcpu.c:181
#, c-format
msgid "CPU %u does not exist"
msgstr "La CPU %u no existe"

#: sys-utils/chcpu.c:89
#, c-format
msgid "CPU %u is not hot pluggable"
msgstr "La CPU %u no se puede enchufar en caliente"

#: sys-utils/chcpu.c:96
#, c-format
msgid "CPU %u is already enabled\n"
msgstr "La CPU %u ya está activada\n"

#: sys-utils/chcpu.c:100
#, c-format
msgid "CPU %u is already disabled\n"
msgstr "La CPU %u ya está desactivada\n"

#: sys-utils/chcpu.c:108
#, c-format
msgid "CPU %u enable failed (CPU is deconfigured)"
msgstr "No se ha podido activar la CPU %u (la CPU está desconfigurada)"

#: sys-utils/chcpu.c:111
#, c-format
msgid "CPU %u enable failed"
msgstr "No se ha podido activar la CPU %u"

#: sys-utils/chcpu.c:114
#, c-format
msgid "CPU %u enabled\n"
msgstr "CPU %u activada\n"

#: sys-utils/chcpu.c:117
#, c-format
msgid "CPU %u disable failed (last enabled CPU)"
msgstr "No se ha podido desactivar la CPU %u (última CPU activada)"

#: sys-utils/chcpu.c:123
#, c-format
msgid "CPU %u disable failed"
msgstr "No se ha podido desactivar la CPU %u"

#: sys-utils/chcpu.c:126
#, c-format
msgid "CPU %u disabled\n"
msgstr "CPU %u desactivada\n"

#: sys-utils/chcpu.c:139
msgid "This system does not support rescanning of CPUs"
msgstr "Este sistema no tiene la capacidad de volver a explorar las CPUs"

#: sys-utils/chcpu.c:142
msgid "Failed to trigger rescan of CPUs"
msgstr "No sea ha podido disparar la repetición de la exploración de las CPUs"

#: sys-utils/chcpu.c:144
#, c-format
msgid "Triggered rescan of CPUs\n"
msgstr "Se ha disparado la repetición de la exploración de las CPUs\n"

#: sys-utils/chcpu.c:151
msgid "This system does not support setting the dispatching mode of CPUs"
msgstr "Este sistema no permite configurar el modo de distribución de las CPUs"

#: sys-utils/chcpu.c:155
msgid "Failed to set horizontal dispatch mode"
msgstr "No se ha podido establecer el modo de distribución horizontal"

#: sys-utils/chcpu.c:157
#, c-format
msgid "Successfully set horizontal dispatching mode\n"
msgstr "Se ha conseguido establecer el modo de distribución horizontal\n"

#: sys-utils/chcpu.c:160
msgid "Failed to set vertical dispatch mode"
msgstr "No se ha podido establecer el modo de distribución vertical"

#: sys-utils/chcpu.c:162
#, c-format
msgid "Successfully set vertical dispatching mode\n"
msgstr "Se ha conseguido establecer el modo de distribución vertical\n"

#: sys-utils/chcpu.c:186
#, c-format
msgid "CPU %u is not configurable"
msgstr "La CPU %u no es configurable"

#: sys-utils/chcpu.c:192
#, c-format
msgid "CPU %u is already configured\n"
msgstr "La CPU %u ya está configurada\n"

#: sys-utils/chcpu.c:196
#, c-format
msgid "CPU %u is already deconfigured\n"
msgstr "La CPU %u ya está desconfigurada\n"

#: sys-utils/chcpu.c:201
#, c-format
msgid "CPU %u deconfigure failed (CPU is enabled)"
msgstr "No se ha podido desconfigurar la CPU %u (la CPU está activada)"

#: sys-utils/chcpu.c:208
#, c-format
msgid "CPU %u configure failed"
msgstr "Fallo al configurar la CPU %u"

#: sys-utils/chcpu.c:211
#, c-format
msgid "CPU %u configured\n"
msgstr "CPU %u configurada\n"

#: sys-utils/chcpu.c:215
#, c-format
msgid "CPU %u deconfigure failed"
msgstr "Fallo al desconfigurar la CPU %u"

#: sys-utils/chcpu.c:218
#, c-format
msgid "CPU %u deconfigured\n"
msgstr "CPU %u desconfigurada\n"

#: sys-utils/chcpu.c:233
#, c-format
msgid "invalid CPU number in CPU list: %s"
msgstr "número de CPU no válido en la lista de CPUs: %s"

#: sys-utils/chcpu.c:241 text-utils/col.c:131
#, c-format
msgid ""
"\n"
"Usage:\n"
" %s [options]\n"
msgstr ""
"\n"
"Modo de empleo:\n"
" %s [opciones]\n"

#: sys-utils/chcpu.c:245
msgid "Configure CPUs in a multi-processor system.\n"
msgstr "Configura las CPUs de un sistema multiprocesador.\n"

#: sys-utils/chcpu.c:249
msgid ""
" -e, --enable <cpu-list>       enable cpus\n"
" -d, --disable <cpu-list>      disable cpus\n"
" -c, --configure <cpu-list>    configure cpus\n"
" -g, --deconfigure <cpu-list>  deconfigure cpus\n"
" -p, --dispatch <mode>         set dispatching mode\n"
" -r, --rescan                  trigger rescan of cpus\n"
msgstr ""
"  -e, --enable <lista-cpu>      activa las cpus\n"
"  -d, --disable <lista-cpu>     desactiva las cpus\n"
"  -c, --configure <lista-cpu>   configura las cpus\n"
"  -g, --deconfigure <lista-cpu> desconfigura las cpus\n"
"  -p, --dispatch <modo>         establece el modo de distribución\n"
"  -r, --rescan                  lanza otra exploración de las cpus\n"

#: sys-utils/chcpu.c:296
msgid "failed to initialize sysfs handler"
msgstr "fallo al inicializar el manejador de sysfs"

#: sys-utils/chcpu.c:338
#, c-format
msgid "unsupported argument: %s"
msgstr "argumento no soportado: %s"

#: sys-utils/chmem.c:100
#, c-format
msgid "Memory Block %<PRIu64> (0x%016<PRIx64>-0x%016<PRIx64>)"
msgstr "Bloque de memoria %<PRIu64> (0x%016<PRIx64>-0x%016<PRIx64>)"

#: sys-utils/chmem.c:124 sys-utils/chmem.c:197
msgid "Failed to parse index"
msgstr "fallo al analizar el índice"

#: sys-utils/chmem.c:151
#, c-format
msgid "%s enable failed\n"
msgstr "No se ha podido activar %s\n"

#: sys-utils/chmem.c:153
#, c-format
msgid "%s disable failed\n"
msgstr "No se ha podido desactivar %s\n"

#: sys-utils/chmem.c:156 sys-utils/chmem.c:242
#, c-format
msgid "%s enabled\n"
msgstr "%s activada\n"

#: sys-utils/chmem.c:158 sys-utils/chmem.c:244
#, c-format
msgid "%s disabled\n"
msgstr "%s desactivada\n"

#: sys-utils/chmem.c:170
#, c-format
msgid "Could only enable %s of memory"
msgstr "Solo se ha podido activar %s de memoria"

#: sys-utils/chmem.c:172
#, c-format
msgid "Could only disable %s of memory"
msgstr "Solo se ha podido desactivar %s de memoria"

#: sys-utils/chmem.c:206
#, c-format
msgid "%s already enabled\n"
msgstr "%s ya está activada\n"

#: sys-utils/chmem.c:208
#, c-format
msgid "%s already disabled\n"
msgstr "%s ya está desactivada\n"

#: sys-utils/chmem.c:218
#, c-format
msgid "%s enable failed: Zone mismatch"
msgstr "No se ha podido activar %s: no corresponde la zona"

#: sys-utils/chmem.c:222
#, c-format
msgid "%s disable failed: Zone mismatch"
msgstr "No se ha podido desactivar %s: no corresponde la zona"

#: sys-utils/chmem.c:237
#, c-format
msgid "%s enable failed"
msgstr "No se ha podido activar %s"

#: sys-utils/chmem.c:239
#, c-format
msgid "%s disable failed"
msgstr "No se ha podido desactivar %s"

#: sys-utils/chmem.c:265 sys-utils/lsmem.c:490
#, c-format
msgid "Failed to read %s"
msgstr "No se ha podido leer %s"

#: sys-utils/chmem.c:273
msgid "Failed to parse block number"
msgstr "Fallo al analizar el número de bloque"

#: sys-utils/chmem.c:278
msgid "Failed to parse size"
msgstr "Fallo al analizar el tamaño."

#: sys-utils/chmem.c:282
#, c-format
msgid "Size must be aligned to memory block size (%s)"
msgstr "El tamaño debe estar alineado con el tamaño de bloque de memoria (%s)"

#: sys-utils/chmem.c:291
msgid "Failed to parse start"
msgstr "Fallo al analizar el principio"

#: sys-utils/chmem.c:292
msgid "Failed to parse end"
msgstr "Fallo al analizar el final"

#: sys-utils/chmem.c:296
#, c-format
msgid "Invalid start address format: %s"
msgstr "Formato de la dirección de comienzo no válido: %s"

#: sys-utils/chmem.c:298
#, c-format
msgid "Invalid end address format: %s"
msgstr "Formato de la dirección de final no válido: %s"

#: sys-utils/chmem.c:299
msgid "Failed to parse start address"
msgstr "Fallo al analizar la dirección de comienzo"

#: sys-utils/chmem.c:300
msgid "Failed to parse end address"
msgstr "Fallo al analizar la dirección de final"

#: sys-utils/chmem.c:303
#, c-format
msgid "Start address and (end address + 1) must be aligned to memory block size (%s)"
msgstr "Dirección de comienzo y (dirección de final + 1) deben estar alineadas con el tamaño de bloque de memoria (%s)"

#: sys-utils/chmem.c:317
#, c-format
msgid "Invalid parameter: %s"
msgstr "Parámetro no válido: %s"

#: sys-utils/chmem.c:324
#, c-format
msgid "Invalid range: %s"
msgstr "Rango no válido: %s"

#: sys-utils/chmem.c:333
#, c-format
msgid " %s [options] [SIZE|RANGE|BLOCKRANGE]\n"
msgstr " %s [opciones] [TAMAÑO|RANGO|RANGODEBLOQUE]\n"

#: sys-utils/chmem.c:336
msgid "Set a particular size or range of memory online or offline.\n"
msgstr "Establece un tamaño o rango concreto de memoria en línea o fuera de línea.\n"

#: sys-utils/chmem.c:339
msgid " -e, --enable       enable memory\n"
msgstr " -e, --enable       activa la memoria\n"

#: sys-utils/chmem.c:340
msgid " -d, --disable      disable memory\n"
msgstr " -d, --disable      desactiva la memoria\n"

#: sys-utils/chmem.c:341
msgid " -b, --blocks       use memory blocks\n"
msgstr " -b, --blocks       utiliza bloques de memoria\n"

#: sys-utils/chmem.c:342
msgid " -z, --zone <name>  select memory zone (see below)\n"
msgstr " -z, --zone <nombre>selecciona la zona de memoria (véase abajo)\n"

#: sys-utils/chmem.c:343
msgid " -v, --verbose      verbose output\n"
msgstr " -v, --verbose      da más información en la salida\n"

#: sys-utils/chmem.c:346
msgid ""
"\n"
"Supported zones:\n"
msgstr ""
"\n"
"Zonas disponibles:\n"

#: sys-utils/chmem.c:387 sys-utils/lscpu.c:1444 sys-utils/lsmem.c:654
#, c-format
msgid "failed to initialize %s handler"
msgstr "fallo al inicializar el manejador de %s"

#: sys-utils/chmem.c:433
msgid "zone ignored, no valid_zones sysfs attribute present"
msgstr "zona no considerada; no hay atributo valid_zones de sysfs"

#: sys-utils/chmem.c:438
#, c-format
msgid "unknown memory zone: %s"
msgstr "zona de memoria desconocida: %s"

# TODO Typo in msgid extra ]?
#: sys-utils/choom.c:38
#, c-format
msgid ""
" %1$s [options] -p pid\n"
" %1$s [options] -n number -p pid\n"
" %1$s [options] -n number [--] command [args...]]\n"
msgstr ""
" %1$s [opciones] -p pid\n"
" %1$s [opciones] -n número -p pid\n"
" %1$s [opciones] -n número [--] orden [args...]]\n"

#: sys-utils/choom.c:44
msgid "Display and adjust OOM-killer score.\n"
msgstr "Muestra y ajusta la puntuación de matador OOM.\n"

#: sys-utils/choom.c:47
msgid " -n, --adjust <num>     specify the adjust score value\n"
msgstr " -n, --adjust <num>     especifica el valor de ajuste de puntuación\n"

#: sys-utils/choom.c:48
msgid " -p, --pid <num>        process ID\n"
msgstr " -p, --pid <num>        ID de proceso\n"

#: sys-utils/choom.c:60
msgid "failed to read OOM score value"
msgstr "no se ha podido leer el valor de puntuación OOM"

#: sys-utils/choom.c:70
msgid "failed to read OOM score adjust value"
msgstr "no se ha podido leer el valor de ajuste de puntuación OOM"

#: sys-utils/choom.c:105
msgid "invalid adjust argument"
msgstr "argumento de ajuste no válido"

#: sys-utils/choom.c:119 term-utils/mesg.c:177
#, c-format
msgid "invalid argument: %s"
msgstr "argumento no válido: %s"

#: sys-utils/choom.c:123
msgid "no PID or COMMAND specified"
msgstr "no se ha especificado ni PID ni ORDEN"

#: sys-utils/choom.c:127
msgid "no OOM score adjust value specified"
msgstr "no se ha especificado valor de ajuste de puntuación OOM"

#: sys-utils/choom.c:135
#, c-format
msgid "pid %d's current OOM score: %d\n"
msgstr "puntuación OOM actual del pid %d: %d\n"

#: sys-utils/choom.c:136
#, c-format
msgid "pid %d's current OOM score adjust value: %d\n"
msgstr "valor de ajuste de puntuación OOM actual del pid %d: %d\n"

#: sys-utils/choom.c:143 sys-utils/choom.c:150
msgid "failed to set score adjust value"
msgstr "no se ha podido establecer el valor de ajsute de puntuación"

#: sys-utils/choom.c:145
#, c-format
msgid "pid %d's OOM score adjust value changed from %d to %d\n"
msgstr "el valor de ajuste de puntuación OOM del pid %d ha cambiado de %d a %d\n"

#: sys-utils/ctrlaltdel.c:28
#, c-format
msgid " %s hard|soft\n"
msgstr " %s hard|soft\n"

#: sys-utils/ctrlaltdel.c:31
#, c-format
msgid "Set the function of the Ctrl-Alt-Del combination.\n"
msgstr "Establece la función de la combinación Ctrl-Alt-Del.\n"

#: sys-utils/ctrlaltdel.c:54
msgid "implicit"
msgstr "implícita"

#: sys-utils/ctrlaltdel.c:55
#, c-format
msgid "unexpected value in %s: %ju"
msgstr "valor no esperado en: %s: %ju"

#: sys-utils/ctrlaltdel.c:66
msgid "You must be root to set the Ctrl-Alt-Del behavior"
msgstr "Debe ser el usuario root para definir el comportamiento de Ctrl-Alt-Supr"

#: sys-utils/ctrlaltdel.c:74 sys-utils/ipcrm.c:395 sys-utils/ipcrm.c:418
#, c-format
msgid "unknown argument: %s"
msgstr "argumento desconocido: %s"

#: sys-utils/dmesg.c:109
msgid "system is unusable"
msgstr "el sistema se encuentra en un estado inutilizable"

#: sys-utils/dmesg.c:110
msgid "action must be taken immediately"
msgstr "se debe tomar una acción inmediatamente"

#: sys-utils/dmesg.c:111
msgid "critical conditions"
msgstr "condiciones críticas"

#: sys-utils/dmesg.c:112
msgid "error conditions"
msgstr "condiciones de error"

#: sys-utils/dmesg.c:113
msgid "warning conditions"
msgstr "condiciones de aviso"

#: sys-utils/dmesg.c:114
msgid "normal but significant condition"
msgstr "condición normal pero significativa"

#: sys-utils/dmesg.c:115
msgid "informational"
msgstr "informacional"

#: sys-utils/dmesg.c:116
msgid "debug-level messages"
msgstr "mensaje de nivel de depuración"

#: sys-utils/dmesg.c:130
msgid "kernel messages"
msgstr "mensajes del núcleo"

#: sys-utils/dmesg.c:131
msgid "random user-level messages"
msgstr "menajes de nivel de usuario aleatorios"

#: sys-utils/dmesg.c:132
msgid "mail system"
msgstr "sistema de correo"

#: sys-utils/dmesg.c:133
msgid "system daemons"
msgstr "demonios del sistema"

#: sys-utils/dmesg.c:134
msgid "security/authorization messages"
msgstr "mensajes de seguridad/autorización"

#: sys-utils/dmesg.c:135
msgid "messages generated internally by syslogd"
msgstr "mensajes generados internamente por syslogd"

#: sys-utils/dmesg.c:136
msgid "line printer subsystem"
msgstr "subsistema de impresora de líneas"

#: sys-utils/dmesg.c:137
msgid "network news subsystem"
msgstr "subsistema de noticias de red"

#: sys-utils/dmesg.c:138
msgid "UUCP subsystem"
msgstr "subsistema UUCP"

#: sys-utils/dmesg.c:139
msgid "clock daemon"
msgstr "demonio del reloj"

#: sys-utils/dmesg.c:140
msgid "security/authorization messages (private)"
msgstr "mensajes de seguridad/autorización (privados)"

#: sys-utils/dmesg.c:141
msgid "FTP daemon"
msgstr "demonio FTP"

#: sys-utils/dmesg.c:272
msgid "Display or control the kernel ring buffer.\n"
msgstr "Muestra o controla el «buffer» circular del núcleo.\n"

#: sys-utils/dmesg.c:275
msgid " -C, --clear                 clear the kernel ring buffer\n"
msgstr " -C, --clear                 borra el «buffer» circular del núcleo\n"

#: sys-utils/dmesg.c:276
msgid " -c, --read-clear            read and clear all messages\n"
msgstr " -c, --read-clear            lee y borra todos los mensajes\n"

#: sys-utils/dmesg.c:277
msgid " -D, --console-off           disable printing messages to console\n"
msgstr " -D, --console-off           desactiva la impresión de mensajes por consola\n"

#: sys-utils/dmesg.c:278
msgid " -E, --console-on            enable printing messages to console\n"
msgstr " -E, --console-on            activa la impresión de mensajes por consola\n"

#: sys-utils/dmesg.c:279
msgid " -F, --file <file>           use the file instead of the kernel log buffer\n"
msgstr " -F, --file <fichero>        utiliza el fichero en lugar del «buffer» de registro del núcleo\n"

#: sys-utils/dmesg.c:280
msgid " -f, --facility <list>       restrict output to defined facilities\n"
msgstr " -f, --facility <lista>      restringe la salida a los recursos definidos\n"

#: sys-utils/dmesg.c:281
msgid " -H, --human                 human readable output\n"
msgstr " -H, --human                 salida legible para humanos\n"

#: sys-utils/dmesg.c:282
msgid " -k, --kernel                display kernel messages\n"
msgstr " -k, --kernel                muestra los mensajes del núcleo\n"

#: sys-utils/dmesg.c:284
#, c-format
msgid " -L, --color[=<when>]        colorize messages (%s, %s or %s)\n"
msgstr " -L, --color[=<cuándo>]      colorea los mensajes (%s, %s o %s)\n"

#: sys-utils/dmesg.c:287
msgid " -l, --level <list>          restrict output to defined levels\n"
msgstr " -l, --level <lista>         restringe la salida a los niveles definidos\n"

#: sys-utils/dmesg.c:288
msgid " -n, --console-level <level> set level of messages printed to console\n"
msgstr " -n, --console-level <nivel> establece el nivel de los mensajes imprimidos por la consola\n"

#: sys-utils/dmesg.c:289
msgid " -P, --nopager               do not pipe output into a pager\n"
msgstr " -P, --nopager               no redirige la salida a un busca\n"

#: sys-utils/dmesg.c:290
msgid " -p, --force-prefix          force timestamp output on each line of multi-line messages\n"
msgstr " -p, --force-prefix          fuerza salida de sello de tiempo en cada línea de mensajes multilínea\n"

#: sys-utils/dmesg.c:291
msgid " -r, --raw                   print the raw message buffer\n"
msgstr " -r, --raw                   imprime el «buffer» de mensajes en bruto\n"

#: sys-utils/dmesg.c:292
msgid "     --noescape              don't escape unprintable character\n"
msgstr "     --noescape              no escapa los caracteres no imprimibles\n"

#: sys-utils/dmesg.c:293
msgid " -S, --syslog                force to use syslog(2) rather than /dev/kmsg\n"
msgstr " -S, --syslog                fuerza a utilizar syslog(2) en lugar de /dev/kmsg\n"

#: sys-utils/dmesg.c:294
msgid " -s, --buffer-size <size>    buffer size to query the kernel ring buffer\n"
msgstr " -s, --buffer-size <tamaño>  tamaño de «buffer» para consultar el «buffer» circular del núcleo\n"

#: sys-utils/dmesg.c:295
msgid " -u, --userspace             display userspace messages\n"
msgstr " -u, --userspace             muestra los mensajes del espacio d usuario\n"

#: sys-utils/dmesg.c:296
msgid " -w, --follow                wait for new messages\n"
msgstr " -w, --follow                espera por mensajes nuevos\n"

#: sys-utils/dmesg.c:297
msgid " -W, --follow-new            wait and print only new messages\n"
msgstr " -W, --follow-new            espera e imprime solo mensajes nuevos\n"

#: sys-utils/dmesg.c:298
msgid " -x, --decode                decode facility and level to readable string\n"
msgstr " -x, --decode                descodifica recurso y nivel en una cadena legible\n"

#: sys-utils/dmesg.c:299
msgid " -d, --show-delta            show time delta between printed messages\n"
msgstr " -d, --show-delta            muestra la diferencia de tiempos entre los mensajes imprimidos\n"

#: sys-utils/dmesg.c:300
msgid " -e, --reltime               show local time and time delta in readable format\n"
msgstr " -e, --reltime               muestra la hora local y la diferencia de tiempo en formato legible\n"

#: sys-utils/dmesg.c:301
msgid " -T, --ctime                 show human-readable timestamp (may be inaccurate!)\n"
msgstr " -T, --ctime                 muestra una marca de tiempo legible para humanos (puede no ser exacto)\n"

#: sys-utils/dmesg.c:302
msgid " -t, --notime                don't show any timestamp with messages\n"
msgstr " -t, --notime                no muestra ninguna marca de tiempo con los mensajes\n"

#: sys-utils/dmesg.c:303
msgid ""
"     --time-format <format>  show timestamp using the given format:\n"
"                               [delta|reltime|ctime|notime|iso]\n"
"Suspending/resume will make ctime and iso timestamps inaccurate.\n"
msgstr ""
"     --time-format <formato> muestra la marca de tiempo con el formato especificado:\n"
"                               [delta|reltime|ctime|notime|iso]\n"
"Suspender/reanudar volverá inexactas las marcas de tiempo de ctime e iso.\n"

#: sys-utils/dmesg.c:308
msgid ""
"\n"
"Supported log facilities:\n"
msgstr ""
"\n"
"Servicios de «log» disponibles:\n"

#: sys-utils/dmesg.c:314
msgid ""
"\n"
"Supported log levels (priorities):\n"
msgstr ""
"\n"
"Niveles de «log» disponibles (prioridades):\n"

#: sys-utils/dmesg.c:368
#, c-format
msgid "failed to parse level '%s'"
msgstr "fallo al analizar nivel '%s'"

#: sys-utils/dmesg.c:370
#, c-format
msgid "unknown level '%s'"
msgstr "nivel desconocido '%s'"

#: sys-utils/dmesg.c:406
#, c-format
msgid "failed to parse facility '%s'"
msgstr "fallo al analizar recurso '%s'"

#: sys-utils/dmesg.c:408
#, c-format
msgid "unknown facility '%s'"
msgstr "recurso desconocido '%s'"

#: sys-utils/dmesg.c:536
#, c-format
msgid "cannot mmap: %s"
msgstr "fallo de mmap: %s"

#: sys-utils/dmesg.c:1463
msgid "invalid buffer size argument"
msgstr "argumento de tamaño de «buffer» no válido"

#: sys-utils/dmesg.c:1527
msgid "--show-delta is ignored when used together with iso8601 time format"
msgstr "--show-delta no se tiene en cuenta cuando se utiliza junto con el formato de tiempo iso8601"

#: sys-utils/dmesg.c:1550
msgid "--raw can be used together with --level or --facility only when reading messages from /dev/kmsg"
msgstr "--raw puede utilizarse conjuntamente con --level o --facility solamente cuando se leen mensajes de /dev/kmsg"

#: sys-utils/dmesg.c:1565
msgid "read kernel buffer failed"
msgstr "fallo al leer el «buffer» del núcleo"

#: sys-utils/dmesg.c:1584
msgid "klogctl failed"
msgstr "klogctl ha fallado"

#: sys-utils/eject.c:138
#, c-format
msgid " %s [options] [<device>|<mountpoint>]\n"
msgstr " %s [opciones] [<dispositivo>|<punto de montaje>]\n"

#: sys-utils/eject.c:141
msgid "Eject removable media.\n"
msgstr "Expulsar dispositivo extraible.\n"

#: sys-utils/eject.c:144
msgid ""
" -a, --auto <on|off>         turn auto-eject feature on or off\n"
" -c, --changerslot <slot>    switch discs on a CD-ROM changer\n"
" -d, --default               display default device\n"
" -f, --floppy                eject floppy\n"
" -F, --force                 don't care about device type\n"
" -i, --manualeject <on|off>  toggle manual eject protection on/off\n"
" -m, --no-unmount            do not unmount device even if it is mounted\n"
" -M, --no-partitions-unmount do not unmount another partitions\n"
" -n, --noop                  don't eject, just show device found\n"
" -p, --proc                  use /proc/mounts instead of /etc/mtab\n"
" -q, --tape                  eject tape\n"
" -r, --cdrom                 eject CD-ROM\n"
" -s, --scsi                  eject SCSI device\n"
" -t, --trayclose             close tray\n"
" -T, --traytoggle            toggle tray\n"
" -v, --verbose               enable verbose output\n"
" -x, --cdspeed <speed>       set CD-ROM max speed\n"
" -X, --listspeed             list CD-ROM available speeds\n"
msgstr ""
" -a, --auto <on|off>         activa o desactiva la función de autoexpulsión\n"
" -c, --changerslot <ranura>  activa discos en un cargador de CD-ROM\n"
" -d, --default               muestra el dispositivo predeterminado\n"
" -f, --floppy                espulsa el disquete\n"
" -F, --force                 no tiene en cuenta el tipo de dispositivo\n"
" -i, --manualeject <on|off>  activa o desactiva la protección de la expulsión manual\n"
" -m, --no-unmount            no desmonta el dispositivo aunque esté montado\n"
" -M, --no-partitions-unmount no desmonta otras particiones\n"
" -n, --noop                  no expulsa; solo muestra el dispositivo encontrado\n"
" -p, --proc                  utiliza /proc/mounts en lugar de /etc/mtab\n"
" -q, --tape                  expulsa el casete\n"
" -r, --cdrom                 expulsa el CD-ROM\n"
" -s, --scsi                  expulsa el dispositivo SCSI\n"
" -t, --trayclose             cierra la bandeja\n"
" -T, --traytoggle            alterna la bandeja\n"
" -v, --verbose               activa las explicaciones en la salida\n"
" -x, --cdspeed <velocidad>   establece la velocidad máxima del CD-ROM\n"
" -X, --listspeed             enumera las velocidades del CD-ROM disponibles\n"

#: sys-utils/eject.c:167
msgid ""
"\n"
"By default tries -r, -s, -f, and -q in order until success.\n"
msgstr ""
"\n"
"Por omisión, prueba -r, -s, -f y -q en orden hasta que funcione.\n"

#: sys-utils/eject.c:213
msgid "invalid argument to --changerslot/-c option"
msgstr "argumento no válido para la opción --changerslot/-c"

#: sys-utils/eject.c:217
msgid "invalid argument to --cdspeed/-x option"
msgstr "argumento no válido para la opción --cdspeed/-a"

#: sys-utils/eject.c:325
msgid "CD-ROM auto-eject command failed"
msgstr "la orden de autoexpulsión del CD-ROM ha fallado"

#: sys-utils/eject.c:339
msgid "CD-ROM door lock is not supported"
msgstr "El bloqueo de la puerta del CD-ROM no está implementado"

#: sys-utils/eject.c:341
msgid "other users have the drive open and not CAP_SYS_ADMIN"
msgstr "otros usuarios tienen la unidad abierta y no CAP_SYS_ADMIN"

#: sys-utils/eject.c:343
msgid "CD-ROM lock door command failed"
msgstr "la orden de bloqueo de la puerta del CD-ROM ha fallado"

#: sys-utils/eject.c:348
msgid "CD-Drive may NOT be ejected with device button"
msgstr "La unidad de CD NO puede expulsarse con el botón del dispositivo"

#: sys-utils/eject.c:350
msgid "CD-Drive may be ejected with device button"
msgstr "La unidad de CD puede expulsarse con el botón del dispositivo"

#: sys-utils/eject.c:361
msgid "CD-ROM select disc command failed"
msgstr "la orden de selección de disco CD-ROM ha fallado"

#: sys-utils/eject.c:365
msgid "CD-ROM load from slot command failed"
msgstr "la orden de carga de CD-ROM desde una ranura ha fallado"

#: sys-utils/eject.c:367
msgid "IDE/ATAPI CD-ROM changer not supported by this kernel\n"
msgstr "el cargador de CD-ROM ID/ATAPI no está admitido en este núcleo\n"

#: sys-utils/eject.c:385
msgid "CD-ROM tray close command failed"
msgstr "el comando de cierre de la bandeja del CD-ROM ha fallado"

#: sys-utils/eject.c:387
msgid "CD-ROM tray close command not supported by this kernel\n"
msgstr "La orden de cierre de la bandeja del CD-ROM no está admitida en este núcleo\n"

#: sys-utils/eject.c:404
msgid "CD-ROM eject unsupported"
msgstr "Expulsión de CD-ROM no admitida"

#: sys-utils/eject.c:432 sys-utils/eject.c:455 sys-utils/eject.c:1020
msgid "CD-ROM eject command failed"
msgstr "La orden de expulsión del CD-ROM ha fallado"

#: sys-utils/eject.c:435
msgid "no CD-ROM information available"
msgstr "no hay información disponible sobre el CD-ROM"

#: sys-utils/eject.c:438
msgid "CD-ROM drive is not ready"
msgstr "La unidad de CD-ROM no está lista"

#: sys-utils/eject.c:441
msgid "CD-ROM status command failed"
msgstr "La orden de estado del CD-ROM ha fallado"

#: sys-utils/eject.c:481
msgid "CD-ROM select speed command failed"
msgstr "La orden de selección de velocidad del CD-ROM ha fallado"

#: sys-utils/eject.c:483
msgid "CD-ROM select speed command not supported by this kernel"
msgstr "La orden de selección de velocidad del CD-ROM no está admitida en este núcleo"

#: sys-utils/eject.c:520
#, c-format
msgid "%s: failed to finding CD-ROM name"
msgstr "%s: no se ha podido encontrar el nombre del CD-ROM"

#: sys-utils/eject.c:535
#, c-format
msgid "%s: failed to read speed"
msgstr "%s: no se ha podido leer la velocidad"

#: sys-utils/eject.c:543
msgid "failed to read speed"
msgstr "no se ha podido leer la velocidad"

#: sys-utils/eject.c:583
msgid "not an sg device, or old sg driver"
msgstr "no es un dispositivo sg, o es un controlador sg antiguo"

#: sys-utils/eject.c:655
#, c-format
msgid "%s: unmounting"
msgstr "%s: desmontando"

#: sys-utils/eject.c:673
msgid "unable to fork"
msgstr "no se puede crear proceso hijo"

#: sys-utils/eject.c:680
#, c-format
msgid "unmount of `%s' did not exit normally"
msgstr "el desmontaje de `%s` no ha salido de forma normal"

#: sys-utils/eject.c:683
#, c-format
msgid "unmount of `%s' failed\n"
msgstr "el desmontaje de `%s' ha fallado\n"

#: sys-utils/eject.c:728
msgid "failed to parse mount table"
msgstr "No se podido analizar la tabla de montaje"

#: sys-utils/eject.c:794 sys-utils/eject.c:896
#, c-format
msgid "%s: mounted on %s"
msgstr "%s: montado en %s"

#: sys-utils/eject.c:837
msgid "setting CD-ROM speed to auto"
msgstr "se establece velocidad de CD-ROM automática"

#: sys-utils/eject.c:839
#, c-format
msgid "setting CD-ROM speed to %ldX"
msgstr "se establece la velocidad de CD-ROM a %ldX"

#: sys-utils/eject.c:865
#, c-format
msgid "default device: `%s'"
msgstr "dispositivo predeterminado: `%s'"

#: sys-utils/eject.c:871
#, c-format
msgid "using default device `%s'"
msgstr "se está utilizando el dispositivo predeterminado `%s'"

#: sys-utils/eject.c:890
msgid "unable to find device"
msgstr "no se puede encontrar el dispositivo"

#: sys-utils/eject.c:892
#, c-format
msgid "device name is `%s'"
msgstr "el nombre del dispositivo es `%s'"

#: sys-utils/eject.c:898 sys-utils/umount.c:343 sys-utils/umount.c:367
#, c-format
msgid "%s: not mounted"
msgstr "%s: no montado"

#: sys-utils/eject.c:902
#, c-format
msgid "%s: disc device: %s (disk device will be used for eject)"
msgstr "%s: dispoisitivo de disco: %s (el dispositivo de disco se utilizará para expulsar)"

#: sys-utils/eject.c:910
#, c-format
msgid "%s: not found mountpoint or device with the given name"
msgstr "%s: no se ha encontrado un punto de montaje ni un dispositivo con el nombre especificado"

#: sys-utils/eject.c:913
#, c-format
msgid "%s: is whole-disk device"
msgstr "%s: es un dispositivo de un disco entero"

#: sys-utils/eject.c:917
#, c-format
msgid "%s: is not hot-pluggable device"
msgstr "%s: no es un dispositivo que se pueda conectar en caliente"

#: sys-utils/eject.c:921
#, c-format
msgid "device is `%s'"
msgstr "el dispositivo es `%s'"

#: sys-utils/eject.c:922
msgid "exiting due to -n/--noop option"
msgstr "se sale a causa de la opción -n/--noop"

#: sys-utils/eject.c:936
#, c-format
msgid "%s: enabling auto-eject mode"
msgstr "%s: se activa el modo de auto expulsión"

#: sys-utils/eject.c:938
#, c-format
msgid "%s: disabling auto-eject mode"
msgstr "%s: se desactiva el modo de auto expulsión"

#: sys-utils/eject.c:946
#, c-format
msgid "%s: closing tray"
msgstr "%s: se cierra la bandeja"

#: sys-utils/eject.c:955
#, c-format
msgid "%s: toggling tray"
msgstr "%s: se alterna la bandeja"

#: sys-utils/eject.c:964
#, c-format
msgid "%s: listing CD-ROM speed"
msgstr "%s: se enumera la velocidad del CD-ROM"

#: sys-utils/eject.c:990
#, c-format
msgid "error: %s: device in use"
msgstr "error: %s: dispositivo ocupado"

#: sys-utils/eject.c:1001
#, c-format
msgid "%s: selecting CD-ROM disc #%ld"
msgstr "%s: selección del disco CD-ROM nº %ld"

#: sys-utils/eject.c:1017
#, c-format
msgid "%s: trying to eject using CD-ROM eject command"
msgstr "%s: se está intentando expulsar utilizando la orden de expulsión de CD-ROM"

#: sys-utils/eject.c:1019
msgid "CD-ROM eject command succeeded"
msgstr "la orden de expulsión del CD-ROM ha funcionado"

#: sys-utils/eject.c:1024
#, c-format
msgid "%s: trying to eject using SCSI commands"
msgstr "%s: se está intentando expulsar utilizando las órdenes SCSI"

#: sys-utils/eject.c:1026
msgid "SCSI eject succeeded"
msgstr "la expulsión SCSI ha funcionado"

#: sys-utils/eject.c:1027
msgid "SCSI eject failed"
msgstr "la expulsión SCSI ha fallado"

#: sys-utils/eject.c:1031
#, c-format
msgid "%s: trying to eject using floppy eject command"
msgstr "%s: se está intentado expulsar utilizando la orden de expulsión de disquete"

#: sys-utils/eject.c:1033
msgid "floppy eject command succeeded"
msgstr "la orden de expulsión de disquete ha funcionado"

#: sys-utils/eject.c:1034
msgid "floppy eject command failed"
msgstr "la orden de expulsión de disquete ha fallado"

#: sys-utils/eject.c:1038
#, c-format
msgid "%s: trying to eject using tape offline command"
msgstr "%s: se intenta expulsar utilizando la orden de casete desconectada"

#: sys-utils/eject.c:1040
msgid "tape offline command succeeded"
msgstr "la orden de casete desconectada ha funcionado"

#: sys-utils/eject.c:1041
msgid "tape offline command failed"
msgstr "la orden de casete desconectada ha fallado"

#: sys-utils/eject.c:1045
msgid "unable to eject"
msgstr "no se puede expulsar"

#: sys-utils/fallocate.c:84
#, c-format
msgid " %s [options] <filename>\n"
msgstr " %s [opciones] <nombre de fichero>\n"

#: sys-utils/fallocate.c:87
msgid "Preallocate space to, or deallocate space from a file.\n"
msgstr "Preasigna espacio o desasigna espacio de un fichero.\n"

#: sys-utils/fallocate.c:90
msgid " -c, --collapse-range remove a range from the file\n"
msgstr " -c, --collapse-range elimina un rango del fichero\n"

#: sys-utils/fallocate.c:91
msgid " -d, --dig-holes      detect zeroes and replace with holes\n"
msgstr " -d, --dig-holes      detecta ceros y los reemplaza por huecos\n"

#: sys-utils/fallocate.c:92
msgid " -i, --insert-range   insert a hole at range, shifting existing data\n"
msgstr " -i, --insert-range   inserta un hueco en el rango, desplazando los datos existentes\n"

#: sys-utils/fallocate.c:93
msgid " -l, --length <num>   length for range operations, in bytes\n"
msgstr " -l, --length <num>   longitud para operaciones de rango, en bytes\n"

#: sys-utils/fallocate.c:94
msgid " -n, --keep-size      maintain the apparent size of the file\n"
msgstr " -n, --keep-size      mantiene el tamaño aparente del fichero\n"

#: sys-utils/fallocate.c:95
msgid " -o, --offset <num>   offset for range operations, in bytes\n"
msgstr " -o, --offset <num>   desplazamiento para operaciones de rango, en bytes\n"

#: sys-utils/fallocate.c:96
msgid " -p, --punch-hole     replace a range with a hole (implies -n)\n"
msgstr " -p, --punch-hole     reemplaza un rango con un hueco (implica -n)\n"

#: sys-utils/fallocate.c:97
msgid " -z, --zero-range     zero and ensure allocation of a range\n"
msgstr " -z, --zero-range     pone a cero y asegura la reserva de un rango\n"

#: sys-utils/fallocate.c:99
msgid " -x, --posix          use posix_fallocate(3) instead of fallocate(2)\n"
msgstr " -x, --posix          utiliza posix_fallocate(3) en vez de fallocate(2)\n"

#: sys-utils/fallocate.c:139
msgid "fallocate failed: keep size mode is unsupported"
msgstr "fallocate ha fallado: el modo de conservar tamaño no está disponible"

#: sys-utils/fallocate.c:140 sys-utils/fallocate.c:149
msgid "fallocate failed"
msgstr "fallocate ha fallado"

#: sys-utils/fallocate.c:237
#, c-format
msgid "%s: read failed"
msgstr "%s: read ha fallado"

#: sys-utils/fallocate.c:278
#, c-format
msgid "%s: %s (%ju bytes) converted to sparse holes.\n"
msgstr "%s: %s (%ju bytes) convertidos en huecos libres.\n"

#: sys-utils/fallocate.c:358
msgid "posix_fallocate support is not compiled"
msgstr "el soporte para posix_fallocate no está compilado"

#: sys-utils/fallocate.c:374 sys-utils/fsfreeze.c:106
msgid "no filename specified"
msgstr "no se ha especificado un nombre de fichero"

#: sys-utils/fallocate.c:386 sys-utils/fallocate.c:392
msgid "invalid length value specified"
msgstr "valor de longitud especificado no válido"

#: sys-utils/fallocate.c:390
msgid "no length argument specified"
msgstr "no se ha especificado el argumento de longitud"

#: sys-utils/fallocate.c:395
msgid "invalid offset value specified"
msgstr "valor de desplazamiento especificado no válido"

#: sys-utils/flock.c:53
#, c-format
msgid ""
" %1$s [options] <file>|<directory> <command> [<argument>...]\n"
" %1$s [options] <file>|<directory> -c <command>\n"
" %1$s [options] <file descriptor number>\n"
msgstr ""
" %1$s [opciones] <fichero>|<directorio> <orden> [<argumentos>...]\n"
" %1$s [opciones] <fichero>|<directorio> -c <orden>\n"
" %1$s [opciones] <número de descriptor de fichero>\n"

#: sys-utils/flock.c:59
msgid "Manage file locks from shell scripts.\n"
msgstr "Gestiona los bloqueos de ficheros desde programas de «shell».\n"

#: sys-utils/flock.c:62
msgid " -s, --shared             get a shared lock\n"
msgstr " -s, --shared             obtiene un bloqueo compartido\n"

#: sys-utils/flock.c:63
msgid " -x, --exclusive          get an exclusive lock (default)\n"
msgstr " -x, --exclusive          obtiene un bloqueo exclusivo (lo predeterminado)\n"

#: sys-utils/flock.c:64
msgid " -u, --unlock             remove a lock\n"
msgstr " -u, --unlock             elimina el bloqueo\n"

#: sys-utils/flock.c:65
msgid " -n, --nonblock           fail rather than wait\n"
msgstr " -n, --nonblock           falla en lugar de esperar\n"

#: sys-utils/flock.c:66
msgid " -w, --timeout <secs>     wait for a limited amount of time\n"
msgstr " -w, --timeout <segundos> espera un periodo de tiempo limitado\n"

#: sys-utils/flock.c:67
msgid " -E, --conflict-exit-code <number>  exit code after conflict or timeout\n"
msgstr " -E, --conflict-exit-code <número>  código de salida tras conflicto o tiempo vencido\n"

#: sys-utils/flock.c:68
msgid " -o, --close              close file descriptor before running command\n"
msgstr " -o, --close              cierra el descriptor de fichero antes de ejecutar la orden\n"

#: sys-utils/flock.c:69
msgid " -c, --command <command>  run a single command string through the shell\n"
msgstr " -c, --command <orden>    ejecuta una única orden a través de la «shell»\n"

#: sys-utils/flock.c:70
msgid " -F, --no-fork            execute command without forking\n"
msgstr " -F, --no-fork            ejecuta la orden sin lanzar un proceso nuevo\n"

#: sys-utils/flock.c:71
msgid "     --verbose            increase verbosity\n"
msgstr "     --verbose            aumenta la cantidad de información\n"

#: sys-utils/flock.c:108
#, c-format
msgid "cannot open lock file %s"
msgstr "no se puede abrir el fichero cerrojo %s"

#: sys-utils/flock.c:210
msgid "invalid timeout value"
msgstr "valor de tiempo de vencimiento no válido"

#: sys-utils/flock.c:214
msgid "invalid exit code"
msgstr "código de salida no válido"

#: sys-utils/flock.c:231
msgid "the --no-fork and --close options are incompatible"
msgstr "las opciones --no-fork y --close son incompatibles"

#: sys-utils/flock.c:239
#, c-format
msgid "%s requires exactly one command argument"
msgstr "%s necesita exactamente un argumento de orden"

#: sys-utils/flock.c:257
msgid "bad file descriptor"
msgstr "descriptor de fichero incorrecto"

#: sys-utils/flock.c:260
msgid "requires file descriptor, file or directory"
msgstr "necesita descriptor de fichero, fichero o directorio"

#: sys-utils/flock.c:284
msgid "failed to get lock"
msgstr "no se han podido obtener el bloqueo"

#: sys-utils/flock.c:291
msgid "timeout while waiting to get lock"
msgstr " ha vencido el tiempo máximo de espera para obtener el bloqueo"

#: sys-utils/flock.c:332
#, c-format
msgid "%s: getting lock took %ld.%06ld seconds\n"
msgstr "%s: obtener el bloqueo ha llevado %ld,%06ld segundos\n"

#: sys-utils/flock.c:343
#, c-format
msgid "%s: executing %s\n"
msgstr "%s: ejecutando %s\n"

#: sys-utils/fsfreeze.c:41
#, c-format
msgid " %s [options] <mountpoint>\n"
msgstr " %s [opciones] <punto-de-montaje>\n"

#: sys-utils/fsfreeze.c:44
msgid "Suspend access to a filesystem.\n"
msgstr "Suspende el acceso al sistema de ficheros.\n"

#: sys-utils/fsfreeze.c:47
msgid " -f, --freeze      freeze the filesystem\n"
msgstr " -f, --freeze      congela el sistema de ficheros\n"

#: sys-utils/fsfreeze.c:48
msgid " -u, --unfreeze    unfreeze the filesystem\n"
msgstr " -u, --unfreeze    descongela el sistema de ficheros\n"

#: sys-utils/fsfreeze.c:104
msgid "neither --freeze or --unfreeze specified"
msgstr "no se ha especificado --freeze ni --unfreeze"

#: sys-utils/fsfreeze.c:124
#, c-format
msgid "%s: is not a directory"
msgstr "%s: no es un directorio"

#: sys-utils/fsfreeze.c:131
#, c-format
msgid "%s: freeze failed"
msgstr "%s: fallo al congelar"

#: sys-utils/fsfreeze.c:137
#, c-format
msgid "%s: unfreeze failed"
msgstr "%s: fallo al descongelar"

#: sys-utils/fstrim.c:80
#, c-format
msgid "%s: not a directory"
msgstr "%s: no es un directorio"

#: sys-utils/fstrim.c:94
#, c-format
msgid "cannot get realpath: %s"
msgstr "no se puede obtener la ruta real: %s"

#: sys-utils/fstrim.c:110
#, c-format
msgid "%s: 0 B (dry run) trimmed on %s\n"
msgstr "%s: 0 B (modo de prueba) recortado en %s\n"

#: sys-utils/fstrim.c:112
#, c-format
msgid "%s: 0 B (dry run) trimmed\n"
msgstr "%s: 0 B (modo de prueba) recortado\n"

#: sys-utils/fstrim.c:129
#, c-format
msgid "%s: FITRIM ioctl failed"
msgstr "%s: FITRIM ioctl ha fallado"

#. TRANSLATORS: The standard value here is a very large number.
#: sys-utils/fstrim.c:139
#, c-format
msgid "%s: %s (%<PRIu64> bytes) trimmed on %s\n"
msgstr "%s: %s (%<PRIu64> bytes) recortados en %s\n"

#. TRANSLATORS: The standard value here is a very large number.
#: sys-utils/fstrim.c:143
#, c-format
msgid "%s: %s (%<PRIu64> bytes) trimmed\n"
msgstr "%s: %s (%<PRIu64> bytes) recortado\n"

#: sys-utils/fstrim.c:249 sys-utils/lsns.c:1079 sys-utils/swapon.c:732
#: sys-utils/umount.c:259
#, c-format
msgid "failed to parse %s"
msgstr "no se ha podido analizar %s"

#: sys-utils/fstrim.c:275
msgid "failed to allocate FS handler"
msgstr "no se ha podido asignar el manejador de FS"

#: sys-utils/fstrim.c:363 sys-utils/fstrim.c:544
#, c-format
msgid "%s: the discard operation is not supported"
msgstr "%s: la operación de descarte no está admitida"

#: sys-utils/fstrim.c:414
#, c-format
msgid " %s [options] <mount point>\n"
msgstr " %s [opciones] <punto-de-montaje>\n"

#: sys-utils/fstrim.c:417
msgid "Discard unused blocks on a mounted filesystem.\n"
msgstr "Descarta bloques no utilizados en un sistema de ficheros montado.\n"

#: sys-utils/fstrim.c:420
#, fuzzy
msgid " -a, --all                trim mounted filesystems\n"
msgstr " -a, --all               desmonta todos los sistemas de ficheros\n"

#: sys-utils/fstrim.c:421
#, fuzzy
msgid " -A, --fstab              trim filesystems from /etc/fstab\n"
msgstr " -A, --fstab         recorta todos los sistemas de ficheros montados desde /etc/fstab\n"

#: sys-utils/fstrim.c:422
#, fuzzy
msgid " -I, --listed-in <list>   trim filesystems listed in specified files\n"
msgstr " -w, --whitelist-environment <lista> no restablece las variables especificadas\n"

#: sys-utils/fstrim.c:423
msgid " -o, --offset <num>       the offset in bytes to start discarding from\n"
msgstr " -o, --offset <num>       desplazamiento en bytes para empezar a descartar\n"

#: sys-utils/fstrim.c:424
msgid " -l, --length <num>       the number of bytes to discard\n"
msgstr " -l, --length <num>       número de bytes que descartar\n"

#: sys-utils/fstrim.c:425
msgid " -m, --minimum <num>      the minimum extent length to discard\n"
msgstr " -m, --minimum <num>      longitud de la extensión mínima que descartar\n"

#: sys-utils/fstrim.c:426
msgid " -v, --verbose            print number of discarded bytes\n"
msgstr " -v, --verbose            imprime el número de bytes descartados\n"

#: sys-utils/fstrim.c:427
msgid "     --quiet-unsupported  suppress error messages if trim unsupported\n"
msgstr "     --quiet-unsupported  suprime los mensajes de errores si no se admite recorte\n"

#: sys-utils/fstrim.c:428
msgid " -n, --dry-run            does everything, but trim\n"
msgstr " -n, --dry-run            hace todo excepto recortar\n"

#: sys-utils/fstrim.c:508
msgid "failed to parse minimum extent length"
msgstr "no se ha podido analizar la longitud de la extensión mínima"

#: sys-utils/fstrim.c:527
msgid "no mountpoint specified"
msgstr "no se ha especificado punto de montaje"

#: sys-utils/hwclock.c:211
#, c-format
msgid "Assuming hardware clock is kept in %s time.\n"
msgstr "Se presupone que el reloj de hardware tiene la hora %s.\n"

#: sys-utils/hwclock.c:212 sys-utils/hwclock.c:276
msgid "UTC"
msgstr "UTC"

#: sys-utils/hwclock.c:212 sys-utils/hwclock.c:275
msgid "local"
msgstr "local"

#: sys-utils/hwclock.c:262
msgid ""
"Warning: unrecognized third line in adjtime file\n"
"(Expected: `UTC' or `LOCAL' or nothing.)"
msgstr ""
"Atención: tercera línea no reconocida en el fichero adjtime\n"
"(Se esperaba: `UTC' o `LOCAL' o nada.)"

#: sys-utils/hwclock.c:269
#, c-format
msgid "Last drift adjustment done at %ld seconds after 1969\n"
msgstr "Último ajuste de desfase realizado %ld segundos después de 1969\n"

#: sys-utils/hwclock.c:271
#, c-format
msgid "Last calibration done at %ld seconds after 1969\n"
msgstr "Última calibración realizada %ld segundos después de 1969\n"

#: sys-utils/hwclock.c:273
#, c-format
msgid "Hardware clock is on %s time\n"
msgstr "El reloj de hardware tiene la hora %s\n"

#: sys-utils/hwclock.c:300
#, c-format
msgid "Waiting for clock tick...\n"
msgstr "Esperando señal de reloj...\n"

#: sys-utils/hwclock.c:306
#, c-format
msgid "...synchronization failed\n"
msgstr "...fallo de sincronización\n"

#: sys-utils/hwclock.c:308
#, c-format
msgid "...got clock tick\n"
msgstr "...recibida señal de reloj\n"

#: sys-utils/hwclock.c:349
#, c-format
msgid "Invalid values in hardware clock: %4d/%.2d/%.2d %.2d:%.2d:%.2d\n"
msgstr "Valores no válidos en reloj de hardware: %4d/%.2d/%.2d %.2d:%.2d:%.2d\n"

#: sys-utils/hwclock.c:357
#, c-format
msgid "Hw clock time : %4d/%.2d/%.2d %.2d:%.2d:%.2d = %ld seconds since 1969\n"
msgstr "Hora del reloj de hardware: %4d/%.2d/%.2d %.2d:%.2d:%.2d = %ld segundos desde 1969\n"

#: sys-utils/hwclock.c:384
#, c-format
msgid "Time read from Hardware Clock: %4d/%.2d/%.2d %02d:%02d:%02d\n"
msgstr "Hora leída del reloj de hardware: %4d/%.2d/%.2d %02d:%02d:%02d\n"

#: sys-utils/hwclock.c:411
#, c-format
msgid "Setting Hardware Clock to %.2d:%.2d:%.2d = %ld seconds since 1969\n"
msgstr "Estableciendo reloj de hardware en %.2d:%.2d:%.2d = %ld segundos desde 1969\n"

#: sys-utils/hwclock.c:447
#, c-format
msgid "RTC type: '%s'\n"
msgstr "tipo de RTC: '%s'\n"

#: sys-utils/hwclock.c:547
#, c-format
msgid "Using delay: %.6f seconds\n"
msgstr "Utilizando retardo: %.6f segundos\n"

#: sys-utils/hwclock.c:566
#, c-format
msgid "time jumped backward %.6f seconds to %ld.%06ld - retargeting\n"
msgstr "el tiempo ha saltado hacia atrás %.6f segundos a %ld,%06ld - se rehace objetivo\n"

#: sys-utils/hwclock.c:588
#, c-format
msgid "missed it - %ld.%06ld is too far past %ld.%06ld (%.6f > %.6f)\n"
msgstr "perdido - %ld,%06ld es demasiado posterior a %ld,%06ld (%.6f > %.6f)\n"

#: sys-utils/hwclock.c:615
#, c-format
msgid ""
"%ld.%06ld is close enough to %ld.%06ld (%.6f < %.6f)\n"
"Set RTC to %ld (%ld + %d; refsystime = %ld.%06ld)\n"
msgstr ""
"%ld,%06ld está suficientemente cerca de %ld,%06ld (%.6f < %.6f)\n"
"Poner RTC a %ld (%ld + %d; refsystime = %ld,%06ld)\n"

#: sys-utils/hwclock.c:701
msgid "Calling settimeofday(NULL, 0) to lock the warp_clock function."
msgstr "Se está llamando a settimeofday(NULL, 0) para bloquear la función warp_clock."

#: sys-utils/hwclock.c:704
#, c-format
msgid "Calling settimeofday(NULL, %d) to set the kernel timezone.\n"
msgstr "Se está llamando a settimeofday(NULL, %d) para establecer la zona horaria del núcleo.\n"

#: sys-utils/hwclock.c:708
#, fuzzy, c-format
msgid "Calling settimeofday(NULL, %d) to warp System time, set PCIL and the kernel tz.\n"
msgstr "Se está llamando a settimeofday(NULL, %d) para establecer persistent_clock_is_local.\n"

#: sys-utils/hwclock.c:713
#, c-format
msgid "Calling settimeofday(%ld.%06ld, NULL) to set the System time.\n"
msgstr "Se está llamando a settimeofday(%ld.%06ld, NULL) para establecer la hora del istema.\n"

#: sys-utils/hwclock.c:735
msgid "settimeofday() failed"
msgstr "settimeofday() ha fallado"

#: sys-utils/hwclock.c:759
#, c-format
msgid "Not adjusting drift factor because the --update-drift option was not used.\n"
msgstr "No se ajusta el factor de desfase porque no se ha utilizado la opción --update-drift.\n"

#: sys-utils/hwclock.c:763
#, c-format
msgid ""
"Not adjusting drift factor because last calibration time is zero,\n"
"so history is bad and calibration startover is necessary.\n"
msgstr ""
"No se ajusta el factor de desfase debido a que la fecha de última\n"
"calibración es cero, así que el historial es erróneo y es necesaria una\n"
"calibración desde el principio.\n"

#: sys-utils/hwclock.c:769
#, c-format
msgid "Not adjusting drift factor because it has been less than four hours since the last calibration.\n"
msgstr "No se ajusta el factor de desfase porque hace menos de cuatro horas de la última calibración.\n"

#: sys-utils/hwclock.c:807
#, c-format
msgid ""
"Clock drift factor was calculated as %f seconds/day.\n"
"It is far too much. Resetting to zero.\n"
msgstr ""
"Se ha calculado un factor de deriva del reloj de %f segundos/día.\n"
"Es demasiado. Se pone a cero.\n"

#: sys-utils/hwclock.c:814
#, c-format
msgid ""
"Clock drifted %f seconds in the past %f seconds\n"
"in spite of a drift factor of %f seconds/day.\n"
"Adjusting drift factor by %f seconds/day\n"
msgstr ""
"El reloj se ha desfasado %f segundos en los últimos %f segundos\n"
"pese al factor de desfase de %f segundos por día.\n"
"Se ajusta el factor de desfase en %f segundos por día.\n"

#: sys-utils/hwclock.c:858
#, c-format
msgid "Time since last adjustment is %ld second\n"
msgid_plural "Time since last adjustment is %ld seconds\n"
msgstr[0] "El tiempo transcurrido desde el último ajuste es de %ld segundo\n"
msgstr[1] "El tiempo transcurrido desde el último ajuste es de %ld segundos\n"

#: sys-utils/hwclock.c:862
#, c-format
msgid "Calculated Hardware Clock drift is %ld.%06ld seconds\n"
msgstr "El desfase del reloj de hardware calculado es de %ld,%06ld segundos\n"

#: sys-utils/hwclock.c:887
#, c-format
msgid ""
"New %s data:\n"
"%s"
msgstr ""
"Nuevos datos de %s:\n"
"%s"

#: sys-utils/hwclock.c:899
#, c-format
msgid "cannot update %s"
msgstr "no se puede actualizar %s"

#: sys-utils/hwclock.c:935
#, c-format
msgid "Not setting clock because last adjustment time is zero, so history is bad.\n"
msgstr "No se pone en hora el reloj porque la hora del último ajusto es cero, por lo que la historia no es buena.\n"

#: sys-utils/hwclock.c:939
#, c-format
msgid "Not setting clock because drift factor %f is far too high.\n"
msgstr "No se cambia la hora del reloj porque el factor de deriva %f es demasiado alto.\n"

#: sys-utils/hwclock.c:969
#, c-format
msgid "No usable clock interface found.\n"
msgstr "No se ha encontrado ninguna interfaz de reloj utilizable.\n"

#: sys-utils/hwclock.c:971
msgid "Cannot access the Hardware Clock via any known method."
msgstr "No se puede acceder al reloj de hardware por ningún método conocido."

#: sys-utils/hwclock.c:975
msgid "Use the --verbose option to see the details of our search for an access method."
msgstr "Utilice la opción --verbose para ver los detalles de la búsqueda para un método de acceso."

#: sys-utils/hwclock.c:1025
#, c-format
msgid "Target date:   %ld\n"
msgstr "Fecha objetivo:   %ld\n"

#: sys-utils/hwclock.c:1026
#, c-format
msgid "Predicted RTC: %ld\n"
msgstr "RTC pronosticado: %ld\n"

#: sys-utils/hwclock.c:1056
msgid "RTC read returned an invalid value."
msgstr "La lectura de RTC ha devuelto un valor no válido."

#: sys-utils/hwclock.c:1086
#, c-format
msgid "Needed adjustment is less than one second, so not setting clock.\n"
msgstr "El ajuste necesario es inferior a un segundo, por lo que no se establece el reloj.\n"

#: sys-utils/hwclock.c:1123
msgid "unable to read the RTC epoch."
msgstr "no se puede leer la época del RTC"

#: sys-utils/hwclock.c:1125
#, c-format
msgid "The RTC epoch is set to %lu.\n"
msgstr "La época del RTC se ha puesto a %lu.\n"

#: sys-utils/hwclock.c:1128
msgid "--epoch is required for --setepoch."
msgstr "hace falta --epoch para --setepoch."

#: sys-utils/hwclock.c:1131
msgid "unable to set the RTC epoch."
msgstr "no se puede establecer la época del RTC."

#: sys-utils/hwclock.c:1145
#, c-format
msgid " %s [function] [option...]\n"
msgstr " %s [función] [opción...]\n"

#: sys-utils/hwclock.c:1148
msgid "Time clocks utility."
msgstr "Utilidad de relojes."

#: sys-utils/hwclock.c:1151
msgid " -r, --show           display the RTC time"
msgstr " -r, --show           muestra la hora del RTC"

#: sys-utils/hwclock.c:1152
msgid "     --get            display drift corrected RTC time"
msgstr "     --get            muestra la hora del RTC con la deriva corregida"

#: sys-utils/hwclock.c:1153
msgid "     --set            set the RTC according to --date"
msgstr "     --set            establece el RTC conforme a --date"

#: sys-utils/hwclock.c:1154
msgid " -s, --hctosys        set the system time from the RTC"
msgstr " -s, --hctdsys        establece la hora del sistema a partir del RTC"

#: sys-utils/hwclock.c:1155
msgid " -w, --systohc        set the RTC from the system time"
msgstr " -w, --systohc        estable el RTC a partir de la hora del sistema"

#: sys-utils/hwclock.c:1156
msgid "     --systz          send timescale configurations to the kernel"
msgstr "     --systz          envía al núcleo las configuraciones de escala de tiempo"

#: sys-utils/hwclock.c:1157
msgid " -a, --adjust         adjust the RTC to account for systematic drift"
msgstr " -a, --adjust         ajusta el RTC para que tenga en cuenta la deriva sistemática"

#: sys-utils/hwclock.c:1159
msgid "     --getepoch       display the RTC epoch"
msgstr "     --getepoch       muestra la época del RTC"

#: sys-utils/hwclock.c:1160
msgid "     --setepoch       set the RTC epoch according to --epoch"
msgstr "     --setepoch       establece la época del RTC conforme a --epoch"

#: sys-utils/hwclock.c:1162
msgid "     --predict        predict the drifted RTC time according to --date"
msgstr "     --predict        predice la deriva de la hora del RTC conforme a --date"

#: sys-utils/hwclock.c:1164
msgid " -u, --utc            the RTC timescale is UTC"
msgstr " -u, --utc            la escala de tiempo de RTC es UTC"

#: sys-utils/hwclock.c:1165
msgid " -l, --localtime      the RTC timescale is Local"
msgstr " -l, --localtime      la escala de tiempo del RTC es Local"

#: sys-utils/hwclock.c:1168
#, c-format
msgid " -f, --rtc <file>     use an alternate file to %1$s\n"
msgstr " -f, --file <fichero> utiliza un fichero alternativo a %1$s\n"

#: sys-utils/hwclock.c:1171
#, c-format
msgid "     --directisa      use the ISA bus instead of %1$s access\n"
msgstr "     --directisa      utiliza el bus ISA en lugar del acceso %1$s\n"

#: sys-utils/hwclock.c:1172
msgid "     --date <time>    date/time input for --set and --predict"
msgstr "     --date <hora>    fecha/hora de entrada para --set y --predict"

#: sys-utils/hwclock.c:1173
msgid "     --delay <sec>    delay used when set new RTC time"
msgstr "     --delay <seg>    retardo utilizado cuando se establece una nueva hora RTC"

#: sys-utils/hwclock.c:1175
msgid "     --epoch <year>   epoch input for --setepoch"
msgstr "     --epoch <año>    época de entrada para --setepoch"

#: sys-utils/hwclock.c:1177
msgid "     --update-drift   update the RTC drift factor"
msgstr "     --update-drift   actualiza el factor de deriva del RTC"

#: sys-utils/hwclock.c:1179
#, c-format
msgid "     --noadjfile      do not use %1$s\n"
msgstr "     --noadjfile      no utiliza %1$s\n"

#: sys-utils/hwclock.c:1181
#, c-format
msgid "     --adjfile <file> use an alternate file to %1$s\n"
msgstr "     --adjfile <fichero> utiliza un fichero alternativo a %1$s\n"

#: sys-utils/hwclock.c:1182
msgid "     --test           dry run; implies --verbose"
msgstr "     --test           hace una prueba; implica --verbose"

#: sys-utils/hwclock.c:1183
msgid " -v, --verbose        display more details"
msgstr " -v, --verbose          imprime más detalles"

#: sys-utils/hwclock.c:1279
msgid "Unable to connect to audit system"
msgstr "No se puede conectar con el sistema de auditoría"

#: sys-utils/hwclock.c:1303
msgid "use --verbose, --debug has been deprecated."
msgstr "el uso de --verbose, --debug está obsoleto."

#: sys-utils/hwclock.c:1405
#, c-format
msgid "%d too many arguments given"
msgstr "%d demasiados argumentos proporcionados"

#: sys-utils/hwclock.c:1413
msgid "--update-drift requires --set or --systohc"
msgstr "hace falta --update-drift para --set o --systohc"

#: sys-utils/hwclock.c:1418
msgid "With --noadjfile, you must specify either --utc or --localtime"
msgstr "Con --noadjfile, debe especificarse o bien --utc o bien --localtime"

#: sys-utils/hwclock.c:1425
msgid "--date is required for --set or --predict"
msgstr "hace falta --date para --set o --predict"

#: sys-utils/hwclock.c:1442
#, c-format
msgid "invalid date '%s'"
msgstr "fecha no válida: '%s'"

#: sys-utils/hwclock.c:1456
#, c-format
msgid "System Time: %ld.%06ld\n"
msgstr "Hora del sistema: %ld.%06ld\n"

#: sys-utils/hwclock.c:1472
msgid "Test mode: nothing was changed."
msgstr "Modo de pruebas: no se cambió nada."

#: sys-utils/hwclock-cmos.c:360
msgid "ISA port access is not implemented"
msgstr "el acceso a puertos ISA no está implementad0"

#: sys-utils/hwclock-cmos.c:362
msgid "iopl() port access failed"
msgstr "el acceso a puerto iopl() ha fallado"

#: sys-utils/hwclock-cmos.c:373
msgid "Using direct ISA access to the clock"
msgstr "Se utiliza acceso ISA directo al reloj"

#: sys-utils/hwclock-rtc.c:131
#, c-format
msgid "Trying to open: %s\n"
msgstr "Intentando abrir: %s\n"

#: sys-utils/hwclock-rtc.c:156 sys-utils/hwclock-rtc.c:259
msgid "cannot open rtc device"
msgstr "no se puede abrir el dispositivo rtc"

#: sys-utils/hwclock-rtc.c:192
#, c-format
msgid "ioctl(%s) to %s to read the time failed"
msgstr "Error de ioctl(%s) con %s al leer la hora"

#: sys-utils/hwclock-rtc.c:220
#, c-format
msgid "Waiting in loop for time from %s to change\n"
msgstr "Esperando en bucle que cambie la hora de %s\n"

#: sys-utils/hwclock-rtc.c:239
msgid "Timed out waiting for time change."
msgstr "Se ha excedido el tiempo de espera del cambio de hora."

#: sys-utils/hwclock-rtc.c:287
#, c-format
msgid "select() to %s to wait for clock tick timed out"
msgstr "La ejecución de select() a %s para esperar una señal de reloj expiró"

#: sys-utils/hwclock-rtc.c:290
#, c-format
msgid "select() to %s to wait for clock tick failed"
msgstr "La ejecución de select() a %s para esperar una señal de reloj falló"

#: sys-utils/hwclock-rtc.c:295
#, c-format
msgid "ioctl() to %s to turn off update interrupts failed"
msgstr "Error de ioctl() con %s al desactivar interrupciones de actualización"

#: sys-utils/hwclock-rtc.c:301
#, c-format
msgid "ioctl(%d, RTC_UIE_ON, 0) to %s failed"
msgstr "Error de ioctl(%d, RTC_UIE_ON, 0) de %s"

#: sys-utils/hwclock-rtc.c:353
#, c-format
msgid "ioctl(%s) to %s to set the time failed"
msgstr "Error de ioctl(%s) con %s al establecer la hora"

#: sys-utils/hwclock-rtc.c:359
#, c-format
msgid "ioctl(%s) was successful.\n"
msgstr "ioctl(%s) ha finalizado correctamente.\n"

#: sys-utils/hwclock-rtc.c:375
msgid "Using the rtc interface to the clock."
msgstr "Se utiliza la interfaz rtc al reloj."

#: sys-utils/hwclock-rtc.c:408
#, c-format
msgid "ioctl(%d, RTC_EPOCH_READ, epoch_p) to %s failed"
msgstr "Error de ioctl(%d, RTC_EPOCH_READ, epoch_p) con %s"

#: sys-utils/hwclock-rtc.c:414
#, c-format
msgid "ioctl(%d, RTC_EPOCH_READ, epoch_p) to %s succeeded.\n"
msgstr "ioctl(%d, RTC_EPOCH_READ, epoch_p) para %s ha sido correcto.\n"

#: sys-utils/hwclock-rtc.c:432
#, c-format
msgid "invalid epoch '%s'."
msgstr "época no válida: '%s'."

#: sys-utils/hwclock-rtc.c:443
#, c-format
msgid "ioctl(%d, RTC_EPOCH_SET, %lu) to %s failed"
msgstr "Error de ioctl(%d, RTC_EPOCH_SET, %lu) de %s"

#: sys-utils/hwclock-rtc.c:449
#, c-format
msgid "ioctl(%d, RTC_EPOCH_SET, %lu) to %s succeeded.\n"
msgstr "ioctl(%d, RTC_EPOCH_SET, %lu) para %s fue bien.\n"

#: sys-utils/ipcmk.c:70
msgid "Create various IPC resources.\n"
msgstr "Crea varios recursos IPC.\n"

#: sys-utils/ipcmk.c:73
msgid " -M, --shmem <size>       create shared memory segment of size <size>\n"
msgstr " -M, --shmem <tamaño>     crea un segmento de memoria compartida de tamaño <tamaño>\n"

#: sys-utils/ipcmk.c:74
msgid " -S, --semaphore <number> create semaphore array with <number> elements\n"
msgstr " -S, --semaphore <número> crea una lista de semáforos de <número> elementos\n"

#: sys-utils/ipcmk.c:75
msgid " -Q, --queue              create message queue\n"
msgstr " -Q, --queue              crea una cola de mensajes\n"

#: sys-utils/ipcmk.c:76
msgid " -p, --mode <mode>        permission for the resource (default is 0644)\n"
msgstr " -p, --mode <modo>        permisos para el recurso (los predeterminados son 0644)\n"

#: sys-utils/ipcmk.c:82 sys-utils/zramctl.c:565
msgid "<size>"
msgstr "<tamaño>"

#: sys-utils/ipcmk.c:114 sys-utils/losetup.c:731 sys-utils/zramctl.c:650
msgid "failed to parse size"
msgstr "fallo al analizar el tamaño"

#: sys-utils/ipcmk.c:121
msgid "failed to parse elements"
msgstr "fallo al analizar los elementos"

#: sys-utils/ipcmk.c:144
msgid "create share memory failed"
msgstr "fallo al crear la memoria compartida"

#: sys-utils/ipcmk.c:146
#, c-format
msgid "Shared memory id: %d\n"
msgstr "Id de la memoria compartida: %d\n"

#: sys-utils/ipcmk.c:152
msgid "create message queue failed"
msgstr "fallo al crear la cola de mensajes"

#: sys-utils/ipcmk.c:154
#, c-format
msgid "Message queue id: %d\n"
msgstr "Id de la cola de mensajes: %d\n"

#: sys-utils/ipcmk.c:160
msgid "create semaphore failed"
msgstr "fallo al crear semáforo"

#: sys-utils/ipcmk.c:162
#, c-format
msgid "Semaphore id: %d\n"
msgstr "Id del semáforo: %d\n"

#: sys-utils/ipcrm.c:51
#, c-format
msgid ""
" %1$s [options]\n"
" %1$s shm|msg|sem <id>...\n"
msgstr ""
" %1$s [opciones]\n"
" %1$s shm|msg|sem <id>...\n"

#: sys-utils/ipcrm.c:55
msgid "Remove certain IPC resources.\n"
msgstr "Elimina ciertos recursos IPC.\n"

#: sys-utils/ipcrm.c:58
msgid " -m, --shmem-id <id>        remove shared memory segment by id\n"
msgstr " -m, --shmem-id <id>        elimina un segmento de memoria compartida especificado por id\n"

#: sys-utils/ipcrm.c:59
msgid " -M, --shmem-key <key>      remove shared memory segment by key\n"
msgstr " -M, --shmem-key <clave>    elimina un segmento de memoria compartida especificado por clave\n"

#: sys-utils/ipcrm.c:60
msgid " -q, --queue-id <id>        remove message queue by id\n"
msgstr " -q, --queue-id <id>        elimina una cola de mensajes especificada por id\n"

#: sys-utils/ipcrm.c:61
msgid " -Q, --queue-key <key>      remove message queue by key\n"
msgstr " -Q, --queue-key <key>      elimina una cola de mensajes especificada por clave\n"

#: sys-utils/ipcrm.c:62
msgid " -s, --semaphore-id <id>    remove semaphore by id\n"
msgstr " -s, --semaphore-id <id>    elimina un semáforo especificado por id\n"

#: sys-utils/ipcrm.c:63
msgid " -S, --semaphore-key <key>  remove semaphore by key\n"
msgstr " -S, --semaphore-key <key>  elimina un semáforo especificado por clave\n"

#: sys-utils/ipcrm.c:64
msgid " -a, --all[=shm|msg|sem]    remove all (in the specified category)\n"
msgstr " -a, --all[=shm|msg|sem]    elimina todo (para la categoría especificada)\n"

#: sys-utils/ipcrm.c:65
msgid " -v, --verbose              explain what is being done\n"
msgstr " -v, --verbose              explica lo que se está haciendo\n"

#: sys-utils/ipcrm.c:86
#, c-format
msgid "removing shared memory segment id `%d'\n"
msgstr "se elimina el segmento de memoria compartida id `%d'\n"

#: sys-utils/ipcrm.c:91
#, c-format
msgid "removing message queue id `%d'\n"
msgstr "se elimina la cola de mensajes id `%d'\n"

#: sys-utils/ipcrm.c:96
#, c-format
msgid "removing semaphore id `%d'\n"
msgstr "se elimina el semáforo id `%d'\n"

#: sys-utils/ipcrm.c:108 sys-utils/ipcrm.c:222
msgid "permission denied for key"
msgstr "permiso denegado para la clave"

#: sys-utils/ipcrm.c:108
msgid "permission denied for id"
msgstr "permiso denegado para el identificador"

#: sys-utils/ipcrm.c:111 sys-utils/ipcrm.c:228
msgid "invalid key"
msgstr "clave no válida"

#: sys-utils/ipcrm.c:111
msgid "invalid id"
msgstr "identificador no válido"

#: sys-utils/ipcrm.c:114 sys-utils/ipcrm.c:225
msgid "already removed key"
msgstr "clave ya eliminada"

#: sys-utils/ipcrm.c:114
msgid "already removed id"
msgstr "identificador ya eliminado"

#: sys-utils/ipcrm.c:117 sys-utils/ipcrm.c:231
msgid "key failed"
msgstr "fallo de clave"

#: sys-utils/ipcrm.c:117
msgid "id failed"
msgstr "fallo de id"

#: sys-utils/ipcrm.c:134
#, c-format
msgid "invalid id: %s"
msgstr "identificador no válido: %s"

#: sys-utils/ipcrm.c:167
#, c-format
msgid "resource(s) deleted\n"
msgstr "recurso(s) eliminado\n"

#: sys-utils/ipcrm.c:200
#, c-format
msgid "illegal key (%s)"
msgstr "clave ilegal (%s)"

#: sys-utils/ipcrm.c:256
msgid "kernel not configured for shared memory"
msgstr "el núcleo no está configurado para memoria compartida"

#: sys-utils/ipcrm.c:269
msgid "kernel not configured for semaphores"
msgstr "el núcleo no está configurado para semáforos"

#: sys-utils/ipcrm.c:290
msgid "kernel not configured for message queues"
msgstr "el núcleo no está configurado para colas de mensajes"

#: sys-utils/ipcs.c:60
#, c-format
msgid ""
" %1$s [resource-option...] [output-option]\n"
" %1$s -m|-q|-s -i <id>\n"
msgstr ""
" %1$s [opción de recurso...] [opción de salida]\n"
" %1$s -m|-q|-s -i <id>\n"

#: sys-utils/ipcs.c:64 sys-utils/lsipc.c:294
msgid "Show information on IPC facilities.\n"
msgstr "Muestra información sobre los servicios IPC.\n"

#: sys-utils/ipcs.c:67
msgid " -i, --id <id>  print details on resource identified by <id>\n"
msgstr " -i, --id <id>  imprime información detallada sobre los recursos identificados por <id>\n"

#: sys-utils/ipcs.c:71 sys-utils/lsipc.c:297
msgid "Resource options:\n"
msgstr "Opciones de recursos:\n"

#: sys-utils/ipcs.c:72 sys-utils/lsipc.c:298
msgid " -m, --shmems      shared memory segments\n"
msgstr " -m, --shmems      segmentos de memoria compartida\n"

#: sys-utils/ipcs.c:73 sys-utils/lsipc.c:299
msgid " -q, --queues      message queues\n"
msgstr " -q, --queues      colas de mensajes\n"

#: sys-utils/ipcs.c:74 sys-utils/lsipc.c:300
msgid " -s, --semaphores  semaphores\n"
msgstr " -s, --semaphores  semáforos\n"

#: sys-utils/ipcs.c:75
msgid " -a, --all         all (default)\n"
msgstr " -a, --all         todo (opción predeterminada)\n"

#: sys-utils/ipcs.c:78
msgid "Output options:\n"
msgstr "Opciones de salida:\n"

#: sys-utils/ipcs.c:79
msgid " -t, --time        show attach, detach and change times\n"
msgstr " -t, --time        muestra las horas de asociación, disociación y cambio\n"

#: sys-utils/ipcs.c:80
msgid " -p, --pid         show PIDs of creator and last operator\n"
msgstr " -p, --pid         muestra los PIDs del creador y del último operador\n"

#: sys-utils/ipcs.c:81
msgid " -c, --creator     show creator and owner\n"
msgstr " -c, --creator     muestra el creador y el propietario\n"

#: sys-utils/ipcs.c:82
msgid " -l, --limits      show resource limits\n"
msgstr " -l, --limits      muestra los límites de recursos\n"

#: sys-utils/ipcs.c:83
msgid " -u, --summary     show status summary\n"
msgstr " -u, --summary     muestra un resumen del estado\n"

#: sys-utils/ipcs.c:84
msgid "     --human       show sizes in human-readable format\n"
msgstr "     --human       muestra los tamaños en un formato comprensible para humanos\n"

#: sys-utils/ipcs.c:85
msgid " -b, --bytes       show sizes in bytes\n"
msgstr " -b, --bytes       muestra los tamaños en bytes\n"

#: sys-utils/ipcs.c:171
msgid "when using an ID, a single resource must be specified"
msgstr "cuando se utiliza un ID, debe especificarse un único recurso"

#: sys-utils/ipcs.c:211
#, c-format
msgid "unable to fetch shared memory limits\n"
msgstr "no se han podido obtener los límites de la memoria compartida\n"

#: sys-utils/ipcs.c:214
#, c-format
msgid "------ Shared Memory Limits --------\n"
msgstr "---- Límites memoria compartida ----\n"

#: sys-utils/ipcs.c:215
#, c-format
msgid "max number of segments = %ju\n"
msgstr "número máx. segmentos = %ju\n"

#: sys-utils/ipcs.c:217
msgid "max seg size"
msgstr "tamaño máx. seg."

#: sys-utils/ipcs.c:225
msgid "max total shared memory"
msgstr "máx. memoria compartida total"

#: sys-utils/ipcs.c:227
msgid "min seg size"
msgstr "tamaño mín. seg."

#: sys-utils/ipcs.c:239
#, c-format
msgid "kernel not configured for shared memory\n"
msgstr "el núcleo no está configurado para memoria compartida\n"

#: sys-utils/ipcs.c:243
#, c-format
msgid "------ Shared Memory Status --------\n"
msgstr "----- Estado memoria compartida ----\n"

#. TRANSLATORS: This output format is maintained for backward
#. compatibility as ipcs is used in scripts. For consistency
#. with the rest, the translated form can follow this model:
#. *
#. "segments allocated = %d\n"
#. "pages allocated = %ld\n"
#. "pages resident = %ld\n"
#. "pages swapped = %ld\n"
#. "swap performance = %ld attempts, %ld successes\n"
#.
#: sys-utils/ipcs.c:255
#, c-format
msgid ""
"segments allocated %d\n"
"pages allocated %ld\n"
"pages resident  %ld\n"
"pages swapped   %ld\n"
"Swap performance: %ld attempts\t %ld successes\n"
msgstr ""
"segmentos asignadors %d\n"
"páginas asignadas      %ld\n"
"páginas residentes     %ld\n"
"páginas intercambiadas %ld\n"
"rendimiento de la zona de intercambio: %ld intentos\t %ld con éxito\n"

#: sys-utils/ipcs.c:272
#, c-format
msgid "------ Shared Memory Segment Creators/Owners --------\n"
msgstr "-- Creadores/propietarios segmento mem. compartida --\n"

#: sys-utils/ipcs.c:274 sys-utils/ipcs.c:280 sys-utils/ipcs.c:287
#: sys-utils/ipcs.c:293
msgid "shmid"
msgstr "shmid"

#: sys-utils/ipcs.c:274 sys-utils/ipcs.c:293 sys-utils/ipcs.c:398
#: sys-utils/ipcs.c:413 sys-utils/ipcs.c:500 sys-utils/ipcs.c:518
msgid "perms"
msgstr "perms"

#: sys-utils/ipcs.c:274 sys-utils/ipcs.c:398 sys-utils/ipcs.c:500
msgid "cuid"
msgstr "cuid"

#: sys-utils/ipcs.c:274 sys-utils/ipcs.c:398 sys-utils/ipcs.c:500
msgid "cgid"
msgstr "cgid"

#: sys-utils/ipcs.c:274 sys-utils/ipcs.c:398 sys-utils/ipcs.c:500
msgid "uid"
msgstr "uid"

#: sys-utils/ipcs.c:274 sys-utils/ipcs.c:398 sys-utils/ipcs.c:500
msgid "gid"
msgstr "gid"

#: sys-utils/ipcs.c:278
#, c-format
msgid "------ Shared Memory Attach/Detach/Change Times --------\n"
msgstr "-- Tiempos conexión/desconexión/modificac. mem. comp. --\n"

#: sys-utils/ipcs.c:280 sys-utils/ipcs.c:287 sys-utils/ipcs.c:293
#: sys-utils/ipcs.c:404 sys-utils/ipcs.c:413 sys-utils/ipcs.c:506
#: sys-utils/ipcs.c:512 sys-utils/ipcs.c:518
msgid "owner"
msgstr "propietario"

#: sys-utils/ipcs.c:280
msgid "attached"
msgstr "conectado"

#: sys-utils/ipcs.c:280
msgid "detached"
msgstr "desconectado"

#: sys-utils/ipcs.c:281
msgid "changed"
msgstr "modificado"

#: sys-utils/ipcs.c:285
#, c-format
msgid "------ Shared Memory Creator/Last-op PIDs --------\n"
msgstr "---- PIDs creador/último op. memoria compart. ----\n"

#: sys-utils/ipcs.c:287
msgid "cpid"
msgstr "cpid"

#: sys-utils/ipcs.c:287
msgid "lpid"
msgstr "lpid"

#: sys-utils/ipcs.c:291
#, c-format
msgid "------ Shared Memory Segments --------\n"
msgstr "---- Segmentos memoria compartida ----\n"

#: sys-utils/ipcs.c:293 sys-utils/ipcs.c:413 sys-utils/ipcs.c:518
msgid "key"
msgstr "key"

#: sys-utils/ipcs.c:294 sys-utils/ipcs.c:519
msgid "size"
msgstr "tamaño"

#: sys-utils/ipcs.c:294 sys-utils/prlimit.c:75 sys-utils/prlimit.c:76
#: sys-utils/prlimit.c:78 sys-utils/prlimit.c:79 sys-utils/prlimit.c:81
#: sys-utils/prlimit.c:82 sys-utils/prlimit.c:86 sys-utils/prlimit.c:90
msgid "bytes"
msgstr "bytes"

#: sys-utils/ipcs.c:295
msgid "nattch"
msgstr "nattch"

#: sys-utils/ipcs.c:295
msgid "status"
msgstr "estado"

#: sys-utils/ipcs.c:319 sys-utils/ipcs.c:321 sys-utils/ipcs.c:323
#: sys-utils/ipcs.c:436 sys-utils/ipcs.c:438 sys-utils/ipcs.c:543
#: sys-utils/ipcs.c:545 sys-utils/ipcs.c:547 sys-utils/ipcs.c:600
#: sys-utils/ipcs.c:602 sys-utils/ipcs.c:631 sys-utils/ipcs.c:633
#: sys-utils/ipcs.c:635 sys-utils/ipcs.c:659
msgid "Not set"
msgstr "No establecido"

#: sys-utils/ipcs.c:349 sys-utils/lsipc.c:997 sys-utils/lsipc.c:1003
msgid "dest"
msgstr "dest"

#: sys-utils/ipcs.c:350 sys-utils/lsipc.c:998 sys-utils/lsipc.c:1011
msgid "locked"
msgstr "bloqueado"

#: sys-utils/ipcs.c:369
#, c-format
msgid "unable to fetch semaphore limits\n"
msgstr "no se han podido obtener los límites de los semáforos\n"

#: sys-utils/ipcs.c:372
#, c-format
msgid "------ Semaphore Limits --------\n"
msgstr "------ Límites semáforo --------\n"

#: sys-utils/ipcs.c:373
#, c-format
msgid "max number of arrays = %d\n"
msgstr "número máximo de matrices = %d\n"

#: sys-utils/ipcs.c:374
#, c-format
msgid "max semaphores per array = %d\n"
msgstr "máx. semáforos por matriz = %d\n"

#: sys-utils/ipcs.c:375
#, c-format
msgid "max semaphores system wide = %d\n"
msgstr "máx. semáforos sistema = %d\n"

#: sys-utils/ipcs.c:376
#, c-format
msgid "max ops per semop call = %d\n"
msgstr "máx. oper. por llamada semop = %d\n"

#: sys-utils/ipcs.c:377
#, c-format
msgid "semaphore max value = %u\n"
msgstr "valor máx. semáforo = %u\n"

#: sys-utils/ipcs.c:386
#, c-format
msgid "kernel not configured for semaphores\n"
msgstr "el núcleo no está configurado para semáforos\n"

#: sys-utils/ipcs.c:389
#, c-format
msgid "------ Semaphore Status --------\n"
msgstr "------ Estado semáforo ---------\n"

#: sys-utils/ipcs.c:390
#, c-format
msgid "used arrays = %d\n"
msgstr "matrices utilizadas = %d\n"

#: sys-utils/ipcs.c:391
#, c-format
msgid "allocated semaphores = %d\n"
msgstr "semáforos asignados = %d\n"

#: sys-utils/ipcs.c:396
#, c-format
msgid "------ Semaphore Arrays Creators/Owners --------\n"
msgstr "---- Creadores/propietarios matrices semáf. ----\n"

#: sys-utils/ipcs.c:398 sys-utils/ipcs.c:404 sys-utils/ipcs.c:413
msgid "semid"
msgstr "semid"

#: sys-utils/ipcs.c:402
#, c-format
msgid "------ Semaphore Operation/Change Times --------\n"
msgstr "--- Tiempos operación/modificación semáforos ---\n"

#: sys-utils/ipcs.c:404
msgid "last-op"
msgstr "última operación"

#: sys-utils/ipcs.c:404
msgid "last-changed"
msgstr "última modificación"

#: sys-utils/ipcs.c:411
#, c-format
msgid "------ Semaphore Arrays --------\n"
msgstr "------ Matrices semáforo -------\n"

#: sys-utils/ipcs.c:413
msgid "nsems"
msgstr "nsems"

#: sys-utils/ipcs.c:470
#, c-format
msgid "unable to fetch message limits\n"
msgstr "no se han podido obtener los límites del mensaje\n"

#: sys-utils/ipcs.c:473
#, c-format
msgid "------ Messages Limits --------\n"
msgstr "------ Límites mensajes -------\n"

#: sys-utils/ipcs.c:474
#, c-format
msgid "max queues system wide = %d\n"
msgstr "máx. colas sistema = %d\n"

#: sys-utils/ipcs.c:476
msgid "max size of message"
msgstr "tamaño máx. de mensaje"

#: sys-utils/ipcs.c:478
msgid "default max size of queue"
msgstr "tamaño máx. predeterminado de cola"

#: sys-utils/ipcs.c:485
#, c-format
msgid "kernel not configured for message queues\n"
msgstr "el núcleo no está configurado para colas de mensajes\n"

#: sys-utils/ipcs.c:488
#, c-format
msgid "------ Messages Status --------\n"
msgstr "------ Estado mensajes --------\n"

#: sys-utils/ipcs.c:490
#, c-format
msgid "allocated queues = %d\n"
msgstr "colas asignadas = %d\n"

#: sys-utils/ipcs.c:491
#, c-format
msgid "used headers = %d\n"
msgstr "cabeceras utilizadas = %d\n"

#: sys-utils/ipcs.c:493
msgid "used space"
msgstr "espacio utilizado"

#: sys-utils/ipcs.c:494
msgid " bytes\n"
msgstr " bytes\n"

#: sys-utils/ipcs.c:498
#, c-format
msgid "------ Message Queues Creators/Owners --------\n"
msgstr "-- Colas de mensajes creadores/propietarios --\n"

#: sys-utils/ipcs.c:500 sys-utils/ipcs.c:506 sys-utils/ipcs.c:512
#: sys-utils/ipcs.c:518
msgid "msqid"
msgstr "msqid"

#: sys-utils/ipcs.c:504
#, c-format
msgid "------ Message Queues Send/Recv/Change Times --------\n"
msgstr "--- Tiempos envío/recep./modific. colas mensajes ----\n"

#: sys-utils/ipcs.c:506
msgid "send"
msgstr "envío"

#: sys-utils/ipcs.c:506
msgid "recv"
msgstr "recepción"

#: sys-utils/ipcs.c:506
msgid "change"
msgstr "modificación"

#: sys-utils/ipcs.c:510
#, c-format
msgid "------ Message Queues PIDs --------\n"
msgstr "----- PID de colas de mensajes ----\n"

#: sys-utils/ipcs.c:512
msgid "lspid"
msgstr "lspid"

#: sys-utils/ipcs.c:512
msgid "lrpid"
msgstr "lrpid"

#: sys-utils/ipcs.c:516
#, c-format
msgid "------ Message Queues --------\n"
msgstr "------ Colas de mensajes -----\n"

#: sys-utils/ipcs.c:519
msgid "used-bytes"
msgstr "bytes utilizados"

#: sys-utils/ipcs.c:520
msgid "messages"
msgstr "mensajes"

#: sys-utils/ipcs.c:584 sys-utils/ipcs.c:614 sys-utils/ipcs.c:647
#: sys-utils/lsipc.c:547 sys-utils/lsipc.c:739 sys-utils/lsipc.c:899
#, c-format
msgid "id %d not found"
msgstr "id %d no encontrado"

#: sys-utils/ipcs.c:588
#, c-format
msgid ""
"\n"
"Shared memory Segment shmid=%d\n"
msgstr ""
"\n"
"Segmento de memoria compartida shmid=%d\n"

#: sys-utils/ipcs.c:589
#, c-format
msgid "uid=%u\tgid=%u\tcuid=%u\tcgid=%u\n"
msgstr "uid=%u\tgid=%u\tcuid=%u\tcgid=%u\n"

#: sys-utils/ipcs.c:592
#, c-format
msgid "mode=%#o\taccess_perms=%#o\n"
msgstr "mode=%#o\taccess_perms=%#o\n"

#: sys-utils/ipcs.c:594
msgid "size="
msgstr "tamaño="

#: sys-utils/ipcs.c:594
msgid "bytes="
msgstr "bytes="

#: sys-utils/ipcs.c:596
#, c-format
msgid "lpid=%u\tcpid=%u\tnattch=%jd\n"
msgstr "lpid=%u\tcpid=%u\tnattch=%jd\n"

#: sys-utils/ipcs.c:599
#, c-format
msgid "att_time=%-26.24s\n"
msgstr "att_time=%-26.24s\n"

#: sys-utils/ipcs.c:601
#, c-format
msgid "det_time=%-26.24s\n"
msgstr "det_time=%-26.24s\n"

#: sys-utils/ipcs.c:603 sys-utils/ipcs.c:634
#, c-format
msgid "change_time=%-26.24s\n"
msgstr "change_time=%-26.24s\n"

#: sys-utils/ipcs.c:618
#, c-format
msgid ""
"\n"
"Message Queue msqid=%d\n"
msgstr ""
"\n"
"Cola de mensajes msqid=%d\n"

#: sys-utils/ipcs.c:619
#, c-format
msgid "uid=%u\tgid=%u\tcuid=%u\tcgid=%u\tmode=%#o\n"
msgstr "uid=%u\tgid=%u\tcuid=%u\tcgid=%u\tmode=%#o\n"

#: sys-utils/ipcs.c:623
msgid "csize="
msgstr "tamañoc="

#: sys-utils/ipcs.c:623
msgid "cbytes="
msgstr "bytesc="

#: sys-utils/ipcs.c:625
msgid "qsize="
msgstr "tamañoq="

#: sys-utils/ipcs.c:625
msgid "qbytes="
msgstr "bytesq="

#: sys-utils/ipcs.c:630
#, c-format
msgid "send_time=%-26.24s\n"
msgstr "send_time=%-26.24s\n"

#: sys-utils/ipcs.c:632
#, c-format
msgid "rcv_time=%-26.24s\n"
msgstr "rcv_time=%-26.24s\n"

#: sys-utils/ipcs.c:651
#, c-format
msgid ""
"\n"
"Semaphore Array semid=%d\n"
msgstr ""
"\n"
"semid de matriz de semáforos=%d\n"

#: sys-utils/ipcs.c:652
#, c-format
msgid "uid=%u\t gid=%u\t cuid=%u\t cgid=%u\n"
msgstr "uid=%u\t gid=%u\t cuid=%u\t cgid=%u\n"

#: sys-utils/ipcs.c:655
#, c-format
msgid "mode=%#o, access_perms=%#o\n"
msgstr "mode=%#o, access_perms=%#o\n"

#: sys-utils/ipcs.c:657
#, c-format
msgid "nsems = %ju\n"
msgstr "nsems = %ju\n"

#: sys-utils/ipcs.c:658
#, c-format
msgid "otime = %-26.24s\n"
msgstr "otime = %-26.24s\n"

#: sys-utils/ipcs.c:660
#, c-format
msgid "ctime = %-26.24s\n"
msgstr "ctime = %-26.24s\n"

#: sys-utils/ipcs.c:663
msgid "semnum"
msgstr "semnum"

#: sys-utils/ipcs.c:663
msgid "value"
msgstr "value"

#: sys-utils/ipcs.c:663
msgid "ncount"
msgstr "ncount"

#: sys-utils/ipcs.c:663
msgid "zcount"
msgstr "zcount"

#: sys-utils/ipcs.c:663
msgid "pid"
msgstr "pid"

#: sys-utils/ipcutils.c:232 sys-utils/ipcutils.c:236 sys-utils/ipcutils.c:240
#: sys-utils/ipcutils.c:244
#, c-format
msgid "%s failed"
msgstr "%s falló"

#: sys-utils/ipcutils.c:505
#, c-format
msgid "%s (bytes) = "
msgstr "%s (bytes) = "

#: sys-utils/ipcutils.c:507
#, c-format
msgid "%s (kbytes) = "
msgstr "%s (kbytes) = "

#: sys-utils/irq-common.c:53 sys-utils/irq-common.c:114
#, fuzzy
msgid "interrupts"
msgstr "interrumpido %s"

#: sys-utils/irq-common.c:54
msgid "total count"
msgstr "total"

#: sys-utils/irq-common.c:55
msgid "delta count"
msgstr "delta"

#: sys-utils/irq-common.c:56
msgid "name"
msgstr "nombre"

#: sys-utils/irq-common.c:106 sys-utils/lsmem.c:689 sys-utils/lsns.c:782
msgid "failed to initialize output table"
msgstr "no se ha podido inicializar la tabla de salida"

#: sys-utils/irq-common.c:145 sys-utils/lsns.c:720
msgid "failed to add line to output"
msgstr "no se ha podido añadir la línea a la salida"

#: sys-utils/irq-common.c:348
#, fuzzy
msgid "unsupported column name to sort output"
msgstr "nombre de columna no admitido para ordenar la salida"

#: sys-utils/irqtop.c:114
#, c-format
msgid ""
"irqtop | total: %ld delta: %ld | %s | %s\n"
"\n"
msgstr ""
"irqtop | total: %ld delta: %ld | %s | %s\n"
"\n"

#: sys-utils/irqtop.c:142
msgid "cannot not create timerfd"
msgstr "no se puede crear timerfd"

#: sys-utils/irqtop.c:144
msgid "cannot set timerfd"
msgstr "no se puede establecer timerfd"

#: sys-utils/irqtop.c:149 sys-utils/irqtop.c:167 sys-utils/irqtop.c:172
msgid "epoll_ctl failed"
msgstr "epoll_ctl ha fallado"

#: sys-utils/irqtop.c:152
msgid "sigfillset failed"
msgstr "sigfillset ha fallado"

#: sys-utils/irqtop.c:154
msgid "sigprocmask failed"
msgstr "sigprocmask falló"

#: sys-utils/irqtop.c:162
msgid "cannot not create signalfd"
msgstr "no se puede crear signalfd"

#: sys-utils/irqtop.c:220
msgid "Interactive utility to display kernel interrupt information."
msgstr "Utilidad interactiva para mostrar información de interrupción del núcleo."

#: sys-utils/irqtop.c:223
#, fuzzy
msgid " -d, --delay <secs>   delay updates\n"
msgstr "     --delay <seg>    retardo utilizado cuando se establece una nueva hora RTC"

#: sys-utils/irqtop.c:225 sys-utils/lsirq.c:67
msgid " -s, --sort <column>  specify sort column\n"
msgstr " -s, --sort <columna> especifica la columna para ordenación\n"

#: sys-utils/irqtop.c:229
msgid ""
"\n"
"The following interactive key commands are valid:\n"
msgstr ""

#: sys-utils/irqtop.c:230
msgid "  i      sort by IRQ\n"
msgstr "  i      ordena por IRQ\n"

#: sys-utils/irqtop.c:231
msgid "  t      sort by TOTAL\n"
msgstr "  t      ordena por TOTAL\n"

#: sys-utils/irqtop.c:232
msgid "  d      sort by DELTA\n"
msgstr "  d      ordena por DELTA\n"

#: sys-utils/irqtop.c:233
msgid "  n      sort by NAME\n"
msgstr "  n      ordena por NOMBRE\n"

#: sys-utils/irqtop.c:234
msgid "  q Q    quit program\n"
msgstr "  q Q    sale del programa\n"

#: sys-utils/irqtop.c:266
msgid "failed to parse delay argument"
msgstr "no se ha podido analizar el argumento del retardo"

#: sys-utils/irqtop.c:320
msgid "terminal setting retrieval"
msgstr ""

#: sys-utils/ldattach.c:183
msgid "invalid iflag"
msgstr "indicador de modo de entrada incorrecto"

#: sys-utils/ldattach.c:199
#, c-format
msgid " %s [options] <ldisc> <device>\n"
msgstr " %s [opciones] <ldisc> <dispositivo>\n"

#: sys-utils/ldattach.c:202
msgid "Attach a line discipline to a serial line.\n"
msgstr "Asocia una disciplina de línea a una línea serie.\n"

#: sys-utils/ldattach.c:205
msgid " -d, --debug             print verbose messages to stderr\n"
msgstr " -d, --debug             imprime mensajes detallados en stderr\n"

#: sys-utils/ldattach.c:206
msgid " -s, --speed <value>     set serial line speed\n"
msgstr " -s, --speed <valor>     establece la velocidad de la línea serie\n"

#: sys-utils/ldattach.c:207
msgid " -c, --intro-command <string> intro sent before ldattach\n"
msgstr " -c, --intro-command <cadena> intro enviado antes que ldattach\n"

#: sys-utils/ldattach.c:208
msgid " -p, --pause <seconds>   pause between intro and ldattach\n"
msgstr " -p, --pause <segundos>  pausa entre intro y ldattach\n"

#: sys-utils/ldattach.c:209
msgid " -7, --sevenbits         set character size to 7 bits\n"
msgstr " -7, --sevenbits         establece tamaño de carácter de 7 bits\n"

#: sys-utils/ldattach.c:210
msgid " -8, --eightbits         set character size to 8 bits\n"
msgstr " -8, --eightbits         establece tamaño de carácter de 8 bits\n"

#: sys-utils/ldattach.c:211
msgid " -n, --noparity          set parity to none\n"
msgstr " -n, --noparity          establece no paridad\n"

#: sys-utils/ldattach.c:212
msgid " -e, --evenparity        set parity to even\n"
msgstr " -e, --evenparity        establece paridad par\n"

#: sys-utils/ldattach.c:213
msgid " -o, --oddparity         set parity to odd\n"
msgstr " -o, --oddparity         establece paridad impar\n"

#: sys-utils/ldattach.c:214
msgid " -1, --onestopbit        set stop bits to one\n"
msgstr " -1, --onestopbit        establece un bit de parada\n"

#: sys-utils/ldattach.c:215
msgid " -2, --twostopbits       set stop bits to two\n"
msgstr " -2, --twostopbits       establece dis bits de parada\n"

#: sys-utils/ldattach.c:216
msgid " -i, --iflag [-]<iflag>  set input mode flag\n"
msgstr " -i, --iflag [-]<iflag>  establece el indicador del modo de entrada\n"

#: sys-utils/ldattach.c:221
msgid ""
"\n"
"Known <ldisc> names:\n"
msgstr ""
"\n"
"Nombres <ldisc> conocidos:\n"

#: sys-utils/ldattach.c:225
msgid ""
"\n"
"Known <iflag> names:\n"
msgstr ""
"\n"
"Nombres <iflag> conocidos:\n"

#: sys-utils/ldattach.c:343
msgid "invalid speed argument"
msgstr "argumento de velocidad no válido"

#: sys-utils/ldattach.c:346
msgid "invalid pause argument"
msgstr "argumento de pausa no válido"

#: sys-utils/ldattach.c:373
msgid "invalid line discipline argument"
msgstr "argumento de disciplina de línea no válido"

#: sys-utils/ldattach.c:393
#, c-format
msgid "%s is not a serial line"
msgstr "%s no es una línea serie"

#: sys-utils/ldattach.c:400
#, c-format
msgid "cannot get terminal attributes for %s"
msgstr "no se pueden obtener los atributos de terminal de %s"

#: sys-utils/ldattach.c:403
#, c-format
msgid "speed %d unsupported"
msgstr "velocidad %d no admitida"

#: sys-utils/ldattach.c:452
#, c-format
msgid "cannot set terminal attributes for %s"
msgstr "no se pueden establecer los atributos de terminal de %s"

#: sys-utils/ldattach.c:462
#, c-format
msgid "cannot write intro command to %s"
msgstr "no se puede escribir la orden intro en %s"

#: sys-utils/ldattach.c:472
msgid "cannot set line discipline"
msgstr "no se puede establecer la disciplina de línea"

#: sys-utils/ldattach.c:482
msgid "cannot daemonize"
msgstr "no se puede hacer demonio"

#: sys-utils/losetup.c:72
msgid "autoclear flag set"
msgstr "establecer indicador de autoborrado"

#: sys-utils/losetup.c:73
msgid "device backing file"
msgstr "fichero subyacente del dispositivo"

#: sys-utils/losetup.c:74
msgid "backing file inode number"
msgstr "número de nodo-i del fichero subyacente"

#: sys-utils/losetup.c:75
msgid "backing file major:minor device number"
msgstr "número de dispositivo mayor:menor del fichero subyacente"

#: sys-utils/losetup.c:76
msgid "loop device name"
msgstr "nombre del dispositivo de bucle"

#: sys-utils/losetup.c:77
msgid "offset from the beginning"
msgstr "desplazamiento desde el comienzo"

#: sys-utils/losetup.c:78
msgid "partscan flag set"
msgstr "indicador de partscan activado"

#: sys-utils/losetup.c:80
msgid "size limit of the file in bytes"
msgstr "límite de tamaño del fichero en btyes"

#: sys-utils/losetup.c:81
msgid "loop device major:minor number"
msgstr "número mayor:menor del dispositivo de bucle"

#: sys-utils/losetup.c:82
msgid "access backing file with direct-io"
msgstr "accede al fichero subyacente con e/s directa"

#: sys-utils/losetup.c:83
msgid "logical sector size in bytes"
msgstr "tamaño del sector lógico en bytes"

#: sys-utils/losetup.c:140 sys-utils/losetup.c:151
#, c-format
msgid ", offset %ju"
msgstr ", desplazamiento %ju"

#: sys-utils/losetup.c:143 sys-utils/losetup.c:154
#, c-format
msgid ", sizelimit %ju"
msgstr ", tamaño límite %ju"

#: sys-utils/losetup.c:162
#, c-format
msgid ", encryption %s (type %u)"
msgstr ", cifrado %s (tipo %u)"

#: sys-utils/losetup.c:206
#, c-format
msgid "%s: detach failed"
msgstr "%s: fallo al desvincular"

#: sys-utils/losetup.c:401
#, c-format
msgid ""
" %1$s [options] [<loopdev>]\n"
" %1$s [options] -f | <loopdev> <file>\n"
msgstr ""
" %1$s [opciones] [<dispbucle>]\n"
" %1$s [opciones] -f | <dispbucle> <fichero>\n"

#: sys-utils/losetup.c:406
msgid "Set up and control loop devices.\n"
msgstr "Configura y controla dispositivos de bucle.\n"

#: sys-utils/losetup.c:410
msgid " -a, --all                     list all used devices\n"
msgstr " -a, --all                     enumera todos los dispositivos utilizados\n"

#: sys-utils/losetup.c:411
msgid " -d, --detach <loopdev>...     detach one or more devices\n"
msgstr " -d, --detach <dispbucle>...   desvincula uno o varios dispositivos\n"

#: sys-utils/losetup.c:412
msgid " -D, --detach-all              detach all used devices\n"
msgstr " -D, --detach-all              desvincula todos los dispositivos utilizados\n"

#: sys-utils/losetup.c:413
msgid " -f, --find                    find first unused device\n"
msgstr " -f, --find                    encuentra el primer dispositivo no utilizado\n"

#: sys-utils/losetup.c:414
msgid " -c, --set-capacity <loopdev>  resize the device\n"
msgstr " -c, --set-capacity <dispbucle>cambia el tamaño del dispositivo\n"

#: sys-utils/losetup.c:415
msgid " -j, --associated <file>       list all devices associated with <file>\n"
msgstr " -j, --associated <fichero>    enumera todos los dispositivos asociados con <fichero>\n"

#: sys-utils/losetup.c:416
msgid " -L, --nooverlap               avoid possible conflict between devices\n"
msgstr " -L, ..nooverlap               evita posibles conflictos entre dispositivos\n"

#: sys-utils/losetup.c:420
msgid " -o, --offset <num>            start at offset <num> into file\n"
msgstr " -o, --offset <núm>            comienza en el desplazamiento <núm> dentro del fichero\n"

#: sys-utils/losetup.c:421
msgid "     --sizelimit <num>         device is limited to <num> bytes of the file\n"
msgstr "     --sizelimit <núm>         el dispositivo está limitado a <núm> bytes del fichero\n"

#: sys-utils/losetup.c:422
msgid " -b, --sector-size <num>       set the logical sector size to <num>\n"
msgstr " -b, --sector-size <núm>       establece el tamaño de sector lógico a <núm>\n"

#: sys-utils/losetup.c:423
msgid " -P, --partscan                create a partitioned loop device\n"
msgstr " -P, --partscan                crea un dispositivo de bucle particionado\n"

#: sys-utils/losetup.c:424
msgid " -r, --read-only               set up a read-only loop device\n"
msgstr " -r, --read-only               configura un dispositivo de bucle de solo lectura\n"

#: sys-utils/losetup.c:425
msgid "     --direct-io[=<on|off>]    open backing file with O_DIRECT\n"
msgstr "     --direct-io[=<on|off>]    abre el fichero subyacente con O_DIRECT\n"

#: sys-utils/losetup.c:426
msgid "     --show                    print device name after setup (with -f)\n"
msgstr "     --show                    imprime el nombre del dispositivo después de la instalación (con -f)\n"

#: sys-utils/losetup.c:427
msgid " -v, --verbose                 verbose mode\n"
msgstr "  -v, --verbose                modo expresivo\n"

#: sys-utils/losetup.c:431
msgid " -J, --json                    use JSON --list output format\n"
msgstr " -J, --json                    utiliza el formato de salida --list JSON\n"

#: sys-utils/losetup.c:432
msgid " -l, --list                    list info about all or specified (default)\n"
msgstr " -l, --list                    ofrece información sobre todo o sobre lo especificado (predeterminado esto último)\n"

#: sys-utils/losetup.c:433
msgid " -n, --noheadings              don't print headings for --list output\n"
msgstr " -n, --noheadings              no imprime los encabezados de la salida de --list\n"

#: sys-utils/losetup.c:434
msgid " -O, --output <cols>           specify columns to output for --list\n"
msgstr " -O, --output <cols>           especifica las columnas que se mostrarán con --list\n"

#: sys-utils/losetup.c:435
msgid "     --output-all              output all columns\n"
msgstr "     --output-all              saca todas las columnas\n"

#: sys-utils/losetup.c:436
msgid "     --raw                     use raw --list output format\n"
msgstr "     --raw                     utiliza el formato de salida --list bruto\n"

#: sys-utils/losetup.c:464
#, c-format
msgid "%s: Warning: file is smaller than 512 bytes; the loop device may be useless or invisible for system tools."
msgstr "%s: Atención: el fichero es menor de 512 bytes; el dispositivo de bucle podría ser inutilizable o invisible a las herramientas del sistema."

#: sys-utils/losetup.c:468
#, c-format
msgid "%s: Warning: file does not fit into a 512-byte sector; the end of the file will be ignored."
msgstr "%s: Atención: el fichero no cabe en un sector de 512 bytes; se pasará por alto el final del fichero."

#: sys-utils/losetup.c:490 sys-utils/losetup.c:542
#, c-format
msgid "%s: overlapping loop device exists"
msgstr "%s ya existe un dispositivo de bucle que solapa"

#: sys-utils/losetup.c:501
#, c-format
msgid "%s: overlapping read-only loop device exists"
msgstr "%s: ya existe un dispositivo de bucle de solo lectura que solapa"

#: sys-utils/losetup.c:508
#, c-format
msgid "%s: overlapping encrypted loop device exists"
msgstr "%s: ya existe un dispositivo de bucle cifrado que solapa"

#: sys-utils/losetup.c:514
#, c-format
msgid "%s: failed to re-use loop device"
msgstr "%s: error al reutilizar dispositivo de bucle"

#: sys-utils/losetup.c:520
msgid "failed to inspect loop devices"
msgstr "error al inspeccionar dispositivos de bucle"

#: sys-utils/losetup.c:543
#, c-format
msgid "%s: failed to check for conflicting loop devices"
msgstr "%s: error al comprobar conflictos en dispositivos de bucle"

#: sys-utils/losetup.c:555 sys-utils/losetup.c:875
msgid "cannot find an unused loop device"
msgstr "no se ha encontrado ningún dispositivo de bucle libre"

#: sys-utils/losetup.c:568
#, c-format
msgid "%s: failed to use backing file"
msgstr "%s: fallo al utilizar el fichero subyacente"

#: sys-utils/losetup.c:661
msgid "failed to parse logical block size"
msgstr "fallo al analizar el tamaño de bloque lógico"

#: sys-utils/losetup.c:667 sys-utils/losetup.c:677 sys-utils/losetup.c:801
#: sys-utils/losetup.c:815 sys-utils/losetup.c:855
#, c-format
msgid "%s: failed to use device"
msgstr "%s: no se ha podido utilizar el dispositivo"

#: sys-utils/losetup.c:812
msgid "no loop device specified"
msgstr "no se ha especificado ningún dispositivo de bucle"

#: sys-utils/losetup.c:827
#, c-format
msgid "the options %s are allowed during loop device setup only"
msgstr "las opciones %s solo se permiten durante la instalación del dispositivo de bucle"

#: sys-utils/losetup.c:832
msgid "the option --offset is not allowed in this context"
msgstr "la opción --offset no se permite en este contexto"

#: sys-utils/losetup.c:896
#, c-format
msgid "%s: set capacity failed"
msgstr "%s: fallo al establecer la capacidad"

#: sys-utils/losetup.c:903
#, c-format
msgid "%s: set direct io failed"
msgstr "%s: no se ha podido establecer e/s directa"

#: sys-utils/losetup.c:909
#, c-format
msgid "%s: set logical block size failed"
msgstr "%s: fallo al establecer el tamaño de bloque lógico"

# Masculino, porque se refiere a "Indicadores"
#: sys-utils/lscpu.c:82
msgid "none"
msgstr "ninguno"

#: sys-utils/lscpu.c:83
msgid "para"
msgstr "para"

#: sys-utils/lscpu.c:84
msgid "full"
msgstr "lleno"

#: sys-utils/lscpu.c:85
msgid "container"
msgstr "contenedor"

#: sys-utils/lscpu.c:128
msgid "horizontal"
msgstr "horizontal"

#: sys-utils/lscpu.c:129
msgid "vertical"
msgstr "vertical"

#: sys-utils/lscpu.c:197
msgid "logical CPU number"
msgstr "número de CPU lógica"

#: sys-utils/lscpu.c:198
msgid "logical core number"
msgstr "número de núcleo lógico"

#: sys-utils/lscpu.c:199
msgid "logical socket number"
msgstr "número de «socket» lógico"

#: sys-utils/lscpu.c:200
msgid "logical NUMA node number"
msgstr "número de nodo NUMA lógico"

#: sys-utils/lscpu.c:201
msgid "logical book number"
msgstr "número de libro lógico"

#: sys-utils/lscpu.c:202
msgid "logical drawer number"
msgstr "número de cajón lógico"

#: sys-utils/lscpu.c:203
msgid "shows how caches are shared between CPUs"
msgstr "muestra cómo están compartidas las cachés entre las CPUs"

#: sys-utils/lscpu.c:204
msgid "CPU dispatching mode on virtual hardware"
msgstr "modo de distribución de CPU en hardware virtual"

#: sys-utils/lscpu.c:205
msgid "physical address of a CPU"
msgstr "dirección física de una CPU"

#: sys-utils/lscpu.c:206
msgid "shows if the hypervisor has allocated the CPU"
msgstr "muestra si el hipervisor ha reservado la CPU"

#: sys-utils/lscpu.c:207
msgid "shows if Linux currently makes use of the CPU"
msgstr "muestra si Linux está haciendo uso de la CPU en este instante"

#: sys-utils/lscpu.c:208
msgid "shows the maximum MHz of the CPU"
msgstr "muestra los máximos MHz de la CPU"

#: sys-utils/lscpu.c:209
msgid "shows the minimum MHz of the CPU"
msgstr "muestra los mínimos MHz de la CPU"

#: sys-utils/lscpu.c:214
msgid "size of all system caches"
msgstr "tamaño de todas las cachés del sistema"

#: sys-utils/lscpu.c:215
msgid "cache level"
msgstr "nivel de caché"

#: sys-utils/lscpu.c:216
msgid "cache name"
msgstr "nombre de la caché"

#: sys-utils/lscpu.c:217
msgid "size of one cache"
msgstr "tamaño de una caché"

#: sys-utils/lscpu.c:218
msgid "cache type"
msgstr "tipo de caché"

#: sys-utils/lscpu.c:219
msgid "ways of associativity"
msgstr "modos de asociatividad"

#: sys-utils/lscpu.c:220
msgid "allocation policy"
msgstr "política de asignación"

#: sys-utils/lscpu.c:221
msgid "write policy"
msgstr "política de escritura"

#: sys-utils/lscpu.c:222
msgid "number of physical cache line per cache t"
msgstr "número de líneas de caché física por caché t"

#: sys-utils/lscpu.c:223
msgid "number of sets in the cache; set lines has the same cache index"
msgstr "número de conjuntos en la caché; las líneas de un conjunto tienen el mismo índice de caché"

#: sys-utils/lscpu.c:224
msgid "minimum amount of data in bytes transferred from memory to cache"
msgstr "cantidad mínima de datos en bytes transferida de la memoria a la caché"

#: sys-utils/lscpu.c:532
msgid "error: uname failed"
msgstr "error: fallo de uname"

#: sys-utils/lscpu.c:626
#, c-format
msgid "failed to determine number of CPUs: %s"
msgstr "fallo al determinar el número de CPUs: %s"

#: sys-utils/lscpu.c:894
msgid "cannot restore signal handler"
msgstr "no se puede restablecer el manejador de señales"

#: sys-utils/lscpu.c:1468
msgid "Failed to extract the node number"
msgstr "No se ha podido extraer el número de nodo"

#: sys-utils/lscpu.c:1599 sys-utils/lscpu.c:1609
msgid "Y"
msgstr "S"

#: sys-utils/lscpu.c:1599 sys-utils/lscpu.c:1609
msgid "N"
msgstr "N"

#: sys-utils/lscpu.c:1817
#, c-format
msgid ""
"# The following is the parsable format, which can be fed to other\n"
"# programs. Each different item in every column has an unique ID\n"
"# starting from zero.\n"
msgstr ""
"# Este es el formato analizable, el cual puede pasarse a otros\n"
"# programas. Cada elemento diferente en cada una de las columnas\n"
"# tiene un ID único que comienza en cero.\n"

#: sys-utils/lscpu.c:2046
msgid "Architecture:"
msgstr "Arquitectura:"

#: sys-utils/lscpu.c:2059
msgid "CPU op-mode(s):"
msgstr "modo(s) de operación de las CPUs:"

#: sys-utils/lscpu.c:2062 sys-utils/lscpu.c:2064
msgid "Byte Order:"
msgstr "Orden de los bytes:"

#: sys-utils/lscpu.c:2068
msgid "Address sizes:"
msgstr "Tamaños de las direcciones:"

#: sys-utils/lscpu.c:2070
msgid "CPU(s):"
msgstr "CPU(s):"

#: sys-utils/lscpu.c:2073
msgid "On-line CPU(s) mask:"
msgstr "Máscara de la(s) CPU(s) en línea:"

#: sys-utils/lscpu.c:2074
msgid "On-line CPU(s) list:"
msgstr "Lista de la(s) CPU(s) en línea:"

#: sys-utils/lscpu.c:2086
msgid "failed to callocate cpu set"
msgstr "fallo de callocate sobre el conjunto de CPUs"

#: sys-utils/lscpu.c:2093
msgid "Off-line CPU(s) mask:"
msgstr "Máscara de la(s) CPU(s) fuera de línea"

#: sys-utils/lscpu.c:2094
msgid "Off-line CPU(s) list:"
msgstr "Lista de la(s) CPU(s) fuera de línea"

#: sys-utils/lscpu.c:2129
msgid "Thread(s) per core:"
msgstr "Hilo(s) de procesamiento por núcleo:"

#: sys-utils/lscpu.c:2131
msgid "Core(s) per socket:"
msgstr "Núcleo(s) por «socket»:"

#: sys-utils/lscpu.c:2134
msgid "Socket(s) per book:"
msgstr "«Socket(s)» por libro:"

#: sys-utils/lscpu.c:2137
msgid "Book(s) per drawer:"
msgstr "Libro(s) por cajón:"

#: sys-utils/lscpu.c:2139
msgid "Drawer(s):"
msgstr "Cajón(es):"

#: sys-utils/lscpu.c:2141
msgid "Book(s):"
msgstr "Libro(s):"

#: sys-utils/lscpu.c:2144
msgid "Socket(s):"
msgstr "«Socket(s)»"

#: sys-utils/lscpu.c:2148
msgid "NUMA node(s):"
msgstr "Modo(s) NUMA:"

#: sys-utils/lscpu.c:2150
msgid "Vendor ID:"
msgstr "ID de fabricante:"

#: sys-utils/lscpu.c:2152
msgid "Machine type:"
msgstr "Tipo de máquina:"

#: sys-utils/lscpu.c:2154
msgid "CPU family:"
msgstr "Familia de CPU:"

#: sys-utils/lscpu.c:2156
msgid "Model:"
msgstr "Modelo:"

#: sys-utils/lscpu.c:2158
msgid "Model name:"
msgstr "Nombre del modelo:"

#: sys-utils/lscpu.c:2160
msgid "Stepping:"
msgstr "Revisión:"

#: sys-utils/lscpu.c:2162
msgid "Frequency boost:"
msgstr "Aumento de frecuencia:"

#: sys-utils/lscpu.c:2163
msgid "enabled"
msgstr "activada"

#: sys-utils/lscpu.c:2163
msgid "disabled"
msgstr "desactivada"

#: sys-utils/lscpu.c:2165
msgid "CPU MHz:"
msgstr "CPU MHz:"

#: sys-utils/lscpu.c:2167
msgid "CPU dynamic MHz:"
msgstr "CPU MHz dinámicos:"

#: sys-utils/lscpu.c:2169
msgid "CPU static MHz:"
msgstr "CPU MHz estáticos:"

#: sys-utils/lscpu.c:2171
msgid "CPU max MHz:"
msgstr "CPU MHz máx.:"

#: sys-utils/lscpu.c:2173
msgid "CPU min MHz:"
msgstr "CPU MHz mín.:"

#: sys-utils/lscpu.c:2175
msgid "BogoMIPS:"
msgstr "BogoMIPS:"

#: sys-utils/lscpu.c:2178 sys-utils/lscpu.c:2180
msgid "Virtualization:"
msgstr "Virtualización:"

#: sys-utils/lscpu.c:2183
msgid "Hypervisor:"
msgstr "Hipervisor:"

#: sys-utils/lscpu.c:2185
msgid "Hypervisor vendor:"
msgstr "Fabricante del hipervisor:"

#: sys-utils/lscpu.c:2186
msgid "Virtualization type:"
msgstr "Tipo de virtualización:"

#: sys-utils/lscpu.c:2189
msgid "Dispatching mode:"
msgstr "Modo de distribución:"

#: sys-utils/lscpu.c:2206 sys-utils/lscpu.c:2224
#, c-format
msgid "%s cache:"
msgstr "Caché %s:"

#: sys-utils/lscpu.c:2231
#, c-format
msgid "NUMA node%d CPU(s):"
msgstr "CPU(s) del nodo NUMA %d:"

#: sys-utils/lscpu.c:2236
msgid "Physical sockets:"
msgstr "«Sockets» físicos:"

#: sys-utils/lscpu.c:2237
msgid "Physical chips:"
msgstr "Chips físicos:"

#: sys-utils/lscpu.c:2238
msgid "Physical cores/chip:"
msgstr "Núcleos/chips físicos:"

#: sys-utils/lscpu.c:2249
msgid "Flags:"
msgstr "Indicadores:"

#: sys-utils/lscpu.c:2264
msgid "Display information about the CPU architecture.\n"
msgstr "Muestra información sobre la arquitectura de la CPU.\n"

#: sys-utils/lscpu.c:2267
msgid " -a, --all               print both online and offline CPUs (default for -e)\n"
msgstr " -a, --all               imprime tanto las CPUs en línea como fuera de línea (lo predeterminado para -e)\n"

#: sys-utils/lscpu.c:2268
msgid " -b, --online            print online CPUs only (default for -p)\n"
msgstr " -b, --online            imprime solo las CPUs en línea (lo predeterminado para -p)\n"

#: sys-utils/lscpu.c:2269
msgid " -B, --bytes             print sizes in bytes rather than in human readable format\n"
msgstr " -B, --bytes             imprime los tamaños en bytes en lugar de formato legible para humanos\n"

#: sys-utils/lscpu.c:2270
msgid " -C, --caches[=<list>]   info about caches in extended readable format\n"
msgstr " -C, --caches[=<lista>]  información sobre las cachés en formato legible extendido\n"

#: sys-utils/lscpu.c:2271
msgid " -c, --offline           print offline CPUs only\n"
msgstr " -c, --offline           imprime solo las CPUs fuera de línea\n"

#: sys-utils/lscpu.c:2272
msgid " -J, --json              use JSON for default or extended format\n"
msgstr " -J, --json              utiliza JSON como formato predeterminado o extendido\n"

#: sys-utils/lscpu.c:2273
msgid " -e, --extended[=<list>] print out an extended readable format\n"
msgstr " -e, --extended[=<lista>] imprime en formato legible extendido\n"

#: sys-utils/lscpu.c:2274
msgid " -p, --parse[=<list>]    print out a parsable format\n"
msgstr " -p, --parse[=<lista>]   imprime en formato analizable\n"

#: sys-utils/lscpu.c:2275
msgid " -s, --sysroot <dir>     use specified directory as system root\n"
msgstr " -s, --sysroot <dir>     utiliza como raíz del sistema el directorio especificado\n"

#: sys-utils/lscpu.c:2276
msgid " -x, --hex               print hexadecimal masks rather than lists of CPUs\n"
msgstr " -x, --hex               imprime máscaras hexadecimales en lugar de listas de CPUs\n"

#: sys-utils/lscpu.c:2277
msgid " -y, --physical          print physical instead of logical IDs\n"
msgstr " -y, --physical          imprime IDs físicos en vez de lógicos\n"

#: sys-utils/lscpu.c:2278
msgid "     --output-all        print all available columns for -e, -p or -C\n"
msgstr "     --output-all        imprime todas las columnas disponibles para -e, -p o -C\n"

#: sys-utils/lscpu.c:2282
msgid ""
"\n"
"Available output columns for -e or -p:\n"
msgstr ""
"\n"
"Columnas de salida disponibles para -e o -p:\n"

#: sys-utils/lscpu.c:2286
msgid ""
"\n"
"Available output columns for -C:\n"
msgstr ""
"\n"
"Columnas de salida disponibles para -C:\n"

#: sys-utils/lscpu.c:2419
#, c-format
msgid "%s: options --all, --online and --offline may only be used with options --extended or --parse.\n"
msgstr "%s: las opciones --all, --online y --offline solo pueden utilizarse con las opciones --extended o --parse.\n"

#: sys-utils/lscpu.c:2441
msgid "failed to initialize CPUs sysfs handler"
msgstr "fallo al inicializar el manejador de sysfs de las CPUs"

#: sys-utils/lscpu.c:2448
msgid "failed to initialize procfs handler"
msgstr "fallo al inicializar el manejador de procfs"

#: sys-utils/lsipc.c:149
msgid "Resource key"
msgstr "Clave del recurso"

#: sys-utils/lsipc.c:149
msgid "Key"
msgstr "Clave"

#: sys-utils/lsipc.c:150
msgid "Resource ID"
msgstr "ID del recurso"

#: sys-utils/lsipc.c:150
msgid "ID"
msgstr "ID"

#: sys-utils/lsipc.c:151
msgid "Owner's username or UID"
msgstr "Nombre de usuario o UID del propietario"

#: sys-utils/lsipc.c:151
msgid "Owner"
msgstr "Propietario"

#: sys-utils/lsipc.c:152
msgid "Permissions"
msgstr "Permisos"

#: sys-utils/lsipc.c:153
msgid "Creator UID"
msgstr "UID del creador"

#: sys-utils/lsipc.c:154
msgid "Creator user"
msgstr "Usario del creador"

#: sys-utils/lsipc.c:155
msgid "Creator GID"
msgstr "GID del creador"

#: sys-utils/lsipc.c:156
msgid "Creator group"
msgstr "Grupo del creador"

#: sys-utils/lsipc.c:157
msgid "User ID"
msgstr "ID del usuario"

#: sys-utils/lsipc.c:157
msgid "UID"
msgstr "UID"

#: sys-utils/lsipc.c:158
msgid "User name"
msgstr "Nombre del usuario"

#: sys-utils/lsipc.c:159
msgid "Group ID"
msgstr "ID del grupo"

#: sys-utils/lsipc.c:159
msgid "GID"
msgstr "GID"

#: sys-utils/lsipc.c:160
msgid "Group name"
msgstr "Nombre del grupo"

#: sys-utils/lsipc.c:161
msgid "Time of the last change"
msgstr "Hora de la última modificación"

#: sys-utils/lsipc.c:161
msgid "Last change"
msgstr "Última modificación"

#: sys-utils/lsipc.c:164
msgid "Bytes used"
msgstr "Bytes en uso"

#: sys-utils/lsipc.c:165
msgid "Number of messages"
msgstr "Número de mensajes"

#: sys-utils/lsipc.c:165
msgid "Messages"
msgstr "Mensajes"

#: sys-utils/lsipc.c:166
msgid "Time of last msg sent"
msgstr "Hora del último mensaje enviado"

#: sys-utils/lsipc.c:166
msgid "Msg sent"
msgstr "Mensajes enviados"

#: sys-utils/lsipc.c:167
msgid "Time of last msg received"
msgstr "Hora del último mensaje recibido"

#: sys-utils/lsipc.c:167
msgid "Msg received"
msgstr "Mensajes recibidos"

#: sys-utils/lsipc.c:168
msgid "PID of the last msg sender"
msgstr "PID del emisor del último mensaje"

#: sys-utils/lsipc.c:168
msgid "Msg sender"
msgstr "Emisor del mensaje"

#: sys-utils/lsipc.c:169
msgid "PID of the last msg receiver"
msgstr "PID del receptor del último mensaje"

#: sys-utils/lsipc.c:169
msgid "Msg receiver"
msgstr "Receptor del mensaje"

#: sys-utils/lsipc.c:172
msgid "Segment size"
msgstr "Tamaño del segmento"

#: sys-utils/lsipc.c:173
msgid "Number of attached processes"
msgstr "Número de procesos conectados"

#: sys-utils/lsipc.c:173
msgid "Attached processes"
msgstr "Procesos conectados"

#: sys-utils/lsipc.c:174
msgid "Status"
msgstr "Estado"

#: sys-utils/lsipc.c:175
msgid "Attach time"
msgstr "Hora de conexión"

#: sys-utils/lsipc.c:176
msgid "Detach time"
msgstr "Hora de desconexión"

#: sys-utils/lsipc.c:177
msgid "Creator command line"
msgstr "Línea de órdenes del creador"

#: sys-utils/lsipc.c:177
msgid "Creator command"
msgstr "Orden del creador"

#: sys-utils/lsipc.c:178
msgid "PID of the creator"
msgstr "PID del creador"

#: sys-utils/lsipc.c:178
msgid "Creator PID"
msgstr "PID del creador"

#: sys-utils/lsipc.c:179
msgid "PID of last user"
msgstr "PID del último usuario"

#: sys-utils/lsipc.c:179
msgid "Last user PID"
msgstr "PID del último usuario"

#: sys-utils/lsipc.c:182
msgid "Number of semaphores"
msgstr "Número de semáforos"

#: sys-utils/lsipc.c:182
msgid "Semaphores"
msgstr "Semáforos"

#: sys-utils/lsipc.c:183
msgid "Time of the last operation"
msgstr "Hora de la última operación"

#: sys-utils/lsipc.c:183
msgid "Last operation"
msgstr "Última operación"

#: sys-utils/lsipc.c:186
msgid "Resource name"
msgstr "Nombre del recurso"

#: sys-utils/lsipc.c:186
msgid "Resource"
msgstr "Recurso"

#: sys-utils/lsipc.c:187
msgid "Resource description"
msgstr "Descripción del recurso"

#: sys-utils/lsipc.c:187
msgid "Description"
msgstr "Descripción"

#: sys-utils/lsipc.c:188
msgid "Currently used"
msgstr "Utilizado actualmente"

#: sys-utils/lsipc.c:188
msgid "Used"
msgstr "Utilizado"

#: sys-utils/lsipc.c:189
msgid "Currently use percentage"
msgstr "Porcentaje de uso actual"

#: sys-utils/lsipc.c:189
msgid "Use"
msgstr "Uso"

#: sys-utils/lsipc.c:190
msgid "System-wide limit"
msgstr "Límite global del sistema"

#: sys-utils/lsipc.c:190
msgid "Limit"
msgstr "Límite"

#: sys-utils/lsipc.c:225
#, c-format
msgid "column %s does not apply to the specified IPC"
msgstr "la columna %s no es aplicable al IPC especificado"

#: sys-utils/lsipc.c:301
msgid " -g, --global      info about system-wide usage (may be used with -m, -q and -s)\n"
msgstr " -g, --global      información sobre el uso global del sistema (puede combinarse con -m, -q y -s)\n"

#: sys-utils/lsipc.c:302
msgid " -i, --id <id>     print details on resource identified by <id>\n"
msgstr " -i, --id <id>     imprime información detallada sobre los recursos identificados por <id>\n"

#: sys-utils/lsipc.c:308
msgid " -b, --bytes              print SIZE in bytes rather than in human readable format\n"
msgstr " -b, --btyes              muestra el TAMAÑO en bytes en lugar de hacerlo en formato legible para humanos\n"

#: sys-utils/lsipc.c:309
msgid " -c, --creator            show creator and owner\n"
msgstr " -c, --creator            muestra el creador y el propietario\n"

#: sys-utils/lsipc.c:311
msgid " -J, --json               use the JSON output format\n"
msgstr " -J , --json              utiliza el formato de salida JSON\n"

#: sys-utils/lsipc.c:313
msgid " -l, --list               force list output format (for example with --id)\n"
msgstr " -l, --list               fuerza la salida con formato de lista (por ejemplo, con --id)\n"

#: sys-utils/lsipc.c:315
msgid " -P, --numeric-perms      print numeric permissions (PERMS column)\n"
msgstr " -P, --numeric-perms      imprime los permisos numéricos (columna PERMS)\n"

#: sys-utils/lsipc.c:317
msgid " -t, --time               show attach, detach and change times\n"
msgstr " -t, --time               muestra las horas de conexión, desconexión y cambio\n"

#: sys-utils/lsipc.c:322
#, c-format
msgid ""
"\n"
"Generic columns:\n"
msgstr ""
"\n"
"Columnas genéricas:\n"

#: sys-utils/lsipc.c:326
#, c-format
msgid ""
"\n"
"Shared-memory columns (--shmems):\n"
msgstr ""
"\n"
"Columnas de memoria compartida (--shmems):\n"

#: sys-utils/lsipc.c:330
#, c-format
msgid ""
"\n"
"Message-queue columns (--queues):\n"
msgstr ""
"\n"
"Columnas de colas de mensajes (--queues):\n"

#: sys-utils/lsipc.c:334
#, c-format
msgid ""
"\n"
"Semaphore columns (--semaphores):\n"
msgstr ""
"\n"
"Columnas de semáforos (--semaphores):\n"

#: sys-utils/lsipc.c:338
#, c-format
msgid ""
"\n"
"Summary columns (--global):\n"
msgstr ""
"\n"
"Columnas resumen (--global):\n"

#: sys-utils/lsipc.c:424
#, c-format
msgid ""
"Elements:\n"
"\n"
msgstr ""
"Elementos:\n"
"\n"

#: sys-utils/lsipc.c:697 sys-utils/lsipc.c:858 sys-utils/lsipc.c:1057
msgid "failed to set data"
msgstr "no se han podido poner los datos"

#: sys-utils/lsipc.c:722
msgid "Number of semaphore identifiers"
msgstr "Número de identificadores de semáforos"

#: sys-utils/lsipc.c:723
msgid "Total number of semaphores"
msgstr "Número total de semáforos"

#: sys-utils/lsipc.c:724
msgid "Max semaphores per semaphore set."
msgstr "Máx. semáforos en un conjunto de semáforos."

#: sys-utils/lsipc.c:725
msgid "Max number of operations per semop(2)"
msgstr "Número máx. de operaciones por semop(2)"

#: sys-utils/lsipc.c:726
msgid "Semaphore max value"
msgstr "Valor máx. semáforo"

#: sys-utils/lsipc.c:883
msgid "Number of message queues"
msgstr "Número de colas de mensajes"

#: sys-utils/lsipc.c:884
msgid "Max size of message (bytes)"
msgstr "Tamaño máx. de mensaje (bytes)"

#: sys-utils/lsipc.c:885
msgid "Default max size of queue (bytes)"
msgstr "Tamaño máx. predeterminado de cola (bytes)"

#: sys-utils/lsipc.c:999 sys-utils/lsipc.c:1018
msgid "hugetlb"
msgstr "tablas de páginas gigantes"

#: sys-utils/lsipc.c:1000 sys-utils/lsipc.c:1025
msgid "noreserve"
msgstr "no reservado"

#: sys-utils/lsipc.c:1082
msgid "Shared memory segments"
msgstr "Segmentos de memoria compartida"

#: sys-utils/lsipc.c:1083
msgid "Shared memory pages"
msgstr "Paginas de memoria compartida"

#: sys-utils/lsipc.c:1084
msgid "Max size of shared memory segment (bytes)"
msgstr "Tamaño máx. de segmento de memoria compartida (bytes)"

#: sys-utils/lsipc.c:1085
msgid "Min size of shared memory segment (bytes)"
msgstr "Tamaño mín. de segmento de memoria compartida (bytes)"

#: sys-utils/lsipc.c:1155
msgid "failed to parse IPC identifier"
msgstr "fallo al analizar el identificador de IPC"

#: sys-utils/lsipc.c:1249
msgid "--global is mutually exclusive with --creator, --id and --time"
msgstr "--global es mutuamente excluyente con --creator, --id y --time"

#: sys-utils/lsirq.c:60
#, fuzzy
msgid "Utility to display kernel interrupt information."
msgstr "Muestra información sobre el perfil del núcleo.\n"

#: sys-utils/lsmem.c:126
msgid "start and end address of the memory range"
msgstr "direcciones de comienzo y de fin del rango de memoria"

#: sys-utils/lsmem.c:127
msgid "size of the memory range"
msgstr "tamaño del rango de memoria"

#: sys-utils/lsmem.c:128
msgid "online status of the memory range"
msgstr "estado en línea del rango de memoria"

#: sys-utils/lsmem.c:129
msgid "memory is removable"
msgstr "la memoria es desmontable"

#: sys-utils/lsmem.c:130
msgid "memory block number or blocks range"
msgstr "número de bloque o rango de bloques de memoria"

#: sys-utils/lsmem.c:131
msgid "numa node of memory"
msgstr "nodo de memoria numa"

#: sys-utils/lsmem.c:132
msgid "valid zones for the memory range"
msgstr "zonas válidas del rango de memoria"

#: sys-utils/lsmem.c:259
msgid "online"
msgstr "en línea"

#: sys-utils/lsmem.c:260
msgid "offline"
msgstr "fuera de línea"

#: sys-utils/lsmem.c:261
msgid "on->off"
msgstr "on->off"

#: sys-utils/lsmem.c:315 sys-utils/lsmem.c:322
msgid "Memory block size:"
msgstr "Tamaño del bloque de memoria:"

#: sys-utils/lsmem.c:316 sys-utils/lsmem.c:326
msgid "Total online memory:"
msgstr "Memoria total en línea:"

#: sys-utils/lsmem.c:317 sys-utils/lsmem.c:330
msgid "Total offline memory:"
msgstr "Memoria total fuera de línea:"

#: sys-utils/lsmem.c:343
#, c-format
msgid "Failed to open %s"
msgstr "No se ha podido abrir %s"

#: sys-utils/lsmem.c:453
msgid "failed to read memory block size"
msgstr "fallo al leer el tamaño de bloque de memoria"

#: sys-utils/lsmem.c:484
msgid "This system does not support memory blocks"
msgstr "Este sistema no admite bloques de memoria"

#: sys-utils/lsmem.c:509
msgid "List the ranges of available memory with their online status.\n"
msgstr "Enumera los rangos de memoria disponible con su estado en línea.\n"

#: sys-utils/lsmem.c:514
msgid " -a, --all            list each individual memory block\n"
msgstr " -a, --all            enumera cada bloque de memoria individual\n"

#: sys-utils/lsmem.c:520
msgid " -S, --split <list>   split ranges by specified columns\n"
msgstr " -S, --split <lista>  divide los rangos por columnas especificadas\n"

#: sys-utils/lsmem.c:521
msgid " -s, --sysroot <dir>  use the specified directory as system root\n"
msgstr " -s, --sysroot <dir>  utiliza como raíz del sistema el directorio especificado\n"

#: sys-utils/lsmem.c:522
msgid "     --summary[=when] print summary information (never,always or only)\n"
msgstr "     --summary(=cuándo) imprime un resumen informativo (never, always o only)\n"

#: sys-utils/lsmem.c:628
msgid "unsupported --summary argument"
msgstr "argumento de --summary no admitido"

#: sys-utils/lsmem.c:648
msgid "options --{raw,json,pairs} and --summary=only are mutually exclusive"
msgstr "las opciones --{raw,json,pairs} y --summary=only son mutuamente excluyentes"

#: sys-utils/lsmem.c:656
msgid "invalid argument to --sysroot"
msgstr "argumento no válido para --sysroot"

#: sys-utils/lsmem.c:704
msgid "Failed to initialize output column"
msgstr "No se ha podido inicializar la columna de salida"

#: sys-utils/lsns.c:99
msgid "namespace identifier (inode number)"
msgstr "identificador del espacio de nombres (número de nodo-i)"

#: sys-utils/lsns.c:100
msgid "kind of namespace"
msgstr "clase de espacio de nombres"

#: sys-utils/lsns.c:101
msgid "path to the namespace"
msgstr "ruta del espacio de nombres"

#: sys-utils/lsns.c:102
msgid "number of processes in the namespace"
msgstr "número de procesos en el espacio de nombres"

#: sys-utils/lsns.c:103
msgid "lowest PID in the namespace"
msgstr "PID más bajo en el espacio de nombres"

#: sys-utils/lsns.c:104
msgid "PPID of the PID"
msgstr "PPID del PID"

#: sys-utils/lsns.c:105
msgid "command line of the PID"
msgstr "línea de órdenes del PID"

#: sys-utils/lsns.c:106
msgid "UID of the PID"
msgstr "UID del PID"

#: sys-utils/lsns.c:107
msgid "username of the PID"
msgstr "nombre de usuario del PID"

#: sys-utils/lsns.c:108
msgid "namespace ID as used by network subsystem"
msgstr "ID del espacio de nombres tal y como se usa en el subsistema de red"

#: sys-utils/lsns.c:109
msgid "nsfs mountpoint (usually used network subsystem)"
msgstr "punto de montaje de nsfs (normalmente utilizado subsistema de red)"

#: sys-utils/lsns.c:899
#, c-format
msgid " %s [options] [<namespace>]\n"
msgstr " %s [opciones] [<espacio de nombres>]\n"

#: sys-utils/lsns.c:902
msgid "List system namespaces.\n"
msgstr "Enumera los nombres de espacio del sistema.\n"

#: sys-utils/lsns.c:910
msgid " -p, --task <pid>       print process namespaces\n"
msgstr " -p, --task <pid>       imprime los espacios de nombres del proceso\n"

#: sys-utils/lsns.c:913
msgid " -W, --nowrap           don't use multi-line representation\n"
msgstr " -W, --nowrap           no utiliza representación multilínea\n"

#: sys-utils/lsns.c:914
msgid " -t, --type <name>      namespace type (mnt, net, ipc, user, pid, uts, cgroup, time)\n"
msgstr " -t, --type <nombre>    tipo de espacio de nombres (mnt, net, ipc, user, pid, uts, cgroup, time)\n"

#: sys-utils/lsns.c:1008
#, c-format
msgid "unknown namespace type: %s"
msgstr "tipo de espacio de nombres desconocido: '%s' "

#: sys-utils/lsns.c:1037
msgid "--task is mutually exclusive with <namespace>"
msgstr "--task es mutuamente excluyente con <espacio de nombres>"

#: sys-utils/lsns.c:1038
msgid "invalid namespace argument"
msgstr "argumento de espacio de nombres no válido"

#: sys-utils/lsns.c:1090
#, c-format
msgid "not found namespace: %ju"
msgstr "espacio de nombres no encontrado: %ju"

#: sys-utils/mount.c:65 sys-utils/umount.c:130
msgid "drop permissions failed."
msgstr "no se han podido quitar los permisos"

#: sys-utils/mount.c:78 sys-utils/umount.c:64
#, c-format
msgid "%s from %s (libmount %s"
msgstr "%s de %s (libmount %s"

#: sys-utils/mount.c:123
msgid "failed to read mtab"
msgstr "no se ha podido leer mtab"

#: sys-utils/mount.c:185 sys-utils/mount.c:252 sys-utils/umount.c:197
#, c-format
msgid "%-25s: ignored\n"
msgstr "%-25s: ignorado\n"

#: sys-utils/mount.c:186
#, c-format
msgid "%-25s: already mounted\n"
msgstr "%-25s ya está montado\n"

#: sys-utils/mount.c:293
#, c-format
msgid "%s: %s moved to %s.\n"
msgstr "%s: %s movido a %s.\n"

#: sys-utils/mount.c:295
#, c-format
msgid "%s: %s bound on %s.\n"
msgstr "%s: %s vinculada a %s.\n"

#: sys-utils/mount.c:298 sys-utils/mount.c:302
#, c-format
msgid "%s: %s mounted on %s.\n"
msgstr "%s: %s montado en %s.\n"

#: sys-utils/mount.c:300
#, c-format
msgid "%s: %s propagation flags changed.\n"
msgstr "%s: %s los indicadores de propagación han cambiado.\n"

#: sys-utils/mount.c:320
#, c-format
msgid ""
"mount: %s does not contain SELinux labels.\n"
"       You just mounted an file system that supports labels which does not\n"
"       contain labels, onto an SELinux box. It is likely that confined\n"
"       applications will generate AVC messages and not be allowed access to\n"
"       this file system.  For more details see restorecon(8) and mount(8).\n"
msgstr ""
"mount: %s no contiene etiquetas SELinux.\n"
"       Usted ha montado un sistema de ficheros que admite etiquetas que no\n"
"       contengan etiquetas, sobre una caja SELinux. Es probable que las aplicaciones\n"
"       confinadas en él generen mensajes AVC y no tengan permiso para acceder a\n"
"       este sistema de ficheros. Para más detalles, consulte restorecon(8) y mount(8).\n"

#: sys-utils/mount.c:378
#, c-format
msgid "%s: failed to parse"
msgstr "%s: fallo al analizar"

#: sys-utils/mount.c:418
#, c-format
msgid "unsupported option format: %s"
msgstr "formato de opción desconocido: %s"

#: sys-utils/mount.c:420
#, c-format
msgid "failed to append option '%s'"
msgstr "fallo al añadir la opción '%s'"

#: sys-utils/mount.c:438
#, c-format
msgid ""
" %1$s [-lhV]\n"
" %1$s -a [options]\n"
" %1$s [options] [--source] <source> | [--target] <directory>\n"
" %1$s [options] <source> <directory>\n"
" %1$s <operation> <mountpoint> [<target>]\n"
msgstr ""
" %1$s [-lhV]\n"
" %1$s -a [opciones]\n"
" %1$s [opciones] [--source] <fuente> | [--target] <directorio>\n"
" %1$s [opciones] <fuente> <directorio>\n"
" %1$s <operación> <puntodemontaje> [<destino>]\n"

#: sys-utils/mount.c:446
msgid "Mount a filesystem.\n"
msgstr "Monta un sistema de ficheros.\n"

#: sys-utils/mount.c:450
#, c-format
msgid ""
" -a, --all               mount all filesystems mentioned in fstab\n"
" -c, --no-canonicalize   don't canonicalize paths\n"
" -f, --fake              dry run; skip the mount(2) syscall\n"
" -F, --fork              fork off for each device (use with -a)\n"
" -T, --fstab <path>      alternative file to /etc/fstab\n"
msgstr ""
" -a, --all               monta todos los sistemas de ficheros mencionados en fstab\n"
" -c, --no-canonicalize   no canoniza las rutas\n"
" -f, --fake              hace una prueba; no realiza la llamada al sistema mount(2)\n"
" -F, --fork              se desdobla para cada dispositivo (utilícese con -a)\n"
" -T, --fstab <path>      fichero alternativo a /etc/fstab\n"

#: sys-utils/mount.c:456
#, c-format
msgid " -i, --internal-only     don't call the mount.<type> helpers\n"
msgstr " -i, --internal-only     no llama a los auxiliares mount.<tipo>\n"

#: sys-utils/mount.c:458
#, c-format
msgid " -l, --show-labels       show also filesystem labels\n"
msgstr " -l, --show-labels       muestra también las etiquetas de los sistemas de ficheros\n"

#: sys-utils/mount.c:460 sys-utils/umount.c:98
#, c-format
msgid " -n, --no-mtab           don't write to /etc/mtab\n"
msgstr " -n, --no-mtab           no escribe en /etc/mtab\n"

#: sys-utils/mount.c:462
#, c-format
msgid ""
"     --options-mode <mode>\n"
"                         what to do with options loaded from fstab\n"
"     --options-source <source>\n"
"                         mount options source\n"
"     --options-source-force\n"
"                         force use of options from fstab/mtab\n"
msgstr ""
"     --options-mode <modo>\n"
"                         qué hacer con las opciones cargadas de fstab\n"
"     --options-source <origen>\n"
"                         origen de las opciones de montaje\n"
"     --options-source-force\n"
"                         uso forzado de las opciones de fstab/mtab\n"

#: sys-utils/mount.c:469
#, c-format
msgid ""
" -o, --options <list>    comma-separated list of mount options\n"
" -O, --test-opts <list>  limit the set of filesystems (use with -a)\n"
" -r, --read-only         mount the filesystem read-only (same as -o ro)\n"
" -t, --types <list>      limit the set of filesystem types\n"
msgstr ""
" -o, --options <lista>   lista de opciones de montaje separadas por coma\n"
" -O, --test-opts <lista> limita el conjunto de sistemas de ficheros (utilícese con -a)\n"
" -r, --read-only         monta el sistema de ficheros para solo lectura (igual que -o ro)\n"
" -t, --types <lista>     limita el conjunto de tipos de sistemas de ficheros\n"

#: sys-utils/mount.c:474
#, c-format
msgid ""
"     --source <src>      explicitly specifies source (path, label, uuid)\n"
"     --target <target>   explicitly specifies mountpoint\n"
msgstr ""
"     --source <src>      especifica explícitamente la fuente (ruta, etiqueta, uuid)\n"
"     --target <dst>      especifica explícitamente el punto de montaje\n"

#: sys-utils/mount.c:477
#, c-format
msgid ""
"     --target-prefix <path>\n"
"                         specifies path use for all mountpoints\n"
msgstr ""
"     --target-prefix <ruta>\n"
"                         especifica la ruta para todos los puntos de montaje\n"

#: sys-utils/mount.c:480 sys-utils/umount.c:104
#, c-format
msgid " -v, --verbose           say what is being done\n"
msgstr " -v, --verbose           dice lo que se está haciendo\n"

#: sys-utils/mount.c:482
#, c-format
msgid " -w, --rw, --read-write  mount the filesystem read-write (default)\n"
msgstr " -w, --rw, --read-write  monta el sistema de ficheros para lectura y escritura (predeterminado)\n"

#: sys-utils/mount.c:484
#, c-format
msgid " -N, --namespace <ns>    perform mount in another namespace\n"
msgstr " -N, --namespace <en>    efectúa mount en otro espacio de nombres\n"

#: sys-utils/mount.c:490
#, fuzzy, c-format
msgid ""
"\n"
"Source:\n"
" -L, --label <label>     synonym for LABEL=<label>\n"
" -U, --uuid <uuid>       synonym for UUID=<uuid>\n"
" LABEL=<label>           specifies device by filesystem label\n"
" UUID=<uuid>             specifies device by filesystem UUID\n"
" PARTLABEL=<label>       specifies device by partition label\n"
" PARTUUID=<uuid>         specifies device by partition UUID\n"
" ID=<id>                 specifies device by udev hardware ID\n"
msgstr ""
"\n"
"Fuente:\n"
" -L, --label <etiqueta>  sinónimo de LABEL=<etiqueta>\n"
" -U, --uuid <uuid>       sinónimo de UUID=<uuid>\n"
" LABEL=<etiqueta>        especifica el dispositivo mediante la etiqueta del sistema de ficheros\n"
" UUID=<uuid>             especifica el dispositivo mediante el UUID del sistema de ficheros\n"
" PARTLABEL=<etiqueta>    especifica el dispositivo mediante la etiqueta de la partición\n"
" PARTUUID=<uuid>         especifica el dispositivo mediante el UUID de la partición\n"

#: sys-utils/mount.c:500
#, c-format
msgid ""
" <device>                specifies device by path\n"
" <directory>             mountpoint for bind mounts (see --bind/rbind)\n"
" <file>                  regular file for loopdev setup\n"
msgstr ""
" <dispositivo>           especifica el dispositivo mediante la ruta\n"
" <directorio>            punto de montaje para los montajes de «bind» (véase --bind/rbind)\n"
" <fichero>               fichero ordinario para configurar dispositivo de bucle\n"

#: sys-utils/mount.c:505
#, c-format
msgid ""
"\n"
"Operations:\n"
" -B, --bind              mount a subtree somewhere else (same as -o bind)\n"
" -M, --move              move a subtree to some other place\n"
" -R, --rbind             mount a subtree and all submounts somewhere else\n"
msgstr ""
"\n"
"Operaciones:\n"
" -B, --bind              monta un subárbol en algún otro sitio (igual que -o bind)\n"
" -M, --move              mueve un subárbol a algún otro sitio\n"
" -R, --rbind             monta un subárbol y todos los submontajes en algún otro sitio\n"

#: sys-utils/mount.c:510
#, c-format
msgid ""
" --make-shared           mark a subtree as shared\n"
" --make-slave            mark a subtree as slave\n"
" --make-private          mark a subtree as private\n"
" --make-unbindable       mark a subtree as unbindable\n"
msgstr ""
" --make-shared           marca un subárbol como compartido\n"
" --make-slave            marca un subárbol como esclavo\n"
" --make-private          marca un subárbol como privado\n"
" --make-unbindable       marca un subárbol como no vinculable\n"

#: sys-utils/mount.c:515
#, c-format
msgid ""
" --make-rshared          recursively mark a whole subtree as shared\n"
" --make-rslave           recursively mark a whole subtree as slave\n"
" --make-rprivate         recursively mark a whole subtree as private\n"
" --make-runbindable      recursively mark a whole subtree as unbindable\n"
msgstr ""
" --make-rshared          marca recursivamente un subárbol completo como compartido\n"
" --make-rslave           marca recursivamente un subárbol completo como esclavo\n"
" --make-rprivate         marca recursivamente un subárbol completo como privado\n"
" --make-runbindable      marca recursivamente un subárbol completo como no vinculable\n"

#: sys-utils/mount.c:666 sys-utils/umount.c:498
msgid "libmount context allocation failed"
msgstr "fallo en la asignación del contexto de libmount"

#: sys-utils/mount.c:728 sys-utils/umount.c:551
msgid "failed to set options pattern"
msgstr "no se ha podido establecer el patrón de las opciones"

#: sys-utils/mount.c:775 sys-utils/umount.c:568
#, c-format
msgid "failed to set target namespace to %s"
msgstr "no se ha podido establecer el espacio de nombres del destino a %s"

#: sys-utils/mount.c:941
msgid "source specified more than once"
msgstr "se ha especificado el origen más de una vez"

#: sys-utils/mountpoint.c:119
#, c-format
msgid ""
" %1$s [-qd] /path/to/directory\n"
" %1$s -x /dev/device\n"
msgstr ""
" %1$s [-qd] /ruta/a/directorio\n"
" %1$s -x /dev/dispositivo\n"

#: sys-utils/mountpoint.c:123
msgid "Check whether a directory or file is a mountpoint.\n"
msgstr "Comprueba si un directorio o un fichero es un punto de montaje.\n"

#: sys-utils/mountpoint.c:126
msgid ""
" -q, --quiet        quiet mode - don't print anything\n"
"     --nofollow     do not follow symlink\n"
" -d, --fs-devno     print maj:min device number of the filesystem\n"
" -x, --devno        print maj:min device number of the block device\n"
msgstr ""
" -q, --quiet        modo silencioso - no imprime nada\n"
"     --nofollow     no sigue enlace simbólico\n"
" -d, --fs-devno     imprime número de dispositivo mayor:menor del sistema de ficheros\n"
" -x, --devno        imprime número de dispositivo mayor:menor del dispositivo de bloques\n"

#: sys-utils/mountpoint.c:207
#, c-format
msgid "%s is not a mountpoint\n"
msgstr "%s no es un punto de montaje\n"

#: sys-utils/mountpoint.c:213
#, c-format
msgid "%s is a mountpoint\n"
msgstr "%s es un punto de montaje\n"

#: sys-utils/nsenter.c:74 sys-utils/setarch.c:99 sys-utils/unshare.c:305
#, c-format
msgid " %s [options] [<program> [<argument>...]]\n"
msgstr " %s [opciones] [<programa> [<argumento>...]]\n"

#: sys-utils/nsenter.c:78
msgid "Run a program with namespaces of other processes.\n"
msgstr "Ejecuta un programa con espacios de nombres de otros procesos.\n"

#: sys-utils/nsenter.c:81
msgid " -a, --all              enter all namespaces\n"
msgstr " -a, --all              introduce todos los espacios de nombres\n"

#: sys-utils/nsenter.c:82
msgid " -t, --target <pid>     target process to get namespaces from\n"
msgstr " -t, --target <pid>     proceso del que obtener los espacios de nombres\n"

#: sys-utils/nsenter.c:83
msgid " -m, --mount[=<file>]   enter mount namespace\n"
msgstr " -m, --mount[=<fichero>] introduce el espacio de nombres del montaje\n"

#: sys-utils/nsenter.c:84
msgid " -u, --uts[=<file>]     enter UTS namespace (hostname etc)\n"
msgstr " -u, --uts[=<fichero>]  introduce el espacio de nombres UTS (nombre de máquina, etc.)\n"

#: sys-utils/nsenter.c:85
msgid " -i, --ipc[=<file>]     enter System V IPC namespace\n"
msgstr " -i, --ipc[=<fichero>]  introduce el espacio de nombres del System V IPC\n"

#: sys-utils/nsenter.c:86
msgid " -n, --net[=<file>]     enter network namespace\n"
msgstr " -n, --net[=<fichero>]  introduce el espacio de nombres de red\n"

#: sys-utils/nsenter.c:87
msgid " -p, --pid[=<file>]     enter pid namespace\n"
msgstr " -p, --pid[=<fichero>]  introduce el espacio de nombres de pid\n"

#: sys-utils/nsenter.c:88
msgid " -C, --cgroup[=<file>]  enter cgroup namespace\n"
msgstr " -C, --cgroup[=<fichero>] introduce el espacio de nombres del cgroup\n"

#: sys-utils/nsenter.c:89
msgid " -U, --user[=<file>]    enter user namespace\n"
msgstr " -U, --user[=<fichero>] introduce el espacio de nombres de usuario\n"

#: sys-utils/nsenter.c:90
#, fuzzy
msgid " -T, --time[=<file>]    enter time namespace\n"
msgstr " -p, --pid[=<fichero>]  introduce el espacio de nombres de pid\n"

#: sys-utils/nsenter.c:91
msgid " -S, --setuid <uid>     set uid in entered namespace\n"
msgstr " -S, --setuid <uid>     establece el uid en el espacio de nombres introducido\n"

#: sys-utils/nsenter.c:92
msgid " -G, --setgid <gid>     set gid in entered namespace\n"
msgstr " -G, --setgid <gid>     establece el gid en el espacio de nombres introducido\n"

#: sys-utils/nsenter.c:93
msgid "     --preserve-credentials do not touch uids or gids\n"
msgstr "     --preserve-credentials no toca uids ni gids\n"

#: sys-utils/nsenter.c:94
msgid " -r, --root[=<dir>]     set the root directory\n"
msgstr " -r, --root[=<dir>]     establece el directorio raíz\n"

#: sys-utils/nsenter.c:95
msgid " -w, --wd[=<dir>]       set the working directory\n"
msgstr " -w, --wd[=<dir>]       establece el directorio de trabajo\n"

#: sys-utils/nsenter.c:96
msgid " -F, --no-fork          do not fork before exec'ing <program>\n"
msgstr " -F, --no-fork          no crea otro proceso antes de ejecutar <programa>\n"

#: sys-utils/nsenter.c:98
msgid " -Z, --follow-context   set SELinux context according to --target PID\n"
msgstr " -Z, --follow-context   establece contexto SELinux conforme a --target PID\n"

#: sys-utils/nsenter.c:123
#, c-format
msgid "neither filename nor target pid supplied for %s"
msgstr "no se ha proporcionado ni nombre de fichero ni pid para %s"

#: sys-utils/nsenter.c:313 sys-utils/unshare.c:473 sys-utils/unshare.c:510
msgid "failed to parse uid"
msgstr "no se ha podido analizar uid"

#: sys-utils/nsenter.c:317 sys-utils/unshare.c:477 sys-utils/unshare.c:514
msgid "failed to parse gid"
msgstr "no se ha podido analizar gid"

#: sys-utils/nsenter.c:357
msgid "no target PID specified for --follow-context"
msgstr "no se ha especificado PID objetivo para --follow-context"

#: sys-utils/nsenter.c:359
#, c-format
msgid "failed to get %d SELinux context"
msgstr "no se ha podido obtener el contexto SELinux de %d"

#: sys-utils/nsenter.c:362
#, c-format
msgid "failed to set exec context to '%s'"
msgstr "no se ha podido establecer el contexto de ejecución a '%s'"

#: sys-utils/nsenter.c:369
msgid "no target PID specified for --all"
msgstr "no se ha especificado PID objetivo para --all"

#: sys-utils/nsenter.c:433
#, c-format
msgid "reassociate to namespace '%s' failed"
msgstr "fallo al volver a asociar al espacio de nombres '%s'"

#: sys-utils/nsenter.c:449
msgid "cannot open current working directory"
msgstr "no se puede abrir el directorio de trabajo actual"

#: sys-utils/nsenter.c:456
msgid "change directory by root file descriptor failed"
msgstr "fallo al cambiar de directorio por descriptor de fichero de la raíz"

#: sys-utils/nsenter.c:459
msgid "chroot failed"
msgstr "chroot falló"

#: sys-utils/nsenter.c:469
msgid "change directory by working directory file descriptor failed"
msgstr "fallo al cambiar de directorio mediante el descriptor de fichero del directorio de trabajo"

#: sys-utils/nsenter.c:480 sys-utils/setpriv.c:1031 sys-utils/setpriv.c:1038
#: sys-utils/unshare.c:661
msgid "setgroups failed"
msgstr "setgroups() falló"

#: sys-utils/pivot_root.c:34
#, c-format
msgid " %s [options] new_root put_old\n"
msgstr " %s [opciones] nueva_raíz emplazamiento_antiguo\n"

#: sys-utils/pivot_root.c:38
msgid "Change the root filesystem.\n"
msgstr "Cambia el sistema de ficheros raíz.\n"

#: sys-utils/pivot_root.c:75
#, c-format
msgid "failed to change root from `%s' to `%s'"
msgstr "fallo al cambiar la raíz de `%s' a `%s'"

#: sys-utils/prlimit.c:75
msgid "address space limit"
msgstr "límite del espacio de direcciones"

#: sys-utils/prlimit.c:76
msgid "max core file size"
msgstr "tamaño máximo del fichero del núcleo"

#: sys-utils/prlimit.c:77
msgid "CPU time"
msgstr "tiempo de CPU"

#: sys-utils/prlimit.c:77
msgid "seconds"
msgstr "segundos"

#: sys-utils/prlimit.c:78
msgid "max data size"
msgstr "tamaño de datos máximo"

#: sys-utils/prlimit.c:79
msgid "max file size"
msgstr "tamaño de fichero máximo"

#: sys-utils/prlimit.c:80
msgid "max number of file locks held"
msgstr "número máx. de bloqueos de fichero mantenidos"

#: sys-utils/prlimit.c:80
msgid "locks"
msgstr "bloqueos"

#: sys-utils/prlimit.c:81
msgid "max locked-in-memory address space"
msgstr "máx. espacio de direcciones bloqueado en memoria"

#: sys-utils/prlimit.c:82
msgid "max bytes in POSIX mqueues"
msgstr "máx. de bytes en colas de mensajes POSIX"

#: sys-utils/prlimit.c:83
msgid "max nice prio allowed to raise"
msgstr "máx. prioridad «nice» permitida"

#: sys-utils/prlimit.c:84
msgid "max number of open files"
msgstr "número máx. de ficheros abiertos"

#: sys-utils/prlimit.c:84
msgid "files"
msgstr "ficheros"

#: sys-utils/prlimit.c:85
msgid "max number of processes"
msgstr "número máx. de procesos"

#: sys-utils/prlimit.c:85
msgid "processes"
msgstr "procesos"

#: sys-utils/prlimit.c:86
msgid "max resident set size"
msgstr "tamaño máximo de conjunto residente"

#: sys-utils/prlimit.c:87
msgid "max real-time priority"
msgstr "máx. prioridad de tiempo real"

#: sys-utils/prlimit.c:88
msgid "timeout for real-time tasks"
msgstr "tiempo límite para tareas de tiempo real"

#: sys-utils/prlimit.c:88
msgid "microsecs"
msgstr "microsegundos"

#: sys-utils/prlimit.c:89
msgid "max number of pending signals"
msgstr "número máx. de señales pendientes"

#: sys-utils/prlimit.c:89
msgid "signals"
msgstr "señales"

#: sys-utils/prlimit.c:90
msgid "max stack size"
msgstr "tamaño máx. de pila"

#: sys-utils/prlimit.c:123
msgid "resource name"
msgstr "nombre de recurso"

#: sys-utils/prlimit.c:124
msgid "resource description"
msgstr "descripción del recurso"

#: sys-utils/prlimit.c:125
msgid "soft limit"
msgstr "límite blando"

#: sys-utils/prlimit.c:126
msgid "hard limit (ceiling)"
msgstr "límite duro (techo)"

#: sys-utils/prlimit.c:127
msgid "units"
msgstr "unidades"

#: sys-utils/prlimit.c:162
#, c-format
msgid " %s [options] [-p PID]\n"
msgstr " %s [opciones] [-p PID]\n"

#: sys-utils/prlimit.c:164
#, c-format
msgid " %s [options] COMMAND\n"
msgstr " %s [opciones] ORDEN\n"

#: sys-utils/prlimit.c:167
msgid "Show or change the resource limits of a process.\n"
msgstr "Muestra o modifica los límites de recursos de un proceso.\n"

#: sys-utils/prlimit.c:169
msgid ""
"\n"
"General Options:\n"
msgstr ""
"\n"
"Opciones generales:\n"

#: sys-utils/prlimit.c:170
msgid ""
" -p, --pid <pid>        process id\n"
" -o, --output <list>    define which output columns to use\n"
"     --noheadings       don't print headings\n"
"     --raw              use the raw output format\n"
"     --verbose          verbose output\n"
msgstr ""
" -p, --pid <pid>        id del proceso\n"
" -o, --output <lista>   define las columnas que se usarán en la salida\n"
"     --noheadings       no imprime las cabeceras\n"
"     --raw              utiliza el formato de salida en bruto\n"
"     --verbose          salida con explicaciones\n"

#: sys-utils/prlimit.c:178
msgid ""
"\n"
"Resources Options:\n"
msgstr ""
"\n"
"Opciones de los recursos:\n"

#: sys-utils/prlimit.c:179
msgid ""
" -c, --core             maximum size of core files created\n"
" -d, --data             maximum size of a process's data segment\n"
" -e, --nice             maximum nice priority allowed to raise\n"
" -f, --fsize            maximum size of files written by the process\n"
" -i, --sigpending       maximum number of pending signals\n"
" -l, --memlock          maximum size a process may lock into memory\n"
" -m, --rss              maximum resident set size\n"
" -n, --nofile           maximum number of open files\n"
" -q, --msgqueue         maximum bytes in POSIX message queues\n"
" -r, --rtprio           maximum real-time scheduling priority\n"
" -s, --stack            maximum stack size\n"
" -t, --cpu              maximum amount of CPU time in seconds\n"
" -u, --nproc            maximum number of user processes\n"
" -v, --as               size of virtual memory\n"
" -x, --locks            maximum number of file locks\n"
" -y, --rttime           CPU time in microseconds a process scheduled\n"
"                        under real-time scheduling\n"
msgstr ""
" -c, --core             tamaño máximo de los ficheros «core» que se generen\n"
" -d, --data             tamaño máximo del segmento de datos de los procesos\n"
" -e, --nice             máxima prioridad «nice» que se permite elevar\n"
" -f, --fsize            tamaño máximo de los ficheros escritos por el proceso\n"
" -i, --sigpending       número máximo de señales pendientes\n"
" -l, --memlock          tamaño máximo que un proceso puede bloquear en la memoria\n"
" -m, --rss              tamaño máximo de conjunto residente\n"
" -n, --nofile           número máximo de ficheros abiertos\n"
" -q, --msgqueue         número máximo de bytes en colas de mensajes POSIX\n"
" -r, --rtprio           máxima prioridad de planificación en tiempo real\n"
" -s, --stack            tamaño máximo de pila\n"
" -t, --cpu              cantidad de tiempo de CPU máxima en segundos\n"
" -u, --nproc            número máximo de procesos de usuario\n"
" -v, --as               tamaño de la memoria virtual\n"
" -x, --locks            número máximo de bloqueos de fichero\n"
" -y, --rttime           tiempo de CPU en microsegundos planificado por un proceso\n"
"                        bajo planificación en tiempo real\n"

#: sys-utils/prlimit.c:243 sys-utils/prlimit.c:249 sys-utils/prlimit.c:365
#: sys-utils/prlimit.c:370
msgid "unlimited"
msgstr "ilimitado"

#: sys-utils/prlimit.c:331
#, c-format
msgid "failed to get old %s limit"
msgstr "error al obtener el límite %s antiguo"

#: sys-utils/prlimit.c:355
#, c-format
msgid "the soft limit %s cannot exceed the hard limit"
msgstr "el límite blando %s no puede superar al límite duro"

#: sys-utils/prlimit.c:362
#, c-format
msgid "New %s limit for pid %d: "
msgstr "Nuevo límite %s para el pid %d: "

#: sys-utils/prlimit.c:377
#, c-format
msgid "failed to set the %s resource limit"
msgstr "error al establecer el límite del recurso %s"

#: sys-utils/prlimit.c:378
#, c-format
msgid "failed to get the %s resource limit"
msgstr "error al obtener el límite del recurso %s"

#: sys-utils/prlimit.c:457
#, c-format
msgid "failed to parse %s limit"
msgstr "error al analizar el límite de %s"

#: sys-utils/prlimit.c:586
msgid "option --pid may be specified only once"
msgstr "la opción --pid solo puede especificarse una vez"

#: sys-utils/prlimit.c:615
msgid "options --pid and COMMAND are mutually exclusive"
msgstr "las opciones --pid y ORDEN son mutuamente excluyentes"

#: sys-utils/readprofile.c:107
msgid "Display kernel profiling information.\n"
msgstr "Muestra información sobre el perfil del núcleo.\n"

#: sys-utils/readprofile.c:111
#, c-format
msgid " -m, --mapfile <mapfile>   (defaults: \"%s\" and\n"
msgstr " -m, --mapfile <ficheromapa> (predefinido: \"%s\" y\n"

#: sys-utils/readprofile.c:113
#, c-format
msgid "                                      \"%s\")\n"
msgstr "                                      \"%s\")\n"

#: sys-utils/readprofile.c:115
#, c-format
msgid " -p, --profile <pro-file>  (default:  \"%s\")\n"
msgstr " -p, --profile <fichero-perfil> (predefinido: \"%s\")\n"

#: sys-utils/readprofile.c:116
msgid " -M, --multiplier <mult>   set the profiling multiplier to <mult>\n"
msgstr " -M, --multiplier <mult>   establece el multiplicador de perfil a <mult>\n"

#: sys-utils/readprofile.c:117
msgid " -i, --info                print only info about the sampling step\n"
msgstr " -i, --info                imprime solamente información sobre el paso de muestreo\n"

#: sys-utils/readprofile.c:118
msgid " -v, --verbose             print verbose data\n"
msgstr " -v, --verbose             imprime datos explicativos\n"

#: sys-utils/readprofile.c:119
msgid " -a, --all                 print all symbols, even if count is 0\n"
msgstr " -a, --all                 imprime todos los símbolos, incluso si la cuenta es 0\n"

#: sys-utils/readprofile.c:120
msgid " -b, --histbin             print individual histogram-bin counts\n"
msgstr " -b, --histbin             imprime cuentas individuales de histograma-bin\n"

#: sys-utils/readprofile.c:121
msgid " -s, --counters            print individual counters within functions\n"
msgstr " -s, --counters            imprime contadores individuales dentro de las funciones\n"

#: sys-utils/readprofile.c:122
msgid " -r, --reset               reset all the counters (root only)\n"
msgstr " -r, --reset               restablece todos los contadores (solo root)\n"

#: sys-utils/readprofile.c:123
msgid " -n, --no-auto             disable byte order auto-detection\n"
msgstr " -n, --no-auto             desactiva la detección automática del orden de los bytes\n"

#: sys-utils/readprofile.c:239
#, c-format
msgid "error writing %s"
msgstr "error al escribir %s"

#: sys-utils/readprofile.c:250
msgid "input file is empty"
msgstr "el fichero de entrada está vacío"

#: sys-utils/readprofile.c:272
msgid "Assuming reversed byte order. Use -n to force native byte order."
msgstr "Se asume orden de bytes invertido. Utilice -n para forzar el orden de bytes nativo."

#: sys-utils/readprofile.c:287
#, c-format
msgid "Sampling_step: %u\n"
msgstr "Paso de sondeo: %u\n"

#: sys-utils/readprofile.c:303 sys-utils/readprofile.c:324
#, c-format
msgid "%s(%i): wrong map line"
msgstr "%s(%i): línea de mapa incorrecta"

#: sys-utils/readprofile.c:314
#, c-format
msgid "can't find \"_stext\" in %s"
msgstr "no se puede encontrar \"_stext\" en %s"

#: sys-utils/readprofile.c:347
msgid "profile address out of range. Wrong map file?"
msgstr "dirección del perfil fuera de rango. ¿Fichero `map' incorrecto?"

#: sys-utils/readprofile.c:405
msgid "total"
msgstr "total"

#: sys-utils/renice.c:52
msgid "process ID"
msgstr "ID del proceso"

#: sys-utils/renice.c:53
msgid "process group ID"
msgstr "ID de grupo del proceso"

#: sys-utils/renice.c:62
#, c-format
msgid ""
" %1$s [-n] <priority> [-p|--pid] <pid>...\n"
" %1$s [-n] <priority>  -g|--pgrp <pgid>...\n"
" %1$s [-n] <priority>  -u|--user <user>...\n"
msgstr ""
" %1$s [-n] <prioridad> [-p|--pid] <pid>...\n"
" %1$s [-n] <prioridad>  -g|--pgrp <pgid>...\n"
" %1$s [-n] <prioridad>  -u|--user <usuario>...\n"

#: sys-utils/renice.c:68
msgid "Alter the priority of running processes.\n"
msgstr "Altera la prioridad de los procesos que están en ejecución.\n"

#: sys-utils/renice.c:71
msgid " -n, --priority <num>   specify the nice value\n"
msgstr " -n, --priority <num>   especifica el valor de «nice»\n"

#: sys-utils/renice.c:72
msgid " -p, --pid              interpret arguments as process ID (default)\n"
msgstr " -p, --pid              interpreta los argumentos como ID de proceso (opción predeterminada)\n"

#: sys-utils/renice.c:73
msgid " -g, --pgrp             interpret arguments as process group ID\n"
msgstr " -g, --pgrp             interpreta los argumentos como ID de grupo\n"

#: sys-utils/renice.c:74
msgid " -u, --user             interpret arguments as username or user ID\n"
msgstr " -u, --user             interpreta los argumentos como nombre o ID de usuario\n"

#: sys-utils/renice.c:86
#, c-format
msgid "failed to get priority for %d (%s)"
msgstr "no se ha podido obtener la prioridad de %d (%s)"

#: sys-utils/renice.c:99
#, c-format
msgid "failed to set priority for %d (%s)"
msgstr "no se ha podido establecer la prioridad de %d (%s)"

#: sys-utils/renice.c:104
#, c-format
msgid "%d (%s) old priority %d, new priority %d\n"
msgstr "%d (%s) prioridad anterior %d, nueva prioridad %d\n"

#: sys-utils/renice.c:150
#, c-format
msgid "invalid priority '%s'"
msgstr "prioridad no válida '%s'"

#: sys-utils/renice.c:177
#, c-format
msgid "unknown user %s"
msgstr "usuario desconocido %s"

#. TRANSLATORS: The first %s is one of the above
#. * three ID names. Read: "bad value for %s: %s"
#: sys-utils/renice.c:186
#, c-format
msgid "bad %s value: %s"
msgstr "valor incorrecto de %s: %s"

#: sys-utils/rfkill.c:128
msgid "kernel device name"
msgstr "nombre dispositivo del núcleo"

#: sys-utils/rfkill.c:129
msgid "device identifier value"
msgstr "valor del identificador de dispositivo"

#: sys-utils/rfkill.c:130
msgid "device type name that can be used as identifier"
msgstr "nombre de tipo de dispositivo que puede utilizarse como identificador"

#: sys-utils/rfkill.c:131
msgid "device type description"
msgstr "descripción del tipo de dispositivo"

#: sys-utils/rfkill.c:132
msgid "status of software block"
msgstr "estado del bloque de software"

#: sys-utils/rfkill.c:133
msgid "status of hardware block"
msgstr "estado del reloj de hardware"

#: sys-utils/rfkill.c:197
#, c-format
msgid "cannot set non-blocking %s"
msgstr "no se puede establecer %s no bloqueante"

#: sys-utils/rfkill.c:218
#, c-format
msgid "wrong size of rfkill event: %zu < %d"
msgstr "tamaño incorrecto e evento rfkill: %zu < %d"

#: sys-utils/rfkill.c:248
#, c-format
msgid "failed to poll %s"
msgstr "no se ha podido consultar %s"

#: sys-utils/rfkill.c:315
msgid "invalid identifier"
msgstr "identificador no válido"

#: sys-utils/rfkill.c:395 sys-utils/rfkill.c:398
msgid "blocked"
msgstr "bloqueado"

#: sys-utils/rfkill.c:395 sys-utils/rfkill.c:398
msgid "unblocked"
msgstr "desbloqueado"

#: sys-utils/rfkill.c:417 sys-utils/rfkill.c:489 sys-utils/rfkill.c:533
#, c-format
msgid "invalid identifier: %s"
msgstr "Identificador no válido: %s"

#: sys-utils/rfkill.c:575
#, c-format
msgid " %s [options] command [identifier ...]\n"
msgstr " %s [opciones] orden [identificador ...]\n"

#: sys-utils/rfkill.c:578
msgid "Tool for enabling and disabling wireless devices.\n"
msgstr "Herramienta para activar y desactivar dispositivos inhalámbricos.\n"

#. TRANSLATORS: command names should not be translated, explaining
#. them as additional field after identifier is fine, for example
#. *
#. list   [identifier]   (lista [tarkenne])
#.
#: sys-utils/rfkill.c:602
msgid " help\n"
msgstr " help\n"

#: sys-utils/rfkill.c:603
msgid " event\n"
msgstr " event\n"

#: sys-utils/rfkill.c:604
msgid " list   [identifier]\n"
msgstr " list   [identificador]\n"

#: sys-utils/rfkill.c:605
msgid " block   identifier\n"
msgstr " block   identificador\n"

#: sys-utils/rfkill.c:606
msgid " unblock identifier\n"
msgstr " unblock identificador\n"

#: sys-utils/rtcwake.c:102
msgid "Enter a system sleep state until a specified wakeup time.\n"
msgstr "Entra en estado de reposo del sistema hasta la hora de reanimación especificada.\n"

#: sys-utils/rtcwake.c:105
msgid " -a, --auto               reads the clock mode from adjust file (default)\n"
msgstr " -a, --auto               lee le modo del reloj en el fichero de ajuste (comportamiento predefinido)\n"

#: sys-utils/rtcwake.c:107
#, c-format
msgid ""
" -A, --adjfile <file>     specifies the path to the adjust file\n"
"                            the default is %s\n"
msgstr ""
" -A, --adjfile <fichero>  especifica la ruta al fichero de ajuste\n"
"                            la predefinida es %s\n"

#: sys-utils/rtcwake.c:109
msgid "     --date <timestamp>   date time of timestamp to wake\n"
msgstr "     --date <tiempo_t>    fecha y hora del estampado para despertar\n"

#: sys-utils/rtcwake.c:110
msgid " -d, --device <device>    select rtc device (rtc0|rtc1|...)\n"
msgstr " -d, --device <dispositivo> selecciona un dispositivo rtc (rtc0|rtc1|...)\n"

#: sys-utils/rtcwake.c:111
msgid " -n, --dry-run            does everything, but suspend\n"
msgstr " -n, --dry-run            hace todo excepto suspender\n"

#: sys-utils/rtcwake.c:112
msgid " -l, --local              RTC uses local timezone\n"
msgstr " -l, --local              RTC utiliza huso horario local\n"

#: sys-utils/rtcwake.c:113
msgid "     --list-modes         list available modes\n"
msgstr "     --list-modes         enumera los modos disponibles\n"

#: sys-utils/rtcwake.c:114
msgid " -m, --mode <mode>        standby|mem|... sleep mode\n"
msgstr " -m, --mode <modo>        modo de dormir standby|mem|...\n"

#: sys-utils/rtcwake.c:115
msgid " -s, --seconds <seconds>  seconds to sleep\n"
msgstr " -s, --seconds <segundos> segundos para empezar a dormir\n"

#: sys-utils/rtcwake.c:116
msgid " -t, --time <time_t>      time to wake\n"
msgstr " -t, --time <tiempo_t>    tiempo que falta para despertar\n"

#: sys-utils/rtcwake.c:117
msgid " -u, --utc                RTC uses UTC\n"
msgstr " -u, --utc                RTC utiliza UTC\n"

#: sys-utils/rtcwake.c:118
msgid " -v, --verbose            verbose messages\n"
msgstr " -v, --verbose            mensajes explicativos\n"

#: sys-utils/rtcwake.c:168
msgid "read rtc time failed"
msgstr "fallo al leer el tiempo rtc"

#: sys-utils/rtcwake.c:174
msgid "read system time failed"
msgstr "fallo al leer la hora del sistema"

#: sys-utils/rtcwake.c:190
msgid "convert rtc time failed"
msgstr "fallo al convertir tiempo rtc"

#: sys-utils/rtcwake.c:240
msgid "set rtc wake alarm failed"
msgstr "fallo al poner la alarma de despertar rtc"

#: sys-utils/rtcwake.c:280
msgid "discarding stdin"
msgstr "se descarta stdin"

#: sys-utils/rtcwake.c:331
#, c-format
msgid "unexpected third line in: %s: %s"
msgstr "tercera línea no esperada en: %s: %s"

#: sys-utils/rtcwake.c:345 sys-utils/rtcwake.c:673
msgid "read rtc alarm failed"
msgstr "fallo al leer la alarma rtc"

#: sys-utils/rtcwake.c:350
#, c-format
msgid "alarm: off\n"
msgstr "alarma: desactivada\n"

#: sys-utils/rtcwake.c:363
msgid "convert time failed"
msgstr "fallo al convertir la hora"

#: sys-utils/rtcwake.c:369
#, c-format
msgid "alarm: on  %s"
msgstr "alarma: activada  %s"

#: sys-utils/rtcwake.c:402
#, c-format
msgid "%s: unable to find device"
msgstr "%s: no se puede encontrar el dispositivo"

#: sys-utils/rtcwake.c:413
#, c-format
msgid "could not read: %s"
msgstr "no se ha podido leer: %s"

#: sys-utils/rtcwake.c:494
#, c-format
msgid "unrecognized suspend state '%s'"
msgstr "estado de suspensión desconocido '%s'"

#: sys-utils/rtcwake.c:502
msgid "invalid seconds argument"
msgstr "el argumento de los segundos no es válido"

#: sys-utils/rtcwake.c:506
msgid "invalid time argument"
msgstr "el argumento de la hora no es válido"

#: sys-utils/rtcwake.c:533
#, c-format
msgid "%s: assuming RTC uses UTC ...\n"
msgstr "%s: se asume que RTC utiliza UTC ...\n"

#: sys-utils/rtcwake.c:538
msgid "Using UTC time.\n"
msgstr "Utilizando tiempo UTC.\n"

#: sys-utils/rtcwake.c:539
msgid "Using local time.\n"
msgstr "Utilizando horario local.\n"

#: sys-utils/rtcwake.c:542
msgid "must provide wake time (see --seconds, --time and --date options)"
msgstr "debe proporcionar la hora de despertar (véanse las opciones --seconds, --time y --date)"

#: sys-utils/rtcwake.c:548
#, c-format
msgid "%s not enabled for wakeup events"
msgstr "%s no activado para eventos de despertar («wakeup»)"

#: sys-utils/rtcwake.c:555
#, c-format
msgid "alarm %ld, sys_time %ld, rtc_time %ld, seconds %u\n"
msgstr "alarma %ld, hora_sistema %ld, hora_rtc %ld, segundos %u\n"

#: sys-utils/rtcwake.c:565
#, c-format
msgid "time doesn't go backward to %s"
msgstr "la hora no va hacia atrás a %s"

#: sys-utils/rtcwake.c:578
#, c-format
msgid "%s: wakeup using %s at %s"
msgstr "%s: despierta utilizando %s a las %s"

#: sys-utils/rtcwake.c:584
#, c-format
msgid "%s: wakeup from \"%s\" using %s at %s"
msgstr "%s: despierta desde \"%s\" utilizando %s a las %s"

#: sys-utils/rtcwake.c:594
#, c-format
msgid "suspend mode: no; leaving\n"
msgstr "modo de suspensión: no hay; salir\n"

#: sys-utils/rtcwake.c:617
#, c-format
msgid "suspend mode: off; executing %s\n"
msgstr "modo de suspensión: apagado; ejecutando %s\n"

#: sys-utils/rtcwake.c:626
msgid "failed to find shutdown command"
msgstr "no se ha podido encontrar la orden de apagado"

#: sys-utils/rtcwake.c:636
#, c-format
msgid "suspend mode: on; reading rtc\n"
msgstr "modo de suspensión: encendido; leyendo rtc\n"

#: sys-utils/rtcwake.c:641
msgid "rtc read failed"
msgstr "fallo al leer rtc"

#: sys-utils/rtcwake.c:653
#, c-format
msgid "suspend mode: disable; disabling alarm\n"
msgstr "modo de suspensión: desactivar; desactivando alarma\n"

#: sys-utils/rtcwake.c:657
#, c-format
msgid "suspend mode: show; printing alarm info\n"
msgstr "modo de suspensión: mostrar; imprimiendo la información de la alarma\n"

#: sys-utils/rtcwake.c:664
#, c-format
msgid "suspend mode: %s; suspending system\n"
msgstr "modo de suspensión: %s; suspendiendo el sistema\n"

#: sys-utils/rtcwake.c:678
msgid "disable rtc alarm interrupt failed"
msgstr "fallo al desactivar la interrupción de la alarma del rtc"

#: sys-utils/setarch.c:48
#, c-format
msgid "Switching on %s.\n"
msgstr "Activando %s.\n"

#: sys-utils/setarch.c:97
#, c-format
msgid " %s [<arch>] [options] [<program> [<argument>...]]\n"
msgstr " %s [<arch>] [opciones] [<programa> [<argumento>...]]\n"

#: sys-utils/setarch.c:102
msgid "Change the reported architecture and set personality flags.\n"
msgstr "Modifica la información sobre la arquitectura y establece los indicadores de personalidad.\n"

#: sys-utils/setarch.c:105
msgid " -B, --32bit              turns on ADDR_LIMIT_32BIT\n"
msgstr " -B, --32bit              activa ADDR_LIMIT_32BIT\n"

#: sys-utils/setarch.c:106
msgid " -F, --fdpic-funcptrs     makes function pointers point to descriptors\n"
msgstr " -F, --fdpic-funcptrs     hace que los punteros a funciones apunten a descriptores\n"

#: sys-utils/setarch.c:107
msgid " -I, --short-inode        turns on SHORT_INODE\n"
msgstr " -I, --short-inode        activa SHORT_INODE\n"

#: sys-utils/setarch.c:108
msgid " -L, --addr-compat-layout changes the way virtual memory is allocated\n"
msgstr " -L, --addr-compat-layout cambia el modo de reservar la memoria virtual\n"

#: sys-utils/setarch.c:109
msgid " -R, --addr-no-randomize  disables randomization of the virtual address space\n"
msgstr " -R, --addr-no-randomize  desactiva la aleatorización del espacio de direcciones virtual\n"

#: sys-utils/setarch.c:110
msgid " -S, --whole-seconds      turns on WHOLE_SECONDS\n"
msgstr " -S, --whole-seconds      activa WHOLE_SECONDS\n"

#: sys-utils/setarch.c:111
msgid " -T, --sticky-timeouts    turns on STICKY_TIMEOUTS\n"
msgstr " -T, --sticky-timeouts    activa STICKY_TIMEOUTS\n"

#: sys-utils/setarch.c:112
msgid " -X, --read-implies-exec  turns on READ_IMPLIES_EXEC\n"
msgstr " -X, --read-implies-exec  activa READ_IMPLIES_EXEC\n"

#: sys-utils/setarch.c:113
msgid " -Z, --mmap-page-zero     turns on MMAP_PAGE_ZERO\n"
msgstr " -Z, --mmap-page-zero     activa MMAP_PAGE_ZERO\n"

#: sys-utils/setarch.c:114
msgid " -3, --3gb                limits the used address space to a maximum of 3 GB\n"
msgstr " -3, --3gb                limita el espacio de direcciones utilizado a un máximo de 3 GB\n"

#: sys-utils/setarch.c:115
msgid "     --4gb                ignored (for backward compatibility only)\n"
msgstr "     --4gb                no se tiene en cuenta (solo por compatibilidad hacia atrás)\n"

#: sys-utils/setarch.c:116
msgid "     --uname-2.6          turns on UNAME26\n"
msgstr "     --uname-2.6          activa UNAME26\n"

#: sys-utils/setarch.c:117
msgid " -v, --verbose            say what options are being switched on\n"
msgstr " -v, --verbose            dice qué opciones se están activando\n"

#: sys-utils/setarch.c:120
msgid "     --list               list settable architectures, and exit\n"
msgstr "     --list               enumera las arquitecturas configurables y termina\n"

#: sys-utils/setarch.c:293
#, c-format
msgid "Kernel cannot set architecture to %s"
msgstr "El núcleo no puede poner la arquitectura a %s"

#: sys-utils/setarch.c:342
msgid "Not enough arguments"
msgstr "No hay suficientes argumentos"

#: sys-utils/setarch.c:410
msgid "unrecognized option '--list'"
msgstr "opción '--list' no reconocida"

#: sys-utils/setarch.c:423
msgid "no architecture argument or personality flags specified"
msgstr "no se han especificado ni el argumento ni los indicadores de de la personalidad"

#: sys-utils/setarch.c:435
#, c-format
msgid "%s: Unrecognized architecture"
msgstr "%s: Arquitectura no reconocida"

#: sys-utils/setarch.c:453
#, c-format
msgid "failed to set personality to %s"
msgstr "no se ha podido establecer la personalidad a %s"

#: sys-utils/setarch.c:465
#, c-format
msgid "Execute command `%s'.\n"
msgstr "Ejecuta orden: `%s'.\n"

#: sys-utils/setpriv.c:119
#, c-format
msgid " %s [options] <program> [<argument>...]\n"
msgstr " %s [opciones] <programa> [<argumento>...]\n"

#: sys-utils/setpriv.c:123
msgid "Run a program with different privilege settings.\n"
msgstr "Ejecuta un programa con una configuración de privilegio diferente.\n"

#: sys-utils/setpriv.c:126
msgid " -d, --dump                  show current state (and do not exec)\n"
msgstr " -d, --dump                  muestra el estado actual (y no ejecuta)\n"

#: sys-utils/setpriv.c:127
msgid " --nnp, --no-new-privs       disallow granting new privileges\n"
msgstr " --nnp, --no-new-privs       impide otorgar nuevos privilegios\n"

#: sys-utils/setpriv.c:128
msgid " --ambient-caps <caps,...>   set ambient capabilities\n"
msgstr " --ambient-caps <caps,...>   establece capacidades de ambiente\n"

#: sys-utils/setpriv.c:129
msgid " --inh-caps <caps,...>       set inheritable capabilities\n"
msgstr " --inn-caps <caps,...>       establece capacidades heredables\n"

#: sys-utils/setpriv.c:130
msgid " --bounding-set <caps>       set capability bounding set\n"
msgstr " --bounding-set <caps>       establece el conjunto de capacidades posibles\n"

#: sys-utils/setpriv.c:131
msgid " --ruid <uid|user>           set real uid\n"
msgstr " --ruid <uid|usuario>        establece el uid real\n"

#: sys-utils/setpriv.c:132
msgid " --euid <uid|user>           set effective uid\n"
msgstr " --euid <uid|usuario>        establece el uid efectivo\n"

#: sys-utils/setpriv.c:133
msgid " --rgid <gid|user>           set real gid\n"
msgstr " --rgid <gid|usuario>        establece el gid real\n"

#: sys-utils/setpriv.c:134
msgid " --egid <gid|group>          set effective gid\n"
msgstr " --egid <gid|grupo>          establece el gid efectivo\n"

#: sys-utils/setpriv.c:135
msgid " --reuid <uid|user>          set real and effective uid\n"
msgstr " --reuid <uid|usuario>       establece el uid real y efectivo\n"

#: sys-utils/setpriv.c:136
msgid " --regid <gid|group>         set real and effective gid\n"
msgstr " --regid <gid|grupo>         establece el gid real y efectivo\n"

#: sys-utils/setpriv.c:137
msgid " --clear-groups              clear supplementary groups\n"
msgstr " --clear-groups              borra los grupos suplementarios\n"

#: sys-utils/setpriv.c:138
msgid " --keep-groups               keep supplementary groups\n"
msgstr " --keep-groups               mantiene los grupos suplementarios\n"

#: sys-utils/setpriv.c:139
msgid " --init-groups               initialize supplementary groups\n"
msgstr " --init-groups               inicializa los grupos suplementarios\n"

#: sys-utils/setpriv.c:140
msgid " --groups <group,...>        set supplementary groups by UID or name\n"
msgstr " --groups <grupo,...>        establece grupos suplementarios por medio de UID o nombre\n"

#: sys-utils/setpriv.c:141
msgid " --securebits <bits>         set securebits\n"
msgstr " --securebits <bits>         establece los bits de seguridad\n"

#: sys-utils/setpriv.c:142
msgid ""
" --pdeathsig keep|clear|<signame>\n"
"                             set or clear parent death signal\n"
msgstr ""
" --pdeathsig keep|clear|<nomseñal>\n"
"                             establece o retira la señal de muerte del padre\n"

#: sys-utils/setpriv.c:144
msgid " --selinux-label <label>     set SELinux label\n"
msgstr " --selinux-label <etiq.>     establece la etiqueta SELinux\n"

#: sys-utils/setpriv.c:145
msgid " --apparmor-profile <pr>     set AppArmor profile\n"
msgstr " --apparmor-profile <pr>     establece el perfil de AppArmor\n"

#: sys-utils/setpriv.c:146
msgid ""
" --reset-env                 clear all environment and initialize\n"
"                               HOME, SHELL, USER, LOGNAME and PATH\n"
msgstr ""
" --reset-env                 limpia todo el entorno e inicializa\n"
"                               HOME, SHELL, USER, LOGNAME y PATH\n"

#: sys-utils/setpriv.c:152
msgid " This tool can be dangerous.  Read the manpage, and be careful.\n"
msgstr " Esta herramienta puede ser peligrosa. Lea la página de manual, y tenga cuidado.\n"

#: sys-utils/setpriv.c:170
msgid "invalid capability type"
msgstr "tipo de capacidad incorrecto"

#: sys-utils/setpriv.c:222 sys-utils/setpriv.c:566
msgid "getting process secure bits failed"
msgstr "fallo al obtener los bits de seguridad del proceso"

#: sys-utils/setpriv.c:226
#, c-format
msgid "Securebits: "
msgstr "Bits de seguridad: "

# Masculino, porque se refiere a "Indicadores"
#: sys-utils/setpriv.c:246
#, c-format
msgid "[none]\n"
msgstr "[ninguno]\n"

#: sys-utils/setpriv.c:272
#, c-format
msgid "%s: too long"
msgstr "%s: demasiado largo"

#: sys-utils/setpriv.c:300
#, c-format
msgid "Supplementary groups: "
msgstr "Grupos suplementarios: "

# Masculino, porque se refiere a "Indicadores"
#: sys-utils/setpriv.c:302 sys-utils/setpriv.c:368 sys-utils/setpriv.c:373
#: sys-utils/setpriv.c:379 sys-utils/setpriv.c:385 sys-utils/setpriv.c:392
#, c-format
msgid "[none]"
msgstr "[ninguno]"

#: sys-utils/setpriv.c:320
msgid "get pdeathsig failed"
msgstr "get pdeathsig ha fallado"

#: sys-utils/setpriv.c:340
#, c-format
msgid "uid: %u\n"
msgstr "uid: %u\n"

#: sys-utils/setpriv.c:341
#, c-format
msgid "euid: %u\n"
msgstr "euid: %u\n"

#: sys-utils/setpriv.c:344
#, c-format
msgid "suid: %u\n"
msgstr "suid: %u\n"

#: sys-utils/setpriv.c:346 sys-utils/setpriv.c:459
msgid "getresuid failed"
msgstr "getresuid ha fallado"

#: sys-utils/setpriv.c:355 sys-utils/setpriv.c:474
msgid "getresgid failed"
msgstr "getresgid ha fallado"

#: sys-utils/setpriv.c:366
#, c-format
msgid "Effective capabilities: "
msgstr "Capacidades efectivas: "

#: sys-utils/setpriv.c:371
#, c-format
msgid "Permitted capabilities: "
msgstr "Capacidades permitidas: "

#: sys-utils/setpriv.c:377
#, c-format
msgid "Inheritable capabilities: "
msgstr "Capacidades heredables: "

#: sys-utils/setpriv.c:382
#, c-format
msgid "Ambient capabilities: "
msgstr "Capacidades ambiente: "

#: sys-utils/setpriv.c:387
#, c-format
msgid "[unsupported]"
msgstr "[no admitida]"

#: sys-utils/setpriv.c:390
#, c-format
msgid "Capability bounding set: "
msgstr "Conjunto de capacidades posibles: "

#: sys-utils/setpriv.c:399
msgid "SELinux label"
msgstr "etiqueta SELinux"

#: sys-utils/setpriv.c:402
msgid "AppArmor profile"
msgstr "perfil de AppArmor"

#: sys-utils/setpriv.c:415
#, c-format
msgid "cap %d: libcap-ng is broken"
msgstr "cap %d: libcap-ng está roto"

#: sys-utils/setpriv.c:437
msgid "Invalid supplementary group id"
msgstr "Id de grupo duplementario no válido"

#: sys-utils/setpriv.c:447
msgid "failed to get parent death signal"
msgstr "No se podido obtener la señal de muerte del padre"

#: sys-utils/setpriv.c:467
msgid "setresuid failed"
msgstr "setresuid ha fallado"

#: sys-utils/setpriv.c:482
msgid "setresgid failed"
msgstr "setresgid ha fallado"

#: sys-utils/setpriv.c:514
msgid "unsupported capability type"
msgstr "tipo de capacidad no admitido"

#: sys-utils/setpriv.c:531
msgid "bad capability string"
msgstr "cadena de capacidad incorrecta"

#: sys-utils/setpriv.c:539
msgid "libcap-ng is too old for \"all\" caps"
msgstr "libcap-ng es demasiado antiguo para todas (\"all\") las capacidades"

#: sys-utils/setpriv.c:551
#, c-format
msgid "unknown capability \"%s\""
msgstr "capacidad desconocida \"%s\""

#: sys-utils/setpriv.c:575
msgid "unrecognized securebit set -- refusing to adjust"
msgstr "conjunto de bits de seguridad desconocidos -- se rechaza el ajuste"

#: sys-utils/setpriv.c:579
msgid "bad securebits string"
msgstr "cadena de bits de seguridad incorrecta"

#: sys-utils/setpriv.c:586
msgid "+all securebits is not allowed"
msgstr "bits de seguridad +all no permitido"

#: sys-utils/setpriv.c:599
msgid "adjusting keep_caps does not make sense"
msgstr "no tiene sentido ajustar keep_caps"

#: sys-utils/setpriv.c:603
msgid "unrecognized securebit"
msgstr "bit de seguridad no reconocido"

#: sys-utils/setpriv.c:623
msgid "SELinux is not running"
msgstr "SELinux no está funcionando"

#: sys-utils/setpriv.c:638
#, c-format
msgid "close failed: %s"
msgstr "fallo al cerrar: %s"

#: sys-utils/setpriv.c:646
msgid "AppArmor is not running"
msgstr "AppArmor no está ejecutándose"

#: sys-utils/setpriv.c:825
msgid "duplicate --no-new-privs option"
msgstr "opción --no-new-print duplicada"

#: sys-utils/setpriv.c:830
msgid "duplicate ruid"
msgstr "ruid duplicado"

#: sys-utils/setpriv.c:832
msgid "failed to parse ruid"
msgstr "fallo al analizar ruid"

#: sys-utils/setpriv.c:840
msgid "duplicate euid"
msgstr "euid duplicado"

#: sys-utils/setpriv.c:842
msgid "failed to parse euid"
msgstr "fallo al analizar euid"

#: sys-utils/setpriv.c:846
msgid "duplicate ruid or euid"
msgstr "ruid o euid duplicado"

#: sys-utils/setpriv.c:848
msgid "failed to parse reuid"
msgstr "fallo al analizar reuid"

#: sys-utils/setpriv.c:857
msgid "duplicate rgid"
msgstr "rgid duplicado"

#: sys-utils/setpriv.c:859
msgid "failed to parse rgid"
msgstr "fallo al analizar rgid"

#: sys-utils/setpriv.c:863
msgid "duplicate egid"
msgstr "egid duplicado"

#: sys-utils/setpriv.c:865
msgid "failed to parse egid"
msgstr "fallo al analizar egid"

#: sys-utils/setpriv.c:869
msgid "duplicate rgid or egid"
msgstr "rgid o egid duplicado"

#: sys-utils/setpriv.c:871
msgid "failed to parse regid"
msgstr "fallo al analizar regid"

#: sys-utils/setpriv.c:876
msgid "duplicate --clear-groups option"
msgstr "opción --clear-groups duplicada"

#: sys-utils/setpriv.c:882
msgid "duplicate --keep-groups option"
msgstr "opción --keep-groups duplicada"

#: sys-utils/setpriv.c:888
msgid "duplicate --init-groups option"
msgstr "opción --init-groups duplicada"

#: sys-utils/setpriv.c:894
msgid "duplicate --groups option"
msgstr "opción --groups duplicada"

#: sys-utils/setpriv.c:900
msgid "duplicate --keep-pdeathsig option"
msgstr "opción --keep-pdeathsig duplicada"

#: sys-utils/setpriv.c:909
msgid "duplicate --inh-caps option"
msgstr "opción --inh-caps duplicada"

#: sys-utils/setpriv.c:915
msgid "duplicate --ambient-caps option"
msgstr "opción --ambient-caps duplicada"

#: sys-utils/setpriv.c:921
msgid "duplicate --bounding-set option"
msgstr "opción --bounding-set duplicada"

#: sys-utils/setpriv.c:927
msgid "duplicate --securebits option"
msgstr "opción --securebits duplicada"

#: sys-utils/setpriv.c:933
msgid "duplicate --selinux-label option"
msgstr "opción --selinux-label duplicada"

#: sys-utils/setpriv.c:939
msgid "duplicate --apparmor-profile option"
msgstr "opción --apparmor-profile duplicada"

#: sys-utils/setpriv.c:958
msgid "--dump is incompatible with all other options"
msgstr "--dump es incompatible con todas las demás opciones"

#: sys-utils/setpriv.c:966
msgid "--list-caps must be specified alone"
msgstr "--list-caps debe especificarse solo"

#: sys-utils/setpriv.c:972
msgid "No program specified"
msgstr "No se ha especificado ningún programa"

#: sys-utils/setpriv.c:978
msgid "--[re]gid requires --keep-groups, --clear-groups, --init-groups, or --groups"
msgstr "--[re]gid necesita --keep-groups, --clear-groups, --init-groups o --groups"

#: sys-utils/setpriv.c:982
msgid "--init-groups requires --ruid or --reuid"
msgstr "--init-groups necesita --ruid o --reuid"

#: sys-utils/setpriv.c:986
#, c-format
msgid "uid %ld not found, --init-groups requires an user that can be found on the system"
msgstr "uid %ld no encontrado; --init-groups necesita una usuario que pueda encontrarse en el sistema"

#: sys-utils/setpriv.c:1001
msgid "disallow granting new privileges failed"
msgstr "no se ha podido impedir el otorgamiento de nuevos privilegios"

#: sys-utils/setpriv.c:1009
msgid "keep process capabilities failed"
msgstr "no se han podido mantener las capacidades del proceso"

#: sys-utils/setpriv.c:1017
msgid "activate capabilities"
msgstr "activa las capacidades"

#: sys-utils/setpriv.c:1023
msgid "reactivate capabilities"
msgstr "reactiva las capacidades"

#: sys-utils/setpriv.c:1034
msgid "initgroups failed"
msgstr "initgroups falló"

#: sys-utils/setpriv.c:1042
msgid "set process securebits failed"
msgstr "no se han podido establecer los bits de seguridad del proceso"

#: sys-utils/setpriv.c:1048
msgid "apply bounding set"
msgstr "aplica el conjunto de capacidades posibles"

#: sys-utils/setpriv.c:1054
msgid "apply capabilities"
msgstr "aplica las capacidades"

#: sys-utils/setpriv.c:1063
msgid "set parent death signal failed"
msgstr "fallo al poner la señal de muerte del padre"

#: sys-utils/setsid.c:33
#, c-format
msgid " %s [options] <program> [arguments ...]\n"
msgstr " %s [opciones] <programa> [argumentos ...]\n"

#: sys-utils/setsid.c:37
msgid "Run a program in a new session.\n"
msgstr "Ejecuta un programa en una nueva sesión.\n"

#: sys-utils/setsid.c:40
msgid " -c, --ctty     set the controlling terminal to the current one\n"
msgstr " -c, --ctty     establece como terminal de control el actual\n"

#: sys-utils/setsid.c:41
msgid " -f, --fork     always fork\n"
msgstr " -f, --fork     siempre bifurca\n"

#: sys-utils/setsid.c:42
msgid " -w, --wait     wait program to exit, and use the same return\n"
msgstr " -w, --wait     espera a que el programa termine, y utiliza el mismo retorno\n"

#: sys-utils/setsid.c:100
msgid "fork"
msgstr "fork"

#: sys-utils/setsid.c:112
#, c-format
msgid "child %d did not exit normally"
msgstr "el hijo %d no ha terminado normalmente"

#: sys-utils/setsid.c:117
msgid "setsid failed"
msgstr "setsid ha fallado"

#: sys-utils/setsid.c:120
msgid "failed to set the controlling terminal"
msgstr "no se ha podido establecer el terminal de control"

#: sys-utils/swapoff.c:94
#, c-format
msgid "swapoff %s\n"
msgstr "swapoff %s\n"

#: sys-utils/swapoff.c:114
msgid "Not superuser."
msgstr "No es el superusuario."

#: sys-utils/swapoff.c:117 sys-utils/swapoff.c:122
#, c-format
msgid "%s: swapoff failed"
msgstr "%s: swapoff falló"

#: sys-utils/swapoff.c:141 sys-utils/swapon.c:793
#, c-format
msgid " %s [options] [<spec>]\n"
msgstr " %s [opciones] [<espec>]\n"

#: sys-utils/swapoff.c:144
msgid "Disable devices and files for paging and swapping.\n"
msgstr "Desactiva dispositivos y ficheros para paginación e intercambio.\n"

#: sys-utils/swapoff.c:147
msgid ""
" -a, --all              disable all swaps from /proc/swaps\n"
" -v, --verbose          verbose mode\n"
msgstr ""
" -a, --all              desactiva todos los intercambios en /proc/swaps\n"
" -v, --verbose          modo expresivo\n"

#: sys-utils/swapoff.c:153
msgid ""
"\n"
"The <spec> parameter:\n"
" -L <label>             LABEL of device to be used\n"
" -U <uuid>              UUID of device to be used\n"
" LABEL=<label>          LABEL of device to be used\n"
" UUID=<uuid>            UUID of device to be used\n"
" <device>               name of device to be used\n"
" <file>                 name of file to be used\n"
msgstr ""
"\n"
"El parámetro <espec>:\n"
" -L <etiqueta>          etiqueta del dispositivo que se va a utilizar\n"
" -U <uuid>              uuid del dispositivo que se va a utilizar\n"
" LABEL=<etiqueta>       etiqueta del dispositivo que se va a utilizar\n"
" UUID=<uuid>            uuid del dispositivo que se va a utilizar\n"
" <dispositivo>          nombre del dispositivo que se va a utilizar\n"
" <fichero>              nombre del dispositivo que se va a utilizar\n"

#: sys-utils/swapon.c:96
msgid "device file or partition path"
msgstr "fichero de dispositivo o ruta de la partición"

#: sys-utils/swapon.c:97
msgid "type of the device"
msgstr "tipo de dispositivo"

#: sys-utils/swapon.c:98
msgid "size of the swap area"
msgstr "tamaño de la zona de intercambio"

#: sys-utils/swapon.c:99
msgid "bytes in use"
msgstr "bytes en uso"

#: sys-utils/swapon.c:100
msgid "swap priority"
msgstr "prioridad de la zona de intercambio"

#: sys-utils/swapon.c:101
msgid "swap uuid"
msgstr "uuid de la zona de intercambio"

#: sys-utils/swapon.c:102
msgid "swap label"
msgstr "etiqueta de la zona de intercambio"

#: sys-utils/swapon.c:249
#, c-format
msgid "%s\t\t\t\tType\t\tSize\tUsed\tPriority\n"
msgstr "%s\t\t\t\tTipo\t\tTamaño\tUtilizado\tPrioridad\n"

#: sys-utils/swapon.c:249
msgid "Filename"
msgstr "Nombre del fichero"

#: sys-utils/swapon.c:315
#, c-format
msgid "%s: reinitializing the swap."
msgstr "%s: reinicialización de la zona de intercambio"

#: sys-utils/swapon.c:379
#, c-format
msgid "%s: lseek failed"
msgstr "%s: lseek ha fallado"

#: sys-utils/swapon.c:385
#, c-format
msgid "%s: write signature failed"
msgstr "%s: la escritura de la firma ha fallado"

#: sys-utils/swapon.c:539
#, c-format
msgid "%s: skipping - it appears to have holes."
msgstr "%s: omitiendo - parece que hay huecos."

#: sys-utils/swapon.c:547
#, c-format
msgid "%s: get size failed"
msgstr "%s: fallo al obtener tamaño"

#: sys-utils/swapon.c:553
#, c-format
msgid "%s: read swap header failed"
msgstr "%s: fallo al obtener la cabecera de intercambio"

#: sys-utils/swapon.c:558
#, c-format
msgid "%s: found signature [pagesize=%d, signature=%s]"
msgstr "%s: firma encontrada [tamaño de página=%d, firma=%s]"

#: sys-utils/swapon.c:569
#, c-format
msgid "%s: pagesize=%d, swapsize=%llu, devsize=%llu"
msgstr "%s: tamaño de página=%d, tamaño de intercambio=%llu, tamaño de dispositivo=%llu"

#: sys-utils/swapon.c:574
#, c-format
msgid "%s: last_page 0x%08llx is larger than actual size of swapspace"
msgstr "%s: última_página 0x%08llx mayor que el tamaño real de la zona de intercambio"

#: sys-utils/swapon.c:584
#, c-format
msgid "%s: swap format pagesize does not match."
msgstr "%s: el tamaño de página del formato de la zona de intercambio no concuerda."

#: sys-utils/swapon.c:590
#, c-format
msgid "%s: swap format pagesize does not match. (Use --fixpgsz to reinitialize it.)"
msgstr "%s: el tamaño de página del formato de la zona de intercambio no concuerda. (Utilice --fixpgsz para reinicializarlo.)"

#: sys-utils/swapon.c:599
#, c-format
msgid "%s: software suspend data detected. Rewriting the swap signature."
msgstr "%s: datos de suspensión del software detectados. Se reescribe la firma de la zona de intercambio."

#: sys-utils/swapon.c:669
#, c-format
msgid "swapon %s\n"
msgstr "swapon %s\n"

#: sys-utils/swapon.c:673
#, c-format
msgid "%s: swapon failed"
msgstr "%s: swapon ha fallado"

#: sys-utils/swapon.c:746
#, c-format
msgid "%s: noauto option -- ignored"
msgstr "%s: opción noauto -- ignorada"

#: sys-utils/swapon.c:768
#, c-format
msgid "%s: already active -- ignored"
msgstr "%s: ya está activo -- ignorada"

#: sys-utils/swapon.c:774
#, c-format
msgid "%s: inaccessible -- ignored"
msgstr "%s: inaccesible -- ignorada"

#: sys-utils/swapon.c:796
msgid "Enable devices and files for paging and swapping.\n"
msgstr "Activa dispositivos y ficheros para paginación e intercambio.\n"

#: sys-utils/swapon.c:799
msgid " -a, --all                enable all swaps from /etc/fstab\n"
msgstr " -a, --all                activa todas las zonas de intercambios en /etc/fstab\n"

#: sys-utils/swapon.c:800
msgid " -d, --discard[=<policy>] enable swap discards, if supported by device\n"
msgstr " -d, --discard[=<política>] activa los descartes de intercambio, si lo admite el dispositivo\n"

#: sys-utils/swapon.c:801
msgid " -e, --ifexists           silently skip devices that do not exist\n"
msgstr " -e, --ifexists           se salta los dispositivos que no existan sin decir nada\n"

#: sys-utils/swapon.c:802
msgid " -f, --fixpgsz            reinitialize the swap space if necessary\n"
msgstr " -f, --fixpgsz            reinicializa el espacio de intercambio si es necesario\n"

#: sys-utils/swapon.c:803
msgid " -o, --options <list>     comma-separated list of swap options\n"
msgstr " -o, --options <lista>    lista de las opciones de intercambio, separadas por coma\n"

#: sys-utils/swapon.c:804
msgid " -p, --priority <prio>    specify the priority of the swap device\n"
msgstr " -p, --priority <prio>    especifica la prioridad del dispositivo de intercambio\n"

#: sys-utils/swapon.c:805
msgid " -s, --summary            display summary about used swap devices (DEPRECATED)\n"
msgstr " -s, --summary            muestra un resumen sobre los dispositivos de intercambio utilizados (EN DESUSO)\n"

#: sys-utils/swapon.c:806
msgid "     --show[=<columns>]   display summary in definable table\n"
msgstr "     --show[=<columnas>]  muestra un resumen en una tabla definible\n"

#: sys-utils/swapon.c:807
msgid "     --noheadings         don't print table heading (with --show)\n"
msgstr "     --noheadings         no imprime las cabeceras de la tabla (con --show)\n"

#: sys-utils/swapon.c:808
msgid "     --raw                use the raw output format (with --show)\n"
msgstr "     --raw                utiliza el formato de salida en bruto (con --show)\n"

#: sys-utils/swapon.c:809
msgid "     --bytes              display swap size in bytes in --show output\n"
msgstr "     --bytes              muestra el tamaño de intercambio en bytes en la salida de --show\n"

#: sys-utils/swapon.c:810
msgid " -v, --verbose            verbose mode\n"
msgstr " -v, --verbose            modo expresivo\n"

#: sys-utils/swapon.c:815
msgid ""
"\n"
"The <spec> parameter:\n"
" -L <label>             synonym for LABEL=<label>\n"
" -U <uuid>              synonym for UUID=<uuid>\n"
" LABEL=<label>          specifies device by swap area label\n"
" UUID=<uuid>            specifies device by swap area UUID\n"
" PARTLABEL=<label>      specifies device by partition label\n"
" PARTUUID=<uuid>        specifies device by partition UUID\n"
" <device>               name of device to be used\n"
" <file>                 name of file to be used\n"
msgstr ""
"\n"
"El parámetro <espec>:\n"
" -L <etiqueta>          sinónimo de LABEL=<eitqueta>\n"
" -U <uuid>              sinónimo de UUID=<uuid>\n"
" LABEL=<etiqueta>       especifica el dispositivo por la etiqueta de la zona de intercambio\n"
" UUID=<uuid>            especifica el dispositivo por el UUID de la zona de intercambio\n"
" PARTLABEL=<etiqueta>   especifica el dispositivo por la etiqueta de la partición\n"
" PARTUUID=<uuid>        especifica el dispositivo por el UUID de la partición\n"
" <dispositivo>          nombre del dispositivo que se va a utilizar\n"
" <fichero>              nombre del fichero que se va a utilizar\n"

#: sys-utils/swapon.c:825
msgid ""
"\n"
"Available discard policy types (for --discard):\n"
" once    : only single-time area discards are issued\n"
" pages   : freed pages are discarded before they are reused\n"
"If no policy is selected, both discard types are enabled (default).\n"
msgstr ""
"\n"
"Tipos de políticas de descarte disponibles (para --discard):\n"
" once    : solamente descartes de zona de una sola vez\n"
" pages   : las páginas liberadas se descartan antes de volver a utilizarse\n"
"Si no se elige  ninguna política, se activan los dos tipos de descarte\n"
"(opción predeterminada).\n"

#: sys-utils/swapon.c:907
msgid "failed to parse priority"
msgstr "no se ha podido analizar la prioridad"

#: sys-utils/swapon.c:926
#, c-format
msgid "unsupported discard policy: %s"
msgstr "política de descarte no admitida: %s"

#: sys-utils/swapon-common.c:73
#, c-format
msgid "cannot find the device for %s"
msgstr "no se puede encontrar el dispositivo para %s"

#: sys-utils/switch_root.c:60
msgid "failed to open directory"
msgstr "no se ha podido abrir el directorio"

#: sys-utils/switch_root.c:68
msgid "stat failed"
msgstr "stat ha fallado"

#: sys-utils/switch_root.c:79
msgid "failed to read directory"
msgstr "no se ha podido leer el directorio"

#: sys-utils/switch_root.c:116
#, c-format
msgid "failed to unlink %s"
msgstr "no se ha podido desvincular %s"

#: sys-utils/switch_root.c:153
#, c-format
msgid "failed to mount moving %s to %s"
msgstr "fallo al montar moviendo %s a %s"

#: sys-utils/switch_root.c:155
#, c-format
msgid "forcing unmount of %s"
msgstr "forzando el desmontaje de %s"

#: sys-utils/switch_root.c:161
#, c-format
msgid "failed to change directory to %s"
msgstr "fallo al cambiar de directorio a %s"

#: sys-utils/switch_root.c:173
#, c-format
msgid "failed to mount moving %s to /"
msgstr "fallo al montar moviendo %s a /"

#: sys-utils/switch_root.c:179
msgid "failed to change root"
msgstr "no se ha podido cambiar la raíz"

#: sys-utils/switch_root.c:192
msgid "old root filesystem is not an initramfs"
msgstr "el sistema de ficheros raíz antiguo no es un initramfs"

#: sys-utils/switch_root.c:205
#, c-format
msgid " %s [options] <newrootdir> <init> <args to init>\n"
msgstr " %s [opciones] <nuevodirectorioraíz> <init> <args de init>\n"

#: sys-utils/switch_root.c:209
msgid "Switch to another filesystem as the root of the mount tree.\n"
msgstr "Establece otro sistema de ficheros como raíz del árbol de montaje.\n"

#: sys-utils/switch_root.c:254
msgid "failed. Sorry."
msgstr "ha fallado. Perdón."

#: sys-utils/switch_root.c:257
#, c-format
msgid "cannot access %s"
msgstr "no se puede acceder a %s"

#: sys-utils/tunelp.c:98
msgid "Set various parameters for the line printer.\n"
msgstr "Configura parámetros de la impresora de línea.\n"

#: sys-utils/tunelp.c:101
msgid " -i, --irq <num>              specify parallel port irq\n"
msgstr " -i, --irq <num>              especifica la irq del puerto paralelo\n"

#: sys-utils/tunelp.c:102
msgid " -t, --time <ms>              driver wait time in milliseconds\n"
msgstr " -t, --time <ms>              tiempo de espera del controlador en segundos\n"

#: sys-utils/tunelp.c:103
msgid " -c, --chars <num>            number of output characters before sleep\n"
msgstr " -c, --chars <num>            número de caracteres que sacar antes del reposo\n"

#: sys-utils/tunelp.c:104
msgid " -w, --wait <us>              strobe wait in micro seconds\n"
msgstr " -w, --wait <us>              tiempo de «strobe» en microsegundos\n"

#. TRANSLATORS: do not translate <on|off> arguments. The
#. argument reader does not recognize locale, unless `on' is
#. exactly that very same string.
#: sys-utils/tunelp.c:108
msgid " -a, --abort <on|off>         abort on error\n"
msgstr " -a, --abort <on|off>         abortar si hay error\n"

#: sys-utils/tunelp.c:109
msgid " -o, --check-status <on|off>  check printer status before printing\n"
msgstr " -o, --check-status <on|off>  comprobar el estado de la impresora antes de imprimir\n"

#: sys-utils/tunelp.c:110
msgid " -C, --careful <on|off>       extra checking to status check\n"
msgstr " -C, --careful <on|off>       comprobación adicional a la comprobación del estado\n"

#: sys-utils/tunelp.c:111
msgid " -s, --status                 query printer status\n"
msgstr " -s, --status                 consulta el estado de la impresora\n"

#: sys-utils/tunelp.c:112
msgid " -r, --reset                  reset the port\n"
msgstr " -r, --reset                  restablece el puerto\n"

#: sys-utils/tunelp.c:113
msgid " -q, --print-irq <on|off>     display current irq setting\n"
msgstr " -q, --print-irq <on|off>     muestra la configuración de irq actual\n"

#: sys-utils/tunelp.c:258
#, c-format
msgid "%s not an lp device"
msgstr "%s no es un dispositivo lp"

#: sys-utils/tunelp.c:277
msgid "LPGETSTATUS error"
msgstr "error de LPGETSTATUS"

#: sys-utils/tunelp.c:282
#, c-format
msgid "%s status is %d"
msgstr "El estado de %s es %d"

#: sys-utils/tunelp.c:284
#, c-format
msgid ", busy"
msgstr ", ocupado"

#: sys-utils/tunelp.c:286
#, c-format
msgid ", ready"
msgstr ", preparado"

#: sys-utils/tunelp.c:288
#, c-format
msgid ", out of paper"
msgstr ", falta papel"

#: sys-utils/tunelp.c:290
#, c-format
msgid ", on-line"
msgstr ", en línea"

#: sys-utils/tunelp.c:292
#, c-format
msgid ", error"
msgstr ", error"

#: sys-utils/tunelp.c:296
msgid "ioctl failed"
msgstr "ioctl ha fallado"

#: sys-utils/tunelp.c:306
msgid "LPGETIRQ error"
msgstr "error de LPGETIRQ"

#: sys-utils/tunelp.c:311
#, c-format
msgid "%s using IRQ %d\n"
msgstr "%s utilizando IRQ %d\n"

#: sys-utils/tunelp.c:313
#, c-format
msgid "%s using polling\n"
msgstr "%s utilizando sondeo\n"

#: sys-utils/umount.c:81
#, c-format
msgid ""
" %1$s [-hV]\n"
" %1$s -a [options]\n"
" %1$s [options] <source> | <directory>\n"
msgstr ""
" %1$s [-hV]\n"
" %1$s -a [opciones]\n"
" %1$s [opciones] <origen> | <directorio>\n"

#: sys-utils/umount.c:87
msgid "Unmount filesystems.\n"
msgstr "Desmonta sistemas de ficheros.\n"

#: sys-utils/umount.c:90
msgid " -a, --all               unmount all filesystems\n"
msgstr " -a, --all               desmonta todos los sistemas de ficheros\n"

#: sys-utils/umount.c:91
msgid ""
" -A, --all-targets       unmount all mountpoints for the given device in the\n"
"                           current namespace\n"
msgstr ""
" -A, --all-targets       desmonta todos los puntos de montaje para el dispositivo especificado\n"
"                           en el espacio de nombres actual\n"

#: sys-utils/umount.c:93
msgid " -c, --no-canonicalize   don't canonicalize paths\n"
msgstr " -c, --no-canonicalize   no hace canónicas las rutas\n"

#: sys-utils/umount.c:94
msgid " -d, --detach-loop       if mounted loop device, also free this loop device\n"
msgstr " -d, --detach-loop       si es un dispositivo de bucle, también libera este dispositivo de bucle\n"

#: sys-utils/umount.c:95
msgid "     --fake              dry run; skip the umount(2) syscall\n"
msgstr "     --fake              hace una prueba; no realiza la llamada al sistema umount(2)\n"

#: sys-utils/umount.c:96
msgid " -f, --force             force unmount (in case of an unreachable NFS system)\n"
msgstr " -f, --force             desmonta a la fuerza (en caso de sistema NFS no alcanzable)\n"

#: sys-utils/umount.c:97
msgid " -i, --internal-only     don't call the umount.<type> helpers\n"
msgstr " -i, --internal-only     no llama a los auxiliares umount.<tipo>\n"

#: sys-utils/umount.c:99
msgid " -l, --lazy              detach the filesystem now, clean up things later\n"
msgstr " -l, --lazy              desvincula el sistema de ficheros ahora, y limpia más tarde\n"

#: sys-utils/umount.c:100
msgid " -O, --test-opts <list>  limit the set of filesystems (use with -a)\n"
msgstr " -O, --test-opts <lista> limita el conjunto de sistemas de ficheros (se utiliza con -a)\n"

#: sys-utils/umount.c:101
msgid " -R, --recursive         recursively unmount a target with all its children\n"
msgstr " -R, --recursive         desmonta recursivamente un objetivo y todos sus hijos\n"

#: sys-utils/umount.c:102
msgid " -r, --read-only         in case unmounting fails, try to remount read-only\n"
msgstr " -r, --read-only         en caso de fallo al desmontar, intenta volver a montar en modo de solo lectura\n"

#: sys-utils/umount.c:103
msgid " -t, --types <list>      limit the set of filesystem types\n"
msgstr " -t, --types <lista>     limita el conjunto de tipos de sistemas de fichero\n"

#: sys-utils/umount.c:105
msgid " -q, --quiet             suppress 'not mounted' error messages\n"
msgstr " -q, --quiet             suprime los mensajes de error 'no montado'\n"

#: sys-utils/umount.c:106
msgid " -N, --namespace <ns>    perform umount in another namespace\n"
msgstr " -N, --namespace <en>    efectúa umount en otro espacio de nombres\n"

#: sys-utils/umount.c:149
#, c-format
msgid "%s (%s) unmounted"
msgstr "%s (%s) desmontado"

#: sys-utils/umount.c:151
#, c-format
msgid "%s unmounted"
msgstr "%s desmontado"

#: sys-utils/umount.c:220
msgid "failed to set umount target"
msgstr "no se ha podido establecer el destino de umount"

#: sys-utils/umount.c:253
msgid "libmount table allocation failed"
msgstr "fallo de reserva de la tabla de libmount"

#: sys-utils/umount.c:299 sys-utils/umount.c:381
msgid "libmount iterator allocation failed"
msgstr "fallo de reserva del terador de libmount"

#: sys-utils/umount.c:305
#, c-format
msgid "failed to get child fs of %s"
msgstr "no se ha podido obtener el sf hijo de %s"

#: sys-utils/umount.c:344 sys-utils/umount.c:368
#, c-format
msgid "%s: not found"
msgstr "%s: no encontrado"

#: sys-utils/umount.c:375
#, c-format
msgid "%s: failed to determine source (--all-targets is unsupported on systems with regular mtab file)."
msgstr "%s: no se ha podido determinar el origen (--all-targets no se admite en sistemas con fichero mtab ordinario)."

#: sys-utils/unshare.c:95
#, c-format
msgid "unsupported --setgroups argument '%s'"
msgstr "argumento de --setgroups no soportado '%s'"

#: sys-utils/unshare.c:116 sys-utils/unshare.c:131
#, c-format
msgid "write failed %s"
msgstr "error de escritura %s"

#: sys-utils/unshare.c:154
#, c-format
msgid "unsupported propagation mode: %s"
msgstr "modo de propagación desconocido: %s"

#: sys-utils/unshare.c:163
msgid "cannot change root filesystem propagation"
msgstr "no se puede cambiar la propagación del sistema de ficheros raíz"

#: sys-utils/unshare.c:194
#, c-format
msgid "mount %s on %s failed"
msgstr "el montaje de %s en %s falló"

#: sys-utils/unshare.c:221
msgid "failed to open /proc/self/timens_offsets"
msgstr "fallo al abrir /proc/self/timens_offsets"

#: sys-utils/unshare.c:224
msgid "failed to write to /proc/self/timens_offsets"
msgstr "fallo al escribir en /proc/self/timens_offsets"

#: sys-utils/unshare.c:236
msgid "pipe failed"
msgstr "fallo al redirigir"

#: sys-utils/unshare.c:250
msgid "failed to read pipe"
msgstr "no se ha podido leer el redireccionamiento"

#: sys-utils/unshare.c:309
msgid "Run a program with some namespaces unshared from the parent.\n"
msgstr "Ejecuta un programa con algunos espacios de nombres no compartidos con el padre.\n"

#: sys-utils/unshare.c:312
msgid " -m, --mount[=<file>]      unshare mounts namespace\n"
msgstr " -m, --mount[=<fichero>]   deja de compartir el espacio de nombre de los montajes\n"

#: sys-utils/unshare.c:313
msgid " -u, --uts[=<file>]        unshare UTS namespace (hostname etc)\n"
msgstr " -u, --uts[=<fichero>]     deja de compartir el espacio de nombres UTS (nombre de máquina, etc.)\n"

#: sys-utils/unshare.c:314
msgid " -i, --ipc[=<file>]        unshare System V IPC namespace\n"
msgstr " -i, --ipc[=<fichero>]     deja de compartir el espacio de nombres del System V IPC\n"

#: sys-utils/unshare.c:315
msgid " -n, --net[=<file>]        unshare network namespace\n"
msgstr " -n, --net[=<fichero>]     deja de compartir el espacio de nombres de red\n"

#: sys-utils/unshare.c:316
msgid " -p, --pid[=<file>]        unshare pid namespace\n"
msgstr " -p, --pid[=<fichero>]     deja de compartir el espacio de nombres de pid\n"

#: sys-utils/unshare.c:317
msgid " -U, --user[=<file>]       unshare user namespace\n"
msgstr " -U, --user[=<fichero>]    deja de compartir el espacio de nombres de usuario\n"

#: sys-utils/unshare.c:318
msgid " -C, --cgroup[=<file>]     unshare cgroup namespace\n"
msgstr " -C, --cgroup[=<fichero>]  deja de compartir el espacio de nombres de cgroup\n"

#: sys-utils/unshare.c:319
#, fuzzy
msgid " -T, --time[=<file>]       unshare time namespace\n"
msgstr " -p, --pid[=<fichero>]     deja de compartir el espacio de nombres de pid\n"

#: sys-utils/unshare.c:321
msgid " -f, --fork                fork before launching <program>\n"
msgstr " -f, --fork                crea un proceso hijo antes de lanzar <programa>\n"

#: sys-utils/unshare.c:322
msgid " --map-user=<uid>|<name>   map current user to uid (implies --user)\n"
msgstr " --map-user=<uid>|<nombre> asocia el usuario actual al uid (implica --user)\n"

#: sys-utils/unshare.c:323
msgid " --map-group=<gid>|<name>  map current group to gid (implies --user)\n"
msgstr " --map-group=<gid>|<nombre> asocia el grupo actual al gid (implica --user)\n"

#: sys-utils/unshare.c:324
msgid " -r, --map-root-user       map current user to root (implies --user)\n"
msgstr " -r, --map-root-user       asocia el usuario actual a root (implica --user)\n"

#: sys-utils/unshare.c:325
msgid " -c, --map-current-user    map current user to itself (implies --user)\n"
msgstr " -c, --map-current-user    asocia el usuario actual a sí mismo (implica --user)\n"

#: sys-utils/unshare.c:327
msgid ""
" --kill-child[=<signame>]  when dying, kill the forked child (implies --fork)\n"
"                             defaults to SIGKILL\n"
msgstr ""
" --kill-child[=<nomseñal>] al morir, mata al hijo bifurcado (implica --fork)\n"
"                             predefinido a SIGKILL\n"

#: sys-utils/unshare.c:329
msgid " --mount-proc[=<dir>]      mount proc filesystem first (implies --mount)\n"
msgstr " --mount-proc[=<dir>]      monta primero el sistema de ficheros proc (implica --mount)\n"

#: sys-utils/unshare.c:330
msgid ""
" --propagation slave|shared|private|unchanged\n"
"                           modify mount propagation in mount namespace\n"
msgstr ""
" --propagation slave|shared|private|unchanged\n"
"                           modifica la propagación del montaje en el espacio de nombres del montaje\n"

#: sys-utils/unshare.c:332
msgid " --setgroups allow|deny    control the setgroups syscall in user namespaces\n"
msgstr ""
" --setgroups allow|deny    controla las llamadas al sistema de setgroups\n"
"                           en el espacio de nombres de usuario\n"

#: sys-utils/unshare.c:333
msgid " --keep-caps               retain capabilities granted in user namespaces\n"
msgstr " --keep-caps               retiene las capacidades otorgadas en espacios de nombres de usuario\n"

#: sys-utils/unshare.c:335
msgid " -R, --root=<dir>          run the command with root directory set to <dir>\n"
msgstr " -R, --root=<dir>          ejecuta la orden con el directorio raíz establecido a <dir>\n"

#: sys-utils/unshare.c:336
msgid " -w, --wd=<dir>            change working directory to <dir>\n"
msgstr " -w, --wd=<dir>            cambia el directorio de trabajo a <dir>\n"

#: sys-utils/unshare.c:337
msgid " -S, --setuid <uid>        set uid in entered namespace\n"
msgstr " -S, --setuid <uid>        establece el uid en el espacio de nombres introducido\n"

#: sys-utils/unshare.c:338
msgid " -G, --setgid <gid>        set gid in entered namespace\n"
msgstr " -G, --setgid <gid>        establece el gid en el espacio de nombres introducido\n"

#: sys-utils/unshare.c:339
msgid " --monotonic <offset>      set clock monotonic offset (seconds) in time namespaces\n"
msgstr ""

#: sys-utils/unshare.c:340
msgid " --boottime <offset>       set clock boottime offset (seconds) in time namespaces\n"
msgstr ""

#: sys-utils/unshare.c:524
#, fuzzy
msgid "failed to parse monotonic offset"
msgstr "fallo al analizar el desplazamiento de la zona"

#: sys-utils/unshare.c:528
#, fuzzy
msgid "failed to parse boottime offset"
msgstr "fallo al analizar el desplazamiento de la zona"

#: sys-utils/unshare.c:542
msgid "options --monotonic and --boottime require unsharing of a time namespace (-t)"
msgstr ""

#: sys-utils/unshare.c:549
msgid "unshare failed"
msgstr "error al dejar de compartir"

#: sys-utils/unshare.c:616
msgid "child exit failed"
msgstr "la finalización del hijo ha fallado"

#: sys-utils/unshare.c:631
msgid "options --setgroups=allow and --map-group are mutually exclusive"
msgstr "las opciones --setgroups=allow y --map-group son mutuamente excluyentes"

#: sys-utils/unshare.c:646
#, c-format
msgid "cannot change root directory to '%s'"
msgstr "no se puede cambiar el directorio raíz a '%s'"

#: sys-utils/unshare.c:650
#, c-format
msgid "cannot chdir to '%s'"
msgstr "no se puede cambiar el directorio a '%s'"

#: sys-utils/unshare.c:654
#, c-format
msgid "umount %s failed"
msgstr "el desmontaje de %s ha fallado"

#: sys-utils/unshare.c:656
#, c-format
msgid "mount %s failed"
msgstr "el montaje de %s ha fallado"

#: sys-utils/unshare.c:682
msgid "capget failed"
msgstr "capget ha fallado"

#: sys-utils/unshare.c:690
msgid "capset failed"
msgstr "capset ha fallado"

#: sys-utils/unshare.c:702
msgid "prctl(PR_CAP_AMBIENT) failed"
msgstr "prctl(PR_CAP_AMBIENT) ha fallado"

#: sys-utils/wdctl.c:72
msgid "Card previously reset the CPU"
msgstr "La tarjeta reinició anteriormente la CPU"

#: sys-utils/wdctl.c:73
msgid "External relay 1"
msgstr "Relé externo 1"

#: sys-utils/wdctl.c:74
msgid "External relay 2"
msgstr "Relé externo 2"

#: sys-utils/wdctl.c:75
msgid "Fan failed"
msgstr "El ventilador ha fallado"

#: sys-utils/wdctl.c:76
msgid "Keep alive ping reply"
msgstr "Respuesta del «ping» del «keep alive»"

#: sys-utils/wdctl.c:77
msgid "Supports magic close char"
msgstr "Admite carácter de cierre mágico"

#: sys-utils/wdctl.c:78
msgid "Reset due to CPU overheat"
msgstr "Reinicio debido a sobrecalentamiento de la CPU"

#: sys-utils/wdctl.c:79
msgid "Power over voltage"
msgstr "Sobre tensión de alimentación"

#: sys-utils/wdctl.c:80
msgid "Power bad/power fault"
msgstr "Potencia incorrecta/fallo de potencia"

#: sys-utils/wdctl.c:81
msgid "Pretimeout (in seconds)"
msgstr "Tiempo límite preliminar (en segundos)"

#: sys-utils/wdctl.c:82
msgid "Set timeout (in seconds)"
msgstr "Configura el tiempo límite (en segundos)"

#: sys-utils/wdctl.c:83
msgid "Not trigger reboot"
msgstr "No dispara el rearranque"

#: sys-utils/wdctl.c:99
msgid "flag name"
msgstr "nombre del indicador"

#: sys-utils/wdctl.c:100
msgid "flag description"
msgstr "descripción del indicador"

#: sys-utils/wdctl.c:101
msgid "flag status"
msgstr "estado del indicador"

#: sys-utils/wdctl.c:102
msgid "flag boot status"
msgstr "estado de arranque del indicador"

#: sys-utils/wdctl.c:103
msgid "watchdog device name"
msgstr "nombre del dispositivo «watchdog»"

#: sys-utils/wdctl.c:148
#, c-format
msgid "unknown flag: %s"
msgstr "indicador desconocido: %s"

#: sys-utils/wdctl.c:210
msgid "Show the status of the hardware watchdog.\n"
msgstr "Muestra el estado del «watchdog» de hardware.\n"

#: sys-utils/wdctl.c:213
msgid ""
" -f, --flags <list>     print selected flags only\n"
" -F, --noflags          don't print information about flags\n"
" -I, --noident          don't print watchdog identity information\n"
" -n, --noheadings       don't print headings for flags table\n"
" -O, --oneline          print all information on one line\n"
" -o, --output <list>    output columns of the flags\n"
" -r, --raw              use raw output format for flags table\n"
" -T, --notimeouts       don't print watchdog timeouts\n"
" -s, --settimeout <sec> set watchdog timeout\n"
" -x, --flags-only       print only flags table (same as -I -T)\n"
msgstr ""
" -f, --flags <lista>    imprime solamente los indicadores seleccionados\n"
" -F, --noflags          no imprime información sobre los indicadores\n"
" -I, --noident          no imprime información sobre la identidad del «watchdog»\n"
" -n, --noheadings       no imprime encabaezados en la tabla de indicadores\n"
" -O, --oneline          imprime toda la información en una línea\n"
" -o, --output <lista>   columnas de salida de los indicadores\n"
" -r, --raw              utiliza salida en bruto para la tabla de indicadores\n"
" -T, --notimeouts       no imprime los tiempos de vencimiento del «watchdog»\n"
" -s, --settimeout <s>   configure el tiempo de vencimiento del «watchdog»\n"
" -x, --flags-only       imprime solamente la tabla de indicadores (igual que -I -T)\n"

#: sys-utils/wdctl.c:229
#, c-format
msgid "The default device is %s.\n"
msgstr "El dispositivo predeterminado es %s.\n"

#: sys-utils/wdctl.c:231
#, c-format
msgid "No default device is available.\n"
msgstr "Ningún dispositivo predeterminado está disponible.\n"

#: sys-utils/wdctl.c:329
#, c-format
msgid "%s: unknown flags 0x%x\n"
msgstr "%s: indicadores desconocidos 0x%x\n"

#: sys-utils/wdctl.c:359
#, c-format
msgid "%s: watchdog already in use, terminating."
msgstr "%s: el «watchdog» ya está en uso, terminando."

#: sys-utils/wdctl.c:373 sys-utils/wdctl.c:438
#, c-format
msgid "%s: failed to disarm watchdog"
msgstr "%s: fallo al desarmar «watchdog»"

#: sys-utils/wdctl.c:382
#, c-format
msgid "cannot set timeout for %s"
msgstr "no se puede configurar el tiempo de espera para %s"

#: sys-utils/wdctl.c:388
#, c-format
msgid "Timeout has been set to %d second.\n"
msgid_plural "Timeout has been set to %d seconds.\n"
msgstr[0] "El tiempo de expiración se ha establecido a %d segundo.\n"
msgstr[1] "El tiempo de expiración se ha establecido a %d segundos.\n"

#: sys-utils/wdctl.c:417
#, c-format
msgid "%s: failed to get information about watchdog"
msgstr "%s: no se ha podido obtener información sobre el «watchdog»"

#: sys-utils/wdctl.c:503
#, c-format
msgid "cannot read information about %s"
msgstr "no se puede leer la información acerca de %s"

#: sys-utils/wdctl.c:513 sys-utils/wdctl.c:516 sys-utils/wdctl.c:519
#, c-format
msgid "%-14s %2i second\n"
msgid_plural "%-14s %2i seconds\n"
msgstr[0] "%-14s %2i segundo\n"
msgstr[1] "%-14s %2i segundos\n"

#: sys-utils/wdctl.c:514
msgid "Timeout:"
msgstr "Tiempo de espera:"

#: sys-utils/wdctl.c:517
msgid "Pre-timeout:"
msgstr "Tiempo de espera preliminar:"

#: sys-utils/wdctl.c:520
msgid "Timeleft:"
msgstr "Tiempo restante:"

# Nota: si se pone Dispositivo no queda bien el resto de la línea.
#: sys-utils/wdctl.c:576
msgid "Device:"
msgstr "Dispositivo:"

#: sys-utils/wdctl.c:578
msgid "Identity:"
msgstr "Identidad:"

#: sys-utils/wdctl.c:580
msgid "version"
msgstr "versión"

#: sys-utils/wdctl.c:690
msgid "No default device is available."
msgstr "Ningún dispositivo predeterminado está disponible."

#: sys-utils/zramctl.c:75
msgid "zram device name"
msgstr "nombre de dispositivo zram"

#: sys-utils/zramctl.c:76
msgid "limit on the uncompressed amount of data"
msgstr "límite de la cantidad de datos no comprimidos"

#: sys-utils/zramctl.c:77
msgid "uncompressed size of stored data"
msgstr "tamaño no comprimido de los datos almacenados"

#: sys-utils/zramctl.c:78
msgid "compressed size of stored data"
msgstr "tamaño comprimido de los datos almacenados"

#: sys-utils/zramctl.c:79
msgid "the selected compression algorithm"
msgstr "el algoritmo de compresión seleccionado"

#: sys-utils/zramctl.c:80
msgid "number of concurrent compress operations"
msgstr "número de operaciones de compresión concurrentes"

#: sys-utils/zramctl.c:81
msgid "empty pages with no allocated memory"
msgstr "páginas vacías sin memoria asignada"

#: sys-utils/zramctl.c:82
msgid "all memory including allocator fragmentation and metadata overhead"
msgstr "toda la memoria incluidos la fragmentación del asignador y la sobrecarga de los metadatos"

#: sys-utils/zramctl.c:83
msgid "memory limit used to store compressed data"
msgstr "límite de memoria utilizada para almacenar datos comprimidos"

#: sys-utils/zramctl.c:84
msgid "memory zram have been consumed to store compressed data"
msgstr "se ha consumido la memoria zram para almacenar datos comprimidos"

#: sys-utils/zramctl.c:85
msgid "number of objects migrated by compaction"
msgstr "número de objetos migrados por compactación"

#: sys-utils/zramctl.c:378
msgid "Failed to parse mm_stat"
msgstr "fallo al analizar mm_stat"

#: sys-utils/zramctl.c:541
#, c-format
msgid ""
" %1$s [options] <device>\n"
" %1$s -r <device> [...]\n"
" %1$s [options] -f | <device> -s <size>\n"
msgstr ""
" %1$s [opciones] [<dispositivo>]\n"
" %1$s -r <dispositivo> [...]\n"
" %1$s [opciones] -f | <dispositivo> -s <tamaño>\n"

#: sys-utils/zramctl.c:547
msgid "Set up and control zram devices.\n"
msgstr "Configura y controla los dispositivos zram.\n"

#: sys-utils/zramctl.c:550
msgid " -a, --algorithm lzo|lz4|lz4hc|deflate|842   compression algorithm to use\n"
msgstr " -a, --algorithm lzo|lz4|lz4hc|deflate|842   algoritmo de compresión utilizado\n"

#: sys-utils/zramctl.c:551
msgid " -b, --bytes               print sizes in bytes rather than in human readable format\n"
msgstr " -b, --bytes               imprime los tamaños en bytes en lugar de formato legible para humanos\n"

#: sys-utils/zramctl.c:552
msgid " -f, --find                find a free device\n"
msgstr " -f, --find                encuentra un dispositivo no utilizado\n"

#: sys-utils/zramctl.c:553
msgid " -n, --noheadings          don't print headings\n"
msgstr " -n, --noheadings          no imprime encabezados\n"

#: sys-utils/zramctl.c:554
msgid " -o, --output <list>       columns to use for status output\n"
msgstr " -o, --output <lista>      define las columnas de la salida\n"

#: sys-utils/zramctl.c:555
msgid "     --output-all          output all columns\n"
msgstr "     --output-all          saca todas las columnas\n"

#: sys-utils/zramctl.c:556
msgid "     --raw                 use raw status output format\n"
msgstr "     --raw                 utiliza el formato de salida en bruto\n"

#: sys-utils/zramctl.c:557
msgid " -r, --reset               reset all specified devices\n"
msgstr " -r, --reset               reinicia todos los dispositivos especificados\n"

#: sys-utils/zramctl.c:558
msgid " -s, --size <size>         device size\n"
msgstr " -s, --size <tamaño>       tamaño del dispositivo\n"

#: sys-utils/zramctl.c:559
msgid " -t, --streams <number>    number of compression streams\n"
msgstr " -t, --streams <número>    número de flujos de compresión\n"

#: sys-utils/zramctl.c:654
msgid "failed to parse streams"
msgstr "fallo al analizar los flujos"

#: sys-utils/zramctl.c:676
msgid "option --find is mutually exclusive with <device>"
msgstr "la opción --find es mutuamente excluyente con <dispositivo>"

#: sys-utils/zramctl.c:682
msgid "only one <device> at a time is allowed"
msgstr "solo se admite un <dispositivo> a la vez"

#: sys-utils/zramctl.c:685
msgid "options --algorithm and --streams must be combined with --size"
msgstr "las opciones --algorithm y --streams han de combinarse con --size"

#: sys-utils/zramctl.c:718 sys-utils/zramctl.c:747
#, c-format
msgid "%s: failed to reset"
msgstr "%s: fallo al reiniciar"

#: sys-utils/zramctl.c:729 sys-utils/zramctl.c:737
msgid "no free zram device found"
msgstr "no se ha encontrado ningún dispositivo zram libre"

#: sys-utils/zramctl.c:751
#, c-format
msgid "%s: failed to set number of streams"
msgstr "%s: no se ha podido establecer el número de flujos"

#: sys-utils/zramctl.c:755
#, c-format
msgid "%s: failed to set algorithm"
msgstr "%s: fallo al configurar algoritmo"

#: sys-utils/zramctl.c:758
#, c-format
msgid "%s: failed to set disksize (%ju bytes)"
msgstr "%s: fallo al configurar el tamaño del disco (%ju bytes)"

#: term-utils/agetty.c:492
#, c-format
msgid "%s%s (automatic login)\n"
msgstr "%s%s (inicio de sesión automático)\n"

#: term-utils/agetty.c:549
#, c-format
msgid "%s: can't change root directory %s: %m"
msgstr "%s: no se puede cambiar el directorio raíz %s: %m"

#: term-utils/agetty.c:552
#, c-format
msgid "%s: can't change working directory %s: %m"
msgstr "%s: no se puede cambiar el directorio de trabajo %s: %m"

#: term-utils/agetty.c:555
#, c-format
msgid "%s: can't change process priority: %m"
msgstr "%s: no se puede cambiar la prioridad del proceso: %m"

#: term-utils/agetty.c:566
#, c-format
msgid "%s: can't exec %s: %m"
msgstr "%s: no se puede ejecutar %s: %m"

#: term-utils/agetty.c:597 term-utils/agetty.c:935 term-utils/agetty.c:1479
#: term-utils/agetty.c:1497 term-utils/agetty.c:1534 term-utils/agetty.c:1544
#: term-utils/agetty.c:1586 term-utils/agetty.c:1947 term-utils/agetty.c:2303
#: term-utils/agetty.c:2864
#, c-format
msgid "failed to allocate memory: %m"
msgstr "mo se ha podido asignar memoria: %m"

#: term-utils/agetty.c:774
msgid "invalid delay argument"
msgstr "valor de retardo no válido"

#: term-utils/agetty.c:812
msgid "invalid argument of --local-line"
msgstr "argumento de --local-line no válido"

#: term-utils/agetty.c:831
msgid "invalid nice argument"
msgstr "el argumento «nice» no es válido"

#: term-utils/agetty.c:940
#, c-format
msgid "bad speed: %s"
msgstr "velocidad incorrecta: %s"

#: term-utils/agetty.c:942
msgid "too many alternate speeds"
msgstr "demasiadas velocidades alternativas"

#: term-utils/agetty.c:1049 term-utils/agetty.c:1053 term-utils/agetty.c:1106
#, c-format
msgid "/dev/%s: cannot open as standard input: %m"
msgstr "/dev/%s: no se puede abrir como entrada estándar: %m"

#: term-utils/agetty.c:1072
#, c-format
msgid "/dev/%s: not a character device"
msgstr "/dev/%s: no es un dispositivo de caracteres"

#: term-utils/agetty.c:1074
#, c-format
msgid "/dev/%s: not a tty"
msgstr "/dev/%s: no es un terminal"

#: term-utils/agetty.c:1078 term-utils/agetty.c:1110
#, c-format
msgid "/dev/%s: cannot get controlling tty: %m"
msgstr "/dev/%s: no se puede obtener el terminal de control: %m"

#: term-utils/agetty.c:1100
#, c-format
msgid "/dev/%s: vhangup() failed: %m"
msgstr "/dev/%s: vhangup() ha fallado: %m"

#: term-utils/agetty.c:1121
#, c-format
msgid "%s: not open for read/write"
msgstr "%s: no abierto para lectura/escritura"

#: term-utils/agetty.c:1126
#, c-format
msgid "/dev/%s: cannot set process group: %m"
msgstr "/dev/%s: no se puede establecer el grupo del proceso: %m"

#: term-utils/agetty.c:1140
#, c-format
msgid "%s: dup problem: %m"
msgstr "%s: problema de dup: %m"

#: term-utils/agetty.c:1157
#, c-format
msgid "%s: failed to get terminal attributes: %m"
msgstr "%s: no se han podido obtener los atributos del terminal: %m"

#: term-utils/agetty.c:1376 term-utils/agetty.c:1405
#, c-format
msgid "setting terminal attributes failed: %m"
msgstr "fallo al establecer los atributos del terminal: %m"

#: term-utils/agetty.c:1524
msgid "cannot open os-release file"
msgstr "no se puede abrir el fichero «os-release»"

#: term-utils/agetty.c:1691
#, c-format
msgid "failed to create reload file: %s: %m"
msgstr "no se ha podido crear el fichero de recarga: %s: %m"

#: term-utils/agetty.c:2011
#, c-format
msgid "failed to get terminal attributes: %m"
msgstr "no se han podido obtener los atributos del terminal: %m"

#: term-utils/agetty.c:2033
msgid "[press ENTER to login]"
msgstr "[presione ENTER para iniciar sesión]"

#: term-utils/agetty.c:2060
msgid "Num Lock off"
msgstr "Bloqueo del teclado numérico desactivado"

#: term-utils/agetty.c:2063
msgid "Num Lock on"
msgstr "Bloqueo del teclado numérico activado"

#: term-utils/agetty.c:2066
msgid "Caps Lock on"
msgstr "Bloqueo de mayúsculas activado"

#: term-utils/agetty.c:2069
msgid "Scroll Lock on"
msgstr "Bloqueo de desplazamiento activado"

#: term-utils/agetty.c:2072
#, c-format
msgid ""
"Hint: %s\n"
"\n"
msgstr ""
"Pista: %s\n"
"\n"

#: term-utils/agetty.c:2214
#, c-format
msgid "%s: read: %m"
msgstr "%s: lectura: %m"

#: term-utils/agetty.c:2279
#, c-format
msgid "%s: input overrun"
msgstr "%s: desbordamiento de entrada"

#: term-utils/agetty.c:2299 term-utils/agetty.c:2307
#, c-format
msgid "%s: invalid character conversion for login name"
msgstr "%s: conversión de carácter no válida para el nombre de inicio de sesión"

#: term-utils/agetty.c:2313
#, c-format
msgid "%s: invalid character 0x%x in login name"
msgstr "%s: carácter no váldo 0x%x en el nombre de inicio de seisión"

#: term-utils/agetty.c:2398
#, c-format
msgid "%s: failed to set terminal attributes: %m"
msgstr "%s: no se ihan podido establecer los atributos del terminal: %m"

#: term-utils/agetty.c:2436
#, c-format
msgid ""
" %1$s [options] <line> [<baud_rate>,...] [<termtype>]\n"
" %1$s [options] <baud_rate>,... <line> [<termtype>]\n"
msgstr ""
" %1$s [opciones] <línea> [<veloc_baudios>,...] [<tipoterm>]\n"
" %1$s [opciones] <veloc_baudios>,... <línea> [<tipoterm>]\n"

#: term-utils/agetty.c:2440
msgid "Open a terminal and set its mode.\n"
msgstr "Abre un terminal y configura su modo.\n"

#: term-utils/agetty.c:2443
msgid " -8, --8bits                assume 8-bit tty\n"
msgstr " -8, --8bits                asume terminal de 8 bits\n"

#: term-utils/agetty.c:2444
msgid " -a, --autologin <user>     login the specified user automatically\n"
msgstr " -a, --autologin <usuario>  incia sesión automáticamente con el usuario especificado\n"

#: term-utils/agetty.c:2445
msgid " -c, --noreset              do not reset control mode\n"
msgstr " -c, --noreset              no reicia el modo de control\n"

#: term-utils/agetty.c:2446
msgid " -E, --remote               use -r <hostname> for login(1)\n"
msgstr " -E, --remote               utiliza -r <nombremáquina> para login(1)\n"

#: term-utils/agetty.c:2447
#, fuzzy
msgid " -f, --issue-file <list>    display issue files or directories\n"
msgstr " -f, --issue-file <fichero> muestra el fichero issue\n"

#: term-utils/agetty.c:2448
msgid "     --show-issue           display issue file and exit\n"
msgstr "     --show-issue           muestra el fichero issue y termina\n"

#: term-utils/agetty.c:2449
msgid " -h, --flow-control         enable hardware flow control\n"
msgstr " -h, --flow-control         activa el control de flujo por hardware\n"

#: term-utils/agetty.c:2450
msgid " -H, --host <hostname>      specify login host\n"
msgstr " -H, --host <nombremáquina> especifica máquina para inicio de sesión\n"

#: term-utils/agetty.c:2451
msgid " -i, --noissue              do not display issue file\n"
msgstr " -i, --noissue              no muestra el fichero issue\n"

#: term-utils/agetty.c:2452
msgid " -I, --init-string <string> set init string\n"
msgstr " -I, --init-string <cadena> establece la cadena de inicio\n"

#: term-utils/agetty.c:2453
msgid " -J  --noclear              do not clear the screen before prompt\n"
msgstr " -J, --noclear              no limpia la pantalla antes de sacar el indicador\n"

#: term-utils/agetty.c:2454
msgid " -l, --login-program <file> specify login program\n"
msgstr " -l, --login-program <fich> especifica el programa de inicio de sesión\n"

#: term-utils/agetty.c:2455
msgid " -L, --local-line[=<mode>]  control the local line flag\n"
msgstr " -L, --local-line[=<modo>]  controla el indicador de línea local\n"

#: term-utils/agetty.c:2456
msgid " -m, --extract-baud         extract baud rate during connect\n"
msgstr " -m, --extract-baud         extrae la velocidad en baudios durante la conexión\n"

#: term-utils/agetty.c:2457
msgid " -n, --skip-login           do not prompt for login\n"
msgstr " -n, --skip-login           no pregunta para iniciar sesión\n"

#: term-utils/agetty.c:2458
msgid " -N  --nonewline            do not print a newline before issue\n"
msgstr " -N, --nonewline            no imprime un salto de línea antes de issue\n"

#: term-utils/agetty.c:2459
msgid " -o, --login-options <opts> options that are passed to login\n"
msgstr " -o, --login-options <opcs> opciones que se pasan al iniciar sesión\n"

#: term-utils/agetty.c:2460
msgid " -p, --login-pause          wait for any key before the login\n"
msgstr " -p, --login-pause          espera a que se pulse una tecla antes de iniciar sesión\n"

#: term-utils/agetty.c:2461
msgid " -r, --chroot <dir>         change root to the directory\n"
msgstr " -r. --chroot <dir>         establece como raíz el directorio especificado\n"

#: term-utils/agetty.c:2462
msgid " -R, --hangup               do virtually hangup on the tty\n"
msgstr " -R, --hangup               cuelga virtualmente en el terminal\n"

#: term-utils/agetty.c:2463
msgid " -s, --keep-baud            try to keep baud rate after break\n"
msgstr " -s, --keep-baud            tarta de mantener la velocidad en baudios tras cortar\n"

#: term-utils/agetty.c:2464
msgid " -t, --timeout <number>     login process timeout\n"
msgstr " -t, --timeout <número>     tiempo límite del proceso de inicio de sesión\n"

#: term-utils/agetty.c:2465
msgid " -U, --detect-case          detect uppercase terminal\n"
msgstr " -U, --detect-case          detecta terminal de mayúsculas\n"

#: term-utils/agetty.c:2466
msgid " -w, --wait-cr              wait carriage-return\n"
msgstr " -w, --wait-cr              espera al retorno de carro\n"

#: term-utils/agetty.c:2467
msgid "     --nohints              do not print hints\n"
msgstr "     --nohints              no imprime pistas\n"

#: term-utils/agetty.c:2468
msgid "     --nohostname           no hostname at all will be shown\n"
msgstr "     --nohostname           no se muestra ningún nombre de máquina en absoluto\n"

#: term-utils/agetty.c:2469
msgid "     --long-hostname        show full qualified hostname\n"
msgstr "     --long-hostname        muestra el nombrede máquina completamente cualificado\n"

#: term-utils/agetty.c:2470
msgid "     --erase-chars <string> additional backspace chars\n"
msgstr "     --erase-chars <cadena> caracteres adicionales de borrado hacia atrás\n"

#: term-utils/agetty.c:2471
msgid "     --kill-chars <string>  additional kill chars\n"
msgstr "     --kill-chars <cadena>  caracteres de terminación adicionales\n"

#: term-utils/agetty.c:2472
msgid "     --chdir <directory>    chdir before the login\n"
msgstr "     --chdir <directorio>   cambia de directorio antes de iniciar sesión\n"

#: term-utils/agetty.c:2473
msgid "     --delay <number>       sleep seconds before prompt\n"
msgstr "     --delay <número>       reposa un número de segundos antes de preguntar\n"

#: term-utils/agetty.c:2474
msgid "     --nice <number>        run login with this priority\n"
msgstr "     --nice <número>        inicia sesión con esta prioridad\n"

#: term-utils/agetty.c:2475
msgid "     --reload               reload prompts on running agetty instances\n"
msgstr "     --reload               recarga los indicadores en las instancias de agetty en ejecución\n"

#: term-utils/agetty.c:2476
msgid "     --list-speeds          display supported baud rates\n"
msgstr "     --list-speeds          muestra las tasas de baudios admitidas\n"

#: term-utils/agetty.c:2821
#, c-format
msgid "%d user"
msgid_plural "%d users"
msgstr[0] "%d usuario"
msgstr[1] "%d usuarios"

#: term-utils/agetty.c:2952
#, c-format
msgid "checkname failed: %m"
msgstr "error de comprobación de nombre: %m"

#: term-utils/agetty.c:2964
#, c-format
msgid "cannot touch file %s"
msgstr "no se puede tocar el fichero %s"

#: term-utils/agetty.c:2968
msgid "--reload is unsupported on your system"
msgstr "--reload no se admite en su sistema"

#: term-utils/mesg.c:78
#, c-format
msgid " %s [options] [y | n]\n"
msgstr " %s [opciones] [y(sí) | n(no)]\n"

#: term-utils/mesg.c:81
msgid "Control write access of other users to your terminal.\n"
msgstr "Controla el acceso de escritura de otros usuarios a su terminal.\n"

#: term-utils/mesg.c:84
msgid " -v, --verbose  explain what is being done\n"
msgstr " -v, --verbose  explica lo que se está haciendo\n"

#: term-utils/mesg.c:130
msgid "no tty"
msgstr "ningún tty"

#: term-utils/mesg.c:139
#, c-format
msgid "ttyname() failed, attempting to go around using: %s"
msgstr "ttyname() ha fallado; se está intentando soslayar utilizando: %s"

#: term-utils/mesg.c:150
msgid "is y"
msgstr "es y"

#: term-utils/mesg.c:153
msgid "is n"
msgstr "es n"

#: term-utils/mesg.c:164 term-utils/mesg.c:171
#, c-format
msgid "change %s mode failed"
msgstr "fallo en el cambio de modo %s"

#: term-utils/mesg.c:166
msgid "write access to your terminal is allowed"
msgstr "a su terminal le está permitido el acceso para escritura"

#: term-utils/mesg.c:173
msgid "write access to your terminal is denied"
msgstr "a su terminal le está denegado el acceso para escritura"

#: term-utils/script.c:190
#, c-format
msgid " %s [options] [file]\n"
msgstr " %s [opciones] [fichero]\n"

#: term-utils/script.c:193
msgid "Make a typescript of a terminal session.\n"
msgstr "Crea una transcripción de una sesión de terminal.\n"

#: term-utils/script.c:196
msgid " -I, --log-in <file>           log stdin to file\n"
msgstr " -I, --log-in <fichero>        anota la entrada estándar en un fichero\n"

#: term-utils/script.c:197
msgid " -O, --log-out <file>          log stdout to file (default)\n"
msgstr " -O, --log-out <fichero>        anota la salida estándar en un fichero (opción predeterminada)\n"

#: term-utils/script.c:198
msgid " -B, --log-io <file>           log stdin and stdout to file\n"
msgstr " -B, --log-io <fichero>        anota la entrada y la salida estándar en un fichero\n"

#: term-utils/script.c:201
msgid " -T, --log-timing <file>       log timing information to file\n"
msgstr " -T, --log-timing <fichero>    anota la información de tiempos en un fichero\n"

#: term-utils/script.c:202
msgid " -t[<file>], --timing[=<file>] deprecated alias to -T (default file is stderr)\n"
msgstr ""
" -t[<fichero>], --timing[=<fichero>]\n"
"                               alias obsoleto de -T (el fichero predeterminado es la salida de error estándar)\n"

#: term-utils/script.c:203
msgid " -m, --logging-format <name>   force to 'classic' or 'advanced' format\n"
msgstr " -m, --logging-format <nombre> impone el formato 'clásico' o 'avanzado'\n"

#: term-utils/script.c:206
msgid " -a, --append                  append to the log file\n"
msgstr " -a, --append                  añade en el fichero de log\n"

#: term-utils/script.c:207
msgid " -c, --command <command>       run command rather than interactive shell\n"
msgstr " -c, --command <orden>         ejecuta una orden en lugar de una shell interactiva\n"

#: term-utils/script.c:208
msgid " -e, --return                  return exit code of the child process\n"
msgstr " -e, --return                  devuelve el código de salida del proceso hijo\n"

#: term-utils/script.c:209
msgid " -f, --flush                   run flush after each write\n"
msgstr " -f, --flush                   ejecuta flush después de cada escritura\n"

#: term-utils/script.c:210
msgid "     --force                   use output file even when it is a link\n"
msgstr "     --force                   utiliza fichero de salida incluso cuando es un enlace\n"

#: term-utils/script.c:211
msgid " -E, --echo <when>             echo input (auto, always or never)\n"
msgstr " -E, --echo <cuándo>           repite la entrada («auto», «always» (siempre) o «never» (nunca))\n"

#: term-utils/script.c:212
msgid " -o, --output-limit <size>     terminate if output files exceed size\n"
msgstr " -o, --output-limit <tamaño>   finaliza si los ficheros de salida exceden el tamaño\n"

#: term-utils/script.c:213
msgid " -q, --quiet                   be quiet\n"
msgstr " -q, --quiet                   es silencioso\n"

#: term-utils/script.c:296
#, c-format
msgid ""
"\n"
"Script done on %s [<%s>]\n"
msgstr ""
"\n"
"Script terminado en %s [<%s>]\n"

#: term-utils/script.c:298
#, c-format
msgid ""
"\n"
"Script done on %s [COMMAND_EXIT_CODE=\"%d\"]\n"
msgstr ""
"\n"
"Script terminado en %s [CÓDIGO_SALIDA_ORDEN=\"%d\"]\n"

#: term-utils/script.c:394
#, c-format
msgid "Script started on %s ["
msgstr "Script iniciado en %s ["

#: term-utils/script.c:406
#, c-format
msgid "<not executed on terminal>"
msgstr "<no ejecutado en terminal>"

#: term-utils/script.c:680
#, c-format
msgid "Script terminated, max output files size %<PRIu64> exceeded.\n"
msgstr "Script terminado; se ha excedido el tamaño máximo %<PRIu64> de ficheros de salida.\n"

#: term-utils/script.c:682
msgid "max output size exceeded"
msgstr "tamaño máximo de la salida excedido"

#: term-utils/script.c:743
#, c-format
msgid ""
"output file `%s' is a link\n"
"Use --force if you really want to use it.\n"
"Program not started."
msgstr ""
"el fichero de salida '%s' es un enlace\n"
"Utilice --force si quiere utilizarlo de verdad.\n"
"No se inicia el programa."

#: term-utils/script.c:827
#, c-format
msgid "unssuported echo mode: '%s'"
msgstr "modo de repetición no implementado: '%s'"

#: term-utils/script.c:852
msgid "failed to parse output limit size"
msgstr "error al analizar el tamaño del límite de la salida"

#: term-utils/script.c:863
#, c-format
msgid "unsupported logging format: '%s'"
msgstr "formato de anotación no admitido: '%s'"

#: term-utils/script.c:907
msgid "log multiple streams is mutually exclusive with 'classic' format"
msgstr "la anotación de múltiples flujos es mutuamente excluyente con el formato 'clásico'"

#: term-utils/script.c:934
#, c-format
msgid "Script started"
msgstr "Script iniciado"

#: term-utils/script.c:936
#, c-format
msgid ", output log file is '%s'"
msgstr ", el fichero de anotación de salida es '%s'"

#: term-utils/script.c:938
#, c-format
msgid ", input log file is '%s'"
msgstr ", el fichero de anotación de entrada es '%s'"

#: term-utils/script.c:940
#, c-format
msgid ", timing file is '%s'"
msgstr ", el fichero de tiempos es '%s'"

#: term-utils/script.c:941
#, c-format
msgid ".\n"
msgstr ".\n"

#: term-utils/script.c:1047
#, c-format
msgid "Script done.\n"
msgstr "Script finalizado.\n"

#: term-utils/scriptlive.c:60
#, c-format
msgid " %s [-t] timingfile [-I|-B] typescript\n"
msgstr " %s [-t] fichero_de_tiempos [-I|-B] fichero_de_transcripción\n"

#: term-utils/scriptlive.c:64
msgid "Execute terminal typescript.\n"
msgstr "Ejecuta fichero de transcripción de terminal.\n"

#: term-utils/scriptlive.c:67 term-utils/scriptreplay.c:56
msgid " -t, --timing <file>     script timing log file\n"
msgstr " -t, --timing <fichero>  fichero de anotación de tiempos de script\n"

#: term-utils/scriptlive.c:68 term-utils/scriptreplay.c:57
msgid " -T, --log-timing <file> alias to -t\n"
msgstr " -T, --log-timing <fichero> alias de -t\n"

#: term-utils/scriptlive.c:69 term-utils/scriptreplay.c:58
msgid " -I, --log-in <file>     script stdin log file\n"
msgstr " -I, --log-in <fichero>  fichero de anotación de entrada estándar de script\n"

#: term-utils/scriptlive.c:70 term-utils/scriptreplay.c:60
msgid " -B, --log-io <file>     script stdin and stdout log file\n"
msgstr " -B, --log-io <fichero>  fichero de anotación de entrada y salida estándar de script\n"

#: term-utils/scriptlive.c:73
msgid " -c, --command <command> run command rather than interactive shell\n"
msgstr " -c, --command <orden>   ejecuta una orden en lugar de una shell interactiva\n"

#: term-utils/scriptlive.c:74 term-utils/scriptreplay.c:66
msgid " -d, --divisor <num>     speed up or slow down execution with time divisor\n"
msgstr " -d, --divisor <número>  acelera o ralentiza la ejecución con un divisor de tiempo\n"

#: term-utils/scriptlive.c:75 term-utils/scriptreplay.c:67
msgid " -m, --maxdelay <num>    wait at most this many seconds between updates\n"
msgstr " -m, --maxdelay <número> espera como mucho estos segundos entre actualizaciones\n"

#: term-utils/scriptlive.c:226 term-utils/scriptreplay.c:212
msgid "failed to parse maximal delay argument"
msgstr "no se ha podido analizar el argumento de retardo máximo"

#: term-utils/scriptlive.c:249 term-utils/scriptreplay.c:253
msgid "timing file not specified"
msgstr "no se ha especificado ningún fichero de tiempos"

#: term-utils/scriptlive.c:251
msgid "stdin typescript file not specified"
msgstr "no se ha especificado ningún fichero de transcripción de entrada estándar"

#: term-utils/scriptlive.c:277
#, c-format
msgid ">>> scriptlive: Starting your typescript execution by %s.\n"
msgstr ">>> scriptlive: Iniciando la ejecución del script de transcripción por %s.\n"

#: term-utils/scriptlive.c:284
msgid "failed to allocate PTY handler"
msgstr "no se ha podido asignar el manejador de PTY"

#: term-utils/scriptlive.c:363
#, c-format
msgid ""
"\n"
">>> scriptlive: done.\n"
msgstr ""
"\n"
">>> scriptlive: finalizado.\n"

#: term-utils/scriptreplay.c:49
#, c-format
msgid " %s [-t] timingfile [typescript] [divisor]\n"
msgstr " %s [-t] fichero_de_tiempos [fichero_de_transcripción] [divisor]\n"

#: term-utils/scriptreplay.c:53
msgid "Play back terminal typescripts, using timing information.\n"
msgstr "Reproduce los ficheros de transcripción del terminal, utilizando la información temporal\n"

#: term-utils/scriptreplay.c:59
msgid " -O, --log-out <file>    script stdout log file (default)\n"
msgstr " -O, --log-out <fichero> fichero de anotación de salida estándar del script (opción predeterminada)\n"

#: term-utils/scriptreplay.c:62
msgid " -s, --typescript <file> deprecated alias to -O\n"
msgstr " -s, --typescript <fichero> alias obsoleto de -O\n"

#: term-utils/scriptreplay.c:65
msgid "     --summary           display overview about recorded session and exit\n"
msgstr "     --summary           muestra un resumen de la sesión grabada y termina\n"

#: term-utils/scriptreplay.c:68
msgid " -x, --stream <name>     stream type (out, in, signal or info)\n"
msgstr " -x, --stream <nombre>   tipo de flujo (out, in, signal o info)\n"

#: term-utils/scriptreplay.c:69
msgid " -c, --cr-mode <type>    CR char mode (auto, never, always)\n"
msgstr " -c, --cr-mode <tipo>    modo de caracteres CR (auto, never, always)\n"

#: term-utils/scriptreplay.c:191
#, c-format
msgid "unsupported mode name: '%s'"
msgstr "nombre de modo no admitido: '%s'"

#: term-utils/scriptreplay.c:224
#, c-format
msgid "unsupported stream name: '%s'"
msgstr "nombre de flujo no admitido: '%s'"

#: term-utils/scriptreplay.c:255
msgid "data log file not specified"
msgstr "no se ha especificado ningún fichero de anotación de datos"

#: term-utils/scriptreplay.c:304
#, c-format
msgid "%s: log file error"
msgstr "%s: error en fichero de anotación"

#: term-utils/scriptreplay.c:306
#, c-format
msgid "%s: line %d: timing file error"
msgstr "%s: línea %d: error en fichero de tiempos"

#: term-utils/setterm.c:237
#, c-format
msgid "argument error: bright %s is not supported"
msgstr "error en el argumento: %s brillante no está admitido"

#: term-utils/setterm.c:328
msgid "too many tabs"
msgstr "demasiados tabuladores"

#: term-utils/setterm.c:384
msgid "Set the attributes of a terminal.\n"
msgstr "Configura las características de un terminal.\n"

#: term-utils/setterm.c:387
msgid " --term <terminal_name>        override TERM environment variable\n"
msgstr " --term <nombre_terminal>      anula la variable de entorno TERM\n"

#: term-utils/setterm.c:388
msgid " --reset                       reset terminal to power-on state\n"
msgstr " --reset                       reinicia el terminal en estado encendido\n"

#: term-utils/setterm.c:389
msgid " --resize                      reset terminal rows and columns\n"
msgstr " --resize                      restablece las filas y columnas del terminal\n"

#: term-utils/setterm.c:390
msgid " --initialize                  display init string, and use default settings\n"
msgstr " --initialize                  muestra la cadena de inicio y utiliza los ajustes predeterminados\n"

#: term-utils/setterm.c:391
msgid " --default                     use default terminal settings\n"
msgstr " --default                     utiliza los ajustes del terminal predeterminados\n"

#: term-utils/setterm.c:392
msgid " --store                       save current terminal settings as default\n"
msgstr " --store                       guarda los ajustes actuales del terminal como predeterminados\n"

#: term-utils/setterm.c:395
msgid " --cursor on|off               display cursor\n"
msgstr " --cursor on|off               muestra el cursor\n"

#: term-utils/setterm.c:396
msgid " --repeat on|off               keyboard repeat\n"
msgstr " --repeat on|off               repetición del teclado\n"

#: term-utils/setterm.c:397
msgid " --appcursorkeys on|off        cursor key application mode\n"
msgstr " --appcursorkeys on|off        modo de aplicación de las teclas de cursor\n"

#: term-utils/setterm.c:398
msgid " --linewrap on|off             continue on a new line when a line is full\n"
msgstr " --linewrap on|off             continúa en una línea nueva cuando una línea está llena\n"

#: term-utils/setterm.c:399
msgid " --inversescreen on|off        swap colors for the whole screen\n"
msgstr " --inversescreen on|off        invierte los colores de la pantalla entera\n"

#: term-utils/setterm.c:402
msgid " --msg on|off                  send kernel messages to console\n"
msgstr " --msg on|off                  envía los mensajes del núcleo a la consola\n"

#: term-utils/setterm.c:403
msgid " --msglevel <0-8>              kernel console log level\n"
msgstr " --msglevel <0-8>              nivel de «log» de la consola del núcleo\n"

#: term-utils/setterm.c:406
msgid " --foreground default|<color>  set foreground color\n"
msgstr " --foreground default|<color>  establece el color del texto\n"

#: term-utils/setterm.c:407
msgid " --background default|<color>  set background color\n"
msgstr " --background default|<color>  establece el color del fondo\n"

#: term-utils/setterm.c:408
msgid " --ulcolor [bright] <color>    set underlined text color\n"
msgstr " --ulcolor [bright] <color>    establece el color del texto subrayado\n"

#: term-utils/setterm.c:409
msgid " --hbcolor [bright] <color>    set half-bright text color\n"
msgstr " --hbcolor [bright] <color>    establece el color del texto a medio brillo\n"

#: term-utils/setterm.c:410
msgid "        <color>: black blue cyan green grey magenta red white yellow\n"
msgstr "        <color>: black blue cyan green grey magenta red white yellow\n"

#: term-utils/setterm.c:413
msgid " --bold on|off                 bold\n"
msgstr " --bold on|off                 negrita\n"

#: term-utils/setterm.c:414
msgid " --half-bright on|off          dim\n"
msgstr " --half-bright on|off          oscurecido\n"

#: term-utils/setterm.c:415
msgid " --blink on|off                blink\n"
msgstr " --blink on|off                parpadeo\n"

#: term-utils/setterm.c:416
msgid " --underline on|off            underline\n"
msgstr " --underline on|off            subrayado\n"

#: term-utils/setterm.c:417
msgid " --reverse  on|off             swap foreground and background colors\n"
msgstr " --reverse on|off              intercambia los colores del texto y del fondo\n"

#: term-utils/setterm.c:420
msgid " --clear[=<all|rest>]          clear screen and set cursor position\n"
msgstr " --clear[=<all|rest>]          limpia la pantalla y define la posición del cursor\n"

#: term-utils/setterm.c:421
msgid " --tabs[=<number>...]          set these tab stop positions, or show them\n"
msgstr " --tabs[=<número>...]          establece estas posiciones de tabulación o las muestra\n"

#: term-utils/setterm.c:422
msgid " --clrtabs[=<number>...]       clear these tab stop positions, or all\n"
msgstr " --clrtabs[=<número>...]       borra estas posiciones de tabulación o todas ellas\n"

#: term-utils/setterm.c:423
msgid " --regtabs[=1-160]             set a regular tab stop interval\n"
msgstr " --regtabs[=1-160]             fija un intervalo de tabulación\n"

#: term-utils/setterm.c:424
msgid " --blank[=0-60|force|poke]     set time of inactivity before screen blanks\n"
msgstr " --blank[=0-60|force|poke]     establece el tiempo de inactividad que precederá al oscurecimiento de la pantalla\n"

#: term-utils/setterm.c:427
msgid " --dump[=<number>]             write vcsa<number> console dump to file\n"
msgstr " --dump[=<número>]             escribe el volcado de la consola vcsa<número> en un fichero\n"

#: term-utils/setterm.c:428
msgid " --append <number>             append vcsa<number> console dump to file\n"
msgstr " --append <número>             añade el volcado de la consola vcsa<número> a un fichero\n"

#: term-utils/setterm.c:429
msgid " --file <filename>             name of the dump file\n"
msgstr " --file <nomfich>              nombre del fichero de volcado\n"

#: term-utils/setterm.c:432
msgid " --powersave on|vsync|hsync|powerdown|off\n"
msgstr " --powersave on|vsync|hsync|powerdown|off\n"

#: term-utils/setterm.c:433
msgid "                               set vesa powersaving features\n"
msgstr "                               establece las características de ahorro de potencia de vesa\n"

#: term-utils/setterm.c:434
msgid " --powerdown[=<0-60>]          set vesa powerdown interval in minutes\n"
msgstr " --powerdown[=<0-60>]          establece el intervalo de apagado de vesa en minutos\n"

#: term-utils/setterm.c:437
msgid " --blength[=<0-2000>]          duration of the bell in milliseconds\n"
msgstr " --blength[=<0-2000>]          duración de la campana en milisegundos\n"

#: term-utils/setterm.c:438
msgid " --bfreq[=<number>]            bell frequency in Hertz\n"
msgstr " --bfreq[=<número>]            frecuencia de la campana en hercios\n"

#: term-utils/setterm.c:451
msgid "duplicate use of an option"
msgstr "uso duplicado de una opción"

#: term-utils/setterm.c:763
msgid "cannot force blank"
msgstr "no se puede forzar el ponerse en blanco"

#: term-utils/setterm.c:768
msgid "cannot force unblank"
msgstr "no se puede forzar el no ponerse en blanco"

#: term-utils/setterm.c:774
msgid "cannot get blank status"
msgstr "no se puede obtener el estado del ponerse en blanco"

#: term-utils/setterm.c:799
#, c-format
msgid "cannot open dump file %s for output"
msgstr "no se puede abrir el fichero de volcado %s para salida"

#: term-utils/setterm.c:840
#, c-format
msgid "terminal %s does not support %s"
msgstr "el terminal %s no admite %s"

#: term-utils/setterm.c:878
msgid "select failed"
msgstr "select ha fallado"

#: term-utils/setterm.c:904
msgid "stdin does not refer to a terminal"
msgstr "stdin no hace referencia a un terminal"

#: term-utils/setterm.c:932
#, c-format
msgid "invalid cursor position: %s"
msgstr "posición del cursor no válida: %s"

#: term-utils/setterm.c:954
msgid "reset failed"
msgstr "reset ha fallado"

#: term-utils/setterm.c:1118
msgid "cannot (un)set powersave mode"
msgstr "No se puede (des)activar el modo de ahorro de alimentación"

#: term-utils/setterm.c:1137 term-utils/setterm.c:1146
msgid "klogctl error"
msgstr "error de klogctl"

#: term-utils/setterm.c:1167
msgid "$TERM is not defined."
msgstr "$TERM no está definido."

#: term-utils/setterm.c:1174
msgid "terminfo database cannot be found"
msgstr "no se puede encontrar la base de datos de terminfo"

#: term-utils/setterm.c:1176
#, c-format
msgid "%s: unknown terminal type"
msgstr "%s: tipo de terminal desconocido"

#: term-utils/setterm.c:1178
msgid "terminal is hardcopy"
msgstr "el terminal es una copia impresa"

#: term-utils/ttymsg.c:81
#, c-format
msgid "internal error: too many iov's"
msgstr "error interno: demasiados iov"

#: term-utils/ttymsg.c:94
#, c-format
msgid "excessively long line arg"
msgstr "argumento de línea demasiado largo"

#: term-utils/ttymsg.c:108
#, c-format
msgid "open failed"
msgstr "fallo al abrir"

#: term-utils/ttymsg.c:147
#, c-format
msgid "fork: %m"
msgstr "fork: %m"

#: term-utils/ttymsg.c:149
#, c-format
msgid "cannot fork"
msgstr "no se puede bifurcar (fork)"

#: term-utils/ttymsg.c:182
#, c-format
msgid "%s: BAD ERROR, message is far too long"
msgstr "%s: ERROR MALO: el mensaje es demasiado largo"

#: term-utils/wall.c:88
#, c-format
msgid " %s [options] [<file> | <message>]\n"
msgstr " %s [opciones] [<fichero> | <mensaje>]\n"

#: term-utils/wall.c:91
msgid "Write a message to all users.\n"
msgstr "Escribe un mensaje a todos los usuarios.\n"

#: term-utils/wall.c:94
msgid " -g, --group <group>     only send message to group\n"
msgstr " -g, --group <grupo>     envía mensaje solamente al grupo\n"

#: term-utils/wall.c:95
msgid " -n, --nobanner          do not print banner, works only for root\n"
msgstr " -n, --nobanner          no imprime mensaje inicial, solo funciona para root\n"

#: term-utils/wall.c:96
msgid " -t, --timeout <timeout> write timeout in seconds\n"
msgstr " -t, --timeout <tiempolimite> escribe el tiempo límite en segundos\n"

#: term-utils/wall.c:124
msgid "invalid group argument"
msgstr "argumento de grupo no válido"

#: term-utils/wall.c:126
#, c-format
msgid "%s: unknown gid"
msgstr "%s: gid desconocido"

#: term-utils/wall.c:169
msgid "getgrouplist found more groups than sysconf allows"
msgstr "getgrouplist ha encontrado más grupos de los que permite sysconf"

#: term-utils/wall.c:215
msgid "--nobanner is available only for root"
msgstr "--nobanner solamente está disponible para root"

#: term-utils/wall.c:220
#, c-format
msgid "invalid timeout argument: %s"
msgstr "el argumento de tiempo límite no es válido: %s"

#: term-utils/wall.c:361
msgid "cannot get passwd uid"
msgstr "no se puede obtener el uid de passwd"

#: term-utils/wall.c:385
#, c-format
msgid "Broadcast message from %s@%s (%s) (%s):"
msgstr "Mensaje de difusión general (broadcast) de %s@%s (%s) (%s):"

#: term-utils/wall.c:417
#, c-format
msgid "will not read %s - use stdin."
msgstr "no se puede leer %s - use la entrada estándar."

#: term-utils/write.c:87
#, c-format
msgid " %s [options] <user> [<ttyname>]\n"
msgstr " %s [opciones] <usuario> [<terminal>]\n"

#: term-utils/write.c:91
msgid "Send a message to another user.\n"
msgstr "Envía un mensaje a otro usuario.\n"

#: term-utils/write.c:116
#, c-format
msgid "effective gid does not match group of %s"
msgstr "el gid efectivo no concuerda con el grupo de %s"

#: term-utils/write.c:201
#, c-format
msgid "%s is not logged in"
msgstr "%s no tiene iniciada una sesión"

#: term-utils/write.c:206
msgid "can't find your tty's name"
msgstr "no se puede encontrar el nombre de su tty"

#: term-utils/write.c:211
#, c-format
msgid "%s has messages disabled"
msgstr "%s tiene los mensajes desactivados"

#: term-utils/write.c:214
#, c-format
msgid "%s is logged in more than once; writing to %s"
msgstr "%s tiene iniciada una sesión más de una vez; escribiendo en %s"

#: term-utils/write.c:237
msgid "carefulputc failed"
msgstr "carefulputc ha fallado"

#: term-utils/write.c:279
#, c-format
msgid "Message from %s@%s (as %s) on %s at %02d:%02d ..."
msgstr "Mensaje de %s@%s (como %s) en %s a las %02d:%02d ..."

#: term-utils/write.c:283
#, c-format
msgid "Message from %s@%s on %s at %02d:%02d ..."
msgstr "Mensaje de %s@%s el %s a las %02d:%02d ..."

#: term-utils/write.c:329
msgid "you have write permission turned off"
msgstr "usted tiene el permiso de escritura desactivado"

#: term-utils/write.c:352
#, c-format
msgid "%s is not logged in on %s"
msgstr "%s no tiene una sesión iniciada en %s"

#: term-utils/write.c:358
#, c-format
msgid "%s has messages disabled on %s"
msgstr "%s tiene los mensajes desactivados en %s"

#: text-utils/col.c:135
msgid "Filter out reverse line feeds.\n"
msgstr "Deja fuera avances de línea inversos.\n"

#: text-utils/col.c:138
#, c-format
msgid ""
"\n"
"Options:\n"
" -b, --no-backspaces    do not output backspaces\n"
" -f, --fine             permit forward half line feeds\n"
" -p, --pass             pass unknown control sequences\n"
" -h, --tabs             convert spaces to tabs\n"
" -x, --spaces           convert tabs to spaces\n"
" -l, --lines NUM        buffer at least NUM lines\n"
msgstr ""
"\n"
"Opciones:\n"
" -b, --no-backspaces    no saca retrocesos\n"
" -f, --fine             permite avances de media línea hacia adelante\n"
" -p, --pass             pasa secuencias de control desconocidas\n"
" -h, --tabs             convierte espacios en tabuladores\n"
" -x, --spaces           convierte tabuladores en espacios\n"
" -l, --lines NUM        guarda al menos NUM líneas\n"

#: text-utils/col.c:151 text-utils/colrm.c:69
#, c-format
msgid ""
"%s reads from standard input and writes to standard output\n"
"\n"
msgstr ""
"%s lee de la entrada estándar y escribe en la salida estándar\n"
"\n"

#: text-utils/col.c:215
msgid "bad -l argument"
msgstr "argumento -l incorrecto"

#: text-utils/col.c:246
#, c-format
msgid "failed on line %d"
msgstr "fallo en la línea %d"

#: text-utils/col.c:344
#, c-format
msgid "warning: can't back up %s."
msgstr "atención: no se puede hacer copia de seguridad de %s."

#: text-utils/col.c:345
msgid "past first line"
msgstr "más allá de primera línea"

#: text-utils/col.c:345
msgid "-- line already flushed"
msgstr "-- línea ya vaciada"

#: text-utils/colcrt.c:82 text-utils/column.c:626
#, c-format
msgid " %s [options] [<file>...]\n"
msgstr " %s [opciones] [<fichero>...]\n"

#: text-utils/colcrt.c:85
msgid "Filter nroff output for CRT previewing.\n"
msgstr "Filtra la salida de nroff para previsualización en CRT.\n"

#: text-utils/colcrt.c:88
msgid " -,  --no-underlining    suppress all underlining\n"
msgstr " -,  --no-underlining    suprime todos los subrayados\n"

#: text-utils/colcrt.c:89
msgid " -2, --half-lines        print all half-lines\n"
msgstr " -2, --half-lines        imprime todas las medias líneas\n"

#: text-utils/colrm.c:60
#, c-format
msgid ""
"\n"
"Usage:\n"
" %s [startcol [endcol]]\n"
msgstr ""
"\n"
"Modo de empleo: %s [columnainicial] [columnafinal]]\n"

#: text-utils/colrm.c:65
msgid "Filter out the specified columns.\n"
msgstr "Deja fuera las columnas especificadas.\n"

#: text-utils/colrm.c:184
msgid "first argument"
msgstr "primer argumento"

#: text-utils/colrm.c:186
msgid "second argument"
msgstr "segundo argumento"

#: text-utils/column.c:235
msgid "failed to parse column"
msgstr "fallo al analizar columna"

#: text-utils/column.c:245
#, c-format
msgid "undefined column name '%s'"
msgstr "nombre de columna no definido: '%s'"

#: text-utils/column.c:321
msgid "failed to parse --table-order list"
msgstr "fallo al analizar la lista de --table-order"

#: text-utils/column.c:397
msgid "failed to parse --table-right list"
msgstr "fallo al analizar la lista de --table-right"

#: text-utils/column.c:401
msgid "failed to parse --table-trunc list"
msgstr "fallo al analizar la lista de --table-trunc"

#: text-utils/column.c:405
msgid "failed to parse --table-noextreme list"
msgstr "fallo al analizar la lista de --table-noextreme"

#: text-utils/column.c:409
msgid "failed to parse --table-wrap list"
msgstr "fallo al analizar la lista de --table-wrap"

#: text-utils/column.c:413
msgid "failed to parse --table-hide list"
msgstr "fallo al analizar la lista de --table-hide"

#: text-utils/column.c:444
#, c-format
msgid "line %zu: for JSON the name of the column %zu is required"
msgstr "línea %zu: para JSON se requiere el nombre de la columna %zu"

#: text-utils/column.c:458
msgid "failed to allocate output data"
msgstr "no se han podido reservar datos de salida"

#: text-utils/column.c:629
msgid "Columnate lists.\n"
msgstr "Listas en columnas.\n"

#: text-utils/column.c:632
msgid " -t, --table                      create a table\n"
msgstr " -t, --table                      crea una tabla\n"

#: text-utils/column.c:633
msgid " -n, --table-name <name>          table name for JSON output\n"
msgstr " -n, --table-name <nombre>        nombre de la tabla para la salida JSON\n"

#: text-utils/column.c:634
msgid " -O, --table-order <columns>      specify order of output columns\n"
msgstr " -O, --table-order <columnas>     especifica el orden de las columnas de salida\n"

#: text-utils/column.c:635
msgid " -N, --table-columns <names>      comma separated columns names\n"
msgstr " -N, --table-columns <nombres>    nombres de columnas separados por coma\n"

#: text-utils/column.c:636
msgid " -E, --table-noextreme <columns>  don't count long text from the columns to column width\n"
msgstr " -E, --table-noextreme <columnas> no cuenta texto largo desde las columnas hasta la anchura de columna\n"

#: text-utils/column.c:637
msgid " -d, --table-noheadings           don't print header\n"
msgstr " -d, --table-noheadings           no imprime cabecera\n"

#: text-utils/column.c:638
msgid " -e, --table-header-repeat        repeat header for each page\n"
msgstr " -e, --table-header-repeat        repite la cabecera en cada página\n"

#: text-utils/column.c:639
msgid " -H, --table-hide <columns>       don't print the columns\n"
msgstr " -H, --table-hide <columnas>      no imprime las columnas\n"

#: text-utils/column.c:640
msgid " -R, --table-right <columns>      right align text in these columns\n"
msgstr " -R, --table-right <columnas>     alinea el texto a la derecha en estas columnas\n"

#: text-utils/column.c:641
msgid " -T, --table-truncate <columns>   truncate text in the columns when necessary\n"
msgstr " -T, --table-truncate <columnas>  trunca el texto de las columnas cuando sea necesario\n"

#: text-utils/column.c:642
msgid " -W, --table-wrap <columns>       wrap text in the columns when necessary\n"
msgstr "-W, --table-wrap <<columnas>      ajusta envolviendo  el texto en las columnas cuando sea necesario\n"

#: text-utils/column.c:643
msgid " -L, --table-empty-lines          don't ignore empty lines\n"
msgstr " -L, --table-empty-lines          no hace caso omiso de las líneas vacías\n"

#: text-utils/column.c:644
msgid " -J, --json                       use JSON output format for table\n"
msgstr " -J, --json                       utiliza el formato de salida JSON para la tabla\n"

#: text-utils/column.c:647
msgid " -r, --tree <column>              column to use tree-like output for the table\n"
msgstr " -r, --árbol <columna>            columna que se utilizará para sacar la tabla con forma de árbol\n"

#: text-utils/column.c:648
msgid " -i, --tree-id <column>           line ID to specify child-parent relation\n"
msgstr " -i, --tree-id <columna>          ID de la línea que especifica la relación hijo-padre\n"

#: text-utils/column.c:649
msgid " -p, --tree-parent <column>       parent to specify child-parent relation\n"
msgstr " -p, --tree-parent <columna>      padre que especifica la relación hijo-padre\n"

#: text-utils/column.c:652
msgid " -c, --output-width <width>       width of output in number of characters\n"
msgstr " -c, --output-width <ancho>       ancho de la salida en número de caracteres\n"

#: text-utils/column.c:653
msgid " -o, --output-separator <string>  columns separator for table output (default is two spaces)\n"
msgstr " -o, --output-separator <cadena>  separador de columnas para la salida de las tablas (el predeterminado es dos espacios)\n"

#: text-utils/column.c:654
msgid " -s, --separator <string>         possible table delimiters\n"
msgstr " -s, --separator <cadena>         delimitadores de tabla que se pueden utilizar\n"

#: text-utils/column.c:655
msgid " -x, --fillrows                   fill rows before columns\n"
msgstr " -x, --fillrows                   llenar las filas antes que las columnas\n"

#: text-utils/column.c:724
msgid "invalid columns argument"
msgstr "argumento de las columnas no válido"

#: text-utils/column.c:749
msgid "failed to parse column names"
msgstr "No se han podido analizar los nombres de las columnas"

#: text-utils/column.c:804
msgid "options --tree-id and --tree-parent are required for tree formatting"
msgstr "hacen falta las opciones --tree-id y --tree-parent para dar formato de árbol"

#: text-utils/column.c:812
msgid "option --table required for all --table-*"
msgstr "se requiere la opción --table para todas las --table-*"

#: text-utils/column.c:815
msgid "option --table-columns required for --json"
msgstr "se requiere la opción --table-columns para --json"

#: text-utils/hexdump.c:155 text-utils/more.c:234
#, c-format
msgid " %s [options] <file>...\n"
msgstr " %s [opciones] <fichero>...\n"

#: text-utils/hexdump.c:158
msgid "Display file contents in hexadecimal, decimal, octal, or ascii.\n"
msgstr "Muestra el contenido de un fichero en hexadecimal, decimal, octal o ascii.\n"

#: text-utils/hexdump.c:161
msgid " -b, --one-byte-octal      one-byte octal display\n"
msgstr " -b, --one-byte-octal      salida en octales de un byte\n"

#: text-utils/hexdump.c:162
msgid " -c, --one-byte-char       one-byte character display\n"
msgstr " -c, --one-byte-char       salida en caracteres de un byte\n"

#: text-utils/hexdump.c:163
msgid " -C, --canonical           canonical hex+ASCII display\n"
msgstr " -C, --canonical           salida hexa+ASCII canónica\n"

#: text-utils/hexdump.c:164
msgid " -d, --two-bytes-decimal   two-byte decimal display\n"
msgstr " -d, --two-bytes-decimal   salida en decimales de dos bytes\n"

#: text-utils/hexdump.c:165
msgid " -o, --two-bytes-octal     two-byte octal display\n"
msgstr " -o, --two-bytes-octal     salida en octales de dos bytes\n"

#: text-utils/hexdump.c:166
msgid " -x, --two-bytes-hex       two-byte hexadecimal display\n"
msgstr " -x, --two-bytes-hex       salida en hexadecimales de dos bytes\n"

#: text-utils/hexdump.c:167
msgid " -L, --color[=<mode>]      interpret color formatting specifiers\n"
msgstr " -L, --color[=<modo>]      interpreta los especificadores de formato de color\n"

#: text-utils/hexdump.c:170
msgid " -e, --format <format>     format string to be used for displaying data\n"
msgstr " -e, --format <formato>    cadena de formato que se usará para mostrar datos\n"

#: text-utils/hexdump.c:171
msgid " -f, --format-file <file>  file that contains format strings\n"
msgstr " -f, --format-file <fich>  fichero que contiene cadenas de formato\n"

#: text-utils/hexdump.c:172
msgid " -n, --length <length>     interpret only length bytes of input\n"
msgstr " -n, --length <largo>      interpreta solamente tantos bytes de largo de entrada\n"

#: text-utils/hexdump.c:173
msgid " -s, --skip <offset>       skip offset bytes from the beginning\n"
msgstr " -s, --skip <offset>       salta offset bytes desde el principio\n"

#: text-utils/hexdump.c:174
msgid " -v, --no-squeezing        output identical lines\n"
msgstr " -v, --no-squeezing        saca líneas idénticas\n"

#: text-utils/hexdump.c:180
msgid "<length> and <offset>"
msgstr ""

#: text-utils/hexdump-display.c:364
msgid "all input file arguments failed"
msgstr "error en todos los argumentos de fichero de entrada"

#: text-utils/hexdump-parse.c:55
#, c-format
msgid "bad byte count for conversion character %s"
msgstr "número total de bytes incorrecto para el carácter de conversión %s"

#: text-utils/hexdump-parse.c:60
#, c-format
msgid "%%s requires a precision or a byte count"
msgstr "%%s requiere un valor de precisión o un número total de bytes"

#: text-utils/hexdump-parse.c:65
#, c-format
msgid "bad format {%s}"
msgstr "formato incorrecto {%s}"

#: text-utils/hexdump-parse.c:70
#, c-format
msgid "bad conversion character %%%s"
msgstr "carácter de conversión %%%s incorrecto"

#: text-utils/hexdump-parse.c:436
msgid "byte count with multiple conversion characters"
msgstr "número total de bytes con varios caracteres de conversión"

#: text-utils/line.c:34
msgid "Read one line.\n"
msgstr "Lee una línea.\n"

#: text-utils/more.c:237
msgid "A file perusal filter for CRT viewing."
msgstr "Filtro para lectura detenida de un fichero para visualización en CRT."

#: text-utils/more.c:240
msgid " -d, --silent          display help instead of ringing bell"
msgstr " -d, --silent          muestra ayuda en lugar de hacer sonar la campana"

#: text-utils/more.c:241
msgid " -f, --logical         count logical rather than screen lines"
msgstr " -f, --logical         cuenta líneas lógicas en vez de líneas de pantalla"

#: text-utils/more.c:242
msgid " -l, --no-pause        suppress pause after form feed"
msgstr " -l, --no-pause        suprime la pausa posterior al avance de página"

#: text-utils/more.c:243
msgid " -c, --print-over      do not scroll, display text and clean line ends"
msgstr " -c, --print-over      no desplaza; muestra texto y limpia los finales de línea"

#: text-utils/more.c:244
msgid " -p, --clean-print     do not scroll, clean screen and display text"
msgstr " -p, --clean-print     no desplaza; limpia la pantalla y muestra texto"

#: text-utils/more.c:245
msgid " -s, --squeeze         squeeze multiple blank lines into one"
msgstr " -s, --squeeze         junta varias líneas en blanco en una sola"

#: text-utils/more.c:246
msgid " -u, --plain           suppress underlining and bold"
msgstr " -u, --plain           suprime subrayados y negrita"

#: text-utils/more.c:247
msgid " -n, --lines <number>  the number of lines per screenful"
msgstr " -n, --lines <número>  número de líneas por pantalla completa"

#: text-utils/more.c:248
msgid " -<number>             same as --lines"
msgstr " -<número>             lo mismo que --lines"

#: text-utils/more.c:249
msgid " +<number>             display file beginning from line number"
msgstr " +<número>             muestra el comienzo del fichero desde el número de línea"

#: text-utils/more.c:250
msgid " +/<pattern>           display file beginning from pattern match"
msgstr " +/<patrón>            muestra el fichero desde el punto de coincidencia con el patrón"

#: text-utils/more.c:351
#, fuzzy
msgid "MORE environment variable"
msgstr "error al establecer la variable de entorno %s"

#: text-utils/more.c:404
#, fuzzy, c-format
msgid "magic failed: %s\n"
msgstr "mkdir falló: %s"

#: text-utils/more.c:417 text-utils/more.c:436
#, c-format
msgid ""
"\n"
"******** %s: Not a text file ********\n"
"\n"
msgstr ""
"\n"
"*** %s: No es un fichero de texto ***\n"
"\n"

#: text-utils/more.c:465
#, c-format
msgid ""
"\n"
"*** %s: directory ***\n"
"\n"
msgstr ""
"\n"
"*** %s: directorio ***\n"
"\n"

#: text-utils/more.c:729
#, c-format
msgid "--More--"
msgstr "--Más--"

#: text-utils/more.c:731
#, c-format
msgid "(Next file: %s)"
msgstr "(Siguiente fichero: %s)"

#: text-utils/more.c:739
#, c-format
msgid "[Press space to continue, 'q' to quit.]"
msgstr "[Pulse la barra espaciadora para continuar; 'q' para salir.]"

#: text-utils/more.c:938
msgid ""
"\n"
"...Skipping "
msgstr ""
"\n"
"...Saltando "

#: text-utils/more.c:942
msgid "...Skipping to file "
msgstr "...Saltando al fichero "

#: text-utils/more.c:944
msgid "...Skipping back to file "
msgstr "...Retrocediendo al fichero "

#: text-utils/more.c:1106
msgid "Line too long"
msgstr "Línea demasiado larga"

#: text-utils/more.c:1144
msgid "No previous command to substitute for"
msgstr "No hay ningún comando anterior para sustituir"

#: text-utils/more.c:1173
#, c-format
msgid "[Use q or Q to quit]"
msgstr "[Utilizar q o Q para salir]"

#: text-utils/more.c:1261
msgid "exec failed\n"
msgstr "La ejecución (exec) ha fallado\n"

#: text-utils/more.c:1271
msgid "can't fork\n"
msgstr "no se puede bifurcar\n"

#: text-utils/more.c:1427
msgid "...skipping\n"
msgstr "...omitiendo\n"

#: text-utils/more.c:1464
msgid ""
"\n"
"Pattern not found\n"
msgstr ""
"\n"
"Patrón no encontrado\n"

#: text-utils/more.c:1468 text-utils/pg.c:1036 text-utils/pg.c:1184
msgid "Pattern not found"
msgstr "Patrón no encontrado"

#: text-utils/more.c:1486
msgid ""
"Most commands optionally preceded by integer argument k.  Defaults in brackets.\n"
"Star (*) indicates argument becomes new default.\n"
msgstr ""
"La mayoría de las órdenes pueden estar precedidas por un argumento entero k.\n"
"Los valores predeterminados están entre corchetes.\n"
"Un asterisco (*) indica que el argumento será el nuevo valor predeterminado.\n"

#: text-utils/more.c:1492
#, c-format
msgid ""
"<space>                 Display next k lines of text [current screen size]\n"
"z                       Display next k lines of text [current screen size]*\n"
"<return>                Display next k lines of text [1]*\n"
"d or ctrl-D             Scroll k lines [current scroll size, initially 11]*\n"
"q or Q or <interrupt>   Exit from more\n"
"s                       Skip forward k lines of text [1]\n"
"f                       Skip forward k screenfuls of text [1]\n"
"b or ctrl-B             Skip backwards k screenfuls of text [1]\n"
"'                       Go to place where previous search started\n"
"=                       Display current line number\n"
"/<regular expression>   Search for kth occurrence of regular expression [1]\n"
"n                       Search for kth occurrence of last r.e [1]\n"
"!<cmd> or :!<cmd>       Execute <cmd> in a subshell\n"
"v                       Start up '%s' at current line\n"
"ctrl-L                  Redraw screen\n"
":n                      Go to kth next file [1]\n"
":p                      Go to kth previous file [1]\n"
":f                      Display current file name and line number\n"
".                       Repeat previous command\n"
msgstr ""
"<espacio>               Muestra las siguientes k líneas de texto\n"
"                        [por omisión, el tamaño actual de la ventana]\n"
"z                       Muestra las siguientes k líneas de texto\n"
"                        [por omisión, el tamaño actual de la ventana]*\n"
"<intro>                 Muestra las siguientes k líneas de texto [1]*\n"
"d o ctrl-D              Desplaza k líneas [tamaño de desplazo actual,\n"
"                          inicialmente 11]*\n"
"q o Q o <interr>        Sale de more\n"
"s                       Salta hacia adelante k líneas de texto [1]\n"
"f                       Salta hacia adelante k pantallas de texto [1]\n"
"b o ctrl-B              Salta hacia atrás k pantallas de texto [1]\n"
"'                       Va al sitio donde comenzó la búsqueda anterior\n"
"=                       Muestra el número de la línea actual\n"
"/<expresión regular>    Busca la k-ésima aparición de la expresión regular [1]\n"
"n                       Busca la k-ésima aparición de la última e.r. [1]\n"
"!<orden> o :!<orden>    Ejecuta <orden> en un subshell\n"
"v                       Inicia '%s' en la línea actual\n"
"ctrl-L                  Redibuja la pantalla\n"
":n                      Va al k-ésimo fichero siguiente [1]\n"
":p                      Va al k-ésimo fichero anterior [1]\n"
":f                      Muestra el fichero actual y el número de línea\n"
".                       Repite la orden anterior\n"

#: text-utils/more.c:1558
#, c-format
msgid "...back %d page"
msgid_plural "...back %d pages"
msgstr[0] "...retroceder %d página"
msgstr[1] "...retroceder %d páginas"

#: text-utils/more.c:1582
#, c-format
msgid "...skipping %d line"
msgid_plural "...skipping %d lines"
msgstr[0] "...omitiendo %d línea"
msgstr[1] "...omitiendo %d líneas"

#: text-utils/more.c:1677
msgid ""
"\n"
"***Back***\n"
"\n"
msgstr ""
"\n"
"***Atrás***\n"
"\n"

#: text-utils/more.c:1696
#, c-format
msgid "\"%s\" line %d"
msgstr "\"%s\" línea %d"

#: text-utils/more.c:1699
#, c-format
msgid "[Not a file] line %d"
msgstr "[No es un fichero] línea %d"

#: text-utils/more.c:1705
msgid "No previous regular expression"
msgstr "No hay ninguna expresión regular previa"

#: text-utils/more.c:1774
#, c-format
msgid "[Press 'h' for instructions.]"
msgstr "[Pulse 'h' para consultar las instrucciones.]"

#: text-utils/pg.c:152
msgid ""
"-------------------------------------------------------\n"
"  h                       this screen\n"
"  q or Q                  quit program\n"
"  <newline>               next page\n"
"  f                       skip a page forward\n"
"  d or ^D                 next halfpage\n"
"  l                       next line\n"
"  $                       last page\n"
"  /regex/                 search forward for regex\n"
"  ?regex? or ^regex^      search backward for regex\n"
"  . or ^L                 redraw screen\n"
"  w or z                  set page size and go to next page\n"
"  s filename              save current file to filename\n"
"  !command                shell escape\n"
"  p                       go to previous file\n"
"  n                       go to next file\n"
"\n"
"Many commands accept preceding numbers, for example:\n"
"+1<newline> (next page); -1<newline> (previous page); 1<newline> (first page).\n"
"\n"
"See pg(1) for more information.\n"
"-------------------------------------------------------\n"
msgstr ""
"-------------------------------------------------------\n"
"  h                       esta pantalla\n"
"  q o Q                   sale del programa\n"
"  <nuevalínea>            página siguiente\n"
"  f                       salta una página hacia adelante\n"
"  d o ^D                  siguiente media página\n"
"  l                       siguiente línea\n"
"  $                       última página\n"
"  /regex/                 busca regex hacia adelante\n"
"  ?regex? o ^regex^       busca regex hacia atrás\n"
"  . o ^L                  redibuja la pantalla\n"
"  w o z                   configura el tamaño de página y va a la página siguiente\n"
"  s nombrefichero         guarda el fichero actual en nombrefichero\n"
"  !orden                  carácter de escape de la consola\n"
"  p                       va al fichero anterior\n"
"  n                       va al fichero siguiente\n"
"\n"
"Muchas órdenes aceptan números delante, por ejemplo:\n"
"+1<nuevalínea> (página siguiente); -1<nuevalínea> (página anterior); 1<nuevalínea> (primera página).\n"
"\n"
"Véase pg(1) para más información.\n"
"-------------------------------------------------------\n"

#: text-utils/pg.c:231
#, c-format
msgid " %s [options] [+line] [+/pattern/] [files]\n"
msgstr " %s [opciones] [+línea] [+/patrón/] [ficheros]\n"

#: text-utils/pg.c:235
msgid "Browse pagewise through text files.\n"
msgstr "Navega por ficheros de texto a base de páginas.\n"

#: text-utils/pg.c:238
msgid " -number      lines per page\n"
msgstr " -number      líneas por página\n"

#: text-utils/pg.c:239
msgid " -c           clear screen before displaying\n"
msgstr " -c           borra la pantalla antes de visualizar\n"

#: text-utils/pg.c:240
msgid " -e           do not pause at end of a file\n"
msgstr " -e           no se detiene al final del fichero\n"

#: text-utils/pg.c:241
msgid " -f           do not split long lines\n"
msgstr " -f           no parte las líneas largas\n"

#: text-utils/pg.c:242
msgid " -n           terminate command with new line\n"
msgstr " -n           termina el comando con nueva línea\n"

#: text-utils/pg.c:243
msgid " -p <prompt>  specify prompt\n"
msgstr " -p <indic.>  especifica el indicador\n"

#: text-utils/pg.c:244
msgid " -r           disallow shell escape\n"
msgstr " -r           impide el carácter de escape de la consola\n"

#: text-utils/pg.c:245
msgid " -s           print messages to stdout\n"
msgstr " -s           imprime los mensajes por la salida estándar\n"

#: text-utils/pg.c:246
msgid " +number      start at the given line\n"
msgstr " +número      comienza en la línea especificada\n"

#: text-utils/pg.c:247
msgid " +/pattern/   start at the line containing pattern\n"
msgstr " +/patrón/    comienza en la línea que contiene el patrón\n"

#: text-utils/pg.c:258
#, c-format
msgid "option requires an argument -- %s"
msgstr "la opción necesita un argumento -- %s"

#: text-utils/pg.c:264
#, c-format
msgid "illegal option -- %s"
msgstr "opción ilegal -- %s"

#: text-utils/pg.c:367
msgid "...skipping forward\n"
msgstr "...saltando hacia adelante\n"

#: text-utils/pg.c:369
msgid "...skipping backward\n"
msgstr "...saltando hacia atrás\n"

#: text-utils/pg.c:385
msgid "No next file"
msgstr "No hay ningún fichero siguiente"

#: text-utils/pg.c:389
msgid "No previous file"
msgstr "No hay ningún fichero anterior"

#: text-utils/pg.c:891
#, c-format
msgid "Read error from %s file"
msgstr "Error de lectura en el fichero %s"

#: text-utils/pg.c:894
#, c-format
msgid "Unexpected EOF in %s file"
msgstr "EOF inesperado en el fichero %s"

#: text-utils/pg.c:896
#, c-format
msgid "Unknown error in %s file"
msgstr "Error desconocido en el fichero %s"

#: text-utils/pg.c:949
msgid "Cannot create temporary file"
msgstr "No se puede crear un fichero temporal"

# ¿Qué significa?
#: text-utils/pg.c:958 text-utils/pg.c:1125 text-utils/pg.c:1151
msgid "RE error: "
msgstr "RE error:"

#: text-utils/pg.c:1108
msgid "(EOF)"
msgstr "(EOF)"

#: text-utils/pg.c:1133 text-utils/pg.c:1159
msgid "No remembered search string"
msgstr "No se recuerda ninguna cadena de búsqueda"

#: text-utils/pg.c:1214
msgid "cannot open "
msgstr "no se puede abrir "

#: text-utils/pg.c:1356
msgid ": !command not allowed in rflag mode.\n"
msgstr ": no se permite !orden en el modo rflag.\n"

#: text-utils/pg.c:1390
msgid "fork() failed, try again later\n"
msgstr "falló la llamada al sistema fork(), inténtelo de nuevo más adelante\n"

#: text-utils/pg.c:1478
msgid "(Next file: "
msgstr "(Siguiente fichero: "

#: text-utils/pg.c:1544
#, c-format
msgid "%s %s Copyright (c) 2000-2001 Gunnar Ritter. All rights reserved.\n"
msgstr "%s %s Copyright (c) 2000-2001 Gunnar Ritter. Todos los derechos reservados.\n"

#: text-utils/pg.c:1597 text-utils/pg.c:1670
msgid "failed to parse number of lines per page"
msgstr "no se ha podido analizar el número de líneas por página"

#: text-utils/rev.c:75
#, c-format
msgid "Usage: %s [options] [file ...]\n"
msgstr "Modo de empleo: %s [opciones] [fichero ...]\n"

#: text-utils/rev.c:79
msgid "Reverse lines characterwise.\n"
msgstr "Invierte líneas carácter a carácter.\n"

#: text-utils/ul.c:142
#, c-format
msgid " %s [options] [<file> ...]\n"
msgstr " %s [opciones] [<fichero>] ...\n"

#: text-utils/ul.c:145
msgid "Do underlining.\n"
msgstr "Subraya texto.\n"

#: text-utils/ul.c:148
msgid " -t, -T, --terminal TERMINAL  override the TERM environment variable\n"
msgstr " -t, -T, --terminal TERMINAL  anula la variable de entorno TERM\n"

#: text-utils/ul.c:149
msgid " -i, --indicated              underlining is indicated via a separate line\n"
msgstr " -i, --indicated              el subrayado se indica mediante una línea distinta\n"

#: text-utils/ul.c:209
msgid "trouble reading terminfo"
msgstr "Problemas al leer terminfo"

#: text-utils/ul.c:214
#, c-format
msgid "terminal `%s' is not known, defaulting to `dumb'"
msgstr "el terminal `%s' es desconocido, se adopta `dumb' como predeterminado"

#: text-utils/ul.c:304
#, c-format
msgid "unknown escape sequence in input: %o, %o"
msgstr "secuencia de escape desconocida en entrada: %o, %o"

#: text-utils/ul.c:629
msgid "Input line too long."
msgstr "Línea de entrada demasiado larga."

#~ msgid "%s: failed to read partition start from sysfs"
#~ msgstr "%s: no se ha podido leer el comienzo de la partición desde sysfs"

#~ msgid "All logical partitions are in use. Adding a primary partition."
#~ msgstr "Se están usando todas las particiones lógicas. Se añade una partición primaria."

#~ msgid "%s: BLKRESETZONE ioctl failed"
#~ msgstr "%s: ioctl BLKRESETZONE ha fallado"

#~ msgid " -a, --all           trim all supported mounted filesystems\n"
#~ msgstr " -a, --all           recorta todos los sistemas de ficheros montados admitidos\n"

#~ msgid "Calling settimeofday(NULL, %d) "
#~ msgstr "Se está llamando a settimeofday(NULL, %d) "

#~ msgid "to set the kernel timezone."
#~ msgstr "para establecer la zona horaria del núcleo."

#~ msgid "to warp System time."
#~ msgstr "para deformar la hora del sistema."

#~ msgid " -S, --setuid <uid>\t    set uid in entered namespace\n"
#~ msgstr " -S, --setuid <uid>\t    establece el uid en el espacio de nombres introducido\n"

#~ msgid " -G, --setgid <gid>\t    set gid in entered namespace\n"
#~ msgstr " -G, --setgid <gid>\t    establece el gid en el espacio de nombres introducido\n"

#~ msgid "options --map-root-user and --map-current-user are mutually exclusive"
#~ msgstr "las opciones --map-root-user y --map-current-user son mutuamente excluyentes"

#~ msgid "options --setgroups=allow and --map-current-user are mutually exclusive"
#~ msgstr "las opciones --setgroups=allow y --map-current-user son mutuamente excluyentes"

#~ msgid " -T, --log-timing <file> aliast to -t\n"
#~ msgstr " -T, --log-timing <fichero> alias de -t\n"

#~ msgid "unknown option -%s"
#~ msgstr "opción desconocida -%s"

#~ msgid "  Overflow\n"
#~ msgstr "  Desbordamiento\n"

#~ msgid "The old %s signature will be removed by a write command."
#~ msgstr "La firma antigua %s se borrará mediante una orden de escritura."

#~ msgid ""
#~ "\n"
#~ "Do you really want to quit? "
#~ msgstr ""
#~ "\n"
#~ "¿Está seguro de que desea salir? "

#~ msgid ""
#~ "usage: %s [-h] [-v] [-b blksize] [-e edition] [-N endian] [-i file] [-n name] dirname outfile\n"
#~ " -v         be verbose\n"
#~ " -E         make all warnings errors (non-zero exit status)\n"
#~ " -b blksize use this blocksize, must equal page size\n"
#~ " -e edition set edition number (part of fsid)\n"
#~ " -N endian  set cramfs endianness (big|little|host), default host\n"
#~ " -i file    insert a file image into the filesystem\n"
#~ " -n name    set name of cramfs filesystem\n"
#~ " -p         pad by %d bytes for boot code\n"
#~ " -s         sort directory entries (old option, ignored)\n"
#~ " -z         make explicit holes\n"
#~ " dirname    root of the filesystem to be compressed\n"
#~ " outfile    output file\n"
#~ msgstr ""
#~ "uso: %s [-h] [-v] [-b tambloq] [-e edición] [-N endian] [-i fich] [-n nombre] nombredir fsalida\n"
#~ " -v         sé explicativo\n"
#~ " -E         convierte en errores todos los avisos (estado de salida no cero)\n"
#~ " -b tambloq utiliza este tamaño de bloque, debe ser el tamaño de página\n"
#~ " -N endian  establece el «endiannes» de cramfs (big|little|host), host por omisión\n"
#~ " -e edición establece el número de edición (parte de fsid)\n"
#~ " -i fich    inserta la imagen de un fichero dentro del sistema de ficheros\n"
#~ " -n nombre  establece el nombre del sistema de ficheros cramfs\n"
#~ " -p         desplaza %d bytes para el código de arranque\n"
#~ " -s         ordena las entradas de directorio (opción antigua, sin efecto)\n"
#~ " -z         crea huecos explícitos\n"
#~ " nombredir  raíz del sistema de ficheros que se va a comprimir\n"
#~ " fsalida    fichero de salida\n"

#~ msgid " old start: %ju, new start: %ju (move %ju sectors)\n"
#~ msgstr " antiguo comienzo: %ju, nuevo comienzo: %ju (mover %ju sectores)\n"

#~ msgid "Rufus alignment"
#~ msgstr "alineamiento Rufus"

#~ msgid "user %s does not exist"
#~ msgstr "el usuario %s no existe"

#~ msgid "only root can use \"--%s\" option (effective UID is %u)"
#~ msgstr "sólo el usuario root puede utilizar la opción \"--%s\" (el UID efectivo es %u)"

#~ msgid "only root can do that (effective UID is %u)"
#~ msgstr "sólo el usuario root puede hacer eso (el UID efectivo es %u)"

#~ msgid "only root can use \"--%s\" option"
#~ msgstr "sólo el usuario root puede utilizar la opción \"--%s\""

#~ msgid "only root can do that"
#~ msgstr "sólo el usuario root puede efectuar esa acción"

#~ msgid ""
#~ " -a, --append                  append the output\n"
#~ " -c, --command <command>       run command rather than interactive shell\n"
#~ " -e, --return                  return exit code of the child process\n"
#~ " -f, --flush                   run flush after each write\n"
#~ "     --force                   use output file even when it is a link\n"
#~ " -o, --output-limit <size>     terminate if output files exceed size\n"
#~ " -q, --quiet                   be quiet\n"
#~ " -t[<file>], --timing[=<file>] output timing data to stderr or to FILE\n"
#~ msgstr ""
#~ " -a, --append                  añade la salida\n"
#~ " -c, --command <orden>         ejecuta orden en vez de «shell» interactiva\n"
#~ " -e, --return                  retorna el código de salida del proceso hijo\n"
#~ " -f, --flush                   vacía tras cada escritura\n"
#~ "     --force                   utiliza fichero de salida aunque sea un enlace\n"
#~ " -o, --output-limit <tamaño>   termina si los ficheros de salida exceden el tamaño\n"
#~ " -q, --quiet                   permanece callado\n"
#~ " -t[<fich>], --timing[=<fich>] manda datos de tiempos a stderr o al fichero\n"

#~ msgid "cannot write script file"
#~ msgstr "no se puede escripbir el fichero de script"

#~ msgid ""
#~ "\n"
#~ "Session terminated.\n"
#~ msgstr ""
#~ "\n"
#~ "Sesión terminada.\n"

#~ msgid "openpty failed"
#~ msgstr "openpty ha fallado"

#~ msgid "out of pty's"
#~ msgstr "no quedan pty"

#~ msgid "Script started, file is %s\n"
#~ msgstr "Script iniciado; el fichero es %s\n"

#~ msgid ""
#~ " -t, --timing <file>     script timing output file\n"
#~ " -s, --typescript <file> script terminal session output file\n"
#~ " -d, --divisor <num>     speed up or slow down execution with time divisor\n"
#~ " -m, --maxdelay <num>    wait at most this many seconds between updates\n"
#~ msgstr ""
#~ " -t, --timing <fich>     fichero de salida de tiempos de script\n"
#~ " -s, --typescript <fich> fichero de salida de la sesión del terminal de script\n"
#~ " -d, --divisor <num>     aumenta o disminuye la velocidad de ejecución conforme al divisor de tiempo\n"
#~ " -m, --maxdelay <num>    espera a lo sumo esta cantidad de segundos entre actualizaciones\n"

#~ msgid "write to stdout failed"
#~ msgstr "falló la escritura a stdout"

#~ msgid "unexpected end of file on %s"
#~ msgstr "no se esperaba fin de fichero en %s"

#~ msgid "failed to read typescript file %s"
#~ msgstr "no se ha podido leer el fichero de transcripción %s"

#~ msgid "wrong number of arguments"
#~ msgstr "número de argumentos incorrecto"

#~ msgid "timing file %s: line %lu: unexpected format"
#~ msgstr "fichero de tiempos %s: línea %lu: formato inesperado"

#~ msgid "incorrect password"
#~ msgstr "contraseña incorrecta"

#~ msgid "Failed to set personality to %s"
#~ msgstr "No se ha podido establecer la personalidad a %s"

#~ msgid " --reset-env                 reset environment variables\n"
#~ msgstr " --reset-env                 restablece las variables de entorno\n"

#~ msgid "ttyname failed"
#~ msgstr "fallo de ttyname"

#~ msgid "cannot get tty name"
#~ msgstr "no se puede obtener el nombre del terminal"

#~ msgid "%15s: %s"
#~ msgstr "%15s: %s"

#~ msgid "failed to parse CPU list %s"
#~ msgstr "fallo al analizar la lista de CPUs %s"

#~ msgid "failed to parse CPU mask %s"
#~ msgstr "fallo al analizar la máscara de CPUs %s"

#~ msgid "%s"
#~ msgstr "%s"

#~ msgid "%04d"
#~ msgstr "%04d"

#~ msgid "%s %04d"
#~ msgstr "%s %04d"

#~ msgid "%s: failed to compose sysfs path"
#~ msgstr "%s: no se ha podido componer la ruta del sistema de ficheros"

#~ msgid "%s: failed to read link"
#~ msgstr "%s: fallo al leer enlace"

#~ msgid "%s - No such file or directory\n"
#~ msgstr "%s - No existe el fichero o el directorio\n"

#~ msgid "%s: %s."
#~ msgstr "%s: %s."

#~ msgid "Geometry"
#~ msgstr "Geometría"

#~ msgid "kind of lock: FL_FLOCK or FL_POSIX."
#~ msgstr "tipo de bloqueo: FL_FLOCK o FL_POSIX."

#~ msgid "unable to exec /bin/umount of `%s'"
#~ msgstr "no se puede ejecutar /bin/umount de `%s'"

#~ msgid "sleeping ~%d usec\n"
#~ msgstr "se duerme ~%d usec\n"

#~ msgid "%ld.%06ld < %ld.%06ld (%.6f)\n"
#~ msgstr "%ld,%06ld < %ld,%06ld (%.6f)\n"

#~ msgid " -D, --debug          display more details"
#~ msgstr " -D, --debug          imprime más detalles"

#~ msgid "failed to read from: %s"
#~ msgstr "fallo al leer en: %s"

#~ msgid "cannot execute: %s"
#~ msgstr "no se puede ejecutar: %s"

#~ msgid "unsupported algorithm: %s"
#~ msgstr "algoritmo no soportado: %s"

#~ msgid ""
#~ "\n"
#~ "Usage:\n"
#~ " %1$s -V\n"
#~ " %1$s --report [devices]\n"
#~ " %1$s [-v|-q] commands devices\n"
#~ "\n"
#~ "Available commands:\n"
#~ msgstr ""
#~ "\n"
#~ "Modo de empleo:\n"
#~ " %1$s -V\n"
#~ " %1$s --report [dispositivos]\n"
#~ " %1$s [-v|-q] órdenes dispositivos\n"
#~ "\n"
#~ "Órdenes disponibles:\n"

#~ msgid ""
#~ "\n"
#~ "Available columns (for -o):\n"
#~ msgstr ""
#~ "\n"
#~ "Columnas disponibles (para --o):\n"

#~ msgid "seek error on %s"
#~ msgstr "error de búsqueda en %s"

#~ msgid ""
#~ " -V, --version      display version information and exit;\n"
#~ "                      -V as --version must be the only option\n"
#~ msgstr ""
#~ " -V, --version      muestra la información de versión y sale;\n"
#~ "                      -V como --version debe ser la único opción\n"

#~ msgid " -h, --help         display this help text and exit\n"
#~ msgstr " -h, --help         muestra esta ayuda y finaliza\n"

#~ msgid ""
#~ "\n"
#~ "Available columns (for --show, --raw or --pairs):\n"
#~ msgstr ""
#~ "\n"
#~ "Columnas disponibles (para --show, --raw o --pairs):\n"

#~ msgid " -v, --version  output version information and exit\n"
#~ msgstr " -v, --version  muestra información de versión y sale\n"

#~ msgid "Try '%s -h' for more information.\n"
#~ msgstr "Escriba '%s -h' para obtener más información.\n"

#~ msgid " -h, --help     display this help and exit\n"
#~ msgstr " -h, --help     muestra esta ayuda y sale\n"

#~ msgid " -V, --version  output version information and exit\n"
#~ msgstr " -V, --version  muestra información de versión y sale\n"

#~ msgid " -u, --help     display this help and exit\n"
#~ msgstr " -u, --help     muestra esta ayuda y sale\n"

#~ msgid "No known shells."
#~ msgstr "No hay ningún intérprete de órdenes conocido."

#~ msgid ""
#~ "\n"
#~ "Available columns:\n"
#~ msgstr ""
#~ "\n"
#~ "Columnas disponibles:\n"

#~ msgid " %s [options] -u <user> [[--] <command>]\n"
#~ msgstr " %s [opciones] -u <usuario> [[--] <orden>]\n"

#~ msgid ""
#~ "\n"
#~ "Available columns (for --output):\n"
#~ msgstr ""
#~ "\n"
#~ "Columnas disponibles (para --output):\n"

#~ msgid "Try `%s --help' for more information.\n"
#~ msgstr "Escriba `%s --help' para obtener más información.\n"

#~ msgid " -v, --verbose    explain what is being done\n"
#~ msgstr " -v, --verbose    explica lo que se está haciendo\n"

#~ msgid ""
#~ " -r, --random     generate random-based uuid\n"
#~ " -t, --time       generate time-based uuid\n"
#~ " -V, --version    output version information and exit\n"
#~ " -h, --help       display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ " -r, --random     genera uuid de forma aleatoria\n"
#~ " -t, --time       genera uuid basado en tiempo\n"
#~ " -V, --version    saca la información sobre la versión y termina\n"
#~ " -h, --help       muestra esta ayuda y termina\n"
#~ "\n"

#~ msgid ""
#~ " -a, --all           wipe all magic strings (BE CAREFUL!)\n"
#~ " -b, --backup        create a signature backup in $HOME\n"
#~ " -f, --force         force erasure\n"
#~ " -h, --help          show this help text\n"
#~ " -n, --no-act        do everything except the actual write() call\n"
#~ " -o, --offset <num>  offset to erase, in bytes\n"
#~ " -p, --parsable      print out in parsable instead of printable format\n"
#~ " -q, --quiet         suppress output messages\n"
#~ " -t, --types <list>  limit the set of filesystem, RAIDs or partition tables\n"
#~ " -V, --version       output version information and exit\n"
#~ msgstr ""
#~ " -a, --all           borra todas las cadenas mágicas (¡CON CUIDADO!)\n"
#~ " -b, --backup        crea copia de seguridad de la firma en $HOME\n"
#~ " -f, --force         fuerza borrado\n"
#~ " -h, --help          muestra este texto de ayuda\n"
#~ " -n, --no-act        hace todo excepto la propia llamada a write()\n"
#~ " -o, --offset <num>  desplazamiento para borrar, en bytes\n"
#~ " -p, --parsable      imprime en formato interpretable en lugar de imprimible\n"
#~ " -q, --quiet         suprime los mensajes de salida\n"
#~ " -t, --types <lista> limita el conjunto del sistema de ficheros, los RAIDs o las tablas de particiones\n"
#~ " -V, --version       saca la información de versión y sale\n"

#~ msgid "The Hardware Clock registers contain values that are either invalid (e.g. 50th day of month) or beyond the range we can handle (e.g. Year 2095)."
#~ msgstr ""
#~ "Los registros del reloj de hardware contienen valores que no son válidos\n"
#~ "(por ejemplo, día 50 del mes) o exceden el rango que puede utilizarse\n"
#~ "(por ejemplo, el año 2095)."

#~ msgid "The Hardware Clock does not contain a valid time, so we cannot set the System Time from it."
#~ msgstr "El reloj de hardware no contiene una hora válida, por lo que no se puede establecer la hora del sistema a partir de ese valor."

#~ msgid "\ttv.tv_sec = %ld, tv.tv_usec = %ld\n"
#~ msgstr "\ttv.tv_sec = %ld, tv.tv_usec = %ld\n"

#~ msgid "\ttz.tz_minuteswest = %d\n"
#~ msgstr "\ttz.tz_minuteswest = %d\n"

#~ msgid "Must be superuser to set system clock."
#~ msgstr "Debe ser superusuario para establecer el reloj del sistema."

#~ msgid "\tUTC: %s\n"
#~ msgstr "\tUTC: %s\n"

#~ msgid "Not adjusting drift factor because the Hardware Clock previously contained garbage.\n"
#~ msgstr ""
#~ "No se ajusta el factor de desfase debido a que el reloj de hardware\n"
#~ "contenía anteriormente datos extraños.\n"

#~ msgid ""
#~ "Test mode: %s was not updated with:\n"
#~ "%s"
#~ msgstr ""
#~ "Modo de pruebas: %s no se actualizó con:\n"
#~ "%s"

#~ msgid "Could not open file with the clock adjustment parameters in it (%s) for writing"
#~ msgstr "No se ha podido abrir para escritura el fichero que contiene los parámetros de ajuste del reloj (%s)"

#~ msgid "Could not update file with the clock adjustment parameters (%s) in it"
#~ msgstr "No se ha podido actualizar el fichero que tiene los parámetros de ajuste del reloj (%s)"

#~ msgid "Drift adjustment parameters not updated."
#~ msgstr "Parámetros de ajuste del desfase no actualizados."

#~ msgid "The Hardware Clock does not contain a valid time, so we cannot adjust it."
#~ msgstr "El reloj de hardware no contiene una hora válida, por lo que no se puede ajustar."

#~ msgid "At %ld seconds after 1969, RTC is predicted to read %ld seconds after 1969.\n"
#~ msgstr "A los %ld segundos después de 1969, la predicción de lectura para RTC es de %ld segundos después de 1969.\n"

#~ msgid "Unable to get the epoch value from the kernel."
#~ msgstr "No se puede obtener el valor de época del núcleo."

#~ msgid "Kernel is assuming an epoch value of %lu\n"
#~ msgstr "El núcleo presupone el valor de época %lu\n"

#~ msgid "To set the epoch value, you must use the 'epoch' option to tell to what value to set it."
#~ msgstr "Para establecer el valor de época, debe utilizar la opción 'epoch' para indicar en qué valor debe definirse."

#~ msgid "Not setting the epoch to %lu - testing only.\n"
#~ msgstr "No se está estableciendo el valor de época en %lu; sólo se está probando.\n"

#~ msgid "Unable to set the epoch value in the kernel.\n"
#~ msgstr "No se puede establecer el valor de época en el núcleo.\n"

#~ msgid "Query or set the hardware clock.\n"
#~ msgstr "Consulta o configura el reloj físico.\n"

#~ msgid ""
#~ " -h, --help           show this help text and exit\n"
#~ " -r, --show           read hardware clock and print result\n"
#~ "     --get            read hardware clock and print drift corrected result\n"
#~ "     --set            set the RTC to the time given with --date\n"
#~ msgstr ""
#~ " -h, --help           muestra este texto de ayuda y termina\n"
#~ " -r, --show           lee el reloj físico e imprime el resultado\n"
#~ "     --get            lee el reloj físico e imprime el resultado corrigiendo el desfase\n"
#~ "     --set            pone el RTC a la hora especificada por --date\n"

#~ msgid ""
#~ " -s, --hctosys        set the system time from the hardware clock\n"
#~ " -w, --systohc        set the hardware clock from the current system time\n"
#~ "     --systz          set the system time based on the current timezone\n"
#~ "     --adjust         adjust the RTC to account for systematic drift since\n"
#~ "                        the clock was last set or adjusted\n"
#~ msgstr ""
#~ " -s, --hctosys        pone la hora del sistema igual que la del reloj físico\n"
#~ " -w, --systohc        pone en el reloj físico la hora del sistema\n"
#~ "     --systz          pone la hora del sistema en función de la zona horaria actual\n"
#~ "     --adjust         ajusta el RTC para tener en cuenta la deriva sistemática desde\n"
#~ "                        que se puso o se ajustó el reloj la última vez\n"

#~ msgid ""
#~ "     --getepoch       print out the kernel's hardware clock epoch value\n"
#~ "     --setepoch       set the kernel's hardware clock epoch value to the \n"
#~ "                        value given with --epoch\n"
#~ msgstr ""
#~ "     --getepoch       imprime el valor de la época del reloj hardware del núcleo\n"
#~ "     --setepoch       establece como valor de la época del reloj hardware del núcleo\n"
#~ "                        el valor especificado con --epoch\n"

#~ msgid ""
#~ "     --predict        predict RTC reading at time given with --date\n"
#~ " -V, --version        display version information and exit\n"
#~ msgstr ""
#~ "     --predict        predice el RTC leyendo la hora dada con --date\n"
#~ " -V, --version        muestra la información sobre la versión y termina\n"

#~ msgid ""
#~ " -u, --utc            the hardware clock is kept in UTC\n"
#~ "     --localtime      the hardware clock is kept in local time\n"
#~ msgstr ""
#~ " -u, --utc            mantiene el reloj físico en UTC\n"
#~ "     --localtime      mantiene el reloj físico en hora local\n"

#~ msgid " -f, --rtc <file>     special /dev/... file to use instead of default\n"
#~ msgstr " -f, --rtc <fichero>  utiliza un fichero /dev/... especial en lugar del predeterminado\n"

#~ msgid ""
#~ "     --directisa      access the ISA bus directly instead of %s\n"
#~ "     --date <time>    specifies the time to which to set the hardware clock\n"
#~ msgstr ""
#~ "     --directisa      accede el bus ISA directamente en lugar de %s\n"
#~ "     --date <time>    especifica la hora a la cual poner el reloj de hardware\n"

#~ msgid ""
#~ "     --update-drift   update drift factor in %1$s (requires\n"
#~ "                        --set or --systohc)\n"
#~ "     --noadjfile      do not access %1$s; this requires the use of\n"
#~ "                        either --utc or --localtime\n"
#~ "     --adjfile <file> specifies the path to the adjust file;\n"
#~ "                        the default is %1$s\n"
#~ msgstr ""
#~ "     --update-drift   actualiza el favtor de desfase en  %1$s (requiere\n"
#~ "                        --set o --systohc)\n"
#~ "     --noadjfile      no accede a %1$s, lo cual requiere utilizar\n"
#~ "                        --utc o --localtime\n"
#~ "     --adjfile <fichero> especifica la ruta del fichero de ajustes;\n"
#~ "                        por omisión, es %1$s\n"

#~ msgid ""
#~ "     --test           do not update anything, just show what would happen\n"
#~ " -D, --debug          debugging mode\n"
#~ "\n"
#~ msgstr ""
#~ "     --test           no actualiza nada; solo muestra lo que va a suceder\n"
#~ " -D, --debug          modo de depuración\n"
#~ "\n"

#~ msgid "invalid epoch argument"
#~ msgstr "argumento de época incorrecto"

#~ msgid "root privileges may be required"
#~ msgstr "puede que hagan falta privilegios de root"

#~ msgid "%s does not have interrupt functions. "
#~ msgstr "%s no tiene funciones de interrupción. "

#~ msgid "ioctl() to %s to turn on update interrupts failed unexpectedly"
#~ msgstr "Error inesperado de ioctl() con %s al activar interrupciones de actualización"

#~ msgid "To manipulate the epoch value in the kernel, we must access the Linux 'rtc' device driver via the device special file.  This file does not exist on this system."
#~ msgstr ""
#~ "Para modificar el valor de época del núcleo, se debe acceder al controlador de\n"
#~ "dispositivo 'rtc' de Linux mediante el fichero especial de dispositivo.\n"
#~ "Este fichero no existe en este sistema."

#~ msgid "we have read epoch %lu from %s with RTC_EPOCH_READ ioctl.\n"
#~ msgstr "Se ha leído el valor de época %lu de %s con ioctl RTC_EPOCH_READ.\n"

#~ msgid "The epoch value may not be less than 1900.  You requested %ld"
#~ msgstr "El valor de época no puede ser inferior a 1900. Ha solicitado %ld"

#~ msgid "setting epoch to %lu with RTC_EPOCH_SET ioctl to %s.\n"
#~ msgstr "Estableciendo época en %lu con ioctl RTC_EPOCH_SET en %s.\n"

#~ msgid "The kernel device driver for %s does not have the RTC_EPOCH_SET ioctl."
#~ msgstr "El controlador de dispositivo del núcleo para %s no tiene la ioctl RTC_EPOCH_SET."

#~ msgid ""
#~ "%s\n"
#~ "Try `%s --help' for more information."
#~ msgstr ""
#~ "%s\n"
#~ "Pruebe `%s --help' para obtener más información."

#~ msgid "Try `%s --help' for more information."
#~ msgstr "Pruebe `%s --help' para obtener más información."

#~ msgid ""
#~ "\n"
#~ "Available columns (for --show):\n"
#~ msgstr ""
#~ "\n"
#~ "Columnas disponibles (para --show):\n"

#~ msgid " -T, --trust-irq <on|off>     make driver to trust irq\n"
#~ msgstr " -T, --trust-irq <on|off>     hace que el controlador confíe en la irq\n"

#~ msgid "     --version              output version information and exit\n"
#~ msgstr "     --version              saca la información de versión y termina\n"

#~ msgid " --version                         show version information and exit\n"
#~ msgstr " --version                         muestra la información sobre la versión y termina\n"

#~ msgid " --help                            display this help and exit\n"
#~ msgstr " --help                            muestra esta ayuda y termina\n"

#~ msgid "Device %s already contains a %s signature."
#~ msgstr "El dispositivo %s ya tiene una firma %s."

#~ msgid "%s: these options are mutually exclusive:"
#~ msgstr "%s: estas opciones son mutuamente excluyentes:"

#~ msgid " -m, --mtab             search in table of mounted filesystems\n"
#~ msgstr " -m, --mtab             busca en la tabla de sistemas de ficheros montados\n"

#~ msgid "Suspend access to a filesystem (ext3/4, ReiserFS, JFS, XFS).\n"
#~ msgstr "Suspende el acceso a un sistema de ficheros (ext3/4, ReiserFS, JFS, XFS).\n"

#~ msgid "Clock not changed - testing only.\n"
#~ msgstr "El reloj no se ha modificado; sólo se está probando.\n"

#~ msgid "--date argument too long"
#~ msgstr "argumento --date demasiado largo"

#~ msgid ""
#~ "The value of the --date option is not a valid date.\n"
#~ "In particular, it contains quotation marks."
#~ msgstr ""
#~ "El valor de la opción --date no es una fecha válida.\n"
#~ "En concreto, contiene comillas."

#~ msgid "Issuing date command: %s\n"
#~ msgstr "Ejecutando orden date: %s\n"

#~ msgid "Unable to run 'date' program in /bin/sh shell. popen() failed"
#~ msgstr "No se puede ejecutar el programa 'date' en intérprete de órdenes /bin/sh. popen() ha fallado"

#~ msgid "response from date command = %s\n"
#~ msgstr "respuesta de la orden date = %s\n"

#~ msgid ""
#~ "The date command issued by %s returned unexpected results.\n"
#~ "The command was:\n"
#~ "  %s\n"
#~ "The response was:\n"
#~ "  %s"
#~ msgstr ""
#~ "La orden date ejecutada por %s ha devuelto resultados inesperados.\n"
#~ "La orden fue:\n"
#~ "  %s\n"
#~ "La respuesta fue:\n"
#~ "  %s"

#~ msgid ""
#~ "The date command issued by %s returned something other than an integer where the converted time value was expected.\n"
#~ "The command was:\n"
#~ "  %s\n"
#~ "The response was:\n"
#~ " %s\n"
#~ msgstr ""
#~ "La orden date emitido por %s ha devuelto un valor no entero cuando se esperaba el valor de hora convertida.\n"
#~ "La orden fue:\n"
#~ "  %s\n"
#~ "La respuesta fue:\n"
#~ " %s\n"

#~ msgid "date string %s equates to %ld seconds since 1969.\n"
#~ msgstr "La cadena de fecha %s equivale a %ld segundos desde 1969.\n"

#~ msgid "Not setting system clock because running in test mode.\n"
#~ msgstr "No se establece el reloj del sistema ya que la ejecución es en modo de prueba.\n"

#~ msgid "Not updating adjtime file because of testing mode.\n"
#~ msgstr "No se está actualizando el fichero adjtime debido al modo de prueba.\n"

#~ msgid ""
#~ "Would have written the following to %s:\n"
#~ "%s"
#~ msgstr ""
#~ "Se habría escrito lo siguiente en %s:\n"
#~ "%s"

#~ msgid ""
#~ "The kernel keeps an epoch value for the Hardware Clock only on an Alpha machine.\n"
#~ "This copy of hwclock was built for a machine other than Alpha\n"
#~ "(and thus is presumably not running on an Alpha now).  No action taken."
#~ msgstr ""
#~ "El núcleo tiene un valor de época para el reloj de hardware sólo en las\n"
#~ "máquinas Alpha. Esta copia de hwclock se compiló para una máquina que no es\n"
#~ "Alpha (por lo que posiblemente no se está ejecutando en una máquina Alpha).\n"
#~ "No se efectúa ninguna acción."

#~ msgid " -c, --compare        periodically compare the system clock with the CMOS clock\n"
#~ msgstr " -c, --compare        compara periódicamente el reloj del sistema con el reloj CMOS\n"

#~ msgid ""
#~ "     --directisa      access the ISA bus directly instead of %s\n"
#~ "     --badyear        ignore RTC's year because the BIOS is broken\n"
#~ "     --date <time>    specifies the time to which to set the hardware clock\n"
#~ "     --epoch <year>   specifies the year which is the beginning of the\n"
#~ "                        hardware clock's epoch value\n"
#~ msgstr ""
#~ "     --directisa      accede al bus ISA directamente en lugar de %s\n"
#~ "     --badyear        desestima el año RTC porque la BIOS está rota\n"
#~ "     --date <hora>    especifica la hora que se pondrá en el reloj físico\n"
#~ "     --epoch <año>    especifica el año que coincide con el comienzo de la\n"
#~ "                        época del reloj físico\n"

#~ msgid ""
#~ " -J|--jensen, -A|--arc, -S|--srm, -F|--funky-toy\n"
#~ "      tell hwclock the type of Alpha you have (see hwclock(8))\n"
#~ "\n"
#~ msgstr ""
#~ " -J|--jensen, -A|--arc, -S|--srm, -F|--funky-toy\n"
#~ "      Indica al reloj de hardware el tipo de Alpha (ver hwclock(8))\n"

#~ msgid "Sorry, only the superuser can use the Hardware Clock."
#~ msgstr "Únicamente el superusuario puede utilizar el reloj de hardware."

#~ msgid "%s takes no non-option arguments.  You supplied %d.\n"
#~ msgstr "%s no admite argumentos que no sean opciones. Ha especificado %d.\n"

#~ msgid "No usable set-to time.  Cannot set clock."
#~ msgstr "Hora no utilizable. No se puede establecer el reloj."

#~ msgid "booted from MILO\n"
#~ msgstr "iniciado desde MILO\n"

#~ msgid "Ruffian BCD clock\n"
#~ msgstr "Reloj BCD Ruffian\n"

#~ msgid "clockport adjusted to 0x%x\n"
#~ msgstr "puerto de reloj ajustado a 0x%x\n"

#~ msgid "funky TOY!\n"
#~ msgstr "funky TOY!\n"

#~ msgid "atomic %s failed for 1000 iterations!"
#~ msgstr "%s atómico ha fallado para 1000 iteraciones."

#~ msgid "cmos_read(): write to control address %X failed"
#~ msgstr "cmos_read(): ha fallado la escritura en la dirección de control %X"

#~ msgid "cmos_read(): read from data address %X failed"
#~ msgstr "cmos_read(): ha fallado la lectura en la dirección de datos %X"

#~ msgid "cmos_write(): write to control address %X failed"
#~ msgstr "cmos_write(): ha fallado la escritura en la dirección de control %X"

#~ msgid "cmos_write(): write to data address %X failed"
#~ msgstr "cmos_write(): ha fallado la escritura en la dirección de datos %X"

#~ msgid "I failed to get permission because I didn't try."
#~ msgstr "No se ha podido obtener permiso porque no se ha intentado."

#~ msgid "unable to get I/O port access:  the iopl(3) call failed."
#~ msgstr "no se puede obtener acceso al puerto de E/S: la llamada iopl(3) ha fallado."

#~ msgid "Probably you need root privileges.\n"
#~ msgstr "Probablemente son necesarios los privilegios de usuario root.\n"

#~ msgid "failed to initialize output line"
#~ msgstr "no se ha podido inicializar la línea de salida"

#~ msgid "error: can not set signal handler"
#~ msgstr "error: no se puede establecer el manejador de señales"

#~ msgid "error: can not restore signal handler"
#~ msgstr "error: no se puede restablecer el manejador de señales"

#~ msgid "only root can mount %s on %s"
#~ msgstr "sólo el usuario root puede montar %s en %s"

#~ msgid "%s is used as read only loop, mounting read-only"
#~ msgstr "%s se utiliza solo para lectura; se monta como de solo lectura"

#~ msgid ""
#~ "%s: more filesystems detected. This should not happen,\n"
#~ "       use -t <type> to explicitly specify the filesystem type or\n"
#~ "       use wipefs(8) to clean up the device."
#~ msgstr ""
#~ "%s: se han detectado más sistemas de ficheros. Esto no debería suceder;\n"
#~ "       utilice -t <tipo> para especificar explícitamente el tipo de sistema de ficheros o\n"
#~ "       utilice wipefs(8) para limpiar el dispositivo."

#~ msgid "I could not determine the filesystem type, and none was specified"
#~ msgstr "No he podido determinar el tipo de sistema de ficheros y no se ha especificado ninguno"

#~ msgid "you must specify the filesystem type"
#~ msgstr "debe especificar el tipo de sistema de ficheros"

#~ msgid "mount source not defined"
#~ msgstr "fuente de montaje no definida"

#~ msgid "%s: mount failed"
#~ msgstr "%s: montaje erróneo"

#~ msgid "%s: filesystem mounted, but mount(8) failed"
#~ msgstr "%s: el sistema de ficheros está montado, pero mount(8) ha fallado"

#~ msgid "%s is busy"
#~ msgstr "%s está ocupado"

#~ msgid "       %s is already mounted on %s\n"
#~ msgstr "       %s ya está montado en %s\n"

#~ msgid ""
#~ "\n"
#~ "       In some cases useful info is found in syslog - try\n"
#~ "       dmesg | tail or so.\n"
#~ msgstr ""
#~ "\n"
#~ "       En algunos casos se encuentra información en syslog - pruebe\n"
#~ "       dmesg | tail o algo parecido.\n"

#~ msgid "unrecognized option '%c'"
#~ msgstr "opción '%c' no reconocida"

#~ msgid ""
#~ "%s: target is busy\n"
#~ "        (In some cases useful info about processes that\n"
#~ "         use the device is found by lsof(8) or fuser(1).)"
#~ msgstr ""
#~ "%s: el destino está ocupado\n"
#~ "        (En algunos casos puede obtenerse información útil sobre los\n"
#~ "         procesos que utiliza el dispositivo mediante lsof(8) o fuser(1).)"

#~ msgid "%s: mountpoint not found"
#~ msgstr "%s: no se ha encontrado el punto de montaje"

#~ msgid "line %d is too long, output will be truncated"
#~ msgstr "la línea %d es demasiado larga; se trunca la salida"

#~ msgid "incomplete write to \"%s\" (written %zd, expected %zd)\n"
#~ msgstr "escritura incompleta en \"%s\" (escritos %zd, se esperaban %zd)\n"

#~ msgid "%s: cannot add inotify watch (limit of inotify watches was reached)."
#~ msgstr ""
#~ "%s: no se ha podido añadir visor inotify (se ha alcanzado el límite de\n"
#~ "visores de inotify)."

#~ msgid " %s [option] <file>\n"
#~ msgstr " %s [opción] <fichero>\n"

#~ msgid "Follow the growth of a log file.\n"
#~ msgstr "Sigue el crecimiento de un fichero de «log».\n"

#~ msgid " -n, --lines <number>   output the last <number> lines\n"
#~ msgstr " -n, --lines <número>   saca las últimas <número> líneas\n"

#~ msgid "Warning: use of 'tailf' is deprecated, use 'tail -f' instead.\n"
#~ msgstr "Atención: `tailf' está en desuso; utilícese 'tail -f' en su lugar.\n"

#~ msgid "Filesystem label:"
#~ msgstr "Etiqueta del sistema de ficheros:"

#~ msgid "failed to set PATH"
#~ msgstr "no se ha podido establecer la RUTA"

#~ msgid "%d"
#~ msgstr "%d"

#~ msgid "use of 'kill --pid' option as command name is deprecated"
#~ msgstr "el uso de la opción 'kill --pid' como un nombre de orden está obsoleto"

#~ msgid "%4d-%.2d-%.2d %02d:%02d:%02d.%06ld%+02d:%02d\n"
#~ msgstr "%4d-%.2d-%.2d %02d:%02d:%02d.%06ld%+02d:%02d\n"

#~ msgid "bad timeout value: %s"
#~ msgstr "hora de expiración incorrecta: %s"

#~ msgid "expected a number, but got '%s'"
#~ msgstr "se esperaba un número, pero se obtuvo '%s'"

#~ msgid "divisor '%s'"
#~ msgstr "divisor '%s'"

#~ msgid "argument error: %s"
#~ msgstr "error en el argumento: %s"

#~ msgid "tty path %s too long"
#~ msgstr "ruta del terminal %s demasiado larga"

#~ msgid "%s is not a block special device"
#~ msgstr "%s no es un dispositivo de bloques"

#~ msgid "%s: device is misaligned"
#~ msgstr "%s: el dispositivo está desalineado"

#~ msgid "OS/2 hidden C: drive"
#~ msgstr "Unidad C: oculta de OS/2"

#~ msgid "%s: failed to get device path"
#~ msgstr "%s: fallo al obtener la ruta del dispositivo"

#~ msgid "%s: unknown device name"
#~ msgstr "%s: nombre de dispositivo desconocido"

#~ msgid "%s: failed to get dm name"
#~ msgstr "%s: fallo al obtener el nombre dm"

#~ msgid "the sort column has to be among the output columns"
#~ msgstr "la columna para la ordenación tiene que ser una de las columnas que se van a mostrar en la salida"

#~ msgid ""
#~ " -p, --pid <path>        path to pid file\n"
#~ " -s, --socket <path>     path to socket\n"
#~ " -T, --timeout <sec>     specify inactivity timeout\n"
#~ " -k, --kill              kill running daemon\n"
#~ " -r, --random            test random-based generation\n"
#~ " -t, --time              test time-based generation\n"
#~ " -n, --uuids <num>       request number of uuids\n"
#~ " -P, --no-pid            do not create pid file\n"
#~ " -F, --no-fork           do not daemonize using double-fork\n"
#~ " -S, --socket-activation do not create listening socket\n"
#~ " -d, --debug             run in debugging mode\n"
#~ " -q, --quiet             turn on quiet mode\n"
#~ " -V, --version           output version information and exit\n"
#~ " -h, --help              display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ " -p, --pid <ruta>        ruta al fichero de pid\n"
#~ " -s, --socket <ruta>     ruta al «socket»\n"
#~ " -T, --timeout <seg>     especifica el tiempo máximo de inactividad\n"
#~ " -k, --kill              mata el demonio en ejecución\n"
#~ " -r, --random            prueba la generación aleatoria\n"
#~ " -t, --time              prueba la generación temporizada\n"
#~ " -n, --uuids <num>       solicita el número de uuids\n"
#~ " -P, --no-pid            no crea fichero de pid\n"
#~ " -F, --no-fork           no convierte en demonio utilizando doble «fork»\n"
#~ " -S, --socket-activation no crea «socket» de escucha\n"
#~ " -d, --debug             corre en modo de depuración\n"
#~ " -q, --quiet             cambia a modo silencioso\n"
#~ " -V, --version           saca la información de versión y sale\n"
#~ " -h, --help              muestra esta ayuda y sale\n"
#~ "\n"

#~ msgid "unknown scheduling policy"
#~ msgstr "política de planificación desconocida"

#~ msgid ""
#~ " -o, --offset <num>  offset in bytes to discard from\n"
#~ " -l, --length <num>  length of bytes to discard from the offset\n"
#~ " -p, --step <num>    size of the discard iterations within the offset\n"
#~ " -s, --secure        perform secure discard\n"
#~ " -v, --verbose       print aligned length and offset\n"
#~ msgstr ""
#~ " -o, --offset <num>  desplazamiento en bytes desde el que descartar\n"
#~ " -l, --length <num>  longitud en bytes que descartar desde el desplazamiento\n"
#~ " -p, --step <num>    tamaño de las iteraciones de descarte dentro del desplazamiento\n"
#~ " -s, --secure        realizar descarte seguro\n"
#~ " -v, --verbose       imprimir longitud y desplazamiento alineados\n"

#~ msgid "%s: parse error: ignore entry at line %d."
#~ msgstr "%s: error de análisis: se desestima la entrada en la línea %d."

#~ msgid "pages"
#~ msgstr "páginas"

#~ msgid "different"
#~ msgstr "diferente"

#~ msgid "same"
#~ msgstr "igual"

#~ msgid "Device open in read-only mode."
#~ msgstr "El dispositivo está abierto en modo de sólo lectura."

#~ msgid " -v  be verbose\n"
#~ msgstr " -v  expresivo\n"

#~ msgid ""
#~ "Very long (%zu bytes) filename `%s' found.\n"
#~ " Please increase MAX_INPUT_NAMELEN in mkcramfs.c and recompile.  Exiting."
#~ msgstr ""
#~ "Se encontró un nombre de fichero demasiado largo (%zu bytes) `%s'.\n"
#~ " Por favor, incremente MAX_INPUT_NAMELEN en mkcramfs.c y recompile. Saliendo."

#~ msgid "Usage: %s [-c | -l filename] [-nXX] [-iXX] /dev/name [blocks]"
#~ msgstr "Modo de empleo: %s [-c | -l nombrefichero] [-nXX] [-iXX] /dev/nombre [bloques]"

#~ msgid "%s: unable to allocate buffer for superblock"
#~ msgstr "%s: no se puede asignar un búfer para el superbloque"

#~ msgid "%s: unable to allocate buffers for maps"
#~ msgstr "%s: no se puede asignar búferes para mapas"

#~ msgid "%s: unable to allocate buffer for inodes"
#~ msgstr "%s: no se puede asignar búfer para los nodos-i"

#~ msgid "%s: bad inode size"
#~ msgstr "%s: tamaño de nodo-i incorrecto"

#~ msgid "disk: %.*s"
#~ msgstr "disco: %.*s"

#~ msgid "label: %.*s"
#~ msgstr "etiqueta: %.*s"

#~ msgid "flags: %s"
#~ msgstr "indicadores: %s"

#~ msgid "bytes/sector: %ld"
#~ msgstr "bytes por sector: %ld"

#~ msgid "sectors/track: %ld"
#~ msgstr "sectores por pista: %ld"

#~ msgid "tracks/cylinder: %ld"
#~ msgstr "pistas por cilindro: %ld"

#~ msgid "sectors/cylinder: %ld"
#~ msgstr "sectores por cilindro: %ld"

#~ msgid "cylinders: %ld"
#~ msgstr "cilindros: %ld"

#~ msgid "rpm: %d"
#~ msgstr "r.p.m.: %d"

#~ msgid "interleave: %d"
#~ msgstr "interleave: %d"

#~ msgid "trackskew: %d"
#~ msgstr "trackskew: %d"

#~ msgid "cylinderskew: %d"
#~ msgstr "cylinderskew: %d"

#~ msgid "headswitch: %ld (milliseconds)"
#~ msgstr "headswitch: %ld (milisegundos)"

#~ msgid "track-to-track seek: %ld (milliseconds)"
#~ msgstr "búsqueda pista a pista: %ld (milisegundos)"

#~ msgid "You cannot change a partition into an extended one or vice versa. Delete it first."
#~ msgstr "No puede convertir una partición en extendida ni viceversa. Primero debe suprimirla."

#~ msgid ""
#~ "Label geometry: %d heads, %llu sectors\n"
#~ "                %llu cylinders, %d physical cylinders\n"
#~ "                %d extra sects/cyl, interleave %d:1\n"
#~ msgstr ""
#~ "Geometría de la etiqueta: %d cabezas, %llu sectores\n"
#~ "                %llu cilindros, %d cilindros físicos\n"
#~ "                %d sectores/cil. extra, intercalado %d:1\n"

#~ msgid ""
#~ "Label geometry: %d rpm, %d alternate and %d physical cylinders,\n"
#~ "                %d extra sects/cyl, interleave %d:1"
#~ msgstr ""
#~ "Geometría de la etiqueta: %d rpm, %d cilindros alternados y %d físicos,\n"
#~ "                          %d sectores/cil. adicionales, entrelazado %d:1"

# Masculino, porque se refiere a "Indicadores"
#~ msgid "<none>"
#~ msgstr "<ninguno>"

#~ msgid "gettimeofday failed"
#~ msgstr "gettimeofday ha fallado"

#~ msgid "sysinfo failed"
#~ msgstr "sysinfo ha fallado"

#~ msgid "usage: last [-#] [-f file] [-t tty] [-h hostname] [user ...]\n"
#~ msgstr "modo de empleo: last [-#] [-f fichero] [-t tty] [-h nombrehost] [usuario ...]\n"

#~ msgid "%s: mmap failed"
#~ msgstr "%s: mmap ha fallado"

#~ msgid "  still logged in"
#~ msgstr "  todavía tiene iniciada la sesión"

#~ msgid ""
#~ "\n"
#~ "wtmp begins %s"
#~ msgstr ""
#~ "\n"
#~ "wtmp empieza %s"

#~ msgid "gethostname failed"
#~ msgstr "gethostname ha fallado"

#~ msgid ""
#~ "\n"
#~ "interrupted %10.10s %5.5s \n"
#~ msgstr ""
#~ "\n"
#~ "interrumpido %10.10s %5.5s \n"

#~ msgid ""
#~ " -p, --pid <pid>        process id\n"
#~ " -o, --output <list>    define which output columns to use\n"
#~ " -n, --noheadings       don't print headings\n"
#~ " -r, --raw              use the raw output format\n"
#~ " -u, --notruncate       don't truncate text in columns\n"
#~ " -h, --help             display this help and exit\n"
#~ " -V, --version          output version information and exit\n"
#~ msgstr ""
#~ " -p, --pid <pid>        id del proceso\n"
#~ " -o, --output <lista>   define las columnas que se mostrarán en la salida\n"
#~ " -n, --noheadings       no imprime los encabezados\n"
#~ " -r, --raw              utiliza el format de salida en bruto\n"
#~ " -u, --notruncate       no trunca el texto en las columnas\n"
#~ " -h, --help             muestra esta ayuda y sale\n"
#~ " -V, --version          saca la información de versión y sale\n"

#~ msgid ""
#~ "\n"
#~ "Scheduling policies:\n"
#~ "  -b | --batch         set policy to SCHED_BATCH\n"
#~ "  -f | --fifo          set policy to SCHED_FIFO\n"
#~ "  -i | --idle          set policy to SCHED_IDLE\n"
#~ "  -o | --other         set policy to SCHED_OTHER\n"
#~ "  -r | --rr            set policy to SCHED_RR (default)\n"
#~ msgstr ""
#~ "\n"
#~ "Políticas de planificación:\n"
#~ "  -b | --batch         establece la política SCHED_BATCH\n"
#~ "  -f | --fifo          establece la política SCHED_FIFO\n"
#~ "  -i | --idle          establece la política SCHED_IDLE\n"
#~ "  -o | --other         establece la política SCHED_OTHER\n"
#~ "  -r | --rr            establece la política SCHED_RR (predeterminada)\n"

#~ msgid ""
#~ "\n"
#~ "Options:\n"
#~ "  -a | --all-tasks     operate on all the tasks (threads) for a given pid\n"
#~ "  -h | --help          display this help\n"
#~ "  -m | --max           show min and max valid priorities\n"
#~ "  -p | --pid           operate on existing given pid\n"
#~ "  -v | --verbose       display status information\n"
#~ "  -V | --version       output version information\n"
#~ "\n"
#~ msgstr ""
#~ "\n"
#~ "Opciones:\n"
#~ "  -a | --all-tasks     actúa sobre todas las tareas (hilos) de un determinado pid\n"
#~ "  -h | --help          muestra esta ayuda\n"
#~ "  -m | --max           muestra las prioridades válidas mínima y máxima\n"
#~ "  -p | --pid           actúa sobre un determinado pid existente\n"
#~ "  -v | --verbose       muestra información sobre el estado\n"
#~ "  -V | --version       saca la información de versión\n"
#~ "\n"

#~ msgid "invalid argument to --manualeject/-i option"
#~ msgstr "argumento no válido para la opción --manualeject/-i"

#~ msgid "Sorry, only the superuser can change the System Clock."
#~ msgstr "Únicamente el superusuario puede cambiar el reloj del sistema."

#~ msgid "Sorry, only the superuser can change the Hardware Clock epoch in the kernel."
#~ msgstr "Sólo el superusuario puede cambiar el valor de época del reloj de hardware del núcleo."

#~ msgid "read() to %s to wait for clock tick failed"
#~ msgstr "Error de read() de %s al esperar señal de reloj"

#~ msgid ""
#~ " -h, --help              display this help text and exit\n"
#~ " -i, --internal-only     don't call the mount.<type> helpers\n"
#~ " -l, --show-labels       lists all mounts with LABELs\n"
#~ " -n, --no-mtab           don't write to /etc/mtab\n"
#~ msgstr ""
#~ " -h, --help              muestra este texto de ayuda y termina\n"
#~ " -i, --internal-only     no llama a los auxiliares mount.<tipo>\n"
#~ " -l, --show-labels       enumera todos los montajes con ETIQUETAs\n"
#~ " -n, --no-mtab           no escribe en /etc/mtab\n"

#~ msgid ""
#~ " -v, --verbose           say what is being done\n"
#~ " -V, --version           display version information and exit\n"
#~ " -w, --rw, --read-write  mount the filesystem read-write (default)\n"
#~ msgstr ""
#~ " -v, --verbose           cuenta lo que se está haciendo\n"
#~ " -V, --version           muestra la información de versión y termina\n"
#~ " -w, --rw, --read-write  monta el sistema de ficheros para lectura y escritura (opción predefinida)\n"

#~ msgid "set rtc alarm failed"
#~ msgstr "fallo al poner la alarma rtc"

#~ msgid "enable rtc alarm failed"
#~ msgstr "fallo al activar la alarma rtc"

#~ msgid "suspend to \"%s\" unavailable"
#~ msgstr "suspensión a \"%s\" no disponible"

#~ msgid " -m, --mount               unshare mounts namespace\n"
#~ msgstr " -m, --mount               dejar de compartir el espacio de nombres de montajes\n"

#~ msgid " -u, --uts                 unshare UTS namespace (hostname etc)\n"
#~ msgstr " -u, --uts                 dejar de compartir el espacio de nombres UTS (nombre de máquina, etc.)\n"

#~ msgid " -i, --ipc                 unshare System V IPC namespace\n"
#~ msgstr " -i, --ipc                 dejar de compartir el espacio de nombres de IPC System V\n"

#~ msgid " -n, --net                 unshare network namespace\n"
#~ msgstr " -n, --net                 dejar de compartir el espacio de nombres de red\n"

#~ msgid "cannot open %s: %m"
#~ msgstr "no se puede abrir %s: %m"

#~ msgid "fread failed"
#~ msgstr "fread ha fallado"

#~ msgid "Minimal size is %ju"
#~ msgstr "El tamaño mínimo es %ju"

#~ msgid "Help Screen for cfdisk"
#~ msgstr "Pantalla de ayuda para cfdisk"

#~ msgid "disk drive."
#~ msgstr "de disco duro."

#~ msgid "Copyright (C) 2014 Karel Zak <kzak@redhat.com> "
#~ msgstr "Copyright (C) 2014 Karel Zak <kzak@redhat.com> "

#~ msgid "Based on the original cfdisk from Kevin E. Martin & aeb."
#~ msgstr "Basado en el cfdisk original de Kevin E. Martin & aeb."

#~ msgid "             `no'"
#~ msgstr "             `no'"

#~ msgid "Too small partition size specified."
#~ msgstr "El tamaño especificado para la partición es demasiado pequeño."

#~ msgid "Device open in read-only mode"
#~ msgstr "El dispositivo está abierto en modo de sólo lectura"

#~ msgid "stat failed %s"
#~ msgstr "fallo de 'stat': %s)"

#~ msgid "faild to allocate iterator"
#~ msgstr "fallo al reservar iterador"

#~ msgid ""
#~ "   <start>  begin of the partition in sectors. The default is the first\n"
#~ "            free space.\n"
#~ msgstr ""
#~ "   <comienzo> comienzo de la partición en sectores. Lo predeterminado es el\n"
#~ "            primer espacio libre.\n"

#~ msgid "%s: stat failed"
#~ msgstr "%s: fallo al obtener el estado"

#~ msgid "     --rfc5424[=<notime,notq,nohost>]\n"
#~ msgstr "     --rfc5424[=<notime,notq,nohost>]\n"

#~ msgid "%s: lstat failed"
#~ msgstr "%s: lstat ha fallado"

#~ msgid ""
#~ "\n"
#~ "Sets or gets the IO scheduling class and priority of processes.\n"
#~ msgstr ""
#~ "\n"
#~ "Establece u obtiene la clase de planificación E/S y la prioridad de los procesos.\n"

#~ msgid "Please, select a type to create a new disk label."
#~ msgstr "Por favor, seleccione un tipo para crear una nueva etiqueta de disco."

#~ msgid "Usage: %s [options] device\n"
#~ msgstr "Modo de empleo: %s [opciones] dispositivo\n"

#~ msgid ""
#~ "\n"
#~ "Options:\n"
#~ " -n, --no-verify  disable the verification after the format\n"
#~ " -V, --version    output version information and exit\n"
#~ " -h, --help       display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ "\n"
#~ "Opciones:\n"
#~ " -n, --no-verify  desactivar la verificación después del formato\n"
#~ " -V, --version    mostrar la información de versión y salir\n"
#~ " -h, --help       mostrar esta ayuda y salir\n"
#~ "\n"

#~ msgid ""
#~ "\n"
#~ "For more information see mkfs(8).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información véase mkfs(8).\n"

#~ msgid "%s (%s)\n"
#~ msgstr "%s (%s)\n"

#~ msgid "Bad swap header size, no label written."
#~ msgstr "Tamaño de cabecera de intercambio incorrecto; no se ha escrito etiqueta."

#~ msgid "seek error on %s - cannot seek to %lu"
#~ msgstr "Error de búsqueda en %s; no se puede buscar en %lu"

#~ msgid "seek error: wanted 0x%08x%08x, got 0x%08x%08x"
#~ msgstr "Error de búsqueda: se esperaba 0x%08x%08x, se ha obtenido 0x%08x%08x"

#~ msgid "read error on %s - cannot read sector %llu"
#~ msgstr "Error de lectura en %s; no se puede leer el sector %llu"

#~ msgid "write error on %s - cannot write sector %llu"
#~ msgstr "Error de escritura en %s; no se puede escribir el sector %llu"

#~ msgid "cannot open partition sector save file (%s)"
#~ msgstr "No se puede abrir el fichero de guardar sector de partición (%s)"

#~ msgid "write error on %s"
#~ msgstr "Error de escritura en %s"

#~ msgid "cannot stat partition restore file (%s)"
#~ msgstr "No se puede ejecutar stat para fichero de restaurar partición (%s)"

#~ msgid "partition restore file has wrong size - not restoring"
#~ msgstr "Tamaño incorrecto de fichero de restaurar partición; no se efectúa restauración"

#~ msgid "cannot open partition restore file (%s)"
#~ msgstr "No se puede abrir fichero de restaurar partición (%s)"

#~ msgid "cannot open device %s for writing"
#~ msgstr "No se puede abrir el dispositivo %s para escribir"

#~ msgid "error writing sector %lu on %s"
#~ msgstr "Error al escribir el sector %lu en %s"

#~ msgid "Disk %s: cannot get geometry"
#~ msgstr "Disco %s: no se puede obtener la geometría"

#~ msgid "Disk %s: cannot get size"
#~ msgstr "Disco %s: no se puede obtener el tamaño"

#~ msgid ""
#~ "Warning: start=%lu - this looks like a partition rather than\n"
#~ "the entire disk. Using fdisk on it is probably meaningless.\n"
#~ "[Use the --force option if you really want this]"
#~ msgstr ""
#~ "Atención: principio=%lu - parece ser una partición y no un\n"
#~ "disco entero. Usar fdisk con ella probablemente no tiene sentido.\n"
#~ "[Use la opción --force si realmente desea realizar esta operación.]"

#~ msgid "Warning: HDIO_GETGEO says that there are %lu heads"
#~ msgstr "Atención: HDIO_GETGEO indica que hay %lu cabezas"

#~ msgid "Warning: HDIO_GETGEO says that there are %lu sectors"
#~ msgstr "Atención: HDIO_GETGEO indica que hay %lu sectores"

#~ msgid "Warning: BLKGETSIZE/HDIO_GETGEO says that there are %lu cylinders"
#~ msgstr "Atención: HDIO_GETGEO indica que hay %lu cilindros"

#~ msgid ""
#~ "Warning: unlikely number of sectors (%lu) - usually at most 63\n"
#~ "This will give problems with all software that uses C/H/S addressing."
#~ msgstr ""
#~ "Atención: número improbable de sectores (%lu); normalmente 63 como máximo\n"
#~ "Esto causará problemas con el software que direccione con Cil./Cab./Sector"

#~ msgid ""
#~ "\n"
#~ "Disk %s: %lu cylinders, %lu heads, %lu sectors/track\n"
#~ msgstr ""
#~ "\n"
#~ "Disco %s: %lu cilindros, %lu cabezas, %lu sectores/pista\n"

#~ msgid "%s of partition %s has impossible value for head: %lu (should be in 0-%lu)"
#~ msgstr ""
#~ "%s de partición %s tiene un valor imposible para cabeza: %lu\n"
#~ "(debe estar entre 0 y %lu)"

#~ msgid "%s of partition %s has impossible value for sector: %lu (should be in 1-%lu)"
#~ msgstr ""
#~ "%s de partición %s tiene un valor imposible para sector: %lu\n"
#~ "(debe estar entre 1 y %lu)"

#~ msgid "%s of partition %s has impossible value for cylinders: %lu (should be in 0-%lu)"
#~ msgstr ""
#~ "%s de partición %s tiene un valor imposible para cilindros: %lu\n"
#~ "(debe estar entre 0 y %lu)"

#~ msgid "Re-reading the partition table ...\n"
#~ msgstr "Volviendo a leer la tabla de particiones...\n"

#~ msgid ""
#~ "The command to re-read the partition table failed.\n"
#~ "Run partprobe(8), kpartx(8) or reboot your system now,\n"
#~ "before using mkfs"
#~ msgstr ""
#~ "La orden para volver a leer la tabla de particiones ha fallado.\n"
#~ "Ejecute partprobe(8), kpartx(8) o reinicie el sistema ahora,\n"
#~ "antes de utilizar mkfs"

#~ msgid "Error closing %s"
#~ msgstr "Error al cerrar %s"

#~ msgid "%s: no such partition\n"
#~ msgstr "%s: esta partición no existe\n"

#~ msgid "unrecognized format - using sectors"
#~ msgstr "Formato no reconocido; utilizando sectores"

#~ msgid "unimplemented format - using %s"
#~ msgstr "formato no implementado; utilizando %s"

#~ msgid ""
#~ "Units: cylinders of %lu bytes, blocks of 1024 bytes, counting from %d\n"
#~ "\n"
#~ msgstr ""
#~ "Unidades: cilindros de %lu bytes, bloques de 1024 bytes, contando desde %d\n"
#~ "\n"

#~ msgid "   Device Boot Start     End   #cyls    #blocks   Id  System\n"
#~ msgstr "   Disp.  Inic. Princ.   Fin   Nºcil    Nºbloq.   Id  Sistema\n"

#~ msgid ""
#~ "Units: sectors of 512 bytes, counting from %d\n"
#~ "\n"
#~ msgstr ""
#~ "Unidades: sectores de 512 bytes, contando desde %d\n"
#~ "\n"

#~ msgid "   Device Boot    Start       End   #sectors  Id  System\n"
#~ msgstr "   Disp.  Inicio  Principio   Fin   Nº sect.  Id  Sistema\n"

#~ msgid ""
#~ "Units: blocks of 1024 bytes, counting from %d\n"
#~ "\n"
#~ msgstr ""
#~ "Unidades: bloques de 1024 bytes, contando desde %d\n"
#~ "\n"

#~ msgid "   Device Boot   Start       End    #blocks   Id  System\n"
#~ msgstr "   Disp.  Inic.  Principio   Fin    Nºbloques Id  Sistema\n"

#~ msgid ""
#~ "Units: 1MiB = 1024*1024 bytes, blocks of 1024 bytes, counting from %d\n"
#~ "\n"
#~ msgstr ""
#~ "Unidades: 1MiB = 1024*1024 bytes, bloques de 1024 bytes, contando desde %d\n"
#~ "\n"

#~ msgid "   Device Boot Start   End    MiB    #blocks   Id  System\n"
#~ msgstr "   Disp.  Inic Princ.  Fin    MiB    Nºbloques Id  Sistema\n"

#~ msgid "\t\tstart: (c,h,s) expected (%ld,%ld,%ld) found (%ld,%ld,%ld)\n"
#~ msgstr "\t\tprincipio: (cil.,cab.,sect.) esperado (%ld,%ld,%ld) detectado (%ld,%ld,%ld)\n"

#~ msgid "\t\tend: (c,h,s) expected (%ld,%ld,%ld) found (%ld,%ld,%ld)\n"
#~ msgstr "\t\tfin: (cil.,cab.,sect.) esperado (%ld,%ld,%ld) detectado (%ld,%ld,%ld)\n"

#~ msgid "partition ends on cylinder %ld, beyond the end of the disk\n"
#~ msgstr "La partición termina en el cilindro %ld, más allá del final del disco\n"

#~ msgid ""
#~ "Warning: The partition table looks like it was made\n"
#~ "  for C/H/S=*/%ld/%ld (instead of %ld/%ld/%ld).\n"
#~ "For this listing I'll assume that geometry."
#~ msgstr ""
#~ "Atención: La tabla de particiones parece haberse creado\n"
#~ "  para Cil./Cab./Sect.=*/%ld/%ld (en lugar de %ld/%ld/%ld).\n"
#~ "Para este listado se presupondrá esta geometría."

#~ msgid "no partition table present"
#~ msgstr "no existe ninguna tabla de particiones"

#~ msgid "strange, only %d partition defined"
#~ msgid_plural "strange, only %d partitions defined"
#~ msgstr[0] "Extrañamente sólo hay %d partición definida"
#~ msgstr[1] "Extrañamente sólo hay %d particiones definidas"

#~ msgid "Warning: partition %s has size 0 but is not marked Empty"
#~ msgstr "Atención: la partición %s tiene tamaño 0 pero no está marcada como vacía"

#~ msgid "Warning: partition %s has size 0 and is bootable"
#~ msgstr "Atención: la partición %s tiene tamaño 0 y es iniciable"

#~ msgid "Warning: partition %s has size 0 and nonzero start"
#~ msgstr "Atención: la partición %s tiene tamaño 0 y principio distinto de cero"

#~ msgid "Warning: partition %s is not contained in partition %s"
#~ msgstr "Atención: la partición %s no está contenida en la partición %s"

#~ msgid "Warning: partitions %s and %s overlap"
#~ msgstr "Atención: las particiones %s y %s se solapan"

#~ msgid ""
#~ "Warning: partition %s contains part of the partition table (sector %llu),\n"
#~ "and will destroy it when filled"
#~ msgstr ""
#~ "Atención: la partición %s contiene parte de la tabla de particiones\n"
#~ "(sector %llu), y la destruirá cuando se llene"

#~ msgid "Warning: partition %s starts at sector 0"
#~ msgstr "Atención: la partición %s empieza en el sector 0"

#~ msgid "Warning: partition %s extends past end of disk"
#~ msgstr "Atención: la partición %s finaliza más allá del final del disco"

#~ msgid ""
#~ "Warning: partition %s has size %d.%d TB (%llu bytes),\n"
#~ "which is larger than the %llu bytes limit imposed\n"
#~ "by the DOS partition table for %d-byte sectors"
#~ msgstr ""
#~ "Atención: la partición %s tiene un tamaño de %d.%d TB (%llu bytes),\n"
#~ "el cual es mayor que el límite de %llu bytes impuesto\n"
#~ "por la tabla de particiones DOS para sectores de %d bytes"

#~ msgid ""
#~ "Warning: partition %s starts at sector %llu (%d.%d TB for %d-byte sectors),\n"
#~ "which exceeds the DOS partition table limit of %llu sectors"
#~ msgstr ""
#~ "Atención: la partición %s comienza en el sector %llu (%d,%d TB para sectores de %d bytes),\n"
#~ "lo cual excede el límite de %llu sectores de las tablas de particiones DOS"

#~ msgid ""
#~ "Among the primary partitions, at most one can be extended\n"
#~ " (although this is not a problem under Linux)"
#~ msgstr ""
#~ "Como máximo una de las particiones primarias puede ser extendida\n"
#~ " (aunque esto no es un problema bajo Linux)"

#~ msgid "Warning: partition %s does not start at a cylinder boundary"
#~ msgstr "Atención: la partición %s no empieza en un límite de cilindro"

#~ msgid "Warning: partition %s does not end at a cylinder boundary"
#~ msgstr "Atención: la partición %s no termina en un límite de cilindro"

#~ msgid ""
#~ "Warning: more than one primary partition is marked bootable (active)\n"
#~ "This does not matter for LILO, but the DOS MBR will not boot this disk."
#~ msgstr ""
#~ "Atención: hay más de una partición primaria marcada como iniciable (activa)\n"
#~ "Esto no es poblema para LILO, pero el MBR de DOS no se iniciará con este disco."

#~ msgid ""
#~ "Warning: usually one can boot from primary partitions only\n"
#~ "LILO disregards the `bootable' flag."
#~ msgstr ""
#~ "Atención: normalmente sólo es posible iniciar desde particiones primarias.\n"
#~ "LILO no tiene en cuenta el indicador de iniciable."

#~ msgid ""
#~ "Warning: no primary partition is marked bootable (active)\n"
#~ "This does not matter for LILO, but the DOS MBR will not boot this disk."
#~ msgstr ""
#~ "Atención: no hay ninguna partición primaria marcada como iniciable (activa).\n"
#~ "Esto no es problema para LILO, pero el MBR de DOS no iniciará con este disco."

#~ msgid "start"
#~ msgstr "comienzo"

#~ msgid "partition %s: start: (c,h,s) expected (%ld,%ld,%ld) found (%ld,%ld,%ld)"
#~ msgstr "Partición %s: principio: (cil.,cab.,sect.) esperado (%ld,%ld,%ld) detectado (%ld,%ld,%ld)"

#~ msgid "end"
#~ msgstr "final"

#~ msgid "partition %s: end: (c,h,s) expected (%ld,%ld,%ld) found (%ld,%ld,%ld)"
#~ msgstr "Partición %s: fin: (cil.,cab.,sect.) esperado (%ld,%ld,%ld) detectado (%ld,%ld,%ld)"

#~ msgid "partition %s ends on cylinder %ld, beyond the end of the disk"
#~ msgstr "La partición %s termina en el cilindro %ld, más allá del final del disco"

#~ msgid ""
#~ "Warning: shifted start of the extd partition from %lld to %lld\n"
#~ "(For listing purposes only. Do not change its contents.)"
#~ msgstr ""
#~ "Atención: se desplaza el comienzo de la partición extd de %lld a %lld\n"
#~ "(Solamente para visualizarlo. No se cambia su contenido.)"

#~ msgid ""
#~ "Warning: extended partition does not start at a cylinder boundary.\n"
#~ "DOS and Linux will interpret the contents differently."
#~ msgstr ""
#~ "Atención: la partición extendida no empieza en un límite de cilindro.\n"
#~ "DOS y Linux interpretarán el contenido de forma diferente."

#~ msgid "ERROR: sector %llu does not have an msdos signature"
#~ msgstr "ERROR: el sector %llu no tiene una firma msdos"

#~ msgid "too many partitions - ignoring those past nr (%zu)"
#~ msgstr "demasiadas particiones - se ignoran las posteriores al nº (%zu)"

#~ msgid "tree of partitions?"
#~ msgstr "¿árbol de particiones?"

#~ msgid "detected Disk Manager - unable to handle that"
#~ msgstr "Administrador de disco detectado; no se puede tratar esto"

#~ msgid "DM6 signature found - giving up"
#~ msgstr "Detectada firma DM6 - abandonando"

#~ msgid "strange..., an extended partition of size 0?"
#~ msgstr "Situación anómala: ¿partición extendida de tamaño 0?"

#~ msgid "strange..., a BSD partition of size 0?"
#~ msgstr "Situación anómala: ¿partición BSD de tamaño 0?"

#~ msgid "-n flag was given: Nothing changed"
#~ msgstr "Se ha especificado el indicador -n: no se ha producido ningún cambio"

#~ msgid "Failed saving the old sectors - aborting\n"
#~ msgstr "Error al guardar los sectores antiguos; anulando la operación\n"

#~ msgid "Failed writing the partition on %s"
#~ msgstr "Error al escribir la partición en %s"

#~ msgid "long or incomplete input line - quitting"
#~ msgstr "Línea de entrada larga o incompleta; se abandona la operación"

#~ msgid "input error: `=' expected after %s field"
#~ msgstr "Error de entrada: se esperaba `=' después del campo %s"

#~ msgid "input error: unexpected character %c after %s field"
#~ msgstr "Error de entrada: carácter inesperado %c tras campo %s"

#~ msgid "unrecognized input: %s"
#~ msgstr "Entrada no reconocida: %s"

#~ msgid "number too big"
#~ msgstr "Número demasiado elevado"

#~ msgid "trailing junk after number"
#~ msgstr "Datos extraños tras el número"

#~ msgid "no room for partition descriptor"
#~ msgstr "No hay espacio para descriptor de partición"

#~ msgid "cannot build surrounding extended partition"
#~ msgstr "No se puede crear partición extendida adyacente"

#~ msgid "too many input fields"
#~ msgstr "Demasiados campos de entrada"

#~ msgid "No room for more"
#~ msgstr "No queda más espacio"

#~ msgid "Illegal type"
#~ msgstr "Tipo no permitido"

#~ msgid "Warning: given size (%llu) exceeds max allowable size (%llu)"
#~ msgstr "Atención: el tamaño dado (%llu) supera el tamaño máximo permitido (%llu)"

#~ msgid "Warning: empty partition"
#~ msgstr "Atención: partición vacía"

#~ msgid "Warning: bad partition start (earliest %llu)"
#~ msgstr "Atención: principio de partición incorrecto (antes %llu)"

#~ msgid "unrecognized bootable flag - choose - or *"
#~ msgstr "Indicador de iniciable no reconocido; elija - o *"

#~ msgid "partial c,h,s specification?"
#~ msgstr "¿Especificación parcial de cil,cab,sect?"

#~ msgid "bad input"
#~ msgstr "Entrada incorrecta"

#~ msgid ""
#~ "Input in the following format; absent fields get a default value.\n"
#~ "<start> <size> <type [E,S,L,X,hex]> <bootable [-,*]> <c,h,s> <c,h,s>\n"
#~ "Usually you only need to specify <start> and <size> (and perhaps <type>)."
#~ msgstr ""
#~ "Entrada con el formato siguiente; los campos ausentes utilizan el valor predeterminado.\n"
#~ "<principio> <tamaño> <tipo [E,S,L,X,hex]> <iniciable [-,*]> <cil,cab,sec> <cil,cab,sec>\n"
#~ "Normalmente sólo debe especificar <principio> y <tamaño> (y quizás <tipo>)."

#~ msgid " %s [options] <device>...\n"
#~ msgstr ": %s [opciones] <dispositivo>...\n"

#~ msgid ""
#~ " -s, --show-size           list size of a partition\n"
#~ " -c, --id                  change or print partition Id\n"
#~ "     --change-id           change Id\n"
#~ "     --print-id            print Id\n"
#~ msgstr ""
#~ " -s, --show-size           muestra el tamaño de una partición\n"
#~ " -c, --id                  cambia o imprime el Id de una partición\n"
#~ "     --change-id           cambia el Id\n"
#~ "     --print-id            imprime el Id\n"

#~ msgid ""
#~ " -l, --list                list partitions of each device\n"
#~ " -d, --dump                idem, but in a format suitable for later input\n"
#~ " -i, --increment           number cylinders etc. from 1 instead of from 0\n"
#~ " -u, --unit <letter>       units to be used; <letter> can be one of\n"
#~ "                             S (sectors), C (cylinders), B (blocks), or M (MB)\n"
#~ msgstr ""
#~ " -l, --list                muestra la lista de particiones de cada dispositivo\n"
#~ " -d, --dump                idem, pero en formato adecuado para ser utilizado más adelante como entrada\n"
#~ " -i, --increment           número de cilindros, etc., desde 1 en lugar de desde 0\n"
#~ " -u, --unit <letter>       unidades que se van a utilizar; <letra> puede ser\n"
#~ "                             S (sectores), C (cilindros), B (bloques), o M (MB)\n"

#~ msgid ""
#~ " -1, --one-only            reserved option that does nothing currently\n"
#~ " -T, --list-types          list the known partition types\n"
#~ " -D, --DOS                 for DOS-compatibility: waste a little space\n"
#~ " -E, --DOS-extended        DOS extended partition compatibility\n"
#~ " -R, --re-read             make the kernel reread the partition table\n"
#~ msgstr ""
#~ " -1, --one-only            opción reservada que actualmetne no hace nada\n"
#~ " -T, --list-types          muestra la lista de tipos de particiones conocidos\n"
#~ " -D, --DOS                 para compatibilidad con DOS: gasta una pequeña cantidad de espacio\n"
#~ " -E, --DOS-extended        compatibilidad con particiones extendidas DOS\n"
#~ " -R, --re-read             provoca que el núcleo vuelva a leer la tabla de particiones\n"

#~ msgid ""
#~ " -N <number>               change only the partition with this <number>\n"
#~ " -n                        do not actually write to disk\n"
#~ " -O <file>                 save the sectors that will be overwritten to <file>\n"
#~ " -I <file>                 restore sectors from <file>\n"
#~ msgstr ""
#~ " -N <número>               cambia solamente la partición que tiene este <número>\n"
#~ " -n                        no escribe en el disco de verdad\n"
#~ " -O <fichero>              guarda los sectores que se van a sobreescribir en <fichero>\n"
#~ " -I <fichero>              restaura los sectores desde <fichero>\n"

#~ msgid ""
#~ " -V, --verify              check that the listed partitions are reasonable\n"
#~ " -v, --version             display version information and exit\n"
#~ " -h, --help                display this help text and exit\n"
#~ msgstr ""
#~ " -V, --verify              comprueba que las particiones enumeradas son razonables\n"
#~ " -v, --version             muestra la información de versión y sale\n"
#~ " -h, --help                muestra este texto de ayuda y sale\n"

#~ msgid ""
#~ "\n"
#~ "Dangerous options:\n"
#~ msgstr ""
#~ "\n"
#~ "Opciones peligrosas:\n"

#~ msgid ""
#~ " -f, --force               disable all consistency checking\n"
#~ "     --no-reread           do not check whether the partition is in use\n"
#~ " -q, --quiet               suppress warning messages\n"
#~ " -L, --Linux               do not complain about things irrelevant for Linux\n"
#~ msgstr ""
#~ " -f, --force               desactiva las comprobaciones de consistencia\n"
#~ "     --no-reread           no comrpueba si la partición está en uso\n"
#~ " -q, --quiet               suprime los mensajes de aviso\n"
#~ " -L, --Linux               no se queja de cosas irrelevantes para Linux\n"

#~ msgid ""
#~ " -g, --show-geometry       print the kernel's idea of the geometry\n"
#~ " -G, --show-pt-geometry    print geometry guessed from the partition table\n"
#~ msgstr ""
#~ " -g  --show-geometry       imprime la idea del núcleo sobre la geometría\n"
#~ " -G, --show-pt-geometry    imprime la geometría que aparentemente se infiere de la tabla de particiones\n"

#~ msgid ""
#~ " -A, --activate[=<device>] activate the bootable flag\n"
#~ " -U, --unhide[=<device>]   set partition as unhidden\n"
#~ " -x, --show-extended       also list extended partitions in the output,\n"
#~ "                             or expect descriptors for them in the input\n"
#~ msgstr ""
#~ " -A, --activate[=<dispo.>] activa el indicador de arrancable\n"
#~ " -U, --unhide[=<dispo.>]   configura la partición como oculta\n"
#~ " -x, --show-extended       muestra también la lista de particiones extendidas en la salida,\n"
#~ "                             o espera sus descriptores respectivos en la entrada\n"

#~ msgid ""
#~ "     --leave-last          do not allocate the last cylinder\n"
#~ "     --IBM                 same as --leave-last\n"
#~ msgstr ""
#~ "     --leave-last          no asigna el último cilindro\n"
#~ "     --IBM                 lo mismo que --leave-last\n"

#~ msgid ""
#~ "     --in-order            partitions are in order\n"
#~ "     --not-in-order        partitions are not in order\n"
#~ "     --inside-outer        all logicals inside outermost extended\n"
#~ "     --not-inside-outer    not all logicals inside outermost extended\n"
#~ msgstr ""
#~ "     --in-order            las particiones están en orden\n"
#~ "     --not-in-order        las particiones no están en orden\n"
#~ "     --inside-outer        todos los lógicos dentro del extendido más exterior\n"
#~ "     --not-inside-outer    no todos los lógicos dentro del extendido más exterior\n"

# TODO ASK --nested y --onesector parecen definidas del mismo modo.
#~ msgid ""
#~ "     --nested              every partition is disjoint from all others\n"
#~ "     --chained             like nested, but extended partitions may lie outside\n"
#~ "     --onesector           partitions are mutually disjoint\n"
#~ msgstr ""
#~ "     --nested              las particiones son disjuntas dos a dos\n"
#~ "     --chained             como --nested, salvo que las particiones extendidas pueden salirse fuera\n"
#~ "     --onesector           las particiones son mutuamente disjuntas\n"

#~ msgid ""
#~ "\n"
#~ "Override the detected geometry using:\n"
#~ " -C, --cylinders <number>  set the number of cylinders to use\n"
#~ " -H, --heads <number>      set the number of heads to use\n"
#~ " -S, --sectors <number>    set the number of sectors to use\n"
#~ msgstr ""
#~ "\n"
#~ "Ignora la geometría detectada, utilizando en cambio:\n"
#~ " -C, --cylinders <número>  establece el número de cilindros que se van a utilizar\n"
#~ " -H, --heads <número>      establece el número de cabezas que se van a utilizar\n"
#~ " -S, --sectors <número>    establece el número de sectores que se van a utilizar\n"

#~ msgid " %s%sdevice            list active partitions on device\n"
#~ msgstr " %s %sdispositivo     enumera las particiones activas del dispositivo\n"

#~ msgid " %s%sdevice n1 n2 ...  activate partitions n1 ..., inactivate the rest\n"
#~ msgstr " %s%sdispositivo n1 n2 ... activa las particiones n1 ..., desactiva el resto\n"

#~ msgid "invalid number of partitions argument"
#~ msgstr "número no válido de particiones"

#~ msgid "cannot open %s\n"
#~ msgstr "No se puede abrir %s\n"

#~ msgid "usage: sfdisk --print-id device partition-number"
#~ msgstr "uso: sfdisk --print-id dispositivo número-partición"

#~ msgid "usage: sfdisk --change-id device partition-number Id"
#~ msgstr "uso: sfdisk --change-id dispositivo número-partición Id"

#~ msgid "usage: sfdisk --id device partition-number [Id]"
#~ msgstr "uso: sfdisk --id dispositivo número-partición [Id]"

#~ msgid "can specify only one device (except with -l or -s)"
#~ msgstr "puede especificar sólo un dispositivo (salvo con -l o -s)"

#~ msgid "cannot open %s read-write"
#~ msgstr "No se puede abrir %s para lectura-escritura"

#~ msgid "cannot open %s for reading"
#~ msgstr "No se puede abrir %s para lectura"

#~ msgid "%s: OK"
#~ msgstr "%s: Correcto"

#~ msgid "%s: %ld cylinders, %ld heads, %ld sectors/track\n"
#~ msgstr "%s: %ld cilindros, %ld cabezas, %ld sectores por pista\n"

#~ msgid "bad active byte: 0x%x instead of 0x80"
#~ msgstr "byte activo incorrecto: 0x%x en lugar de 0x80"

#~ msgid "Done"
#~ msgstr "Fin"

#~ msgid ""
#~ "You have %d active primary partitions. This does not matter for LILO,\n"
#~ "but the DOS MBR will only boot a disk with 1 active partition."
#~ msgstr ""
#~ "Tiene %d particiones primarias activas. No tiene importancia para LILO,\n"
#~ "pero el MBR de DOS sólo puede iniciar discos con una partición activa."

#~ msgid "partition %s has id %x and is not hidden"
#~ msgstr "la partición %s tiene el identificador %x y no está oculta"

#~ msgid "Bad Id %lx"
#~ msgstr "Identificador %lx incorrecto"

#~ msgid "This disk is currently in use."
#~ msgstr "Actualmente este disco está en uso."

#~ msgid "Fatal error: cannot find %s"
#~ msgstr "Error muy grave: no se puede encontrar %s"

#~ msgid "Warning: %s is not a block device"
#~ msgstr "Atención: %s no es un dispositivo de bloques"

#~ msgid "Partition %d does not exist, cannot change it"
#~ msgstr "La partición %d no existe; no se puede cambiar"

#~ msgid ""
#~ "I don't like these partitions - nothing changed.\n"
#~ "(If you really want this, use the --force option.)"
#~ msgstr ""
#~ "El sistema no encuentra adecuadas estas particiones; no se ha cambiado nada.\n"
#~ "(Si realmente desea realizar esta operación, use la opción --force.)"

#~ msgid "I don't like this - probably you should answer No"
#~ msgstr "El sistema no encuentra adecuada esta operación; probablemente deba responder No"

#~ msgid "Are you satisfied with this? [ynq] "
#~ msgstr "¿Está satisfecho con esta operación? [ynq] "

#~ msgid "Quitting - nothing changed"
#~ msgstr "Se está saliendo; no se ha cambiado nada"

#~ msgid "Please answer one of y,n,q\n"
#~ msgstr "Responda con una de las entradas siguientes: y,n,q\n"

#~ msgid ""
#~ "Successfully wrote the new partition table\n"
#~ "\n"
#~ msgstr ""
#~ "La nueva tabla de particiones se ha escrito correctamente\n"
#~ "\n"

#~ msgid ""
#~ "If you created or changed a DOS partition, /dev/foo7, say, then use dd(1)\n"
#~ "to zero the first 512 bytes:  dd if=/dev/zero of=/dev/foo7 bs=512 count=1\n"
#~ "(See fdisk(8).)"
#~ msgstr ""
#~ "Si ha creado o modificado una partición DOS, como /dev/foo7, utilice dd(1)\n"
#~ "para poner a cero los 512 primeros bytes: dd if=/dev/zero of=/dev/foo7 bs=512 count=1\n"
#~ "(Véase fdisk(8).)"

#~ msgid "If you have created or modified any DOS 6.x partitions, please see the fdisk documentation for additional information."
#~ msgstr "Si ha creado o modificado alguna partición DOS 6.x, consulte la documentación de fdisk para obtener más información."

#~ msgid "field is too long"
#~ msgstr "campo demasiado largo"

#~ msgid "%s: '%c' is not allowed"
#~ msgstr "%s: '%c' no está permitido"

#~ msgid "'%c' is not allowed"
#~ msgstr "'%c' no está permitido"

#~ msgid "%s: control characters are not allowed"
#~ msgstr "%s: los caracteres de control no están permitidos"

#~ msgid "control characters are not allowed"
#~ msgstr "los caracteres de control no están permitidos"

#~ msgid " -m, --supp-groups        display supplementary groups as well\n"
#~ msgstr " -m, --supp-groups        muestra también los grupos suplementarios\n"

#~ msgid ""
#~ "\n"
#~ "For more details see lslogins(1).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información, véase lslogins(1).\n"

#~ msgid "crypt() failed"
#~ msgstr "crypt() ha fallado"

#~ msgid " -h, --help                   This small usage guide\n"
#~ msgstr " -h, --help                   Esta pequeña guía de uso\n"

#~ msgid " -V, --version                Output version information\n"
#~ msgstr " -V, --version                Muestra información de versión\n"

#~ msgid ""
#~ " -a, --alternative      use alternative dictionary\n"
#~ " -d, --alphanum         compare only alphanumeric characters\n"
#~ " -f, --ignore-case      ignore case differences when comparing\n"
#~ " -t, --terminate <char> define string termination character\n"
#~ " -V, --version          output version information and exit\n"
#~ " -h, --help             display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ " -a, --alternative      utiliza diccionario alternativo\n"
#~ " -d, --alphanum         compara solo caracteres alfanuméricos\n"
#~ " -f, --ignore-case      ignora las diferencias entre mayúsculas y minúsculas al comparar\n"
#~ " -t, --terminate <car.> define el carácter de final de cadena\n"
#~ " -V, --version          saca información de versión y sale\n"
#~ " -h, --help             muestra esta ayuda y sale\n"
#~ "\n"

#~ msgid ""
#~ "\n"
#~ "For more information see namei(1).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información véase namei(2).\n"

#~ msgid ""
#~ "\n"
#~ "For more information see wipefs(8).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información, véase wipefs(8).\n"

#~ msgid ""
#~ "\n"
#~ "For more information see taskset(1).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información, véase taskset(1).\n"

#~ msgid "%s: is removable device"
#~ msgstr "%s: es un dispositivo desmontable"

#~ msgid "%s: connected by hotplug subsystem: %s"
#~ msgstr "%s: conectado por el subsistema de «hotplug»: %s"

#~ msgid "timeout cannot be zero"
#~ msgstr "el tiempo de vencimiento no puede esr cero"

#~ msgid "Need to insert %d second and refer time back %.6f seconds ago\n"
#~ msgid_plural "Need to insert %d seconds and refer time back %.6f seconds ago\n"
#~ msgstr[0] "Es preciso insertar %d segundo y establecer como referencia la hora %.6f segundos hacia atrás\n"
#~ msgstr[1] "Es preciso insertar %d segundos y establecer como referencia la hora %.6f segundos hacia atrás\n"

#~ msgid "Waiting in loop for time from KDGHWCLK to change\n"
#~ msgstr "Esperando en bucle que cambie la hora de KDGHWCLK\n"

#~ msgid "KDGHWCLK ioctl to read time failed"
#~ msgstr "Error de ioctl KDGHWCLK al leer la hora"

#~ msgid "KDGHWCLK ioctl to read time failed in loop"
#~ msgstr "Error en bucle de ioctl KDGHWCLK al leer la hora"

#~ msgid "ioctl() failed to read time from %s"
#~ msgstr "ioctl() no ha podido leer la hora de %s"

#~ msgid "ioctl KDSHWCLK failed"
#~ msgstr "Error de ioctl KDGHWCLK"

#~ msgid "Using the KDGHWCLK interface to m68k clock."
#~ msgstr "Se utiliza la interfaz KDGHWCLK al reloj m68k"

#~ msgid "Can't open /dev/tty1 or /dev/vc/1"
#~ msgstr "No se puede abrir /dev/tty1 o /dev/vc/1"

#~ msgid "KDGHWCLK ioctl failed"
#~ msgstr "Error de ioctl KDGHWCLK"

#~ msgid ""
#~ "\n"
#~ "For more details see lscpu(1).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más detalles, véase lscpu(1).\n"

#~ msgid " %s [options] <program> [args...]\n"
#~ msgstr " %s [opciones] <programa> [args...]\n"

# TODO review nice
#~ msgid ""
#~ " -g, --pgrp <id>        interpret argument as process group ID\n"
#~ " -n, --priority <num>   specify the nice increment value\n"
#~ " -p, --pid <id>         interpret argument as process ID (default)\n"
#~ " -u, --user <name|id>   interpret argument as username or user ID\n"
#~ " -h, --help             display help text and exit\n"
#~ " -V, --version          display version information and exit\n"
#~ msgstr ""
#~ " -g, --pgrp <id>        interpreta el argumento como el ID de grupo de un proceso\n"
#~ " -n, --priority <num>   especifica el valor de incremento deseable\n"
#~ " -p, --pid <id>         interpreta el argumento como el de un proceso (opción predefinida)\n"
#~ " -u, --user <nombre|id> interpreta el argumento como nombre o ID de usuario\n"
#~ " -h, --help             muestra el texto de ayuda y termina\n"
#~ " -V, --version          muestra la información sobre la versión y termina\n"

#~ msgid ""
#~ "\n"
#~ "For more information see renice(1).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información véase renice(1).\n"

#~ msgid " %s%s [options] [program [program arguments]]\n"
#~ msgstr " %s%s [opciones] [programa [programa argumentos]]\n"

#~ msgid ""
#~ " -V, --version    output version information and exit\n"
#~ " -h, --help       display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ " -V, --version    saca la información sobre la versión y termina\n"
#~ " -h, --help       muestra esta ayuda y termina\n"
#~ "\n"

#~ msgid ""
#~ "\n"
#~ "Usage:\n"
#~ " %s [options] [file ...]\n"
#~ msgstr ""
#~ "\n"
#~ "Modo de empleo:\n"
#~ " %s [opciones] [fichero ...]\n"

#~ msgid ""
#~ " -,  --no-underlining  suppress all underlining\n"
#~ " -2, --half-lines      print all half-lines\n"
#~ " -V, --version         output version information and exit\n"
#~ " -h, --help            display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ " -,  --no-underlining  suprime todos los subrayados\n"
#~ " -2, --half-lines      imprime todas las medias líneas\n"
#~ " -V, --version         saca la información sobre la versión y termina\n"
#~ " -h, --help            muestra esta ayuda y termina\n"
#~ "\n"

#~ msgid ""
#~ "\n"
#~ "Options:\n"
#~ " -V, --version   output version information and exit\n"
#~ " -h, --help      display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ "\n"
#~ "Opciones:\n"
#~ " -V, --version   saca la información sobre la versión y termina\n"
#~ " -h, --help      muestra esta ayuda y termina\n"
#~ "\n"

#~ msgid "calling hexdump as od has been deprecated in favor of GNU coreutils od"
#~ msgstr "llamar a hexdump como a od está obsoleto en favor del od de GNU coreutils"

#~ msgid ""
#~ "\n"
#~ "Options:\n"
#~ " -V, --version   output version information and exit\n"
#~ " -h, --help      display this help and exit\n"
#~ msgstr ""
#~ "\n"
#~ "Opciones:\n"
#~ " -V, --version   saca la información sobre la versión y termina\n"
#~ " -h, --help      muestra esta ayuda y termina\n"

#~ msgid ""
#~ "\n"
#~ "For more information see rev(1).\n"
#~ msgstr ""
#~ "\n"
#~ "Para más información véase rev(1).\n"

#~ msgid ""
#~ "\n"
#~ "Usage:\n"
#~ " %s [option] file\n"
#~ msgstr ""
#~ "\n"
#~ "Modo de empleo:\n"
#~ " %s [opciones] fichero\n"

#~ msgid ""
#~ "\n"
#~ "Options:\n"
#~ " -n, --lines NUMBER  output the last NUMBER lines\n"
#~ " -NUMBER             same as `-n NUMBER'\n"
#~ " -V, --version       output version information and exit\n"
#~ " -h, --help          display this help and exit\n"
#~ "\n"
#~ msgstr ""
#~ "\n"
#~ "Opciones:\n"
#~ " -n, --lines NÚMERO  saca las últimas NÚMERO líneas\n"
#~ " -NÚMERO             igual que `-n NÚMERO'\n"
#~ " -V, --version   saca la información sobre la versión y termina\n"
#~ " -h, --help      muestra esta ayuda y termina\n"
#~ "\n"

#~ msgid "Type of the partition %zu is unchanged."
#~ msgstr "El tipo de la partición %zu permanece sin cambios."

#~| msgid "%s: can only change local entries; use yp%s instead.\n"
#~ msgid "can only change local entries."
#~ msgstr "%s: sólo se pueden modificar entradas locales; utilice yp%s en su lugar.\n"

#~ msgid " %s [options] pathname [pathname ...]\n"
#~ msgstr "uso: namei [-mx] nombreruta [nombreruta ...]\n"

#~ msgid "no filename specified."
#~ msgstr "No se ha especificado la opción --date.\n"

#~ msgid "...back 1 page"
#~ msgstr "...retroceder 1 página"

#~ msgid "...skipping one line"
#~ msgstr "...omitiendo una línea"
