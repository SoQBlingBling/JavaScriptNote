// 创建一个字符串类型的变量并尝试在其上调用字符串方法。
let str = 'hello';
str.toLocaleLowerCase()
// 创建一个数字类型的变量并尝试对其执行数学运算。
let num = 1;
num+=1;
// 创建一个布尔类型的变量并尝试对其执行逻辑运算。
let flag:boolean = false;
flag = !flag ? true:false;
// 尝试为每个变量分配不同类型的值并观察 TypeScript 编译器的响应。
    // str = 123  不能将类型“number”分配给类型“string”。
    // num = 'hi' 不能将类型“string”分配给类型“number”。
    // flag = 'test'  不能将类型“string”分配给类型“boolean”。