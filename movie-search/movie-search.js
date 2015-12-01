
var form  = document.querySelector("form");
var input = document.querySelector(".query");
var ul    = document.querySelector(".results");

//Setup
//----------------------------------------------------
var results;
//Events
//----------------------------------------------------
form.addEventListener("submit", getMovies);

//Event Handlers
//-----------------------------------------------------
function getMovies(e) {
	e.preventDefault();
	console.log("getMovies");

//create the url for the api request
	var search = input.value;
	var url = "http://www.omdbapi.com/?s=" + search;

//make ajax request
	jQuery.getJSON(url, updateMovies);

}

function getPoster(e) {
	//TODO for HW: build this function!

}
//Update Page
//-----------------------------------------------------
function updateMovies(json) {
	
//reset the page/clear page
	ul.innerHTML = "";

	var movies = json["Search"];

	movies.forEach(createMovieItem);
}

function createMovieItem(movie) {
	//Step 1. - create
	var li = document.createElement("li");
	var a = document.createElement("a");
	//Step 2. - attributes
	a.textContent = movie["Title"];
	a.setAttribute("href", "http://www.imdb.com/title/" + movie["imdbID"])
	//Step 3 -append
	ul.appendChild(li);
	li.appendChild(a);
}

function updatePoster(json) {}

