all: devdependencies grunt
devdependencies:
	cd . && \
	npm install && \
	cd src && \
	bower install
grunt:
	grunt
.PHONY: all devdependencies grunt
