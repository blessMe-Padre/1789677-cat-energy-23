let pageHeader = document.querySelector('.page-header');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.nav-toggle');

pageHeader.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('nav-toggle--open');
    navToggle.classList.add('nav-toggle--close');
  }
  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('nav-toggle--close');
    navToggle.classList.add('nav-toggle--open');
  }
});
