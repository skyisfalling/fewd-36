
var tempC = document.querySelector(".cels");
var tempF = document.querySelector(".fahr");
var conC = document.querySelector(".conC");
var conF = document.querySelector(".conF");

conC.addEventListener("click", calcCtoF)
conF.addEventListener("click", calcFtoC)

function calcCtoF(event) {
	tempF.value = tempC.value * 9/5 + 32;
	return Math.round(tempF);

}

function calcFtoC(event) {
	tempC.value = (tempF.value - 32) * 5/9;
	return Math.round(tempC);
	
}

/*function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else	{
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }*/

/* function setToZero(event) {
  F.value = "";
  C.value = "";
  return reset;*/

/*when C is > 30 degrees, background will change to red
when C is 24-30 degrees, background will change to orange
when C is 18-23 degrees, background will change to yellow
when C is 12-17 degrees, backgound will change to green
when C is 6-11 degrees, background will change to darker blue
when C is 0-5 degrees, background will change to grey
when C is <0 degreees, background will change to black
*/

/*var num1 = document.querySelector(".celsius")
var num2 = document.querySelector(".fahrenheit")
var comp = document.querySelector(".sign")
var but = document.querySelector(".convert")



but.addEventListener("click", convertTemp);

function compareTemp (degree) {

	var first = num1.value
	var second = num2.value
 
   
  if (first > second) {
  	comp.textContent = ">";
  }

  else if (first < second) {
  	comp.textContent = "<";
  }

  else {
  	comp.textContent = "=";*/
  // }