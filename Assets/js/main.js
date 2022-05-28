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

/*=============== PROGRESS BAR ===============*/
var i = 1;
while (i <= 6) {
    let progressBar = document.querySelector(`.circular-progress-${i}`)
    let valueContainer = document.querySelector(`.value-container-${i}`)

    let progressValue = 0;
    let progressEndValue = valueContainer.textContent;
    let speed = 10;

    let progress = setInterval(() => {
        progressValue++

        valueContainer.textContent = `${progressValue}%`
        progressBar.style.background = `conic-gradient(
        var(--red) ${progressValue * 3.6}deg,
        var(--brand) ${progressValue * 3.6}deg
    )`

        if (progressValue == progressEndValue) {
            clearInterval(progress)
        }
    }, speed)

    i++
}