// 在 TypeScript 中，函数可以具有类型化参数和返回值，这提供了静态类型检查和自动完成支持。
function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}!!!`);
  }
  
  sayHi('john');
  // sayHi(3)
  // sayHi('peter', 'random');
  
  function calculateDiscount(price: number): number {
    // price.toUpperCase();
    const hasDiscount = true;
    if (hasDiscount) {
      return price;
      // return 'Discount Applied';
    }
    return price * 0.9;
  }
  
  const finalPrice = calculateDiscount(200);
  console.log(finalPrice);
  
  // "any" example
  function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
  }
  const result = addThree(2);
  const someValue = result;
  
  // run time error
  someValue.myMethod();