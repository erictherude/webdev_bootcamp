# L266 - Intro to Express
* What is a framework? Framework vs library?
	* Inversion of Control - you call library, framework calls you
	* Framework sets up all of the commonly created feeatures of a web site allows user to concentrate on individual content
* What is *Express*?
	* Web application framework that provides a robust set of features for web and mobile applications
* Why are we using *Express*?
	* Widely used 
	* Powerful but lightweight
	
# L268 - Our First Express App
* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
	* Browser sends request to server
	* Server recieves and interprets request then formulates and sends response
	* Browser recieves and displays response
* Create our own simple Express app

# L269 - NPM Init and Package.json
* Use the *--save* flag to install packages
	* automatically saves package to Package.json
* Explain what the package.json file does
	* contains metadata relevant to a project
		* name, description, dependencies, etc.
	* "recipe" for the project
* Use *npm init* to create a new package.json

# L270 - Automate Server Restart
* Add *start* to package.json (ex. *start: node app.js*)
* On command line *nodemon*
	
# L271 - Route Params
* Show the *\** route matcher
	* matches anything
* Write routes that contain route parameters
	* route variables
* Discuss route order
	* order matters - routes are evaluated in the order listed
	* request is handled according to first matching route encountered

# L272 - Express Basics Assignment
* Create a brand new express app.
* Create a package.json using *npm init*
* In your main *app.js* file, add 3 different routes:
	* Visiing */* should print *Hi there, welcome to my assignment!*
	* One route */speak* that takes an animal and prints animal and it's sound for at least five animals
		* /speak/pig => *The pig says "Oink!"*
		* /speak/cow => *The pig says "Moo!"*
		* /speak/dog => *The pig says "Woof!"*
	* One route */repeat* that takes a word and a number and prints the word number times
		* /repeat/hi/3 => *hi hi hi*
		* /repeat/yo/5 => *yo yo yo yo yo*
	* All other routes should print *Sorry, page not found...What are you even doing?*