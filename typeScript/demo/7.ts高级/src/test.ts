/*
type: “&"合并符号 
*/
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

// a) 目的: 声明doucument抓取标签的类型，防止ts报错
// 0. 方法一: <HTMLInputElement>
// 1. 方法二: as HTMLInputElement, "as"告诉ts此乃document抓取的标签类型
// b) "as" 在ts中是类型转换功能
let dev = <HTMLParagraphElement>document.getElementById('userInfo')!;
// let dev = document.getElementById('userInfo')! as HTMLInputElement;

dev.innerHTML = 'hi there!';

/* interface不确定属性名称构建 */
interface ErrorContainer {
    // 设置键值为字符串类型  设置值为字符串类型
    [prop: string]: string

}

let errorType: ErrorContainer = {
    email: 'not a valid email'
}

/* 函数重载：告诉ts什么样的赋值给什么样的类型结果 */
// a) 目的: 告诉ts函数什么样的赋值给什么样的类型结果，防止加工函数然后值时报错
function testLoadFunction(a: string, b: string): string; // 函数重载
function testLoadFunction(a: number, b: number): number; // 函数重载
function testLoadFunction(a: number, b: string): string;//函数重载
function testLoadFunction(a: string, b: number): string;//函数重载

function testLoadFunction(a: number | string, b: number | string) {// 原始函数
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = testLoadFunction('ztaetr', 'xxx');
console.log(result.split(''))       // 报错: 如果没有"函数重载"，那么将报错




/* "?"可选符号 */
// a) 函数中: 告诉ts为可选参数
// b) 索引变量中: 告诉ts我也不知是否能索引成功
// c) 目的: 告诉ts不要因为不确定变量来报错
const axiosUserDate = {
    id: 'xxx',
    name: 'zt',
    // job: { title: 'ceo', des: 'testxxx' }
}
console.log(axiosUserDate?.job?.title);
//"?": 保证索引数据不存在js也能正常运行，并返回undefind，但ts会提示错误


// "??"双重可选符，“||”也可以做到其功能，只是“特殊点”不适合
// a) 目的: 给变量备用数据
// b) xx ?? bb: 如果xx值不为 undefined 或者 null，则返回真实数据，否则返回bb准备好的数据;
const testInputDate = '';
const getDate = testInputDate ?? '备用数据';// 备用数据
console.log(getDate);