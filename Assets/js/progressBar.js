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