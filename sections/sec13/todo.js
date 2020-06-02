let todos = ["Buy New Turtle"];

let input = prompt("What would you like to do?")

while(input !== "quit") {

	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		// ask for new todo
		let newTodo = prompt("What would you like to add?");

		// add new todo to array
		todos.push(newTodo);
	}

	input = prompt("What would you like to do?")

}

console.log("Goodbye!");