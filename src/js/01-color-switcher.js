function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
import Notiflix from "notiflix";



const bodyEl = document.querySelector('body')
const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
// let intervalId = null


function startColorChanging() {
    if (startBtnEl.classList.contains('running')) { return }

    startBtnEl.classList.add('running')
    const ColorChanging = () => {
        const color = getRandomHexColor()
        bodyEl.style.backgroundColor = color
    }
    intervalId = setInterval(ColorChanging, 1000)
}
startBtnEl.addEventListener('click', startColorChanging)

function stopColorChanging() {
    clearInterval(intervalId)
    startBtnEl.classList.remove('running')
}
stopBtnEl.addEventListener('click', stopColorChanging)

// 
const defaultColor = '#ffffff'
const clearColorBtn = document.querySelector('[data-clear]')
clearColorBtn.addEventListener('click', () => {
    bodyEl.style.backgroundColor = defaultColor
})