
$(document).ready(function() {
   

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      // console.log($(window).scrollTop())
//JS for nav interaction
    if ($(window).scrollTop() > 960) {
      $('#nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 961) {
      $('#nav').removeClass('navbar-fixed');
    }
  });




});

//gif function

var rotator = document.querySelector(".rotator");

var counter = 0;

var images = [
  "Photoshoot-gif-1.png",
  "Photoshoot-gif-2.png",
  "Photoshoot-gif-3.png",
  "Photoshoot-gif-4.png",
  "Photoshoot-gif-5.png",
  "Photoshoot-gif-6.png",
  "Photoshoot-gif-7.png",
  "Photoshoot-gif-8.png",
  "Photoshoot-gif-9.png",
  "Photoshoot-gif-10.png",
  "Photoshoot-gif-11.png",
];

function changeImage(item) {
  console.log('changeImage');
  rotator.setAttribute("src", "img/" + images[counter]);

  // increment counter
  counter++;
  if (counter == images.length) {
    counter = 0;
  }
}

window.setInterval(changeImage,1200);


//Gallery

$(document).ready(function(){
  $('.gallery-ny').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('.gallery-hk').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

//Sticky Nav

$(function () {
   $('.header').stickyNavbar({
    animateCSS: false  
  });
});

// Structure
// ------------------------------------------------
var form        = document.querySelector("form");
var input       = document.querySelector("input");
var fullName    = document.querySelector(".fullname");
var city        = document.querySelector(".city");
var email       = document.querySelector(".email");
var message     = document.querySelector(".message");
var comments    = document.querySelector(".comments")



// Setup
// ------------------------------------------------
var loveBook = {
  "comments": []
};

var firebaseReference = new Firebase("https://yellowfanpigtypage.firebaseio.com/");
// Events
// ------------------------------------------------
window.addEventListener("load", setPageState);
form.addEventListener("submit", enter);


// Event handler functions
// ------------------------------------------------
function dataChanged(snapshot) {
  console.log('dataChanged');
  if (snapshot.val() === null){
    return;
  }
  
  //reset the page
  comments.innerHTML = "";
  loveBook = snapshot.val();

  // add resiliency
  // - Check if the array of comments has somehow changed into an object.
  // - Convert back to an array, and resave in firebase
  if (!(loveBook.comments instanceof Array)) {
    loveBook.comments = convertObjectToArray(loveBook.comments);
    firebaseReference.set(loveBook);
  }

  loveBook.comments.forEach(createComment);
}


function convertObjectToArray(obj) {
    console.log("convertObjectToArray", obj);
    var newArray = [];
    for (var prop in obj) {
      newArray.push(obj[prop]);
    }
    return newArray;
}

function setPageState(event) {
  console.log('setPageState');

  firebaseReference.on("value", dataChanged);
  // error checking. return early if nothing saved yet
}

function enter(event) {
  event.preventDefault();

  // get the current entry value from form, convert to number with parseFloat
  var comment = {
    "name": fullName.value,
    "city": city.value,
    "email": email.value,
    "message": message.value
  };
  
  loveBook.comments.push(comment);
  // update page
  
  // clean up!
  form.reset();

  // save to local storage

  //CHANGE TO FIREBASE - set()
  /*localStorage.setItem("comment", JSON.stringify(comment));*/

  firebaseReference.set(loveBook);
}


// Update page functions
// ------------------------------------------------
function createComment(comment) {

  // create and append the new list item
  var li = document.createElement("li");

  // update the value for the total
  totalContent = "Name:" + " " + comment['name'] + " " + "City:" + " " + comment['city'] + " " + "Email:" + " " + comment['email'] + " " + "Comment:" + " " + comment['message']

  // set the text content for both the new list item and the total
  li.textContent = totalContent 
  
  comments.appendChild(li);

}


// Utility functions
// ------------------------------------------------






