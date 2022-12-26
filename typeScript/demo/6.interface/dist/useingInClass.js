"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.testFun = function (str) {
        console.log('hello' + str);
    };
    return Person;
}());
var a;
a = new Person('hh');
console.log(a);
//# sourceMappingURL=useingInClass.js.map