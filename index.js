
let seconds,milliSec,days,hours,min;
function TimeCounter(){
      var myDate= new Date(2022,00,01);
var currentDate= new Date();
      milliSec=myDate-currentDate;
      seconds=(milliSec/1000);

     console.log(seconds);
    days=Math.floor(seconds/(24*3600));
      $(".TimeDays").text(days);
console.log(days);

 hours= Math.floor(seconds/3600)%24;
   $(".TimeHours").text(hours);
console.log(hours);
 min=Math.floor(seconds/60)%60;
   $(".TimeMinutes").text(min);
console.log(min);
TotalSec= Math.floor(seconds) % 60;
$(".TimeSeconds").text(TotalSec);
}

TimeCounter();
setInterval(TimeCounter,1000);
