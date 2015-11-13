// Structure
// -------------------------------------
// instead of listing each li as a variable, can be grouped into a var list
// var color1 = document.querySelector(".olive");
// var color2 = document.querySelector(".skyblue");
// var color3 = document.querySelector(".salmon");
// var color4 = document.querySelector(".burlywood");
// var color5 = document.querySelector(".thistle");
var list   = document.querySelector("ul");

// Events
// -------------------------------------
//same idea as above in the structure section
// color1.addEventListener("click", changeColor);
// color2.addEventListener("click", changeColor);
// color3.addEventListener("click", changeColor);
// color4.addEventListener("click", changeColor);
// color5.addEventListener("click", changeColor);
list.addEventListener("click", changeColor);
// ...to do in next class!


// Event handler functions
// -------------------------------------

function changeColor(event) {
	console.log("changeColor");
	console.log(event.target.tagName);

	if (event.target.tagName == "UL") {
		return;
	}
	var swatch = (event.target);
	var color = swatch.className;
	var color = swatch.getAttribute("class");

	var body = document.querySelector("body");
	body.setAttribute("class", color);


	var name = document.querySelector("span");
	name.textContent = color;
}






var theme = {
	color:"thistle"
}

var themeString = JSON.stringify(theme);
var theme = JSON.parse(localStorage.getItem("theme"))


var task = {
	name: "exercise",
	date: undefined,
	completed: false
}










