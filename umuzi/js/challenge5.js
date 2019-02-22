var str1 = prompt('Enter string1');
var str2 = prompt('Enter string2');

function compareChars(str1, str2) {
    var s = str1.replace(/ /g, "");
    var p = str2.replace(/ /g, "");
    var arr = [];
    var i = 0;
    while (i < str1.length) {
        if (str2.indexOf(str1[i]) !== -1 && arr.indexOf(str1[i]) === -1) {
            arr.push(str1[i]);
        }
        i++;
    }
    return arr.join("");
}
var res = compareChars(str1, str2);
console.log(res);
