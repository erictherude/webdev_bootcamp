# RESTful Routing


# Lesson 312 - Intro to REST
* Define REST and explain WHY it matters
	* **RE**presentational **S**tate **T**ransfer
	* A mapping between HTTP routes and CRUD
		* Create
		* Read
		* Update
		* Destroy
* List all 7 RESTful routes
* Show example of RESTful routing in practice

Example - BLOG  
CREATE	/blog/new/  
READ	/blog/all  
UPDATE	/blog/update:id  
DESTROY	/blog/delete:id 

### RESTful Routes
A table of all 7 RESTful Routes  

|Name|Path|CRUD|HTTP Verb|Purpose|Mongoose Method|
|---|---|---|---|---|---|
|Index|/dogs|R|GET|List all dogs|Dog.find()|
|New|/dogs/new|C|GET|Show new dog form|N/A|
|Create|/dogs|C|POST|Create a new dog, then redirect somewhere|Dog.create()|
|Show|/dogs/:id|R|GET|Show info about a specific dog|Dog.findById()|
|Edit|/dogs/:id/edit|U|GET|Show edit form for one dog|Dog.findById()|
|Update|/dogs/:id|U|PUT|Updae a particular dog, then redirect somewhere|Dog.findByIdAndUpdate()|
|Destroy|/dogs/:id|D|DELETE|Delete a particular dog, then redirect somewhere|Dog.findByIdAndRemove()|

# Lesson 313 - RESTful Blog App: INDEX
* Setup the blog app
* Create the Blog model
* Add INDEX route and template
* Add simple navbar

# Lesson 315 - RESTful Blog App: Basic Layout
* Add Header and Footer partials
* Include Semantic UI
* Add simple navbar

# Lesson 317 - RESTful Blog App: NEW and CREATE
* Add a NEW route
* Add a NEW template
* Add a CREATE route
* Add a CREATE template

# Lesson 319 - RESTful Blog App: SHOW
* Add a SHOW route
* Add a SHOW template
* Add links to the show template
* Style the show template

# Lesson 320 - RESTful Blog App: EDIT and UPDATE
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

# Lesson 321 - RESTful Blog App: DESTROY
* Add Destroy Route
* Add EDIT and DESTROY links

# Lesson 323 - RESTful Blog App: Final Touches
* Sanitize blog body
* Style Index
* Update REST Table
