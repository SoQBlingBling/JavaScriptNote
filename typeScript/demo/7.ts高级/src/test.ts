/* type: “&"合并符号 */
// 情况一: type为对象时，相当于二者对象要求合并
// 情况二: type为单个变量时, 相当于二者，交集

type TestA = {
    name: string;
    age: number;
}
type TestB = {
    name: string;
    sex: string;
    time: Date;
}
type TestC = TestA & TestB

let a: TestC;
a = {
    name: '张三',
    age: 20,
    sex: "男",
    time: new Date()
}

type TestD = string | number;
type TestE = boolean | string;

type TestDE = TestD & TestE;

let testInputDE: TestDE = 'srtring'

/* interface多个合并方式 */
// extends:  interface InterfaceAnd extends InterfaceTestA, InterfaceTestB{};
interface InterfaceTestA {
    name: string,
    age: number,
    time: Date,
}
interface InterfaceTestB {
    addr: string
}
interface InterfaceAnd extends InterfaceTestA, InterfaceTestB { }; // 多个interface合并核心
const interfaceInput: InterfaceAnd = {
    name: 'SQ',
    age: 24,
    time: new Date,
    addr: 'xxxxxx'
}

interface Bired {
    type: 'bired',
    flySpeed: number
}
interface Cat {
    type: 'cat',
    runSpeed: number
}

type orTest = Bired | Cat
function speedFn(n: orTest) {
    if ('runSpeed' in n) {
        console.log(n.runSpeed)
    }
    let speed: number;
    switch (n.type) {                       // 函数中，必须要有类型判断，否则将无法正常使用
        case "bired":
            speed = n.flySpeed;
            break;
        case "cat":
            speed = n.runSpeed;
            break;
    }
    console.log(`${n.type} - SPEED: ${speed}`);
};

speedFn({ type: 'cat', runSpeed: 666 });

let dev = <HTMLInputElement>document.getElementById('userInfo')!;
// let dev = document.getElementById('userInfo')! as HTMLInputElement;

dev.innerHTML = 'hi there!';