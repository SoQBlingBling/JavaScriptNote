"use strict";
var TestClass = /** @class */ (function () {
    function TestClass(n) {
        this.name = n;
    }
    TestClass.prototype.play = function (n) {
        console.log(this.name + '正在' + n);
    };
    return TestClass;
}());
var b = new TestClass('王五');
b.play('吃饭');
//# sourceMappingURL=interfaceExtends.js.map