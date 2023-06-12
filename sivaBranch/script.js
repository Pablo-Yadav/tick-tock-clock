const hr = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const sec = document.querySelector('.second-hand');

setInterval(() => {
    calculateTime();
}, 1000);

function calculateTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30*hours + minutes/2;
    let minuteRotation = 6*minutes;
    let secondRotation = 6*seconds;

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secondRotation}deg)`;
}