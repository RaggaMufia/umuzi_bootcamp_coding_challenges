
//Global challenge2 variables
var num1 = 7;
var num2 = 8;
var num3 = 9;
var peri = (num1 + num2 + num3) / 2;

//global challenge3 variables
var num1 = document.getElementById('num-1');
var num2 = document.getElementById('num-2');
var num3 = document.getElementById('num-3');



//global challenge4 variables
var degrees;
var minutes;
var hours;
var min;
var num = document.getElementById('convert');
var time = document.getElementById('frame').innerHTML('elapsed');

//global variables for challenge5
var arr = '';

//function for challenge one
function checkSum() {
    var a = document.getElementById('num1');
    var b = document.getElementById('num2');
    //var res = document.getElementById('show').innerHTML('result');
    if (a == 65 || b == 65) {
        result = true;
    } else if (a + b == 65) {
        result = true;
    } else {
        result = false;
    }
    document.getElementById('show').innerHTML('result');
}
document.getElementById('btn-1').addEventListener('click', checkSum);
var result = checkSum();
console.log(result);



//function for challenge2
function areaTriangle() {
    var area = Math.sqrt(peri*((peri - num1)*(peri - num2)*(peri - num3)));
    return area;
}
var res = areaTriangle();
console.log(res);


//function for challenge3
function maxNum() {
    var max = Math.max(num1, num2, num3);
    var an = document.getElementById('area').innerHTML('max');
    return max;
}

//play around with the values below
max = maxNum();
console.log(max);
//functions for challenge4
function evaluateHour(hours) {
    if (hours == 1) {
        degrees = ' hour';
    } else {
        degrees = ' hours';
    }
    return degrees;
}

function evaluateMin(min) {
    if (min == 1) {
        minutes = ' minute';
    } else {
        minutes = ' minutes';
    }
    return minutes;
}

function toMinuteSeconds() {
    min = (num % 60);
    hours = Math.floor(num / 60);
    degrees = evaluateHour(hours);
    minutes = evaluateMin(min);
    console.log(hours + degrees + ', ' + min + minutes);
}
var elapsed = toMinuteSeconds();
var res = document.getElementById('preview').innerHTML(toMinuteSecondes());

//function for challenge5
function compareStrings(str1, str2) {
    var i = 0;
    while (i < str1.length - 1) {
        if (str2.search(str[i])) {
            arr = arr.push(str[i]);
        }
        else {
            i++;
        }
        i++;
    }
    //The remove duplicates step should follow here
    
    return arr;
}
var comp = compareStrings('These are the strings', 'To be compared to each other');
console.log(comp);
