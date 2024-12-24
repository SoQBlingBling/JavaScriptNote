// 在 JavaScript 中，剩余参数在参数名称前用三个点 (...) 表示，允许函数接受任意数量的参数。
// 这些参数被收集到一个数组中，可以在函数内访问
function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
  
    let total = numbers.reduce((previous, current) => {
      return previous + current;
    }, 0);
    return `${message} ${total}`;
  }
  
  let result = sum('The total is:', 1, 2, 3, 4, 5); 