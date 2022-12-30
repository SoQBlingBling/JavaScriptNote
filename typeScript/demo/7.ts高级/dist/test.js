"use strict";
/* type: “&"合并符号 */
// 情况一: type为对象时，相当于二者对象要求合并
// 情况二: type为单个变量时, 相当于二者，交集
var _a;
let a;
a = {
    name: '张三',
    age: 20,
    sex: "男",
    time: new Date()
};
let testInputDE = 'srtring';
; // 多个interface合并核心
const interfaceInput = {
    name: 'SQ',
    age: 24,
    time: new Date,
    addr: 'xxxxxx'
};
function speedFn(n) {
    if ('runSpeed' in n) {
        console.log(n.runSpeed);
    }
    let speed;
    switch (n.type) { // 函数中，必须要有类型判断，否则将无法正常使用
        case "bired":
            speed = n.flySpeed;
            break;
        case "cat":
            speed = n.runSpeed;
            break; 
    }
    console.log(`${n.type} - SPEED: ${speed}`);
}
;
speedFn({ type: 'cat', runSpeed: 666 });
// a) 目的: 声明doucument抓取标签的类型，防止ts报错
// 0. 方法一: <HTMLInputElement>
// 1. 方法二: as HTMLInputElement, "as"告诉ts此乃document抓取的标签类型
// b) "as" 在ts中是类型转换功能
let dev = document.getElementById('userInfo');
// let dev = document.getElementById('userInfo')! as HTMLInputElement;
dev.innerHTML = 'hi there!';
let errorType = {
    email: 'not a valid email'
};
function testLoadFunction(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = testLoadFunction('ztaetr', 'xxx');
console.log(result.split('')); // 报错: 如果没有"函数重载"，那么将报错
/* "?"可选符号 */
// a) 函数中: 告诉ts为可选参数
// b) 索引变量中: 告诉ts我也不知是否能索引成功
// c) 目的: 告诉ts不要因为不确定变量来报错
const axiosUserDate = {
    id: 'xxx',
    name: 'zt',
    // job: { title: 'ceo', des: 'testxxx' }
};
console.log((_a = axiosUserDate === null || axiosUserDate === void 0 ? void 0 : axiosUserDate.job) === null || _a === void 0 ? void 0 : _a.title);
//"?": 保证索引数据不存在js也能正常运行，并返回undefind，但ts会提示错误
// "??"双重可选符，“||”也可以做到其功能，只是“特殊点”不适合
// a) 目的: 给变量备用数据
// b) xx ?? bb: 如果xx值不为 undefined 或者 null，则返回真实数据，否则返回bb准备好的数据;
const testInputDate = '';
const getDate = testInputDate !== null && testInputDate !== void 0 ? testInputDate : '备用数据'; // 备用数据
console.log(getDate);
