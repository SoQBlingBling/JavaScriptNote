"use strict";
//定义变量
// 定义方式： 关键字 变量名:值类型 = 所赋的值
// 布尔类型
let flag = true;
// 字符串类型
let str = 'hi';
let say = `word`;
// 数字类型
let num1 = 123;
let num2 = -5;
let num3 = 0.5;

// 对象
/* 隐式 */ 
let person = {
    name:'SoQ',
    age:24,
}
/* 显式 */
// 如果显式定义时使用具体的值那么在赋值时只能使用定义的值 如果使用其他值就会报错
let person1:{
    name:string,
    age:30
} = {
name:'Bling',
age:30
}

// 数组
let array:string[] = [ 'hello' , 'world'];
let array2:Array<number> = [1,2,3,4];

// 枚举
enum Role {admin,user,auther}
console.clear();
console.log(Role.admin)

// any
let array3:any[] = [1,'hello',true]

// 联合类型
//
function combine (input1:string | number , input2: string | number){
    let result;
    if ( typeof input1 == 'number' && typeof input2 == 'number' ){
        result = input1+input2
    } else {
        result = input1.toString() +input2.toString()
    }
}

//数值类型
let variable: 'hello' | 123 | undefined;
if (variable == 'hello'){
    console.log('hello')
} else if (variable ==123) {
    console.log(123)
}
//类型别名
//通过 type关键字 可以进行对类型重新定义名字
type numberType = number;
let numbers:numberType = 123;
type mytypes = 123 | `hello` | undefined;
let myvalue:mytypes
if (myvalue == 123) {

} else if (myvalue =='hello') {

}

//void
function printAdd (input1:number,input2:number):void{
    console.log(input1+input2)
}

/*
函数中返回undefined 和void的区别
	1. 如果函数中没有返回数据那么使用void
	2. 如果函数中有return但是没有返回值那么就是undefined
*/
//1.
function printAdd1 (input1:number,input2:number):void{
    console.log(input1+input2)
}
//2. or
// function printAdd (input1:number,input2:number):undefined{
//     console.log(input1+input2)
//     return;
// }

// function 类型
// let combineValue:Function;
// or
let  combineValue:(a,b)=>void;
combineValue = printAdd1;
combineValue(1,2)


// function 类型
function addNumber(num1:number,num2:number):number{
        return num1 + num2
}

// let testFcuntion = addNumber;
// let testFcuntion:Function;
let testFcuntion:(num1:number,num2:number)=>number
testFcuntion = addNumber;

function testCallBack(num1:number,num2:number,fn1:(n1:number)=>void){
    let sum = num1 +num2
    let cb =  fn1(sum)
    console.log(cb)

}
testCallBack(10,20,(value)=>{
    console.log(value)
    return value
})