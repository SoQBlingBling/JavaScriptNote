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
console.log('----------表单验证demo------------');
const registered = {};
function Required(targ, propName) {
    var _a, _b, _c, _d;
    console.log(registered, '此处打印为变量校验方法', propName);
    registered[targ.constructor.name] = Object.assign(Object.assign({}, registered[targ.constructor.name]), { 
        // [propName]: ['require']
        [propName]: [...((_b = (_a = registered[targ.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'require'] });
    console.log([...((_d = (_c = registered[targ.constructor.name]) === null || _c === void 0 ? void 0 : _c[propName]) !== null && _d !== void 0 ? _d : []), 'require']);
}
function positiveNumber(targ, propName) {
    var _a, _b, _c, _d;
    registered[targ.constructor.name] = Object.assign(Object.assign({}, registered[targ.constructor.name]), { 
        // [propName]: ['positive']
        [propName]: [...((_b = (_a = registered[targ.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
    console.log([...((_d = (_c = registered[targ.constructor.name]) === null || _c === void 0 ? void 0 : _c[propName]) !== null && _d !== void 0 ? _d : []), 'positive']);
}
function validate(obj) {
    const objValidatorConfig = registered[obj.constructor.name];
    console.log(Boolean(objValidatorConfig), obj);
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            console.log(validator);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required,
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    positiveNumber,
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
// 阻止表单提交
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let titleEl = document.querySelector('#title');
    let priceEl = document.querySelector('#price');
    let title = titleEl.value;
    let price = +priceEl.value;
    let creatCourse = new Course(title, price);
    console.log(creatCourse);
    if (!validate(creatCourse)) {
        alert('出错叻');
    }
});
