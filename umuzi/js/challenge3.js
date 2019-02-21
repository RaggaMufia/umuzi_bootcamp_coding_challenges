var num1 = document.getElementById('');
var num2 = document.getElementById('');
var num3 = document.getElementById('');

function maxNum() {
    var max = Math.max(num1, num2, num3);
    return max;
}

//play around with the values below
max = maxNum(10000, -40003, 110);
console.log(max);