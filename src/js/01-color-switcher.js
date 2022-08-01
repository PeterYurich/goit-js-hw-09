function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
let intervalId = null


function startColorChanging() {
    if (startBtnEl.classList.contains('runing')) { return }

    startBtnEl.classList.add('runing')
    const ColorChanging = () => {
        color = getRandomHexColor()
        console.log(color)
        bodyEl.style.backgroundColor = color
    }
    intervalId = setInterval(ColorChanging, 1000)
}
startBtnEl.addEventListener('click', startColorChanging)

function stopColorChanging() {
    clearInterval(intervalId)
}
stopBtnEl.addEventListener('click', stopColorChanging)

