var mybutton = document.querySelector("button");

mybutton.addEventListener("click", function(event) {
	var element = document.getElementsByClassName("dot");
	for (let index = element.length - 1; index >= 0; index--) {
		element[index].parentNode.removeChild(element[index]);
	}
	
	// Let us stop the propagation of events
	event.stopPropagation();
});

addEventListener("click", function(event) {
	var dot = document.createElement("div");
	dot.className = "dot";
	
	// Get user-selected color and size
	var color = document.getElementById("dotColor").value;
	var size = parseInt(document.getElementById("dotSize").value) || 8;
	
	dot.style.width = size + "px";
	dot.style.height = size + "px";
	dot.style.background = color;
	dot.style.borderRadius = (size / 2) + "px";
	dot.style.left = (event.pageX - size / 2) + "px";
	dot.style.top = (event.pageY - size / 2) + "px";
	
	document.body.appendChild(dot);
});
