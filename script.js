// script.js

// Set the date to count from
const startDate = new Date('2024-02-25'); // Change this date to the desired start date

// Function to calculate the difference in days
function calculateDays() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; // Difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    return daysDifference;
}

// Function to update the counter
function updateCounter() {
    const days = calculateDays();
    document.getElementById('days').textContent = days;
}

// Call the updateCounter function when the page loads
updateCounter();



// -------second item ----------------


var countDownDate=new Date("Feb 25, 2025 00:00:00").getTime();
var x= setInterval(function(){

    var now=new Date().getTime();
    var distance=countDownDate-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;





},1000);




var countDownDatem=new Date("Feb 19, 2025 00:00:00").getTime();
var x= setInterval(function(){

    var nowm=new Date().getTime();
    var distance=countDownDatem-nowm;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("daym").innerHTML=days;
    document.getElementById("hoursm").innerHTML=hours;

    document.getElementById("minutesm").innerHTML=minutes;

    document.getElementById("secondsm").innerHTML=seconds;





},1000);



var countDownDater=new Date("Dec 14, 2024 00:00:00").getTime();
var x= setInterval(function(){

    var now=new Date().getTime();
    var distance=countDownDater-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dayr").innerHTML=days;
    document.getElementById("hoursr").innerHTML=hours;

    document.getElementById("minutesr").innerHTML=minutes;

    document.getElementById("secondsr").innerHTML=seconds;





},1000);


