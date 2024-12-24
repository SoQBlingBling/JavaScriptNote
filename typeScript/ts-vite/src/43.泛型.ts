//TypeScript 中的泛型是一种创建可重用代码组件的方法，它可以与多种类型（而不是单一类型）一起使用。

//换句话说，泛型允许您编写可处理任何数据类型的函数或类。您可以将泛型视为一种类型的变量。

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];