 const daysEL = document.getElementById("days")
 const hoursEL = document.getElementById("hours")
 const minsEL = document.getElementById("mins")
 const secondsEL = document.getElementById("seconds")


const newYears=prompt("Enter the date which you wont to caclc\n ادخل التاريخ الزي تود حسابه \n  in this  day month(in letter) year Ex : 10 jun 2025");
function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    Tsecs  = (newYearsDate-currentDate)/1000; 
    secs   = Math.floor(Tsecs%60)
    mins   = Math.floor(Tsecs/60) % 60 ; 
    hours  = Math.floor(Tsecs/3600) % 24;
    days   = Math.floor((Tsecs/3600)/24);
    
daysEL.innerHTML= formatTime(days);
hoursEL.innerHTML= formatTime(hours);
minsEL.innerHTML= formatTime(mins);
secondsEL.innerHTML= formatTime(secs);   
console.log(days,hours,mins,secs); 
}
function formatTime(time){
    return time <10 ? (`0${time}` ): time;
}
setInterval(countdown,1000);
 countdown();