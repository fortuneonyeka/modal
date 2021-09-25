'use strict';
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

//OPENMODAL FUNCTION
const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')

  // OR
  
    // modal.style.display = 'block'
    // overlay.style.display = 'block'
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click',() => {
    openModal()
  })
  }
//CLOSEMODAL FUNCTION
  const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  
    // OR
    // modal.style.display = 'none'
    // overlay.style.display = 'none'
  }

  // /WITH ARROW FUNCTION
btnCloseModal.addEventListener('click', () => {
  closeModal()
});

//WITHOUT ARROW FUNCTION
overlay.addEventListener('click', closeModal)

//CLOSING MODAL WITH ESC KEY
document.addEventListener('keydown', (e) => {
 if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
  closeModal()
 }
})
