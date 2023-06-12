function updateClock() {
    const now = new Date();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = (hours * 30) + (minutes * 0.5); 
    const minuteRotation = (minutes * 6) + (seconds * 0.1); 
    const secondRotation = seconds * 6; 

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  setInterval(updateClock, 1000);