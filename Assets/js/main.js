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
const switchButton = document.getElementById('checkbox')
const darkTheme = 'dark-theme'
const iconTheme = 'on'

//Pega o tema selecionado
const selectedTheme = localStorage.getItem('current-theme-siga')
const selectedIconTheme = localStorage.getItem('current-theme-icon-siga')

//Se obtem a informação do tema atual (Dark ou Light)
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIconTheme = () => switchButton.classList.contains(iconTheme) ? 'on' : 'off'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    switchButton.classList[selectedIconTheme === 'on' ? 'add' : 'remove'](iconTheme)
}

//Ativar / Desativar o tema com o botão
themeButton.addEventListener('click', () => {
    //Adiciona ou remove a classe 'dark-theme' ao body
    document.body.classList.toggle(darkTheme)
    switchButton.classList.toggle(iconTheme)

    localStorage.setItem('current-theme-siga', getCurrentTheme())
    localStorage.setItem('current-theme-icon-siga', getCurrentIconTheme())
})


/*=============== CONTRAST ===============*/
const buttonContrast = document.getElementById('change-contrast')
const switchButtonContrast = document.getElementById('contrast')
const contrastTheme = 'body-contrast'
const iconContrast = 'on'

//Pega o tema selecionado
const selectedContrast = localStorage.getItem('current-contrast-siga')
const selectedIconContrast = localStorage.getItem('current-contrast-icon-siga')

//Se obtem a informação do tema atual (Dark ou Light)
const getCurrentContrast = () => document.body.classList.contains(contrastTheme) ? 'with-contrast' : 'without-contrast'
const getCurrentIconContrast = () => switchButtonContrast.classList.contains(iconContrast) ? 'on' : 'off'

if (selectedContrast) {
    document.body.classList[selectedContrast === 'with-contrast' ? 'add' : 'remove'](contrastTheme)
    switchButtonContrast.classList[selectedIconContrast === 'on' ? 'add' : 'remove'](iconContrast)
}

//Ativar / Desativar o tema com o botão
buttonContrast.addEventListener('click', () => {
    //Adiciona ou remove a classe 'dark-theme' ao body
    document.body.classList.toggle(contrastTheme)
    contrast.classList.toggle(iconContrast)

    localStorage.setItem('current-contrast-siga', getCurrentContrast())
    localStorage.setItem('current-contrast-icon-siga', getCurrentIconContrast())
})


/*=============== INCREASE/DECREASE FONT ===============*/
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