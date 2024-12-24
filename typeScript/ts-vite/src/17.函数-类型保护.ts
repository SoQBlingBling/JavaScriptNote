// 您的任务是创建一个名为 processInput 的函数，该函数接受联合类型字符串 | 数字的参数。该函数的行为应如下：

// 如果输入是数字类型，则函数应将该数字乘以 2 并将结果记录到控制台。
// 如果输入是字符串类型，则该函数应将字符串转换为大写并将结果记录到控制台。
function processInput (test:string|number):undefined{
    if(typeof test ==='string'){
        console.log(test.toLocaleUpperCase());
        
    }else if(typeof test==='number' ){
        console.log(test*2);
        
    }
}
processInput('hi')

//在此示例中，processInput 函数接受一个参数 input，该参数可以是字符串或数字。
//在函数内部，我们使用类型保护 (typeof input === 'number') 在运行时检查输入的类型。
//如果输入是数字，我们会将其加倍。如果输入是字符串，我们会将其转换为大写。