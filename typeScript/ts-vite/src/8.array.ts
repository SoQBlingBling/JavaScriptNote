// TypeScript 中，数组用于在单个变量中存储多个值。您可以使用类型注释定义数组可以容纳的元素类型。
let prices: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];
// fruit.push(1);
// let people: string[] = ['bobo', 'peter', 1];
//
// be careful "[]" means literally empty array
// let randomValues: [] = [1];

// be careful with inferred array types
// let names = ['peter', 'susan'];
// let names = ['peter', 'susan', 1];
let array: (string | boolean)[] = ['apple', true, 'orange', false];