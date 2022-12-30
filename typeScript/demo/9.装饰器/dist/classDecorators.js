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
// 装饰器取代class以及构造函数 示例
function WithtemplateInClass(template, tagId) {
    return function (originalConstructor) {
        // 构造函数语法糖 这个构造函数取代了我们原来的类和原来的构造函数
        //  此处继承只是为了保留原来的class 内容
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('classDecrators');
                let tagEl = document.getElementById(tagId);
                if (tagEl) {
                    tagEl.innerHTML = template;
                    tagEl.querySelector('h2').textContent = this.name;
                }
            }
        };
    };
}
let PersonTwo = class PersonTwo {
    constructor() {
        this.name = 'SoQBling';
    }
};
PersonTwo = __decorate([
    WithtemplateInClass("<h2>hello</h2>", 'app'),
    __metadata("design:paramtypes", [])
], PersonTwo);
/*
如果在此处不进行实例化的话   装饰器仍然会执行但是页面不会进行渲染
因为在上方取代了类和构造函数
在类中突然之间添加了逻辑代码
逻辑代码不会在定义类时执行
*/
// let templateInClass =  new PersonTwo()
