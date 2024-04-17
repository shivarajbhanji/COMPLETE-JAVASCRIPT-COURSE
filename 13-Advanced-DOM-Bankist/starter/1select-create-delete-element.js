// selecting the entire page
console.log(document.documentElement);
// selecting the entire head
console.log(document.head);
// selecting the entire body
console.log(document.body);
// the above the special elements for which we don't need any selectors to be written. In order to access the contents within them we must use selectors
// returns the first element that matches the selector
const header = document.querySelector('.header');
// to select multiple elements
const allSections = document.querySelectorAll('.section');
document.getElementById('section--1');
// retuns the HtmlCollection whose element tag is button
// HtmlCollection is different than nodelist, it is live collection meaning if there are any changes in dom tree then it gets updated in real time
// for ex if initially there are 9 buttons and we remove a button then it gets updated automatically
// This behaviour is not in case of nodelist
const allButtons = document.getElementsByTagName('button');
document.getElementsByClassName('btn');

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'we use cookies for imporved functionality and analytics.';
message.innerHTML =
  'we use cookies for imporved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
// as a child
header.append(message);
// before the header class, so it inserts as sibling
// header.before(message);
// after the header class, so it inserts as sibling
// header.after(message);

// Delete elements
// old method
// message.parentElement.removeChild(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
