/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById('nav-toggle'),
        nav = document.getElementById('nav-menu')

    //Valida se as variáveis existem, variáveis essas que são
    if (toggle && nav) {
        //Tendo a existência das variáveis, podemos adicionar a classe 'show-menu' a barra de navegação
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            toggle.classList.toggle('bi-x-lg')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== DARK THEME ===============*/
const themeButton = document.getElementById('change-theme')
const switchButton = document.getElementById('checkbox');
//Ativar / Desativar o tema com o botão
themeButton.addEventListener('click', () => {
    //Adiciona ou remove a classe 'dark-theme' ao body
    document.body.classList.toggle('dark-theme')

    //Switch
    if (checkbox.classList.contains('on'))
        checkbox.setAttribute('aria-checked', 'false');
    else
        checkbox.setAttribute('aria-checked', 'true');

    checkbox.classList.toggle('on');
})

/*=============== CONTRAST ===============*/
const buttonContrast = document.getElementById('change-contrast');
const switchButtonContrast = document.getElementById('contrast');
//Ativar / Desativar o tema com o botão
buttonContrast.addEventListener('click', () => {
    //Adiciona ou remove a classe 'dark-theme' ao body
    document.body.classList.toggle('body-contrast')

    //Switch
    if (contrast.classList.contains('on'))
        contrast.setAttribute('aria-checked', 'false');
    else
        contrast.setAttribute('aria-checked', 'true');

    contrast.classList.toggle('on');
})

/*=============== INCREASE FONT ===============*/
$(document).ready(function () {
    let font = 16

    $('#increase').click(function () {
        if (font < 22) {
            font++
            $('body').css({ 'font-size': font + 'px' })
        }
    })

    $('#decrease').click(function () {
        if (font > 16) {
            font--
            $('body').css({ 'font-size': font + 'px' })
        }
    })
})


/*=============== DECREASE FONT ===============*/