let changer = document.querySelector("#changer");

changer.addEventListener("click", function(){
	let changed = document.querySelector("body");
	changed.classList.toggle("changed");

	// should have just used (per solution)
	// document.body.classList.toggle("changed");
});
