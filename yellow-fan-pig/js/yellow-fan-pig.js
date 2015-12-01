
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


