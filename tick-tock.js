function  updateTime(){
    var date=new Date();
      var hour=date.getHours();
      var minute=date.getMinutes();
      var seconds=date.getSeconds();
      var secondHand=document.querySelector(".second-hand");
      var hourHand=document.querySelector(".hour-hand");
      var minHand=document.querySelector(".min-hand");
      var hourRotation=hour*30+minute/2;
      var minRotation=minute*6 +seconds/10;
      var secondsRotation=seconds*6;
      hourHand.style.transform=`rotate(${hourRotation}deg)`;
      minHand.style.transform=`rotate(${minRotation}deg)`;
      secondHand.style.transform=`rotate(${secondsRotation}deg)`;
  
   
     }
     setInterval(updateTime,1000);