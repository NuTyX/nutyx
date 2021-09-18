#
#  nutyx
#
#  Copyright (c) 2016 - 2021 by NuTyX team (http://nutyx.org)
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

include ../Makefile.inc

all: init init-functions ipv4-static ipv4-static-route install-nutyx setup-nutyx xdm-nutyx flushmem ifup ifdown which mkinitramfs

%: %.in
	sed -e "s/#VERSION#/$(VERSION)/" $< > $@


.PHONY:	install clean distclean dist

install: all
	install -D -m0755 install-nutyx $(SBINDIR)/install-nutyx
	install -D -m0755 setup-nutyx $(SBINDIR)/setup-nutyx
	install -D -m0755 xdm-nutyx $(USRSBINDIR)/xdm-nutyx
	install -D -m0755 flushmem $(SBINDIR)/flushmem
	install -D -m0755 ifup $(SBINDIR)/ifup
	install -D -m0755 ifdown  $(SBINDIR)/ifdown
	install -D -m0755 mkinitramfs $(SBINDIR)/mkinitramfs
	install -D -m0755 which $(BINDIR)/which
	install -D -m0755 init-functions $(SERVICEDIR)/init-functions
	install -D -m0644 init	$(SERVICEDIR)/init.in
	install -D -m0755 ipv4-static $(SERVICEDIR)/ipv4-static
	install -D -m0755 ipv4-static-route $(SERVICEDIR)/ipv4-static-route
	install -D -m0755 rc $(ETCDIR)/init.d/rc
	install -D -m0755 init_single $(ETCDIR)/init.d/init_single



clean:
	rm -f install-nutyx
	rm -f setup-nutyx
	rm -f xdm-nutyx
	rm -f flushmem
	rm -f ifup
	rm -f ifdown
	rm -f which
	rm -f mkinitramfs
	rm -f init
	rm -f ipv4-static
	rm -f ipv4-static-route

create-dirs:
	install -d -m 755 $(SERVICEDIR)
	install -d -m 755 $(SERVICEDIR)/setup-nutyx
	install -d -m 755 $(VARDIR)/log
	install -d -m 700 $(ROOTDIR)
	install -d -m 755 $(ETCDIR)/rc.d/init.d
	install -d -m 755 $(ETCDIR)/rc.d/rc0.d
	install -d -m 755 $(ETCDIR)/rc.d/rc1.d
	install -d -m 755 $(ETCDIR)/rc.d/rc2.d
	install -d -m 755 $(ETCDIR)/rc.d/rc3.d
	install -d -m 755 $(ETCDIR)/rc.d/rc4.d
	install -d -m 755 $(ETCDIR)/rc.d/rc5.d
	install -d -m 755 $(ETCDIR)/rc.d/rc6.d
	install -d -m 755 $(ETCDIR)/rc.d/rcS.d
	ln -sf rc.d/init.d $(ETCDIR)/init.d


files: create-dirs
	for FILE in halt network reboot \
	sendsignals sysklogd random; do \
	ln -sf ../../../lib/lsb/init-functions \
		$(ETCDIR)/init.d/$${FILE}; \
	done
	ln -sf ../../../sbin/setup-nutyx \
		$(ETCDIR)/init.d/setup-nutyx
	for FILE in bootlog btmp lastlog wtmp; do \
		touch $(VARDIR)/log/$${FILE}; \
	done
links: rcS rc0 rc1 rc2 rc3 rc4 rc5 rc6
	ln -sf ../../../sbin/setup-nutyx $(ETCDIR)/rc.d/init.d/setup-nutyx
	ln -sf ../proc/self/mounts $(ETCDIR)/mtab
	ln -sf ../etc/bashrc $(ROOTDIR)/bashrc
	ln -sf ../etc/profile.d $(ROOTDIR)/profile.d
	ln -sf services  $(LIBDIR)/lsb
	ln -sf /run/lock $(VARDIR)/lock
	ln -sf /run	 $(VARDIR)/run

rcS: files
	ln -sf ../init.d/init_single ${ETCDIR}/rc.d/rcS.d/S00init_single

rc0: files
	ln -sf ../init.d/sendsignals	${ETCDIR}/rc.d/rc0.d/S60sendsignals
	ln -sf ../init.d/init_single	${ETCDIR}/rc.d/rc0.d/K98init_single
	ln -sf ../init.d/halt		${ETCDIR}/rc.d/rc0.d/S99halt
	ln -sf ../init.d/random		${ETCDIR}/rc.d/rc0.d/K45random

rc1: files
	ln -sf ../init.d/network	${ETCDIR}/rc.d/rc1.d/K80network
	ln -sf ../init.d/sysklogd	${ETCDIR}/rc.d/rc1.d/K90sysklogd
	ln -sf ../init.d/random		${ETCDIR}/rc.d/rc1.d/S25random

rc2: files
	ln -sf ../init.d/network        ${ETCDIR}/rc.d/rc2.d/K80network
	ln -sf ../init.d/random         ${ETCDIR}/rc.d/rc2.d/S25random

rc3: files
	ln -sf ../init.d/network        ${ETCDIR}/rc.d/rc3.d/S20network
	ln -sf ../init.d/random		${ETCDIR}/rc.d/rc3.d/S25random

rc4: files
	ln -sf ../init.d/network        ${ETCDIR}/rc.d/rc4.d/S20network
	ln -sf ../init.d/random         ${ETCDIR}/rc.d/rc4.d/S25random

rc5: files
	ln -sf ../init.d/network        ${ETCDIR}/rc.d/rc5.d/S20network
	ln -sf ../init.d/random		${ETCDIR}/rc.d/rc5.d/S25random

rc6: files
	ln -sf ../init.d/sendsignals 	${ETCDIR}/rc.d/rc6.d/S60sendsignals
	ln -sf ../init.d/init_single	${ETCDIR}/rc.d/rc6.d/K98init_single
	ln -sf ../init.d/random		${ETCDIR}/rc.d/rc6.d/K45random
	ln -sf ../init.d/reboot		${ETCDIR}/rc.d/rc6.d/S99reboot

install: links

clean:

distclean: clean

# End of file
