//JavaScript 中的计算属性是一种功能，可让您在对象上动态创建属性键。这是通过将表达式括在方括号 [] 中来实现的，该表达式在创建对象时计算属性名称。
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };