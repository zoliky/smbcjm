/* ---------------------------------------------------------------------------
             FILE: main.js
      DESCRIPTION: Main JavaScript file
           AUTHOR: Zoltán Király <zoliky@gmail.com>
----------------------------------------------------------------------------*/

"use strict";

// Hamburger navigation
var menuToggle = document.querySelector(".menu-toggle");
var nav = menuToggle.parentElement;
var menuDropdown = document.querySelector(".menu-dropdown");

menuToggle.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.toggle("is-open");

  var height = menuDropdown.scrollHeight;

  if (nav.classList.contains("is-open")) {
    menuDropdown.style.setProperty("height", height + "px");
  } else {
    menuDropdown.style.setProperty("height", "0");
  }
});

// Sticky :hover effect on mobile devices
// http://javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
var touchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (!touchSupport) {
  document.documentElement.className += " non-touch";
}

// Hide and show header
var header = document.querySelector(".header");
var lastScrollTop = 0;
window.addEventListener("scroll", function (event) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    if (!nav.classList.contains("is-open")) {
      header.style.top = "-140px";
    }
  } else {
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
