//在 TypeScript 中，联合类型允许变量保存多个不同类型的值，使用 | 运算符指定。它还可用于指定变量可以保存多个特定值之一。
let tax: number | string = 10;
tax = 100;
tax = '$10';

// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';