function displayTime(){

    let date = new Date();

    let hh = date.getHours();

    let mm = date.getMinutes();

    let ss = date.getSeconds();

    let hRotation = 30*hh+mm/2;

    let mRotataion = 6*mm;

    let sRotation = 6*ss;

    hEl = document.querySelector('.hour-hand')
    mEl = document.querySelector('.minute-hand')
    sEl = document.querySelector('.second-hand')

		hEl.style.transform = "rotate("+hRotation+"deg)";

    mEl.style.transform = "rotate("+mRotataion+"deg)";

    sEl.style.transform = "rotate("+sRotation+"deg)";
}

setInterval(displayTime, 1000);