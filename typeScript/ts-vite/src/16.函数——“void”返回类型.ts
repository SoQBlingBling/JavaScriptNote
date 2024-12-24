//在 TypeScript 中，void 是一种特殊类型，表示没有值。当用作函数返回类型时，void 表示该函数不返回值。
function logMessage(message: string): void {
    console.log(message);
  }
  
  logMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!
//  在 TypeScript 中，使用 void 返回类型声明的函数仍然可以返回一个值，但是该值将被忽略。例如，以下代码是有效的 TypeScript：
function logMessage1(message: string): void {
    console.log(message);
    //return 'This value is ignored'; //此时返回函数将报错

  }
  
  logMessage1('Hello, TypeScript!'); // Output: Hello, TypeScript!