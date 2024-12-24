//!类型别名是一种给类型命名的方法。它可以表示原始类型、联合类型、交集类型、元组和任何其他类型。定义后，别名可以在任何位置代替实际类型使用。
type Person = {
    name: string;
    age: number;
  };
  
  let john: Person = { name: 'John', age: 30 };

//!接口是一种为对象的特定结构定义契约的方式。
// 主要区别

// 类型别名可以表示原始类型、联合类型、交集类型、元组等，而接口主要用于表示对象的形状。
// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = 'up' | 'down' | 'left' | 'right';

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = 'up';
/*
可以使用声明合并来合并接口。如果您多次定义同名的接口，TypeScript 将合并它们的定义。类型别名不能以这种方式合并。

接口可以由类实现，但类型别名不能。

类型别名可以使用计算属性，但接口不能。
*/
interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let john = new Employee('John');
john.greet(); // Outputs: Hello, my name is John
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };