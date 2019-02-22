var num1 = prompt('Enter first number');
var num2 = prompt('Enter second number');
var num3 = prompt('Enter third number');
var peri = (num1 + num2 + num3) / 2;

function areaTriangle() {
    var area = Math.sqrt(peri*((peri - num1)*(peri - num2)*(peri - num3)));
    return area;
}
var res = areaTriangle();
console.log(res);