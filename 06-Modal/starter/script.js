'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//since there are three btns with the same class show-modal, queryselector will take only the first element. 
//const btnsOpenModal = document.querySelector('.show-modal');
//Use querySelectorAll to select multiple elements having same class
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function() {
    //don't use '.', use it only while selecting a class. Here the syntax to remove class doesn't require '.'
    //To remove multiple classes use ,
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
modal.classList.add('hidden');
overlay.classList.add('hidden');
}
for(let i=0;i<btnsOpenModal.length;i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//adding esc key event
//It is global event meaning it is applicable to any element in the entire document
document.addEventListener(
    'keydown',
    function(e) {
        //e stores the entire info of the event occured
        if(e.key=='Escape' && !modal.classList.contains('hidden')) {
            // only call if the model is not hidden
            closeModal();
        }
    }
)