# Lesson 281 - Intro to APIs
* API - Application Programming Interface
* APIs are interfaces that allow code/computers to talk to one another.
* Web APIs generally communicate over HTTP
	* https://www.programmableweb.com/
	* https://ifttt.com/
	
# Lesson 282 - JSON and XML
* Two main data formats: XML and JSON
* XML - eXtensible Markup Languae
	* Similar to HTML sytactically, but does not handle presentation
* JSON - JavaScript Object Notation
	* JSON looks like Javascript objects, but everything is a string
* JSON more commonly used than XML now 

XML Example:

	<person>
		<name>Jason<</name>
		<age>21<</age>
		<city>San Francisco</city>
	</person> 

JSON Example:

	{
		"person": {
			"name": "Jason",
			"age": "21",
			"city": "San Francisco"
		}
	}

# Lesson 284 - Making API Requests with Node
* request has been deprecated, use axios instead
