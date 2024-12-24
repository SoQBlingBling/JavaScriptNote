//TypeScript 中的未知类型是 any 类型的类型安全对应物。这就像说变量可以是任何东西，但在使用它之前我们需要执行一些类型检查。

//“error instanceof Error” 检查错误对象是否是 Error 类的实例。
let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = 'Hello World'; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  // TypeScript knows that unknownValue is a string in this block
  console.log(unknownValue.toFixed(2)); // OK
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log('there was an error....');
  }
}