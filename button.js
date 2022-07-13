const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".header__mobile-navigation");
const body = document.querySelector("body");
const mainBox = document.querySelector("mainBox");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add("visible");
    body.classList.add("block-scroll");
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('visible');
    body.classList.remove("block-scroll");
    menuOpen = false;
  }
});