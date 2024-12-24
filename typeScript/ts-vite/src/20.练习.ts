// 创建一个名为 processData 的函数，它接受两个参数：

// 第一个参数 input 应该是联合类型，可以是字符串也可以是数字。
// 第二个参数 config 应该是一个具有布尔类型反向属性的对象，默认情况下“reverse”应该是 false
// 该函数的行为应如下：

// 如果输入是数字类型，则函数应该返回该数字的平方。
// 如果输入是字符串类型，则该函数应返回大写的字符串。
// 如果配置对象上的反向属性为真，并且输入是一个字符串，则该函数应该返回大写的反转字符串。

function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
  ): string | number {
    if (typeof input === 'number') {
      return input * input;
    } else {
      return config.reverse
        ? input.toUpperCase().split('').reverse().join('')
        : input.toUpperCase();
    }
  }
  
  console.log(processData(10)); // Output: 100
  console.log(processData('Hello')); // Output: HELLO
  console.log(processData('Hello', { reverse: true })); // Output: OLLEH