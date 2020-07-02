// Mark specific todos done by clicking them
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// Delete specific todo by clicking delete
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Create a new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// get input text
		let todoText = $(this).val();
		$(this).val("");
		// create a new li and add it to ul
		if(todoText !== "") {
			$("ul").append("<li><span class='delete'><i class='fas fa-trash'></i></span> " + todoText + "</li>")
		};
	};
});

// Make add todo button work
$("#addTodo").click(function(){
	$("input[type='text']").fadeToggle();
})