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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('----------------');
// 属性装饰器
/*
a) 注册类时进行执行
b) 一般有两个参数
*/
/**
 *
 *
 * @param {*} tag    类的原型
 * @param {(string | symbol)} propertyName   key值
 */
function log(tag, propertyName) {
    console.log('--------属性装饰器----------');
    console.log(tag, propertyName);
}
// 访问器装饰器 
/*

普通函数的target:类的prototype原型
静态函数的target:类的构造函数

configurable ： 设置属性是否可以删除或编辑属性值

enumerable ：设置属性是否可以枚举，即是否允许遍历

get ：   获取属性的值

set ：   设置属性的值

*/
/**
 *
 *
 * @param {*} tag  类的原型
 * @param {string} name 方法名
 * @param {PropertyDescriptor} decorator   属性描述（配置）
 */
function log1(tag, name, decorator) {
    console.log('---------访问装饰器---------');
    console.log(tag);
    console.log(name);
    console.log(decorator);
}
//  方法装饰器
/*

configurable ： 设置属性是否可以删除或编辑属性值

enumerable  ： 设置属性是否可以枚举，即是否允许遍历

value  ： 设置属性默认值

writable ： 设置属性是否能够修改

*/
/**
 *
 *
 * @param {*} tag  类的原型
 * @param {string} name 方法名
 * @param {PropertyDescriptor} decorator   属性描述（配置）
 */
function log3(tag, name, decorator) {
    console.log('---------方法装饰器---------');
    console.log(tag);
    console.log(name);
    console.log(decorator);
}
// 参数装饰器
/**
 *
 * @param {*} tag    类的原型
 * @param {string} name    方法名
 * @param {number} position    参数所在的位置 如果是第一个参数那么索引就是0
 *
 */
function log4(tag, name, position) {
    console.log('---------参数装饰器----------');
    console.log(tag);
    console.log(name);
    console.log(position);
}
class Product {
    set setPrice(val) {
        if (val > 0) {
            this.price = val;
        }
        else {
            throw new Error('价格不能为负数');
        }
    }
    constructor(title, p) {
        this.title = title;
        this.price = p;
    }
    getPrice(tax) {
        return this.price * tax;
    }
}
__decorate([
    log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    log1,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "setPrice", null);
__decorate([
    log3,
    __param(0, log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPrice", null);
// 多个装饰器事 渲染顺序
/*
a) 先从, 自上到下执行装饰器: Logger Start --> WithTemplate Start
b) 在从装饰器内部return函数, 自下而上执行: WithTemplate Function --> Logger Function
c)  0. 类装饰器——优先级 4
    1. 方法装饰器——优先级 2
    2. 访问器或属性装饰器——优先级 3
    3. 参数装饰器——优先级 1
    4. 如果同一个类型的装饰器有多个，总是先执行后面的装饰器。
*/ 
