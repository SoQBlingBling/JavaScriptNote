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
//通过 装饰器修改this的指向
function changeThis(targ, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const objDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFun = originalMethod.bind(this);
            return bindFun;
        }
    };
    // 替换旧的描述方法
    return objDescriptor;
}
class Printer {
    constructor() {
        this.message = '工作中';
    }
    priterMsg() {
        console.log(111);
        console.log(this);
    }
}
__decorate([
    changeThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "priterMsg", null);
let p = new Printer();
let btn = document.querySelector("button");
// 通过addeventListenner this 的指向为事件源  
// 可以通过箭头函数改变this指向 或者通过 bind方法改变this指向
// btn!.addEventListener('click',()=>p.priterMsg())
// btn!.addEventListener('click',p.priterMsg.bind(p))
btn.addEventListener("click", p.priterMsg);
