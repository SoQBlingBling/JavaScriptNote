"use strict";
/* type: “&"合并符号 */
// 情况一: type为对象时，相当于二者对象要求合并
// 情况二: type为单个变量时, 相当于二者，交集
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
let dev = document.getElementById('userInfo');
// let dev = document.getElementById('userInfo')! as HTMLInputElement;
dev.innerHTML = 'hi there!';
