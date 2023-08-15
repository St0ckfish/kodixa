function noscroll() {
  if (dropDown.classList.contains("open")) {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", noscroll);
  }
}
let toggleBtn = document.querySelector(".body");
const toggleBtnIcon = document.querySelector("#checkbox");
const dropDown = document.querySelector(".dropdown");

function myFunction() {
  if (dropDown.classList.contains("open")) {
    dropDown.classList.remove("open");
  } else {
    dropDown.classList.remove("close");
    dropDown.classList.toggle("open");
    // dropDown.classList.toggle(window.addEventListener("scroll", noscroll));
  }
}
function closee() {
  if (dropDown.classList.contains("open")) {
    dropDown.classList.remove("open");
    document.getElementById("checkbox").checked = false;
  }
}

var lastScrollTop = 0;
navbar = document.querySelector("header");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-112px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Number of clicks on the trigger element initially set on 0
let numOfClicks = 0;
// Get trigger element 
const trigger = document.getElementById("checkbox");
// Get body element
const bodyEl = document.getElementsByTagName("body")[0];
const headerr = document.getElementsByTagName("header")[0];

// Set onclick function to trigger element
// trigger.onclick = () => {
//     numOfClicks += 1;
//     Check if number of clicks is an even value: 
//     odd value - first click, even value - second click
//     const isNumOfClicksEven = numOfClicks % 2 === 0;
//     On first click set body's overflow property to "auto", 
//     On second click set body's overflow property to "hidden"
//     isNumOfClicksEven ? bodyEl.style.overflow = "auto" :headerr.style.overflow = "auto": bodyEl.style.overflow = "hidden";
//     if (isNumOfClicksEven){
//       bodyEl.style.overflow = "auto";
//     }
//     else{
//         bodyEl.style.overflow = "hidden";
//     }
// };