include Makefile.inc

DIRMAN = man
DIRSCRIPTS = scripts
DIRSRC = src

.PHONY: all


all:
	$(MAKE) -C $(DIRSCRIPTS) all
	$(MAKE) -C $(DIRMAN) all
	$(MAKE) -C $(DIRSRC) all

install: all

	$(MAKE) -C $(DIRSCRIPTS) install
	$(MAKE) -C $(DIRMAN) install
	$(MAKE) -C $(DIRSRC) install

	bsdtar -czf $(SERVICEDIR)/setup-nutyx/setup-nutyx.locales.gz \
	po/*

man:
	$(MAKE) -C $(DIRMAN) man
clean:

	$(MAKE) -C $(DIRSCRIPTS) clean
	$(MAKE) -C $(DIRMAN) clean
	$(MAKE) -C $(DIRSRC) clean


dist: distclean

	git archive --format=tar --prefix=$(NAME)/ HEAD | tar -x
	git log > $(NAME)/ChangeLog
	tar cJvf $(NAME).tar.xz $(NAME)
	rm -rf $(NAME)

distclean:
	rm -rf $(NAME).tar.xz
