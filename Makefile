SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

build:
	@component install --dev
	@component build --dev

test: build
	@component test browser

clean:
	@rm -rf build components node_modules

.PHONY: build test clean
