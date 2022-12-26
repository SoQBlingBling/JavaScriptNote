// type addFn = (number1:number,number2:number)=>number;
interface addFn {
    (number1: number, number2: number): number;
}
let addFun: addFn;
addFun = (n1:number,n2:number)=>{
    return n1+n2
}