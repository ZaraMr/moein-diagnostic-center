"use strict";

// variables
const body = document.body;
const menuBtn = document.querySelector(".menu-btn");
const menuExitBtn = document.querySelector(".menu-exit");
const mobileNav = document.querySelector(".nav-list");
const headerNavLinks = document.querySelectorAll(".header-nav-link");
const sections = document.querySelectorAll(".section");
const topSentinel = document.getElementById("top-sentinel");
const scorllToTopBtn = document.querySelector(".scroll-top-btn");

// reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

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

// close menu when nav link is clicked
const handleNavLinkClick = function (e) {
  if (!e.target.closest(".header-nav-link")) return;
  body.classList.remove("show-mobile-menu");
};
mobileNav.addEventListener("click", handleNavLinkClick);

// scroll btn
const scrollTopObserver = new IntersectionObserver(
  ([entry]) => {
    scorllToTopBtn.classList.toggle("show", !entry.isIntersecting);
  },
  {
    root: null,
    threshold: 0,
  }
);

console.log(topSentinel);
scrollTopObserver.observe(topSentinel);
scorllToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
