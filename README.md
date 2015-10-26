# Demo of FOUC (Flash Of Unstyled Content)

There are three branches representing the demos of FOUC caused by

* Javascripts
* Icon/Image
* Fonts

respectively.


## Usage

Step 1: Check out to the corresponding branch

* Working on font `git checkout -b fouc/font origin/fouc/font`
* Working on image `git checkout -b fouc/image origin/fouc/image`
* Working on javascripts `git checkout -b fouc/js origin/fouc/js`

Step 2: build
```
	$ make
```
If you have made it before, just `$ grunt`

Step 3: Execute
```
	$ node app.js
```

Step 4: Visit http server by typing `127.0.0.1:8000`

## Notice

If the process throws error `Address already in use`, just `killall python`.
