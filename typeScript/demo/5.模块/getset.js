"use strict";
var TestClass = /** @class */ (function () {
    function TestClass() {
        this.testprivate = '';
    }
    Object.defineProperty(TestClass.prototype, "testGet", {
        get: function () {
            if (this.testprivate) {
                return this.testprivate;
            }
            throw new Error('没有数据');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TestClass.prototype, "testSet", {
        set: function (val) {
            if (!val) {
                throw new Error('请传入正确的数据');
            }
            this.testprivate = val;
        },
        enumerable: false,
        configurable: true
    });
    return TestClass;
}());
var newclass = new TestClass();
newclass.testSet = '私有数据通过set方法进行访问';
newclass.testGet;
