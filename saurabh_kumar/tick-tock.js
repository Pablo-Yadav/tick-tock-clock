// get all hands using their class name
const hour_hand = document.getElementsByClassName("hour-hand")[0];
const min_hand = document.getElementsByClassName("min-hand")[0];
const second_hand = document.getElementsByClassName("second-hand")[0];

const hour_box = document.getElementsByClassName("hour-box")[0];
const min_box = document.getElementsByClassName("min-box")[0];
const sec_box = document.getElementsByClassName("sec-box")[0];
// everything inside setInterval function will be updated each second
setInterval(() => {
  // get the current time as an object
  const now = new Date();
  var curr_hour = now.getHours();   // get current hour count
  var curr_min = now.getMinutes();  // get current minute count
  var curr_sec = now.getSeconds();  // get current second count

  // angle formulae for each hand
  // each second spans 6 degree
  // do 90+ in each hand's angle because their default pos is -90 deg from 00:00:00
  const second_angle = (90+curr_sec*6)%360;
  const minute_angle = (90+curr_min*6+curr_sec*0.1)%360;
  const hour_angle = (90+curr_hour*30+curr_min*0.5+curr_sec*0.00833333)%360;
  
  // modify the angle of transform prop value `rotate`
  second_hand.style.transform = `rotate(${second_angle}deg)`;
  min_hand.style.transform = `rotate(${minute_angle}deg)`;
  hour_hand.style.transform = `rotate(${hour_angle}deg)`;


    //   digital clock
    if(curr_hour < 12){
        curr_hour = "0"+curr_hour;
    }
    if(curr_min < 10){
        curr_min = "0"+curr_min;
    }
    if(curr_sec < 10){
        curr_sec = "0"+curr_sec;
    }
    
    hour_box.textContent = curr_hour;
    min_box.textContent = curr_min;
    sec_box.textContent = curr_sec;
}, 1);