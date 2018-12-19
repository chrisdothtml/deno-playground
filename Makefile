# so make considers this as a target instead of
# checking the `test` directory
.PHONY: test

start:
	deno lib/index.js --allow-net --allow-env

test_files := $(wildcard test/*.js)
test:
	deno $(test_files)
