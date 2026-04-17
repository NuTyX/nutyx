#
#  nutyx
#
#  Copyright (c) 2016 - 2026 by NuTyX team (https://nutyx.org)
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307,
#  USA.
#


DESTDIR =
PREFIX = /usr
LIBDIR = ${DESTDIR}/lib
SHAREDIR = ${DESTDIR}/${PREFIX}/share/nutyx
USRBINDIR = ${DESTDIR}/${PREFIX}/bin
USRSBINDIR = ${DESTDIR}/${PREFIX}/sbin
BINDIR = ${DESTDIR}/${PREFIX}/bin
SBINDIR = ${DESTDIR}/${PREFIX}/sbin
MANDIR = ${DESTDIR}/${PREFIX}/share/man
USRLIBDIR = ${DESTDIR}/${PREFIX}/lib
ETCDIR = ${DESTDIR}/etc
SERVICEDIR=${LIBDIR}/services
SYSTEMDSERVICEDIR=${USRLIBDIR}/systemd/system
ROOTDIR=${DESTDIR}/root
VARDIR=${DESTDIR}/var
EXTDIR=${ETCDIR}

VERSION = 26.04.1

NAME = nutyx-$(VERSION)

MODE = 754
FILEMODE = 754
DIRMODE = 755
CONFMODE = 644

# End of file
