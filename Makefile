transpile:
	transcrypt -b -p .none -n -m ./python/luminators.py
	rm ./python/__target__/luminators.project
	mv ./python/__target__/*.js ./transpiled/
	rm -rf ./python/__target__

run:
	python3.7 -m http.server --directory .
