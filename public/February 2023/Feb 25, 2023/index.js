var countDownDate = new Date("Jan 01, 2024 00:00:00").getTime();
const monthsElement = document.getElementById('month');
const daysElement = document.getElementById('day');
const hoursElement = document.getElementById('hour');
const minutesElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');


// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    let today = new Date().getTime();

    // Find the distance between now and the count down date
    let interval = countDownDate - today;

    // Time calculations for days, hours, minutes and seconds
    let months = Math.floor(interval / (1000 * 60 * 60 * 24 * 30))
    let days = 30 % Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);
    
    monthsElement.innerHTML = months;
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;


    // If the count down is finished, write some text
    if (interval < 0) {
        clearInterval(x);
        document.getElementById("new").innerHTML = "HAPPY NEW YEAR ! TIME FOR A NEW BEGINNING";
    }
}, 1000);