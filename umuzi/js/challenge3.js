
var num1 = prompt('Enter first number');
var num2 = prompt('Enter second number');
var num3 = prompt('Enter second number');

function maxNum() {
    var max = Math.max(num1, num2, num3);
    return max;
}

//play around with the values below
max = maxNum();
console.log(max);