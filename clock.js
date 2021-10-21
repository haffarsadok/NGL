function realtimeclock(){

var rtclock = new Date();

var hours = rtclock.getHours();
var minutes = rtclock.getMinutes();
var seconds = rtclock.getSeconds();
var month = rtclock.getMonth()+1;
var jrs = rtclock.getDate();
var year = rtclock.getFullYear();

/*********add AM and PM*******/
var ampm =(hours < 12 ) ? "AM" : "PM";


hours = (hours > 12 ) ? hours - 12 : hours;

hours = ("0" + hours).slice(-2);
minutes =("0" + minutes).slice(-2);
seconds =("0" + seconds).slice(-2);
if (month <10 ){
    month=("0"+month).slice(-2);
}
if(jrs <10){
    jrs=("0"+jrs).slice(-2);
}



document.getElementById("clocks").innerHTML = hours + " : " + minutes + " : " + seconds + "  " + ampm + " "+ jrs + "/" + month + "/" + year;
var t=setTimeout(realtimeclock,500);



}