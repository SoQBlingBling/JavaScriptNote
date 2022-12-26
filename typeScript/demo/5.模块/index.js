"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserItem = /** @class */ (function () {
    function UserItem(id, n) {
        this.id = id;
        this.employees = [];
        this.sex = '';
        this.userName = n;
    }
    UserItem.prototype.describe = function () {
        console.log(this.userName);
    };
    UserItem.prototype.addEmployees = function (item) {
        this.employees.push(item);
    };
    UserItem.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    UserItem.printuserName = function (n) {
        return { userName: n };
    };
    UserItem.staticTest = '456';
    return UserItem;
}());
var zs = new UserItem(20, '张三');
console.log(zs);
// zs.id = 30
zs.describe();
zs.addEmployees('李四');
zs.printEmployees();
// const accountingCopy = {
//     userName:'ww',
//     describe:zs.describe
// }
// accountingCopy.describe()
// 继承
var itClass = /** @class */ (function (_super) {
    __extends(itClass, _super);
    function itClass(id, n) {
        return _super.call(this, id, n) || this;
    }
    return itClass;
}(UserItem));
var ww = new itClass(123, '王五');
ww.describe();
console.log(ww);
console.log(UserItem.printuserName('max'), UserItem.staticTest);
