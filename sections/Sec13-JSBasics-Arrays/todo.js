let todos = ["Buy New Turtle"];

let input = prompt("What would you like to do?")

while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		newTodo();
	} else if(input === "delete"){
		deleteTodo();
	}

	input = prompt("What would you like to do?")
}

console.log("Goodbye!");

function listTodos() {
	todos.forEach(function(todo, i){
		console.log("********************************");
		console.log(i + ": " + todo);
		console.log("********************************");
	})
}

function newTodo() {
	// ask for new todo
	let newTodo = prompt("What would you like to add?");

		// add new todo to array
		todos.push(newTodo);
		console.log("Todo added.");
}

function deleteTodo() {
		// ask for index of todo to be deleted
		let index = prompt("Enter the index of the Todo to delete.")
		// delete that todo
		todos.splice(index, 1);
		console.log("Todo deleted.");
}