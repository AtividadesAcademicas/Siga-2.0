/*=============== MODAL ===============*/
const modalViews = document.querySelector('#modal'),
    modalBtns = document.querySelector('#open-modal'),
    modalCloses = document.querySelector('#close-modal')


modalBtns.addEventListener('click', () => {
    modalViews.classList.add('active-modal')
})

modalCloses.addEventListener('click', () => {
    modalViews.classList.remove('active-modal')
})