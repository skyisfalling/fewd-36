// Structure
// ----------------------------------------------
var pictures = document.querySelector(".pictures");
var names = document.querySelector(".names");
var feed = document.querySelector(".feed");
// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------
var cat = {
	picture: "baby.jpg",
	name: "Daisy"
}

// Event handlers
// ----------------------------------------------
window.addEventListener("load", setupPage);

// Update page functions
// ----------------------------------------------
function setupPage() {
	mockPictures.forEach(createPicture);
	mockNames.forEach(createName);
}

function createPicture(item) {
// step 1: create elements
var li = document.createElement("li");
var img = document.createElement("img");

// step 2: decorate element (aka bling!)
img.setAttribute("src", "images/" + item);

// step 3: insert into dom
li. appendChild(img);
pictures.appendChild(li);

}

function createName(item) {
// step 1: create elements
var li = document.createElement("li");


// step 2: decorate element (aka bling!)
li.textContent = item;
// step 3: insert into dom
names.appendChild(li);

}

function createPost(item) {
// step 1: create elements
var li = document.createElement("li");
var img = document.createElement("img");
var p = document.createElement("p");

// step 2: decorate element (aka bling!)
p.textContent = item.name;
img.setAttribute("src", "images/" + item.picture);

// step 3: insert into dom
li.appendChild(img);
li.appendChild(p);
feed.appendChild(li);
}