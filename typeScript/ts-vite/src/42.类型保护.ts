// 类型保护是 TypeScript 中的一个术语，指的是在特定范围内缩小对象类型的能力。这通常使用检查对象类型的条件语句来实现。
// 在 TypeScript 的上下文中，类型保护是执行运行时检查以保证某些范围内类型的某种表达式。


//!  1 typeof  

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true; 
/**
 * 
 * 
 * 定义函数 checkValue，它接受一个 ValueType 类型的参数值。
 *  在函数内部，使用 if 语句检查值是否为字符串类型。如果是，则将值转换为小写并记录下来，然后从函数返回。
 *如果 value 不是字符串，则使用另一个 if 语句检查 value 是否为数字类型。如果是，则将 value 格式化为两位小数，然后从函数返回。
 *如果值既不是字符串也不是数字，则它必须是布尔值。记录字符串“boolean: ”后跟布尔值。
 *最后，以value为参数调用checkValue函数。
 * 
 * 
 */

 function checkValue(value:ValueType) {
    if(typeof value==='string'){
        value= value.toLowerCase()
        return value
    }
    if(typeof value==='number'){
        value = value.toFixed(2)
    }
}
//! 2 平等缩小
//在 TypeScript 中，相等性缩小是类型缩小的一种形式，当你在代码中使用 === 或 !== 等相等性检查时会发生这种情况
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;
/**
 * 定义一个名为 makeSound 的函数，它接受一个 Animal 类型的参数 animal。
在函数内部，使用 if 语句检查 animal.type 是否为“dog”。
如果 animal.type 为 'dog'，则 TypeScript 知道此块中的 animal 是 Dog。在这种情况下，调用 animal 的 bark 方法。
如果 animal.type 不是 'dog'，TypeScript 就会在 else 块中知道 animal 是 Cat。在这种情况下，调用 animal 的 meow 方法。
现在，你可以使用 Animal 作为参数来调用 makeSound 函数。该函数将根据动物的类型调用适当的方法（吠叫或喵喵叫）。
 * 
*/

function makeSound(animal: Animal) {
    if (animal.type === 'dog') {
      // TypeScript knows that `animal` is a Dog in this block
      animal.bark();
    } else {
      // TypeScript knows that `animal` is a Cat in this block
      animal.meow();
    }
  }