// 在 TypeScript 中，Tuple 是一种特殊类型，它允许您创建一个数组，其中固定数量的元素的类型是已知的，但不必相同 - 
// 换句话说，它是一个具有固定长度且按固定类型排序的数组。当您想要将不同类型的值组合在一起时，这很有用。

// 当你想从一个函数返回多个值时，元组很有用。

// 默认情况下，TypeScript 中的元组不是只读的。这意味着你可以修改元组中元素的值。但是，
// TypeScript 确实提供了一种使用 readonly 关键字使元组变为只读的方法。
let person: [string, number] = ['john', 25];
console.log(person[0]); // Outputs: john
console.log(person[1]); // Outputs: 25

let john: [string, number?] = ['john'];

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]); // Outputs: john
console.log(randomPerson[1]);

// let susan: [string, number] = ['susan', 25];
// susan[0] = 'bob';
// susan.push('some random value');

let susan: readonly [string, number] = ['susan', 25];
// susan[0] = 'bob';
// susan.push('some random value');
console.log(susan);