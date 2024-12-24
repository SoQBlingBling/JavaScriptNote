// 创建一个 number[] 类型的数组temperatures并为其分配一些值。然后尝试向其中添加一个字符串值。
// 创建一个 string[] 类型的数组 colors 并为其分配一些值。然后尝试向其添加一个布尔值。
// 创建一个 (number | string)[] 类型的数组混合数组并为其分配一些值。然后尝试向其添加一个布尔值
    let temperatures:number[] = [1,3];
    // temperatures.push('hi') 类型“string”的参数不能赋给类型“number”的参数。

    let colors:string[] = ['red','green'];
    // colors.push(true) 类型“boolean”的参数不能赋给类型“string”的参数。

    let sum:(number|string)[] =[1,'hi'] ;
    // sum.push(false) 类型“boolean”的参数不能赋给类型“string | number”的参数

