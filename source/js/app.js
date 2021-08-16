let pageHeader = document.querySelector('.page-header');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

pageHeader.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--open');
    navToggle.classList.add('main-nav__toggle--close');
  }
  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--close');
    navToggle.classList.add('main-nav__toggle--open');
  }
});
