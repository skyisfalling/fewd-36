var body = document.querySelector("body")
var color1 = document.querySelector(".red");
var color2 = document.querySelector(".yellow");
var color3 = document.querySelector(".green");
var button1 = document.querySelector(".stp");
var button2 = document.querySelector(".slw");
var button3 = document.querySelector(".g");

/*when you click button 1, you want color1
when you click button 2, you want color2
when you click button 3, you want color3*/

button1.addEventListener("click", changeRed)
button2.addEventListener("click", changeYellow)
button3.addEventListener("click", changeGreen)

function changeRed(event){
	body.className = "stop";
}

function changeYellow(event){
	body.className = "slow";
}

function changeGreen(event) {
	body.className = "go";
}