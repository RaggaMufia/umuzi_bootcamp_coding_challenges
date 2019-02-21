
var num1 = 7;
var num2 = 8;
var num3 = 9;
var peri = (num1 + num2 + num3) / 2;

function areaTriangle() {
    var area = Math.sqrt(peri*((peri - num1)*(peri - num2)*(peri - num3)));
    return area;
}
var res = areaTriangle();
console.log(res);