start:
	deno lib/index.js --allow-net --allow-env

test_files := $(wildcard test/*.js)
test: $(test_files)
	deno $(test_files)
