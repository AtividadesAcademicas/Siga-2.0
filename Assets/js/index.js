const btn_sing_in = document.querySelector('#sign-in-btn');
const btn_sing_up = document.querySelector('#sign-up-btn');

const container = document.querySelector('.container');

btn_sing_up.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

btn_sing_in.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

/*=============== VALIDATE FIELDS ===============*/
const form = document.getElementById('form')

form.addEventListener('submit', function () {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value

    if (login != 'aluno' || password != '12345') {
        alert('Login ou Senha Inválidos')
    } else {
        form.action = './pages/matricula.html'
    }
})