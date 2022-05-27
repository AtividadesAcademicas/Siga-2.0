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
const iconTheme = document.getElementById('change-theme-icon')
const darkTheme = 'dark-theme'
const changeIcon = 'bi-toggle-on'

//Obtemos o tema atual que a interface tem validando a classe 'dark-theme'
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () =>
    themeButton.classList.contains(changeIcon) ? 'bi-toggle-off' : 'bi-toggle-on'

//Ativar / Desativar o tema com o botão
themeButton.addEventListener('click', () => {
    //Adiciona ou remove a classe 'dark-theme' ao body
    document.body.classList.toggle('dark-theme')

    //Adiciona ou remove a classe 'bi-toggle-on' ao ícone
    iconTheme.classList.toggle(changeIcon)
})