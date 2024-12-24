//在 TypeScript 中，接口是一种为对象的特定结构定义契约的方式。然后，类可以使用此契约来确保其遵循接口定义的结构。

//当一个类实现一个接口时，它本质上承诺它将提供接口中定义的所有属性和方法。如果没有，TypeScript 将在编译时抛出错误。
interface IPerson {
    name: string;
    age: number;
    greet(): void;
  }
  
  class Person implements IPerson {
    constructor(public name: string, public age: number) {}
  
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
  }
  
  const hipster = new Person('shakeAndBake', 100);
  hipster.greet();