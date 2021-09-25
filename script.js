'use strict';
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click',() => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  
    // OR
  
    // modal.style.display = 'block'
    // overlay.style.display = 'block'
  })
  }