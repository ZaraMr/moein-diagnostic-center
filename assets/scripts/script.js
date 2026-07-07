"use strict";

// variables
const body = document.body;
const menuBtn = document.querySelector(".menu-btn");
const menuExitBtn = document.querySelector(".menu-exit");
const mobileNav = document.querySelector(".nav-list");
const sections = document.querySelectorAll(".section");
const scrollToTopBtn = document.querySelector(".scroll-top-btn");
// Services page variables
const questionList = document.querySelector(".questions-list");
const questionItems = document.querySelectorAll(".question-item");
// const questionBtns = document.querySelectorAll(".question-btn");

// reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

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
window.addEventListener("scroll", function () {
  scrollToTopBtn.classList.toggle("show", window.scrollY > 300);
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Accordion
if (questionList) {
  questionList.addEventListener("click", function (e) {
    const clicked = e.target.closest(".question-btn");
    if (!clicked) return;

    const currentItem = clicked.closest(".question-item");

    // if (currentItem.classList.contains("active")) {
    //   currentItem.classList.remove("active");
    //   clicked.setAttribute("aria-expanded", "false");
    //   return;
    // }

    // // questionItems.forEach((item) => item.classList.remove("active"));
    // questionItems.forEach(function (item) {
    //   item.classList.remove("active");

    //   item
    //     .querySelector(".question-btn")
    //     .setAttribute("aria-expanded", "false");
    // });

    // currentItem.classList.add("active");
    // clicked.setAttribute("aria-expanded", "true");

    const isOpen = currentItem.classList.contains("active");

    questionItems.forEach(function (item) {
      item.classList.remove("active");

      item
        .querySelector(".question-btn")
        .setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      currentItem.classList.add("active");
      clicked.setAttribute("aria-expanded", "true");
    }
  });
}
