"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 定义装饰器
/*
a)当类被定义时就会 装饰器就会执行
b)实例化时不会执行
c)通过@符来给类或者构造函数绑定装饰器
*/
function myFirst(constructor) {
    console.log(constructor);
}
let SayHi = class SayHi {
    constructor() {
        console.log("hi");
    }
};
SayHi = __decorate([
    myFirst,
    __metadata("design:paramtypes", [])
], SayHi);
//  装饰器工厂
/*
a) constructor: Function: 此参数代表，抓取当前文件中的class代码
b) 注意: constructor参数名称可随意修改
*/
function Logger(locstion) {
    return function (constructor) {
        console.log(locstion);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
    }
};
Person = __decorate([
    Logger('hello'),
    __metadata("design:paramtypes", [])
], Person);
// 通过装饰器来渲染h5
function Withtemplate(template, tagId) {
    return function (constructor) {
        let tagEl = document.getElementById(tagId);
        let p = new constructor(); // 实列化后，可以获取class中的属性
        if (tagEl) {
            tagEl.innerHTML = template;
            tagEl.querySelector('h1').textContent = p.name;
        }
    };
}
let PersonOne = class PersonOne {
    constructor() {
        this.name = 'SoQ';
    }
};
PersonOne = __decorate([
    Withtemplate('<h1>hello</h1>', 'app'),
    __metadata("design:paramtypes", [])
], PersonOne);
let personOne = new PersonOne();
