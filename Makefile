server:
	deno lib/index.js --allow-net --allow-env

test_files := $(wildcard test/*.js)
tests:
	deno $(test_files)
