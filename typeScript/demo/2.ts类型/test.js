"use strict";
//定义变量
// 定义方式： 关键字 变量名:值类型 = 所赋的值
// 布尔类型
var flag = true;
// 字符串类型
var str = 'hi';
var say = "word";
// 数字类型
var num1 = 123;
var num2 = -5;
var num3 = 0.5;
// 对象
/* 隐式 */
var person = {
    name: 'SoQ',
    age: 24
};
/* 显式 */
// 如果显式定义时使用具体的值那么在赋值时只能使用定义的值 如果使用其他值就会报错
var person1 = {
    name: 'Bling',
    age: 30
};
// 数组
var array = ['hello', 'world'];
var array2 = [1, 2, 3, 4];
// 枚举
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["auther"] = 2] = "auther";
})(Role || (Role = {}));
console.clear();
console.log(Role.admin);
// any
var array3 = [1, 'hello', true];
// 联合类型
//
function combine(input1, input2) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}
//数值类型
var variable;
if (variable == 'hello') {
    console.log('hello');
}
else if (variable == 123) {
    console.log(123);
}
var numbers = 123;
var myvalue;
if (myvalue == 123) {
}
else if (myvalue == 'hello') {
}
//void
function printAdd(input1, input2) {
    console.log(input1 + input2);
}
/*
函数中返回undefined 和void的区别
    1. 如果函数中没有返回数据那么使用void
    2. 如果函数中有return但是没有返回值那么就是undefined
*/
//1.
function printAdd1(input1, input2) {
    console.log(input1 + input2);
}
//2. or
// function printAdd (input1:number,input2:number):undefined{
//     console.log(input1+input2)
//     return;
// }
// function 类型
// let combineValue:Function;
// or
var combineValue;
combineValue = printAdd1;
combineValue(1, 2);
// function 类型
function addNumber(num1, num2) {
    return num1 + num2;
}
// let testFcuntion = addNumber;
// let testFcuntion:Function;
var testFcuntion;
testFcuntion = addNumber;
function testCallBack(num1, num2, fn1) {
    var sum = num1 + num2;
    var cb = fn1(sum);
    console.log(cb);
}
testCallBack(10, 20, function (value) {
    console.log(value);
    return value;
});
