//在 TypeScript 中，如果要在构造函数中使用创建和初始化类属性的简写，则需要使用 public、private 或 protected 访问修饰符。
class Book {
    private checkedOut: boolean = false;
    constructor(public readonly title: string, public author: string) {}
  }