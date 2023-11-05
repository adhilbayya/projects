const newYear = () => {
    let currentDate = new Date().getFullYear();
    return new Date(`January 01 ${currentDate + 1} 00:00:00`)
}

const year = document.querySelector('.year');
year.innerHTML = newYear().getFullYear();

const app = document.querySelector('.timer')
const message = document.querySelector('.message')
const heading = document.querySelector('h1')

const format = (t) =>{
    return t < 10 ? '0' + t : t;
}

const render = (time) => {
    app.innerHTML = 
    `<div class = 'countdown'>
        <div class="timer">
            <h2 class="days">${format(time.days)}</h2>
            <small>days</small>
        </div>
        <div class="timer">
            <h2 class="hours">${format(time.hours)}</h2>
            <small>hours</small>
        </div>
        <div class="timer">
            <h2 class="minutes">${format(time.minutes)}</h2>
            <small>minutes</small>
        </div>
        <div class="timer">
            <h2 class="seconds">${format(time.seconds)}</h2>
            <small>seconds</small>
        </div>
    </div>`;
}

const showMessage = () => {
    message.innerHTML = 'HAPPY NEW YEAR';
    app.innerHTML = '';
    heading.style.display = "none";
}

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
}

let complete = () => {
    showMessage();

    setInterval(() => {
        hideMessage();
        countdownTimer.setExpiredDate(newYear())
    }, 1000*60*60*24);
}

let countdownTimer = new CountDown(
 newYear(),
 render,
 complete   
);

