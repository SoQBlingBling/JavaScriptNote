"use strict";
//  箭头函数
var add = function (num1, num2) {
    return num1 + num2;
};
add(3, 4);
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (even) { console.log(even); });
}
// 默认函数参数
var addNum = function (num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2;
};
console.log(addNum(1));
