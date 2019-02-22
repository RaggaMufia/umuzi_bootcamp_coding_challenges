var degrees;
var minutes;
var hours;
var min;

//below are the two functions to be used within the main function

//I create a function to check the amount of hours
var num = document.getElementById('convert');

function evaluateHour(hours) {
    if (hours == 1) {
        degrees = ' hour';
    } else {
        degrees = ' hours';
    }
    return degrees;
}

//I create a function to check the amount of minutes
function evaluateMin(min) {
    if (min == 1) {
        minutes = ' minute';
    } else {
        minutes = ' minutes';
    }
    return minutes;
}

//The main function, it converts any number into hours and minutes and prints to the console
function toMinuteSeconds() {
    min = (num % 60);
    hours = Math.floor(num / 60);
    degrees = evaluateHour(hours);
    minutes = evaluateMin(min);
    console.log(hours + degrees + ', ' + min + minutes);
}
toMinuteSeconds(120);
var res = document.getElementById('preview').innerHTML(toMinuteSecondes());