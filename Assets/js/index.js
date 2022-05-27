const btn_sing_in = document.querySelector('#sign-in-btn');
const btn_sing_up = document.querySelector('#sign-up-btn');

const container = document.querySelector('.container');


btn_sing_up.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
}); 

btn_sing_in.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
}); 