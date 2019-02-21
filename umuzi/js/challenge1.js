var a;
var b;


var a = document.getElementById('num1');
var b = document.getElementById('num2');
var result = document.getElementById('show').innerHTML(result);
function checkSum() {
    if (a == 65 || b == 65) {
        return true;
    } else if (a + b == 65) {
        return true;
    } else {
        return false;
    }
}

//play around with the two values below
var result = checkSum(0, 65);
console.log(result);