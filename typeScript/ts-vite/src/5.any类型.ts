//在 TypeScript 中，“any”类型是处理现有 JavaScript 的强大方式，允许您选择退出类型检查并让值通过编译时检查。
//这意味着使用 any 类型声明的变量可以保存任何类型的值。

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; 