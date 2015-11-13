// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;


// Events
// ------------------------------------------------
form.addEventListener("submit", enter);


function enter(event){
	event.preventDefault()
	var newEntry = document.createElement("LI");
	// console.log(newEntry);
	var inputValue = parseFloat(input.value);
	
	newEntry.textContent = inputValue;
//entries is the UL, so you're trying to add new LI's
	entries.appendChild(newEntry);
//add something new to something old
	totalValue = parseFloat(totalValue) + inputValue;
	
	total.textContent = "$" + totalValue;
//clears entry
	form.reset();

}


