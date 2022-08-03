// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


const inputEl = document.querySelector('#datetime-picker')
const startBtnEl = document.querySelector('[data-start]')
const daysFieldRef = document.querySelector('[data-days]')
const hoursFieldRef = document.querySelector('[data-hours]')
const minutesFieldRef = document.querySelector('[data-minutes]')
const secondsFieldRef = document.querySelector('[data-seconds]')

let intervalID = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};
flatpickr(inputEl, options)

function addLeadingZero (value) {
    return String(value).padStart(2, '0')
}

function setTimeRest () {
    const currentTime = new Date().getTime()
    const targetTime = new Date(inputEl.value).getTime()
    const deltaTime = targetTime - currentTime
    console.log(deltaTime)

    inputEl.disabled = true
    startBtnEl.disabled = true

    const { days, hours, minutes, seconds } = convertMs(deltaTime)

    daysFieldRef.textContent = addLeadingZero(days)
    hoursFieldRef.textContent = addLeadingZero(hours)
    minutesFieldRef.textContent = addLeadingZero(minutes)
    secondsFieldRef.textContent = addLeadingZero(seconds)

    if (deltaTime <= 0) {
        clearInterval(intervalID) 
        Notiflix.Report.info('Time is gone', 'You can restart the timer after rebooting the page')
        daysFieldRef.textContent = addLeadingZero(0)
        hoursFieldRef.textContent = addLeadingZero(0)
        minutesFieldRef.textContent = addLeadingZero(0)
        secondsFieldRef.textContent = addLeadingZero(0)
        return
    }
}


startBtnEl.addEventListener('click', () => {

    if (new Date > new Date(inputEl.value)) {
        Notiflix.Report.failure('Please choose a date in the future', '','Try again')
        return
    };
    intervalID = setInterval(setTimeRest, 1000)
})


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
