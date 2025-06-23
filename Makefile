TIMESTAMP := $(shell date +"%Y%m%d%H%M%S")

new-daily:
	touch ./daily/$(TIMESTAMP).md
