#
#  nutyx
#
#  Copyright (c) 2016 - 2026 by NuTyX team (http://nutyx.org)
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

all: init install-nutyx setup-nutyx setup-vm genfstab flushmem which mkinitramfs

%: %.in
	sed -e "s/#VERSION#/$(VERSION)/" $< > $@


.PHONY:	install clean distclean dist

clean:
	rm -f install-nutyx
	rm -f setup-nutyx
	rm -f setup-vm
	rm -f genfstab
	rm -f flushmem
	rm -f which
	rm -f mkinitramfs
	rm -f init

create-dirs:
	install -d -m 755 $(ETCDIR)
	install -d -m 755 $(SHAREDIR)
	install -d -m 755 $(VARDIR)/log
	install -d -m 700 $(ROOTDIR)

create-dirs-systemd: links
	install -d -m 755 $(SYSTEMDSERVICEDIR)/sysinit.target.wants

links: create-dirs
	ln -sf ../proc/self/mounts $(ETCDIR)/mtab
	ln -sf ../run/lock         $(VARDIR)/lock
	ln -sf ../run              $(VARDIR)/run

install-services: all create-dirs-systemd
	install -D -m0644 setup-nutyx.service.in $(SYSTEMDSERVICEDIR)/setup-nutyx.service
	ln -sf         ../setup-nutyx.service    $(SYSTEMDSERVICEDIR)/sysinit.target.wants

install-common-tools:
	install -D -m0755 install-nutyx $(BINDIR)/install-nutyx
	ln -sf            install-nutyx $(BINDIR)/chroot-nutyx
	ln -sf            install-nutyx $(BINDIR)/generate-nutyx
	install -D -m0755 setup-nutyx $(BINDIR)/setup-nutyx
	install -D -m0755 setup-vm $(BINDIR)/setup-vm
	install -D -m0755 genfstab $(BINDIR)/genfstab
	install -D -m0755 flushmem $(BINDIR)/flushmem
	install -D -m0755 mkinitramfs $(BINDIR)/mkinitramfs
	install -D -m0755 which $(BINDIR)/which
	install -D -m0644 init	$(SHAREDIR)/init.in

install: install-services install-common-tools


clean:

distclean: clean

# End of file
