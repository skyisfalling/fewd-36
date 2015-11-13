document.addEventListener("DOMContentLoaded", function(){

	//setting a variable to remember the input for task
	var input = document.querySelector(".task-item");
	//need to make the button a variable
	var taskButton = document.querySelector("button");
	var itemsList = document.querySelector(".items");
	var date = document.querySelector(".date");


	//Event
	//event listener for the input
	taskButton.addEventListener("click", addTask);
	//function to save input value
	function addTask(){
		//use console log to test input variable
		//console.log("input: " + input.value);
		var task = input.value;
		var taskDate = date.value;
		//taskDate.className = taskDate.className + "gray";//this did not work, need to figure out how to add class
		//create an li element to hold other items we create including checkbox(input) and labels (to display the task and date)
		var addLi = document.createElement("li");
		var checkbox = document.createElement("input");
		var labelTask = document.createElement("label");
		var labelDate = document.createElement("label");
		
		//decorate and making sure the correct property are made
		//console.log(date);
		//*doing this with concatenation: addLi.innerHTML = '<input type = \"checkbox\"/>' + " " + '<p>'+task+'</p>' + " " + "(" + '<p>'+taskDate+'</p>' +")";
		checkbox.setAttribute("type", "checkbox");
		labelTask.textContent = task;
		labelDate.textContent = "(" + taskDate + ")";
		labelDate.classList.add("gray");

		//addLi.className = "taskListItem";
		itemsList.appendChild(addLi);
		addLi.appendChild(checkbox);
		addLi.appendChild(labelTask);
		addLi.appendChild(labelDate);


	}

	//
});
//to 
function testIt(event) {
	console.log("testIt");
	console.log(event.target);
	event.target.className = "checked";
}

var taskz = [];

var task1 = {
	name: "eat junk food",
	date: "2015-11-11",
	completed: false
}

var task3 = {
	name: "exercise",
	date: undefined,
	completed: false
}
