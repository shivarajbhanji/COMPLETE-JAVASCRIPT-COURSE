'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'we use cookies for imporved functionality and analytics.';
message.innerHTML =
  'we use cookies for imporved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
// Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//we cannot get a style that is hidden inside a style(.css) file or the style which doesn't exist
//using this approach we can get access to only those styles which are defined as above(inline styles)
console.log(message.style.height);
// To get access to all the styles applied to an element we use get computed style
console.log(getComputedStyle(message));
// To get a particular style
console.log(getComputedStyle(message).color);
// We don't have height property set, but browser will handle this and assign the necessary height
console.log(getComputedStyle(message).height);
// adding 40px to the height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// CSS custom property
// they are like variables in js
// they are stored in root and we can make changes in just one places which get reflected in entire page4
// document.documentElement to select the style at root
document.documentElement.style.setProperty('--color-primary', 'orangered');
// attributes of html element
const logo = document.querySelector('.nav__logo');
// Bankist logo
console.log(logo.alt);
// http://127.0.0.1:8080/img/logo.png
// absolute url
console.log(logo.src);
// nav__logo
console.log(logo.className);
// since above attributes are standards in an img so we can access them directly
// undefined
console.log(logo.designer);
// we must use getAttribute in case of custom attributes
// john
console.log(logo.getAttribute('designer'));
// to get relative url
// img/logo.png
console.log(logo.getAttribute('src'));
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
// data attributes
// data-version-number = "3.0"
console.log(logo.dataset.versionNumber);

// Implementing smooth scroll

