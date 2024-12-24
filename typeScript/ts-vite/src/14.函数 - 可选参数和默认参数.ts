/*

在 TypeScript 中，默认参数值是可选参数的替代值。当您为参数提供默认值时，实际上是将其变为可选的，
因为您指定了函数在没有为该参数提供参数时将使用的值。

但是，具有默认值的参数和可选参数之间存在一个关键区别。如果参数具有默认值，并且您在调用函数时没有为该参数提供实参，则该函数将使用默认值。
但是，如果参数是可选的（用 ? 表示），并且您在调用函数时没有为该参数提供实参，则函数内部的参数值将未定义。

*/
function item (name:string,age?:number):{name:string,age?:number}{
    return {name,age}
}
 console.log(  item('张三'));

function calculateprice (price:number,discount:number = 0 ):number{
    return price-discount
}
let priceAfterDiscount = calculateprice(100,20);