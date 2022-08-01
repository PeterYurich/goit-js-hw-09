function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
let intervalId = setInterval(changeColor, 1000)

function changeColor () {
    color = getRandomHexColor()
    bodyEl.style.backgroundColor = `${color}px`
}