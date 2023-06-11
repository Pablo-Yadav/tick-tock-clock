// Js code to move clock hands
function tickTock() {
    // First selecting hands using their respective class names using query selector
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    // Getting current time and updating the hands angle
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // Note that all below hands have 90 degrees added additionally, since they all start at 9'0 clock
    // Every hour, hour hand moves 30 degrees, and every 2 minutes it moves 1 degree
    var hoursAngle = (hour * 30) + (minute / 2) + 90;

    // Every minute, minute hand moves 6 degrees
    var minutesAngle = (minute * 6) + 90;

    // Every second, second hand moves 6 degrees
    var secondsAngle = (second * 6) + 90;

    // Rotating hands using css
    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
} 

// As the code loads, first update time and then do that same every 1 second
tickTock();
setInterval(tickTock, 1000);