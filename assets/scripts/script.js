"use strict";

// variables
const menuBtn = document.querySelector(".menu-btn");
const menuExitBtn = document.querySelector(".menu-exit");
const mobileNav = document.querySelector(".nav-list");
const body = document.body;

// open mobile menu when menu icon clicked
menuBtn.addEventListener("click", () => {
  body.classList.toggle("show-mobile-menu");
});

// close mobile menu when exit icon clicked
menuExitBtn.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});

// close mobile menu when outside of menu clicked
function outsideClick(e) {
  if (!body.classList.contains("show-mobile-menu")) return;
  if (e.target.closest(".nav-list") || e.target.closest(".menu-btn")) return;

  body.classList.remove("show-mobile-menu");
}

document.addEventListener("click", outsideClick);
