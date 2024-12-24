/*

TypeScript 中的类型谓词是函数的一种特殊返回类型，它不仅返回布尔值，而且如果函数返回 true，还会断言参数属于特定类型。
它通常用于用户定义的类型保护函数中，以将变量的类型缩小到特定范围内。语法是 arg is Type，其中 arg 是函数参数，T
ype 是您要检查的类型。

定义 isManager 函数 定义一个名为 isManager 的函数，该函数接受 Person | DogOwner | Manager 类型的对象并返回一个布尔值。
此函数应检查对象上是否存在 managePeople 方法，如果存在则返回 true，如果不存在则返回 false。
此函数的返回类型应为类型谓词：obj is Manager。
运行代码，看看它是否按预期工作。如果员工是经理，
您应该在控制台中看到 delegateTasks 方法的输出。如果员工是人员或狗主人，则应该没有输出。


*/
interface Person{
    name:string,
}
interface DogOwner extends Person{
    dogName:string,
}
interface Manager extends Person{
    managePeople():void,
    delegateTasks(): void;
}
function isManager(item:Person | DogOwner | Manager):item is Manager{
    return  'managePeople' in item;
}
let p = {
    name:'bob'
}
let m = {
    name:'simis',
    managePeople(){},
    delegateTasks(){}
}
console.log(isManager(m));
