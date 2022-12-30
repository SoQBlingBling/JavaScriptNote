// 定义装饰器
/*
a)当类被定义时就会 装饰器就会执行
b)实例化时不会执行
c)通过@符来给类或者构造函数绑定装饰器
*/
function myFirst(constructor: Function) {
    console.log(constructor)
}
@myFirst
class SayHi {

    constructor() {
        console.log("hi");
    }
}

//  装饰器工厂
/*
a) constructor: Function: 此参数代表，抓取当前文件中的class代码
b) 注意: constructor参数名称可随意修改
*/
function Logger(locstion: string) {
    return function (constructor: Function) {
        console.log(locstion);
        console.log(constructor);

    }
}
@Logger('hello')
class Person {
    constructor() {

    }
}

// 通过装饰器来渲染h5
function Withtemplate(template: string, tagId: string) {
    return function (constructor: any) {    // 此处必须传入值
        let tagEl = document.getElementById(tagId);
        let p = new constructor()      // 实列化后，可以获取class中的属性
        if (tagEl) {
            tagEl.innerHTML = template;
            tagEl.querySelector('h1')!.textContent = p.name
        }
    }
}
@Withtemplate('<h1>hello</h1>', 'app')
class PersonOne {
    name: string = 'SoQ'
    constructor() {

    }
}
let personOne = new PersonOne()



