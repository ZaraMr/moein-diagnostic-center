"use strict";

const menuBtn = document.querySelector(".menu-btn");
const menuExitBtn = document.querySelector(".menu-exit");
const mobileNav = document.querySelector(".nav-list");
const body = document.body;

menuBtn.addEventListener("click", () => {
  body.classList.toggle("show-mobile-menu");
});

menuExitBtn.addEventListener("click", () => {
  body.classList.toggle("show-mobile-menu");
});

function outsideClick(e) {
  if (!body.classList.contains("show-mobile-menu")) return;
  if (e.target.closest(".nav-list") || e.target.closest(".menu-btn")) return;

  body.classList.remove("show-mobile-menu");
}

document.addEventListener("click", outsideClick);
