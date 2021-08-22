include Makefile.inc

DIRMAN = man

DIRTOOLS = tools

DIRSCRIPTS = scripts

.PHONY: all


all:
	$(MAKE) -C $(DIRTOOLS) all
	$(MAKE) -C $(DIRSCRIPTS) all
	$(MAKE) -C $(DIRMAN) all


install: all

	$(MAKE) -C $(DIRTOOLS) install
	$(MAKE) -C $(DIRSCRIPTS) install
	$(MAKE) -C $(DIRMAN) install
	bsdtar -czf $(SERVICEDIR)/setup-nutyx/setup-nutyx.locales.gz \
	po/*

man:
	$(MAKE) -C $(DIRMAN) man
clean:

	$(MAKE) -C $(DIRSCRIPTS) clean
	$(MAKE) -C $(DIRMAN) clean

dist: distclean

	git archive --format=tar --prefix=$(NAME)/ HEAD | tar -x
	git log > $(NAME)/ChangeLog
	tar cJvf $(NAME).tar.xz $(NAME)
	rm -rf $(NAME)

distclean:
	rm -rf $(NAME).tar.xz
