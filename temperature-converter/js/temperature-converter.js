function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else	{
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }

 function changeColor

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
  }