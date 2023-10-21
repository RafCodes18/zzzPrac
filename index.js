window.onload = function () {
 // Function to initialize Typed.js
 function initializeTyped() {
     var typed = new Typed(".auto-type", {
         strings: [" build websites.", " make music.", "  chase greatness."],
         typeSpeed: 50,
         backSpeed: 30,
         loop: false
     });
 }

 // Use setTimeout to start the animation 5 seconds after the page loads
 setTimeout(initializeTyped, 2000); // 5000 milliseconds = 5 seconds


  // Function to make the navigation links appear after 10 seconds
  function makeLinksAppear() {
   var links = document.querySelectorAll(".center-div a");
   links.forEach(function (link) {
       link.style.display = "inline"; // Set the display property to "inline" to make them visible
   });
}

// Use setTimeout to make the links appear after 10 seconds
setTimeout(makeLinksAppear, 8000); // 10000 milliseconds = 10 seconds
};

// JavaScript to toggle the hamburger menu's visibility
function toggleHamburgerMenu() {
var hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.classList.toggle("show");
}

// Attach an event listener to the hamburger icon
var hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", toggleHamburgerMenu);