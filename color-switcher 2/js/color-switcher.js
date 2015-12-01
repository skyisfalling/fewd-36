// Structure
// -------------------------------------
// instead of listing each li as a variable, can be grouped into a var list
// var color1 = document.querySelector(".olive");
// var color2 = document.querySelector(".skyblue");
// var color3 = document.querySelector(".salmon");
// var color4 = document.querySelector(".burlywood");
// var color5 = document.querySelector(".thistle");
var list   = document.querySelector("ul");

//Setup
//--------------------------------------
var theme = {
	'color': 'white'
};
// Events
// -------------------------------------
//same idea as above in the structure section
// color1.addEventListener("click", changeColor);
// color2.addEventListener("click", changeColor);
// color3.addEventListener("click", changeColor);
// color4.addEventListener("click", changeColor);
// color5.addEventListener("click", changeColor);
window.addEventListener("load", pageLoad); //when you want something to happen on pageload, use this 
list.addEventListener("click", handleClick);
// ...to do in next class!


// Event handler functions
// -------------------------------------
function handleClick(event) {
	//Return early unless the swatch was clicked
	if (event.target.tagName === "UL") {
		return;
	}

	var swatchElement = (event.target);
	var swatchColor = swatchElement.getAttribute("class");
	
	//1. Update data model
	theme.color = swatchColor;
	//2. Call function to update page
	changeColor(theme);
	//3. Save the date model to local storage
	localStorage.setItem('theme', JSON.stringify(theme));
}

function pageLoad(event) {
	//get the theme object out of localStorage
	if (localStorage.getItem('theme')  == null) {
		changeColor(theme);
	} else {
		theme = JSON.parse(localStorage.getItem('theme'));
		changeColor(theme);
	
	}
}

//Update page functions
function changeColor(theme) {
	var body = document.querySelector("body");
	body.className = theme.color;

	var name = document.querySelector("span");
	name.textContent = theme.color;
}






// var theme = {
// 	color:"thistle"
// }

// var themeString = JSON.stringify(theme);
// var theme = JSON.parse(localStorage.getItem("theme"))


// var task = {
// 	name: "exercise",
// 	date: undefined,
// 	completed: false
// }










