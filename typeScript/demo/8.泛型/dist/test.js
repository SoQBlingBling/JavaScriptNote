"use strict";
/*
Generic | 通用类型 | 泛型类型
*/
// 泛型在promise 中使用
// let promise:Promise<string> = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('成功了')
//     }, 1000);
// })
// promise.then((data)=>{
// data.split(' ')
// })
// a) <T,U>: 可以是任何类型数据
// b) 根据命名约定，应该以单个大写字母命名
// c) 传入各种对象数据，ts不报错
// d) 约束类型: <T extends object>: 约束为对象类型，当然也可以约束为其它类型
// 0. 继承属性: 在下方length实列
function merge(ob1, ob2) {
    return Object.assign(Object.assign({}, ob1), ob2);
}
let testMerge = merge({ name: 'SoQ' }, { age: 24 });
testMerge.age;
//泛型类型约束
// a) 通用类型约束：多种类型数据约束<T extends xxx | yyy | ccc >
function mergeObj(ob1, ob2) {
    return Object.assign(Object.assign({}, ob1), ob2);
}
function testExtendsFunction(inputString) {
    let resultDes = '';
    if (inputString.length === 1) { // 如果没有继承属性length，将报错
        resultDes = '长度为1';
    }
    else if (inputString.length > 1) {
        resultDes = `长度为${inputString.length}`;
    }
    return [inputString, resultDes];
}
console.log(testExtendsFunction('this there'));
/*
keyof约束
*/
function testKeyOf(obj, key) {
    return obj[key];
}
console.log(testKeyOf({ name: "SOQ" }, 'name'));
// 泛型类
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    printData() {
        console.log(this.data);
    }
}
let textStorage = new DataStorage();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
textStorage.printData();
textStorage.addItem(1);
/*
 相当于: interface Doc { id?: number; age?: number; name?: string; }
*/
function Mydoc(title, size, date) {
    let mydoc = {};
    mydoc.title = title;
    mydoc.size = size;
    mydoc.date = date;
    return mydoc;
}
// 关键字 Readonly
// 只能读取无法进行操作
let arr = ['max', 'manu'];
// arr.push('ail')
